import React from 'react';
import { colors, spacing, borderRadius, typography } from '../../styles/tokens';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The label for the input */
  label?: string;
  /** Whether the label is required (shows asterisk) */
  required?: boolean;
  /** Helper text to display below the input */
  helperText?: string;
  /** Error message to display */
  error?: string;
  /** The size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the input is in a loading state */
  loading?: boolean;
  /** Icon to display on the left side */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side */
  rightIcon?: React.ReactNode;
  /** Whether the input should take full width */
  fullWidth?: boolean;
  /** The variant of the input */
  variant?: 'outline' | 'filled' | 'unstyled';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      required = false,
      helperText,
      error,
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      variant = 'outline',
      disabled,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const containerStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: spacing.sm,
      width: fullWidth ? '100%' : 'auto',
    };

    const labelWrapperStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      gap: spacing.xxs,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.textSm,
      color: colors.text.primary,
    };

    const labelStyles: React.CSSProperties = {
      color: colors.text.primary,
      lineHeight: typography.lineHeight.textSm,
    };

    const requiredStyles: React.CSSProperties = {
      color: colors.text.brand.tertiary,
      lineHeight: typography.lineHeight.textSm,
    };

    const inputContainerStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      gap: spacing.md,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: `${spacing.md} ${spacing.lg}`,
      backgroundColor: colors.background.primary,
      borderRadius: borderRadius.md,
      position: 'relative',
      width: '100%',
    };

    const inputBaseStyles: React.CSSProperties = {
      flex: '1 0 0',
      display: 'flex',
      flexDirection: 'row',
      gap: spacing.md,
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '1px',
      minWidth: '1px',
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.light,
      lineHeight: typography.lineHeight.textMd,
      color: colors.text.placeholder,
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
    };

    const iconStyles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.foreground.quaternary,
      flexShrink: 0,
    };

    const leftIconStyles: React.CSSProperties = {
      ...iconStyles,
      width: '20px',
      height: '20px',
    };

    const rightIconStyles: React.CSSProperties = {
      ...iconStyles,
      width: '16px',
      height: '16px',
    };

    const helperTextStyles: React.CSSProperties = {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.light,
      lineHeight: typography.lineHeight.textSm,
      color: error ? colors.text.brand.tertiary : colors.text.secondary,
    };

    const isDisabled = disabled || loading;

    return (
      <div style={containerStyles} className={`input-wrapper ${className}`}>
        {label && (
          <div style={labelWrapperStyles} className="input-label-wrapper">
            <div style={labelStyles} className="input-label">
              {label}
            </div>
            {required && (
              <div style={requiredStyles} className="input-required">
                *
              </div>
            )}
          </div>
        )}
        <div style={inputContainerStyles} className="input-container">
          {/* Border and shadow overlay */}
          <div
            aria-hidden="true"
            className="input-border-overlay"
            style={{
              position: 'absolute',
              border: `1px solid ${colors.border.primary}`,
              borderRadius: borderRadius.md,
              boxShadow: `0px 1px 2px 0px ${colors.effects.shadow.xs}`,
              inset: 0,
              pointerEvents: 'none',
            }}
          />
          <div style={inputBaseStyles} className="input-content">
            {leftIcon && (
              <div style={leftIconStyles} className="input-left-icon">
                {leftIcon}
              </div>
            )}
            <input
              ref={ref}
              id={inputId}
              style={{
                flex: '1 0 0',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.base,
                fontWeight: typography.fontWeight.light,
                lineHeight: typography.lineHeight.textMd,
                color: colors.text.primary,
                minHeight: '1px',
                minWidth: '1px',
              }}
              disabled={isDisabled}
              className="input-field"
              {...props}
            />
          </div>
          {rightIcon && (
            <div style={rightIconStyles} className="input-right-icon">
              {rightIcon}
            </div>
          )}
        </div>
        {(helperText || error) && (
          <div style={helperTextStyles} className="input-helper-text">
            {error || helperText}
          </div>
        )}
        <style>{`
          .input-container {
            transition: all 0.2s ease-in-out;
          }
          .input-container:focus-within .input-border-overlay {
            border-color: var(--color-text-brand-tertiary);
            box-shadow: 0 0 0 3px rgba(181, 84, 25, 0.1);
          }
          .input-field:disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }
          .input-field::placeholder {
            color: var(--color-text-placeholder);
          }
        `}</style>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 