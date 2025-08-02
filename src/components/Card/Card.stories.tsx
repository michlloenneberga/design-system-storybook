import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with multiple variants and sizes following the Figma design system.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the card',
    },
    elevated: {
      control: { type: 'boolean' },
      description: 'Whether the card has a shadow',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the card is interactive (clickable)',
    },
    title: {
      control: { type: 'text' },
      description: 'The title of the card',
    },
    subtitle: {
      control: { type: 'text' },
      description: 'The subtitle of the card',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the card',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is the content of the card. It can contain any type of content including text, images, or other components.',
  },
};

// With subtitle
export const WithSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle providing additional context',
    children: 'This card includes both a title and subtitle to provide more context about the content.',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    title: 'Small Card',
    children: 'This is a small card with minimal padding.',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    title: 'Medium Card',
    children: 'This is a medium card with standard padding.',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    title: 'Large Card',
    children: 'This is a large card with generous padding for more spacious layouts.',
  },
};

// Interactive
export const Interactive: Story = {
  args: {
    interactive: true,
    title: 'Interactive Card',
    subtitle: 'Hover to see the effect',
    children: 'This card is interactive and will show a hover effect when you mouse over it.',
  },
};

// Not elevated
export const NotElevated: Story = {
  args: {
    elevated: false,
    title: 'Flat Card',
    children: 'This card has no shadow for a flatter appearance.',
  },
};

// Content only
export const ContentOnly: Story = {
  args: {
    children: 'This card has no title or subtitle, just content. It\'s perfect for simple content display.',
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <Card size="sm" title="Small" children="Small card content" />
      <Card size="md" title="Medium" children="Medium card content" />
      <Card size="lg" title="Large" children="Large card content" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All card sizes for comparison.',
      },
    },
  },
};

// Interactive showcase
export const InteractiveShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card 
        interactive 
        title="Interactive Card 1" 
        subtitle="Hover me"
        children="This card is interactive and will show a hover effect."
      />
      <Card 
        interactive 
        title="Interactive Card 2" 
        subtitle="Hover me too"
        children="Another interactive card with hover effects."
      />
      <Card 
        title="Static Card" 
        subtitle="No hover effect"
        children="This card is not interactive and won't show hover effects."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between interactive and static cards.',
      },
    },
  },
};

// Content examples
export const ContentExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card 
        title="Text Content" 
        subtitle="Simple text example"
        children="This card contains simple text content. It's perfect for displaying information, descriptions, or any text-based content."
      />
      <Card 
        title="Form Content" 
        subtitle="Input fields example"
        children={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <input 
              placeholder="Enter your name" 
              style={{ 
                padding: '0.5rem', 
                border: '1px solid #d5d7da', 
                borderRadius: '0.25rem',
                fontSize: '0.875rem'
              }} 
            />
            <input 
              placeholder="Enter your email" 
              style={{ 
                padding: '0.5rem', 
                border: '1px solid #d5d7da', 
                borderRadius: '0.25rem',
                fontSize: '0.875rem'
              }} 
            />
          </div>
        }
      />
      <Card 
        title="List Content" 
        subtitle="List example"
        children={
          <ul style={{ margin: 0, paddingLeft: '1rem' }}>
            <li>First item in the list</li>
            <li>Second item in the list</li>
            <li>Third item in the list</li>
          </ul>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of different types of content that can be placed in cards.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    size: 'md',
    elevated: true,
    interactive: false,
    title: 'Playground Card',
    subtitle: 'Try different configurations',
    children: 'This is a playground card where you can test different configurations using the controls panel.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different card configurations.',
      },
    },
  },
}; 