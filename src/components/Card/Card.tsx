import React from 'react';
import { colors, spacing, borderRadius, typography, shadows } from '../../styles/tokens';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the card */
  title?: string;
  /** The subtitle of the card */
  subtitle?: string;
  /** The content of the card */
  children: React.ReactNode;
  /** Whether the card has a shadow */
  elevated?: boolean;
  /** Whether the card is interactive (clickable) */
  interactive?: boolean;
  /** The size of the card */
  size?: 'sm' | 'md' | 'lg';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      subtitle,
      children,
      elevated = true,
      interactive = false,
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles: React.CSSProperties = {
      backgroundColor: colors.background.primary,
      borderRadius: borderRadius.md,
      fontFamily: typography.fontFamily.body,
      overflow: 'hidden',
      transition: 'all 0.2s ease-in-out',
    };

    // Size styles
    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: {
        padding: spacing.md,
      },
      md: {
        padding: spacing.lg,
      },
      lg: {
        padding: '24px', // Using explicit value instead of arithmetic
      },
    };

    // Shadow styles
    const shadowStyles: React.CSSProperties = elevated ? {
      boxShadow: shadows.xs,
    } : {};

    const cardStyles: React.CSSProperties = {
      ...baseStyles,
      ...sizeStyles[size],
      ...shadowStyles,
      cursor: interactive ? 'pointer' : 'default',
    };

    const titleStyles: React.CSSProperties = {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.medium,
      color: colors.text.primary,
      marginBottom: subtitle ? spacing.xxs : spacing.md,
      lineHeight: typography.lineHeight.textMd,
    };

    const subtitleStyles: React.CSSProperties = {
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.light,
      color: colors.text.secondary,
      marginBottom: spacing.md,
      lineHeight: typography.lineHeight.textSm,
    };

    const contentStyles: React.CSSProperties = {
      color: colors.text.primary,
      fontSize: typography.fontSize.base,
      lineHeight: typography.lineHeight.textMd,
    };

    return (
      <div
        ref={ref}
        className={`card ${interactive ? 'card-interactive' : ''} ${className}`}
        style={cardStyles}
        {...props}
      >
        {title && (
          <h3 style={titleStyles}>
            {title}
          </h3>
        )}
        {subtitle && (
          <p style={subtitleStyles}>
            {subtitle}
          </p>
        )}
        <div style={contentStyles}>
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card; 