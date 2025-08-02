import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Slider from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible slider component with single and range modes, following the Figma design system.',
      },
    },
  },
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'The minimum value of the slider',
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum value of the slider',
    },
    value: {
      control: { type: 'number' },
      description: 'The current value of the slider',
    },
    value2: {
      control: { type: 'number' },
      description: 'The second value for range slider',
    },
    range: {
      control: { type: 'boolean' },
      description: 'Whether this is a range slider (two handles)',
    },
    step: {
      control: { type: 'number' },
      description: 'The step size for the slider',
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Whether to show labels',
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['bottom', 'top-floating', 'none'],
      description: 'The position of labels',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the slider is disabled',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the slider',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive Slider with state
const InteractiveSlider = ({ ...props }) => {
  const [value, setValue] = useState(25);
  return (
    <Slider
      {...props}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

const InteractiveRangeSlider = ({ ...props }) => {
  const [value1, setValue1] = useState(25);
  const [value2, setValue2] = useState(75);
  return (
    <Slider
      {...props}
      value={value1}
      value2={value2}
      range
      onChange={(newValue1, newValue2) => {
        setValue1(newValue1);
        if (newValue2 !== undefined) setValue2(newValue2);
      }}
    />
  );
};

// Default story
export const Default: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    value: 25,
  },
};

// Size variants
export const Small: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    size: 'sm',
    value: 25,
    showLabels: true,
    labelPosition: 'bottom',
  },
};

export const Medium: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    size: 'md',
    value: 25,
    showLabels: true,
    labelPosition: 'bottom',
  },
};

export const Large: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    size: 'lg',
    value: 25,
    showLabels: true,
    labelPosition: 'bottom',
  },
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>Small</h4>
        <InteractiveSlider size="sm" value={25} showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>Medium</h4>
        <InteractiveSlider size="md" value={25} showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>Large</h4>
        <InteractiveSlider size="lg" value={25} showLabels labelPosition="bottom" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all three slider sizes.',
      },
    },
  },
};

// Single slider with bottom labels
export const SingleWithBottomLabels: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    value: 25,
    showLabels: true,
    labelPosition: 'bottom',
  },
};

// Single slider with top floating labels
export const SingleWithTopFloatingLabels: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    value: 25,
    showLabels: true,
    labelPosition: 'top-floating',
  },
};

// Range slider with bottom labels
export const RangeWithBottomLabels: Story = {
  render: (args) => <InteractiveRangeSlider {...args} />,
  args: {
    value: 25,
    value2: 75,
    range: true,
    showLabels: true,
    labelPosition: 'bottom',
  },
};

// Range slider with top floating labels
export const RangeWithTopFloatingLabels: Story = {
  render: (args) => <InteractiveRangeSlider {...args} />,
  args: {
    value: 25,
    value2: 75,
    range: true,
    showLabels: true,
    labelPosition: 'top-floating',
  },
};

// Disabled slider
export const Disabled: Story = {
  args: {
    value: 50,
    disabled: true,
    showLabels: true,
    labelPosition: 'bottom',
  },
};

// Different ranges
export const CustomRange: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    min: 0,
    max: 200,
    value: 50,
    step: 10,
    showLabels: true,
    labelPosition: 'bottom',
  },
};

// No labels
export const NoLabels: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    value: 50,
    showLabels: false,
  },
};

// Different values showcase
export const DifferentValues: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 25%</h4>
        <InteractiveRangeSlider value={0} value2={25} range showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 50%</h4>
        <InteractiveRangeSlider value={0} value2={50} range showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>25% - 50%</h4>
        <InteractiveRangeSlider value={25} value2={50} range showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 75%</h4>
        <InteractiveRangeSlider value={0} value2={75} range showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>25% - 75%</h4>
        <InteractiveRangeSlider value={25} value2={75} range showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>50% - 75%</h4>
        <InteractiveRangeSlider value={50} value2={75} range showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 100%</h4>
        <InteractiveRangeSlider value={0} value2={100} range showLabels labelPosition="bottom" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different range combinations as shown in the Figma design.',
      },
    },
  },
};

// Top floating labels showcase
export const TopFloatingLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 25%</h4>
        <InteractiveRangeSlider value={0} value2={25} range showLabels labelPosition="top-floating" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 50%</h4>
        <InteractiveRangeSlider value={0} value2={50} range showLabels labelPosition="top-floating" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>25% - 50%</h4>
        <InteractiveRangeSlider value={25} value2={50} range showLabels labelPosition="top-floating" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 75%</h4>
        <InteractiveRangeSlider value={0} value2={75} range showLabels labelPosition="top-floating" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>25% - 75%</h4>
        <InteractiveRangeSlider value={25} value2={75} range showLabels labelPosition="top-floating" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>50% - 75%</h4>
        <InteractiveRangeSlider value={50} value2={75} range showLabels labelPosition="top-floating" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 100%</h4>
        <InteractiveRangeSlider value={0} value2={100} range showLabels labelPosition="top-floating" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Range sliders with top floating tooltip labels.',
      },
    },
  },
};

// Single slider values
export const SingleSliderValues: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>25%</h4>
        <InteractiveSlider value={25} showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>50%</h4>
        <InteractiveSlider value={50} showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>75%</h4>
        <InteractiveSlider value={75} showLabels labelPosition="bottom" />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>100%</h4>
        <InteractiveSlider value={100} showLabels labelPosition="bottom" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Single slider with different values.',
      },
    },
  },
};

// No labels showcase
export const NoLabelsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 25%</h4>
        <InteractiveRangeSlider value={0} value2={25} range showLabels={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 50%</h4>
        <InteractiveRangeSlider value={0} value2={50} range showLabels={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>25% - 50%</h4>
        <InteractiveRangeSlider value={25} value2={50} range showLabels={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 75%</h4>
        <InteractiveRangeSlider value={0} value2={75} range showLabels={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>25% - 75%</h4>
        <InteractiveRangeSlider value={25} value2={75} range showLabels={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>50% - 75%</h4>
        <InteractiveRangeSlider value={50} value2={75} range showLabels={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem', color: '#414651' }}>0% - 100%</h4>
        <InteractiveRangeSlider value={0} value2={100} range showLabels={false} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Range sliders without labels for a cleaner look.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  render: (args) => <InteractiveSlider {...args} />,
  args: {
    min: 0,
    max: 100,
    value: 25,
    step: 1,
    showLabels: true,
    labelPosition: 'bottom',
    disabled: false,
    range: false,
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different slider configurations.',
      },
    },
  },
}; 