

## Plan: Replace Seção 03 with Interactive Reactor Component

### Summary
Replace the static belief cards in Seção 03 ("O Mecanismo") with an interactive SVG reactor visualization where users click on 6 segments to reveal principle cards. Keep Seção 04 ("O Que É o Método Stark") unchanged.

### What changes

**File: `src/components/metodostark/MechanismSection.tsx`**

Complete rewrite of Seção 03 (lines 83-211) to include:

1. **Interactive SVG Reactor** — A circular reactor with 6 clickable segments, each representing one of the 6 principles (beliefs). Concentric rings rotate with CSS animations. Clicking a segment highlights it and displays the corresponding content card below.

2. **Content Card** — Appears below the reactor when a segment is clicked, showing the principle number, title, and description with a styled card (corner accents, gradient lines).

3. **Visual effects** — Grid background, radial glow, scanlines overlay, floating particles, HUD corner decorations, power readout text. All via CSS (inline styles + a `<style>` tag).

4. **State management** — `useState` for active segment index, click handlers on SVG segments, ripple animation on click.

5. **Seção 04 remains unchanged** — The alphaItems grid and its header stay exactly as they are.

### Technical approach
- Convert the provided HTML/CSS/JS into a single React component with hooks (`useState`, `useEffect`, `useRef`)
- The SVG reactor has 6 segments positioned radially at 60° intervals, each with an icon, label, and energy line
- CSS animations (`@keyframes`) embedded via `<style>` tag in JSX
- The 6 beliefs data array stays the same, mapped to reactor segments
- Segment positions calculated with trigonometry for the hexagonal layout
- Responsive: labels hidden on mobile, HUD corners hidden on small screens

### Files to edit
1. `src/components/metodostark/MechanismSection.tsx` — Full rewrite of Seção 03, keep Seção 04

