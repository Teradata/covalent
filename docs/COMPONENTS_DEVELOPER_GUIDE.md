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

**Manual testing**

1. **Run Storybook** by executing the command `npm run storybook` to ensure the component renders correctly.
2. Test all properties and slots within the component.
3. Check for any console errors and resolve them as necessary.

**Unit tests**

1. **Create a new test file** in the component folder. Name it according to the component you are creating, e.g., `badge.spec.ts`.
2. **Add unit tests** in the test file. Tests should follow the vitest framework. Refer to [Vitest Documentation](https://vitest.dev/guide/) for more details.

Example test case:

```typescript
/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, beforeAll } from 'vitest';
import { CovalentBadge } from './badge';

describe('Covalent Badge', () => {
  it('should work', () => {
    expect(new CovalentBadge()).toBeDefined();
  });
});
```

3. **Run tests**: To execute the tests, use the following command:

```bash
npx nx run components:test
```

## Step 7: Export the component for build inclusion

1. Open **libs/components/component-config.json** and add component details as follows:

- **`name`**:  
  The class name of the component, as defined in the component file.

- **`selector`**:  
  The selector for the component.

- **`path`**:  
  The relative path to the component file.

- **`events`**:  
  A list of events dispatched by the component.

  **Important**: Always include events here!  
  React wrapper components will not listen to events unless they are explicitly listed in this property.

```json
[
  ...,
  {
    "name": "CovalentBadge",
    "selector": "cv-badge",
    "path": "./badge/badge",
    "events": ["change", "action"]
  },
  ...
]
```

## Step 8: Generate library exports and React component wrappers

#### Update library exports

Run the following command:

```bash
nx run components:build-exports
```

**What it does:**

- Updates the `libs/components/package.json` file with the correct exports.
- Updates the `libs/components/src/index.ts` file to include the necessary exports.

**Important:**
After running this command, verify the changes in both files to ensure the exports are accurate.

#### Generate React wrappers

Run the following command:

```bash
nx run components-react:generate-react-wrappers
```

**What it does:**

- Creates a React wrapper component and its corresponding test file in the `libs/components-react/src` folder.
- Updates the `libs/components-react/src/index.ts` file to include the new React wrapper component.

**Note:**
Review the generated React wrapper components and test files to ensure correctness.
Run the following command to test the react wrapper component:

```bash
nx run components-react:test
```

## Step 9: Create a pull request

Once everything is complete, include all the files and create a pull request using the [new web component template](https://github.com/Teradata/covalent/tree/main/.github/NEW_WEB_COMPONENT_TEMPLATE.md).
