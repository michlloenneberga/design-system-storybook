import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with multiple variants, sizes, and states following the Figma design system.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outline', 'filled', 'unstyled'],
      description: 'The visual style variant of the input',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the input is in a loading state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the input should take full width',
    },
    label: {
      control: { type: 'text' },
      description: 'The label for the input',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the label is required (shows asterisk)',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder text',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text to display below the input',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - matches Figma design
export const Default: Story = {
  args: {
    label: 'Email',
    required: true,
    placeholder: 'olivia@untitledui.com',
    helperText: 'This is a hint text to help user.',
    leftIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    rightIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
};

// With label
export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

// Required field
export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
    placeholder: 'Enter your email',
  },
};

// Variants
export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Input',
    placeholder: 'Outline variant',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Input',
    placeholder: 'Filled variant',
  },
};

export const Unstyled: Story = {
  args: {
    variant: 'unstyled',
    label: 'Unstyled Input',
    placeholder: 'Unstyled variant',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small size',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Input',
    placeholder: 'Medium size',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large size',
  },
};

// States
export const Loading: Story = {
  args: {
    loading: true,
    label: 'Loading Input',
    placeholder: 'Loading state',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Input',
    placeholder: 'Disabled state',
  },
};

export const WithError: Story = {
  args: {
    label: 'Input with Error',
    placeholder: 'Error state',
    error: 'This field is required',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Input with Helper',
    placeholder: 'Helper text',
    helperText: 'This is some helpful text',
  },
};

// With icons
export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    rightIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Email with Icons',
    type: 'email',
    placeholder: 'Enter email',
    leftIcon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    rightIcon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
    ),
  },
};

// Full width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
  },
  parameters: {
    layout: 'padded',
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input variant="outline" label="Outline" placeholder="Outline variant" />
      <Input variant="filled" label="Filled" placeholder="Filled variant" />
      <Input variant="unstyled" label="Unstyled" placeholder="Unstyled variant" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input variants for comparison.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size="sm" label="Small" placeholder="Small size" />
      <Input size="md" label="Medium" placeholder="Medium size" />
      <Input size="lg" label="Large" placeholder="Large size" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input sizes for comparison.',
      },
    },
  },
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Input
        label="Full Name"
        required
        placeholder="Enter your full name"
        leftIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        }
      />
      <Input
        label="Email"
        required
        type="email"
        placeholder="Enter your email"
        leftIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        }
      />
      <Input
        label="Password"
        required
        type="password"
        placeholder="Enter your password"
        leftIcon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <circle cx="12" cy="16" r="1" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        }
        rightIcon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how inputs look in a form context with required fields.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    loading: false,
    disabled: false,
    fullWidth: false,
    label: 'Playground Input',
    required: false,
    placeholder: 'Try different configurations',
    helperText: 'This is helper text',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different input configurations.',
      },
    },
  },
}; 