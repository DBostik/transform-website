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
                    50: '#F0F9FF',
                    100: '#E0F2FE',
                    200: '#BAE6FD',
                    300: '#7DD3FC',
                    400: '#38BDF8',
                    500: '#0EA5E9',  // MAIN BRAND BLUE (from logo tagline)
                    600: '#0284C7',
                    700: '#0369A1',
                    800: '#075985',
                    900: '#0C4A6E',
                },

                // SECONDARY BRAND COLOR (from Transform logo)
                black: {
                    50: '#FAFAF9',
                    100: '#F5F5F4',
                    200: '#E7E5E4',
                    300: '#D6D3D1',
                    400: '#A8A29E',
                    500: '#78716C',
                    600: '#57534E',
                    700: '#44403C',
                    800: '#292524',
                    900: '#1C1917',  // MAIN BRAND BLACK (from logo wordmark)
                },

                accent: {
                    50: '#FFF7ED',
                    100: '#FFEDD5',
                    200: '#FED7AA',
                    300: '#FDBA74',
                    400: '#FB923C',
                    500: '#F97316',
                    600: '#EA580C',
                    700: '#C2410C',
                    800: '#9A3412',
                    900: '#7C2D12',
                },

                success: {
                    500: '#10B981',
                    600: '#059669',
                },
                warning: {
                    500: '#F59E0B',
                    600: '#D97706',
                },
                error: {
                    500: '#EF4444',
                    600: '#DC2626',
                },
            },

            fontFamily: {
                // HEADINGS: Montserrat (from existing brand)
                heading: ['Montserrat', 'system-ui', 'sans-serif'],

                body: ['Inter', 'system-ui', 'sans-serif'],
            },

            fontSize: {
                'hero': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '800' }],
                'hero-lg': ['3.75rem', { lineHeight: '1', fontWeight: '800' }],
                'h1': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
                'h1-lg': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
                'h2': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
                'h3': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
                'h4': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }],
                'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
                'body': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
                'body-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
                'button': ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }],
            },

            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
                '38': '9.5rem',
            },

            borderRadius: {
                'sm': '0.25rem',
                'DEFAULT': '0.5rem',
                'md': '0.75rem',
                'lg': '1rem',
                'xl': '1.5rem',
                '2xl': '2rem',
            },

            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                'button-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            },

            screens: {
                'xs': '475px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },

            maxWidth: {
                'container': '1280px',
                'content': '1024px',
                'narrow': '768px',
            },

            animation: {
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
