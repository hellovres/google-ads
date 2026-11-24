export const categoryOrder = ['guides', 'attractions', 'food', 'practical'] as const;
export const hiddenCategoryOrder = ['itineraries'] as const;
export type CategorySlug = (typeof categoryOrder)[number] | (typeof hiddenCategoryOrder)[number];

export type Phrase = {
  chinese: string;
  pinyin: string;
  meaning: string;
};

export type Category = {
  slug: CategorySlug;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  intro: string;
  art: string;
  color: string;
  phrases: Phrase[];
};

export const categories: Record<CategorySlug, Category> = {
  guides: {
    slug: 'guides',
    name: 'First-time Chongqing',
    shortName: 'Start here',
    eyebrow: 'Plan the trip',
    description:
      'The decisions that shape a first visit: where to sleep, how many days to allow, what to skip and how Chongqing compares with Chengdu.',
    intro:
      'Start with the shape of the city. These guides answer the questions that come before individual attractions, including where to base yourself and whether the trip fits your pace.',
    art: '/images/art-guides.svg',
    color: '#cf4d2f',
    phrases: [
      { chinese: '请问', pinyin: 'qǐng wèn', meaning: 'Excuse me, may I ask' },
      { chinese: '怎么走', pinyin: 'zěn me zǒu', meaning: 'How do I get there' },
      { chinese: '多少钱', pinyin: 'duō shao qián', meaning: 'How much is it' },
      { chinese: '可以刷卡吗', pinyin: 'kě yǐ shuā kǎ ma', meaning: 'Can I pay by card' },
      { chinese: '谢谢', pinyin: 'xiè xie', meaning: 'Thank you' },
    ],
  },
  attractions: {
    slug: 'attractions',
    name: 'Attractions, decoded',
    shortName: 'Attractions',
    eyebrow: 'See the city',
    description:
      'Viewpoint-by-viewpoint guides to the places that define Chongqing, with timing, routes, queue strategy and better alternatives.',
    intro:
      'Chongqing rewards precise timing. These guides cover the angle, entrance and hour that make each landmark work, plus what to do when the obvious plan is crowded.',
    art: '/images/art-attractions.svg',
    color: '#276354',
    phrases: [
      { chinese: '在哪里', pinyin: 'zài nǎ lǐ', meaning: 'Where is it' },
      { chinese: '几点关门', pinyin: 'jǐ diǎn guān mén', meaning: 'What time does it close' },
      { chinese: '排队多久', pinyin: 'pái duì duō jiǔ', meaning: 'How long is the queue' },
      { chinese: '可以拍照吗', pinyin: 'kě yǐ pāi zhào ma', meaning: 'May I take a photo' },
      { chinese: '厕所在哪', pinyin: 'cè suǒ zài nǎ', meaning: 'Where is the toilet' },
    ],
  },
  food: {
    slug: 'food',
    name: 'Eat like a local',
    shortName: 'Food',
    eyebrow: 'Order with confidence',
    description:
      'Hotpot without panic, spice levels that mean something, where to find good xiaomian and how to read a Chongqing street-food stall.',
    intro:
      'The best food in Chongqing is built for people who know what to order. Use these guides to control the heat, understand the menu and find the right meal at the right hour.',
    art: '/images/art-food.svg',
    color: '#b23a2b',
    phrases: [
      { chinese: '微辣', pinyin: 'wēi là', meaning: 'Mildly spicy' },
      { chinese: '不要辣', pinyin: 'bú yào là', meaning: 'No chili, please' },
      { chinese: '再来一份', pinyin: 'zài lái yí fèn', meaning: 'One more portion' },
      { chinese: '买单', pinyin: 'mǎi dān', meaning: 'The bill, please' },
      { chinese: '好吃', pinyin: 'hǎo chī', meaning: 'Delicious' },
    ],
  },
  itineraries: {
    slug: 'itineraries',
    name: 'Routes that work',
    shortName: 'Itineraries',
    eyebrow: 'Plan by day',
    description:
      'One, three and five-day Chongqing routes, plus rail-friendly day trips to Wulong, Dazu and Fuling and a straight answer on Three Gorges cruises.',
    intro:
      'A good Chongqing itinerary is a route through elevation, not just a list of sights. These plans group stops by district and metro line, with realistic transfer and meal breaks.',
    art: '/images/art-itineraries.svg',
    color: '#9b6a2f',
    phrases: [
      { chinese: '今天', pinyin: 'jīn tiān', meaning: 'Today' },
      { chinese: '明天', pinyin: 'míng tiān', meaning: 'Tomorrow' },
      { chinese: '几点出发', pinyin: 'jǐ diǎn chū fā', meaning: 'What time do we leave' },
      { chinese: '来得及吗', pinyin: 'lái de jí ma', meaning: 'Is there enough time' },
      { chinese: '附近有地铁吗', pinyin: 'fù jìn yǒu dì tiě ma', meaning: 'Is there a metro station nearby' },
    ],
  },
  practical: {
    slug: 'practical',
    name: 'Practical 2026',
    shortName: 'Practical',
    eyebrow: 'Make it easy',
    description:
      'Visa-free transit, foreign cards on Alipay and WeChat Pay, eSIMs, airport transfers, metro QR codes and mini-program tickets.',
    intro:
      'These are the details that decide whether a trip feels smooth. Each guide explains the setup before you arrive and the fallback to use when an app or card fails.',
    art: '/images/art-practical.svg',
    color: '#315b78',
    phrases: [
      { chinese: '我不会中文', pinyin: 'wǒ bú huì zhōng wén', meaning: 'I do not speak Chinese' },
      { chinese: '请帮我', pinyin: 'qǐng bāng wǒ', meaning: 'Please help me' },
      { chinese: '可以用支付宝吗', pinyin: 'kě yǐ yòng zhī fù bǎo ma', meaning: 'Can I use Alipay' },
      { chinese: '有英文菜单吗', pinyin: 'yǒu yīng wén cài dān ma', meaning: 'Do you have an English menu' },
      { chinese: '多少钱', pinyin: 'duō shao qián', meaning: 'How much is it' },
    ],
  },
};

export const isCategory = (value: string): value is CategorySlug =>
  ([...categoryOrder, ...hiddenCategoryOrder] as readonly string[]).includes(value);

export const getCategory = (slug: string) => (isCategory(slug) ? categories[slug] : undefined);
