import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                // PRIMARY BRAND COLORS (from Transform logo)
                primary: {
                    50: '#F0F9FF',   // Lightest blue tint
                    100: '#E0F2FE',
                    200: '#BAE6FD',
                    300: '#7DD3FC',
                    400: '#38BDF8',  // Light blue for highlights
                    500: '#0EA5E9',  // MAIN BRAND BLUE (from logo tagline)
                    600: '#0284C7',  // Hover states
                    700: '#0369A1',
                    800: '#075985',
                    900: '#0C4A6E',  // Darkest
                },

                // SECONDARY BRAND COLOR (from Transform logo)
                black: {
                    50: '#FAFAF9',   // Off-white background
                    100: '#F5F5F4',  // Light gray background
                    200: '#E7E5E4',
                    300: '#D6D3D1',
                    400: '#A8A29E',
                    500: '#78716C',  // Secondary text
                    600: '#57534E',
                    700: '#44403C',  // Body text
                    800: '#292524',
                    900: '#1C1917',  // MAIN BRAND BLACK (from logo wordmark)
                },

                // ACCENT COLOR (energy & CTAs)
                accent: {
                    50: '#FFF7ED',
                    100: '#FFEDD5',
                    200: '#FED7AA',
                    300: '#FDBA74',
                    400: '#FB923C',
                    500: '#F97316',  // MAIN ACCENT ORANGE
                    600: '#EA580C',  // Hover states
                    700: '#C2410C',
                    800: '#9A3412',
                    900: '#7C2D12',
                },

                // SEMANTIC COLORS
                success: {
                    500: '#10B981',  // Green for success states
                    600: '#059669',
                },
                warning: {
                    500: '#F59E0B',  // Yellow for warnings
                    600: '#D97706',
                },
                error: {
                    500: '#EF4444',  // Red for errors
                    600: '#DC2626',
                },
            },

            fontFamily: {
                // HEADINGS: Montserrat (from existing brand)
                heading: ['Montserrat', 'system-ui', 'sans-serif'],

                // BODY: Inter (modern, highly readable)
                body: ['Inter', 'system-ui', 'sans-serif'],
            },

            fontSize: {
                // RESPONSIVE TYPE SCALE
                // Mobile-first sizing with desktop overrides
                'hero': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '800' }],      // 36px mobile
                'hero-lg': ['3.75rem', { lineHeight: '1', fontWeight: '800' }],        // 60px desktop
                'h1': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],      // 30px mobile
                'h1-lg': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],     // 36px desktop
                'h2': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],           // 24px
                'h3': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],       // 20px
                'h4': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }],      // 18px
                'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18px
                'body': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],         // 16px
                'body-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
                'button': ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }],       // 16px
            },

            spacing: {
                // CUSTOM SPACING SCALE
                '18': '4.5rem',   // 72px
                '22': '5.5rem',   // 88px
                '26': '6.5rem',   // 104px
                '30': '7.5rem',   // 120px
                '34': '8.5rem',   // 136px
                '38': '9.5rem',   // 152px
            },

            borderRadius: {
                // CUSTOM BORDER RADIUS
                'sm': '0.25rem',   // 4px
                'DEFAULT': '0.5rem',   // 8px
                'md': '0.75rem',   // 12px
                'lg': '1rem',      // 16px
                'xl': '1.5rem',    // 24px
                '2xl': '2rem',     // 32px
            },

            boxShadow: {
                // CUSTOM SHADOWS
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                'button-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            },

            screens: {
                // RESPONSIVE BREAKPOINTS
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },

            maxWidth: {
                // CONTAINER WIDTHS
                'container': '1280px',
                'content': '1024px',
                'narrow': '768px',
            },

            animation: {
                // CUSTOM ANIMATIONS
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
            },

            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}

export default config
