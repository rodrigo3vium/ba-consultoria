import { useEffect, useState } from "react";
import { tracker } from "@/lib/tracking";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";

const CSS = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg-void: #060A12;
  --bg-surface: #0C1220;
  --bg-hud: #111A2E;
  --arc: #38BDF8;
  --arc-bright: #7DD3FC;
  --arc-subtle: rgba(56,189,248,0.06);
  --arc-border: rgba(56,189,248,0.08);
  --arc-border-hover: rgba(56,189,248,0.22);
  --red: #DC2626;
  --red-dark: #991B1B;
  --red-subtle: rgba(220,38,38,0.08);
  --gold: #F59E0B;
  --gold-subtle: rgba(245,158,11,0.08);
  --ivory: #F0F6FF;
  --text: #C8D6E5;
  --dim: #5A7089;
  --muted: #3D5068;
  --success: #34D399;
  --font-display: 'Chakra Petch', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-body: 'Exo 2', sans-serif;
  --glow-arc: 0 0 36px rgba(56,189,248,0.22);
  --glow-red: 0 0 36px rgba(220,38,38,0.28);
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
}

.obrigado-page {
  background: var(--bg-void);
  font-family: var(--font-body);
  color: var(--text);
  font-size: 16px;
  line-height: 1.7;
  overflow-x: hidden;
}

.obrigado-page .section-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--arc);
  display: inline-block;
  margin-bottom: 14px;
  opacity: 0.85;
}

.obrigado-page .confirm-bar {
  background: rgba(52,211,153,0.08);
  border-bottom: 1px solid rgba(52,211,153,0.2);
  padding: 14px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.obrigado-page .confirm-icon {
  width: 22px; height: 22px;
  border-radius: 50%;
  background: rgba(52,211,153,0.15);
  border: 1px solid rgba(52,211,153,0.4);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px;
  color: var(--success);
  flex-shrink: 0;
}
.obrigado-page .confirm-text {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--success);
}

.obrigado-page .hero-obrigado {
  padding: 80px 40px 60px;
  text-align: center;
  position: relative;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.07) 0%, transparent 55%),
    var(--bg-void);
}
.obrigado-page .hero-obrigado::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(56,189,248,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56,189,248,0.02) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
}
.obrigado-page .hero-obrigado-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }

.obrigado-page .hero-obrigado h1 {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 52px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--ivory);
  line-height: 1.05;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}
.obrigado-page .hero-obrigado h1 .map { color: var(--arc); }
.obrigado-page .hero-obrigado h1 .territory { display: block; color: var(--ivory); }

.obrigado-page .hero-obrigado-sub {
  font-size: 16px;
  font-weight: 300;
  color: var(--text);
  line-height: 1.75;
  margin-bottom: 8px;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
}
.obrigado-page .hero-obrigado-contrast {
  font-size: 15px;
  color: var(--dim);
  font-weight: 300;
  max-width: 540px;
  margin: 0 auto;
  font-style: italic;
}

.obrigado-page .countdown-wrap {
  margin: 36px auto 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-surface);
  border: 0.5px solid rgba(220,38,38,0.3);
  border-radius: var(--radius-md);
  padding: 12px 24px;
}
.obrigado-page .countdown-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--red);
}
.obrigado-page .countdown-timer {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  color: var(--red);
  letter-spacing: 2px;
  min-width: 60px;
}
.obrigado-page .countdown-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--red);
  animation: obrigado-blink 1s step-end infinite;
  flex-shrink: 0;
}
@keyframes obrigado-blink { 0%,100%{opacity:1} 50%{opacity:0} }

.obrigado-page .ba-section {
  padding: 80px 40px;
  background: var(--bg-surface);
  border-top: 0.5px solid var(--arc-border);
  border-bottom: 0.5px solid var(--arc-border);
}
.obrigado-page .ba-inner { max-width: 960px; margin: 0 auto; }
.obrigado-page .ba-title {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.8vw, 32px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--ivory);
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.15;
}
.obrigado-page .ba-title span { color: var(--arc); }

.obrigado-page .ba-grid {
  display: grid;
  grid-template-columns: 1fr 56px 1fr;
  gap: 0;
  align-items: stretch;
}
.obrigado-page .ba-col {
  background: var(--bg-void);
  border: 0.5px solid var(--arc-border);
  border-radius: var(--radius-lg);
  padding: 28px;
}
.obrigado-page .ba-col-before { border-color: rgba(220,38,38,0.2); }
.obrigado-page .ba-col-after { border-color: rgba(56,189,248,0.2); }
.obrigado-page .ba-col-header {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 0.5px solid;
  display: flex;
  align-items: center;
  gap: 8px;
}
.obrigado-page .ba-col-before .ba-col-header { color: var(--red); border-color: rgba(220,38,38,0.2); }
.obrigado-page .ba-col-after .ba-col-header { color: var(--arc); border-color: rgba(56,189,248,0.15); }
.obrigado-page .ba-arrow-col {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 22px;
  color: var(--arc);
  opacity: 0.4;
}
.obrigado-page .ba-items { display: flex; flex-direction: column; gap: 12px; }
.obrigado-page .ba-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  font-weight: 300;
  color: var(--text);
  line-height: 1.55;
}
.obrigado-page .ba-item-icon { min-width: 18px; font-size: 12px; margin-top: 2px; }

.obrigado-page .product-section {
  padding: 80px 40px;
  background:
    radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.05) 0%, transparent 60%),
    var(--bg-void);
}
.obrigado-page .product-inner { max-width: 900px; margin: 0 auto; text-align: center; }
.obrigado-page .product-h2 {
  font-family: var(--font-display);
  font-size: clamp(22px, 3vw, 38px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--ivory);
  margin-bottom: 16px;
  line-height: 1.1;
}
.obrigado-page .product-h2 span { color: var(--arc); }
.obrigado-page .product-body {
  font-size: 15px;
  font-weight: 300;
  color: var(--text);
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.75;
}

.obrigado-page .product-mockup {
  max-width: 600px;
  margin: 0 auto 48px;
  background: var(--bg-surface);
  border: 0.5px solid var(--arc-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
}
.obrigado-page .product-mockup::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--arc), transparent);
  opacity: 0.5;
}
.obrigado-page .product-mockup-top {
  background: var(--bg-hud);
  padding: 20px 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 0.5px solid var(--arc-border);
}
.obrigado-page .mockup-dot { width: 8px; height: 8px; border-radius: 50%; }
.obrigado-page .mockup-dot-r { background: #DC2626; opacity: 0.7; }
.obrigado-page .mockup-dot-y { background: #F59E0B; opacity: 0.7; }
.obrigado-page .mockup-dot-g { background: #34D399; opacity: 0.7; }
.obrigado-page .mockup-title-bar {
  flex: 1;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--dim);
}
.obrigado-page .product-mockup-body {
  padding: 32px 28px;
  text-align: left;
}
.obrigado-page .mockup-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--arc);
  background: var(--arc-subtle);
  border: 0.5px solid rgba(56,189,248,0.15);
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 16px;
}
.obrigado-page .mockup-name {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--ivory);
  margin-bottom: 8px;
  line-height: 1.1;
}
.obrigado-page .mockup-name span { color: var(--arc); }
.obrigado-page .mockup-desc {
  font-size: 13px;
  font-weight: 300;
  color: var(--dim);
  margin-bottom: 24px;
  line-height: 1.6;
}
.obrigado-page .mockup-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 24px;
}
.obrigado-page .mockup-feature {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  font-weight: 300;
  color: var(--text);
  line-height: 1.45;
}
.obrigado-page .mockup-feature-dot {
  width: 14px; height: 14px;
  border-radius: 3px;
  background: rgba(52,211,153,0.1);
  border: 0.5px solid rgba(52,211,153,0.3);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
  font-size: 8px;
  color: var(--success);
}
.obrigado-page .mockup-price-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 20px;
  border-top: 0.5px solid var(--arc-border);
}
.obrigado-page .mockup-price-old {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--muted);
  text-decoration: line-through;
}
.obrigado-page .mockup-price-new {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--arc);
}
.obrigado-page .mockup-price-new small {
  font-size: 16px;
  color: var(--dim);
  font-family: var(--font-body);
  font-weight: 300;
}
.obrigado-page .mockup-discount {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: rgba(220,38,38,0.1);
  color: var(--red);
  border: 0.5px solid rgba(220,38,38,0.25);
  padding: 4px 10px;
  border-radius: 4px;
}

.obrigado-page .testimonials-section {
  padding: 80px 40px;
  background: var(--bg-surface);
  border-top: 0.5px solid var(--arc-border);
  border-bottom: 0.5px solid var(--arc-border);
}
.obrigado-page .testimonials-inner { max-width: 960px; margin: 0 auto; }
.obrigado-page .section-title {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.5vw, 30px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--ivory);
  margin-bottom: 40px;
  text-align: center;
  line-height: 1.15;
}
.obrigado-page .section-title span { color: var(--arc); }
.obrigado-page .testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.obrigado-page .t-card {
  background: var(--bg-void);
  border: 0.5px solid var(--arc-border);
  border-radius: var(--radius-lg);
  padding: 24px;
  position: relative;
  transition: border-color 0.3s, transform 0.3s;
}
.obrigado-page .t-card:hover { border-color: var(--arc-border-hover); transform: translateY(-4px); }
.obrigado-page .t-card::after {
  content: '';
  position: absolute;
  top: 8px; right: 8px;
  width: 10px; height: 10px;
  border-top: 1px solid rgba(56,189,248,0.15);
  border-right: 1px solid rgba(56,189,248,0.15);
}
.obrigado-page .t-result {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--arc);
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}
.obrigado-page .t-quote {
  font-size: 13px;
  font-weight: 300;
  color: var(--text);
  line-height: 1.7;
  margin-bottom: 18px;
  font-style: italic;
}
.obrigado-page .t-author { display: flex; align-items: center; gap: 10px; }
.obrigado-page .t-avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: var(--arc-subtle);
  border: 0.5px solid rgba(56,189,248,0.2);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  color: var(--arc);
}
.obrigado-page .t-name { font-family: var(--font-display); font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--ivory); letter-spacing: 0.3px; }
.obrigado-page .t-role { font-family: var(--font-mono); font-size: 8.5px; letter-spacing: 1px; text-transform: uppercase; color: var(--dim); margin-top: 2px; }

.obrigado-page .offer-section {
  padding: 80px 40px;
  background:
    radial-gradient(ellipse at 50% 60%, rgba(56,189,248,0.06) 0%, transparent 55%),
    var(--bg-void);
}
.obrigado-page .offer-inner { max-width: 700px; margin: 0 auto; }

.obrigado-page .offer-box {
  background: var(--bg-surface);
  border: 1px solid rgba(56,189,248,0.2);
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
}
.obrigado-page .offer-box::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--arc), var(--arc-bright), var(--arc), transparent);
}

.obrigado-page .offer-header {
  background: var(--bg-hud);
  padding: 28px 36px;
  border-bottom: 0.5px solid var(--arc-border);
  text-align: center;
}
.obrigado-page .offer-header-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--arc);
  margin-bottom: 10px;
}
.obrigado-page .offer-header-title {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--ivory);
  letter-spacing: 1px;
}

.obrigado-page .offer-body { padding: 36px; }

.obrigado-page .offer-items { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
.obrigado-page .offer-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 14px;
  border-bottom: 0.5px solid var(--arc-border);
}
.obrigado-page .offer-item:last-child { border-bottom: none; padding-bottom: 0; }
.obrigado-page .offer-item-left { display: flex; align-items: flex-start; gap: 10px; }
.obrigado-page .offer-item-check {
  width: 18px; height: 18px;
  border-radius: 4px;
  background: rgba(52,211,153,0.1);
  border: 0.5px solid rgba(52,211,153,0.3);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
  font-size: 9px;
  color: var(--success);
}
.obrigado-page .offer-item-name { font-size: 13px; color: var(--text); font-weight: 300; }
.obrigado-page .offer-item-name strong { color: var(--ivory); font-weight: 500; display: block; margin-bottom: 2px; font-size: 13px; }
.obrigado-page .offer-item-price {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--dim);
  text-decoration: line-through;
  white-space: nowrap;
  margin-top: 2px;
}

.obrigado-page .offer-total {
  background: var(--bg-hud);
  border: 0.5px solid var(--arc-border);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}
.obrigado-page .offer-total-label {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--dim);
  letter-spacing: 1px;
}
.obrigado-page .offer-total-price { text-align: right; }
.obrigado-page .offer-total-old {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
  text-decoration: line-through;
  display: block;
}
.obrigado-page .offer-total-new {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  color: var(--arc);
  display: block;
  line-height: 1;
  text-shadow: 0 0 20px rgba(56,189,248,0.3);
}

.obrigado-page .btn-cta-offer {
  display: block;
  width: 100%;
  background: var(--arc);
  color: var(--bg-void);
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 36px;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  text-decoration: none;
  margin-bottom: 12px;
}
.obrigado-page .btn-cta-offer:hover { box-shadow: var(--glow-arc); transform: translateY(-2px); }

.obrigado-page .offer-micro {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--dim);
  text-align: center;
  display: block;
  margin-bottom: 24px;
}

.obrigado-page .guarantee-row {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(52,211,153,0.05);
  border: 0.5px solid rgba(52,211,153,0.15);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}
.obrigado-page .guarantee-icon {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba(52,211,153,0.1);
  border: 1px solid rgba(52,211,153,0.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}
.obrigado-page .guarantee-text-title {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--success);
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}
.obrigado-page .guarantee-text-body { font-size: 12px; font-weight: 300; color: var(--dim); line-height: 1.5; }

.obrigado-page .objection-section {
  padding: 80px 40px;
  background: var(--bg-surface);
  border-top: 0.5px solid var(--arc-border);
  border-bottom: 0.5px solid var(--arc-border);
}
.obrigado-page .objection-inner { max-width: 680px; margin: 0 auto; text-align: center; }
.obrigado-page .objection-h2 {
  font-family: var(--font-display);
  font-size: clamp(18px, 2.5vw, 26px);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--ivory);
  margin-bottom: 20px;
  line-height: 1.2;
}
.obrigado-page .objection-h2 span { color: var(--arc); }
.obrigado-page .objection-body {
  font-size: 15px;
  font-weight: 300;
  color: var(--text);
  line-height: 1.8;
  margin-bottom: 24px;
}
.obrigado-page .objection-body strong { color: var(--ivory); font-weight: 500; }

.obrigado-page .skip-section {
  padding: 40px 40px 60px;
  text-align: center;
  background: var(--bg-void);
}
.obrigado-page .skip-text {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--muted);
}
.obrigado-page .skip-text a {
  color: var(--dim);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}
.obrigado-page .skip-text a:hover { color: var(--text); }

.obrigado-page footer {
  padding: 32px 40px;
  background: var(--bg-void);
  border-top: 0.5px solid var(--arc-border);
  text-align: center;
}
.obrigado-page .footer-brand { font-family: var(--font-display); font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--muted); letter-spacing: 1.5px; margin-bottom: 6px; }
.obrigado-page .footer-brand span { color: var(--arc); }
.obrigado-page .footer-copy { font-family: var(--font-mono); font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--muted); }

@media (max-width: 860px) {
  .obrigado-page .confirm-bar { padding: 12px 20px; }
  .obrigado-page .hero-obrigado,
  .obrigado-page .ba-section,
  .obrigado-page .product-section,
  .obrigado-page .testimonials-section,
  .obrigado-page .offer-section,
  .obrigado-page .objection-section,
  .obrigado-page .skip-section { padding-left: 20px; padding-right: 20px; }
  .obrigado-page .ba-grid { grid-template-columns: 1fr; gap: 16px; }
  .obrigado-page .ba-arrow-col { display: none; }
  .obrigado-page .testimonials-grid { grid-template-columns: 1fr; }
  .obrigado-page .mockup-features { grid-template-columns: 1fr; }
  .obrigado-page .offer-body { padding: 24px 20px; }
  .obrigado-page .offer-header { padding: 20px 24px; }
}
`;

const HOTMART_BASE = "https://pay.hotmart.com/T104822269G?checkoutMode=10";
const NOTION_EBOOK =
  "https://treevium.notion.site/20-skills-para-neg-cios-344fc75e990e80178309ef115f65912e?source=copy_link";

const ObrigadoImersaoClaude = () => {
  const [seconds, setSeconds] = useState(14 * 60 + 59);

  useEffect(() => {
    tracker.page("Obrigado Imersão Claude");

    // inject Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Exo+2:wght@300;400;500&display=swap";
    document.head.appendChild(link);

    document.body.style.backgroundColor = "#060A12";
    document.body.style.paddingTop = "0";

    return () => {
      document.head.removeChild(link);
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  // countdown
  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m < 10 ? "0" : ""}${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleCta = (location: string) => {
    tracker.track("cta_click", { product: "imersao-claude", cta_location: location, page: "/educacao/obrigado-imersao-claude" });
    const checkoutUrl = buildHotmartCheckoutUrl({ baseUrl: HOTMART_BASE });
    window.open(checkoutUrl, "_blank");
  };

  return (
    <div className="obrigado-page">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* CONFIRM BAR */}
      <div className="confirm-bar">
        <div className="confirm-icon">✓</div>
        <span className="confirm-text">Ebook enviado · Verifique seu email agora</span>
      </div>

      {/* HERO */}
      <section className="hero-obrigado">
        <div className="hero-obrigado-inner">
          <div className="section-label">Antes de fechar essa página</div>
          <h1>
            As 20 Skills são o <span className="map">mapa.</span>
            <span className="territory">A Imersão é o território.</span>
          </h1>
          <p className="hero-obrigado-sub">
            Você pode ler o ebook, entender as skills e ainda assim não saber por onde começar. É o
            problema de todo guia: ele te mostra <em>o que fazer</em> — mas não te coloca na frente
            do teclado fazendo.
          </p>
          <p className="hero-obrigado-contrast">
            O PDF das 20 Skills já foi enviado para o seu email. O que está abaixo vale mais.
          </p>
          <div className="countdown-wrap">
            <span className="countdown-dot" />
            <span className="countdown-label">Oferta expira em</span>
            <span className="countdown-timer">{formatTime(seconds)}</span>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="ba-section">
        <div className="ba-inner">
          <h2 className="ba-title">
            Antes x depois da<br />
            <span>Imersão em Claude</span>
          </h2>
          <div className="ba-grid">
            <div className="ba-col ba-col-before">
              <div className="ba-col-header">
                <span>✕</span> Sem a Imersão
              </div>
              <div className="ba-items">
                {[
                  "Sabe que IA existe, mas não sabe aplicar no seu negócio",
                  "Passa horas em tarefas que poderiam ser automatizadas",
                  "Testa prompt, não funciona, desiste",
                  "Depende de freelancer para criar conteúdo",
                  "Usa IA como curiosidade — não como alavanca de negócio",
                ].map((item, i) => (
                  <div className="ba-item" key={i}>
                    <span className="ba-item-icon" style={{ color: "var(--red)" }}>✕</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="ba-arrow-col">→</div>
            <div className="ba-col ba-col-after">
              <div className="ba-col-header">
                <span>✓</span> Com a Imersão
              </div>
              <div className="ba-items">
                {[
                  "Usa Claude com fluência para tarefas reais do dia a dia",
                  "Delega para IA o que é repetitivo e foca no que importa",
                  "Sabe estruturar qualquer instrução e ter o resultado esperado",
                  "Produz conteúdo em escala sozinho, com qualidade",
                  "IA como vantagem competitiva real — não como ferramenta de curiosidade",
                ].map((item, i) => (
                  <div className="ba-item" key={i}>
                    <span className="ba-item-icon" style={{ color: "var(--success)" }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="product-section">
        <div className="product-inner">
          <div className="section-label">O próximo passo</div>
          <h2 className="product-h2">
            Imersão em <span>Claude</span>
          </h2>
          <p className="product-body">
            O treinamento prático onde você aprende a usar o Claude — a IA mais avançada do mundo —
            aplicado diretamente ao seu negócio. Não é curso teórico. Não tem módulo sobre "o futuro
            da IA". É você abrindo o Claude e executando.
          </p>
          <div className="product-mockup">
            <div className="product-mockup-top">
              <div className="mockup-dot mockup-dot-r" />
              <div className="mockup-dot mockup-dot-y" />
              <div className="mockup-dot mockup-dot-g" />
              <div className="mockup-title-bar">imersao-em-claude · rodrigo-albuquerque</div>
            </div>
            <div className="product-mockup-body">
              <span className="mockup-tag">Treinamento prático</span>
              <div className="mockup-name">
                Imersão em <span>Claude</span>
              </div>
              <div className="mockup-desc">
                90 minutos. Do zero ao operacional. Sem enrolação, sem teoria, sem conhecimento
                técnico necessário.
              </div>
              <div className="mockup-features">
                {[
                  "90 min de imersão ao vivo",
                  "Aplicado ao seu negócio",
                  "Prompts prontos inclusos",
                  "Acesso imediato",
                  "Zero conhecimento técnico",
                  "Qualquer segmento",
                ].map((f, i) => (
                  <div className="mockup-feature" key={i}>
                    <span className="mockup-feature-dot">✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <div className="mockup-price-row">
                <span className="mockup-price-old">R$ 197</span>
                <span className="mockup-price-new">
                  R$97 <small>hoje</small>
                </span>
                <span className="mockup-discount">51% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <h2 className="section-title">
            Quem já passou pela<br />
            <span>Imersão</span>
          </h2>
          <div className="testimonials-grid">
            {[
              {
                result: "−8h semanais de trabalho repetitivo",
                quote:
                  "Em dois dias de aplicação eliminei 8 horas semanais de trabalho repetitivo. O que mais me surpreendeu foi a simplicidade — não precisei de nenhum conhecimento técnico.",
                initials: "MF",
                name: "Marcos F.",
                role: "Dono de agência digital",
              },
              {
                result: "Propostas de 3h para 12 minutos",
                quote:
                  "Aplicei a skill de criação de propostas e fui de 3 horas para 12 minutos por proposta. Em uma semana já tinha recuperado o investimento 10 vezes.",
                initials: "CL",
                name: "Carolina L.",
                role: "Consultora de marketing",
              },
              {
                result: "Atendimento automatizado sem contratar",
                quote:
                  "Sou médico e nunca pensei que conseguiria usar IA no meu negócio. As skills são tão claras que qualquer pessoa aplica. Meu atendimento inicial está 100% automatizado.",
                initials: "RP",
                name: "Dr. Ricardo P.",
                role: "Médico e gestor de clínica",
              },
            ].map((t, i) => (
              <div className="t-card" key={i}>
                <div className="t-result">{t.result}</div>
                <p className="t-quote">{t.quote}</p>
                <div className="t-author">
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER BOX */}
      <section className="offer-section">
        <div className="offer-inner">
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div className="section-label">Oferta desta página</div>
            <h2 className="product-h2" style={{ marginBottom: "8px" }}>
              Tudo que você recebe
            </h2>
          </div>
          <div className="offer-box">
            <div className="offer-header">
              <div className="offer-header-label">Disponível somente agora</div>
              <div className="offer-header-title">Imersão em Claude — Pacote Completo</div>
            </div>
            <div className="offer-body">
              <div className="offer-items">
                {[
                  {
                    name: "Imersão em Claude (treinamento principal)",
                    desc: "90 minutos de imersão prática do zero ao operacional",
                    price: "R$197",
                  },
                  {
                    name: "Biblioteca de Prompts Prontos",
                    desc: "Os prompts exatos que uso no meu negócio, por categoria",
                    price: "R$97",
                  },
                  {
                    name: "Guia de Aplicação por Segmento",
                    desc: "Como aplicar cada skill no seu tipo de negócio específico",
                    price: "R$47",
                  },
                  {
                    name: "Acesso ao grupo de implementação",
                    desc: "Tire dúvidas e veja outros aplicando na prática",
                    price: "R$97",
                  },
                ].map((item, i) => (
                  <div className="offer-item" key={i}>
                    <div className="offer-item-left">
                      <span className="offer-item-check">✓</span>
                      <div className="offer-item-name">
                        <strong>{item.name}</strong>
                        {item.desc}
                      </div>
                    </div>
                    <span className="offer-item-price">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="offer-total">
                <div className="offer-total-label">Valor total</div>
                <div className="offer-total-price">
                  <span className="offer-total-old">De R$ 438,00</span>
                  <span className="offer-total-new">R$97</span>
                </div>
              </div>

              <button
                className="btn-cta-offer"
                onClick={() => handleCta("offer-box")}
              >
                Quero a Imersão por R$97 agora
              </button>
              <span className="offer-micro">
                ✓ acesso imediato &nbsp;·&nbsp; 7 dias de garantia &nbsp;·&nbsp; pagamento seguro
              </span>

              <div className="guarantee-row">
                <div className="guarantee-icon">🛡</div>
                <div>
                  <div className="guarantee-text-title">Garantia de 7 dias</div>
                  <div className="guarantee-text-body">
                    Se você assistir e achar que não valeu, devolvemos tudo. Sem perguntas, sem
                    burocracia. Risco zero, tudo a ganhar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTION */}
      <section className="objection-section">
        <div className="objection-inner">
          <h2 className="objection-h2">
            Por que <span>R$97</span> se o ebook foi gratuito?
          </h2>
          <p className="objection-body">
            Porque o ebook te dá o mapa. A Imersão te coloca no carro e te ensina a dirigir. São
            coisas diferentes — e{" "}
            <strong>90 minutos contigo em modo prático vale mais do que qualquer PDF.</strong>
          </p>
          <p className="objection-body">
            O ebook te mostra as 20 skills. A Imersão te faz{" "}
            <strong>executar pelo menos 5 delas</strong> antes de terminar a aula.
          </p>
          <button
            className="btn-cta-offer"
            style={{ display: "inline-block", width: "auto", padding: "18px 48px" }}
            onClick={() => handleCta("objection")}
          >
            Garantir meu acesso agora
          </button>
        </div>
      </section>

      {/* SKIP */}
      <div className="skip-section">
        <p className="skip-text">
          <a href={NOTION_EBOOK} target="_blank" rel="noopener noreferrer">
            Não quero a Imersão agora — ir direto para o ebook
          </a>
        </p>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          Rodrigo <span>Albuquerque</span>
        </div>
        <div className="footer-copy">© 2026 · Todos os direitos reservados</div>
      </footer>
    </div>
  );
};

export default ObrigadoImersaoClaude;
