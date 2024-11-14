# Developer Guide: Adding a new web component to Covalent

## Introduction

We use Lit.js to create our web components because it streamlines the development of reusable UI elements and enhances performance through its reactive programming model. Its lightweight design and powerful templating capabilities enable us to build efficient and maintainable components. For more information, check out the [Lit.js documentation](https://lit.dev/).

## Step 1: Create the component files

1. **Create a new folder** in the `libs/components/src` directory. Name it according to the component you are creating, e.g., `badge`.
2. **Create a TypeScript file** in the folder, naming it after the component, e.g., `badge.ts`.
3. **Create an SCSS file** in the same folder, also named according to the component, e.g., `badge.scss`.

## Step 2: Define the component

At the top of your new component file, import your styles and the necessary modules from Lit.js, then define your component using the `@customElement` decorator:

```typescript
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './badge.scss?inline'; // Adjust the path as needed

/**
 * CovalentBadge
 *
 * @slot - This element has a slot for content
 */
@customElement('cv-badge')
export class CovalentBadge extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  // Define properties here if needed
  @property({ type: String }) myProperty = '';

  render() {
    return html`
      <div class="badge">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-badge': CovalentBadge;
  }
}

export default CovalentBadge;
```

For more details on defining a component, follow the [Lit.js defining a component guide](https://lit.dev/docs/components/defining/).

**Note:** The class name should begin with `Covalent`, and the component selector should start with `cv-`.

## Step 3: Add styles to the stylesheet

Define your styles in the SCSS file. Ensure you follow best practices for styling and maintain consistency with the design system.

## Step 4: Document the component

Add comments throughout your code to explain the purpose of the component, its properties, and any slots it may have. This documentation will assist other developers in understanding how to use the component effectively.

## Step 5: Add the component to Storybook

1. **Create a `.stories.js` file** in the component folder, naming it according to the component, e.g., `badge.stories.js`. Refer to the [storybook documentation](https://storybook.js.org/docs/7/writing-stories) for guidance on creating stories for web components.

```javascript
import './badge';

export default {
  title: 'Components/Badge',
  argTypes: {
    size: { options: ['large', 'small'], control: { type: 'select' } },
  },
  args: {
    size: 'large',
    content: '33',
  },
};

const Template = ({ content, size }) => {
  return `<cv-badge size="${size}">${content}</cv-badge>`;
};

export const Basic = Template.bind({});
```

## Step 6: Test the component

1. **Run Storybook** by executing the command `npm run storybook` to ensure the component renders correctly.
2. Test all properties and slots within the component.
3. Check for any console errors and resolve them as necessary.

## Step 7: Export the component for build inclusion

1. Open **libs/components/src/index.ts** and export the component as follows:

```typescript
export * from './badge/badge';
```

2. Open **libs/components/package.json** and add the component export:

```json
"./badge": {
    "types": "./badge/badge.d.ts",
    "import": "./badge.mjs",
    "require": "./badge.js"
},
```

3. Open **libs/components/vite.config.js** and include it in the build configuration:

```typescript
const { defineConfig } = require('vite');

// https://vitejs.dev/config/
module.exports = defineConfig(({ mode }) => {
  return {
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    build: {
      lib: {
        entry: [
          // other entries...
          'libs/components/src/badge/badge',
          // other entries...
        ],
      },
    },
  };
});
```

## Step 8: Create a pull request

Once everything is complete, create a pull request using the [new web component template](https://github.com/Teradata/covalent/tree/main/.github/NEW_WEB_COMPONENT_TEMPLATE.md).
