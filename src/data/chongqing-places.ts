export type PlaceKind = 'city' | 'region';

export type Place = {
  id: string;
  name: string;
  zh: string;
  area: string;
  kind: PlaceKind;
  coordinates: number[];
  href?: string;
  linkLabel?: string;
  note: string;
};

export const places: Place[] = [
  {
    "id": "hongyadong",
    "name": "Hongyadong",
    "zh": "洪崖洞",
    "area": "Central Chongqing",
    "kind": "city",
    "href": "/attractions/hongyadong-night-crowds/",
    "note": "Riverside lights and layered night views.",
    "coordinates": [
      106.5789,
      29.5624
    ],
    "linkLabel": "Hongyadong night-view guide"
  },
  {
    "id": "liziba",
    "name": "Liziba",
    "zh": "李子坝",
    "area": "Central Chongqing",
    "kind": "city",
    "href": "/attractions/liziba-monorail-viewpoints/",
    "note": "The monorail that disappears into a building.",
    "coordinates": [
      106.5313,
      29.5518
    ],
    "linkLabel": "Liziba viewpoint guide"
  },
  {
    "id": "ciqikou",
    "name": "Ciqikou",
    "zh": "磁器口",
    "area": "Central Chongqing",
    "kind": "city",
    "href": "/attractions/ciqikou-vs-longmenhao/",
    "note": "Old lanes, teahouses and early-morning streets.",
    "coordinates": [
      106.4503,
      29.5799
    ],
    "linkLabel": "Ciqikou old-street guide"
  },
  {
    "id": "kuixinglou",
    "name": "Kuixinglou",
    "zh": "魁星楼",
    "area": "Central Chongqing",
    "kind": "city",
    "href": "/attractions/kuixinglou-22-story-drop/",
    "note": "A dramatic look at the vertical city.",
    "coordinates": [
      106.5773,
      29.5588
    ],
    "linkLabel": "Kuixinglou vertical-city guide"
  },
  {
    "id": "cableway",
    "name": "Yangtze River Cableway",
    "zh": "长江索道",
    "area": "Central Chongqing",
    "kind": "city",
    "href": "/attractions/yangtze-river-cableway-queue/",
    "note": "Cross the Yangtze above the river traffic.",
    "coordinates": [
      106.5851,
      29.5554
    ],
    "linkLabel": "Yangtze cableway guide"
  },
  {
    "id": "shibati",
    "name": "Shibati",
    "zh": "十八梯",
    "area": "Central Chongqing",
    "kind": "city",
    "href": "/attractions/shibati-mountain-trails/",
    "note": "Stone stairs and old hillside lanes.",
    "coordinates": [
      106.5689,
      29.5582
    ],
    "linkLabel": "Shibati walking guide"
  },
  {
    "id": "eling",
    "name": "Eling Park",
    "zh": "鹅岭公园",
    "area": "Central Chongqing",
    "kind": "city",
    "href": "/attractions/eling-park-nanbin-road/",
    "note": "A calm city panorama above the rivers.",
    "coordinates": [
      106.5625,
      29.5569
    ],
    "linkLabel": "Eling Park viewpoint guide"
  },
  {
    "id": "jiefangbei",
    "name": "Jiefangbei",
    "zh": "解放碑",
    "area": "Central Chongqing",
    "kind": "city",
    "href": "/guides/where-to-stay-chongqing/",
    "note": "A central base for food, hotels and first walks.",
    "coordinates": [
      106.5773,
      29.5575
    ],
    "linkLabel": "Where to stay near Jiefangbei"
  },
  {
    "id": "wulong",
    "name": "Wulong Karst",
    "zh": "武隆喀斯特",
    "area": "Wulong District",
    "kind": "region",
    "note": "Limestone bridges and gorge landscapes east of the city.",
    "coordinates": [
      107.7867,
      29.425
    ]
  },
  {
    "id": "dazu",
    "name": "Dazu Rock Carvings",
    "zh": "大足石刻",
    "area": "Dazu District",
    "kind": "region",
    "note": "A major Buddhist sculpture site west of Chongqing.",
    "coordinates": [
      105.7989,
      29.7497
    ]
  },
  {
    "id": "jinfo",
    "name": "Jinfo Mountain",
    "zh": "金佛山",
    "area": "Nanchuan District",
    "kind": "region",
    "note": "Highland forest, cliffs and winter landscapes.",
    "coordinates": [
      107.188,
      29.041
    ]
  },
  {
    "id": "simian",
    "name": "Simian Mountain",
    "zh": "四面山",
    "area": "Jiangjin District",
    "kind": "region",
    "note": "Waterfalls and forest trails in the city’s southwest.",
    "coordinates": [
      106.395,
      28.606
    ]
  },
  {
    "id": "diaoyu",
    "name": "Diaoyu Fortress",
    "zh": "钓鱼城",
    "area": "Hechuan District",
    "kind": "region",
    "note": "A hilltop fortress with a long military history.",
    "coordinates": [
      106.2685,
      30.021
    ]
  },
  {
    "id": "baidi",
    "name": "Baidi City",
    "zh": "白帝城",
    "area": "Fengjie County",
    "kind": "region",
    "note": "A Three Gorges landmark east of Chongqing.",
    "coordinates": [
      109.568,
      31.048
    ]
  },
  {
    "id": "gongtan",
    "name": "Gongtan Ancient Town",
    "zh": "龚滩古镇",
    "area": "Youyang County",
    "kind": "region",
    "note": "A river town beside the Wujiang Gorge.",
    "coordinates": [
      108.369,
      28.683
    ]
  },
  {
    "id": "fuling816",
    "name": "Fuling 816 Site",
    "zh": "涪陵816工程",
    "area": "Fuling District",
    "kind": "region",
    "note": "A subterranean Cold War era engineering site.",
    "coordinates": [
      107.481,
      29.505
    ]
  },
  {
    "id": "wushan",
    "name": "Wushan Small Gorges",
    "zh": "巫山小三峡",
    "area": "Wushan County",
    "kind": "region",
    "note": "River cliffs and narrow gorges at the eastern edge.",
    "coordinates": [
      109.866,
      31.053
    ]
  }
];

export const placeCollection = {
  type: 'FeatureCollection' as const,
  features: places.map((place) => ({
    type: 'Feature' as const,
    properties: place,
    geometry: {
      type: 'Point' as const,
      coordinates: place.coordinates,
    },
  })),
};

export const featuredPlaces = places.filter((place) => place.href && place.linkLabel).slice(0, 8);

export const placeCategories = [
  { label: 'First-time guides', href: '/guides/' },
  { label: 'Attraction guides', href: '/attractions/' },
  { label: 'Food guides', href: '/food/' },
  { label: 'Practical guides', href: '/practical/' },
];
