export const site = {
  name: 'Chongqing Field Guide',
  shortName: 'Field Guide',
  tagline: 'The mountain city, decoded.',
  description:
    'Practical English-language guides to Chongqing, with routes, costs, crowd timing, photo spots and the Mandarin you need at each stop.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://chongqingfieldguide.com',
  email: 'hello@chongqingfieldguide.com',
  locale: 'en',
  established: 2026,
  social: {
    pinterest: 'https://www.pinterest.com/',
    reddit: 'https://www.reddit.com/r/travelchina/',
    youtube: 'https://www.youtube.com/',
  },
  nav: [
    { label: 'First-time guides', href: '/guides/' },
    { label: 'Attractions', href: '/attractions/' },
    { label: 'Food', href: '/food/' },
    { label: 'Itineraries', href: '/itineraries/' },
    { label: 'Practical', href: '/practical/' },
  ],
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
