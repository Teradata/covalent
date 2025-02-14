# Covalent Components React

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![npm version](https://badge.fury.io/js/@covalent%2Fcomponents-react.svg)](https://badge.fury.io/js/@covalent%2Fcomponents-react)

**Covalent Components React** is a **React wrapper library** built on top of the [Covalent Web Components](https://github.com/Teradata/covalent/tree/main/libs/components) library. It provides a seamless, React-friendly interface for using Covalent's design system and UI components in React applications. This library bridges the gap between web components and React, enabling developers to leverage Covalent's robust component library while adhering to React's declarative syntax and patterns.

---

## Table of Contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Installation](#installation)
4. [Usage](#usage)
   - [Quick Start](#quick-start)
   - [Handling Props and Events](#handling-props-and-events)
5. [Why Use This Wrapper?](#why-use-this-wrapper)
   - [Comparison: Core Web Components vs. React Wrapper](#comparison-core-web-components-vs-react-wrapper)
6. [Documentation](#documentation)
7. [Contributing](#contributing)
8. [License](#license)
9. [Links](#links)

---

## Overview
The `@covalent/components-react` package wraps the [Covalent Web Components](https://github.com/Teradata/covalent/tree/main/libs/components) into reusable React components. It abstracts the complexity of directly interfacing with web components in React, such as:
- **Prop passing**: Automatically converts React props to web component properties/attributes.
- **Event handling**: Maps native DOM events to React-style event handlers (e.g., `onChange`).
- **Type Safety**: Provides TypeScript support for props and events.

This library is ideal for teams building React applications that want to use Covalent's design system without manual workarounds for web component integration.

---

## Key Features
- **React Compatibility**: Full integration with React’s lifecycle and state management.
- **Declarative Syntax**: Use Covalent components as native React components.
- **TypeScript Support**: Auto-generated types for props and events.
- **Automatic Prop Conversion**: Handles both attributes (strings) and properties (objects, arrays, etc.).
- **Event Normalization**: Listen to web component events via React `onEvent` handlers.
- **Custom Element Registration**: No need to manually register components in the DOM.

---

## Installation
```bash
npm install @covalent/components-react @covalent/components
```

---

## Usage

### Quick Start
1. Import the React-wrapped component:
   ```tsx
   import { cvButton } from '@covalent/components-react';
   ```
2. Use it in your JSX:
   ```tsx
   function App() {
     return (
       <cvButton
         variant="filled"
         onClick={() => console.log('Button clicked!')}
       >
         Click Me
       </cvButton>
     );
   }
   ```

### Handling Props and Events
- **Props**: Pass props as you would with any React component. Non-primitive values (e.g., objects, arrays) are set as properties on the underlying web component.
- **Events**: Use `on`-prefixed event names (e.g., `onClick` for `click` events).

Example with a complex component:
```tsx
import { cvDataTable } from '@covalent/components-react';

function TableDemo() {
  const columns = [{ label: 'Name', key: 'name' }];
  const data = [{ name: 'Item 1' }, { name: 'Item 2' }];

  return (
    <cvDataTable
      columns={columns}
      data={data}
      onRowClick={(event) => console.log('Row clicked:', event.detail)}
    />
  );
}
```

---

## Why Use This Wrapper?

### Comparison: Core Web Components vs. React Wrapper
| Task                | With Core Web Components (No Wrapper)          | With React Wrapper (`@covalent/components-react`) |
|---------------------|-----------------------------------------------|---------------------------------------------------|
| **Passing Data**     | Manually distinguish between attributes (strings) and properties (objects). | Pass props naturally; the wrapper handles conversion. |
| **Event Handling**   | Use `ref` to add event listeners.             | Use React-style `onEvent` props.                   |
| **Type Support**     | No built-in TypeScript types.                 | Full TypeScript support.                          |
| **Code Readability** | More boilerplate.                             | Clean, declarative JSX.                           |

**Example: Button Implementation**

Without Wrapper:
```tsx
import { cvButton } from '@covalent/components';
import { useRef, useEffect } from 'react';

export default function Button() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.addEventListener('click', () => {
      console.log('Button clicked!');
    });
  }, []);

  return <cv-button ref={buttonRef}>Click Me</cv-button>;
}
```

With Wrapper:
```tsx
import { cvButton } from '@covalent/components-react';

export default function Button() {
  return (
    <cvButton onClick={() => console.log('Button clicked!')}>
      Click Me
    </cvButton>
  );
}
```

---

## Documentation
- **Covalent Components (Web)**: Full documentation for the underlying web components is available [here](https://github.com/Teradata/covalent/tree/main/libs/components).
- **React-Specific Guidance**: See the [Design system docs](h[ttps://teradata.github.io/covalent/](https://design.teradata.com/)) for interactive examples.

---

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Install dependencies: `npm install`.
3. Make changes and test using the provided Storybook.
4. Submit a pull request with a clear description of changes.

Report bugs or request features via [GitHub Issues](https://github.com/Teradata/covalent/issues).

---

## License
MIT © [Teradata](https://www.teradata.com/)

---

## Links
- [Covalent Main Repo](https://github.com/Teradata/covalent)
- [Covalent Web Components](https://github.com/Teradata/covalent/tree/main/libs/components)
- [Teradata Design System](https://design.teradata.com/)
