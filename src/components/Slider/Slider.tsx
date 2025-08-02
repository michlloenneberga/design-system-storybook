import React, { useState, useCallback, useRef, useEffect } from 'react';
import { colors, spacing, borderRadius, typography, shadows } from '../../styles/tokens';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** The minimum value of the slider */
  min?: number;
  /** The maximum value of the slider */
  max?: number;
  /** The current value of the slider */
  value?: number;
  /** The second value for range slider */
  value2?: number;
  /** Whether this is a range slider (two handles) */
  range?: boolean;
  /** The step size for the slider */
  step?: number;
  /** Whether to show labels */
  showLabels?: boolean;
  /** The position of labels */
  labelPosition?: 'bottom' | 'top-floating' | 'none';
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Callback when value changes */
  onChange?: (value: number, value2?: number) => void;
  /** The size of the slider */
  size?: 'sm' | 'md' | 'lg';
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      min = 0,
      max = 100,
      value = 0,
      value2,
      range = false,
      step = 1,
      showLabels = true,
      labelPosition = 'bottom',
      disabled = false,
      onChange,
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false);
    const [activeHandle, setActiveHandle] = useState<'min' | 'max' | null>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Size-specific configurations
    const sizeConfig = {
      sm: {
        trackHeight: '6px',
        handleSize: '20px',
        containerHeight: '32px',
        labelFontSize: typography.fontSize.xs,
        labelLineHeight: typography.lineHeight.textXs,
      },
      md: {
        trackHeight: '8px',
        handleSize: '24px',
        containerHeight: '40px',
        labelFontSize: typography.fontSize.sm,
        labelLineHeight: typography.lineHeight.textSm,
      },
      lg: {
        trackHeight: '10px',
        handleSize: '28px',
        containerHeight: '48px',
        labelFontSize: typography.fontSize.base,
        labelLineHeight: typography.lineHeight.textMd,
      },
    };

    const config = sizeConfig[size];

    const getValueFromPosition = useCallback((clientX: number) => {
      if (!trackRef.current) return value;
      
      const rect = trackRef.current.getBoundingClientRect();
      const position = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const newValue = min + position * (max - min);
      return Math.round(newValue / step) * step;
    }, [min, max, step, value]);

    const handleMouseDown = useCallback((handle: 'min' | 'max') => {
      if (disabled) return;
      setIsDragging(true);
      setActiveHandle(handle);
    }, [disabled]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
      if (!isDragging || disabled) return;
      
      const newValue = getValueFromPosition(e.clientX);
      
      if (activeHandle === 'min') {
        const maxValue = range ? (value2 ?? value) : max;
        const clampedValue = Math.min(newValue, maxValue);
        onChange?.(clampedValue, value2);
      } else if (activeHandle === 'max') {
        const minValue = range ? value : min;
        const clampedValue = Math.max(newValue, minValue);
        onChange?.(value, clampedValue);
      }
    }, [isDragging, disabled, activeHandle, value, value2, range, min, max, onChange, getValueFromPosition]);

    const handleMouseUp = useCallback(() => {
      setIsDragging(false);
      setActiveHandle(null);
    }, []);

    const handleTrackClick = useCallback((e: React.MouseEvent) => {
      if (disabled) return;
      
      const newValue = getValueFromPosition(e.clientX);
      
      if (range) {
        // For range sliders, move the closest handle
        const distanceToMin = Math.abs(newValue - value);
        const distanceToMax = Math.abs(newValue - (value2 ?? value));
        
        if (distanceToMin <= distanceToMax) {
          const maxValue = value2 ?? value;
          const clampedValue = Math.min(newValue, maxValue);
          onChange?.(clampedValue, value2);
        } else {
          const minValue = value;
          const clampedValue = Math.max(newValue, minValue);
          onChange?.(value, clampedValue);
        }
      } else {
        // For single sliders, just update the value
        onChange?.(newValue);
      }
    }, [disabled, value, value2, range, onChange, getValueFromPosition]);

    useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const getHandlePosition = (val: number) => {
      return ((val - min) / (max - min)) * 100;
    };

    const containerStyles: React.CSSProperties = {
      position: 'relative',
      width: '100%',
      height: config.containerHeight,
      display: 'flex',
      alignItems: 'center',
    };

    const trackStyles: React.CSSProperties = {
      position: 'relative',
      width: '100%',
      height: config.trackHeight,
      backgroundColor: colors.background.quaternary,
      borderRadius: borderRadius.full,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
    };

    const progressStyles: React.CSSProperties = {
      position: 'absolute',
      height: config.trackHeight,
      backgroundColor: colors.background.brandSolid,
      borderRadius: borderRadius.full,
      top: '0',
      left: range ? `${getHandlePosition(value)}%` : '0',
      right: range ? `${100 - getHandlePosition(value2 ?? value)}%` : `${100 - getHandlePosition(value)}%`,
      opacity: disabled ? 0.5 : 1,
    };

    const handleStyles: React.CSSProperties = {
      position: 'absolute',
      width: config.handleSize,
      height: config.handleSize,
      backgroundColor: colors.components.slider.handleBg,
      border: `1.5px solid ${colors.components.slider.handleBorder}`,
      borderRadius: borderRadius.full,
      top: `-${(parseInt(config.handleSize) - parseInt(config.trackHeight)) / 2}px`,
      cursor: disabled ? 'not-allowed' : 'grab',
      boxShadow: shadows.md01,
      transform: 'translateX(-50%)',
      zIndex: 1,
      opacity: disabled ? 0.5 : 1,
      transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    };

    const handleActiveStyles: React.CSSProperties = {
      ...handleStyles,
      cursor: 'grabbing',
      boxShadow: shadows.lg01,
      transform: 'translateX(-50%) scale(1.1)',
    };

    const labelStyles: React.CSSProperties = {
      position: 'absolute',
      fontFamily: typography.fontFamily.body,
      fontSize: config.labelFontSize,
      fontWeight: typography.fontWeight.medium,
      lineHeight: config.labelLineHeight,
      color: colors.text.primary900,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      top: labelPosition === 'bottom' ? `${parseInt(config.containerHeight) + 8}px` : `-${parseInt(config.containerHeight) + 8}px`,
      left: '50%',
      transform: 'translateX(-50%)',
      opacity: disabled ? 0.5 : 1,
    };

    const tooltipStyles: React.CSSProperties = {
      position: 'absolute',
      backgroundColor: colors.background.primary,
      padding: `${spacing.sm} ${spacing.md}`,
      borderRadius: borderRadius.md,
      boxShadow: shadows.lg01,
      border: `1px solid ${colors.border.secondaryAlt}`,
      top: `-${parseInt(config.containerHeight) + 8}px`,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2,
      opacity: disabled ? 0.5 : 1,
    };

    const tooltipLabelStyles: React.CSSProperties = {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight.textXs,
      color: colors.text.primary,
      textAlign: 'center',
      whiteSpace: 'nowrap',
    };

    const renderHandle = (val: number, isSecond = false) => {
      const position = getHandlePosition(val);
      const isActive = activeHandle === (isSecond ? 'max' : 'min');
      
      return (
        <div
          key={isSecond ? 'max' : 'min'}
          style={{
            ...(isActive ? handleActiveStyles : handleStyles),
            left: `${position}%`,
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            handleMouseDown(isSecond ? 'max' : 'min');
          }}
        >
          {showLabels && labelPosition === 'bottom' && (
            <div style={labelStyles}>
              {val}%
            </div>
          )}
          {showLabels && labelPosition === 'top-floating' && (
            <div style={tooltipStyles}>
              <div style={tooltipLabelStyles}>
                {val}%
              </div>
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={`slider slider--${size} ${className}`}
        style={containerStyles}
        {...props}
      >
        <div 
          ref={trackRef} 
          style={trackStyles} 
          onClick={handleTrackClick}
        >
          <div style={progressStyles} />
          {renderHandle(value)}
          {range && value2 !== undefined && renderHandle(value2, true)}
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider; 