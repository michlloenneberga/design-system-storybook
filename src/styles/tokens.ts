// Design System Tokens - Updated to match Figma design
export const colors = {
  // Text Colors
  text: {
    primary: '#414651',      // text-secondary (700)
    secondary: '#535862',    // text-tertiary (600)
    placeholder: '#717680',  // text-placeholder
    brand: {
      tertiary: '#b55419',   // text-brand-tertiary (600)
    },
    // Additional text colors from slider
    primary900: '#181d27',   // text-primary (900)
  },
  // Background Colors
  background: {
    primary: '#ffffff',      // bg-primary
    primaryAlt: '#ffffff',   // bg-primary_alt
    quaternary: '#e9eaeb',   // bg-quaternary
    brandSolid: '#b55419',   // bg-brand-solid
  },
  // Border Colors
  border: {
    primary: '#d5d7da',     // border-primary
    secondaryAlt: '#00000014', // border-secondary_alt
  },
  // Foreground Colors
  foreground: {
    quaternary: '#a4a7ae',  // fg-quaternary (400)
    brandPrimary: '#b55419', // fg-brand-primary (600)
  },
  // Effects
  effects: {
    shadow: {
      xs: '#0a0d120d',      // shadow-xs
      md01: '#0a0d121a',    // shadow-md_01
      md02: '#0a0d120f',    // shadow-md_02
      lg01: '#0a0d1214',    // shadow-lg_01
      lg02: '#0a0d1208',    // shadow-lg_02
      lg03: '#0a0d120a',    // shadow-lg_03
    },
  },
  // Component-specific colors
  components: {
    slider: {
      handleBg: '#ffffff',   // slider-handle-bg
      handleBorder: '#b55419', // slider-handle-border
    },
  },
} as const;

export const typography = {
  fontFamily: {
    body: 'Inter',
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px - text-sm
    base: '1rem',     // 16px - text-md
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  fontWeight: {
    light: '300',      // Light
    normal: '400',     // Regular
    medium: '500',     // Medium
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    // Specific line heights from Figma
    textSm: '20px',   // Line height/text-sm
    textMd: '24px',   // Line height/text-md
    textXs: '18px',   // Line height/text-xs
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  // Figma spacing tokens
  xxs: '2px',     // spacing-xxs
  sm: '6px',      // spacing-sm
  md: '8px',      // spacing-md
  lg: '12px',     // spacing-lg
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.5rem',     // 8px - radius-md
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.5rem',  // 24px
  full: '9999px',   // radius-full
} as const;

export const shadows = {
  xs: '0px 1px 2px 0px rgba(10, 13, 18, 0.05)', // shadow-xs
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: '0 0 #0000',
  // Slider-specific shadows
  md01: '0px 4px 6px -1px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06)', // shadow-md_01
  md02: '0px 4px 6px -1px rgba(10, 13, 18, 0.06), 0px 2px 4px -2px rgba(10, 13, 18, 0.04)', // shadow-md_02
  lg01: '0px 12px 16px -4px rgba(10, 13, 18, 0.08), 0px 4px 6px -2px rgba(10, 13, 18, 0.03), 0px 2px 2px -1px rgba(10, 13, 18, 0.04)', // shadow-lg_01
  lg02: '0px 12px 16px -4px rgba(10, 13, 18, 0.03), 0px 4px 6px -2px rgba(10, 13, 18, 0.01), 0px 2px 2px -1px rgba(10, 13, 18, 0.02)', // shadow-lg_02
  lg03: '0px 12px 16px -4px rgba(10, 13, 18, 0.04), 0px 4px 6px -2px rgba(10, 13, 18, 0.02), 0px 2px 2px -1px rgba(10, 13, 18, 0.03)', // shadow-lg_03
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const; 