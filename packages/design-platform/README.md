# Design Platform

A comprehensive design system and component library built for microfrontend architectures. This platform provides reusable UI components, icons, and styling utilities to ensure consistency across applications.

## Features

- **Reusable Components**: Pre-built, customizable React components
- **TypeScript Support**: Fully typed for better developer experience
- **Microfrontend Ready**: Designed to work seamlessly in microfrontend setups
- **Icon Library**: Collection of SVG icons for common use cases
- **Theming**: Consistent styling and theming capabilities

## Available Components

### Buttons
- [Button](./docs/Button.md) - Versatile button component with multiple styles, sizes, and icon support

## Installation

This package is part of a Lerna monorepo. To install dependencies for all packages:

```bash
yarn install
```

## Development

### Running the Showcase App

To start the development server and view component examples:

```bash
cd packages/design-platform
yarn start
```

This will start the webpack dev server on `http://localhost:3000`.

### Building

To build the design system for production:

```bash
cd packages/design-platform
yarn build
```

### Serving the Built App

After building, you can serve the static files:

```bash
cd packages/design-platform
yarn serve
```

This serves the built files on `http://localhost:3001`.

## Usage in Your Application

### Importing Components

```tsx
import { Button } from 'design-platform/components/Button';
```

### Using Icons

Icons are available in the assets folder:

```tsx
import ReactSVG from 'react-svg';
import cartIcon from 'design-platform/assets/icons/cart.svg';

<ReactSVG src={cartIcon} />
```

## Project Structure

```
packages/design-platform/
├── src/
│   ├── components/     # Reusable UI components
│   ├── assets/         # Icons and static assets
│   └── docs/           # Component documentation
├── public/             # Static files for the showcase app
├── docs/               # Markdown documentation
└── dist/               # Built output
```

## Contributing

1. Follow the existing code style and patterns
2. Add tests for new components
3. Update documentation in the `docs/` folder
4. Ensure TypeScript types are properly defined

## Scripts

- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn serve` - Serve built files
- `yarn clean` - Clean build directory

## Technologies

- React 19
- TypeScript
- Webpack
- CSS Modules
- Lerna (for monorepo management)

## License

This project is private and proprietary.
