import { KeywordItem, SerpCompetitor, ApiConfig } from '../../types/seoTypes';

export interface KeywordDataProvider {
  name: string;
  isConfigured: (config: ApiConfig) => boolean;
  fetchKeywords: (seed: string, options: { country: string; language: string; limit?: number }, config: ApiConfig) => Promise<Partial<KeywordItem>[]>;
}

export interface SerpDataProvider {
  name: string;
  isConfigured: (config: ApiConfig) => boolean;
  fetchSerp: (query: string, options: { country: string; language: string }, config: ApiConfig) => Promise<SerpCompetitor[]>;
}

export interface SearchConsoleDataProvider {
  name: string;
  isConfigured: (config: ApiConfig) => boolean;
  fetchQueryMetrics: (domain: string, config: ApiConfig) => Promise<{ query: string; impressions: number; clicks: number; ctr: number; position: number; page: string }[]>;
}
