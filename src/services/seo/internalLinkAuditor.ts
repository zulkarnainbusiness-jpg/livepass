import { InternalLinkSuggestion } from '../../types/seoTypes';
import { passesData, getPassUrl } from '../../data/passes';

export class InternalLinkAuditor {
  /**
   * Scans existing mountain passes and generates strategic internal linking recommendations
   */
  static generateInternalLinks(seedPassName?: string): InternalLinkSuggestion[] {
    const suggestions: InternalLinkSuggestion[] = [];

    // Find the target pass if specified
    const targetPass = seedPassName
      ? passesData.find(p => p.name.toLowerCase().includes(seedPassName.toLowerCase()) || seedPassName.toLowerCase().includes(p.name.toLowerCase()))
      : passesData[0];

    if (targetPass) {
      const targetUrl = getPassUrl(targetPass);

      // 1. Link from Regional Hub / Passes Browser
      suggestions.push({
        sourcePageTitle: `All Mountain Passes Directory (/passes)`,
        sourceUrl: '/passes',
        targetPageTitle: `${targetPass.name} Detail Page`,
        targetUrl,
        suggestedAnchor: `${targetPass.name} road conditions`,
        reason: `Passes directory should feature anchor text targeting the primary high-opportunity query "${targetPass.name} road conditions".`
      });

      // 2. Link from Interactive Map Page
      suggestions.push({
        sourcePageTitle: `Interactive Mountain Pass Map (/map)`,
        sourceUrl: '/map',
        targetPageTitle: `${targetPass.name} Detail Page`,
        targetUrl,
        suggestedAnchor: `Live ${targetPass.name} webcam & status`,
        reason: `Map popup pin should link to the pass detail page with descriptive anchor text.`
      });

      // 3. Link from Nearby Passes in the same state/country
      const sameRegionPasses = passesData.filter(p => p.id !== targetPass.id && p.state === targetPass.state);
      for (const nearby of sameRegionPasses.slice(0, 3)) {
        suggestions.push({
          sourcePageTitle: `${nearby.name} (${nearby.state})`,
          sourceUrl: getPassUrl(nearby),
          targetPageTitle: `${targetPass.name} (${targetPass.state})`,
          targetUrl,
          suggestedAnchor: `Alternative route: ${targetPass.name} (${targetPass.highway})`,
          reason: `Cross-linking nearby corridor passes in ${targetPass.state} transfers page rank and provides alternative detour routes for drivers.`
        });
      }

      // 4. Link from Alerts Page
      suggestions.push({
        sourcePageTitle: `Real-Time Alerts & Restrictions (/alerts)`,
        sourceUrl: '/alerts',
        targetPageTitle: `${targetPass.name} Detail Page`,
        targetUrl,
        suggestedAnchor: `${targetPass.name} current status`,
        reason: `Active winter weather advisories and chain law bulletins should link back to full summit camera feeds.`
      });
    }

    return suggestions;
  }
}
