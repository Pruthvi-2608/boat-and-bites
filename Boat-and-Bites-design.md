# BOAT & BITES — IMMERSIVE RESTAURANT WEBSITE DESIGN SYSTEM

> **Project:** Boat & Bites  
> **Purpose:** Premium restaurant website / brand experience  
> **Design direction:** Cinematic, editorial, interactive, warm, playful, sophisticated  
> **Primary reference:** The interaction quality and storytelling approach of The Cocova website — NOT its branding, colors, typography, copy, illustrations, layout, or assets.  
> **Brand identity:** Boat & Bites logo, supplied restaurant media, Instagram scraper dataset, and supplied menu images.  
> **Implementation target:** React + Vite + Tailwind CSS + Framer Motion + Lucide React.

---

# 1. CORE CREATIVE DIRECTION

Boat & Bites should NOT feel like a normal restaurant website.

It should feel like the visitor has entered a small visual journey built around the Boat & Bites identity.

The central creative idea is:

> **THE BOAT IS THE GUIDE.**

The website should repeatedly use the visual language of:

- a boat
- flowing water
- waves
- a voyage
- movement
- arriving somewhere
- discovering food
- gathering around a table
- memories created at the restaurant

The Boat & Bites logo should not simply appear in the navbar and footer.

It should become a **design character / visual motif** throughout the experience.

The website should feel like:

**arrival → voyage → discovery → food → menu → atmosphere → memories → visit**

The visitor should always feel that the page is moving somewhere.

Avoid a conventional:

```text
Hero
About
Services
Gallery
Contact
Footer
```

template.

Instead build a narrative experience.

---

# 2. REFERENCE PHILOSOPHY

The Cocova reference demonstrates several useful principles:

- strong brand symbol used as a recurring visual language
- storytelling instead of generic section labels
- large editorial typography
- immersive media
- horizontal/scroll-driven discovery
- interactive product presentation
- animated line work
- strong transitions between sections
- menu treated as an experience
- small details that reward scrolling
- a strong sense of place
- a website that feels designed rather than assembled

Boat & Bites should use these principles but create a completely original visual system.

## DO NOT COPY

Do NOT reproduce:

- Cocova's tree
- Cocova's typography
- Cocova's exact layout
- Cocova's text
- Cocova's colors
- Cocova's illustrations
- Cocova's animations one-to-one
- Cocova's page structure one-to-one
- Cocova's assets
- Cocova's visual identity

Instead:

> **Take the idea of an immersive branded journey and reinterpret it around a boat and restaurant.**

---

# 3. NON-NEGOTIABLE CONTENT RULE

The website must use only real information supplied by the project.

The following are mandatory sources of truth:

1. supplied Boat & Bites logo
2. Instagram scraper dataset
3. all relevant supplied restaurant photographs
4. all supplied videos / Reels
5. supplied captions and post information
6. supplied menu images inside the `menu` folder
7. any other files already present in the project

DO NOT invent:

- address
- phone number
- opening hours
- prices
- dishes
- ingredients
- reviews
- awards
- ratings
- claims
- restaurant history
- founder information
- chef information
- facilities
- menu categories
- social statistics
- testimonials

If a piece of information is not present in the supplied project data:

**DO NOT CREATE IT.**

Simply omit it.

---

# 4. MANDATORY PROJECT INSPECTION BEFORE CODING

Before writing components, recursively inspect the entire project.

Do not only inspect the root directory.

Search:

```text
/**
```

and inspect relevant:

- JSON
- CSV
- TXT
- MD
- images
- videos
- Instagram scraper exports
- menu folder
- public assets
- src assets
- logo files
- metadata files

The Instagram scraper dataset is a **mandatory content source**.

Extract everything useful from it.

Look for:

- post URLs
- Reel URLs
- image URLs
- downloaded images
- downloaded videos
- captions
- dates
- usernames
- restaurant details
- contact information
- location information
- menu information
- dish names
- prices
- atmosphere content
- food photography
- interior photography
- exterior photography
- event content
- people/social moments
- recurring brand phrases
- useful descriptions

Create an internal normalized content manifest before implementation.

Example:

```ts
type BoatBitesMedia = {
  type: "image" | "video";
  src: string;
  source: "instagram" | "local";
  postUrl?: string;
  caption?: string;
  date?: string;
  category:
    | "food"
    | "interior"
    | "exterior"
    | "people"
    | "reel"
    | "menu"
    | "brand"
    | "other";
};
```

Do not expose raw scraper data directly to users.

---

# 5. LOGO AS THE DESIGN ENGINE

Use the supplied Boat & Bites logo as the primary visual reference.

The logo contains:

- dark circular emblem
- orange boat / food form
- flowing blue/purple wave lines
- clean negative space
- strong horizontal movement

The entire website should inherit these characteristics.

The logo must remain unchanged.

Do not redraw or redesign it.

Do not distort its proportions.

Do not replace its colors.

Do not generate a new logo.

The boat and wave elements may inspire:

- SVG line animations
- section dividers
- scroll indicators
- transition graphics
- loading animations
- decorative borders
- background paths
- hover states
- menu navigation
- cursor trails
- progress indicators

---

# 6. COLOR SYSTEM — DO NOT CHANGE

## CRITICAL

The previous Boat & Bites color palette is approved.

**KEEP THIS COLOR SYSTEM EXACTLY.**

Do not replace it with Cocova colors.

Do not introduce another primary palette.

Do not redesign the color identity.

Use these global tokens:

```css
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

## Color hierarchy

### Primary backgrounds

Use:

```text
cream
warm-white
deep-ink
```

### Primary brand accent

Use:

```text
orange
```

### Secondary visual movement

Use:

```text
wave-blue
wave-purple
```

### Neutral structure

Use:

```text
sand
muted
border
```

---

# 7. COLOR USAGE RULES

Do NOT make the website colorful everywhere.

The website should feel premium.

Use orange strategically:

- CTA
- active states
- small labels
- boat accents
- menu controls
- progress indicators
- important interaction states

Use blue/purple strategically:

- animated waves
- line drawings
- subtle gradients
- decorative transitions
- interactive visual states

Use deep ink for:

- cinematic sections
- navigation
- footer
- dramatic transitions
- text contrast

Use cream/warm-white for:

- editorial content
- menu
- food storytelling
- gallery
- large whitespace areas

The colors should breathe.

---

# 8. TYPOGRAPHY

Maintain the premium editorial contrast from the previous design.

## Display font

Use:

```text
Cormorant Garamond
```

Use it for:

- major headings
- hero statements
- section titles
- dramatic single-word statements
- menu category titles

## Body / UI

Use:

```text
Manrope
```

Use it for:

- navigation
- descriptions
- buttons
- metadata
- labels
- captions
- menu controls

## Typography philosophy

Large display text.

Short sentences.

Generous whitespace.

Small uppercase metadata.

Avoid huge paragraphs.

Use editorial hierarchy.

Example:

```text
01 / THE VOYAGE

Where the table
meets the tide.
```

---

# 9. THE WEBSITE EXPERIENCE

The page should feel like one continuous journey.

Recommended narrative:

```text
SPLASH
↓
ARRIVAL / HERO
↓
THE BOAT INTRODUCTION
↓
THE VOYAGE
↓
FOOD / CRAFT
↓
SIGNATURE MOMENTS
↓
MENU
↓
MEMORIES / INSTAGRAM
↓
THE PLACE
↓
VISIT
↓
FOOTER
```

Every section should visually transition into the next.

Avoid abrupt disconnected blocks.

---

# 10. SPLASH SCREEN — MAJOR BRAND MOMENT

The splash screen must be one of the most memorable parts of the website.

It must NOT look like:

```text
Loading...
```

It must NOT look like:

```text
Logo centered
spinner
website loads
```

Instead create a short cinematic brand animation.

## SPLASH CONCEPT

### “THE VOYAGE BEGINS”

Use the supplied Boat & Bites logo as the final reference.

Recommended animation:

### 0.0–0.8 sec

Start with a warm cream paper-like background.

Almost empty.

A tiny blue/purple hand-drawn wave line appears near the bottom.

Very subtle paper/grain texture.

### 0.8–1.6 sec

The wave line begins moving horizontally.

A small orange sketch boat appears.

The boat travels across the screen.

The movement is elegant and slightly organic.

### 1.6–2.5 sec

The boat continues forward.

Its movement creates flowing blue and purple wave strokes.

The wave lines begin forming the circular visual structure of the logo.

### 2.5–3.3 sec

The dark emblem begins drawing itself.

The orange boat becomes aligned with the actual supplied logo.

The wave system settles into the correct logo shape.

### 3.3–4.0 sec

The complete original Boat & Bites logo resolves sharply.

Very subtle scale:

```text
0.96 → 1
```

Opacity:

```text
0 → 1
```

Then the page begins its hero transition.

## IMPORTANT

The final logo must match the supplied logo.

Do not morph it into another logo.

Do not change the logo typography.

Do not add text.

Do not add fake symbols.

Do not add a watermark.

---

# 11. SPLASH TRANSITION INTO WEBSITE

The splash should not simply disappear.

Use the wave itself as the transition.

At the end:

```text
logo
↓
wave expands horizontally
↓
wave becomes hero visual mask
↓
hero media appears behind it
↓
navbar fades in
```

This creates the feeling that:

> The boat has entered the restaurant world.

This transition is extremely important.

---

# 12. OPTIONAL SPLASH INTERACTION

On desktop:

A subtle cursor-following wave can appear after the splash.

The movement must be very restrained.

On mobile:

Disable heavy cursor effects.

Keep only the wave transition.

---

# 13. NAVIGATION

The navbar should feel minimal.

Desktop:

```text
[Boat & Bites Logo]     Menu     Story     Moments     Visit     [View Menu]
```

Use the actual navigation content appropriate to available sections.

Do not create links for unavailable information.

## Initial state

Navbar can be:

```text
transparent
```

over hero.

After scrolling:

```text
warm cream
subtle border
backdrop blur
```

Animation:

```text
y: -12 → 0
opacity: 0 → 1
```

Logo subtly scales.

Navigation underline should animate using a short wave-like line rather than a generic CSS underline.

---

# 14. HERO — “ARRIVAL”

The hero should feel cinematic.

Use the strongest authentic supplied:

- Reel
- video
- restaurant image
- exterior image
- food/environment video

Prefer real video if available.

Do not use stock footage.

## Hero composition

Large full viewport:

```text
100svh
```

Desktop.

Mobile:

```text
80–92svh
```

depending on the media.

Add a subtle dark/cream gradient only if required for readability.

Do not over-darken authentic food photography.

---

# 15. HERO STORY

The hero should introduce the idea of arriving at Boat & Bites.

Possible structure:

```text
THE VOYAGE BEGINS

BOAT & BITES

[short real brand statement if available]

EXPLORE THE MENU →
```

If no suitable tagline exists in supplied data:

Do not invent one.

Use only:

```text
BOAT & BITES
```

and navigation.

---

# 16. HERO MOTION

Use subtle cinematic movement:

- slow media scale
- floating wave lines
- masked image reveal
- tiny logo movement
- parallax
- text reveal
- moving grain
- wave path animation

Avoid:

- aggressive zoom
- constant bouncing
- spinning logos
- flashy particle effects
- excessive transitions

The motion should feel expensive.

---

# 17. SECTION: “FOLLOW THE BOAT”

This replaces a conventional About section.

Create a large editorial section with a continuous animated route.

A boat-shaped or wave-inspired SVG path travels through the section.

As the visitor scrolls:

```text
boat → moves along path
```

The path reveals short pieces of content.

Possible nodes:

```text
THE PLACE
THE FOOD
THE TABLE
THE MOMENTS
```

Only use labels supported by actual content.

---

# 18. THE BOAT JOURNEY VISUAL

Create a custom SVG illustration system.

Use:

- orange boat
- blue wave
- purple wave
- dark ink line
- cream background

The boat can travel along:

```text
M → C → C → C
```

SVG path.

Use Framer Motion / Motion values to animate the boat position based on scroll progress.

The animation should feel like the website itself is sailing.

---

# 19. SECTION: “THE TABLE”

Show restaurant atmosphere.

Use authentic:

- interior photos
- people moments
- seating
- lighting
- exterior
- restaurant details

Do not invent descriptions.

Instead use real captions from the dataset where useful.

Create an editorial collage rather than cards.

Example composition:

```text
small image        large image
       text
large image        small image
```

Use asymmetric positioning.

---

# 20. INTERACTIVE MEMORY / MOMENTS SECTION

Inspired by the idea of a memory journey, create:

# “MOMENTS FROM THE VOYAGE”

This should use real Instagram content.

Do not call it “Memories” unless that word exists in the supplied brand content.

## Interaction

Desktop:

Horizontal drag / scroll.

Mobile:

Swipe horizontally.

Each moment is a large visual card.

Each card may contain:

```text
01
IMAGE / VIDEO

caption
date
```

Only display metadata that exists.

---

# 21. MOMENT CARD BEHAVIOR

Cards should not look like Instagram embeds.

They should feel like editorial photographs.

Use:

- variable widths
- different aspect ratios
- overlapping offsets
- subtle rotation
- clipping masks
- wave borders
- large whitespace

Hover:

```text
image scale 1 → 1.04
caption rises slightly
wave line appears
```

---

# 22. VIDEO / REEL HANDLING

Authentic supplied Reels should be treated as premium visual assets.

Use:

```html
<video
  muted
  playsInline
  loop
/>
```

Autoplay only when appropriate.

Use IntersectionObserver.

When video leaves viewport:

```text
pause()
```

When it re-enters:

```text
play()
```

Respect browser autoplay restrictions.

Do not force audio autoplay.

---

# 23. SECTION: “FROM THE KITCHEN”

Create a visual food section using the strongest supplied food media.

Do not invent dishes.

Use real dish names from the scraper or menu assets only.

Layout:

```text
large food image
+
large editorial title
+
small metadata
+
short real description
```

The image should dominate.

---

# 24. FOOD INTERACTION

Create a subtle “dish discovery” interaction.

Example:

A large food image sits in the center.

As the user scrolls:

```text
image changes
dish name changes
small wave line moves
number changes
```

Example:

```text
01 / 06
```

Do not show fake numbering if the dataset does not support the sequence.

The sequence can simply represent UI position.

---

# 25. “CRAFT” SECTION

Instead of generic feature cards, create an immersive visual statement.

Possible structure:

```text
THE CRAFT

large image/video

small metadata
caption

animated wave divider
```

Use authentic restaurant preparation / serving / food media where available.

Do not fabricate cooking claims.

---

# 26. SIGNATURE FOOD SHOWCASE

Create a large horizontal experience.

Desktop:

```text
← previous

       LARGE IMAGE

small text      dish name

                    01 / 06

next →
```

Mobile:

Vertical card with swipe.

The image should remain the hero.

---

# 27. MENU — CENTRAL EXPERIENCE

The menu should be treated as one of the main experiences of the website.

Do NOT use a boring PDF download section.

Do NOT crop menu images.

Use every relevant menu image inside:

```text
/menu
```

---

# 28. MENU SLIDER REQUIREMENTS

Mandatory behavior:

- autoplay
- change every 5 seconds
- continuous loop
- previous button
- next button
- pagination dots
- mobile swipe
- keyboard navigation
- pause on hover
- pause when offscreen
- fullscreen/lightbox
- escape to close lightbox
- touch gestures
- responsive layout
- no image cropping

Use:

```css
object-fit: contain;
```

The entire menu page must remain readable.

---

# 29. MENU VISUAL DESIGN

Do not simply put images inside a generic carousel.

Create a gallery-like menu experience.

Example:

```text
07 / MENU

Take a seat.

[ MENU IMAGE ]

          ←     →

● ○ ○ ○ ○ ○

[OPEN FULLSCREEN]
```

Use cream background.

Add subtle orange and wave-blue controls.

The current menu image can have a subtle shadow.

Background can use a faint paper texture.

---

# 30. MENU TRANSITION

When changing menu images:

Use:

```text
current image
opacity 1
scale 1
↓
opacity 0
scale .985
↓
next image
opacity 1
scale 1
```

Duration:

```text
500–700ms
```

Ease:

```text
cubic-bezier
```

Avoid aggressive carousel movement.

---

# 31. MENU AUTOPLAY PROGRESS

Show a small 5-second progress indicator.

Example:

```text
01
────────────
02
```

or a small animated line.

The line should use orange.

When the timer completes:

```text
next menu image
```

When hovering:

```text
pause timer
```

When leaving viewport:

```text
pause timer
```

---

# 32. MENU FULLSCREEN

Clicking the menu image opens a fullscreen viewer.

Viewer:

- dark ink background
- image centered
- object-contain
- zoom
- previous/next
- close
- keyboard support
- mobile pinch if practical

Never crop menu text.

---

# 33. MENU MICRO-INTERACTION

When hovering the menu:

A small label appears:

```text
VIEW FULL MENU
```

with a subtle wave icon.

Do not use excessive animation.

---

# 34. CONTINUOUS MARQUEE

Create at least one strong horizontal marquee.

Possible content:

```text
BOAT & BITES · FOOD · TABLES · MOMENTS · BOAT & BITES
```

Only use factual brand/content phrases.

The marquee should use:

- cream/ink
- orange separators
- subtle wave marks

Animation:

slow continuous horizontal movement.

The marquee can separate major sections.

---

# 35. THE WAVE AS A DESIGN SYSTEM

The wave is one of the most important recurring elements.

Create one reusable SVG component:

```text
WaveLine
```

Variants:

```text
blue
purple
orange
ink
```

Use it for:

- section separators
- hover lines
- progress bars
- menu indicators
- loading animation
- scroll indicator
- route illustration
- footer decoration

Do not use the wave everywhere.

It should feel like a recurring signature.

---

# 36. “THE PLACE” SECTION

Create a dramatic section showing the physical restaurant.

Use authentic exterior/interior images.

Possible interaction:

As the user scrolls:

```text
small image
↓
expands
↓
becomes full-width
↓
next image appears
```

The effect should feel like the restaurant is revealing itself.

---

# 37. SCROLL-TO-DRAW EFFECT

One signature interaction should be a line drawing that develops while scrolling.

Example:

At the start:

```text
small wave line
```

As user scrolls:

```text
wave grows
↓
boat appears
↓
route continues
↓
section title appears
```

Use SVG stroke-dasharray / stroke-dashoffset.

This should be lightweight and performant.

---

# 38. PHOTO REVEALS

Authentic images should enter using:

```text
clip-path
```

or masked reveal.

Example:

```text
image hidden behind vertical mask
↓
mask expands
↓
full image revealed
```

Use approximately:

```text
0.8–1.2s
```

Do not animate every image individually if it creates performance problems.

---

# 39. IMAGE HOVER

Desktop:

```text
scale 1 → 1.035
```

Very subtle.

Add:

- small caption movement
- wave underline
- arrow movement

Mobile:

Remove hover-only interactions.

---

# 40. STORY SECTION

If the scraper contains a real restaurant story, create an editorial story section.

If no real story is available:

Do not fabricate one.

Instead create:

```text
THE BOAT & BITES JOURNEY
```

using only available real media and captions.

Possible layout:

```text
large heading
small metadata
large image
short authentic caption
```

---

# 41. INSTAGRAM / SOCIAL SECTION

Use the scraper dataset as the source.

Do not create fake Instagram cards.

If Instagram links exist, link to the actual post.

Show:

- authentic images
- authentic Reels
- real captions where useful
- real dates where available

Avoid showing excessive metadata.

The purpose is visual storytelling, not data dumping.

---

# 42. SOCIAL MEDIA INTERACTION

Desktop:

Horizontal drag.

Mobile:

Swipe.

Allow:

```text
drag
momentum
snap
```

Cards can overlap slightly.

Use different image heights to create an editorial rhythm.

---

# 43. “DISCOVER THE BOAT” INTERACTION

Create a small interactive object near the middle of the website.

A miniature orange boat travels across a wave.

When hovered/clicked:

```text
boat moves
wave expands
section reveals
```

Possible destinations:

```text
MENU
MOMENTS
VISIT
```

Only include destinations that actually exist.

This should feel like a brand Easter egg.

---

# 44. VISIT SECTION

Use only real contact/location information from supplied data.

If address exists:

show address.

If phone exists:

show phone.

If Instagram exists:

show Instagram.

If map information exists:

show map.

If something is unavailable:

do not create placeholder information.

---

# 45. VISIT SECTION VISUAL

Do not create a generic contact form unless required.

Instead:

Large heading:

```text
COME ABOARD
```

only if appropriate and not misleading.

Otherwise use:

```text
VISIT
```

Then:

- authentic exterior image
- address
- contact
- opening hours
- social link

with real data only.

---

# 46. FOOTER

Footer should feel like the end of the voyage.

Use deep ink.

Include:

- Boat & Bites logo
- real navigation links
- real social link
- real contact details if supplied

Add a subtle animated wave at the top of the footer.

Final line can be minimal.

Do not invent a slogan.

---

# 47. FOOTER ANIMATION

As footer enters viewport:

```text
wave line draws
↓
logo fades in
↓
navigation appears
```

The wave should travel slowly from one side to another.

---

# 48. PAGE TRANSITION SYSTEM

Use Framer Motion.

Transitions should feel connected.

Recommended:

```text
opacity
y
clip-path
scale
```

Avoid:

```text
spin
bounce
elastic overshoot everywhere
```

The website should feel editorial, not like a motion-design demo.

---

# 49. MOTION TIMING

Recommended durations:

```text
micro interaction: 180–250ms
hover: 250–400ms
small reveal: 500–700ms
section reveal: 700–1000ms
hero transition: 1000–1400ms
splash: exactly 4 seconds
```

Use smooth easing.

---

# 50. SCROLL EXPERIENCE

Scrolling should reveal content progressively.

Do not trigger all animations at page load.

Use:

```text
IntersectionObserver
```

and Framer Motion viewport triggers.

Recommended:

```text
once: true
amount: 0.15–0.3
```

for normal reveals.

For interactive sections, use scroll progress.

---

# 51. PARALLAX

Use subtle parallax:

```text
background image: 0.95x
foreground image: 1x
text: 1.02x
```

Do not create extreme movement.

Parallax should be barely noticeable but make the page feel alive.

Disable or reduce on mobile.

---

# 52. CURSOR

Desktop only.

Optional custom cursor:

- small circular ink cursor
- expands on interactive elements
- becomes a small wave ring over images

Do NOT create a giant flashy cursor.

Do NOT make the cursor interfere with usability.

Mobile:

disabled.

---

# 53. PAPER / MATERIAL TEXTURE

The cream sections may have an extremely subtle paper texture.

It should be almost invisible.

Do not use a noisy background.

The goal is:

```text
printed editorial object
```

not:

```text
old paper website
```

---

# 54. BORDER LANGUAGE

Use thin borders.

Recommended:

```css
border: 1px solid rgba(23,23,23,.12);
```

Use rounded corners sparingly.

Avoid excessive:

```text
rounded-xl
rounded-2xl
cards everywhere
```

The design should feel editorial rather than SaaS.

---

# 55. CARD DESIGN

Do not make every section a card.

Prefer:

- open layouts
- images
- typography
- lines
- whitespace
- overlapping compositions

Cards should be used only when they improve interaction.

---

# 56. DESKTOP LAYOUT

Recommended max width:

```text
1280–1440px
```

Use generous horizontal margins.

Example:

```text
px-6
lg:px-10
xl:px-16
```

Do not make content too narrow.

---

# 57. MOBILE DESIGN

Mobile must feel intentionally designed.

Do NOT simply stack the desktop design.

Mobile should have:

- simplified motion
- large typography
- swipeable media
- full-width imagery
- accessible controls
- readable menu
- comfortable tap targets

Menu must remain completely readable.

---

# 58. MOBILE SPLASH

The splash should still feel premium.

Use:

```text
cream background
small wave
boat movement
logo reveal
```

The 4-second timing remains.

Do not make the splash unnecessarily heavy.

---

# 59. MOBILE NAVIGATION

Use:

```text
logo
menu icon
```

Menu opens as an elegant full-screen overlay.

Use deep ink or cream.

Animate:

```text
wave line
nav items
close button
```

Do not use a generic hamburger drawer.

---

# 60. RESPONSIVE BREAKPOINTS

Support at minimum:

```text
360px
390px
430px
768px
1024px
1280px
1440px+
```

Test all major sections.

---

# 61. ACCESSIBILITY

Required:

- semantic HTML
- alt text for real images
- keyboard navigation
- visible focus state
- accessible buttons
- accessible menu controls
- escape to close modal
- reduced motion support
- sufficient contrast
- no interaction dependent only on hover

Use:

```css
@media (prefers-reduced-motion: reduce)
```

Reduce:

- parallax
- cursor effects
- scroll animations
- autoplay motion

Keep content usable.

---

# 62. PERFORMANCE

This website is media-heavy.

Optimize aggressively.

Use:

```text
lazy loading
poster images
compressed videos
responsive image sizes
WebP/AVIF where practical
```

Hero media can load eagerly.

Below-the-fold media should lazy load.

Do not load every Reel at once.

---

# 63. VIDEO PERFORMANCE

For videos:

```text
muted
playsInline
preload="metadata"
```

Use poster images.

Pause offscreen videos.

Avoid playing multiple large videos simultaneously.

---

# 64. IMAGE PERFORMANCE

Use responsive sources where practical:

```text
srcSet
sizes
```

Do not render a 4000px image into a 400px card unnecessarily.

---

# 65. SEO

Create:

```text
title
meta description
Open Graph
Twitter metadata
canonical URL
```

Only use verified restaurant information.

Do not generate fake SEO keywords.

Use Restaurant schema only when the required real fields exist.

---

# 66. DATA ARCHITECTURE

Do not hardcode all scraped content directly into JSX.

Create a content layer.

Example:

```text
src/
  data/
    restaurant.ts
    instagram.ts
    menu.ts
    media.ts
```

Example:

```ts
export const restaurant = {
  name: "Boat & Bites",
  address: "...",
  phone: "...",
};
```

Only include fields actually available.

---

# 67. MEDIA MANIFEST

Create:

```text
src/data/media.ts
```

with normalized assets.

Example:

```ts
export const media = {
  hero: [],
  food: [],
  interiors: [],
  exterior: [],
  reels: [],
  moments: [],
  menu: [],
};
```

Do not duplicate media unnecessarily.

---

# 68. COMPONENT ARCHITECTURE

Recommended:

```text
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx

    splash/
      SplashScreen.tsx
      BoatLogoReveal.tsx

    hero/
      Hero.tsx

    voyage/
      VoyagePath.tsx
      BoatJourney.tsx

    media/
      MediaReveal.tsx
      ReelPlayer.tsx
      ImageReveal.tsx

    moments/
      MomentsRail.tsx
      MomentCard.tsx

    food/
      FoodShowcase.tsx
      SignatureDish.tsx

    menu/
      MenuExperience.tsx
      MenuSlider.tsx
      MenuLightbox.tsx
      MenuProgress.tsx

    effects/
      WaveLine.tsx
      Marquee.tsx
      SectionReveal.tsx
      ParallaxImage.tsx

    visit/
      VisitSection.tsx
```

---

# 69. REUSABLE WAVE COMPONENT

Create:

```tsx
<WaveLine />
```

Props:

```ts
color
variant
animated
speed
direction
```

This creates visual consistency.

---

# 70. REUSABLE REVEAL COMPONENT

Create:

```tsx
<SectionReveal>
```

Support:

```text
fade
slide
clip
scale
```

Keep animations consistent.

---

# 71. SPLASH IMPLEMENTATION

Recommended:

```tsx
<SplashScreen
  duration={4000}
/>
```

Sequence:

```text
0–800ms
wave

800–1600ms
boat

1600–2500ms
wave expansion

2500–3300ms
logo construction

3300–4000ms
logo hold

4000ms
hero transition
```

Use Framer Motion.

If the supplied 4-second generated video is used:

- preload poster
- autoplay muted
- playsInline
- fallback to SVG/CSS logo animation if video cannot autoplay

---

# 72. SPLASH VIDEO SPECIFICATION

The generated splash video should be designed specifically for this website.

Recommended concept:

> A warm cream paper field. A hand-drawn orange boat enters from the left. The boat creates elegant blue and purple waves. The wave path becomes the circular structure of the Boat & Bites identity. Dark ink details are drawn in. The exact supplied Boat & Bites logo resolves at the end. The animation feels like a premium restaurant brand sketch coming to life.

Duration:

```text
4 seconds
```

No:

- extra text
- people
- food
- random scenery
- ocean realism
- logo redesign
- watermark

The animation should be:

```text
sketch
editorial
minimal
cinematic
premium
organic
```

---

# 73. SPLASH FALLBACK

If the video is unavailable:

Create the same animation in code using:

```text
SVG paths
Framer Motion
opacity
strokeDashoffset
transform
```

The experience must still work.

---

# 74. HERO VIDEO FALLBACK

If a suitable Reel/video exists:

use it.

If not:

use the strongest supplied image.

If no suitable hero media exists:

use the supplied logo with the animated wave system.

Never use stock footage.

---

# 75. CONTENT PRIORITY

When choosing assets:

## Priority 1

Real Boat & Bites video / Reel showing:

- food
- atmosphere
- exterior
- restaurant experience

## Priority 2

Strong authentic restaurant images.

## Priority 3

Menu imagery.

## Priority 4

Logo and brand assets.

Do not use generic stock assets.

---

# 76. IMAGE SELECTION RULE

Do not randomly assign images.

For each image ask:

```text
What story does this image tell?
```

Use:

- food image → food story
- interior → place story
- people → social/moment story
- exterior → arrival/visit
- preparation → craft
- logo → brand transitions

---

# 77. EDITORIAL COMPOSITION

Use asymmetry.

Example:

```text
             SMALL LABEL

     LARGE IMAGE

                    SMALL IMAGE

        HEADING

                         IMAGE
```

Avoid:

```text
[card][card][card]
[card][card][card]
```

unless appropriate for a specific collection.

---

# 78. SECTION NUMBERING

Use editorial numbering where helpful:

```text
01 / ARRIVAL
02 / THE VOYAGE
03 / THE TABLE
04 / FOOD
05 / MENU
06 / MOMENTS
07 / VISIT
```

Do not overuse numbering.

---

# 79. LARGE TYPOGRAPHIC MOMENTS

Use very large typography at selected points.

Example:

```text
THE
VOYAGE
```

or:

```text
GOOD
FOOD.
GOOD
MOMENTS.
```

BUT:

Only use statements supported by the supplied brand direction.

Do not invent marketing claims.

---

# 80. INTERACTIVE SECTION TRANSITIONS

Every major transition should have a visual bridge.

Examples:

```text
hero → voyage
wave expands

voyage → food
boat crosses screen

food → menu
image folds into menu frame

menu → moments
menu page slides into photo strip

moments → visit
wave route reaches destination
```

This is what makes the website feel like one experience.

---

# 81. MENU → MOMENTS TRANSITION

At the bottom of the menu:

Create a small animated wave.

As user scrolls:

```text
wave travels
↓
becomes a photo strip
↓
Instagram moments appear
```

Do not force an overly complex WebGL effect.

SVG/CSS/Framer Motion is enough.

---

# 82. FOOD → MENU TRANSITION

The final food image can visually align with the menu frame.

Use:

```text
large food image
↓
cream mask
↓
menu image
```

This creates continuity.

---

# 83. MICROINTERACTIONS

Buttons:

```text
arrow moves 4–8px
```

Links:

```text
wave underline draws
```

Images:

```text
scale 1.03
```

Menu controls:

```text
orange indicator
```

Boat:

```text
tiny movement
```

Do not animate everything.

---

# 84. LOADING EXPERIENCE

If initial assets require time:

Do not show a spinner.

Show:

```text
Boat & Bites splash
```

The splash is the loading experience.

The user should feel the site is intentionally opening.

---

# 85. ERROR / EMPTY STATES

If Instagram content is missing:

Do not show empty cards.

If menu images are missing:

Do not show broken image icons.

If video fails:

fallback to poster image.

If location is unavailable:

hide visit map.

---

# 86. NO GENERIC AI WEBSITE LOOK

Avoid:

- generic glassmorphism
- excessive gradients
- glowing blobs
- floating 3D cards
- random abstract shapes
- excessive rounded cards
- huge shadows
- fake testimonials
- stock restaurant images
- fake statistics
- generic “About Us” copy
- generic “Best Restaurant” claims

The website must look intentionally art-directed.

---

# 87. VISUAL QUALITY TARGET

The final website should feel closer to:

```text
premium brand website
+
editorial magazine
+
restaurant film
+
interactive story
```

than:

```text
restaurant template
```

---

# 88. ANIMATION QUALITY TARGET

Motion should communicate hierarchy.

Bad:

```text
everything moves
```

Good:

```text
boat moves
wave follows
content reveals
image breathes
```

The user should understand why an element is moving.

---

# 89. DESKTOP EXPERIENCE TARGET

At 1440px desktop:

The site should have:

- cinematic hero
- strong negative space
- large typography
- editorial images
- animated boat/wave
- horizontal discovery
- premium menu
- smooth section transitions
- strong footer

Avoid excessive empty space without purpose.

---

# 90. MOBILE EXPERIENCE TARGET

At 390px:

The site should feel like a premium mobile brand experience.

Important:

- no horizontal overflow
- menu fully readable
- videos fit viewport
- buttons large enough
- no broken parallax
- no oversized typography
- no overlapping text
- no clipped images
- no inaccessible carousel controls

---

# 91. TESTING REQUIREMENTS

After implementation, run the site.

Actually inspect it.

Test:

```text
desktop 1440px
desktop 1280px
tablet 768px
mobile 430px
mobile 390px
mobile 360px
```

Check:

- splash
- hero
- navbar
- scroll transitions
- wave animations
- food media
- menu slider
- menu fullscreen
- Instagram rail
- videos
- visit section
- footer

---

# 92. SPLASH QA

Verify:

- exactly 4 seconds
- logo is not distorted
- boat movement is visible
- wave animation is smooth
- final logo is readable
- no white flash
- no black flash
- hero begins smoothly
- mobile works
- reduced motion works

---

# 93. MENU QA

Verify:

- every relevant menu image is included
- autoplay is exactly 5 seconds
- loop works
- previous works
- next works
- dots work
- swipe works
- hover pause works
- offscreen pause works
- fullscreen works
- object-contain works
- menu text is never cropped

---

# 94. MEDIA QA

Verify:

- no broken images
- no broken videos
- no fake media
- no duplicate media where avoidable
- no low-quality stretched images
- authentic Instagram media is used
- captions match the actual content

---

# 95. CONTENT QA

Search the source code for suspicious invented phrases.

Check for:

```text
Lorem ipsum
Best restaurant
award winning
finest
premium dining
world class
our chef
our story
five star
4.9
```

Remove anything not supported by project data.

---

# 96. RESPONSIVE QA

Check for:

- horizontal overflow
- text clipping
- buttons outside viewport
- menu crop
- video crop
- overlapping navbar
- broken SVG
- broken fixed elements
- excessive animation on mobile

---

# 97. PERFORMANCE QA

Use browser performance tools.

Check:

- Largest Contentful Paint
- image loading
- video loading
- excessive JS
- layout shifts
- animation frame rate

Avoid expensive effects.

---

# 98. ACCESSIBILITY QA

Check:

- keyboard tab navigation
- focus states
- screen-reader labels
- image alt text
- modal escape
- carousel controls
- reduced motion

---

# 99. FINAL ART-DIRECTION CHECK

Before declaring complete, ask:

### Does it feel like Boat & Bites?

Not:

```text
generic restaurant website
```

### Does the boat matter?

It should.

### Do the waves matter?

They should.

### Does the website move like a journey?

It should.

### Does the menu feel special?

It should.

### Does the splash feel memorable?

It must.

### Does the color palette remain the approved Boat & Bites palette?

It must.

### Does the website use real supplied content?

It must.

---

# 100. FINAL CREATIVE CONCEPT

The entire website should communicate one idea:

> **You are not browsing a restaurant website. You are taking a short visual voyage through Boat & Bites.**

The boat is the guide.

The waves are the transition language.

The food is the destination.

The menu is the map.

The Instagram moments are the memories.

The visit section is where the voyage arrives.

The splash screen is the departure.

---

# 101. IMPLEMENTATION ORDER

Build in this order:

```text
1. Inspect all files and data
2. Build content/media manifest
3. Lock color tokens
4. Lock typography
5. Build WaveLine system
6. Build SplashScreen
7. Build hero
8. Build navigation
9. Build Boat Journey section
10. Build food showcase
11. Build place/story sections
12. Build MenuExperience
13. Build Instagram/Moments rail
14. Build Visit section
15. Build Footer
16. Add transitions
17. Add responsive behavior
18. Add accessibility
19. Optimize media
20. Run full QA
21. Polish visually
```

---

# 102. IMPORTANT ANTIGRAVITY INSTRUCTION

Do not stop after creating the first working version.

Build the site.

Run it.

Open it.

Inspect it visually.

Fix it.

Then inspect again.

Specifically look for:

- generic-looking sections
- weak typography
- bad spacing
- excessive cards
- awkward animation
- poor image cropping
- menu readability
- mobile overflow
- weak transitions
- inconsistent wave graphics
- poor hierarchy
- excessive colors
- slow media
- fake content
- disconnected sections

Iterate until the website feels professionally art-directed.

---

# 103. FINAL REQUIREMENT

The finished Boat & Bites website must feel:

**COZY**

**PREMIUM**

**CINEMATIC**

**EDITORIAL**

**INTERACTIVE**

**RESTAURANT-FOCUSED**

**BOAT-INSPIRED**

**AUTHENTIC**

**MEMORABLE**

while preserving the existing Boat & Bites color identity exactly.

The inspiration is the **level of experience and storytelling**, not the appearance of The Cocova.

Build something that makes the visitor think:

> **“This restaurant has a world of its own.”**

