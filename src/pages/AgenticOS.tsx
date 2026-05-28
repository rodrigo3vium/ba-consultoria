import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import img01 from "@/assets/agentic-os/aos-01-crm.jpg";
import img02 from "@/assets/agentic-os/aos-02-whatsapp.jpg";
import img03 from "@/assets/agentic-os/aos-03-call.jpg";
import img04 from "@/assets/agentic-os/aos-04-relatorio.jpg";
import img05 from "@/assets/agentic-os/aos-05-trafego.jpg";
import iconFinanceiro from "@/assets/agentic-os/icon-financeiro.jpg";
import iconTarefas from "@/assets/agentic-os/icon-tarefas.jpg";
import iconConteudo from "@/assets/agentic-os/icon-conteudo.jpg";

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
  top: 0; left: 0; right: 0;
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
  width: 6px; height: 6px;
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
  right: -120px; top: 50%;
  transform: translateY(-50%);
  width: 580px; height: 580px;
  pointer-events: none;
  opacity: 0.18; z-index: 1;
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
  width: 32px; height: 1px;
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
  font-size: clamp(42px, 4.3vw, 62px);
  line-height: 0.95;
  color: var(--aos-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.005em;
  margin-bottom: 48px;
}
.aos-accent { color: var(--aos-accent-cyan); }
.aos-red { color: var(--aos-accent-red); }

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
  top: 0; left: 0;
  width: 24px; height: 1px;
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
  top: -1px; left: calc(50% - 40px);
  width: 80px; height: 1px;
  background: var(--aos-accent-cyan);
}
.aos-cta-transition::after {
  content: '';
  position: absolute;
  bottom: -1px; left: calc(50% - 40px);
  width: 80px; height: 1px;
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
  width: 28px; height: 1px;
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

.aos-section-intro {
  font-size: 17px;
  color: var(--aos-text-secondary);
  max-width: 820px;
  margin-bottom: 96px;
  line-height: 1.7;
}
.aos-section-intro strong { font-style: normal; color: var(--aos-text-primary); font-weight: 500; }

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
  top: -1px; left: -1px;
  width: 24px; height: 24px;
  border-top: 2px solid var(--aos-accent-cyan);
  border-left: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-module-comercial::after {
  content: '';
  position: absolute;
  bottom: -1px; right: -1px;
  width: 24px; height: 24px;
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
  top: -1px; left: -1px;
  width: 16px; height: 16px;
  border-top: 1px solid var(--aos-accent-cyan);
  border-left: 1px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-item-visual::after {
  content: '';
  position: absolute;
  bottom: -1px; right: -1px;
  width: 16px; height: 16px;
  border-bottom: 1px solid var(--aos-accent-cyan);
  border-right: 1px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-visual-label {
  position: absolute;
  top: -22px; left: 0;
  font-family: var(--aos-font-mono);
  font-size: 9px;
  color: var(--aos-text-muted);
  letter-spacing: 0.25em;
  text-transform: uppercase;
}
.aos-visual-coord {
  position: absolute;
  top: -22px; right: 0;
  font-family: var(--aos-font-mono);
  font-size: 9px;
  color: var(--aos-accent-cyan);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.aos-item-visual img {
  width: 100%;
  height: auto;
  display: block;
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
.aos-impact-break::before {
  content: '⟶';
  position: absolute;
  top: -12px; left: 50%;
  transform: translateX(-50%);
  background: var(--aos-bg-deep);
  padding: 0 16px;
  color: var(--aos-accent-cyan);
  font-family: var(--aos-font-mono);
  font-size: 18px;
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
.aos-impact-break-text strong {
  color: var(--aos-accent-cyan);
  font-weight: 400;
  text-shadow: 0 0 32px var(--aos-accent-cyan-glow);
}

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
  top: 0; left: 0;
  width: 32px; height: 1px;
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
}
.aos-module-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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
  top: -1px; left: 50%;
  transform: translateX(-50%);
  width: 120px; height: 2px;
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
  top: -1px; left: -1px;
  width: 20px; height: 20px;
  border-top: 2px solid var(--aos-accent-cyan);
  border-left: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-table-wrapper::after {
  content: '';
  position: absolute;
  bottom: -1px; right: -1px;
  width: 20px; height: 20px;
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
.aos-th-criterio { color: var(--aos-accent-cyan) !important; }
.aos-th-aos {
  color: var(--aos-accent-cyan-soft) !important;
  font-size: 12px !important;
  letter-spacing: 0.3em !important;
  position: relative;
  text-shadow: 0 0 12px var(--aos-accent-cyan-glow);
}
.aos-th-aos::after {
  content: '';
  position: absolute;
  bottom: -1px; left: 18px; right: 18px;
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
  font-family: var(--aos-font-mono) !important;
  font-size: 11px !important;
  color: var(--aos-text-primary) !important;
  font-weight: 500 !important;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1.4;
  min-width: 200px;
  max-width: 220px;
}
.aos-td-aos {
  color: var(--aos-accent-cyan-soft) !important;
  font-weight: 500 !important;
  background: var(--aos-accent-cyan-bg) !important;
  border-left: 1px solid var(--aos-border-active) !important;
  border-right: 1px solid var(--aos-border-active) !important;
}
.aos-table tbody tr:last-child .aos-td-aos {
  border-bottom: 1px solid var(--aos-border-active) !important;
}
.sp { font-family: var(--aos-font-mono); font-weight: 600; font-size: 14px; margin-right: 6px; }
.sp-pos { color: #20DDEB; }
.sp-neg { color: var(--aos-accent-red); opacity: 0.85; }
.sp-warn { color: #F2BD3B; }

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
  top: -1px; left: 50%;
  transform: translateX(-50%);
  width: 120px; height: 2px;
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
  top: 0; left: 0;
  width: 24px; height: 1px;
  background: var(--aos-accent-cyan);
}
.aos-featured {
  grid-column: span 6;
  padding: 56px !important;
  background: linear-gradient(135deg, rgba(32,221,235,0.04) 0%, var(--aos-bg-card) 100%) !important;
  border-color: var(--aos-border-active) !important;
}
.aos-secondary { grid-column: span 3; }
.aos-tertiary { grid-column: span 2; }
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
.aos-quote-text strong { color: var(--aos-accent-cyan-soft); font-weight: 500; }
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
  top: -1px; left: -1px;
  width: 32px; height: 32px;
  border-top: 2px solid var(--aos-accent-cyan);
  border-left: 2px solid var(--aos-accent-cyan);
  pointer-events: none;
}
.aos-final-closing::after {
  content: '';
  position: absolute;
  bottom: -1px; right: -1px;
  width: 32px; height: 32px;
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
.aos-final-lead .aos-accent { text-shadow: 0 0 32px var(--aos-accent-cyan-glow); }
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
  .aos-featured { grid-column: span 1; padding: 32px 24px !important; }
  .aos-secondary { grid-column: span 1; }
  .aos-tertiary { grid-column: span 1; }
  .aos-impact-break { padding: 48px 16px; }
  .aos-final-closing { padding: 56px 24px; margin-top: 60px; }
  .aos-cta-btn { padding: 18px 32px; font-size: 13px; }
  .aos-briefing-coords { font-size: 10px; gap: 16px; }
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
          <a href="#" className="aos-logo">
            <span className="aos-logo-mark">⟁</span> AGENTIC OS
          </a>
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
              Você não precisa de mais uma ferramenta.<br />
              Você precisa de um <span className="aos-accent">ecossistema vivo</span>,<br />
              onde a IA conecta<br />
              cada área do seu negócio<span className="aos-red">.</span>
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

      {/* SEÇÃO — COMO FUNCIONA */}
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
                <div className="aos-item-visual">
                  <span className="aos-visual-label">EVIDÊNCIA · FRAME 01</span>
                  <span className="aos-visual-coord">CRM · AUTO-SYNC</span>
                  <img src={img01} alt="CRM com preenchimento automático via Agentic OS" loading="lazy" />
                </div>
                <div className="aos-item-content">
                  <span className="aos-item-number">01</span>
                  <h4 className="aos-item-title">Seu CRM se preenche sozinho</h4>
                  <p className="aos-item-text">
                    Toda conversa de WhatsApp, toda call de fechamento, toda reunião de diagnóstico, cada interação no site — tudo é transcrito, analisado e registrado no CRM automaticamente. Status, próximos passos, objeções, oportunidades. Hoje, vendedores gastam só 28% do tempo vendendo de fato — o resto vai pra tarefas administrativas, atualização de CRM e busca de informação. Agora, não mais. Seu CRM nunca mais ficará sem informações.
                  </p>
                  <p className="aos-benefit-source" style={{ marginTop: 14 }}>Fonte: Salesforce State of Sales 2025 · Forrester Activity Study (3.031 vendedores).</p>
                </div>
              </div>

              <div className="aos-module-item">
                <div className="aos-item-visual">
                  <span className="aos-visual-label">EVIDÊNCIA · FRAME 02</span>
                  <span className="aos-visual-coord">WHATSAPP · 24/7</span>
                  <img src={img02} alt="Análise de WhatsApp em tempo real via Agentic OS" loading="lazy" />
                </div>
                <div className="aos-item-content">
                  <span className="aos-item-number">02</span>
                  <h4 className="aos-item-title">Cada WhatsApp atendido é analisado em tempo real</h4>
                  <p className="aos-item-text">
                    Agentes monitoram o atendimento comercial via WhatsApp 24/7. Identificam quando o time não respondeu uma objeção, quando perdeu uma oportunidade de upsell, quando deixou um lead esfriar, quando não seguiu o script de atendimento. Seu time nunca mais vai esquecer de um cliente.
                  </p>
                </div>
              </div>

              <div className="aos-module-item">
                <div className="aos-item-visual">
                  <span className="aos-visual-label">EVIDÊNCIA · FRAME 03</span>
                  <span className="aos-visual-coord">CALL · ANÁLISE SEMÂNTICA</span>
                  <img src={img03} alt="Avaliação de call de fechamento via Agentic OS" loading="lazy" />
                </div>
                <div className="aos-item-content">
                  <span className="aos-item-number">03</span>
                  <h4 className="aos-item-title">Cada call de fechamento é avaliada</h4>
                  <p className="aos-item-text">
                    Toda call comercial é transcrita e analisada contra a sua metodologia de vendas. O sistema identifica o que funcionou, o que faltou, e onde o vendedor pode melhorar. Treinamento contínuo sem você precisar revisar gravação.
                  </p>
                </div>
              </div>

              <div className="aos-module-item">
                <div className="aos-item-visual">
                  <span className="aos-visual-label">EVIDÊNCIA · FRAME 04</span>
                  <span className="aos-visual-coord">RELATÓRIO · WEEKLY SYNC</span>
                  <img src={img04} alt="Relatório semanal consolidado automaticamente via Agentic OS" loading="lazy" />
                </div>
                <div className="aos-item-content">
                  <span className="aos-item-number">04</span>
                  <h4 className="aos-item-title">Relatórios semanais consolidados, sem ninguém fazer relatório</h4>
                  <p className="aos-item-text">
                    Toda semana, um agente consolida o que aconteceu no comercial — WhatsApps, calls, taxa de conversão por etapa, gargalos detectados — e te entrega um relatório executivo. Você abre a segunda-feira já sabendo onde focar.
                  </p>
                </div>
              </div>

              <div className="aos-module-item">
                <div className="aos-item-visual">
                  <span className="aos-visual-label">EVIDÊNCIA · FRAME 05</span>
                  <span className="aos-visual-coord">TRÁFEGO · ATTRIBUTION SYNC</span>
                  <img src={img05} alt="Tráfego pago integrado à inteligência comercial via Agentic OS" loading="lazy" />
                </div>
                <div className="aos-item-content">
                  <span className="aos-item-number">05</span>
                  <h4 className="aos-item-title">Tráfego pago integrado à inteligência comercial</h4>
                  <p className="aos-item-text">
                    O sistema cruza dados das suas campanhas (Meta, Google) com o desempenho real no fechamento. Você descobre qual criativo gera lead que fecha, não só lead que clica. E sua verba de tráfego para de ser gasta com leads curiosos.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* QUEBRA DE IMPACTO */}
          <div className="aos-impact-break">
            <p className="aos-impact-break-text">
              E tudo isso é apenas <strong>UM</strong> dos módulos<span className="aos-red">.</span>
            </p>
          </div>

          {/* OUTROS MÓDULOS */}
          <p className="aos-other-modules-intro">
            Uma Agentic OS madura conecta toda a operação. Veja outros módulos comuns:
          </p>

          <div className="aos-other-modules">
            <div className="aos-module-card">
              <div className="aos-module-icon">
                <img src={iconFinanceiro} alt="Módulo Financeiro" loading="lazy" />
              </div>
              <span className="aos-module-card-tag">⟶ Módulo 02</span>
              <h3 className="aos-module-card-title">Financeiro</h3>
              <p className="aos-module-card-text">
                Categorização de despesas em tempo real, projeção de fluxo de caixa rodando todo dia, alertas quando um indicador sai do padrão. Seu financeiro para de ser histórico e vira preditivo. Você descobre o problema antes dele virar problema.
              </p>
            </div>

            <div className="aos-module-card">
              <div className="aos-module-icon">
                <img src={iconTarefas} alt="Módulo Gestão de Tarefas" loading="lazy" />
              </div>
              <span className="aos-module-card-tag">⟶ Módulo 03</span>
              <h3 className="aos-module-card-title">Gestão de Tarefas</h3>
              <p className="aos-module-card-text">
                Tarefas extraídas automaticamente de reuniões, emails e WhatsApps. Atribuição inteligente baseada em carga e contexto de cada pessoa. Acompanhamento de execução sem ninguém precisar atualizar status. Seu time executa, a OS organiza.
              </p>
            </div>

            <div className="aos-module-card">
              <div className="aos-module-icon">
                <img src={iconConteudo} alt="Módulo Conteúdo" loading="lazy" />
              </div>
              <span className="aos-module-card-tag">⟶ Módulo 04</span>
              <h3 className="aos-module-card-title">Conteúdo</h3>
              <p className="aos-module-card-text">
                Calendário editorial, briefings, status de produção e métricas por canal — tudo no mesmo lugar. O conteúdo orgânico que alimenta o topo do funil para de viver em planilhas espalhadas e passa a operar como parte de um organismo único, sincronizado com o resto da empresa.
              </p>
            </div>
          </div>

          {/* TABELA COMPARATIVA */}
          <div className="aos-comparison-section">
            <div className="aos-comparison-intro">
              <span className="aos-section-label">Análise comparativa</span>
              <h3 className="aos-h3-display">
                Por que <span className="aos-accent">Agentic OS</span> é diferente de tudo que sua empresa já usou.
              </h3>
              <p>
                Sua empresa já operou tecnologia de várias formas. Cada uma resolveu uma parte do problema — e deixou outras abertas. A tabela abaixo mostra onde cada modelo entrega e onde falha.
              </p>
            </div>

            <div className="aos-table-wrapper">
              <table className="aos-table">
                <thead>
                  <tr>
                    <th className="aos-th-criterio">⟶ Critério</th>
                    <th>SaaS</th>
                    <th>Planilhas + automações</th>
                    <th>Dev Interno</th>
                    <th className="aos-th-aos">Agentic OS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="aos-td-criterio">Dados confiáveis</td>
                    <td><span className="sp sp-neg">✕</span> Dados não se comunicam entre ferramentas</td>
                    <td><span className="sp sp-warn">!</span> Precisa de gambiarra para integrar</td>
                    <td><span className="sp sp-pos">✓</span> Possível, mas custosa</td>
                    <td className="aos-td-aos"><span className="sp sp-pos">✓</span> Nativa, por design</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Adaptação ao seu negócio</td>
                    <td><span className="sp sp-neg">✕</span> Inexistente</td>
                    <td><span className="sp sp-warn">!</span> Manual</td>
                    <td><span className="sp sp-pos">✓</span> Alta</td>
                    <td className="aos-td-aos"><span className="sp sp-pos">✓</span> Total, automatizada</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Inteligência Artificial</td>
                    <td><span className="sp sp-neg">✕</span> Isolada</td>
                    <td><span className="sp sp-neg">✕</span> Inexistente</td>
                    <td><span className="sp sp-neg">✕</span> Inexistente</td>
                    <td className="aos-td-aos"><span className="sp sp-pos">✓</span> Agentes trabalhando 24h por dia para o seu negócio</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Tecnologia Viva</td>
                    <td><span className="sp sp-neg">✕</span> Inexistente</td>
                    <td><span className="sp sp-neg">✕</span> Inexistente</td>
                    <td><span className="sp sp-warn">!</span> Custo cresce muito</td>
                    <td className="aos-td-aos"><span className="sp sp-pos">✓</span> Cresce junto, sem atrito</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Visão unificada</td>
                    <td><span className="sp sp-neg">✕</span> 12 abas abertas</td>
                    <td><span className="sp sp-neg">✕</span> Cada um vê uma coisa</td>
                    <td><span className="sp sp-pos">✓</span> Sim, se bem feito</td>
                    <td className="aos-td-aos"><span className="sp sp-pos">✓</span> Um único organismo</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Dependência</td>
                    <td><span className="sp sp-neg">✕</span> Dependência do fornecedor</td>
                    <td><span className="sp sp-pos">✓</span> Zero</td>
                    <td><span className="sp sp-pos">✓</span> Zero (se o time fica)</td>
                    <td className="aos-td-aos"><span className="sp sp-pos">✓</span> Zero — é seu</td>
                  </tr>
                  <tr>
                    <td className="aos-td-criterio">Velocidade de Implementação</td>
                    <td><span className="sp sp-pos">✓</span> Imediato</td>
                    <td><span className="sp sp-pos">✓</span> Imediato</td>
                    <td><span className="sp sp-neg">✕</span> Anos</td>
                    <td className="aos-td-aos"><span className="sp sp-warn">!</span> Implantação progressiva</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PROVA POR AUTORIDADE */}
          <div className="aos-authority-section">
            <div className="aos-authority-intro">
              <span className="aos-section-label">Prova por autoridade</span>
              <h3 className="aos-h3-display">
                Isso não é <span className="aos-accent">opinião isolada</span>. É para onde a tecnologia está indo.
              </h3>
              <p>
                Você não precisa acreditar em mim. Os CEOs que estão construindo o futuro da computação já estão dizendo, em alto e bom som, que o paradigma mudou. Veja o que eles estão falando:
              </p>
            </div>

            <div className="aos-authority-grid">

              <div className="aos-quote-card aos-featured">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  Minha mensagem para os CEOs neste momento: <strong>somos a última geração a gerenciar apenas humanos</strong>. A partir daqui, vamos gerenciar trabalhadores humanos e trabalhadores digitais.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Marc Benioff</div>
                  <div className="aos-role">CEO · Salesforce</div>
                  <div className="aos-source">World Economic Forum · Davos, Janeiro 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-secondary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  Acreditamos que, em 2025, vamos ver os primeiros agentes de IA <strong>"entrarem na força de trabalho"</strong> e mudarem materialmente o output das empresas.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Sam Altman</div>
                  <div className="aos-role">CEO · OpenAI</div>
                  <div className="aos-source">Blog post "Reflections" · Janeiro 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-secondary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  Nosso agente de IA faz hoje o trabalho equivalente a <strong>mais de 853 funcionários em tempo integral</strong>. Economizamos US$ 60 milhões e melhoramos o tempo de resposta em 82%.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Sebastian Siemiatkowski</div>
                  <div className="aos-role">CEO · Klarna</div>
                  <div className="aos-source">Q3 2025 Earnings Call · Novembro 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-tertiary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  Antes de pedir mais headcount, times precisam demonstrar por que não conseguem fazer o trabalho usando IA. Como essa área se pareceria se agentes autônomos já fossem parte do time?
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Tobi Lütke</div>
                  <div className="aos-role">CEO · Shopify</div>
                  <div className="aos-source">Memorando interno · Abril 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-tertiary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  As forças de trabalho do futuro serão uma combinação de humanos e humanos digitais. Você vai licenciar alguns e contratar outros, dependendo da expertise.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">Jensen Huang</div>
                  <div className="aos-role">CEO · NVIDIA</div>
                  <div className="aos-source">Entrevista Citadel Securities · Outubro 2025</div>
                </div>
              </div>

              <div className="aos-quote-card aos-tertiary">
                <div className="aos-quote-mark">"</div>
                <p className="aos-quote-text">
                  41% dos empregadores esperam reduzir headcount até 2030 por causa de transformação tecnológica. O paradigma de trabalho está sendo reescrito agora.
                </p>
                <div className="aos-attribution">
                  <div className="aos-author">World Economic Forum</div>
                  <div className="aos-role">Future of Jobs Report</div>
                  <div className="aos-source">Edição 2025</div>
                </div>
              </div>

            </div>
          </div>

          {/* FECHAMENTO FINAL */}
          <div className="aos-final-closing">
            <div className="aos-final-meta">⟶ Conclusão do Briefing</div>
            <p className="aos-final-lead">
              O mundo <span className="aos-accent">mudou</span><span className="aos-red">.</span>
            </p>
            <p className="aos-final-body">
              O Agentic OS é o oposto do paradigma do SaaS tradicional.<br />
              <strong>Não é você se adaptando à ferramenta. É a ferramenta sendo construída pra ser você.</strong>
            </p>
            <a
              href="https://wa.me/5511999718595"
              className="aos-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => tracker.track("cta_click", { product: "agentic-os", location: "final-cta" })}
            >
              Quero viver essa revolução
            </a>
          </div>

        </div>
      </section>

      <footer className="aos-footer">
        <div className="aos-container">
          <div className="aos-footer-inner">
            <div className="aos-footer-logo"><span className="aos-accent">⟁</span> AGENTIC OS</div>
            <div className="aos-footer-meta">DOC 001 · V2.0 · 2026 · BRIEFING ESTRATÉGICO</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgenticOS;
