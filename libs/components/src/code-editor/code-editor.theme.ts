import * as tokens from '../../../../dist/libs/tokens';

const getTheme = (theme: 'Light' | 'Dark') => {
  return {
    base: theme === 'Light' ? 'vs' : 'vs-dark',
    inherit: true,
    rules: [
      {
        token: '',
        foreground: tokens[`Cv${theme}CodeSnippetColor`],
        background: tokens[`Cv${theme}Surface`],
      },
      {
        token: 'arbitration-variable',
        foreground: tokens[`Cv${theme}CodeSnippetVariable`],
      },
      {
        token: 'arbitration-variable.invalid',
        foreground: tokens[`Cv${theme}Negative`],
      },
      {
        token: 'attribute.name',
        foreground: tokens[`Cv${theme}CodeSnippetVariable`],
      },
      {
        token: 'attribute.value',
        foreground: tokens[`Cv${theme}CodeSnippetVariable`],
      },
      {
        token: 'attribute.value.number',
        foreground: tokens[`Cv${theme}CodeSnippetVariable`],
      },
      {
        token: 'attribute.value.unit',
        foreground: tokens[`Cv${theme}CodeSnippetVariable`],
      },
      {
        token: 'attribute.value.html',
        foreground: tokens[`Cv${theme}CodeSnippetString`],
      },
      {
        token: 'attribute.value.xml',
        foreground: tokens[`Cv${theme}CodeSnippetLiteral`],
      },
      {
        token: 'builtins',
        foreground: tokens[`Cv${theme}CodeSnippetClass`],
      },
      {
        token: 'class',
        foreground: tokens[`Cv${theme}CodeSnippetClass`],
      },
      {
        token: 'comment',
        foreground: tokens[`Cv${theme}CodeSnippetComment`],
        fontStyle: 'italic',
      },
      {
        token: 'constant',
        foreground: tokens[`Cv${theme}CodeSnippetLiteral`],
      },
      {
        token: 'delimiter',
        foreground: tokens[`CvTheme${theme}ColorsOnSurface`],
      },
      {
        token: 'delimiter.html',
        foreground: tokens[`Cv${theme}CodeSnippetSelector`],
      },
      {
        token: 'delimiter.xml',
        foreground: tokens[`Cv${theme}CodeSnippetSelector`],
      },
      {
        token: 'doctag',
        foreground: tokens[`Cv${theme}CodeSnippetKeyword`],
      },
      {
        token: 'emphasis',
        fontStyle: 'italic',
      },
      {
        token: 'formula',
        foreground: tokens[`Cv${theme}CodeSnippetKeyword`],
      },
      {
        token: 'function',
        foreground: tokens[`Cv${theme}CodeSnippetTitle`],
      },
      {
        token: 'invalid',
        foreground: tokens[`Cv${theme}Negative`],
      },
      { token: 'key', foreground: tokens[`Cv${theme}CodeSnippetString`] },
      {
        token: 'keyword',
        foreground: tokens[`Cv${theme}CodeSnippetKeyword`],
      },
      {
        token: 'keyword.json',
        foreground: tokens[`Cv${theme}CodeSnippetTitle`],
        fontStyle: 'bold italic',
      },
      {
        token: 'link',
        foreground: tokens[`Cv${theme}CodeSnippetTitle`],
        fontStyle: 'underline',
      },
      {
        token: 'literal',
        foreground: tokens[`Cv${theme}CodeSnippetLiteral`],
      },
      {
        token: 'meta',
        foreground: tokens[`Cv${theme}CodeSnippetTitle`],
      },
      {
        token: 'number',
        foreground: tokens[`Cv${theme}CodeSnippetVariable`],
      },
      {
        token: 'operator',
        foreground: tokens[`Cv${theme}CodeSnippetLiteral`],
      },
      { token: 'predefined', foreground: tokens[`Cv${theme}CodeSnippetTitle`] },
      {
        token: 'predefined.sql',
        foreground: tokens[`Cv${theme}CodeSnippetTitle`],
      },
      {
        token: 'predefined.python',
        foreground: tokens[`Cv${theme}CodeSnippetClass`],
      },
      {
        token: 'punctuation',
        foreground: tokens[`Cv${theme}CodeSnippetColor`],
      },
      {
        token: 'string',
        foreground: tokens[`Cv${theme}CodeSnippetString`],
      },
      {
        token: 'string.sql',
        foreground: tokens[`Cv${theme}CodeSnippetString`],
      },
      {
        token: 'string.key.json',
        foreground: tokens[`Cv${theme}CodeSnippetString`],
      },
      {
        token: 'string.value.json',
        foreground: tokens[`Cv${theme}CodeSnippetString`],
      },
      {
        token: 'strong',
        fontStyle: 'bold',
      },
      {
        token: 'tag',
        foreground: tokens[`Cv${theme}CodeSnippetSelector`],
      },
      {
        token: 'tag.id.jade',
        foreground: tokens[`Cv${theme}CodeSnippetClass`],
      },
      {
        token: 'tag.class.jade',
        foreground: tokens[`Cv${theme}CodeSnippetClass`],
      },
      {
        token: 'type',
        foreground: tokens[`Cv${theme}CodeSnippetClass`],
      },
      {
        token: 'variable',
        foreground: tokens[`Cv${theme}CodeSnippetVariable`],
      },
    ],
    colors: {
      comment: tokens[`Cv${theme}CodeSnippetComment`],
      'editor.background': tokens[`Cv${theme}Surface`],
      'editor.foreground': tokens[`CvTheme${theme}ColorsOnSurface`],
      'editorCursor.foreground': tokens[`Cv${theme}TextSecondaryOnBackground`],
      'editorLineNumber.activeForeground':
        tokens[`CvTheme${theme}ColorsOnSurface74`],
      'editorLineNumber.foreground': tokens[`CvTheme${theme}ColorsOnSurface38`],
      'editor.lineHighlightBackground':
        tokens[`CvTheme${theme}ColorsSurfaceContainerLow`],
      'inputValidation.errorBackground': tokens[`Cv${theme}Negative`],
      'inputValidation.errorBorder':
        tokens[`CvTheme${theme}PalettesNegative95`],
    },
  };
};

// Any changes to these themes should also be reflected in the angular-code-editor theme.
export const cvEditorDarkTheme = getTheme('Dark');

export const cvEditorLightTheme = getTheme('Light');
