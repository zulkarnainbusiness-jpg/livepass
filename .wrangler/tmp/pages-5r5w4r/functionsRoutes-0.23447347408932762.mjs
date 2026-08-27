import { onRequestGet as __api_passes_bernina_forecast_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\bernina\\forecast.ts"
import { onRequestGet as __api_passes_bernina_road_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\bernina\\road.ts"
import { onRequestGet as __api_passes_bernina_status_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\bernina\\status.ts"
import { onRequestGet as __api_passes_bernina_weather_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\bernina\\weather.ts"
import { onRequestGet as __api_passes_bernina_webcams_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\bernina\\webcams.ts"
import { onRequestGet as __api_passes_gotthard_road_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\gotthard\\road.ts"
import { onRequestGet as __api_passes_gotthard_status_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\gotthard\\status.ts"
import { onRequestGet as __api_passes_gotthard_tunnel_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\gotthard\\tunnel.ts"
import { onRequestGet as __api_passes_gotthard_weather_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\gotthard\\weather.ts"
import { onRequestGet as __api_passes_gotthard_webcams_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\gotthard\\webcams.ts"
import { onRequestGet as __api_passes_grimsel_road_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\grimsel\\road.ts"
import { onRequestGet as __api_passes_grimsel_status_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\grimsel\\status.ts"
import { onRequestGet as __api_passes_grimsel_weather_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\grimsel\\weather.ts"
import { onRequestGet as __api_passes_grimsel_webcams_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\grimsel\\webcams.ts"
import { onRequestPost as __api_admin_override_ts_onRequestPost } from "D:\\livepass\\functions\\api\\admin\\override.ts"
import { onRequestGet as __api_admin_seed_ts_onRequestGet } from "D:\\livepass\\functions\\api\\admin\\seed.ts"
import { onRequestPost as __api_admin_seed_ts_onRequestPost } from "D:\\livepass\\functions\\api\\admin\\seed.ts"
import { onRequestGet as __api_admin_stats_ts_onRequestGet } from "D:\\livepass\\functions\\api\\admin\\stats.ts"
import { onRequestGet as __api_cron_verify_ts_onRequestGet } from "D:\\livepass\\functions\\api\\cron\\verify.ts"
import { onRequestPost as __api_cron_verify_ts_onRequestPost } from "D:\\livepass\\functions\\api\\cron\\verify.ts"
import { onRequestGet as __api_passes_bernina_index_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\bernina\\index.ts"
import { onRequestGet as __api_passes_gotthard_index_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\gotthard\\index.ts"
import { onRequestGet as __api_passes__slug__ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\[slug].ts"
import { onRequestGet as __api_passes_index_ts_onRequestGet } from "D:\\livepass\\functions\\api\\passes\\index.ts"

export const routes = [
    {
      routePath: "/api/passes/bernina/forecast",
      mountPath: "/api/passes/bernina",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_bernina_forecast_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/bernina/road",
      mountPath: "/api/passes/bernina",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_bernina_road_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/bernina/status",
      mountPath: "/api/passes/bernina",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_bernina_status_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/bernina/weather",
      mountPath: "/api/passes/bernina",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_bernina_weather_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/bernina/webcams",
      mountPath: "/api/passes/bernina",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_bernina_webcams_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/gotthard/road",
      mountPath: "/api/passes/gotthard",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_gotthard_road_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/gotthard/status",
      mountPath: "/api/passes/gotthard",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_gotthard_status_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/gotthard/tunnel",
      mountPath: "/api/passes/gotthard",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_gotthard_tunnel_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/gotthard/weather",
      mountPath: "/api/passes/gotthard",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_gotthard_weather_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/gotthard/webcams",
      mountPath: "/api/passes/gotthard",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_gotthard_webcams_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/grimsel/road",
      mountPath: "/api/passes/grimsel",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_grimsel_road_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/grimsel/status",
      mountPath: "/api/passes/grimsel",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_grimsel_status_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/grimsel/weather",
      mountPath: "/api/passes/grimsel",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_grimsel_weather_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/grimsel/webcams",
      mountPath: "/api/passes/grimsel",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_grimsel_webcams_ts_onRequestGet],
    },
  {
      routePath: "/api/admin/override",
      mountPath: "/api/admin",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_override_ts_onRequestPost],
    },
  {
      routePath: "/api/admin/seed",
      mountPath: "/api/admin",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_seed_ts_onRequestGet],
    },
  {
      routePath: "/api/admin/seed",
      mountPath: "/api/admin",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_seed_ts_onRequestPost],
    },
  {
      routePath: "/api/admin/stats",
      mountPath: "/api/admin",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_stats_ts_onRequestGet],
    },
  {
      routePath: "/api/cron/verify",
      mountPath: "/api/cron",
      method: "GET",
      middlewares: [],
      modules: [__api_cron_verify_ts_onRequestGet],
    },
  {
      routePath: "/api/cron/verify",
      mountPath: "/api/cron",
      method: "POST",
      middlewares: [],
      modules: [__api_cron_verify_ts_onRequestPost],
    },
  {
      routePath: "/api/passes/bernina",
      mountPath: "/api/passes/bernina",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_bernina_index_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/gotthard",
      mountPath: "/api/passes/gotthard",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_gotthard_index_ts_onRequestGet],
    },
  {
      routePath: "/api/passes/:slug",
      mountPath: "/api/passes",
      method: "GET",
      middlewares: [],
      modules: [__api_passes__slug__ts_onRequestGet],
    },
  {
      routePath: "/api/passes",
      mountPath: "/api/passes",
      method: "GET",
      middlewares: [],
      modules: [__api_passes_index_ts_onRequestGet],
    },
  ]