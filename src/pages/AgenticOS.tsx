import { useEffect } from "react";
import { tracker } from "@/lib/tracking";

const AgenticOS = () => {
  useEffect(() => {
    tracker.page("Agentic OS");
    document.body.style.backgroundColor = "#05090B";
    document.body.style.paddingTop = "0";

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.id = "aos-styles";
    style.textContent = `
:root {
  --aos-bg-main: #05090B;
  --aos-bg-deep: #020405;
  --aos-bg-card: #0B1114;
  --aos-bg-texture: #11171A;
  --aos-bg-elevated: #0F1518;
  --aos-text-primary: #F2EDE4;
  --aos-text-secondary: #C8C0B2;
  --aos-text-muted: #7D827D;
  --aos-text-dim: #525751;
  --aos-accent-cyan: #20DDEB;
  --aos-accent-cyan-soft: #38F3FF;
  --aos-accent-cyan-dim: #14808A;
  --aos-accent-cyan-glow: rgba(32, 221, 235, 0.45);
  --aos-accent-cyan-faint: rgba(32, 221, 235, 0.08);
  --aos-accent-cyan-bg: rgba(32, 221, 235, 0.04);
  --aos-accent-red: #E44935;
  --aos-accent-red-soft: rgba(228, 73, 53, 0.15);
  --aos-grid-line: rgba(255, 255, 255, 0.04);
  --aos-border-subtle: rgba(242, 237, 228, 0.06);
  --aos-border-active: rgba(32, 221, 235, 0.25);
  --aos-font-display: 'Bebas Neue', 'Oswald', sans-serif;
  --aos-font-alt: 'Oswald', sans-serif;
  --aos-font-mono: 'IBM Plex Mono', monospace;
  --aos-font-body: 'Inter', sans-serif;
}

.aos-page * { box-sizing: border-box; }

.aos-page {
  font-family: var(--aos-font-body);
  background: var(--aos-bg-main);
  color: var(--aos-text-secondary);
  line-height: 1.6;
  font-weight: 300;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

.aos-grid-layer {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(var(--aos-grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--aos-grid-line) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

.aos-vignette {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(2,4,5,0.6) 100%),
    radial-gradient(ellipse at 15% 20%, rgba(32,221,235,0.04) 0%, transparent 40%);
  pointer-events: none;
  z-index: 0;
}

.aos-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.12;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>");
}

.aos-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 2;
}

.aos-section {
  padding: 140px 0;
  position: relative;
  z-index: 2;
}

/* HEADER */
.aos-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 18px 32px;
  background: rgba(5, 9, 11, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--aos-border-subtle);
}
.aos-header-inner {
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.aos-logo {
  font-family: var(--aos-font-display);
  font-size: 22px;
  letter-spacing: 0.12em;
  color: var(--aos-text-primary);
  text-decoration: none;
}
.aos-logo-mark { color: var(--aos-accent-cyan); margin-right: 4px; }
.aos-header-meta {
  font-family: var(--aos-font-mono);
  font-size: 10px;
  color: var(--aos-text-muted);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
}
.aos-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--aos-accent-cyan);
  box-shadow: 0 0 8px var(--aos-accent-cyan-glow);
  animation: aos-pulse 2s ease-in-out infinite;
}
@keyframes aos-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
@keyframes aos-bounce { 0%, 100% { transform: translateY(0); opacity: 0.6; } 50% { transform: translateY(6px); opacity: 1; } }
@keyframes aos-slow-rotate { to { transform: rotate(360deg); } }

/* HERO */
.aos-hero {
  padding-top: 160px;
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}
.aos-compass {
  position: absolute;
  right: -120px;
  top: 50%;
  transform: translateY(-50%);
  width: 580px;
  height: 580px;
  pointer-events: none;
  opacity: 0.18;
  z-index: 1;
}
.aos-compass svg { width: 100%; height: 100%; }
.aos-compass-rotate {
  animation: aos-slow-rotate 120s linear infinite;
  transform-origin: center;
}
.aos-hero-content { position: relative; z-index: 5; max-width: 880px; }

.aos-briefing-coords {
  font-family: var(--aos-font-mono);
  font-size: 11px;
  color: var(--aos-text-muted);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.aos-briefing-coords::before {
  content: '';
  width: 32px;
  height: 1px;
  background: var(--aos-accent-cyan);
  display: inline-block;
}
.aos-dot-cyan { color: var(--aos-accent-cyan); }

.aos-pre-headline {
  font-family: var(--aos-font-mono);
  font-size: 12px;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 32px;
  display: inline-block;
  padding-left: 16px;
  border-left: 2px solid var(--aos-accent-cyan);
  line-height: 1.5;
}

.aos-h1 {
  font-family: var(--aos-font-display);
  font-weight: 400;
  font-size: clamp(56px, 8.5vw, 132px);
  line-height: 0.92;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.005em;
  margin-bottom: 48px;
}
.aos-h1 .aos-accent { color: var(--aos-accent-cyan); }
.aos-h1 .aos-red { color: var(--aos-accent-red); }

.aos-sub-headline {
  font-family: var(--aos-font-body);
  font-size: clamp(17px, 1.5vw, 20px);
  color: var(--aos-text-secondary);
  max-width: 720px;
  margin-bottom: 32px;
  font-weight: 300;
  line-height: 1.65;
}
.aos-sub-headline strong { color: var(--aos-text-primary); font-weight: 500; }
.aos-sub-headline em { font-style: normal; color: var(--aos-accent-cyan); font-weight: 400; }

.aos-transition-text {
  font-size: 16px;
  color: var(--aos-text-secondary);
  max-width: 720px;
  margin: 56px 0 60px;
  line-height: 1.7;
  padding-left: 24px;
  border-left: 1px solid var(--aos-border-subtle);
}

/* BENEFITS */
.aos-benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 48px;
}
.aos-benefit-card {
  background: var(--aos-bg-card);
  border: 1px solid var(--aos-border-subtle);
  padding: 36px 32px;
  position: relative;
  transition: border-color 0.3s ease;
}
.aos-benefit-card:hover { border-color: var(--aos-border-active); }
.aos-benefit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 1px;
  background: var(--aos-accent-cyan);
}
.aos-benefit-number {
  font-family: var(--aos-font-display);
  font-size: 56px;
  font-weight: 400;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.02em;
  margin-bottom: 8px;
  display: block;
  line-height: 1;
  text-shadow: 0 0 24px var(--aos-accent-cyan-glow);
}
.aos-benefit-title {
  font-family: var(--aos-font-alt);
  font-size: 22px;
  font-weight: 700;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  line-height: 1.15;
  margin-bottom: 24px;
  letter-spacing: 0.01em;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--aos-border-subtle);
}
.aos-benefit-lead {
  font-size: 15px;
  color: var(--aos-accent-cyan-soft);
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 1.5;
  font-style: italic;
}
.aos-benefit-body {
  font-size: 14px;
  color: var(--aos-text-secondary);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 24px;
}
.aos-benefit-source {
  font-family: var(--aos-font-mono);
  font-size: 10px;
  color: var(--aos-text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-top: 1px solid var(--aos-border-subtle);
  padding-top: 14px;
  line-height: 1.5;
}

/* CTA TRANSITION */
.aos-cta-transition {
  text-align: center;
  margin-top: 96px;
  padding: 40px 32px;
  border-top: 1px solid var(--aos-border-subtle);
  border-bottom: 1px solid var(--aos-border-subtle);
  position: relative;
}
.aos-cta-transition::before {
  content: '';
  position: absolute;
  top: -1px;
  left: calc(50% - 40px);
  width: 80px;
  height: 1px;
  background: var(--aos-accent-cyan);
}
.aos-cta-transition::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: calc(50% - 40px);
  width: 80px;
  height: 1px;
  background: var(--aos-accent-cyan);
}
.aos-cta-arrow {
  font-size: 18px;
  color: var(--aos-accent-cyan);
  margin-bottom: 16px;
  letter-spacing: 0.3em;
  font-family: var(--aos-font-mono);
  animation: aos-bounce 2.4s ease-in-out infinite;
}
.aos-cta-transition p {
  font-size: 14px;
  color: var(--aos-text-secondary);
  max-width: 640px;
  margin: 0 auto;
}

/* SECTION 3 */
.aos-section-3 {
  border-top: 1px solid var(--aos-border-subtle);
  border-bottom: 1px solid var(--aos-border-subtle);
  background: var(--aos-bg-deep);
  position: relative;
  z-index: 2;
  padding: 140px 0;
}

.aos-section-label {
  font-family: var(--aos-font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--aos-accent-cyan);
  margin-bottom: 24px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.aos-section-label::before {
  content: '';
  width: 28px;
  height: 1px;
  background: var(--aos-accent-cyan);
  display: inline-block;
}

.aos-h2 {
  font-family: var(--aos-font-display);
  font-weight: 400;
  font-size: clamp(40px, 6vw, 88px);
  line-height: 0.95;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  margin-bottom: 36px;
}
.aos-h2 .aos-accent { color: var(--aos-accent-cyan); }

.aos-section-intro {
  font-size: 17px;
  color: var(--aos-text-secondary);
  max-width: 820px;
  margin-bottom: 96px;
  line-height: 1.7;
}
.aos-section-intro strong, .aos-section-intro em {
  font-style: normal;
  color: var(--aos-text-primary);
  font-weight: 500;
}

/* MODULE COMERCIAL */
.aos-module-comercial {
  background: var(--aos-bg-card);
  border: 1px solid var(--aos-border-subtle);
  padding: 64px 56px;
  position: relative;
  margin-bottom: 100px;
}
.aos-module-comercial::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 24px;
  height: 24px;
  border-top: 2px solid var(--aos-accent-cyan);
  border-left: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-module-comercial::after {
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 24px;
  height: 24px;
  border-bottom: 2px solid var(--aos-accent-cyan);
  border-right: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-module-tag {
  font-family: var(--aos-font-mono);
  font-size: 11px;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: block;
}
.aos-module-title {
  font-family: var(--aos-font-display);
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 400;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  margin-bottom: 24px;
  letter-spacing: 0.01em;
  line-height: 0.95;
}
.aos-module-description {
  font-size: 16px;
  color: var(--aos-text-secondary);
  margin-bottom: 64px;
  max-width: 720px;
  line-height: 1.7;
}
.aos-module-items { display: flex; flex-direction: column; gap: 100px; }

.aos-module-item {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
}
.aos-module-item:nth-child(even) .aos-item-visual { order: 2; }
.aos-module-item:nth-child(even) .aos-item-content { order: 1; }

.aos-item-content { padding: 8px 0; }

.aos-item-number {
  font-family: var(--aos-font-display);
  font-size: 64px;
  font-weight: 400;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.02em;
  line-height: 1;
  margin-bottom: 20px;
  display: block;
  text-shadow: 0 0 28px var(--aos-accent-cyan-glow);
}
.aos-item-title {
  font-family: var(--aos-font-alt);
  font-size: clamp(24px, 2.4vw, 32px);
  font-weight: 700;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  line-height: 1.15;
  margin-bottom: 24px;
  letter-spacing: 0.01em;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--aos-border-subtle);
}
.aos-item-text {
  font-size: 15px;
  color: var(--aos-text-secondary);
  line-height: 1.75;
}

.aos-item-visual {
  position: relative;
  background: var(--aos-bg-deep);
  border: 1px solid var(--aos-border-subtle);
  padding: 8px;
}
.aos-item-visual::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border-top: 1px solid var(--aos-accent-cyan);
  border-left: 1px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-item-visual::after {
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 16px;
  height: 16px;
  border-bottom: 1px solid var(--aos-accent-cyan);
  border-right: 1px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-visual-label {
  position: absolute;
  top: -22px;
  left: 0;
  font-family: var(--aos-font-mono);
  font-size: 9px;
  color: var(--aos-text-muted);
  letter-spacing: 0.25em;
  text-transform: uppercase;
}
.aos-visual-coord {
  position: absolute;
  top: -22px;
  right: 0;
  font-family: var(--aos-font-mono);
  font-size: 9px;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.aos-visual-inner {
  width: 100%;
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(32,221,235,0.03) 0%, transparent 100%);
  position: relative;
  overflow: hidden;
}
.aos-visual-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 24px 24px;
}
.aos-visual-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 24px;
}
.aos-visual-icon {
  font-family: var(--aos-font-display);
  font-size: 48px;
  color: var(--aos-accent-cyan);
  opacity: 0.4;
  line-height: 1;
  margin-bottom: 12px;
  text-shadow: 0 0 24px var(--aos-accent-cyan-glow);
}
.aos-visual-tag {
  font-family: var(--aos-font-mono);
  font-size: 9px;
  color: var(--aos-text-muted);
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

/* IMPACT BREAK */
.aos-impact-break {
  margin: 100px 0;
  padding: 80px 32px;
  text-align: center;
  position: relative;
  border-top: 1px solid var(--aos-border-active);
  border-bottom: 1px solid var(--aos-border-active);
}
.aos-impact-break-text {
  font-family: var(--aos-font-display);
  font-size: clamp(36px, 5.5vw, 84px);
  font-weight: 400;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  line-height: 0.95;
  letter-spacing: 0.01em;
}
.aos-impact-break-text strong { color: var(--aos-accent-cyan); font-weight: 400; text-shadow: 0 0 32px var(--aos-accent-cyan-glow); }
.aos-impact-break-text .aos-red { color: var(--aos-accent-red); }

/* OTHER MODULES */
.aos-other-modules-intro {
  font-size: 17px;
  color: var(--aos-text-secondary);
  max-width: 700px;
  margin-bottom: 56px;
  line-height: 1.7;
}
.aos-other-modules {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 100px;
}
.aos-module-card {
  background: var(--aos-bg-card);
  border: 1px solid var(--aos-border-subtle);
  padding: 32px;
  transition: border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}
.aos-module-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 1px;
  background: var(--aos-accent-cyan);
}
.aos-module-card:hover { border-color: var(--aos-border-active); }
.aos-module-icon {
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  margin: 0 auto 24px;
  background: var(--aos-bg-deep);
  border: 1px solid var(--aos-border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.aos-module-icon-inner {
  font-family: var(--aos-font-display);
  font-size: 72px;
  color: var(--aos-accent-cyan);
  opacity: 0.25;
  text-shadow: 0 0 32px var(--aos-accent-cyan-glow);
}
.aos-module-card-tag {
  font-family: var(--aos-font-mono);
  font-size: 10px;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
}
.aos-module-card-title {
  font-family: var(--aos-font-alt);
  font-size: 22px;
  font-weight: 700;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  margin-bottom: 18px;
  letter-spacing: 0.01em;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--aos-border-subtle);
}
.aos-module-card-text {
  font-size: 14px;
  color: var(--aos-text-secondary);
  line-height: 1.7;
}

/* COMPARISON */
.aos-comparison-section {
  margin-top: 120px;
  padding-top: 100px;
  border-top: 1px solid var(--aos-border-subtle);
  position: relative;
}
.aos-comparison-section::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 2px;
  background: var(--aos-accent-cyan);
  box-shadow: 0 0 16px var(--aos-accent-cyan-glow);
}
.aos-comparison-intro { text-align: center; margin-bottom: 72px; }
.aos-h3-display {
  font-family: var(--aos-font-display);
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 400;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  line-height: 0.95;
  margin-bottom: 32px;
  letter-spacing: 0.01em;
}
.aos-h3-display .aos-accent { color: var(--aos-accent-cyan); }
.aos-comparison-intro p {
  font-size: 16px;
  color: var(--aos-text-secondary);
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.7;
}
.aos-table-wrapper {
  background: var(--aos-bg-card);
  border: 1px solid var(--aos-border-subtle);
  padding: 40px;
  position: relative;
  overflow-x: auto;
}
.aos-table-wrapper::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 20px;
  height: 20px;
  border-top: 2px solid var(--aos-accent-cyan);
  border-left: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-table-wrapper::after {
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 20px;
  height: 20px;
  border-bottom: 2px solid var(--aos-accent-cyan);
  border-right: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 880px;
}
.aos-table thead th {
  font-family: var(--aos-font-mono);
  font-size: 10px;
  font-weight: 600;
  color: var(--aos-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  text-align: left;
  padding: 18px;
  border-bottom: 1px solid var(--aos-border-subtle);
  vertical-align: middle;
}
.aos-table thead th.aos-th-criterio { color: var(--aos-accent-cyan); }
.aos-table thead th.aos-th-aos {
  color: var(--aos-accent-cyan-soft);
  font-size: 12px;
  letter-spacing: 0.3em;
  position: relative;
  text-shadow: 0 0 12px var(--aos-accent-cyan-glow);
}
.aos-table thead th.aos-th-aos::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 18px;
  right: 18px;
  height: 2px;
  background: var(--aos-accent-cyan);
  box-shadow: 0 0 10px var(--aos-accent-cyan-glow);
}
.aos-table tbody td {
  font-family: var(--aos-font-body);
  font-size: 13px;
  color: var(--aos-text-secondary);
  padding: 18px;
  border-bottom: 1px solid var(--aos-border-subtle);
  vertical-align: middle;
  font-weight: 300;
}
.aos-table tbody tr:last-child td { border-bottom: none; }
.aos-table tbody tr:hover td { background: var(--aos-accent-cyan-bg); }
.aos-td-criterio {
  font-family: var(--aos-font-mono);
  font-size: 11px;
  color: var(--aos-text-primary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1.4;
  min-width: 200px;
  max-width: 220px;
}
.aos-td-aos {
  color: var(--aos-accent-cyan-soft);
  font-weight: 500;
  background: var(--aos-accent-cyan-bg);
  border-left: 1px solid var(--aos-border-active);
  border-right: 1px solid var(--aos-border-active);
}
.aos-table tbody tr:last-child .aos-td-aos {
  border-bottom: 1px solid var(--aos-border-active);
}
.aos-status-pos { color: #20DDEB; font-weight: 600; margin-right: 6px; }
.aos-status-neg { color: var(--aos-accent-red); opacity: 0.85; font-weight: 600; margin-right: 6px; }
.aos-status-warn { color: #F2BD3B; font-weight: 600; margin-right: 6px; }

/* AUTHORITY */
.aos-authority-section {
  margin-top: 120px;
  padding-top: 100px;
  border-top: 1px solid var(--aos-border-subtle);
  position: relative;
}
.aos-authority-section::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 2px;
  background: var(--aos-accent-cyan);
  box-shadow: 0 0 16px var(--aos-accent-cyan-glow);
}
.aos-authority-intro { text-align: center; margin-bottom: 72px; }
.aos-authority-intro p {
  font-size: 16px;
  color: var(--aos-text-secondary);
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.7;
}
.aos-authority-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
}
.aos-quote-card {
  background: var(--aos-bg-card);
  border: 1px solid var(--aos-border-subtle);
  padding: 32px;
  position: relative;
  transition: border-color 0.3s ease;
  display: flex;
  flex-direction: column;
}
.aos-quote-card:hover { border-color: var(--aos-border-active); }
.aos-quote-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 1px;
  background: var(--aos-accent-cyan);
}
.aos-quote-card.aos-featured {
  grid-column: span 6;
  padding: 56px;
  background: linear-gradient(135deg, rgba(32,221,235,0.04) 0%, var(--aos-bg-card) 100%);
  border-color: var(--aos-border-active);
}
.aos-quote-card.aos-secondary { grid-column: span 3; }
.aos-quote-card.aos-tertiary { grid-column: span 2; }
.aos-quote-mark {
  font-family: var(--aos-font-display);
  font-size: 72px;
  font-weight: 400;
  color: var(--aos-accent-cyan);
  opacity: 0.7;
  line-height: 0.4;
  margin-bottom: 24px;
  text-shadow: 0 0 20px var(--aos-accent-cyan-glow);
}
.aos-featured .aos-quote-mark { font-size: 100px; margin-bottom: 28px; }
.aos-quote-text {
  font-size: 15px;
  color: var(--aos-text-primary);
  line-height: 1.65;
  font-weight: 300;
  margin-bottom: 32px;
  flex: 1;
}
.aos-featured .aos-quote-text {
  font-size: clamp(20px, 2.2vw, 26px);
  line-height: 1.45;
}
.aos-quote-text strong, .aos-featured .aos-quote-text strong { color: var(--aos-accent-cyan-soft); font-weight: 500; }
.aos-tertiary .aos-quote-text { font-size: 13px; line-height: 1.6; margin-bottom: 24px; }
.aos-attribution {
  border-top: 1px solid var(--aos-border-subtle);
  padding-top: 20px;
  margin-top: auto;
}
.aos-author {
  font-family: var(--aos-font-alt);
  font-size: 15px;
  font-weight: 700;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}
.aos-featured .aos-author { font-size: 18px; }
.aos-role {
  font-family: var(--aos-font-mono);
  font-size: 10px;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.aos-source {
  font-family: var(--aos-font-mono);
  font-size: 10px;
  color: var(--aos-text-muted);
  letter-spacing: 0.08em;
}

/* FINAL CLOSING */
.aos-final-closing {
  margin: 120px auto 0;
  max-width: 880px;
  text-align: center;
  padding: 96px 40px;
  background: linear-gradient(135deg, rgba(32,221,235,0.04) 0%, var(--aos-bg-card) 100%);
  border: 1px solid var(--aos-border-active);
  position: relative;
  overflow: hidden;
}
.aos-final-closing::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 32px;
  height: 32px;
  border-top: 2px solid var(--aos-accent-cyan);
  border-left: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-final-closing::after {
  content: '';
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 32px;
  height: 32px;
  border-bottom: 2px solid var(--aos-accent-cyan);
  border-right: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-final-meta {
  font-family: var(--aos-font-mono);
  font-size: 11px;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 36px;
}
.aos-final-lead {
  font-family: var(--aos-font-display);
  font-size: clamp(56px, 9vw, 128px);
  font-weight: 400;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: 0.01em;
  margin-bottom: 40px;
}
.aos-final-lead .aos-accent {
  color: var(--aos-accent-cyan);
  text-shadow: 0 0 32px var(--aos-accent-cyan-glow);
}
.aos-final-lead .aos-red { color: var(--aos-accent-red); }
.aos-final-body {
  font-size: clamp(17px, 1.8vw, 21px);
  color: var(--aos-text-secondary);
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 56px;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}
.aos-final-body strong { color: var(--aos-text-primary); font-weight: 500; }
.aos-cta-btn {
  display: inline-block;
  font-family: var(--aos-font-alt);
  font-size: 14px;
  font-weight: 700;
  color: var(--aos-bg-main);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  text-decoration: none;
  padding: 22px 56px;
  background: var(--aos-accent-cyan);
  border: 1px solid var(--aos-accent-cyan);
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 0 32px var(--aos-accent-cyan-glow);
}
.aos-cta-btn:hover {
  background: var(--aos-accent-cyan-soft);
  transform: translateY(-2px);
  box-shadow: 0 8px 40px var(--aos-accent-cyan-glow);
}
.aos-cta-btn::after { content: ' →'; margin-left: 4px; }

/* FOOTER */
.aos-footer {
  padding: 80px 0 60px;
  border-top: 1px solid var(--aos-border-subtle);
  margin-top: 60px;
  position: relative;
  z-index: 2;
}
.aos-footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}
.aos-footer-logo {
  font-family: var(--aos-font-display);
  font-size: 24px;
  letter-spacing: 0.12em;
  color: var(--aos-text-primary);
}
.aos-footer-meta {
  font-family: var(--aos-font-mono);
  font-size: 11px;
  color: var(--aos-text-muted);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .aos-section, .aos-section-3 { padding: 80px 0; }
  .aos-container { padding: 0 20px; }
  .aos-hero { padding-top: 100px; min-height: auto; }
  .aos-compass { display: none; }
  .aos-benefits-grid { grid-template-columns: 1fr; gap: 20px; }
  .aos-module-comercial { padding: 32px 24px; }
  .aos-module-items { gap: 56px; }
  .aos-module-item { grid-template-columns: 1fr; gap: 24px; }
  .aos-module-item:nth-child(even) .aos-item-visual { order: 0; }
  .aos-module-item:nth-child(even) .aos-item-content { order: 0; }
  .aos-other-modules { grid-template-columns: 1fr; }
  .aos-authority-grid { grid-template-columns: 1fr; gap: 16px; }
  .aos-quote-card.aos-featured,
  .aos-quote-card.aos-secondary,
  .aos-quote-card.aos-tertiary { grid-column: span 1; }
  .aos-featured { padding: 32px 24px !important; }
  .aos-impact-break { padding: 48px 16px; }
  .aos-final-closing { padding: 56px 24px; margin-top: 60px; }
  .aos-cta-btn { padding: 18px 32px; font-size: 13px; }
  .aos-table-wrapper { padding: 20px; }
}
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
      const existingStyle = document.getElementById("aos-styles");
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  return (
    <div className="aos-page">
      <div className="aos-grid-layer" aria-hidden />
      <div className="aos-vignette" aria-hidden />
      <div className="aos-noise" aria-hidden />

      {/* HEADER */}
      <header className="aos-header">
        <div className="aos-header-inner">
          <span className="aos-logo">
            <span className="aos-logo-mark">⟁</span> AGENTIC OS
          </span>
          <div className="aos-header-meta">
            <span className="aos-live-dot" />
            BRIEFING ESTRATÉGICO · 2026
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="aos-hero">
        <div className="aos-compass" aria-hidden>
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="aos-compass-rotate">
              <circle cx="300" cy="300" r="280" stroke="#20DDEB" strokeWidth="0.5" strokeDasharray="2 8" />
              <circle cx="300" cy="300" r="230" stroke="#20DDEB" strokeWidth="0.5" opacity="0.6" />
              <circle cx="300" cy="300" r="180" stroke="#20DDEB" strokeWidth="0.5" opacity="0.4" />
              <line x1="300" y1="20" x2="300" y2="50" stroke="#20DDEB" strokeWidth="1" />
              <line x1="300" y1="550" x2="300" y2="580" stroke="#20DDEB" strokeWidth="1" />
              <line x1="20" y1="300" x2="50" y2="300" stroke="#20DDEB" strokeWidth="1" />
              <line x1="550" y1="300" x2="580" y2="300" stroke="#20DDEB" strokeWidth="1" />
              <line x1="300" y1="20" x2="300" y2="35" stroke="#20DDEB" strokeWidth="0.5" transform="rotate(45 300 300)" />
              <line x1="300" y1="20" x2="300" y2="35" stroke="#20DDEB" strokeWidth="0.5" transform="rotate(135 300 300)" />
              <line x1="300" y1="20" x2="300" y2="35" stroke="#20DDEB" strokeWidth="0.5" transform="rotate(225 300 300)" />
              <line x1="300" y1="20" x2="300" y2="35" stroke="#20DDEB" strokeWidth="0.5" transform="rotate(315 300 300)" />
              <line x1="300" y1="280" x2="300" y2="320" stroke="#20DDEB" strokeWidth="0.5" />
              <line x1="280" y1="300" x2="320" y2="300" stroke="#20DDEB" strokeWidth="0.5" />
              <circle cx="300" cy="300" r="4" fill="#20DDEB" />
            </g>
            <text x="300" y="14" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#20DDEB" letterSpacing="2">N</text>
            <text x="300" y="596" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#20DDEB" letterSpacing="2">S</text>
            <text x="10" y="304" fontFamily="IBM Plex Mono" fontSize="10" fill="#20DDEB">W</text>
            <text x="585" y="304" fontFamily="IBM Plex Mono" fontSize="10" fill="#20DDEB">E</text>
          </svg>
        </div>

        <div className="aos-container">
          <div className="aos-hero-content">
            <div className="aos-briefing-coords">
              <span><span className="aos-dot-cyan">●</span> DOC 001 / V2.0</span>
              <span>CLASSIFICAÇÃO · PÚBLICO</span>
              <span>LAT −20.4486 · LONG −54.6295</span>
            </div>

            <span className="aos-pre-headline">
              Para empresários que já entenderam:<br />
              IA não é uma ferramenta. É a nova infraestrutura.
            </span>

            <h1 className="aos-h1">
              Você não precisa de mais uma ferramenta de IA.<br />
              Você precisa de um <span className="aos-accent">ecossistema vivo</span>, onde a IA conecta cada área do seu negócio<span className="aos-red">.</span>
            </h1>

            <p className="aos-sub-headline">
              <strong>Agentic OS</strong> — um sistema operacional agêntico — é o futuro da tecnologia empresarial. Ele concentra todos os dados da sua operação de ponta a ponta, evolui junto com o seu negócio, e contém apenas o que faz sentido para a sua realidade. Nada de SaaS genérico. Nada de feature inútil. <em>Só o que gera resultado.</em>
            </p>

            <p className="aos-transition-text">
              A maior parte dos empresários nunca ouviu falar de Agentic OS — e tem dificuldade de visualizar como isso pode fazer o negócio crescer. Os benefícios são vários. Três deles mudam o jogo:
            </p>

            <div className="aos-benefits-grid">
              <div className="aos-benefit-card">
                <span className="aos-benefit-number">01</span>
                <h3 className="aos-benefit-title">Redução nos custos de ferramentas</h3>
                <p className="aos-benefit-lead">Sua empresa paga por dezenas de ferramentas que são subutilizadas.</p>
                <p className="aos-benefit-body">
                  A empresa média opera com dezenas de aplicações SaaS. Um Agentic OS consolida o que importa em um único lugar — você reduz a stack, reduz o ruído e aumenta exponencialmente a produtividade do time.
                </p>
                <p className="aos-benefit-source">Fontes: Zylo SaaS Management Index 2025, Gartner.</p>
              </div>

              <div className="aos-benefit-card">
                <span className="aos-benefit-number">02</span>
                <h3 className="aos-benefit-title">Aumento na produtividade por funcionário</h3>
                <p className="aos-benefit-lead">Contratar mais não é a solução.</p>
                <p className="aos-benefit-body">
                  Durante os últimos anos, a métrica mais importante para medir a eficiência de uma empresa era o RPE (Receita por Funcionário). Agora, isso ganha uma nova camada. Pesquisas mostram ganhos entre 44% em funções inteiras e mais de 10x em tarefas específicas. É trabalho de semanas feito em alguns dias.
                </p>
                <p className="aos-benefit-source">Fontes: McKinsey State of AI 2025, Anthropic Internal Productivity Report 2025.</p>
              </div>

              <div className="aos-benefit-card">
                <span className="aos-benefit-number">03</span>
                <h3 className="aos-benefit-title">Mais inteligência comercial = mais receita</h3>
                <p className="aos-benefit-lead">"Dados são o novo petróleo" — agora isso virou realidade.</p>
                <p className="aos-benefit-body">
                  Durante décadas ouvimos essa frase, mas até ontem não era realidade para a maioria das empresas. Com um Agentic OS, pela primeira vez, você pode usar de fato os dados da sua empresa para aumentar suas vendas. Empresas com IA aplicada a vendas reportam aumento de mais de 30% em taxa de fechamento e até 50% em leads qualificados.
                </p>
                <p className="aos-benefit-source">Fontes: Bain &amp; Company 2025, McKinsey.</p>
              </div>
            </div>

            <div className="aos-cta-transition">
              <div className="aos-cta-arrow">▼ ▼ ▼</div>
              <p>Continue lendo. Nas próximas seções você vai entender exatamente como uma Agentic OS funciona na prática — e por que esse vai ser o padrão das empresas que vão dominar o mercado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — COMO FUNCIONA */}
      <section className="aos-section-3">
        <div className="aos-container">
          <span className="aos-section-label">Como funciona na prática</span>
          <h2 className="aos-h2">E na prática, como uma <span className="aos-accent">Agentic OS</span> funciona?</h2>
          <p className="aos-section-intro">
            Um Agentic OS é composto por módulos que cobrem cada área crítica do seu negócio. Cada módulo tem agentes de IA executando tarefas, analisando dados e gerando inteligência de forma contínua — sem você precisar pedir. Para você entender a profundidade do conceito, vamos abrir um módulo por completo.
            <br /><br />
            <strong>OS Comercial.</strong>
          </p>

          {/* MÓDULO COMERCIAL */}
          <div className="aos-module-comercial">
            <span className="aos-module-tag">⟶ Módulo 01 · Aberto</span>
            <h3 className="aos-module-title">Comercial</h3>
            <p className="aos-module-description">
              O coração da maioria das empresas. É aqui que o caos costuma ser maior — e onde uma Agentic OS gera retorno mais rápido. Veja o que vive dentro deste módulo:
            </p>

            <div className="aos-module-items">

              <div className="aos-module-item">
                <div className="aos-item-content">
                  <span className="aos-item-number">01</span>
                  <h4 className="aos-item-title">Pipeline Inteligente</h4>
                  <p className="aos-item-text">
                    Cada lead que entra no seu negócio é classificado automaticamente. A IA analisa o perfil, o comportamento e os dados históricos para determinar o potencial de fechamento — e move o lead pelo funil sem intervenção manual. Seu time foca em vender, não em organizar planilhas.
                  </p>
                </div>
                <div className="aos-item-visual">
                  <span className="aos-visual-label">Evidência · Frame 01</span>
                  <span className="aos-visual-coord">CRM · Auto-Sync</span>
                  <div className="aos-visual-inner">
                    <div className="aos-visual-grid" aria-hidden />
                    <div className="aos-visual-content">
                      <div className="aos-visual-icon">⟁</div>
                      <div className="aos-visual-tag">Pipeline · Qualificação Automática</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aos-module-item">
                <div className="aos-item-content">
                  <span className="aos-item-number">02</span>
                  <h4 className="aos-item-title">Follow-up Automatizado</h4>
                  <p className="aos-item-text">
                    A maior causa de perda de vendas não é o produto ruim — é o follow-up que não aconteceu. O agente monitora cada oportunidade, identifica o momento certo para agir e dispara a mensagem personalizada. Nenhum lead é abandonado por falta de atenção.
                  </p>
                </div>
                <div className="aos-item-visual">
                  <span className="aos-visual-label">Evidência · Frame 02</span>
                  <span className="aos-visual-coord">Seq · Auto-Trigger</span>
                  <div className="aos-visual-inner">
                    <div className="aos-visual-grid" aria-hidden />
                    <div className="aos-visual-content">
                      <div className="aos-visual-icon">◈</div>
                      <div className="aos-visual-tag">Follow-up · Timing Inteligente</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aos-module-item">
                <div className="aos-item-content">
                  <span className="aos-item-number">03</span>
                  <h4 className="aos-item-title">Inteligência de Vendas</h4>
                  <p className="aos-item-text">
                    Cada interação vira dado. Cada dado vira padrão. O sistema identifica quais argumentos fecham mais, quais objeções aparecem com mais frequência, e qual perfil de cliente tem maior LTV. Sua equipe comercial opera com informação — não com intuição.
                  </p>
                </div>
                <div className="aos-item-visual">
                  <span className="aos-visual-label">Evidência · Frame 03</span>
                  <span className="aos-visual-coord">Analytics · Real-Time</span>
                  <div className="aos-visual-inner">
                    <div className="aos-visual-grid" aria-hidden />
                    <div className="aos-visual-content">
                      <div className="aos-visual-icon">▲</div>
                      <div className="aos-visual-tag">Insights · Padrões de Fechamento</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* IMPACTO */}
          <div className="aos-impact-break">
            <div className="aos-impact-break-text">
              Um módulo.<br />
              <strong>Três agentes trabalhando 24h.</strong><br />
              Sem custo de hora extra<span className="aos-red">.</span>
            </div>
          </div>

          {/* OUTROS MÓDULOS */}
          <p className="aos-other-modules-intro">
            E o módulo Comercial é só o começo. Um Agentic OS completo cobre todas as alavancas do seu negócio:
          </p>

          <div className="aos-other-modules">
            <div className="aos-module-card">
              <div className="aos-module-icon">
                <span className="aos-module-icon-inner">⚙</span>
              </div>
              <span className="aos-module-card-tag">⟶ Módulo 02</span>
              <h4 className="aos-module-card-title">Operações</h4>
              <p className="aos-module-card-text">
                Processos internos mapeados e automatizados. Agentes monitoram gargalos em tempo real, redistribuem tarefas e geram relatórios de eficiência sem intervenção humana. Sua operação escala sem escalar o headcount.
              </p>
            </div>

            <div className="aos-module-card">
              <div className="aos-module-icon">
                <span className="aos-module-icon-inner">◎</span>
              </div>
              <span className="aos-module-card-tag">⟶ Módulo 03</span>
              <h4 className="aos-module-card-title">Marketing</h4>
              <p className="aos-module-card-text">
                Conteúdo gerado, segmentado e distribuído com IA. Análise contínua de performance, ajuste de mensagem por canal e identificação de oportunidades de crescimento — tudo conectado ao CRM e ao pipeline comercial.
              </p>
            </div>

            <div className="aos-module-card">
              <div className="aos-module-icon">
                <span className="aos-module-icon-inner">◈</span>
              </div>
              <span className="aos-module-card-tag">⟶ Módulo 04</span>
              <h4 className="aos-module-card-title">Atendimento</h4>
              <p className="aos-module-card-text">
                Primeira linha de resposta totalmente automatizada, com contexto completo do cliente. Problemas simples resolvidos em segundos. Casos complexos escalados com o histórico completo. CSAT que sobe enquanto o custo desce.
              </p>
            </div>
          </div>

          {/* COMPARATIVO */}
          <div className="aos-comparison-section">
            <div className="aos-comparison-intro">
              <h3 className="aos-h3-display">
                AOS vs.<br /><span className="aos-accent">as outras opções</span>
              </h3>
              <p>
                Você já considerou as alternativas. Ferramenta SaaS genérica. Agência de marketing. Contratar uma equipe maior. Cada uma tem limitações que o mercado já conhece — mas raramente assume.
              </p>
            </div>

            <div className="aos-table-wrapper">
              <table className="aos-table">
                <thead>
                  <tr>
                    <th className="aos-th-criterio">Critério</th>
                    <th className="aos-th-aos">AGENTIC OS</th>
                    <th>SaaS Genérico</th>
                    <th>Agência</th>
                    <th>Equipe Interna</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="aos-td-criterio">Personalização para o negócio</td>
                    <td className="aos-td-aos"><span className="aos-status-pos">✓</span> 100% sob medida</td>
                    <td><span className="aos-status-neg">✗</span> Genérico por design</td>
                    <td><span className="aos-status-warn">~</span> Parcial, cara</td>
                    <td><span className="aos-status-warn">~</span> Depende do perfil</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Integração entre áreas</td>
                    <td className="aos-td-aos"><span className="aos-status-pos">✓</span> Nativa e total</td>
                    <td><span className="aos-status-neg">✗</span> Silos por padrão</td>
                    <td><span className="aos-status-neg">✗</span> Não cobre operação</td>
                    <td><span className="aos-status-warn">~</span> Complexo de coordenar</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Custo mensal recorrente</td>
                    <td className="aos-td-aos"><span className="aos-status-pos">✓</span> Investimento pontual + manutenção mínima</td>
                    <td><span className="aos-status-neg">✗</span> Cresce com usuários/features</td>
                    <td><span className="aos-status-neg">✗</span> Mensalidade fixa alta</td>
                    <td><span className="aos-status-neg">✗</span> Folha + encargos</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Evolui com o negócio</td>
                    <td className="aos-td-aos"><span className="aos-status-pos">✓</span> Modular e expansível</td>
                    <td><span className="aos-status-neg">✗</span> Roadmap deles, não seu</td>
                    <td><span className="aos-status-warn">~</span> Requer novo projeto</td>
                    <td><span className="aos-status-warn">~</span> Requer nova contratação</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Inteligência sobre seus dados</td>
                    <td className="aos-td-aos"><span className="aos-status-pos">✓</span> Profunda, contínua, preditiva</td>
                    <td><span className="aos-status-neg">✗</span> Relatórios básicos</td>
                    <td><span className="aos-status-neg">✗</span> Sem acesso ao core</td>
                    <td><span className="aos-status-warn">~</span> Lenta para escalar</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Trabalha 24/7 sem supervisão</td>
                    <td className="aos-td-aos"><span className="aos-status-pos">✓</span> Agentes autônomos</td>
                    <td><span className="aos-status-warn">~</span> Automações básicas</td>
                    <td><span className="aos-status-neg">✗</span> Horário comercial</td>
                    <td><span className="aos-status-neg">✗</span> Depende de pessoas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PROVA DE AUTORIDADE */}
          <div className="aos-authority-section">
            <div className="aos-authority-intro">
              <span className="aos-section-label">O mercado já está dizendo</span>
              <h3 className="aos-h3-display">
                O que as maiores<br /><span className="aos-accent">referências do mundo</span><br />estão vendo
              </h3>
              <p>
                Não é especulação. Não é tendência de futuro distante. Os líderes de tecnologia, estratégia e negócios já articulam o que você está prestes a implementar.
              </p>
            </div>

            <div className="aos-authority-grid">
              <div className="aos-quote-card aos-featured">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  Em 2025, os agentes de IA não serão mais experimentais — serão <strong>o sistema nervoso central das empresas que lideram o mercado</strong>. Aquelas que ainda dependem de ferramentas fragmentadas e equipes sobrecarregadas estarão competindo contra adversários que operam em outra velocidade.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Jensen Huang</div>
                  <div className="aos-role">CEO · NVIDIA</div>
                  <div className="aos-source">Declaração pública, CES 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-secondary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  O futuro não pertence às empresas com mais funcionários — pertence às que conseguirem <strong>multiplicar a capacidade de cada pessoa com IA</strong>. O Agentic OS é exatamente essa alavanca.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Sam Altman</div>
                  <div className="aos-role">CEO · OpenAI</div>
                  <div className="aos-source">Blog OpenAI, Janeiro 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-secondary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  As empresas que vão dominar a próxima década <strong>não são as que têm mais dados — são as que souberem transformar dados em ação com IA</strong>. A vantagem competitiva se deslocou para a camada de inteligência.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Satya Nadella</div>
                  <div className="aos-role">CEO · Microsoft</div>
                  <div className="aos-source">Microsoft Build 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-tertiary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  IA agêntica é a <strong>maior mudança de plataforma desde a internet</strong>.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Dario Amodei</div>
                  <div className="aos-role">CEO · Anthropic</div>
                  <div className="aos-source">The Economist, 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-tertiary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  <strong>O custo de não ter IA integrada</strong> já supera o custo de implementar.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">McKinsey Global Institute</div>
                  <div className="aos-role">Relatório · State of AI 2025</div>
                  <div className="aos-source">Publicado em Março 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-tertiary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  Empresas com <strong>IA integrada ao core do negócio</strong> crescem 2,5x mais rápido que as concorrentes.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Bain &amp; Company</div>
                  <div className="aos-role">Relatório · AI Advantage 2025</div>
                  <div className="aos-source">Publicado em Fevereiro 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* FECHAMENTO FINAL */}
          <div className="aos-final-closing">
            <div className="aos-final-meta">⟶ Próximo passo · Briefing estratégico</div>
            <div className="aos-final-lead">
              Seu negócio<br />
              merece um<br />
              <span className="aos-accent">OS</span><span className="aos-red">.</span>
            </div>
            <p className="aos-final-body">
              A janela para implementar antes da concorrência está aberta — mas não por muito tempo. <strong>Empresas que construírem seu Agentic OS agora vão operar em uma categoria diferente</strong>. As que esperarem vão competir em desvantagem estrutural.
            </p>
            <a
              href="https://wa.me/5511999718595"
              className="aos-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => tracker.track("cta_click", { product: "agentic-os", location: "final-cta" })}
            >
              Quero entender como uma Agentic OS pode transformar o meu negócio
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="aos-footer">
        <div className="aos-container">
          <div className="aos-footer-inner">
            <div className="aos-footer-logo">
              <span className="aos-dot-cyan">⟁</span> AGENTIC OS
            </div>
            <div className="aos-footer-meta">
              © 2026 BA Consultoria · Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgenticOS;
