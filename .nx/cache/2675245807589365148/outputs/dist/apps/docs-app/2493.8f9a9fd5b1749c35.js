'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [2493],
  {
    52493: (g, a, i) => {
      i.r(a), i.d(a, { conf: () => x, language: () => k });
      var l = i(53619),
        m = Object.defineProperty,
        c = Object.getOwnPropertyDescriptor,
        u = Object.getOwnPropertyNames,
        b = Object.prototype.hasOwnProperty,
        s = (t, e, r, p) => {
          if ((e && 'object' == typeof e) || 'function' == typeof e)
            for (let n of u(e))
              !b.call(t, n) &&
                n !== r &&
                m(t, n, {
                  get: () => e[n],
                  enumerable: !(p = c(e, n)) || p.enumerable,
                });
          return t;
        },
        o = {};
      s(o, l, 'default');
      var d = [
          'area',
          'base',
          'br',
          'col',
          'embed',
          'hr',
          'img',
          'input',
          'keygen',
          'link',
          'menuitem',
          'meta',
          'param',
          'source',
          'track',
          'wbr',
        ],
        x = {
          wordPattern:
            /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
          comments: { blockComment: ['\x3c!--', '--\x3e'] },
          brackets: [
            ['\x3c!--', '--\x3e'],
            ['<', '>'],
            ['{', '}'],
            ['(', ')'],
          ],
          autoClosingPairs: [
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '"', close: '"' },
            { open: "'", close: "'" },
          ],
          surroundingPairs: [
            { open: '"', close: '"' },
            { open: "'", close: "'" },
            { open: '{', close: '}' },
            { open: '[', close: ']' },
            { open: '(', close: ')' },
            { open: '<', close: '>' },
          ],
          onEnterRules: [
            {
              beforeText: new RegExp(
                `<(?!(?:${d.join(
                  '|'
                )}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,
                'i'
              ),
              afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
              action: { indentAction: o.languages.IndentAction.IndentOutdent },
            },
            {
              beforeText: new RegExp(
                `<(?!(?:${d.join('|')}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,
                'i'
              ),
              action: { indentAction: o.languages.IndentAction.Indent },
            },
          ],
          folding: {
            markers: {
              start: new RegExp('^\\s*\x3c!--\\s*#region\\b.*--\x3e'),
              end: new RegExp('^\\s*\x3c!--\\s*#endregion\\b.*--\x3e'),
            },
          },
        },
        k = {
          defaultToken: '',
          tokenPostfix: '.html',
          ignoreCase: !0,
          tokenizer: {
            root: [
              [/<!DOCTYPE/, 'metatag', '@doctype'],
              [/<!--/, 'comment', '@comment'],
              [
                /(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,
                ['delimiter', 'tag', '', 'delimiter'],
              ],
              [/(<)(script)/, ['delimiter', { token: 'tag', next: '@script' }]],
              [/(<)(style)/, ['delimiter', { token: 'tag', next: '@style' }]],
              [
                /(<)((?:[\w\-]+:)?[\w\-]+)/,
                ['delimiter', { token: 'tag', next: '@otherTag' }],
              ],
              [
                /(<\/)((?:[\w\-]+:)?[\w\-]+)/,
                ['delimiter', { token: 'tag', next: '@otherTag' }],
              ],
              [/</, 'delimiter'],
              [/[^<]+/],
            ],
            doctype: [
              [/[^>]+/, 'metatag.content'],
              [/>/, 'metatag', '@pop'],
            ],
            comment: [
              [/-->/, 'comment', '@pop'],
              [/[^-]+/, 'comment.content'],
              [/./, 'comment.content'],
            ],
            otherTag: [
              [/\/?>/, 'delimiter', '@pop'],
              [/"([^"]*)"/, 'attribute.value'],
              [/'([^']*)'/, 'attribute.value'],
              [/[\w\-]+/, 'attribute.name'],
              [/=/, 'delimiter'],
              [/[ \t\r\n]+/],
            ],
            script: [
              [/type/, 'attribute.name', '@scriptAfterType'],
              [/"([^"]*)"/, 'attribute.value'],
              [/'([^']*)'/, 'attribute.value'],
              [/[\w\-]+/, 'attribute.name'],
              [/=/, 'delimiter'],
              [
                />/,
                {
                  token: 'delimiter',
                  next: '@scriptEmbedded',
                  nextEmbedded: 'text/javascript',
                },
              ],
              [/[ \t\r\n]+/],
              [
                /(<\/)(script\s*)(>)/,
                ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }],
              ],
            ],
            scriptAfterType: [
              [/=/, 'delimiter', '@scriptAfterTypeEquals'],
              [
                />/,
                {
                  token: 'delimiter',
                  next: '@scriptEmbedded',
                  nextEmbedded: 'text/javascript',
                },
              ],
              [/[ \t\r\n]+/],
              [/<\/script\s*>/, { token: '@rematch', next: '@pop' }],
            ],
            scriptAfterTypeEquals: [
              [
                /"module"/,
                {
                  token: 'attribute.value',
                  switchTo: '@scriptWithCustomType.text/javascript',
                },
              ],
              [
                /'module'/,
                {
                  token: 'attribute.value',
                  switchTo: '@scriptWithCustomType.text/javascript',
                },
              ],
              [
                /"([^"]*)"/,
                {
                  token: 'attribute.value',
                  switchTo: '@scriptWithCustomType.$1',
                },
              ],
              [
                /'([^']*)'/,
                {
                  token: 'attribute.value',
                  switchTo: '@scriptWithCustomType.$1',
                },
              ],
              [
                />/,
                {
                  token: 'delimiter',
                  next: '@scriptEmbedded',
                  nextEmbedded: 'text/javascript',
                },
              ],
              [/[ \t\r\n]+/],
              [/<\/script\s*>/, { token: '@rematch', next: '@pop' }],
            ],
            scriptWithCustomType: [
              [
                />/,
                {
                  token: 'delimiter',
                  next: '@scriptEmbedded.$S2',
                  nextEmbedded: '$S2',
                },
              ],
              [/"([^"]*)"/, 'attribute.value'],
              [/'([^']*)'/, 'attribute.value'],
              [/[\w\-]+/, 'attribute.name'],
              [/=/, 'delimiter'],
              [/[ \t\r\n]+/],
              [/<\/script\s*>/, { token: '@rematch', next: '@pop' }],
            ],
            scriptEmbedded: [
              [
                /<\/script/,
                { token: '@rematch', next: '@pop', nextEmbedded: '@pop' },
              ],
              [/[^<]+/, ''],
            ],
            style: [
              [/type/, 'attribute.name', '@styleAfterType'],
              [/"([^"]*)"/, 'attribute.value'],
              [/'([^']*)'/, 'attribute.value'],
              [/[\w\-]+/, 'attribute.name'],
              [/=/, 'delimiter'],
              [
                />/,
                {
                  token: 'delimiter',
                  next: '@styleEmbedded',
                  nextEmbedded: 'text/css',
                },
              ],
              [/[ \t\r\n]+/],
              [
                /(<\/)(style\s*)(>)/,
                ['delimiter', 'tag', { token: 'delimiter', next: '@pop' }],
              ],
            ],
            styleAfterType: [
              [/=/, 'delimiter', '@styleAfterTypeEquals'],
              [
                />/,
                {
                  token: 'delimiter',
                  next: '@styleEmbedded',
                  nextEmbedded: 'text/css',
                },
              ],
              [/[ \t\r\n]+/],
              [/<\/style\s*>/, { token: '@rematch', next: '@pop' }],
            ],
            styleAfterTypeEquals: [
              [
                /"([^"]*)"/,
                {
                  token: 'attribute.value',
                  switchTo: '@styleWithCustomType.$1',
                },
              ],
              [
                /'([^']*)'/,
                {
                  token: 'attribute.value',
                  switchTo: '@styleWithCustomType.$1',
                },
              ],
              [
                />/,
                {
                  token: 'delimiter',
                  next: '@styleEmbedded',
                  nextEmbedded: 'text/css',
                },
              ],
              [/[ \t\r\n]+/],
              [/<\/style\s*>/, { token: '@rematch', next: '@pop' }],
            ],
            styleWithCustomType: [
              [
                />/,
                {
                  token: 'delimiter',
                  next: '@styleEmbedded.$S2',
                  nextEmbedded: '$S2',
                },
              ],
              [/"([^"]*)"/, 'attribute.value'],
              [/'([^']*)'/, 'attribute.value'],
              [/[\w\-]+/, 'attribute.name'],
              [/=/, 'delimiter'],
              [/[ \t\r\n]+/],
              [/<\/style\s*>/, { token: '@rematch', next: '@pop' }],
            ],
            styleEmbedded: [
              [
                /<\/style/,
                { token: '@rematch', next: '@pop', nextEmbedded: '@pop' },
              ],
              [/[^<]+/, ''],
            ],
          },
        };
    },
  },
]);
