export interface PortfolioEntry {
  slug: string;
  title: string;
  org: string;
  summary: string[];
}

export const portfolio: PortfolioEntry[] = [
  {
    slug: 'music-search-cards',
    title: 'Music search cards',
    org: 'YouTube',
    summary: ['Designed and implemented music search cards.'],
  },
  {
    slug: 'shead',
    title: "Shea'd iOS application",
    org: 'Personal project',
    summary: [
      'iOS app helping people find black-owned businesses in the Bay Area.',
      'Won the Black Ambition Prize. Featured on ABC7 News (2020).',
    ],
  },
  {
    slug: 'audioshake-api',
    title: 'Audioshake API',
    org: 'Audioshake',
    summary: ['Designed and implemented v1 of the Audioshake API.'],
  },
  {
    slug: 'audioshake-widget',
    title: 'Audioshake widget',
    org: 'Audioshake',
    summary: [
      "Embeddable iframe widgets that let non-developer clients host Audioshake's tech on their own site.",
    ],
  },
  {
    slug: 'search-entity-suggest',
    title: 'Search entity suggest',
    org: 'YouTube',
    summary: [
      "Hooked up YouTube's search suggest service on the backend and built the client-side UI, letting users play songs and go to album and artist pages from the search bar.",
    ],
  },
];
