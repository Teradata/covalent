/**
 * Strips the first :root { ... } block from a given CSS string.
 *
 * @param css - The CSS file content as a string.
 * @returns The CSS content without the first :root { ... } block.
 */
export const stripFirstRootSection = (css: string): string => {
  // Regular expression to match the first :root { ... } block
  const rootSectionRegex = /:root\s*\{[^}]*\}/;

  // Use replace to strip the first :root section found which contains all the covalent tokens
  return css.replace(rootSectionRegex, '');
};

/**
 * Inject predefined MJML and CSS styles into the provided MJML template.
 *
 * @param {string} mjml - The MJML template string.
 * @param {string} cssStyles - The CSS styles to be injected into the MJML template.
 * @param {string} mjmlStyles - The MJML attributes or styles to be injected into the MJML template.
 * @returns {string} - The MJML template with injected styles.
 */
export const injectPredefinedStyles = (
  mjml: string,
  cssStyles: string,
  mjmlStyles: string
) => {
  // Check if the MJML has an <mj-head> tag
  const headTagRegex = /<mj-head>([\s\S]*?)<\/mj-head>/;
  const headTagMatch = mjml.match(headTagRegex);
  let mjmlWithStyle = mjml;

  if (headTagMatch) {
    // If <mj-head> exists, insert the <mj-style> and <mj-attributes> tags inside it
    const headContent = headTagMatch[1];
    const newHeadContent = `${headContent}
        ${mjmlStyles}
        <mj-style inline="inline">
          ${cssStyles}
        </mj-style>`;
    mjmlWithStyle = mjml.replace(
      headTagRegex,
      `<mj-head>${newHeadContent}</mj-head>`
    );
  } else {
    // If <mj-head> does not exist, create it with both <mj-attributes> and <mj-style> tags
    const headTagInsert = `<mj-head>
        ${mjmlStyles}
        <mj-style inline="inline">
          ${cssStyles}
        </mj-style>
      </mj-head>`;
    const headTagPosition = /<mj-body>/; // Insert before <mj-body>
    if (headTagPosition.test(mjml)) {
      mjmlWithStyle = mjml.replace(
        headTagPosition,
        `${headTagInsert}\n<mj-body>`
      );
    } else {
      // If no <mj-body>, just add it at the end
      mjmlWithStyle = `${mjml}\n${headTagInsert}`;
    }
  }

  return mjmlWithStyle;
};
