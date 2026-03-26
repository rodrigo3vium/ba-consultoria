

## Plan: Fix "O Mundo Se Dividiu" Scroll Animation on Production

### Problem
The scroll-driven animation depends entirely on the video loading. Line 57 checks `if (!video.duration)` — if the video fails to load or is slow, `scrollProgress` never updates, so the video never plays. The cards work because they still get the initial `scrollProgress` value that triggers their entrance, but the video scrubbing never starts.

### Root Cause
The video file `/videos/mundo_dividindo.mp4` may not be loading on the production domain, or loads too slowly. The entire scroll logic is gated behind `video.duration` being truthy.

### Solution
Decouple the scroll progress calculation from the video readiness. Two separate concerns:

1. **Scroll tracking** — always runs, updates `scrollProgress` based on section position
2. **Video scrubbing** — only runs when video is ready, reads `scrollProgress` to set `currentTime`

### Changes — `src/pages/MetodoStark.tsx`

**Replace the single `useEffect` (lines 48-83) with two:**

1. **Scroll observer** (no video dependency):
   - rAF loop that reads `sectionRef.getBoundingClientRect()`
   - Calculates and sets `scrollProgress` always
   - No dependency on `videoReady` or `video.duration`

2. **Video scrubber** (depends on `videoReady` + `scrollProgress`):
   - Separate `useEffect` watching `videoReady` and `scrollProgress`
   - When video is ready, sets `video.currentTime` based on `scrollProgress`
   - Uses lerp for smooth interpolation as before

This ensures the cards animate and scroll progress works even if the video never loads, while the video still scrubs smoothly when available.

### Files to edit
1. `src/pages/MetodoStark.tsx` — Split the scroll/video useEffect into two independent effects

