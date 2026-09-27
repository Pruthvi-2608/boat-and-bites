BOAT & BITES — PREMIUM PRODUCTION WEBSITE DESIGN SYSTEM

Project: Boat & Bites, Surat
Purpose: Complete rebuild of the restaurant website from scratch
Status: MASTER DESIGN SPECIFICATION
Implementation: React + Vite + Tailwind CSS + Framer Motion + Lucide React

00 — THE MOST IMPORTANT INSTRUCTION

This is a full visual rebuild, not a redesign of the current implementation.

The existing website shown in the supplied screenshot is only a reference for understanding what has already been built. Do not preserve its layout, hero composition, component structure, navigation treatment, typography system, or visual hierarchy. Remove the old website implementation and build a new experience from the ground up.

Keep and reuse only genuine source material:

supplied Boat & Bites logo

Instagram scraper dataset

authentic Instagram photos/videos/Reels

supplied restaurant media

menu assets/folder

verified restaurant information

necessary project configuration

The supplied screenshots show the real visual identity and physical restaurant. The logo shows a boat + fork/spoon + orange/blue/purple wave motif. The restaurant itself is visually distinctive: a boat-shaped/boat-themed waterfront venue with circular porthole windows, illuminated night architecture, decks, water, warm dining interiors, and strong orange/cream branding. These characteristics must inform the art direction.

Do not turn those characteristics into generic nautical decoration. The site should feel like a digital extension of the actual Boat & Bites brand.

01 — CREATIVE NORTH STAR

Concept: “DINNER HAS A DECK.”

The website should feel like entering the Boat & Bites vessel after sunset.

The experience is not:

hero → cards → menu → testimonials → footer

The experience is:

ARRIVE → BOARD → MOVE THROUGH THE BOAT → DISCOVER THE ATMOSPHERE → SEE THE FOOD → OPEN THE MENU → REMEMBER THE NIGHT → FIND THE DECK

The page should behave like an interactive editorial film.

Core design principles

Art direction over templates.

Photography over decoration.

Typography over UI clutter.

Motion with purpose.

Real restaurant content over generated filler.

Asymmetry over repetitive cards.

Strong negative space over crowded layouts.

The boat identity must appear as a system, not a gimmick.

Every section must have a distinct visual idea.

The home page must be memorable even with the text removed.

The quality target is closer to an editorial/art-direction site than a normal restaurant template. Inspiration can be drawn from the strong typography, unusual layouts, art direction and food/restaurant showcases collected by SiteInspire, without copying any specific site's design or assets. citeturn0search0turn0search1turn0search2

02 — BRAND DNA FROM THE SUPPLIED LOGO

The supplied logo contains four useful visual ingredients:

boat silhouette → movement / destination / waterfront

cutlery symbol → food / dining

orange linework → energy / warmth

blue + purple waves → water / depth / atmosphere

Do not treat the logo as something that only belongs in the navbar.

Extract its visual language into:

thin wave paths

orange navigation accents

tiny boat marks

circular/porthole geometry

editorial rules

animated line drawings

section transitions

subtle background patterns

Never repeatedly paste a giant logo everywhere.

03 — APPROVED COLOR PALETTE

Use this palette as the foundation:

:root {
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
}

Usage ratio

Approximate visual balance:

50–60% cream/warm-white

20–25% deep ink/dark navy

10–15% photography/media

5–8% orange

2–5% blue/purple wave accents

Do not make the entire website dark.
Do not make it orange.
Do not use blue/purple as generic gradients.

The dark color should feel like night water / the evening boat deck, while cream feels like printed menu paper / warm dining light.

04 — TYPOGRAPHY SYSTEM

Do not use a generic tech font stack.

Display

Use a refined editorial serif with high contrast, preferably:

Cormorant Garamond

Alternative only if unavailable: another elegant editorial serif with a similar character.

Use for:

hero headline

major section titles

oversized single words

pull quotes

menu introduction

Interface/body

Use:

Manrope

Use for:

navigation

buttons

labels

descriptions

captions

metadata

Optional accent

A restrained monospace or condensed sans can be used only for micro-labels such as:

DECK 01 / 06
SURAT / GUJARAT
OPEN MENU

Do not turn the whole site into a terminal/tech aesthetic.

Typography behavior

Headings should not all be centered.

Use:

left-aligned editorial blocks

giant edge-aligned words

occasional vertical labels

small uppercase metadata

intentional line breaks

Do not use the current screenshot's large centered-left hero copy as the template for the new site.

05 — OVERALL PAGE ARCHITECTURE

The new page should feel like one continuous art-directed journey:

01  LOADING / BOARDING
02  HERO — THE BOAT AT NIGHT
03  THE DECK / INTRO
04  THE VESSEL — ARCHITECTURE STORY
05  ATMOSPHERE — DAY / NIGHT
06  FOOD — THE TABLE
07  THE MENU — UNLIMITED MENU EXPERIENCE
08  SOCIAL LOG / INSTAGRAM
09  BANQUETS / OCCASIONS
10  OUR STORY
11  VISIT / THE DESTINATION
12  FOOTER — LAST LIGHT ON THE WATER

Navigation anchors can remain concise:

Voyage Deck

Atmosphere

Unlimited Menu

Banquets

Our Story

Visit Us

But the visual structure underneath them must be completely new.

06 — HOME / HERO: MUST BE THE PIECE OF ART

This is the most important requirement.

The first viewport must NOT look like a normal website hero.

Hero concept: “THE BOAT IS ALREADY MOVING.”

The supplied restaurant night imagery should dominate the opening experience.

Preferred visual

Use the strongest authentic night exterior/boat image or authentic restaurant video from the supplied project/Instagram dataset.

The restaurant's illuminated circular portholes, glowing signage and reflections on water are valuable visual assets. The hero should exploit them.

Composition

Instead of:

text left + food cutouts right + dark gradient

build:

FULL-BLEED CINEMATIC RESTAURANT MEDIA

with an editorial overlay system.

Possible composition:

┌─────────────────────────────────────────────┐
│ small logo                     MENU / BOOK  │
│                                             │
│                         01 / BOARDING       │
│                                             │
│  BOAT &                                     │
│  BITES.                                     │
│                                             │
│                  [real boat image/video]    │
│                                             │
│  DINING ON THE WATER / SURAT                │
│                                             │
│      ~~~~~~~~~ animated wave ~~~~~~~~       │
└─────────────────────────────────────────────┘

But do not implement this literally as a boxed layout. The elements should overlap the real photograph.

Hero headline

Do not invent a factual slogan.

Use a short brand/editorial phrase that does not make unsupported claims.

Examples of direction, not mandatory copy:

BOAT & BITES

COME ABOARD.

DINING, IN MOTION.

THE TABLE IS ON DECK.

If the supplied dataset contains an established tagline, prefer the authentic one.

Hero animation

On initial load:

cream flash / paper texture

logo mark appears briefly

a thin orange line draws the boat path

the real hero image/video is revealed through a mask

headline types/reveals in 2–3 controlled beats

a tiny wave line travels across the bottom

navigation settles into place

Total opening choreography: approximately 2.5–4 seconds.

Do not delay access to content with a long splash.

07 — HERO INTERACTION

The hero should respond subtly to cursor movement.

Use a restrained depth system:

background image moves 4–8px

foreground text moves 2–4px

wave line responds slightly

small boat icon follows a path

No giant cursor.
No magnetic buttons everywhere.
No WebGL unless performance remains excellent.

On mobile, replace cursor effects with scroll-based movement.

08 — NAVIGATION: “DECK CONTROL”

The navbar should feel like a control strip on a modern vessel.

Desktop

Logo at left.

Minimal links.

Right-side primary action:

RESERVE / CONTACT

only if supported by supplied information.

Scroll behavior

At hero:

transparent

blends into image

After scroll:

cream/dark glass-free solid surface

subtle border

compact height

Do not use heavy glassmorphism.

Mobile

Use:

compact logo

circular/rounded menu button

full-screen editorial navigation

Opening animation:

cream panel expands

wave line draws across

links appear sequentially

09 — SECTION: “BOARDING”

After hero, create a transition that feels like entering the restaurant.

Use one large authentic image of the boat/entrance.

Overlay a tiny label:

BOARDING / 01

Then a large serif statement.

The image should be partially cropped by the viewport, creating a magazine spread rather than a normal section.

Add a vertical/diagonal wave path connecting the hero to the next section.

10 — SECTION: THE VESSEL

Use the actual architecture shown in the supplied screenshots:

circular porthole windows

deck geometry

boat silhouette

exterior lighting

water reflections

Layout

Create a large split editorial composition:

Left:

giant number 01

small label THE VESSEL

serif heading

Right:

tall architecture photograph

Then invert the arrangement in the next visual beat.

Avoid repeated two-column sections.

Porthole motif

Use 2–4 circular image windows as a subtle reference to the restaurant's physical portholes.

Each circular window can reveal a different authentic photograph on hover/scroll.

This is a key brand-specific interaction.

11 — SECTION: “DAY TO NIGHT”

This section should exploit the supplied imagery showing the restaurant in different lighting conditions.

Concept:

THE SAME BOAT. TWO MOODS.

Create a horizontal image comparison / scroll transformation:

Day image → dusk → night

Use real supplied images.

On desktop:

sticky visual

text and labels move horizontally

On mobile:

swipeable image sequence

Do not fake day/night color grading if authentic images exist.

12 — SECTION: ATMOSPHERE

This should be a cinematic media gallery, not a grid.

Use authentic:

dining room images

night exterior

deck images

aerial/boat images

event images

videos/Reels

Layout idea

Use a large central image with smaller images orbiting around it asymmetrically.

Example:

        [small vertical]

[large cinematic image]
                   [small square]

          [small wide image]

As the user scrolls, the small images subtly move at different speeds.

No cards unless a card is genuinely necessary.

13 — SECTION: “THE TABLE”

Now shift the visual language from architecture to food.

Use food images from the supplied content.

Concept

The table becomes the visual center.

A large overhead/table photograph can sit behind a cream editorial panel.

Then use individual food images as floating cutouts only if they are authentic supplied images with clean backgrounds.

Do not manufacture food cutouts if the source does not support them.

Motion

Food images can gently enter as the user scrolls, but never fly around excessively.

14 — FOOD STORYTELLING

Use the actual food content discovered in the Instagram scraper.

Do not invent dish descriptions.

Instead of a menu-card grid, create a visual food index.

Example structure:

THE TABLE

01  [large food photograph]
02  [large food photograph]
03  [detail photograph]
04  [video]

Clicking an image can open a large media viewer with authentic caption/date when available.

15 — SIGNATURE VISUAL: THE PORTHOLE

Create one memorable interaction based on the real architecture.

A circular viewport can reveal a close-up food/restaurant image.

As the user scrolls:

circle grows

image changes

circle becomes a full viewport

transition into the menu section

This should be a signature Boat & Bites interaction.

Use Framer Motion + CSS clip-path/mask.

Do not over-engineer it with WebGL.

16 — MENU SECTION: “UNLIMITED MENU”

This section should be a centerpiece, not an ordinary carousel.

Visual concept

Treat the menu like a physical premium restaurant menu being placed on the table.

Background:

warm cream

subtle paper grain

tiny wave/boat linework

Center:

large menu artwork

generous surrounding whitespace

Side metadata:

MENU / 01

SWIPE TO EXPLORE

Only use verified information.

17 — MENU FUNCTIONAL REQUIREMENTS

Use every relevant image from the menu folder.

Required:

autoplay every 5 seconds

infinite loop

previous

next

pagination dots

mobile swipe

drag interaction

pause on hover

pause when offscreen

resume when visible

fullscreen/lightbox

Escape to close

keyboard left/right navigation

object-fit: contain

no cropping

no distortion

Fullscreen

Fullscreen viewer should feel like opening a physical menu under a spotlight.

Background:

--deep-ink

Menu remains fully visible.

Add minimal controls.

18 — MENU TRANSITION

When entering the menu section, animate the menu page from slightly below and rotate by no more than 1–2 degrees, creating the feeling of a menu being placed on a table.

Do not use a dramatic 3D card flip.

The transition should be elegant.

19 — INSTAGRAM / SOCIAL SECTION

The supplied screenshots show strong social proof through real visual media.

Use the Instagram scraper dataset as a first-class source.

Do not merely create an “Instagram” grid.

Create:

“LOGBOOK”

A chronological/curated visual journal of Boat & Bites.

Each entry may show:

authentic image/video

date if available

authentic caption excerpt

source/platform

link to original post if available

Use horizontal editorial scrolling.

Interaction

On desktop:

drag horizontally

wheel-to-horizontal behavior where appropriate

On mobile:

touch swipe

Hover:

image gently zooms

caption metadata appears

No fake engagement numbers.

20 — SOCIAL MEDIA VISUAL SYSTEM

Do not show platform logos on every card.

Use a tiny source marker in the corner.

Example:

IG / 2026

Only when the data contains a date.

The visual should remain about the restaurant, not the social platform.

21 — BANQUETS / OCCASIONS

The supplied imagery shows the venue can support larger gatherings/events.

Only describe banquet/event functionality if verified by supplied data.

Design concept

Create a dramatic dark section:

Large image/video fills approximately 70% of the viewport.

A cream editorial panel overlaps it.

Heading:

GATHER ON DECK

or another factual/brand-appropriate heading.

Use verified information only.

If no banquet information is available, omit this section entirely rather than inventing it.

22 — OUR STORY

Do not write a fictional restaurant history.

If authentic story/history exists in the supplied dataset, present it as an editorial timeline.

Otherwise create a visual brand story using only factual supplied information:

location

restaurant identity

boat concept

food concept

authentic media

Timeline style

Use a vertical wave path.

Each factual point appears as the boat moves along the path.

This becomes a visual narrative rather than a generic “About Us” block.

23 — VISIT SECTION: “FIND THE BOAT”

The final major section should feel like arriving at the destination.

Use the strongest exterior image, preferably an evening/night image with visible lighting and water.

Composition

Full viewport visual.

A cream or warm-white information panel enters from the side.

Include only verified:

address

phone

opening hours

map link

Instagram

reservation/contact

If a field is unavailable, omit it.

24 — FINAL BOAT ANIMATION

At the visit section, the small boat illustration reaches the end of the wave path.

It stops.

The wave settles.

Then the CTA appears.

This closes the narrative loop started in the hero.

25 — FOOTER

Minimal.

Use the logo mark at a tasteful size.

Possible structure:

BOAT & BITES

THE DECK
THE MENU
THE ATMOSPHERE
OUR STORY
VISIT

[verified social/contact links]

© Boat & Bites

Do not add fake legal/company information.

26 — MICRO-INTERACTION LANGUAGE

Use a consistent motion vocabulary:

Lines

Draw from left to right.

Images

Reveal with clip-path or mask.

Text

Reveal upward with small stagger.

Buttons

Underline or small directional arrow movement.

Boat

Moves along curved paths.

Waves

Slowly draw/reveal.

Portholes

Expand/crop images through circular masks.

Cursor

Only subtle media-aware behavior.

Never use random bouncing animations.

27 — MOTION TIMING

Use premium timing, not flashy timing.

Typical values:

micro interaction: 180–280ms
button: 250–350ms
image reveal: 700–1100ms
section reveal: 700–1200ms
hero choreography: 2500–4000ms
large transition: 1000–1600ms

Use ease-out / custom cubic-bezier curves.

Avoid everything animating at the same speed.

28 — SCROLL BEHAVIOR

The site should feel responsive to scroll.

Use:

sticky media

horizontal storytelling

parallax at low intensity

clip-path reveals

image scaling

typography movement

Do not hijack normal page scrolling.

Do not force a full-page scroll-jacking experience.

Touch devices must remain natural.

29 — RESPONSIVE ART DIRECTION

Required viewport checks:

360px

390px

430px

768px

1024px

1280px

1440px

1920px

Mobile is NOT a collapsed desktop.

Mobile rules

hero remains cinematic

typography remains expressive but readable

horizontal sections become touch rails

overlapping elements are simplified

porthole interactions remain usable

menu remains fully readable

navigation becomes full-screen/overlay

no horizontal page overflow

30 — ACCESSIBILITY

Implement:

semantic HTML

proper heading hierarchy

keyboard navigation

visible focus states

aria labels for icon-only controls

alt text based on real media

reduced motion

readable contrast

minimum touch target sizes

Do not hide essential information only behind hover.

31 — REDUCED MOTION

Support:

@media (prefers-reduced-motion: reduce) {
  /* minimize large movement */
}

Disable/reduce:

parallax

automatic decorative movement

complex path animation

large image transforms

Functionality must remain intact.

32 — PERFORMANCE

The project may contain many high-resolution images and videos.

Implement:

lazy loading

responsive image sizes

poster images for video

IntersectionObserver for video playback

pause offscreen videos

avoid loading every video simultaneously

prevent cumulative layout shift

optimize animations

avoid huge JS animation loops

The experience should remain smooth on normal laptops and modern phones.

33 — CONTENT DISCOVERY WORKFLOW

Before UI implementation, recursively inspect the project.

Find:

logo
menu/
instagram scraper data
JSON/CSV exports
images
videos
Reels
captions
URLs
restaurant details
contact details
location details

Create a media/content manifest.

Suggested fields:

{
  id,
  src,
  type,
  source,
  caption,
  date,
  url,
  width,
  height,
  category,
  recommendedSection
}

The website should use the manifest instead of randomly importing files throughout components.

34 — CONTENT TRUTH RULE

Never invent:

prices

dishes

reviews

ratings

awards

address

hours

phone

offers

testimonials

statistics

history

claims

If the data does not exist, omit the element.

The website can be visually rich without fake content.

35 — NO AI SLOP RULES

Absolutely avoid:

generic glassmorphism cards

excessive gradients

purple AI-style backgrounds

giant rounded rectangles everywhere

floating 3D blobs

generic food emoji

random decorative sparkles

fake testimonials

stock restaurant photography

generic “elevate your dining experience” copy

excessive pill buttons

dashboard-style layouts

3-column card repetition

excessive shadows

overuse of blur

giant meaningless statistics

unnecessary carousel sections

every section having the same background

every image having identical rounded corners

huge amounts of centered text

AI-generated decorative illustrations unrelated to the logo

If a design element does not strengthen Boat & Bites, remove it.

36 — ANTI-GENERIC LAYOUT RULE

Do not make every section follow:

heading
paragraph
3 cards
button

Each major section must have its own composition.

Examples:

full-bleed cinematic hero

editorial split

porthole reveal

horizontal story

sticky image

overlapping gallery

full-screen comparison

physical menu presentation

social logbook

destination reveal

This variety is essential.

37 — VISUAL RHYTHM

Alternate:

dark → cream → image → cream → dark → image → cream

Use negative space intentionally.

The user should never feel trapped inside a repetitive card grid.

38 — IMAGE CROPPING RULES

For normal editorial photography:

Use controlled cropping to create composition.

For menu pages:

NEVER CROP.

For architecture:

Allow dramatic crops around circular portholes, signage, decks and reflections.

For food:

Prefer natural appetizing framing.

39 — VIDEO RULES

For supplied authentic videos/Reels:

muted autoplay where appropriate

playsInline

loop where appropriate

pause outside viewport

poster fallback

no forced sound

accessible controls if user interaction is needed

The first hero video should not create a huge loading delay.

40 — SEO

Implement:

meaningful title

factual meta description

Open Graph metadata

semantic headings

alt text

canonical URL if known/configured

Do not make unsupported SEO claims.

41 — TECHNICAL COMPONENT MAP

Suggested architecture:

src/
├── components/
│   ├── brand/
│   │   ├── BrandMark.jsx
│   │   ├── WaveLine.jsx
│   │   └── BoatPath.jsx
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   │   ├── Boarding.jsx
│   │   ├── Vessel.jsx
│   │   ├── DayNight.jsx
│   │   ├── Atmosphere.jsx
│   │   ├── Table.jsx
│   │   ├── MenuExperience.jsx
│   │   ├── Logbook.jsx
│   │   ├── Banquets.jsx
│   │   ├── Story.jsx
│   │   └── Visit.jsx
│   ├── media/
│   │   ├── SmartImage.jsx
│   │   ├── SmartVideo.jsx
│   │   └── MediaViewer.jsx
│   └── ui/
├── data/
│   ├── mediaManifest.js
│   └── restaurantContent.js
├── hooks/
├── utils/
├── assets/
├── App.jsx
└── main.jsx

Adjust only when necessary.

42 — MENU COMPONENT BEHAVIOR

The menu component should internally manage:

currentIndex
isPaused
isFullscreen
isInViewport

Autoplay logic:

if visible && !hovered && !fullscreen:
    advance every 5000ms
else:
    pause

Use cleanup for timers.

Do not create multiple autoplay intervals.

43 — MEDIA VIEWER

Create a reusable fullscreen media viewer.

Features:

close

previous/next

keyboard support

backdrop

body scroll lock

responsive media sizing

caption when authentic caption exists

Menu viewer must use contain.

44 — DATA-DRIVEN SOCIAL LOG

Instagram content should be rendered from data.

Example:

{
  source: "instagram",
  type: "reel",
  media: "...",
  caption: "...",
  date: "...",
  url: "..."
}

Never fabricate missing fields.

45 — FIRST-LOAD EXPERIENCE

The first 5 seconds are critical.

Sequence:

0.0 — cream/ink brand cue
0.4 — boat/wave line appears
0.8 — hero media begins revealing
1.3 — logo settles
1.7 — hero typography appears
2.5 — navigation becomes visible
3.0 — scroll cue begins

The user should be able to interact quickly.

Do not show a long blocking loading animation.

46 — HERO ART-DIRECTION DETAILS

Use the actual restaurant's physical architecture as a visual asset.

Important recurring shapes:

porthole circles

boat curves

deck rails

water reflections

illuminated signage

long horizontal deck lines

Use these shapes in transitions and framing.

This creates a site that belongs specifically to Boat & Bites.

47 — “PORT HOLE” CURSOR / HOVER IDEA

Desktop-only optional interaction:

When hovering selected media, a small circular viewport can follow the cursor by a few pixels.

Inside it, show a zoomed detail of the same image.

Keep it subtle and disable for touch devices.

Do not use this everywhere.

48 — EDITORIAL NUMBERING SYSTEM

Use small section identifiers:

01 / BOARDING
02 / THE VESSEL
03 / ATMOSPHERE
04 / THE TABLE
05 / THE MENU
06 / LOGBOOK
07 / VISIT

This gives the page a magazine/editorial structure.

Do not overuse numbers.

49 — COPY STYLE

Copy should be:

short

confident

sensory

human

editorial

not corporate

Avoid generic AI phrases such as:

“where culinary excellence meets…”
“an unforgettable gastronomic journey…”
“elevate your dining experience…”

Use authentic captions or factual descriptions wherever possible.

If creative copy is necessary, keep it brand-level and non-factual.

50 — FINAL QUALITY BAR

The finished result should make someone think:

“This feels like a real restaurant brand with a strong creative director behind it.”

Not:

“This looks like a website generator template.”

The site should be visually strong even if the user does not read a single paragraph.

The combination of:

real Boat & Bites photography + logo-derived waves + porthole geometry + editorial typography + cinematic motion + physical-menu interaction

is the unique design language.

51 — REQUIRED QA LOOP

After implementation, run the actual website and inspect it visually.

Check at:

360 × 800
390 × 844
430 × 932
768 × 1024
1024 × 768
1280 × 800
1440 × 900
1920 × 1080

Inspect:

first-load animation

hero composition

nav

scroll behavior

typography

media crops

video behavior

porthole interaction

horizontal sections

menu readability

menu autoplay

menu swipe

fullscreen

hover pause

offscreen pause

mobile navigation

footer

overflow

performance

Then fix issues.

Run another visual inspection.

Do not stop after the first build.

52 — FINAL ANTI-SLOP CHECKLIST

Before declaring complete:

Old website implementation removed/replaced

New component architecture created

Real logo used

Real Instagram data inspected

Real Instagram media used

Real restaurant photography prioritized

Menu folder fully inspected

Every relevant menu image included

Menu changes every 5 seconds

Menu loops

Menu has previous/next

Menu has dots

Menu supports swipe

Menu pauses on hover

Menu pauses offscreen

Menu supports fullscreen

Menu uses contain / no crop

Boat/wave identity appears throughout

Porthole visual language used thoughtfully

Home hero feels like a piece of art

No generic card-grid homepage

No fake restaurant facts

No fake reviews

No fake pricing

No generic stock photography

No random AI decoration

No excessive gradients

No excessive glassmorphism

Typography is editorial

Desktop inspected

Mobile inspected

Reduced motion implemented

Videos pause offscreen

All visible buttons work

Final visual polish completed

53 — IMPLEMENTATION COMMAND FOR ANTIGRAVITY

Read this entire Boat-and-Bites-Premium-Production-Design.md before coding.

Then execute this exact workflow:

PHASE 1 — DESTROY THE OLD UI

Remove the previous Boat & Bites website implementation completely.
Do not patch it.
Do not reuse its visual structure.
Do not preserve its hero layout.
Do not preserve its card system.

PHASE 2 — DISCOVER REAL CONTENT

Recursively inspect the complete project and identify:

logo

menu folder

Instagram scraper dataset

photos

videos

Reels

captions

dates

URLs

restaurant details

Create a content/media manifest.

PHASE 3 — BUILD THE BRAND SYSTEM

Create the new color tokens, typography, spacing, motion and media rules defined here.

PHASE 4 — BUILD THE NEW HOMEPAGE

Build the cinematic full-bleed hero first.
It must NOT resemble the screenshot's current hero.

PHASE 5 — BUILD THE STORY

Implement:

Boarding → Vessel → Day/Night → Atmosphere → Table → Menu → Logbook → Banquets → Story → Visit.

Only include sections supported by real content.

PHASE 6 — BUILD MOTION

Implement purposeful Framer Motion interactions:

mask reveals

wave drawing

porthole reveal

scroll movement

image parallax

typography reveal

menu transitions

PHASE 7 — BUILD THE MENU

Implement all required carousel/fullscreen behavior.

PHASE 8 — RESPONSIVE

Design mobile intentionally rather than collapsing desktop.

PHASE 9 — RUN AND INSPECT

Open the actual running website.

PHASE 10 — POLISH

Fix everything that feels:

generic

repetitive

unfinished

cramped

too plain

over-animated

poorly cropped

inconsistent

inaccessible

slow

FINAL RULE

Do not finish merely because the code runs.

Finish when the rendered website looks like a premium, production-ready Boat & Bites brand experience and the home section genuinely feels like a piece of art.

