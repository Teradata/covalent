# Covalent Email Templates

Covalent email-templates is a library for managing and using predefined email templates and styles. It includes MJML templates and CSS styles, along with utility functions for converting MJML to HTML and injecting styles.

## Getting Started

### Installation

Add @covalent/email-templates to your project using your preferred package manager:

```bash
# Using npm
npm install --save @covalent/email-templates

# Using yarn
yarn add @covalent/email-templates
```

### Usage

Import and use the library to access email templates, CSS styles, and MJML styles:

```typescript
import { getEmailTemplates, EmailTemplate, getCssStyles, getMjmlStyles, getHtmlTemplate } from '@covalent/email-templates';

// Retrieve a list of predefined email templates
const emailTemplates: EmailTemplate[] = getEmailTemplates();

// Access CSS styles as a string
const cssStyles: string = getCssStyles();

// Access MJML styles as a string
const mjmlStyles: string = getMjmlStyles();

// Convert MJML content to HTML
const htmlTemplate: string = getHtmlTemplate(emailTemplates[0].content);
```

`EmailTemplate` **Interface**
The EmailTemplate interface defines the structure of an email template:

- `category`: The category of the email template (e.g., 'marketing' or 'customer')
- `content`: The MJML content of the email template
- `name`: The name of the email template

### Building the Library

To build the library and generate publishable assets using webpack, run:

```bash
nx build email-templates
```

### Linting

Ensure code quality by running linting:

For TypeScript and JavaScript linting, use ESLint:

```bash
nx lint email-templates
```

For SCSS linting, use Stylelint:

```bash
nx scsslint email-templates
```

`
