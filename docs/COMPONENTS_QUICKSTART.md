# Quick Start to Covalent Web Components

Welcome to the Quick Start Guide for implementing the `@covalent/components` library, a comprehensive design system component library tailored for Teradata branded products. This guide will walk you through the basic steps to get started with Covalent components in your web projects.

## Step 1: Setting Up Your HTML File

Start with a basic HTML template. Here's a simple example to get you started:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Covalent - Web Components Library</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <!-- Import Covalent Components from a CDN -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/@covalent/components@latest/index.mjs"></script>

    <!-- Import Covalent Light Theme CSS -->
    <link href="https://cdn.jsdelivr.net/npm/@covalent/components@latest/theme/prebuilt/light-theme.css" rel="stylesheet" />
  </head>
  <body>
    <!-- Your content goes here -->
  </body>
</html>
```

## Step 2: Using Covalent Components

To use a Covalent web component, simply add its corresponding tag within the `body` section of your HTML file. For example, to use a Covalent button:

```html
<cv-button label="Hello world" raised></cv-button>
```

This code snippet will render a Covalent button with the label "Hello world" on your webpage.

## Step 3: Customizing Components

Covalent components are designed to be easily customizable. You can modify attributes such as `label`, `raised`, and others to change the appearance and behavior of the components. Since web components are built with on top of web standards they also have full support for listening to fired events natively in the browser using `addEventListener`

## Using ES imports

### Installing

Use your favorite package management tool to add covalent components to your project.

```bash
# Using npm
npm install --save @covalent/components

# Using yarn
yarn add @covalent/components
```

## Angular Integration

Applications using angular can use covalent components in the same way they use HTML elements today adding [`CUSTOM_ELEMENTS_SCHEMA`](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA) schema to any Angular module or standalone component.

```javascript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import '@covalent/components/button';

@component({
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<cv-button label="Hello world" raised></cv-button>',
})
export class AppComponent {}
```

## Additional Tips

**Exploring Components**: Visit the Covalent components storybook [documentation](https://teradata.github.io/covalent/docs/components/?path=/docs/introduction--overview) to explore the full range of components available for use in your projects.

**Theming**: Beyond the prebuilt light theme, Covalent offers theming capabilities to tailor the components to your branding needs. Explore the [theming documentation](https://teradata.github.io/covalent/v9/#/docs/theming/web-components) to learn how to customize the look and feel of your components.

**Responsive Design**: Covalent components are built with responsiveness in mind. Test your application on various devices to ensure a consistent user experience.

**Web Components**: Learn more about the [web component standard](https://www.webcomponents.org/)

Congratulations 🥳, you've successfully integrated Covalent web components into your project. Dive deeper into the documentation to fully leverage the power of Covalent in your web applications.
