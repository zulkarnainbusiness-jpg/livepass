import { passesData } from '../data/passes';
import { alertsData } from '../data/alerts';
import { hierarchyData } from '../data/hierarchy';
import { resourcesData } from '../data/resources';
import { MountainPass, PassAlert, ResourceItem } from '../types';

export const apiService = {
  async getPasses(): Promise<MountainPass[]> {
    // Simulated async API call to support future backend integration
    return Promise.resolve([...passesData]);
  },

  async getPassBySlug(slug: string): Promise<MountainPass | null> {
    const pass = passesData.find(
      p => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase()
    );
    return Promise.resolve(pass || null);
  },

  async getAlerts(): Promise<PassAlert[]> {
    return Promise.resolve([...alertsData]);
  },

  async getHierarchy() {
    return Promise.resolve([...hierarchyData]);
  },

  async getResources(): Promise<ResourceItem[]> {
    return Promise.resolve([...resourcesData]);
  },

  async subscribeAlerts(email: string, passIds?: string[]): Promise<{ success: boolean; message: string }> {
    console.log('Subscribing email to pass alerts:', email, passIds);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Successfully subscribed ${email} to real-time pass alerts!`
        });
      }, 400);
    });
  }
};
