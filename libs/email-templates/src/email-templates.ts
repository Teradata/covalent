// Import MJML templates and CSS styles as strings
import welcomeLetter from './mjml-templates/customer/welcomeLetter.mjml?raw';
import workshop from './mjml-templates/marketing/workshop.mjml?raw';
import cssStyles from './styles/_generated.css?raw';
import mjmlStyles from './styles/mjmlStyles.mjml?raw';
import { convertMjmlToHtml } from './utils/mjml-utils';
import {
  injectPredefinedStyles,
  stripFirstRootSection,
} from './utils/style-utils';

// Define the structure of an email template
export interface EmailTemplate {
  category: 'marketing' | 'customer';
  content: string; // Content of the email template (MJML)
  name: string; // Name of the email template
}

// Function to get CSS styles as a string
export const getCssStyles = (): string => stripFirstRootSection(cssStyles);

// Function to get a list of email templates
export const getEmailTemplates = (): EmailTemplate[] => [
  {
    category: 'customer',
    content: injectPredefinedStyles(welcomeLetter, getCssStyles(), mjmlStyles), // The MJML content of the email template
    name: 'Welcome letter', // The name of the email template
  },
  {
    category: 'marketing',
    content: injectPredefinedStyles(workshop, getCssStyles(), mjmlStyles), // The MJML content of the email template
    name: 'Workshop', // The name of the email template
  },
];

// Function to get MJML styles as a string
export const getMjmlStyles = (): string => mjmlStyles;

// Function to convert MJML to HTML
export const getHtmlTemplate = (mjml: string): string =>
  convertMjmlToHtml(mjml);
