import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MountainPass } from '../types';
import { getPassUrl } from '../data/passes';
import { Locate, ZoomIn, ZoomOut } from 'lucide-react';
import './MapComponent.css';

interface MapComponentProps {
  passes: MountainPass[];
  selectedPass?: MountainPass | null;
  onPassSelect?: (pass: MountainPass) => void;
  height?: string;
  zoomLevel?: number;
  center?: [number, number];
  showGlobalClusters?: boolean;
}

// Global cluster mock points matching Screenshot 2
const globalClusters = [
  { id: 'c-na-nw', name: 'Pacific Northwest', count: 125, status: 'OPEN', lat: 52.0, lng: -122.0 },
  { id: 'c-na-rockies', name: 'US Rockies & Sierra', count: 342, status: 'OPEN', lat: 40.0, lng: -110.0 },
  { id: 'c-na-sw', name: 'Southwest / Mexico', count: 78, status: 'CAUTION', lat: 26.0, lng: -102.0 },
  { id: 'c-sa-andes-n', name: 'Northern Andes', count: 64, status: 'OPEN', lat: -5.0, lng: -76.0 },
  { id: 'c-sa-andes-s', name: 'Southern Andes', count: 22, status: 'OPEN', lat: -33.0, lng: -70.0 },
  { id: 'c-eu-alps', name: 'European Alps', count: 156, status: 'OPEN', lat: 46.5, lng: 9.5 },
  { id: 'c-as-himalayas', name: 'Himalayas & Karakoram', count: 512, status: 'CAUTION', lat: 33.0, lng: 78.0 },
  { id: 'c-as-east', name: 'East Asia', count: 36, status: 'CLOSED', lat: 34.0, lng: 110.0 },
  { id: 'c-af-south', name: 'Southern Africa', count: 48, status: 'OPEN', lat: -28.0, lng: 28.0 },
  { id: 'c-oc-nz', name: 'Oceania & Southern Alps', count: 18, status: 'OPEN', lat: -42.0, lng: 172.0 },
];

export const MapComponent: React.FC<MapComponentProps> = ({
  passes,
  selectedPass,
  onPassSelect,
  height = '560px',
  zoomLevel = 2,
  center = [25, 0],
  showGlobalClusters = true
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize Leaflet Map
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: center,
        zoom: zoomLevel,
        minZoom: 2,
        maxZoom: 16,
        zoomControl: false,
        attributionControl: false
      });

      // CartoDB Positron / OSM clean light tiles matching screenshot styling
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Attribution
      L.control.attribution({ position: 'bottomright' }).addTo(map);

      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers when passes or filters change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    const currentZoom = map.getZoom();

    // If zoomed out and showGlobalClusters is enabled, render global cluster badges matching Screenshot 2
    if (currentZoom <= 3 && showGlobalClusters) {
      globalClusters.forEach(cluster => {
        const colorClass =
          cluster.status === 'OPEN'
            ? 'cluster-badge-open'
            : cluster.status === 'CLOSED'
            ? 'cluster-badge-closed'
            : 'cluster-badge-caution';

        const customClusterIcon = L.divIcon({
          className: 'custom-cluster-wrapper',
          html: `<div class="map-cluster-badge ${colorClass}">${cluster.count}</div>`,
          iconSize: [42, 42],
          iconAnchor: [21, 21]
        });

        const marker = L.marker([cluster.lat, cluster.lng], { icon: customClusterIcon });
        marker.on('click', () => {
          map.flyTo([cluster.lat, cluster.lng], 6, { duration: 1.2 });
        });
        marker.addTo(markersLayer);
      });
    }

    // Always render individual pass markers
    passes.forEach(pass => {
      const statusColor =
        pass.status === 'OPEN'
          ? '#10B981'
          : pass.status === 'CLOSED'
          ? '#EF4444'
          : pass.status === 'CAUTION'
          ? '#F59E0B'
          : '#3B82F6';

      const passPinIcon = L.divIcon({
        className: 'custom-pass-pin-wrapper',
        html: `
          <div class="map-pass-pin" style="background-color: ${statusColor};">
            <span class="pin-inner-dot"></span>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -16]
      });

      const marker = L.marker([pass.coordinates.lat, pass.coordinates.lng], { icon: passPinIcon });

      const popupContent = document.createElement('div');
      popupContent.className = 'map-popup-card';
      popupContent.innerHTML = `
        <div class="popup-header">
          <div class="popup-title">${pass.name}</div>
          <span class="status-badge status-${pass.status}">${pass.status}</span>
        </div>
        <div class="popup-meta">
          <div>📍 ${pass.state}, ${pass.country}</div>
          <div>🛣️ ${pass.highway} • ⛰️ ${pass.elevationFt.toLocaleString()} ft (${pass.elevationM.toLocaleString()} m)</div>
          <div class="popup-update">⏱️ Updated ${pass.lastUpdated}</div>
        </div>
        <button class="popup-btn" id="btn-view-pass-${pass.id}">View Pass Details →</button>
      `;

      // Attach click handler for button inside popup
      popupContent.querySelector(`#btn-view-pass-${pass.id}`)?.addEventListener('click', () => {
        navigate(getPassUrl(pass));
      });

      marker.bindPopup(popupContent, { maxWidth: 280, className: 'custom-leaflet-popup' });

      marker.on('click', () => {
        if (onPassSelect) onPassSelect(pass);
      });

      marker.addTo(markersLayer);
    });

    // Listen to zoom changes to toggle clusters/pins dynamically
    const handleZoomEnd = () => {
      const zoom = map.getZoom();
      // Re-trigger effect if zoom crossed threshold
    };
    map.on('zoomend', handleZoomEnd);

    return () => {
      map.off('zoomend', handleZoomEnd);
    };
  }, [passes, showGlobalClusters]);

  // Center on selected pass if provided
  useEffect(() => {
    if (selectedPass && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(
        [selectedPass.coordinates.lat, selectedPass.coordinates.lng],
        10,
        { duration: 1.5 }
      );
    }
  }, [selectedPass]);

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleLocateMe = () => {
    if (navigator.geolocation && mapInstanceRef.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          mapInstanceRef.current?.flyTo([position.coords.latitude, position.coords.longitude], 8);
        },
        () => {
          // Fallback to Snoqualmie Pass / PNW
          mapInstanceRef.current?.flyTo([47.4243, -121.4137], 7);
        }
      );
    }
  };

  return (
    <div className="interactive-map-wrapper" style={{ height }}>
      <div ref={mapContainerRef} className="leaflet-map-canvas" />

      {/* Floating Custom Controls on Top Right */}
      <div className="map-floating-controls">
        <button onClick={handleZoomIn} className="map-control-btn" title="Zoom in" aria-label="Zoom in">
          <ZoomIn size={18} />
        </button>
        <button onClick={handleZoomOut} className="map-control-btn" title="Zoom out" aria-label="Zoom out">
          <ZoomOut size={18} />
        </button>
        <button onClick={handleLocateMe} className="map-control-btn" title="My location" aria-label="My location">
          <Locate size={18} />
        </button>
      </div>

      {/* Floating Map Legend on Bottom Left */}
      <div className="map-floating-legend">
        <div className="legend-item">
          <span className="legend-dot open-dot"></span>
          <span>Open</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot caution-dot"></span>
          <span>Caution</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot closed-dot"></span>
          <span>Closed</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot unknown-dot"></span>
          <span>Unknown</span>
        </div>
      </div>
    </div>
  );
};
