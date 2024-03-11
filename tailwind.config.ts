/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
                '176': '44rem',
                '192': '48rem',
                '208': '52rem',

            },
            screens: {
                '2xl': '1400px',
                '3xl': '1600px',
                '4xl': '1920px',
                '5xl': '2560px',
                '6xl': '3200px',
                '7xl': '3840px',
                '8xl': '4480px',
                '9xl': '5120px',
            },
            colors: {
              primaria: '#F7F7F7',
              secundaria: '#FDFDFD',
              terciaria: '#f97316',
              terciaria2: '#ea580c',

            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            dropShadow: {

                '1xl': '0px 1px 2px rgba(0, 0, 0, 1)',
                '2xl': '0px 1px 10px rgba(0, 0, 0, 0.1)',
                '2xlside': [
                    '0 1px 3px rgba(0, 0, 0, 0.9)',
                    '0 1px 2px rgba(0, 0, 0, 0.9)'
                ],
                '3xl': '1px 1px .25px rgba(255, 255, 255, 1)',
                '4xl': [
                    '0 15px 15px rgba(0, 0, 0, 0.25)',
                    '0 25px 25px rgba(0, 0, 0, 0.15)'
                ],
                '5xl': '0 1px 2px rgba(0, 172, 172, 0.8)',
                '6xl': '0 5px 10px rgba(0, 172, 172, 0.9)',
            },
            boxShadow: {
                'alarmed': 'inset 0 0 0 4px #f00',
                '1xl': [
                    '0px 6px 3px 1px rgba(0,0,0,0.5)',
                    '0px 6px 3px 1px rgba(0,0,0,0.5)',
                    '0px 6px 3px 1px rgba(0,0,0,0.5)'
                ],
                '2xl': '2px 2px 5px rgba(0, 0, 0, 0.9)',
            },
        },
    },
}

