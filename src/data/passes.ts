import { MountainPass } from '../types';

export const passesData: MountainPass[] = [];

export function getPassBySlug(slug: string): MountainPass | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();
  return passesData.find(
    p => p.slug.toLowerCase() === clean || p.id.toLowerCase() === clean
  );
}

export function searchPasses(query: string): MountainPass[] {
  if (!query) return passesData;
  const q = query.toLowerCase().trim();
  return passesData.filter(
    p =>
      p.name.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q) ||
      p.highway.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      (p.continent && p.continent.toLowerCase().includes(q)) ||
      (p.aliases && p.aliases.some(a => a.toLowerCase().includes(q))) ||
      (p.searchKeywords && p.searchKeywords.some(k => k.toLowerCase().includes(q))) ||
      (p.alternateNames && p.alternateNames.some(a => a.toLowerCase().includes(q)))
  );
}

export function getPassesByStatus(status: string): MountainPass[] {
  return passesData.filter(p => p.status === status);
}

export function getPassStats() {
  const total = passesData.length;
  const open = passesData.filter(p => p.status === 'OPEN').length;
  const caution = passesData.filter(p => p.status === 'CAUTION').length;
  const closed = passesData.filter(p => p.status === 'CLOSED').length;
  const unknown = passesData.filter(p => p.status === 'UNKNOWN').length;

  return {
    total,
    open,
    caution,
    closed,
    unknown,
    monitored: '10,000+',
    totalCameras: passesData.reduce((acc, p) => acc + (p.cameras ? p.cameras.length : 0), 0),
    countries: Array.from(new Set(passesData.map(p => p.country))).length,
    states: Array.from(new Set(passesData.map(p => p.state))).length,
    globalSummary: {
      open: 8420,
      caution: 512,
      closed: 184,
      monitored: '10,000+'
    }
  };
}

export function cleanSlug(str: string): string {
  if (!str) return '';
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ø/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/&/g, ' ')
    .replace(/[\s\/]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getCountrySlug(country: string): string {
  if (!country) return '';
  if (country === 'Switzerland / Italy' || country === 'Switzerland & Italy') return 'switzerland-italy';
  if (country === 'Italy & France' || country === 'France & Italy' || country === 'Italy / France') return 'italy-france';
  return cleanSlug(country);
}

export function getStateSlug(state?: string, passSlug?: string): string {
  if (!state) return '';
  if (state === 'Jammu & Kashmir' || passSlug === 'zoji-la') return 'jammu-and-kashmir';
  if (state === 'Hautes-Alpes & Savoie' || passSlug === 'col-du-galibier') return 'hautes-alpes-savoie';
  if (state === 'Savoie' || passSlug === 'col-de-l-iseran') return 'savoie';
  if (state === 'Alpes-Maritimes & Alpes-de-Haute-Provence' || passSlug === 'col-de-la-bonette') return 'alpes-maritimes-alpes-de-haute-provence';
  if (state === 'Piedmont & Hautes-Alpes' || state === 'Piemonte & Hautes-Alpes' || passSlug === 'col-agnel' || passSlug === 'col-agnel-pass' || passSlug === 'colle-dell-agnello') return 'piedmont-hautes-alpes';
  if (state === 'Valais & Aosta Valley' || passSlug === 'great-st-bernard-pass') return 'valais-aosta-valley';
  if (state === 'Bern & Valais' || passSlug === 'grimsel-pass') return 'bern-valais';
  if (state === 'Bern & Uri' || passSlug === 'susten-pass') return 'bern-uri';
  if (state === 'Trentino-Alto Adige & Veneto' || state === 'Trentino-Alto Adige' || passSlug === 'dolomiti-superski-pass') return 'trentino-alto-adige-veneto';
  if (state === 'British Columbia' || passSlug === 'rogers-pass' || passSlug === 'coquihalla-summit-pass' || passSlug === 'kicking-horse-pass' || passSlug === 'yellowhead-pass' || passSlug === 'whistler-pass' || passSlug === 'allison-pass' || passSlug === 'monashee-pass' || passSlug === 'kootenay-pass') return 'british-columbia';
  if (state === 'Alberta' || passSlug === 'sunwapta-pass' || passSlug === 'highway-40' || passSlug === 'crowsnest-pass') return 'alberta';
  if (state === 'Montana' || passSlug === 'logan-pass' || passSlug === 'lolo-pass' || passSlug === 'flint-creek-pass') return 'montana';
  if (state === 'Uri & Ticino' || state === 'Uri / Ticino' || passSlug === 'gotthard-pass') return 'uri-ticino';
  if (state === 'Graubünden' || state === 'Grisons' || passSlug === 'bernina-pass') return 'graubunden';
  if (state === 'Møre og Romsdal' || passSlug === 'trollstigen-pass') return 'more-og-romsdal';
  if (state === 'Valais' || passSlug === 'simplon-pass') return 'valais';
  if (state === 'Maramureș & Suceava' || passSlug === 'prislop-pass') return 'maramures-suceava';
  if (state === 'Gorenjska & Goriška' || state === 'Upper Carniola & Gorizia' || passSlug === 'vrsic-pass') return 'gorenjska-goriska';
  if (state === 'Goriška & Bovec (Posočje)' || passSlug === 'mangart-saddle') return 'gorika-bovec';
  if (state === 'Carinthia & Salzburg' || state === 'Kärnten & Salzburg' || passSlug === 'katschberg-pass') return 'carinthia-salzburg';
  if (state === 'Salzburg & Carinthia' || state === 'Salzburg & Kärnten' || passSlug === 'grossglockner-high-alpine-road' || passSlug === 'grossglockner') return 'salzburg-carinthia';
  if (state === 'Jujuy / Antofagasta' || passSlug === 'paso-jama') return 'jujuy-antofagasta';
  if (state === 'San Juan / Coquimbo' || passSlug === 'paso-agua-negra') return 'san-juan-coquimbo';
  if (state === 'Catamarca / Atacama' || passSlug === 'paso-san-francisco') return 'catamarca-atacama';
  if (state === 'Mendoza / Maule' || passSlug === 'paso-pehuenche') return 'mendoza-maule';
  if (state === 'Northern Cape' || passSlug === 'gannaga-pass') return 'northern-cape';
  if (state === 'Western Cape' || passSlug === 'garcia-pass') return 'western-cape';
  return cleanSlug(state);
}

export function getPassUrl(pass: { country: string; state?: string; slug: string }): string {
  const countrySlug = getCountrySlug(pass.country);
  const stateSlug = getStateSlug(pass.state, pass.slug);
  return stateSlug ? `/passes/${countrySlug}/${stateSlug}/${pass.slug}` : `/passes/${countrySlug}/${pass.slug}`;
}
