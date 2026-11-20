# Chongqing Travel Guide

An English-language travel site about Chongqing for international visitors, built around one idea: **every guide should teach you what to say when you get there**.

Status: planning. No site code yet.

## Why this project

- Chongqing has a strong visual identity: the 8D mountain city, Liziba monorail, Hongyadong, Kuixinglou, Yangtze cableway.
- English coverage is thin compared with Beijing, Shanghai and Chengdu. The most direct dedicated competitor has only about 39 posts.
- Travel and language keywords attract advertisers with real budgets: hotels, tours, eSIM, payment tools, language apps.
- China's visa-free transit and expanded entry policies keep inbound travel demand growing.

## Positioning

- **Audience:** English-speaking travelers planning a first or second trip to Chongqing, including Chinese learners at HSK 1-4.
- **Promise:** practical, first-hand, up-to-date guides with maps, costs, queue timing, photo spots and five useful phrases per stop.
- **Differentiation:** no other English Chongqing site combines travel logistics with on-the-ground Mandarin and Chongqing dialect.
- **Language:** English first. Chinese or other language versions only after the English site is established.

## Content pillars

1. **First-time visitor** - itinerary, where to stay, is it worth it, how many days.
2. **Attractions deep dives** - Liziba, Hongyadong, Kuixinglou, Ciqikou, cableway, Nanbin Road, Eling Park.
3. **Food** - hotpot ordering, spice levels, xiaomian, street food, breakfast, night markets.
4. **Day trips and transport** - Wulong, Dazu, Fuling 816, Three Gorges cruise, airport, rail stations, metro.
5. **Practical and language** - 240-hour visa-free transit, payments, eSIM, Didi, ticket booking, survival Mandarin.

## Site structure

```
/                     home
/guides/              pillar pages
/attractions/         location deep dives
/food/                restaurant and dish guides
/itineraries/         1, 2, 3 and 5 day plans
/practical/           visas, payments, transport, apps
```

Every article follows the same template: map and route, cost and time, crowd and queue tips, five phrases, photo spots, FAQ.

## 90-day roadmap

| Phase | Timing | Output |
|---|---|---|
| Setup | Week 1-2 | Domain, static site, analytics, five compliance pages |
| Content sprint | Week 3-8 | 30-35 articles across the five pillars |
| Traffic | Week 6 onward | Short video, Pinterest, Reddit and Quora distribution |
| AdSense | Week 8-10 | Application, review, ad placement |
| Optimize | Week 10-12 | RPM tuning, affiliate links, email list |

See `docs/90-day-plan.md` for the weekly breakdown.

## Monetization

- Google AdSense: travel content RPM target USD 10-25.
- Affiliates: Trip.com and Agoda for hotels, Klook for tours and cruises, eSIM providers.
- Digital product: a paid Chongqing itinerary and hotpot ordering cheat sheet.
- Target mix at month 6: AdSense 50%, affiliates 40%, product 10%.

## KPIs

| Month | Articles | Sessions / month | Revenue / month |
|---|---|---|---|
| 1 | 15 | 0-300 | 0 |
| 3 | 35 | 1,000-3,000 | USD 10-50 |
| 6 | 60-80 | 10,000-20,000 | USD 200-500 |
| 12 | 120+ | 30,000-50,000 | USD 800-2,000 |

## Repository layout

```
README.md
docs/
  competitor-analysis.md
  90-day-plan.md
```

Site code will be added after the keyword map and content calendar are approved.
