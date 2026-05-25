# Punjab Angels Network - Website Specification

## Concept & Vision

A premium angel investor network platform that exudes **warm professionalism** and **ambitious energy**. The site should feel like walking into a high-end venture capital firm in Chandigarh — sophisticated yet approachable, authoritative yet grounded in Punjab's entrepreneurial spirit. The visual language communicates trust, growth, and boundless opportunity.

## Design Language

### Aesthetic Direction
**"Warm Capital"** — Inspired by the warmth of golden hour in Punjab fields meeting the sharp professionalism of financial institutions. Rich amber/gold tones layered with deep charcoal, cream textures that evoke quality letterhead, and subtle geometric patterns reminiscent of Punjabi architecture.

### Color Palette
```css
--color-primary: #D4A853;      /* Gold - wealth, growth, ambition */
--color-primary-dark: #B8923E; /* Deep gold */
--color-secondary: #1A1A2E;    /* Deep charcoal */
--color-accent: #E8DCC4;       /* Warm cream */
--color-background: #FDFBF7;    /* Off-white paper */
--color-surface: #F5F0E6;      /* Warm surface */
--color-text: #2D2D2D;         /* Soft black */
--color-text-muted: #6B6B6B;   /* Muted text */
--color-success: #4A7C59;       /* Forest green - growth */
```

### Typography
- **Display**: "DM Serif Display" — elegant, authoritative serifs for headings
- **Body**: "Plus Jakarta Sans" — modern, highly readable, professional warmth
- **Accent**: "JetBrains Mono" — for stats/numbers, technical credibility

### Spatial System
- Base unit: 4px
- Section padding: 80px-120px vertical
- Container max-width: 1280px
- Card radius: 16px (substantial but friendly)

### Motion Philosophy
- **Page load**: Staggered fade-up reveals, 150ms delays
- **Scroll**: Subtle parallax on hero, intersection-triggered reveals
- **Hover**: Lift + shadow expansion, gold border glow
- **Carousels**: Smooth CSS scroll-snap with momentum

### Visual Assets
- **Icons**: Lucide icons (consistent stroke weight)
- **Patterns**: Subtle geometric Punjabi-inspired patterns as section dividers
- **Images**: Placeholder avatars with warm gradient backgrounds
- **Decorative**: Gold gradient lines, subtle noise texture overlay

## Layout & Structure

### Page Architecture
1. **Top Bar** — Contact info + WhatsApp links (compact)
2. **Navigation** — Logo + nav links + Apply Now CTA
3. **Hero** — Full-viewport gradient with floating elements, bold headline
4. **About** — Split layout, text + accent block
5. **Services** — Card carousel with tabs
6. **Team/Chairman** — Large feature section
7. **Board of Advisors** — Photo grid
8. **Investors** — Horizontal scroll carousel
9. **Ecosystem** — 3-column feature blocks
10. **Partners** — Logo carousel
11. **Events** — Event cards grid
12. **Stats** — Counter strip
13. **Membership** — Tabbed comparison
14. **Startups Portfolio** — Logo carousel
15. **Testimonials** — Quote carousel
16. **Footer** — Multi-column with social links

### Responsive Strategy
- Mobile-first
- Breakpoints: 640px, 768px, 1024px, 1280px
- Stack columns on mobile, expand to grid on desktop
- Carousels become swipeable on touch

## Features & Interactions

### Navigation
- Sticky header after scroll
- Mobile hamburger menu with slide-in drawer
- Active state highlighting

### Hero Section
- Animated gradient background
- Staggered text reveal
- Floating geometric accents
- CTA buttons with hover glow

### Service Cards Carousel
- Horizontal scroll with snap
- 3 visible on desktop, 1 on mobile
- Dot indicators
- Touch swipe enabled

### Investor/Startup Carousels
- Horizontal infinite scroll
- Pause on hover
- "See All" link

### Stats Counter
- Count-up animation on scroll into view
- Large display numbers

### Membership Tabs
- Investors / Corporates toggle
- Smooth content transition
- CTA buttons for each tier

### Footer
- Contact info
- Quick links
- Social icons with hover color shift

## Component Inventory

### TopBar
- States: default
- Contains: address link, email link, WhatsApp icons

### Navbar
- States: default, scrolled (condensed), mobile-open
- Contains: logo, nav links, CTA button, mobile toggle

### Hero
- States: loaded (with animations)
- Contains: headline, subtext, CTA buttons, decorative elements

### SectionHeading
- States: default
- Contains: eyebrow text, main heading, optional subtext

### ServiceCard
- States: default, hover
- Contains: icon, title, description, learn more link

### TeamCard
- States: default
- Contains: image, name, role, description

### AdvisorCard
- States: default, hover
- Contains: photo, name

### InvestorCard
- States: default
- Contains: avatar, name

### PartnerLogo
- States: default, hover
- Contains: logo image

### EventCard
- States: default, hover
- Contains: date, title, image, read more link

### StatCounter
- States: default, counting
- Contains: number, label, icon

### MembershipTab
- States: active, inactive
- Contains: tab trigger, content panel with list and CTA

### TestimonialCard
- States: default
- Contains: quote, author name, author role

### Footer
- Contains: contact section, links grid, social icons, copyright

## Technical Approach

### Framework
- **Astro** — Static site generation, partial hydration where needed
- **daisyUI** — Component primitives on top of Tailwind
- **Tailwind CSS** — Utility-first styling with custom theme

### Architecture
```
/
├── src/
│   ├── components/
│   │   ├── TopBar.astro
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Team.astro
│   │   ├── Advisors.astro
│   │   ├── Investors.astro
│   │   ├── Ecosystem.astro
│   │   ├── Partners.astro
│   │   ├── Events.astro
│   │   ├── Stats.astro
│   │   ├── Membership.astro
│   │   ├── Startups.astro
│   │   ├── Testimonials.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       └── index.astro
├── public/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

### Key Implementation Notes
- Use Astro's component-based architecture
- daisyUI theme customization for brand colors
- CSS animations for performance
- Intersection Observer for scroll-triggered animations
- CSS scroll-snap for carousels
