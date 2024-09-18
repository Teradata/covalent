import mjml2html from 'mjml-browser';

/**
 * Converts an MJML string into its corresponding HTML.
 *
 * @param {string} mjml - The MJML string to be converted.
 * @returns {string} - The resulting HTML string after conversion.
 */
export const convertMjmlToHtml = (mjml: string): string => {
  // Destructuring the HTML output from the result of mjml2html conversion
  const { html } = mjml2html(mjml);

  // Returning the HTML string
  return html;
};
