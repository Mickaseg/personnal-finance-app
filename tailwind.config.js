
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  	extend: {
  		fontSize: {
  			preset1: '32px',
  			preset2: '20px',
  			preset3: '16px',
  			preset4: '14px',
  			preset5: '12px'
  		},
  		lineHeight: {
  			'120': '120%',
  			'150': '150%'
  		},
  		letterSpacing: {
  			normal: '0px'
  		},
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1140px',
  			xl: '1280px',
  			'2xl': '1536px'
  		},
  		colors: {
  			beige500: '#98908B',
  			beige200: '#F8F4F0',
  			grey900: '#201F24',
  			grey500: '#696868',
  			grey300: '#B3B3B3',
  			grey100: '#F2F2F2',
  			green: '#277C78',
  			yellow: '#F2CDAC',
  			cyan: '#82C9D7',
  			navy: '#626070',
  			red: '#C94736',
  			purple: '#826CB0',
  			purpleMain: '#AF81BA',
  			turquoise: '#597C7C',
  			brown: '#93674F',
  			magenta: '#934F6F',
  			blue: '#3F82B2',
  			navyGrey: '#97A0AC',
  			armyGreen: '#7F9161',
  			gold: '#CAB361',
  			orange: '#BE6C49',
  			white: '#FFFFFF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
