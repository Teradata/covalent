import { editor } from 'monaco-editor';
import {
  CvThemeDarkColorsOnSurface,
  CvThemeDarkColorsOnSurface38,
  CvThemeDarkColorsOnSurface74,
  CvThemeDarkColorsSurfaceContainerLow,
  CvThemeDarkColorsSurfaceContainerLowest,
  CvDarkCodeSnippetComment,
  CvDarkCodeSnippetKeyword,
  CvDarkCodeSnippetLiteral,
  CvDarkCodeSnippetVariable,
  CvDarkCodeSnippetString,
  CvDarkCodeSnippetSelector,
  CvDarkCodeSnippetTitle,
  CvDarkCodeSnippetClass,
  CvDarkNegative,
} from '@covalent/tokens';

export const covalentDarkThemeName = 'cov-dark';

export const covalentDarkThemeConf: editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      token: '',
      foreground: CvThemeDarkColorsOnSurface,
      background: CvThemeDarkColorsSurfaceContainerLowest,
    },
    { token: 'invalid', foreground: CvDarkNegative },
    { token: 'keyword', foreground: CvDarkCodeSnippetKeyword },
    {
      token: 'keyword.json',
      foreground: CvDarkCodeSnippetTitle,
      fontStyle: 'bold italic',
    },
    { token: 'comment', foreground: CvDarkCodeSnippetComment },
    { token: 'string.sql', foreground: CvDarkCodeSnippetLiteral },
    { token: 'number', foreground: CvDarkCodeSnippetVariable },

    { token: 'variable', foreground: CvDarkCodeSnippetVariable },
    { token: 'variable.predefined', foreground: CvDarkCodeSnippetVariable },

    { token: 'key', foreground: CvDarkCodeSnippetString },
    { token: 'string', foreground: CvDarkCodeSnippetString },
    { token: 'string.key.json', foreground: CvDarkCodeSnippetString },
    { token: 'string.value.json', foreground: CvDarkCodeSnippetString },
    { token: 'predefined', foreground: CvDarkCodeSnippetTitle },
    { token: 'predefined.sql', foreground: CvDarkCodeSnippetTitle },

    { token: 'delimiter', foreground: CvThemeDarkColorsOnSurface },
    { token: 'delimiter.html', foreground: CvDarkCodeSnippetSelector },
    { token: 'delimiter.xml', foreground: CvDarkCodeSnippetSelector },

    { token: 'tag', foreground: CvDarkCodeSnippetSelector },
    { token: 'tag.id.jade', foreground: CvDarkCodeSnippetClass },
    { token: 'tag.class.jade', foreground: CvDarkCodeSnippetClass },
    { token: 'meta.scss', foreground: '800000' },
    { token: 'metatag', foreground: 'e00000' },
    { token: 'metatag.content.html', foreground: 'FF0000' },
    { token: 'metatag.html', foreground: '808080' },
    { token: 'metatag.xml', foreground: '808080' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'attribute.name', foreground: CvDarkCodeSnippetVariable },
    { token: 'attribute.value', foreground: CvDarkCodeSnippetVariable },
    { token: 'attribute.value.number', foreground: CvDarkCodeSnippetVariable },
    { token: 'attribute.value.unit', foreground: CvDarkCodeSnippetVariable },
    { token: 'attribute.value.html', foreground: CvDarkCodeSnippetString },
    { token: 'attribute.value.xml', foreground: CvDarkCodeSnippetLiteral },

    { token: 'arbitration-variable', foreground: CvDarkCodeSnippetVariable },
    { token: 'arbitration-variable.invalid', foreground: CvDarkNegative },

    { token: 'operator.scss', foreground: '666666' },
    { token: 'operator', foreground: '778899' },
  ],
  colors: {
    comment: CvDarkCodeSnippetComment,
    'editor.foreground': CvThemeDarkColorsOnSurface,
    'editor.background': CvThemeDarkColorsSurfaceContainerLowest,
    'editorLineNumber.activeForeground': CvThemeDarkColorsOnSurface74,
    'editorLineNumber.foreground': CvThemeDarkColorsOnSurface38,
    'editor.lineHighDarkBackground': CvThemeDarkColorsSurfaceContainerLow,
    'inputValidation.errorBackground': CvDarkNegative,
    'inputValidation.errorBorder': 'rgba(229, 115, 115, 0.1)',
  },
};
