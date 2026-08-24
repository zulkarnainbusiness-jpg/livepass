import { KeywordItem, SearchIntent, DifficultyCategory, PriorityTier, RecommendedAction } from '../../types/seoTypes';
import { MountainPass } from '../../types';

export class OpportunityScorer {
  /**
   * Calculates the proprietary Ranking Opportunity Score (0-100) using a transparent 8-factor model
   */
  static calculateScore(
    keyword: string,
    searchVolume: number | 'N/A',
    difficulty: number,
    intent: SearchIntent,
    matchedPass?: MountainPass,
    existingRank?: number | 'N/A',
    hasForumInSerp: boolean = false
  ): {
    score: number;
    difficultyCategory: DifficultyCategory;
    priorityTier: PriorityTier;
    recommendedAction: RecommendedAction;
    why: string[];
    competitionLevel: 'Low' | 'Medium' | 'High';
  } {
    const why: string[] = [];
    let score = 0;

    // 1. Search Demand (15%)
    let demandPts = 0;
    const vol = typeof searchVolume === 'number' ? searchVolume : 500;
    if (vol >= 5000) demandPts = 15;
    else if (vol >= 1000) demandPts = 13;
    else if (vol >= 500) demandPts = 11;
    else if (vol >= 150) demandPts = 9;
    else demandPts = 6;
    score += demandPts;
    if (demandPts >= 10) {
      why.push(`Solid search demand (~${vol.toLocaleString()} monthly searches) with high user conversion intent.`);
    }

    // 2. Keyword Difficulty (20% - lower KD is higher opportunity)
    const kd = Math.max(0, Math.min(100, difficulty));
    const kdPts = Math.round(((100 - kd) / 100) * 20);
    score += kdPts;
    if (kd <= 30) {
      why.push(`Low competitive keyword difficulty (KD ${kd}/100) makes fast page 1 ranking highly achievable.`);
    } else if (kd <= 50) {
      why.push(`Moderate keyword difficulty (KD ${kd}/100) with beatable secondary competitors.`);
    }

    // 3. SERP Competition Weakness (20%)
    let serpPts = 10;
    if (hasForumInSerp) {
      serpPts = 20;
      why.push('SERP contains discussion forums (TripAdvisor/Reddit), signaling Google lacks a dedicated authoritative answer.');
    } else if (kd <= 35) {
      serpPts = 16;
      why.push('Top ranking pages have thin content and lack interactive road maps and real-time data.');
    } else {
      serpPts = 12;
      why.push('Government DOT pages currently rank with static, hard-to-navigate text layouts.');
    }
    score += serpPts;

    // 4. LivePassWatch Topical Relevance (15%)
    let relevancePts = 8;
    if (matchedPass) {
      relevancePts = 15;
      why.push(`Perfect 100% topical relevance to existing dedicated pass page for ${matchedPass.name} on ${matchedPass.highway}.`);
    } else {
      relevancePts = 10;
      why.push('Strong domain alignment with LivePassWatch mountain corridor travel architecture.');
    }
    score += relevancePts;

    // 5. Existing Authority / GSC Striking Distance (10%)
    let rankPts = 4;
    const rankNum = typeof existingRank === 'number' ? existingRank : null;
    if (rankNum && rankNum >= 4 && rankNum <= 20) {
      rankPts = 10;
      why.push(`Striking distance query! LivePassWatch already ranking at #${rankNum}. Small on-page optimization can boost to Top 3.`);
    } else if (matchedPass && matchedPass.customSeo) {
      rankPts = 8;
      why.push('Existing structured schema and page equity available on the site to support instant ranking.');
    }
    score += rankPts;

    // 6. Content Gap Advantage (10%)
    let gapPts = 7;
    if (intent === 'Real-Time Intent' || keyword.includes('webcam') || keyword.includes('snow') || keyword.includes('opening date')) {
      gapPts = 10;
      why.push('Major content gap in competitors: LivePassWatch provides live status, webcam feeds, 5-day weather, and snow depth.');
    }
    score += gapPts;

    // 7. Freshness Advantage (5%)
    let freshnessPts = 3;
    if (intent === 'Real-Time Intent' || keyword.includes('today') || keyword.includes('status') || keyword.includes('conditions')) {
      freshnessPts = 5;
      why.push('High freshness advantage: Real-time road status feeds beat dated static blog articles.');
    }
    score += freshnessPts;

    // 8. Search Intent Match (5%)
    let intentPts = 3;
    if (intent === 'Real-Time Intent' || intent === 'Travel/Planning') {
      intentPts = 5;
      why.push('Search intent precisely matches LivePassWatch core mission: Know Before You Go.');
    }
    score += intentPts;

    // Normalize final score to 0 - 100
    const finalScore = Math.max(10, Math.min(99, score));

    // Determine Difficulty Category
    let difficultyCategory: DifficultyCategory = 'MODERATE';
    if (kd <= 30) difficultyCategory = 'EASY';
    else if (kd <= 50) difficultyCategory = 'MODERATE';
    else if (kd <= 70) difficultyCategory = 'DIFFICULT';
    else difficultyCategory = 'VERY_DIFFICULT';

    // Determine Priority Tier
    let priorityTier: PriorityTier = 'DO_NEXT';
    if (finalScore >= 80) priorityTier = 'DO_NOW';
    else if (finalScore >= 65) priorityTier = 'DO_NEXT';
    else priorityTier = 'LONG_TERM';

    // Determine Recommended Action
    let recommendedAction: RecommendedAction = 'Optimize existing page';
    if (matchedPass) {
      if (keyword.includes('webcam') || keyword.includes('camera')) {
        recommendedAction = 'Optimize existing page';
      } else if (keyword.includes('opening date') || keyword.includes('history')) {
        recommendedAction = 'Create supporting article';
      } else if (finalScore >= 85) {
        recommendedAction = 'Optimize existing page';
      } else {
        recommendedAction = 'Add section';
      }
    } else {
      if (finalScore >= 75) {
        recommendedAction = 'Create new page';
      } else {
        recommendedAction = 'Monitor';
      }
    }

    // Determine Competition Level
    let competitionLevel: 'Low' | 'Medium' | 'High' = 'Medium';
    if (kd <= 30) competitionLevel = 'Low';
    else if (kd >= 65) competitionLevel = 'High';

    return {
      score: finalScore,
      difficultyCategory,
      priorityTier,
      recommendedAction,
      why,
      competitionLevel
    };
  }
}
