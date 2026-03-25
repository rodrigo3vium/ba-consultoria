

## Plan: Rebrand /educacao/claude-code to Método Stark Identity

### Summary
Transform the entire Claude Code landing page from the current Dark Academia green/gold aesthetic to the Método Stark HUD/Iron Man-inspired identity. This affects `ClaudeCode.tsx` and `ApocalypseSection.tsx`.

### Color mapping (old → new)
- `#0e1a0f` (green-black bg) → `#060A12` (Void)
- `#162318` (green-dark sections) → `#0C1220` (Surface)
- `#1c2e1e` (card bg) → `#0C1220` (Surface) or `#111A2E` (HUD Dark)
- `#c9a227` (gold accent) → `#38BDF8` (Arc Reactor) for most uses, `#F59E0B` (Stark Gold) for stats/badges
- `#f0e6d0` (parchment text) → `#F0F6FF` (Ivory)
- `#6b7d5a` (muted green) → `#5A7089` (Dim) or `#C8D6E5` (Text)
- `rgba(201,162,39,...)` → `rgba(56,189,248,...)` at equivalent opacities

### Typography mapping (old → new)
- `Playfair Display` → `Chakra Petch` (headings, uppercase)
- `Cormorant Garamond` → `Exo 2` (body/descriptions)
- `IM Fell English` → `Exo 2` italic (quotes)
- Generic `monospace` / `DM Sans` → `IBM Plex Mono` (labels, badges, code)
- Google Fonts import updated to: Chakra Petch + IBM Plex Mono + Exo 2

### Branding changes
- Navbar: "BA · CONSULTORIA" → "MÉTODO STARK" in Chakra Petch
- Footer: Update brand name to "MÉTODO STARK", tagline to something Stark-universe appropriate, copyright stays BA Consultoria
- Ornamental dividers: `✦` → subtle `—` line or Arc-style separator (thin gradient line)
- Border-radius: from `2px`/`4px` → `14px` for cards, `6px` for buttons

### Specific section changes

**1. ClaudeCode.tsx (~582 lines) — Full reskin:**
- Body bg `#060A12`, section alt bg `#0C1220`
- Navbar: Surface bg, Arc border, Chakra Petch brand
- Hero: Keep content, apply new fonts/colors, CTA button solid Arc Reactor bg with Void text
- Cards: Surface bg, 0.5px borders at `rgba(56,189,248,0.08)`, hover `rgba(56,189,248,0.18)`, border-radius 14px
- CTA buttons: Primary = solid `#38BDF8` bg, `#060A12` text. Secondary = ghost with Arc border
- All hover handlers updated with new colors
- Google Fonts import at bottom updated

**2. ApocalypseSection.tsx (~531 lines) — Full reskin:**
- All color constants at top updated:
  - `GOLD` → `#38BDF8` (Arc Reactor)
  - `PARCHMENT` → `#F0F6FF` (Ivory)
  - `MUTED` → `#5A7089` (Dim)
  - `CARD_BG` → `#0C1220` (Surface)
  - `SECTION_BG` → `#060A12` (Void)
  - `SECTION_BG_ALT` → `#111A2E` (HUD Dark)
  - `GOLD_DIM` → `rgba(56,189,248,0.7)`
- Stats numbers: use `#F59E0B` (Stark Gold) instead of Arc for visual hierarchy
- Badge backgrounds: `rgba(56,189,248,0.06)`
- Chart strokes: Arc Reactor blue
- News clips: updated browser bar and border colors
- CTA button: solid Arc Reactor
- Typography: Playfair → Chakra Petch, DM Sans → IBM Plex Mono for mono elements
- Grid overlay: Arc-tinted instead of gold-tinted
- Ticker: Arc-colored borders and text

### Files to modify
1. `src/pages/ClaudeCode.tsx` — Full color/font/brand reskin
2. `src/components/claudecode/ApocalypseSection.tsx` — Full color/font reskin of all constants and inline styles

### What stays the same
- All content/copy (titles, descriptions, data)
- Page structure and layout
- Hotmart integration and tracking
- Animation logic (fade, hover transforms)
- Section order

