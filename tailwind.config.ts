import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'p': {
							marginTop: '1rem',
							marginBottom: '2rem',
							lineHeight: '1.75',
							fontSize: '1.125rem',
						},
						'h1': { marginTop: '0', marginBottom: '1.5rem' },
						'h2': { marginTop: '2.5rem', marginBottom: '1.5rem' },
						'h3': { marginTop: '2rem', marginBottom: '1rem' },
						'ul, ol': { marginTop: '1.5rem', marginBottom: '1.5rem' },
						'li': { marginTop: '0.5rem', marginBottom: '0.5rem' },
						'blockquote': { marginTop: '2rem', marginBottom: '2rem' },
						'pre': { marginTop: '2rem', marginBottom: '2rem' },
						'hr': { marginTop: '3rem', marginBottom: '3rem' },
					},
				},
			},
			fontFamily: {
				display: ['Bebas Neue', 'Oswald', 'Anton', 'sans-serif'],
				mono:    ['IBM Plex Mono', 'Space Mono', 'monospace'],
				body:    ['Fraunces', 'Georgia', 'serif'],
				sans:    ['Fraunces', 'Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				/* === PB tokens (Strategic HUD Editorial) === */
				pb: {
					'cyan':       'hsl(var(--accent-cyan))',
					'cyan-soft':  'hsl(var(--accent-cyan-soft))',
					'cyan-dim':   'hsl(var(--accent-cyan-dim))',
					'red':        'hsl(var(--accent-red))',
					'red-dim':    'hsl(var(--accent-red-dim))',
					'void':       'hsl(var(--bg-main))',
					'void-deep':  'hsl(var(--bg-deep))',
					'void-card':  'hsl(var(--bg-card))',
					'void-elev':  'hsl(var(--bg-elev))',
					'ink':        'hsl(var(--text-primary))',
					'ink-soft':   'hsl(var(--text-secondary))',
					'ink-muted':  'hsl(var(--text-muted))',
					'ink-faint':  'hsl(var(--text-faint))',
					'grid':       'rgba(255,255,255,0.045)',
					'grid-strong':'rgba(255,255,255,0.10)',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			boxShadow: {
				'cyan-glow': '0 0 24px hsl(var(--accent-cyan) / 0.45)',
				'cyan-soft': '0 0 12px hsl(var(--accent-cyan) / 0.25)',
				'red-glow':  '0 0 16px hsl(var(--accent-red) / 0.5)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			letterSpacing: {
				'mono-wide': '0.15em',
				'mono-x':    '0.2em',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to:   { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to:   { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
