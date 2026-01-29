import * as tokens from '@covalent/tokens';

export const covalentThemeName = 'tdaa-lite';

export const covalentThemeConf = {
  base: 'vs',
  inherit: true,
  rules: [
    { token: '', foreground: '212121', background: 'f5f5f5' },
    { token: 'invalid', foreground: 'b71c1c' },
    { token: 'keyword', foreground: '3b78e7' },
    { token: 'keyword.json', foreground: 'ec407a', fontStyle: 'bold italic' },
    { token: 'comment', foreground: '0d904f' },
    { token: 'string.sql', foreground: '0d904f' },
    { token: 'number', foreground: 'E74C3C' },

    { token: 'key', foreground: '863B00' },
    { token: 'string.key.json', foreground: '0d904f' },
    { token: 'string.value.json', foreground: '0d904f' },
    { token: 'predefined', foreground: 'ec407a' },
    { token: 'predefined.sql', foreground: 'ec407a' },

    { token: 'delimiter', foreground: '000000' },
    { token: 'delimiter.html', foreground: '383838' },
    { token: 'delimiter.xml', foreground: '3b78e7' },

    { token: 'tag', foreground: '3b78e7' },
    { token: 'tag.id.jade', foreground: '4F76AC' },
    { token: 'tag.class.jade', foreground: '4F76AC' },
    { token: 'meta.scss', foreground: '800000' },
    { token: 'metatag', foreground: 'e00000' },
    { token: 'metatag.content.html', foreground: 'FF0000' },
    { token: 'metatag.html', foreground: '808080' },
    { token: 'metatag.xml', foreground: '808080' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'attribute.name', foreground: '9c27b0' },
    { token: 'attribute.value', foreground: '0451A5' },
    { token: 'attribute.value.number', foreground: '09885A' },
    { token: 'attribute.value.unit', foreground: '09885A' },
    { token: 'attribute.value.html', foreground: '0000FF' },
    { token: 'attribute.value.xml', foreground: '0d904f' },

    { token: 'arbitration-variable', foreground: '006D90' },
    { token: 'arbitration-variable.invalid', foreground: 'b71c1c' },

    { token: 'operator.scss', foreground: '666666' },
    { token: 'operator', foreground: '778899' },
  ],
  colors: {
    comment: '388e3c',
    'editor.foreground': 'ff0000',
    'editor.background': '#f5f5f5',
    'editorLineNumber.activeForeground': '#707070',
    'editorLineNumber.foreground': '#b7b7b7',
    'editor.lineHighlightBackground': '#ebebeb',
    'inputValidation.errorBackground': '#b71c1c',
    'inputValidation.errorBorder': 'rgba(229, 115, 115, 0.1)',
  },
};

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
        tokens[`CvTheme${theme}ColorsOnSurfaceVariant`],
      'editorLineNumber.foreground':
        tokens[`CvTheme${theme}ColorsOnSurfaceVariant`],
      'editor.lineHighlightBackground':
        tokens[`CvTheme${theme}ColorsSurfaceContainerLow`],
      'inputValidation.errorBackground': tokens[`Cv${theme}Negative`],
      'inputValidation.errorBorder':
        tokens[`CvTheme${theme}PalettesNegative95`],
    },
  };
};

// Any changes to these themes should also be reflected in the components/code-editor theme.
export const cvEditorDarkTheme = getTheme('Dark');

export const cvEditorLightTheme = getTheme('Light');
