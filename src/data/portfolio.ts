export interface CaseStudyMedia {
  /** Path under /public to an image or gif. */
  src: string;
  label: string;
}

export type CaseStudyBullet = string | { text: string; link?: string };

export interface CaseStudySection {
  /** Body paragraphs. Leave empty to render the "copy pending" placeholder. */
  paragraphs?: string[];
  /** Dashed list rendered under the paragraphs. */
  bullets?: CaseStudyBullet[];
  media?: CaseStudyMedia[];
}

export type CaseStudySectionId =
  | 'thesis'
  | 'process'
  | 'iteration'
  | 'final-product'
  | 'learnings';

/**
 * Every case study page renders these five sections, in this order, whether or
 * not the entry has copy for them yet.
 */
export const caseStudySections: { id: CaseStudySectionId; title: string }[] = [
  { id: 'thesis', title: 'Thesis / Overview' },
  { id: 'process', title: 'Process' },
  { id: 'iteration', title: 'Iteration' },
  { id: 'final-product', title: 'Final Product' },
  { id: 'learnings', title: 'Learnings' },
];

export interface PortfolioEntry {
  slug: string;
  title: string;
  org: string;
  summary: string[];
  /** Path under /public to a cover image. Falls back to a placeholder block. */
  cover?: string;
  /** Case study body. Any section left out renders as a placeholder. */
  study?: Partial<Record<CaseStudySectionId, CaseStudySection>>;
}

export const portfolio: PortfolioEntry[] = [
  {
    slug: 'audioshake-api',
    title: 'Audioshake API',
    org: 'Audioshake',
    summary: ['Designed and implemented v1 of the Audioshake API.'],
    cover: '/media/audioshake.png',
    study: {
      thesis: {
        paragraphs: [
          "Make Audioshake's stem separation available as a documented API that clients can build against directly, rather than something reachable only through a first-party client.",
        ],
      },
      'final-product': {
        paragraphs: [
          'v1 of the Audioshake API, launched alongside the developer documentation site.',
        ],
        bullets: [
          {
            text: 'A Python library and CLI, distributed via PyPI',
            link: 'https://pypi.org/project/audioshake/',
          },
          'A credit and invoicing system built on Stripe, letting clients sign up, buy credits, and start calling the API immediately — replacing a manual process where they needed a first-party client or had to request tokens from us directly',
          'A content-blocking microservice preventing clients from uploading and splitting copyrighted content',
          'Node.js/TypeScript services, containerized and scaled via AWS ELB, backed by S3 and RDS',
        ],
        media: [{ src: '/media/audioshake.png', label: 'Audioshake API' }],
      },
    },
  },
  {
    slug: 'audioshake-widget',
    title: 'Audioshake widget',
    org: 'Audioshake',
    summary: [
      "Embeddable iframe widgets that let non-developer clients host Audioshake's tech on their own site.",
    ],
    cover: '/media/widget/widget-clean.png',
    study: {
      thesis: {
        paragraphs: [
          "Non-developer clients wanted Audioshake's separation on their own site without writing anything against the API. The widget had to drop into a host page and do the whole job — pick up the audio, run it, hand back the stems.",
        ],
      },
      process: {
        paragraphs: ['Delivered as an embeddable iframe that handles the full round trip.'],
        bullets: [
          'Detects audio URLs from elements on the host page',
          'Polls the API for processing progress',
          'Zips up the resulting stems for download',
        ],
      },
      'final-product': {
        media: [
          { src: '/media/widget/widget-clean.png', label: 'Widget' },
          { src: '/media/widget/widget-select.png', label: 'Stem selection' },
          { src: '/media/widget/widget-download.png', label: 'Download' },
          { src: '/media/lyrics-widget-demo.png', label: 'Lyrics widget' },
        ],
      },
    },
  },
  {
    slug: 'music-search-cards',
    title: 'Music search cards',
    org: 'YouTube',
    summary: ['Designed and implemented music search cards.'],
    cover: '/media/music-search-cards.png',
    study: {
      'final-product': {
        media: [{ src: '/media/music-search-cards.png', label: 'Music search cards' }],
      },
    },
  },
  {
    slug: 'shead',
    title: "Shea'd iOS application",
    org: 'Personal project',
    summary: [
      'iOS app helping people find black-owned businesses in the Bay Area.',
      'Won the Black Ambition Prize. Featured on ABC7 News (2020).',
    ],
    cover: '/media/shead.png',
    study: {
      thesis: {
        paragraphs: [
          'I moved back to the Bay Area in 2018 after spending the last four years at Morehouse College. It was my first time experiencing the Bay Area as an adult, and the first time I experienced San Francisco and Oakland as a result.',
          "I had watched Killer Mike's documentary about black businesses, as well as absorbed the constant feedback from friends and colleagues about how difficult it was to find black businesses in the Bay Area. There were a bunch of lists and docs everywhere, so friends and I decided to build an app based on geolocation that would show you black businesses where you currently were.",
        ],
      },
      process: {
        paragraphs: [
          'It started off pretty basic. We wanted to be able to do something outside of work that was beneficial to our community.',
          "We first collected all the disparate lists on the internet and from the ERG sheets at the companies we were at. We asked people in our respective communities to point out to us what businesses were indeed black and not necessarily known. We also aggregated news articles and other useful media to get a better understanding of what was out there. And we made sure not to include businesses or make assumptions about ownership, in case that information wasn't made public for a reason.",
          "Word of mouth turned up businesses that hadn't been on any list, and we realized we needed an ingestion layer for people to make suggestions to the app for businesses to highlight. We built something low fidelity, which was ultimately a Google Form at the time.",
          "The idea behind making it a geolocation app is that we wanted the least friction for finding a business in the neighborhood. The feedback was that once someone found a place they wanted to go to, they didn't need to continuously use the app.",
          "We used the Mom Test to help get good feedback from folks. We didn't want people who were fond of us or our mission to direct our design decisions, as they might not have been telling the truth about their usage or whether they found the features to be useful.",
          'We also chose iOS, unfortunately, due to time constraints and our own technical limitations — I was an iOS engineer and no one else had significant mobile experience at the time.',
        ],
      },
      'final-product': {
        paragraphs: ['Shipped on iOS, built and maintained from March 2019 to March 2021.'],
        bullets: [
          {
            text: 'Won the Black Ambition Prize',
            link: 'https://blackambitionprize.com/prize_winners/shead/',
          },
          {
            text: 'Featured on ABC7 News (2020)',
            link: 'https://abc7news.com/post/new-app-helps-promote-black-owned-businesses-in-bay-area/6254793/',
          },
        ],
        media: [{ src: '/media/shead.png', label: "Shea'd" }],
      },
    },
  },
  {
    slug: 'search-entity-suggest',
    title: 'Search entity suggest',
    org: 'YouTube',
    summary: [
      "Hooked up YouTube's search suggest service on the backend and built the client-side UI, letting users play songs and go to album and artist pages from the search bar.",
    ],
    cover: '/media/search-suggest.png',
    study: {
      thesis: {
        paragraphs: [
          'Make the search bar itself actionable: play a song, or jump to an album or artist page, without going through a full results page first.',
        ],
      },
      process: {
        bullets: [
          "Hooked up YouTube's search suggest service — prefix and fuzzy matching combined with YouTube's algorithmic boosting — on the backend",
          'Built the client-side UI that renders entity suggestions in the search bar context',
        ],
      },
      'final-product': {
        paragraphs: [
          'Users can play songs and navigate to album and artist pages directly from the search bar.',
        ],
        media: [
          { src: '/media/search-suggest-demo.gif', label: 'Search suggest' },
          { src: '/media/last-10-search-demo.gif', label: 'Last 10 search entities' },
        ],
      },
    },
  },
];
