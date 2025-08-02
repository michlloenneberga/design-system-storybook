# Design System Storybook

A modern, accessible design system built with React, TypeScript, and Storybook. This project provides a comprehensive set of reusable components following the Figma design system.

## 🚀 Features

- **Modern Components**: Button, Input, Card, and Slider components
- **TypeScript Support**: Fully typed components and props
- **Design System Tokens**: Consistent colors, spacing, typography, and shadows
- **Interactive Documentation**: Live examples and playgrounds in Storybook
- **Accessibility**: WCAG compliant components
- **Responsive Design**: Mobile-first approach

## 📦 Components

### Button
- Multiple variants (primary, secondary, outline, ghost)
- Different sizes (sm, md, lg)
- Loading states and disabled states
- Icon support

### Input
- Text input with validation states
- Different sizes and variants
- Placeholder and label support
- Error and success states

### Card
- Flexible card component with multiple sizes
- Interactive and elevated variants
- Support for title, subtitle, and content
- Hover effects and animations

### Slider
- Single and range slider modes
- Interactive dragging and clicking
- Multiple size variants (sm, md, lg)
- Label positioning options
- Disabled state support

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run storybook
```

### Build
```bash
npm run build
```

### Build Storybook
```bash
npm run build-storybook
```

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

1. Build the Storybook:
   ```bash
   npm run build-storybook
   ```

2. The built files will be in the `storybook-static` directory

3. Deploy to your preferred hosting service

### GitHub Pages Deployment

The project includes a GitHub Actions workflow that automatically:
- Builds the Storybook on push to main/master branch
- Deploys to GitHub Pages
- Updates the live documentation

## 📚 Documentation

Visit the live Storybook documentation at: https://michlloenneberga.github.io/design-system-storybook/

### Local Development
- Run `npm run storybook` to start the development server
- Open `http://localhost:6006` in your browser
- Explore components in the sidebar
- Use the controls panel to test different props
- View the documentation for each component

## 🎨 Design System

### Colors
- Primary: Brand colors for main actions
- Secondary: Supporting colors for secondary actions
- Text: Various text colors for different contexts
- Background: Background colors for different surfaces
- Border: Border colors for different states

### Typography
- Font Family: Inter for body text, JetBrains Mono for code
- Font Sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
- Font Weights: light, normal, medium, semibold, bold, extrabold
- Line Heights: Optimized for readability

### Spacing
- Consistent spacing scale: xxs, sm, md, lg
- Responsive spacing for different screen sizes

### Shadows
- Multiple shadow levels for depth
- Component-specific shadows for sliders and cards

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- [Storybook Documentation](https://storybook.js.org/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/) 