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
