# Boat & Bites --- Website Design & Build Specification

## Project Identity

Build a premium restaurant website for **Boat & Bites, Surat**.

This design document follows the same overall approach used for the
**Yaari Social Cafe** project:

-   logo-derived visual identity
-   cozy + premium atmosphere
-   editorial restaurant layout
-   authentic supplied media as the source of truth
-   React + Tailwind architecture
-   Framer Motion animations
-   cinematic hero
-   Instagram/reel media integration
-   highly designed menu
-   responsive mobile experience
-   subtle motion throughout the site
-   handcrafted details instead of a generic AI template

The final website should feel like a real restaurant brand website, not
a technology showcase.

------------------------------------------------------------------------

# 1. CORE DESIGN DIRECTION

The emotional direction is:

``` text
COZY
+
PREMIUM
+
AESTHETIC
+
SOCIAL
+
CINEMATIC
+
ALIVE
```

The website should feel warm and inviting while still looking
professionally art-directed.

Use:

-   real restaurant photography
-   real Instagram videos/reels
-   supplied menu images
-   supplied logo
-   real restaurant information extracted from the dataset

Avoid:

-   generic stock restaurant images
-   generic AI restaurant copy
-   excessive glassmorphism
-   neon gradients
-   SaaS-style cards
-   excessive rounded containers
-   random decorative blobs
-   excessive animation
-   fake reviews or fake information

The design principle is:

> **Calm typography + beautiful media + subtle movement.**

------------------------------------------------------------------------

# 2. SOURCE OF TRUTH

The following assets are authoritative:

1.  Supplied Boat & Bites logo
2.  Instagram scrape/dataset supplied with the project
3.  Menu images already placed inside the project's `menu` folder
4.  Any additional restaurant assets supplied by the user

Before implementing the UI, inspect the entire project recursively.

Look for:

``` text
*.json
*.jsonl
*.csv
*.xlsx
*.txt
*.html
*.jpg
*.jpeg
*.png
*.webp
*.mp4
*.mov
*.webm

menu/
menus/
images/
media/
videos/
reels/
instagram/
assets/
public/
```

Do not assume a fixed scrape schema.

------------------------------------------------------------------------

# 3. BRAND / LOGO

The supplied Boat & Bites logo is the main visual reference.

The logo contains:

-   dark circular utensil emblem
-   orange boat/food form
-   flowing blue/purple wave lines
-   clean white space
-   strong horizontal movement

The website visual language should inherit these characteristics.

Do NOT redesign the logo.

Use the original logo asset.

The wave element can also inspire subtle decorative SVG/CSS lines
throughout the website.

------------------------------------------------------------------------

# 4. COLOR SYSTEM

Create global design tokens.

Suggested palette:

``` css
--ink: #171717;
--deep-ink: #101820;

--cream: #FAF8F3;
--warm-white: #FFFDF9;
--sand: #EEE8DC;

--orange: #F0822A;
--orange-dark: #D96518;

--wave-blue: #3C3181;
--wave-purple: #6257A5;

--text: #1C1C1C;
--muted: #6F6A63;

--border: rgba(23, 23, 23, 0.12);
```

Sample the actual logo if needed and refine these values.

### Usage

Cream / warm white: - page background - menu - editorial sections

Deep ink: - navbar - footer - strong contrast sections

Orange: - CTA - active menu state - small accents - links - selected
details

Blue / purple: - wave accents - subtle gradients - decorative motion

Do not make every section orange or blue.

The palette should remain sophisticated.

------------------------------------------------------------------------

# 5. TYPOGRAPHY

Use the same type of editorial contrast that worked for Yaari.

Recommended:

### Display

``` text
Cormorant Garamond
```

Alternative:

``` text
Playfair Display
DM Serif Display
```

### UI / Body

``` text
Manrope
```

Alternative:

``` text
Inter
Plus Jakarta Sans
```

Preferred:

``` text
Headings → Cormorant Garamond
Body/UI → Manrope
```

Large serif typography should create the premium restaurant/editorial
feeling.

Avoid overly decorative fonts.

------------------------------------------------------------------------

# 6. TECH STACK

Use:

``` text
React
Vite
Tailwind CSS
Framer Motion
Lucide React
```

Use only additional libraries when genuinely useful.

Recommended utilities:

-   Intersection Observer
-   responsive image loading
-   video viewport detection
-   lightbox/modal
-   accessible carousel

Do not over-install libraries.

------------------------------------------------------------------------

# 7. HOMEPAGE STRUCTURE

Recommended order:

``` text
01  Navbar
02  Cinematic Hero
03  Brand Introduction
04  Atmosphere / Experience
05  Signature Food / Visual Story
06  Menu
07  Instagram / Reels
08  Gallery / Moments
09  About / Story
10  Visit / Contact
11  Footer
```

Keep the homepage curated.

Do not make every piece of scraped content a separate section.

------------------------------------------------------------------------

# 8. NAVBAR

Desktop:

``` text
[BOAT & BITES LOGO]

HOME
MENU
STORY
GALLERY
VISIT

[RESERVE / ORDER / CONTACT]
```

Only show CTA labels supported by actual restaurant functionality.

### Behavior

At top:

``` text
transparent / overlay style
```

After scrolling:

``` text
warm cream background
subtle border
slight backdrop blur
```

Animation:

``` text
logo: opacity 0 → 1
nav: y -12 → 0
CTA: scale .96 → 1
```

Navigation links have a refined animated underline.

Mobile:

-   compact logo
-   hamburger menu
-   full-screen or elegant side menu
-   large tap targets

------------------------------------------------------------------------

# 9. HERO SECTION

The hero must immediately establish the Boat & Bites atmosphere.

Use the strongest real supplied:

1.  restaurant video
2.  food video
3.  restaurant interior media
4.  strongest restaurant image

Do not create fake hero imagery if real media is available.

### Composition

``` text
------------------------------------------------
NAVBAR
------------------------------------------------

             REAL VIDEO / IMAGE

             SMALL EYEBROW

             BOAT & BITES

             [EDITORIAL HEADLINE]

             short supporting copy

             [EXPLORE MENU]  [VISIT US]

                 ↓ SCROLL

------------------------------------------------
```

Do not cover important food or people in the source media.

### Hero animation

Background:

``` text
scale 1.06 → 1
duration 10–14s
ease easeOut
```

Text:

``` text
opacity 0 → 1
y 35px → 0
```

CTA:

``` text
opacity 0 → 1
y 15px → 0
```

Add a very subtle animated wave line near the bottom inspired by the
logo.

------------------------------------------------------------------------

# 10. HERO COPY

Do not invent a fake restaurant slogan.

First inspect:

-   Instagram bio
-   captions
-   restaurant description
-   supplied dataset

If a real tagline exists, use it.

Otherwise use minimal neutral copy.

Example structure only:

``` text
BOAT & BITES

Good food.
Good atmosphere.
Good moments.
```

Replace this with verified brand language whenever available.

------------------------------------------------------------------------

# 11. BRAND INTRODUCTION

After hero, create a strong editorial introduction.

Layout:

``` text
LEFT:
large serif statement

RIGHT:
short verified description
+
small real restaurant image/video
```

Example visual style:

``` text
A PLACE FOR
GOOD BITES
AND GOOD TIMES.
```

Use only factual copy.

Add a subtle wave line crossing the section.

------------------------------------------------------------------------

# 12. ATMOSPHERE / EXPERIENCE

Use authentic restaurant media.

Possible content:

-   interiors
-   ambience
-   people
-   food preparation
-   events
-   music
-   social moments
-   restaurant details

Only include categories actually supported by the dataset.

Use an asymmetric layout similar to a premium editorial cafe website.

Example:

``` text
┌──────────────────────────────┬──────────────┐
│                              │              │
│        LARGE IMAGE           │ SMALL IMAGE  │
│                              │              │
│                              ├──────────────┤
│                              │ SHORT TEXT   │
└──────────────────────────────┴──────────────┘
```

Images should reveal with a mask animation.

------------------------------------------------------------------------

# 13. SIGNATURE FOOD / VISUAL STORY

Create a food-focused section using real restaurant food media.

Do not automatically call dishes "best" or "must try".

If the supplied content identifies signature/special dishes, preserve
that terminology.

Otherwise use neutral labels such as:

``` text
FROM THE KITCHEN
```

or

``` text
A FEW FAVOURITES
```

only where appropriate.

Each visual can contain:

``` text
dish name
short verified description
price if verified
```

------------------------------------------------------------------------

# 14. MENU --- PRIMARY FEATURE

The menu should be one of the most visually polished sections.

The user has already placed the **menu images inside the project's menu
folder**.

These images must be used.

## Important Requirement

### MENU IMAGE SLIDESHOW

The menu images must automatically slide/change every **5 seconds**.

Behavior:

``` text
Menu image 1
↓ 5 seconds
Menu image 2
↓ 5 seconds
Menu image 3
↓ 5 seconds
...
↓
loop back to Menu image 1
```

Use an accessible carousel/slider.

### Transition

Preferred:

``` text
opacity fade
+
slight horizontal movement
```

Do not use an aggressive spinning or bouncing transition.

Example:

``` text
current image:
opacity 1
x 0

next image:
opacity 0
x 30px

duration:
700–900ms
```

The slide remains visible for approximately **5 seconds** before
changing.

### Controls

Include:

-   previous arrow
-   next arrow
-   pagination dots
-   autoplay
-   pause on hover for desktop
-   pause when not visible
-   swipe on mobile

Autoplay should still be configured around the required **5-second
interval**.

### Important

Do not crop menu text.

The menu image must remain readable.

Use:

``` text
object-contain
```

for menu pages rather than `object-cover`.

------------------------------------------------------------------------

# 15. MENU IMAGE DISCOVERY

Antigravity must inspect:

``` text
menu/
```

and any equivalent folder recursively.

Find:

``` text
*.png
*.jpg
*.jpeg
*.webp
```

Sort menu images naturally.

Example:

``` text
menu-1
menu-2
menu-3
```

or

``` text
1
2
3
```

If filenames have no useful ordering, use filesystem order only after
inspecting all files.

Do not accidentally include unrelated images.

------------------------------------------------------------------------

# 16. MENU SLIDER LAYOUT

Desktop:

``` text
------------------------------------------------
                 OUR MENU

       Explore the Boat & Bites menu.

        [ CATEGORY / DESCRIPTION ]

     ┌───────────────────────────────┐
     │                               │
     │                               │
     │          MENU IMAGE           │
     │         object-contain        │
     │                               │
     │                               │
     └───────────────────────────────┘

        ●  ○  ○  ○

        ←                         →
------------------------------------------------
```

Place the menu image inside a premium frame.

Use:

-   warm cream background
-   thin border
-   subtle shadow
-   elegant spacing

Do not make it look like a generic image carousel.

------------------------------------------------------------------------

# 17. MENU IMAGE LIGHTBOX

Clicking the menu image should open a fullscreen viewer.

Features:

-   dark charcoal overlay
-   large image
-   close button
-   next/previous controls
-   keyboard support
-   mobile swipe
-   zoom if supported
-   preserve image aspect ratio

Animation:

``` text
modal opacity 0 → 1
image scale .94 → 1
duration 400–500ms
```

------------------------------------------------------------------------

# 18. MENU DATA

If menu images are the only source of menu information:

Do NOT invent a typed digital menu.

Keep the menu pages as authentic images.

If readable menu text is also present in the dataset, optionally create
a structured menu below/alongside the slider.

Never fabricate:

-   prices
-   dish names
-   ingredients
-   categories
-   availability
-   dietary claims

------------------------------------------------------------------------

# 19. INSTAGRAM DATA EXTRACTION

The supplied Instagram scrape is a major content source.

Antigravity must inspect it before implementing final content.

Search recursively for:

``` text
posts
reels
captions
media URLs
video URLs
image URLs
timestamps
permalinks
shortcodes
profile information
restaurant information
contact information
```

Possible fields:

``` text
display_url
thumbnail_url
video_url
videoUrl
media_url
mediaUrl
src
type
media_type
is_video
caption
timestamp
date
shortcode
post_url
permalink
```

Do not assume the schema.

------------------------------------------------------------------------

# 20. MEDIA MANIFEST

Normalize extracted media into:

``` text
src/data/instagramMedia.js
```

Example:

``` js
export const instagramMedia = [
  {
    id: "ig-001",
    type: "image",
    src: "/media/instagram/images/001.webp",
    thumbnail: "/media/instagram/images/001.webp",
    caption: "",
    date: "",
    permalink: "",
    section: "gallery"
  },
  {
    id: "ig-002",
    type: "video",
    src: "/media/instagram/videos/002.mp4",
    thumbnail: "/media/instagram/thumbnails/002.webp",
    caption: "",
    date: "",
    permalink: "",
    section: "reels"
  }
];
```

Normalize all available media into this structure.

------------------------------------------------------------------------

# 21. MEDIA STORAGE

If local media is supplied, organize it cleanly:

``` text
public/
└── media/
    └── instagram/
        ├── images/
        ├── videos/
        └── thumbnails/
```

Menu:

``` text
public/
└── menu/
    ├── menu-1.*
    ├── menu-2.*
    └── ...
```

Do not duplicate the same media unnecessarily.

------------------------------------------------------------------------

# 22. VIDEO / REELS SECTION

Create a visually rich Instagram/reels section.

Use real videos from the supplied dataset.

Possible heading:

``` text
FROM OUR TABLE
```

or a verified brand phrase.

Show 3--6 relevant videos.

Video behavior:

``` text
muted
playsInline
loop
poster
```

Use Intersection Observer:

``` text
visible > 45%
→ play

visible < 20%
→ pause
```

Do not allow many videos to play simultaneously.

------------------------------------------------------------------------

# 23. VIDEO CARD

Each video card should feel editorial.

Possible layout:

``` text
┌─────────────────────┐
│                     │
│       VIDEO         │
│                     │
│                     │
│                     │
├─────────────────────┤
│ caption / category  │
└─────────────────────┘
```

Hover:

``` text
image/video scale 1 → 1.03
```

Keep the interaction subtle.

------------------------------------------------------------------------

# 24. GALLERY / MOMENTS

Create an asymmetric gallery.

Do NOT use a boring equal 3-column grid.

Example:

``` text
┌──────────────┬────────────────────┐
│              │                    │
│    IMAGE     │       IMAGE        │
│              │                    │
├───────┬──────┴────────────┬───────┤
│ IMG   │       VIDEO       │ IMG   │
├───────┴───────────────────┴───────┤
│             LARGE IMAGE           │
└────────────────────────────────────┘
```

Use real Instagram media.

Click:

``` text
→ fullscreen media viewer
```

------------------------------------------------------------------------

# 25. ABOUT / STORY

Create a warm restaurant story section.

Use only verified information from the dataset.

Layout:

``` text
large image
+
story
+
small supporting image
```

The section should feel human rather than corporate.

Avoid generic text such as:

``` text
We are passionate about delivering unforgettable culinary experiences...
```

Use actual brand voice/content whenever available.

------------------------------------------------------------------------

# 26. INSTAGRAM CTA

If the Instagram profile URL is available:

``` text
Follow Boat & Bites
```

with a real link.

Do not invent the username or URL.

Use selected authentic media around the CTA.

------------------------------------------------------------------------

# 27. VISIT / CONTACT

Use only verified information.

Possible:

``` text
VISIT BOAT & BITES

Address
Opening Hours
Phone
Instagram

[GET DIRECTIONS]
[CALL]
[INSTAGRAM]
```

Hide fields that are not available.

Never invent:

-   address
-   phone
-   hours
-   email
-   reservation links

------------------------------------------------------------------------

# 28. FOOTER

Use a deep ink footer.

Structure:

``` text
BOAT & BITES

verified short description

NAVIGATION
Home
Menu
Story
Gallery
Visit

CONTACT
verified information

SOCIAL
Instagram
```

Add a subtle animated wave at the bottom.

------------------------------------------------------------------------

# 29. MOTION SYSTEM

The website must not feel static.

Every major section should contain some tasteful motion.

Use **Framer Motion**.

## Scroll Reveal

``` text
opacity: 0 → 1
y: 30px → 0
duration: 700–900ms
```

## Image Reveal

``` text
clip-path:
inset(10% 0 0 0)
→
inset(0 0 0 0)

scale:
1.05 → 1
```

## Image Breathing

``` text
scale:
1 → 1.03 → 1

duration:
12–18s
```

## Parallax

Keep subtle:

``` text
translateY:
-4% to +4%
```

## Wave Animation

Slow movement:

``` text
translateX
or
stroke-dashoffset
```

Do not animate too many decorative elements simultaneously.

------------------------------------------------------------------------

# 30. MARQUEE

Use one tasteful moving marquee if appropriate.

Example:

``` text
BOAT & BITES • FOOD • MOMENTS • GOOD TIMES •
```

Keep it slow.

Do not make the marquee the main visual element.

------------------------------------------------------------------------

# 31. MICRO-INTERACTIONS

Buttons:

``` text
arrow moves 3–5px
background transitions smoothly
```

Navigation:

``` text
underline expands
```

Menu:

``` text
active dot/underline moves
```

Gallery:

``` text
image scale 1 → 1.03
```

Cards:

``` text
slight translateY
```

All interactions should feel premium.

Avoid:

``` text
bounce
shake
spin
elastic
random floating
```

------------------------------------------------------------------------

# 32. LOADING EXPERIENCE

Do not use a generic spinner.

Use:

``` text
Boat & Bites logo
+
small animated wave
```

Keep it short.

Do not delay the site unnecessarily.

------------------------------------------------------------------------

# 33. RESPONSIVE DESIGN

## Desktop ≥ 1200px

-   cinematic hero
-   editorial typography
-   asymmetric layouts
-   premium menu slider
-   large gallery
-   rich motion

## Tablet 768--1199px

-   simplify layouts
-   maintain visual hierarchy
-   reduce animation distances
-   maintain menu readability

## Mobile ≤ 767px

Mobile must be intentionally designed.

Use:

``` text
20–24px horizontal padding
```

Requirements:

-   no horizontal overflow
-   44px minimum touch targets
-   mobile navigation
-   horizontal menu categories if needed
-   full-width CTA where useful
-   readable menu images
-   swipeable menu slider
-   swipeable gallery
-   reduced parallax
-   reduced simultaneous video playback

The 5-second menu autoplay remains enabled on mobile unless the user
explicitly pauses it.

------------------------------------------------------------------------

# 34. ACCESSIBILITY

Required:

-   semantic HTML
-   proper heading hierarchy
-   alt text
-   keyboard navigation
-   focus states
-   ARIA labels
-   accessible carousel controls
-   accessible lightbox
-   sufficient contrast
-   44px touch targets
-   reduced-motion support

Implement:

``` css
@media (prefers-reduced-motion: reduce) {
  /* disable/reduce non-essential animation */
}
```

For reduced-motion users, menu autoplay should stop or use a
non-animated presentation.

------------------------------------------------------------------------

# 35. PERFORMANCE

Target:

``` text
Lighthouse Performance > 90 where practical
```

Use:

-   WebP/AVIF where appropriate
-   responsive image sizes
-   lazy loading
-   video compression
-   poster images
-   viewport-based video playback
-   preload only critical hero assets
-   avoid simultaneous video playback

The site must remain visually rich without becoming slow.

------------------------------------------------------------------------

# 36. SEO

Implement:

-   title
-   meta description
-   Open Graph metadata
-   semantic headings
-   canonical URL when applicable
-   Restaurant structured data only with verified information

Never put fake information into structured data.

------------------------------------------------------------------------

# 37. DATA ARCHITECTURE

Keep restaurant information centralized.

``` js
export const restaurant = {
  name: "Boat & Bites",
  tagline: "",
  description: "",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  city: "Surat",
  hours: [],
  instagram: "",
  mapsUrl: ""
};
```

Only populate verified values.

Menu data, if extracted:

``` js
export const menu = [];
```

Instagram:

``` js
export const instagramMedia = [];
```

------------------------------------------------------------------------

# 38. REACT STRUCTURE

Use a clean reusable component architecture.

``` text
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Footer.jsx
│   │   └── Section.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── BrandIntro.jsx
│   │   ├── Atmosphere.jsx
│   │   ├── SignatureFood.jsx
│   │   ├── MenuSection.jsx
│   │   ├── ReelsSection.jsx
│   │   ├── Gallery.jsx
│   │   ├── Story.jsx
│   │   └── VisitSection.jsx
│   │
│   ├── menu/
│   │   ├── MenuSlider.jsx
│   │   ├── MenuControls.jsx
│   │   └── MenuLightbox.jsx
│   │
│   ├── media/
│   │   ├── SmartVideo.jsx
│   │   ├── MediaCard.jsx
│   │   └── MediaLightbox.jsx
│   │
│   └── common/
│       ├── Button.jsx
│       ├── SectionHeading.jsx
│       ├── AnimatedWave.jsx
│       └── Reveal.jsx
│
├── data/
│   ├── restaurant.js
│   ├── menu.js
│   └── instagramMedia.js
│
├── assets/
│   └── logo/
│
├── hooks/
│   ├── useInView.js
│   └── useMediaQuery.js
│
└── styles/
    └── globals.css
```

------------------------------------------------------------------------

# 39. MENU SLIDER IMPLEMENTATION REQUIREMENTS

Create a reusable `MenuSlider` component.

Requirements:

``` text
autoplay interval = 5000ms
loop = true
transition = 700–900ms
pauseOnHover = true
pauseWhenOffscreen = true
keyboard accessible = true
swipe enabled = true
```

State example:

``` js
const [currentIndex, setCurrentIndex] = useState(0);
```

Autoplay logic:

``` text
every 5000ms
→ advance index
→ loop to zero
```

Important:

Do not restart the timer unexpectedly every render.

Use a stable effect and cleanup the interval.

When the page/tab is hidden, avoid unnecessary work.

------------------------------------------------------------------------

# 40. MENU SLIDER VISUAL BEHAVIOR

The image should not suddenly disappear.

Use:

``` text
current:
opacity 1
x 0

next:
opacity 0
x 24px

animate:
opacity 1
x 0
```

Duration:

``` text
800ms
```

Ease:

``` text
cubic-bezier(0.22, 1, 0.36, 1)
```

Keep the menu frame size stable so the page does not jump between
slides.

------------------------------------------------------------------------

# 41. NO FAKE CONTENT

This is mandatory.

Never invent:

``` text
awards
ratings
reviews
testimonials
chef names
founding year
address
phone
email
hours
menu items
prices
ingredients
special claims
events
reservation systems
```

If information is missing:

``` text
hide it
```

Do not insert fake placeholders.

------------------------------------------------------------------------

# 42. IMAGE SELECTION

Hero:

Use strongest cinematic media.

Food:

Use highest-quality real food media.

Atmosphere:

Use interiors / people / restaurant moments.

Gallery:

Use varied images and videos.

Avoid repeating the same image unnecessarily.

Do not use low-resolution media in large sections.

------------------------------------------------------------------------

# 43. HUMAN-DESIGNED DETAILS

Include a few intentionally imperfect editorial details:

-   overlapping image
-   large whitespace
-   thin divider
-   oversized serif word
-   asymmetrical image
-   wave line crossing a section
-   unusual but balanced image crop
-   non-uniform gallery proportions
-   subtle paper/texture feeling

These should be intentional, not random.

------------------------------------------------------------------------

# 44. NO GENERIC AI COPY

Avoid copy like:

``` text
A culinary journey like no other
Where every bite tells a story
Experience the perfect blend of taste and ambience
Unforgettable dining experiences
Your ultimate destination for food and fun
```

Unless such wording is actually present in the restaurant's own
material.

Use the restaurant's actual voice wherever available.

------------------------------------------------------------------------

# 45. FINAL QUALITY CHECK

Before considering the website complete:

-   [ ] Logo is used correctly.
-   [ ] Color palette clearly derives from the logo.
-   [ ] Visual language follows the polished/cozy approach of the Yaari
    Social Cafe project.
-   [ ] Real Instagram media is extracted and used.
-   [ ] Supplied menu folder was inspected.
-   [ ] ALL relevant menu images are included in the slider.
-   [ ] Menu automatically changes every 5 seconds.
-   [ ] Menu slider loops continuously.
-   [ ] Menu supports next/previous controls.
-   [ ] Menu supports mobile swipe.
-   [ ] Menu image uses `object-contain`.
-   [ ] Menu text is not cropped.
-   [ ] Menu has fullscreen viewing.
-   [ ] Hero feels cinematic.
-   [ ] Every major section has tasteful motion.
-   [ ] Motion is subtle rather than distracting.
-   [ ] Videos pause when outside the viewport.
-   [ ] Gallery feels editorial rather than generic.
-   [ ] Mobile layout is intentionally designed.
-   [ ] No horizontal overflow.
-   [ ] No fake restaurant information.
-   [ ] Accessibility is implemented.
-   [ ] Reduced-motion behavior is implemented.
-   [ ] Performance is optimized.
-   [ ] SEO metadata is present.
-   [ ] The final site does not look AI-generated.

------------------------------------------------------------------------

# 46. IMPLEMENTATION ORDER FOR ANTIGRAVITY

Do not immediately start writing random UI components.

Follow this order:

## Phase 1 --- Inspect

1.  Inspect supplied logo.
2.  Inspect entire project.
3.  Inspect `menu` folder.
4.  Inspect Instagram scrape/dataset.
5.  Identify all restaurant data.
6.  Identify all image/video assets.

## Phase 2 --- Foundation

1.  React + Vite
2.  Tailwind
3.  fonts
4.  global color tokens
5.  layout
6.  navbar
7.  footer

## Phase 3 --- Assets

1.  place logo
2.  organize menu images
3.  organize Instagram media
4.  create media manifest
5.  optimize large images/videos

## Phase 4 --- Core Sections

1.  hero
2.  intro
3.  atmosphere
4.  signature food
5.  menu
6.  reels
7.  gallery
8.  story
9.  visit

## Phase 5 --- Motion

1.  reveal system
2.  hero animation
3.  image mask reveal
4.  image breathing
5.  parallax
6.  wave animation
7.  menu 5-second autoplay
8.  lightbox transitions
9.  hover interactions

## Phase 6 --- Polish

1.  mobile refinement
2.  accessibility
3.  performance
4.  SEO
5.  animation audit
6.  spacing audit
7.  content accuracy audit

------------------------------------------------------------------------

# 47. FINAL CREATIVE DIRECTION

The final experience should feel like:

> **A premium evening at Boat & Bites brought to life on screen.**

Think:

``` text
warm cream
deep ink
orange accents
blue/purple waves
beautiful food
cinematic restaurant moments
editorial typography
slow movement
real Instagram content
authentic menu
```

The website should feel:

``` text
COZY FIRST
PREMIUM SECOND
ANIMATED THIRD
```

Animation should make the restaurant feel alive.

It should never look like the animation library is the main attraction.

------------------------------------------------------------------------

# 48. FINAL ANTIGRAVITY INSTRUCTION

Build the Boat & Bites website using this document as the primary design
specification.

Before coding, inspect the supplied assets and dataset.

Use the supplied logo as the visual foundation.

Use the real Instagram scrape for restaurant media and factual content.

Use the menu images already present in the `menu` folder.

The menu must automatically slide to the next menu image every **5
seconds**, continuously looping, with elegant transitions, manual
controls, mobile swipe, and fullscreen viewing.

The final website must be:

``` text
premium
cozy
aesthetic
professional
responsive
fast
accessible
cinematic
animated
authentic
```

Most importantly:

> **Do not build a generic restaurant website. Build a visually
> art-directed Boat & Bites brand experience using the actual assets
> supplied by the restaurant.**
