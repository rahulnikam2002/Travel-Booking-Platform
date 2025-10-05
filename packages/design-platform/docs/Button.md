# Simple Button Component

A clean, simple, and beginner-friendly Button component for your design system.

## Props

### Content
- **`title?: string`** - Text content for the button
- **`children?: React.ReactNode`** - React children (takes precedence over title)

### Styling
- **`isSquare?: boolean`** - `true` for square corners (4px), `false` for rounded corners (34px). Default: `false`
- **`size?: 'small' | 'medium' | 'large'`** - Button size. Default: `'medium'`
- **`type?: 'filled' | 'outlined' | 'text'`** - Button style. Default: `'filled'`

### Icons
- **`leftIcon?: React.ReactNode`** - Icon to display on the left side
- **`rightIcon?: React.ReactNode`** - Icon to display on the right side

### Basic Props
- **`disabled?: boolean`** - Disable the button. Default: `false`
- **`onClick?: () => void`** - Click handler function

## Usage Examples

### Basic Usage
```tsx
import { Button } from './components/Button/Button';

// Simple button
<Button title="Click me" onClick={() => console.log('clicked')} />

// With children
<Button onClick={() => console.log('clicked')}>
  Click me
</Button>
```

### Sizes
```tsx
<Button size="small" title="Small" />
<Button size="medium" title="Medium" />
<Button size="large" title="Large" />
```

### Types
```tsx
<Button type="filled" title="Filled" />
<Button type="outlined" title="Outlined" />
<Button type="text" title="Text" />
```

### Shapes
```tsx
<Button isSquare={false} title="Rounded" />
<Button isSquare={true} title="Square" />
```

### With Icons
```tsx
// Icons can be anything - SVG components, images, text, etc.
const CheckIcon = () => <span>✓</span>;
const StarIcon = () => <span>★</span>;

<Button leftIcon={<CheckIcon />} title="Save" />
<Button rightIcon={<StarIcon />} title="Favorite" />
<Button leftIcon={<CheckIcon />} rightIcon={<StarIcon />} title="Both" />
```

### Disabled State
```tsx
<Button title="Normal" onClick={handleClick} />
<Button title="Disabled" disabled onClick={handleClick} />
```

## Features

- ✅ 3 sizes (small, medium, large)
- ✅ 3 types (filled, outlined, text)
- ✅ 2 shapes (rounded, square)
- ✅ Left and right icon support
- ✅ Disabled state
- ✅ Simple and clean API
- ✅ TypeScript support
- ✅ Flexible icon support (SVG, images, text, any React element)
- ✅ No complex styling or animations
- ✅ Beginner-friendly

## Why Simple?

This button component is intentionally kept simple to:
- Be easy to understand for beginners
- Have a clean and predictable API
- Not interfere with your design system's styling
- Be flexible enough for most use cases
- Avoid unnecessary complexity and features

For more advanced features like icon-only buttons, loading states, or complex styling, create separate specialized components.