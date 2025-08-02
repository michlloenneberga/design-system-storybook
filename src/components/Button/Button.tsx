import React from 'react';
import { colors, spacing, borderRadius, typography } from '../../styles/tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The variant of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** The icon to display before the button text */
  leftIcon?: React.ReactNode;
  /** The icon to display after the button text */
  rightIcon?: React.ReactNode;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** The content of the button */
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: borderRadius.md,
      fontWeight: typography.fontWeight.medium,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      position: 'relative',
      textDecoration: 'none',
      fontFamily: typography.fontFamily.body,
      width: fullWidth ? '100%' : 'auto',
      gap: spacing.md,
    };

    // Size styles
    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        padding: `${spacing.md} ${spacing.lg}`,
        fontSize: typography.fontSize.sm,
        minHeight: '32px',
      },
      md: {
        padding: `${spacing.lg} ${spacing.lg}`,
        fontSize: typography.fontSize.base,
        minHeight: '40px',
      },
      lg: {
        padding: `${spacing.lg} ${spacing.lg}`,
        fontSize: typography.fontSize.lg,
        minHeight: '48px',
      },
    };

    // Variant styles
    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: colors.text.brand.tertiary,
        color: colors.background.primary,
      },
      secondary: {
        backgroundColor: colors.background.primary,
        color: colors.text.primary,
        border: `1px solid ${colors.border.primary}`,
      },
      outline: {
        backgroundColor: 'transparent',
        color: colors.text.brand.tertiary,
        border: `1px solid ${colors.text.brand.tertiary}`,
      },
      ghost: {
        backgroundColor: 'transparent',
        color: colors.text.primary,
      },
      destructive: {
        backgroundColor: '#dc2626', // Red color for destructive
        color: colors.background.primary,
      },
    };

    // Combine styles
    const buttonStyles: React.CSSProperties = {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    // Handle hover states with CSS custom properties
    const getHoverStyles = () => {
      const hoverStyles: Record<string, string> = {
        primary: `
          &:hover:not(:disabled) {
            background-color: #a44a15;
          }
          &:active:not(:disabled) {
            background-color: #8a3d12;
          }
        `,
        secondary: `
          &:hover:not(:disabled) {
            background-color: var(--color-border-primary);
          }
          &:active:not(:disabled) {
            background-color: var(--color-foreground-quaternary);
          }
        `,
        outline: `
          &:hover:not(:disabled) {
            background-color: var(--color-text-brand-tertiary);
            color: var(--color-background-primary);
          }
          &:active:not(:disabled) {
            background-color: #a44a15;
            border-color: #a44a15;
          }
        `,
        ghost: `
          &:hover:not(:disabled) {
            background-color: var(--color-border-primary);
          }
          &:active:not(:disabled) {
            background-color: var(--color-foreground-quaternary);
          }
        `,
        destructive: `
          &:hover:not(:disabled) {
            background-color: #b91c1c;
          }
          &:active:not(:disabled) {
            background-color: #991b1b;
          }
        `,
      };
      return hoverStyles[variant] || '';
    };

    const isDisabled = disabled || loading;

    return (
      <>
        <style>{`
          .btn-${variant} {
            ${getHoverStyles()}
            &:disabled {
              cursor: not-allowed;
              opacity: 0.6;
            }
          }
        `}</style>
        <button
          ref={ref}
          className={`btn-${variant} ${className}`}
          style={buttonStyles}
          disabled={isDisabled}
          {...props}
        >
          {loading && (
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {!loading && leftIcon && <span className="btn-icon">{leftIcon}</span>}
          <span className="btn-content">{children}</span>
          {!loading && rightIcon && <span className="btn-icon">{rightIcon}</span>}
        </button>
      </>
    );
  }
);

Button.displayName = 'Button';

export default Button; 