import { editor } from 'monaco-editor';
import {
  CvThemeLightColorsOnSurface,
  CvThemeLightColorsOnSurface38,
  CvThemeLightColorsOnSurface74,
  CvThemeLightColorsSurfaceContainerLow,
  CvThemeLightColorsSurfaceContainerLowest,
  CvLightCodeSnippetComment,
  CvLightCodeSnippetKeyword,
  CvLightCodeSnippetLiteral,
  CvLightCodeSnippetVariable,
  CvLightCodeSnippetString,
  CvLightCodeSnippetSelector,
  CvLightCodeSnippetTitle,
  CvLightCodeSnippetClass,
  CvLightNegative,
} from '@covalent/tokens';

export const covalentThemeName = 'cov-light';

export const covalentThemeConf: editor.IStandaloneThemeData = {
  base: 'vs',
  inherit: true,
  rules: [
    {
      token: '',
      foreground: CvThemeLightColorsOnSurface,
      background: CvThemeLightColorsSurfaceContainerLowest,
    },
    { token: 'invalid', foreground: CvLightNegative },
    { token: 'keyword', foreground: CvLightCodeSnippetKeyword },
    {
      token: 'keyword.json',
      foreground: CvLightCodeSnippetTitle,
      fontStyle: 'bold italic',
    },
    { token: 'comment', foreground: CvLightCodeSnippetComment },
    { token: 'string.sql', foreground: CvLightCodeSnippetLiteral },
    { token: 'number', foreground: CvLightCodeSnippetVariable },

    { token: 'variable', foreground: CvLightCodeSnippetVariable },
    { token: 'variable.predefined', foreground: CvLightCodeSnippetVariable },

    { token: 'key', foreground: CvLightCodeSnippetString },
    { token: 'string', foreground: CvLightCodeSnippetString },
    { token: 'string.key.json', foreground: CvLightCodeSnippetString },
    { token: 'string.value.json', foreground: CvLightCodeSnippetString },
    { token: 'predefined', foreground: CvLightCodeSnippetTitle },
    { token: 'predefined.sql', foreground: CvLightCodeSnippetTitle },

    { token: 'delimiter', foreground: CvThemeLightColorsOnSurface },
    { token: 'delimiter.html', foreground: CvLightCodeSnippetSelector },
    { token: 'delimiter.xml', foreground: CvLightCodeSnippetSelector },

    { token: 'tag', foreground: CvLightCodeSnippetSelector },
    { token: 'tag.id.jade', foreground: CvLightCodeSnippetClass },
    { token: 'tag.class.jade', foreground: CvLightCodeSnippetClass },
    { token: 'meta.scss', foreground: '800000' },
    { token: 'metatag', foreground: 'e00000' },
    { token: 'metatag.content.html', foreground: 'FF0000' },
    { token: 'metatag.html', foreground: '808080' },
    { token: 'metatag.xml', foreground: '808080' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'attribute.name', foreground: CvLightCodeSnippetVariable },
    { token: 'attribute.value', foreground: CvLightCodeSnippetVariable },
    { token: 'attribute.value.number', foreground: CvLightCodeSnippetVariable },
    { token: 'attribute.value.unit', foreground: CvLightCodeSnippetVariable },
    { token: 'attribute.value.html', foreground: CvLightCodeSnippetString },
    { token: 'attribute.value.xml', foreground: CvLightCodeSnippetLiteral },

    { token: 'arbitration-variable', foreground: CvLightCodeSnippetVariable },
    { token: 'arbitration-variable.invalid', foreground: CvLightNegative },

    { token: 'operator.scss', foreground: '666666' },
    { token: 'operator', foreground: '778899' },
  ],
  colors: {
    comment: CvLightCodeSnippetComment,
    'editor.foreground': CvThemeLightColorsOnSurface,
    'editor.background': CvThemeLightColorsSurfaceContainerLowest,
    'editorLineNumber.activeForeground': CvThemeLightColorsOnSurface74,
    'editorLineNumber.foreground': CvThemeLightColorsOnSurface38,
    'editor.lineHighlightBackground': CvThemeLightColorsSurfaceContainerLow,
    'inputValidation.errorBackground': CvLightNegative,
    'inputValidation.errorBorder': 'rgba(229, 115, 115, 0.1)',
  },
};
