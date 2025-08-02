import { colors, typography, spacing, borderRadius, shadows } from '../styles/tokens';

// Type definitions for design system tokens
export type ColorToken = keyof typeof colors.text | keyof typeof colors.background | keyof typeof colors.border | keyof typeof colors.foreground | keyof typeof colors.effects;
export type SizeToken = keyof typeof spacing;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ShadowToken = keyof typeof shadows;
export type FontSizeToken = keyof typeof typography.fontSize;
export type FontWeightToken = keyof typeof typography.fontWeight;
export type LineHeightToken = keyof typeof typography.lineHeight;

// Utility function to get CSS custom property value
export const getCSSVariable = (property: string): string => {
  return `var(--${property})`;
};

// Color utilities
export const getColor = (color: string, shade: string = '500'): string => {
  return getCSSVariable(`color-${color}-${shade}`);
};

// Spacing utilities
export const getSpacing = (size: SizeToken): string => {
  return getCSSVariable(`spacing-${size}`);
};

// Border radius utilities
export const getBorderRadius = (radius: BorderRadiusToken): string => {
  return getCSSVariable(`border-radius-${radius}`);
};

// Shadow utilities
export const getShadow = (shadow: ShadowToken): string => {
  return getCSSVariable(`shadow-${shadow}`);
};

// Typography utilities
export const getFontSize = (size: FontSizeToken): string => {
  return getCSSVariable(`font-size-${size}`);
};

export const getFontWeight = (weight: FontWeightToken): string => {
  return getCSSVariable(`font-weight-${weight}`);
};

export const getLineHeight = (height: LineHeightToken): string => {
  return getCSSVariable(`line-height-${height}`);
};

// CSS-in-JS style object generator
export const createStyles = (styles: Record<string, any>): Record<string, any> => {
  return styles;
};

// Common style patterns
export const commonStyles = {
  // Flexbox utilities
  flex: {
    display: 'flex',
  },
  'flex-col': {
    display: 'flex',
    flexDirection: 'column',
  },
  'flex-row': {
    display: 'flex',
    flexDirection: 'row',
  },
  'items-center': {
    alignItems: 'center',
  },
  'items-start': {
    alignItems: 'flex-start',
  },
  'items-end': {
    alignItems: 'flex-end',
  },
  'justify-center': {
    justifyContent: 'center',
  },
  'justify-between': {
    justifyContent: 'space-between',
  },
  'justify-start': {
    justifyContent: 'flex-start',
  },
  'justify-end': {
    justifyContent: 'flex-end',
  },

  // Spacing utilities
  p: (size: SizeToken) => ({ padding: getSpacing(size) }),
  px: (size: SizeToken) => ({ 
    paddingLeft: getSpacing(size), 
    paddingRight: getSpacing(size) 
  }),
  py: (size: SizeToken) => ({ 
    paddingTop: getSpacing(size), 
    paddingBottom: getSpacing(size) 
  }),
  m: (size: SizeToken) => ({ margin: getSpacing(size) }),
  mx: (size: SizeToken) => ({ 
    marginLeft: getSpacing(size), 
    marginRight: getSpacing(size) 
  }),
  my: (size: SizeToken) => ({ 
    marginTop: getSpacing(size), 
    marginBottom: getSpacing(size) 
  }),

  // Typography utilities
  text: (size: FontSizeToken) => ({ fontSize: getFontSize(size) }),
  font: (weight: FontWeightToken) => ({ fontWeight: getFontWeight(weight) }),
  leading: (height: LineHeightToken) => ({ lineHeight: getLineHeight(height) }),

  // Border utilities
  rounded: (radius: BorderRadiusToken) => ({ borderRadius: getBorderRadius(radius) }),
  border: (color: string, shade: string = '200') => ({ 
    border: `1px solid ${getColor(color, shade)}` 
  }),

  // Shadow utilities
  shadow: (shadow: ShadowToken) => ({ boxShadow: getShadow(shadow) }),

  // Background utilities
  bg: (color: string, shade: string = '500') => ({ 
    backgroundColor: getColor(color, shade) 
  }),

  // Text color utilities
  textColor: (color: string, shade: string = '900') => ({ 
    color: getColor(color, shade) 
  }),
};

// Responsive breakpoint utilities
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Media query helper
export const mediaQuery = (breakpoint: keyof typeof breakpoints) => {
  return `@media (min-width: ${breakpoints[breakpoint]})`;
};

// Theme context type
export interface Theme {
  mode: 'light' | 'dark';
  colors: typeof colors;
  typography: typeof typography;
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  shadows: typeof shadows;
}

// Default theme
export const defaultTheme: Theme = {
  mode: 'light',
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
}; 