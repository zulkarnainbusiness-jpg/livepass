import { SeoResearchProject, ApiConfig } from '../../types/seoTypes';

const API_CONFIG_KEY = 'lp_seo_api_config';
const PROJECTS_KEY = 'lp_seo_projects_cache';

export class SeoStorageService {
  static getApiConfig(): ApiConfig {
    try {
      const saved = localStorage.getItem(API_CONFIG_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read API config from storage:', e);
    }
    return {
      useLiveGoogleSuggest: true
    };
  }

  static saveApiConfig(config: ApiConfig): void {
    try {
      localStorage.setItem(API_CONFIG_KEY, JSON.stringify(config));
    } catch (e) {
      console.warn('Could not save API config:', e);
    }
  }

  static getSavedProjects(): SeoResearchProject[] {
    try {
      const saved = localStorage.getItem(PROJECTS_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read SEO projects from storage:', e);
    }
    return [];
  }

  static saveProject(project: SeoResearchProject): void {
    try {
      const existing = this.getSavedProjects();
      const updated = [project, ...existing.filter(p => p.id !== project.id)].slice(0, 10);
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save SEO project:', e);
    }
  }

  static deleteProject(projectId: string): void {
    try {
      const existing = this.getSavedProjects();
      const filtered = existing.filter(p => p.id !== projectId);
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(filtered));
    } catch (e) {
      console.warn('Could not delete project:', e);
    }
  }
}
