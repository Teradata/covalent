'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [1420],
  {
    10503: (se, U, $) => {
      $.d(U, { B: () => we });
      var C = $(19212),
        H = $(56223);
      let P = {
        async: !1,
        baseUrl: null,
        breaks: !1,
        extensions: null,
        gfm: !0,
        headerIds: !0,
        headerPrefix: '',
        highlight: null,
        hooks: null,
        langPrefix: 'language-',
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1,
      };
      const F = /[&<>"']/,
        V = new RegExp(F.source, 'g'),
        B = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        le = new RegExp(B.source, 'g'),
        ae = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        },
        G = (l) => ae[l];
      function M(l, n) {
        if (n) {
          if (F.test(l)) return l.replace(V, G);
        } else if (B.test(l)) return l.replace(le, G);
        return l;
      }
      const ce = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
      function X(l) {
        return l.replace(ce, (n, t) =>
          'colon' === (t = t.toLowerCase())
            ? ':'
            : '#' === t.charAt(0)
            ? 'x' === t.charAt(1)
              ? String.fromCharCode(parseInt(t.substring(2), 16))
              : String.fromCharCode(+t.substring(1))
            : ''
        );
      }
      const he = /(^|[^\[])\^/g;
      function b(l, n) {
        (l = 'string' == typeof l ? l : l.source), (n = n || '');
        const t = {
          replace: (e, r) => (
            (r = (r = r.source || r).replace(he, '$1')),
            (l = l.replace(e, r)),
            t
          ),
          getRegex: () => new RegExp(l, n),
        };
        return t;
      }
      const de = /[^\w:]/g,
        ge = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
      function J(l, n, t) {
        if (l) {
          let e;
          try {
            e = decodeURIComponent(X(t)).replace(de, '').toLowerCase();
          } catch {
            return null;
          }
          if (
            0 === e.indexOf('javascript:') ||
            0 === e.indexOf('vbscript:') ||
            0 === e.indexOf('data:')
          )
            return null;
        }
        n &&
          !ge.test(t) &&
          (t = (function me(l, n) {
            L[' ' + l] || (L[' ' + l] = pe.test(l) ? l + '/' : q(l, '/', !0));
            const t = -1 === (l = L[' ' + l]).indexOf(':');
            return '//' === n.substring(0, 2)
              ? t
                ? n
                : l.replace(ue, '$1') + n
              : '/' === n.charAt(0)
              ? t
                ? n
                : l.replace(fe, '$1') + n
              : l + n;
          })(n, t));
        try {
          t = encodeURI(t).replace(/%25/g, '%');
        } catch {
          return null;
        }
        return t;
      }
      const L = {},
        pe = /^[^:]+:\/*[^/]*$/,
        ue = /^([^:]+:)[\s\S]*$/,
        fe = /^([^:]+:\/*[^/]*)[\s\S]*$/,
        Z = { exec: function () {} };
      function W(l, n) {
        const e = l
          .replace(/\|/g, (i, o, s) => {
            let c = !1,
              f = o;
            for (; --f >= 0 && '\\' === s[f]; ) c = !c;
            return c ? '|' : ' |';
          })
          .split(/ \|/);
        let r = 0;
        if (
          (e[0].trim() || e.shift(),
          e.length > 0 && !e[e.length - 1].trim() && e.pop(),
          e.length > n)
        )
          e.splice(n);
        else for (; e.length < n; ) e.push('');
        for (; r < e.length; r++) e[r] = e[r].trim().replace(/\\\|/g, '|');
        return e;
      }
      function q(l, n, t) {
        const e = l.length;
        if (0 === e) return '';
        let r = 0;
        for (; r < e; ) {
          const i = l.charAt(e - r - 1);
          if (i !== n || t) {
            if (i === n || !t) break;
            r++;
          } else r++;
        }
        return l.slice(0, e - r);
      }
      function Y(l, n) {
        if (n < 1) return '';
        let t = '';
        for (; n > 1; ) 1 & n && (t += l), (n >>= 1), (l += l);
        return t + l;
      }
      function K(l, n, t, e) {
        const r = n.href,
          i = n.title ? M(n.title) : null,
          o = l[1].replace(/\\([\[\]])/g, '$1');
        if ('!' !== l[0].charAt(0)) {
          e.state.inLink = !0;
          const s = {
            type: 'link',
            raw: t,
            href: r,
            title: i,
            text: o,
            tokens: e.inlineTokens(o),
          };
          return (e.state.inLink = !1), s;
        }
        return { type: 'image', raw: t, href: r, title: i, text: M(o) };
      }
      class Q {
        constructor(n) {
          this.options = n || P;
        }
        space(n) {
          const t = this.rules.block.newline.exec(n);
          if (t && t[0].length > 0) return { type: 'space', raw: t[0] };
        }
        code(n) {
          const t = this.rules.block.code.exec(n);
          if (t) {
            const e = t[0].replace(/^ {1,4}/gm, '');
            return {
              type: 'code',
              raw: t[0],
              codeBlockStyle: 'indented',
              text: this.options.pedantic ? e : q(e, '\n'),
            };
          }
        }
        fences(n) {
          const t = this.rules.block.fences.exec(n);
          if (t) {
            const e = t[0],
              r = (function xe(l, n) {
                const t = l.match(/^(\s+)(?:```)/);
                if (null === t) return n;
                const e = t[1];
                return n
                  .split('\n')
                  .map((r) => {
                    const i = r.match(/^\s+/);
                    if (null === i) return r;
                    const [o] = i;
                    return o.length >= e.length ? r.slice(e.length) : r;
                  })
                  .join('\n');
              })(e, t[3] || '');
            return {
              type: 'code',
              raw: e,
              lang: t[2]
                ? t[2].trim().replace(this.rules.inline._escapes, '$1')
                : t[2],
              text: r,
            };
          }
        }
        heading(n) {
          const t = this.rules.block.heading.exec(n);
          if (t) {
            let e = t[2].trim();
            if (/#$/.test(e)) {
              const r = q(e, '#');
              (this.options.pedantic || !r || / $/.test(r)) && (e = r.trim());
            }
            return {
              type: 'heading',
              raw: t[0],
              depth: t[1].length,
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        hr(n) {
          const t = this.rules.block.hr.exec(n);
          if (t) return { type: 'hr', raw: t[0] };
        }
        blockquote(n) {
          const t = this.rules.block.blockquote.exec(n);
          if (t) {
            const e = t[0].replace(/^ *>[ \t]?/gm, ''),
              r = this.lexer.state.top;
            this.lexer.state.top = !0;
            const i = this.lexer.blockTokens(e);
            return (
              (this.lexer.state.top = r),
              { type: 'blockquote', raw: t[0], tokens: i, text: e }
            );
          }
        }
        list(n) {
          let t = this.rules.block.list.exec(n);
          if (t) {
            let e,
              r,
              i,
              o,
              s,
              c,
              f,
              p,
              u,
              m,
              h,
              z,
              w = t[1].trim();
            const T = w.length > 1,
              k = {
                type: 'list',
                raw: '',
                ordered: T,
                start: T ? +w.slice(0, -1) : '',
                loose: !1,
                items: [],
              };
            (w = T ? `\\d{1,9}\\${w.slice(-1)}` : `\\${w}`),
              this.options.pedantic && (w = T ? w : '[*+-]');
            const _ = new RegExp(`^( {0,3}${w})((?:[\t ][^\\n]*)?(?:\\n|$))`);
            for (
              ;
              n && ((z = !1), (t = _.exec(n)) && !this.rules.block.hr.test(n));

            ) {
              if (
                ((e = t[0]),
                (n = n.substring(e.length)),
                (p = t[2]
                  .split('\n', 1)[0]
                  .replace(/^\t+/, (v) => ' '.repeat(3 * v.length))),
                (u = n.split('\n', 1)[0]),
                this.options.pedantic
                  ? ((o = 2), (h = p.trimLeft()))
                  : ((o = t[2].search(/[^ ]/)),
                    (o = o > 4 ? 1 : o),
                    (h = p.slice(o)),
                    (o += t[1].length)),
                (c = !1),
                !p &&
                  /^ *$/.test(u) &&
                  ((e += u + '\n'), (n = n.substring(u.length + 1)), (z = !0)),
                !z)
              ) {
                const v = new RegExp(
                    `^ {0,${Math.min(
                      3,
                      o - 1
                    )}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`
                  ),
                  y = new RegExp(
                    `^ {0,${Math.min(
                      3,
                      o - 1
                    )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
                  ),
                  O = new RegExp(`^ {0,${Math.min(3, o - 1)}}(?:\`\`\`|~~~)`),
                  I = new RegExp(`^ {0,${Math.min(3, o - 1)}}#`);
                for (
                  ;
                  n &&
                  ((m = n.split('\n', 1)[0]),
                  (u = m),
                  this.options.pedantic &&
                    (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
                  !(O.test(u) || I.test(u) || v.test(u) || y.test(n)));

                ) {
                  if (u.search(/[^ ]/) >= o || !u.trim())
                    h += '\n' + u.slice(o);
                  else {
                    if (
                      c ||
                      p.search(/[^ ]/) >= 4 ||
                      O.test(p) ||
                      I.test(p) ||
                      y.test(p)
                    )
                      break;
                    h += '\n' + u;
                  }
                  !c && !u.trim() && (c = !0),
                    (e += m + '\n'),
                    (n = n.substring(m.length + 1)),
                    (p = u.slice(o));
                }
              }
              k.loose || (f ? (k.loose = !0) : /\n *\n *$/.test(e) && (f = !0)),
                this.options.gfm &&
                  ((r = /^\[[ xX]\] /.exec(h)),
                  r &&
                    ((i = '[ ] ' !== r[0]),
                    (h = h.replace(/^\[[ xX]\] +/, '')))),
                k.items.push({
                  type: 'list_item',
                  raw: e,
                  task: !!r,
                  checked: i,
                  loose: !1,
                  text: h,
                }),
                (k.raw += e);
            }
            (k.items[k.items.length - 1].raw = e.trimRight()),
              (k.items[k.items.length - 1].text = h.trimRight()),
              (k.raw = k.raw.trimRight());
            const R = k.items.length;
            for (s = 0; s < R; s++)
              if (
                ((this.lexer.state.top = !1),
                (k.items[s].tokens = this.lexer.blockTokens(
                  k.items[s].text,
                  []
                )),
                !k.loose)
              ) {
                const v = k.items[s].tokens.filter((O) => 'space' === O.type),
                  y = v.length > 0 && v.some((O) => /\n.*\n/.test(O.raw));
                k.loose = y;
              }
            if (k.loose) for (s = 0; s < R; s++) k.items[s].loose = !0;
            return k;
          }
        }
        html(n) {
          const t = this.rules.block.html.exec(n);
          if (t) {
            const e = {
              type: 'html',
              raw: t[0],
              pre:
                !this.options.sanitizer &&
                ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
              text: t[0],
            };
            if (this.options.sanitize) {
              const r = this.options.sanitizer
                ? this.options.sanitizer(t[0])
                : M(t[0]);
              (e.type = 'paragraph'),
                (e.text = r),
                (e.tokens = this.lexer.inline(r));
            }
            return e;
          }
        }
        def(n) {
          const t = this.rules.block.def.exec(n);
          if (t) {
            const e = t[1].toLowerCase().replace(/\s+/g, ' '),
              r = t[2]
                ? t[2]
                    .replace(/^<(.*)>$/, '$1')
                    .replace(this.rules.inline._escapes, '$1')
                : '',
              i = t[3]
                ? t[3]
                    .substring(1, t[3].length - 1)
                    .replace(this.rules.inline._escapes, '$1')
                : t[3];
            return { type: 'def', tag: e, raw: t[0], href: r, title: i };
          }
        }
        table(n) {
          const t = this.rules.block.table.exec(n);
          if (t) {
            const e = {
              type: 'table',
              header: W(t[1]).map((r) => ({ text: r })),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              rows:
                t[3] && t[3].trim()
                  ? t[3].replace(/\n[ \t]*$/, '').split('\n')
                  : [],
            };
            if (e.header.length === e.align.length) {
              e.raw = t[0];
              let i,
                o,
                s,
                c,
                r = e.align.length;
              for (i = 0; i < r; i++)
                e.align[i] = /^ *-+: *$/.test(e.align[i])
                  ? 'right'
                  : /^ *:-+: *$/.test(e.align[i])
                  ? 'center'
                  : /^ *:-+ *$/.test(e.align[i])
                  ? 'left'
                  : null;
              for (r = e.rows.length, i = 0; i < r; i++)
                e.rows[i] = W(e.rows[i], e.header.length).map((f) => ({
                  text: f,
                }));
              for (r = e.header.length, o = 0; o < r; o++)
                e.header[o].tokens = this.lexer.inline(e.header[o].text);
              for (r = e.rows.length, o = 0; o < r; o++)
                for (c = e.rows[o], s = 0; s < c.length; s++)
                  c[s].tokens = this.lexer.inline(c[s].text);
              return e;
            }
          }
        }
        lheading(n) {
          const t = this.rules.block.lheading.exec(n);
          if (t)
            return {
              type: 'heading',
              raw: t[0],
              depth: '=' === t[2].charAt(0) ? 1 : 2,
              text: t[1],
              tokens: this.lexer.inline(t[1]),
            };
        }
        paragraph(n) {
          const t = this.rules.block.paragraph.exec(n);
          if (t) {
            const e =
              '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
              type: 'paragraph',
              raw: t[0],
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        text(n) {
          const t = this.rules.block.text.exec(n);
          if (t)
            return {
              type: 'text',
              raw: t[0],
              text: t[0],
              tokens: this.lexer.inline(t[0]),
            };
        }
        escape(n) {
          const t = this.rules.inline.escape.exec(n);
          if (t) return { type: 'escape', raw: t[0], text: M(t[1]) };
        }
        tag(n) {
          const t = this.rules.inline.tag.exec(n);
          if (t)
            return (
              !this.lexer.state.inLink && /^<a /i.test(t[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  /^<\/a>/i.test(t[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: this.options.sanitize ? 'text' : 'html',
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(t[0])
                    : M(t[0])
                  : t[0],
              }
            );
        }
        link(n) {
          const t = this.rules.inline.link.exec(n);
          if (t) {
            const e = t[2].trim();
            if (!this.options.pedantic && /^</.test(e)) {
              if (!/>$/.test(e)) return;
              const o = q(e.slice(0, -1), '\\');
              if ((e.length - o.length) % 2 == 0) return;
            } else {
              const o = (function be(l, n) {
                if (-1 === l.indexOf(n[1])) return -1;
                const t = l.length;
                let e = 0,
                  r = 0;
                for (; r < t; r++)
                  if ('\\' === l[r]) r++;
                  else if (l[r] === n[0]) e++;
                  else if (l[r] === n[1] && (e--, e < 0)) return r;
                return -1;
              })(t[2], '()');
              if (o > -1) {
                const c = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + o;
                (t[2] = t[2].substring(0, o)),
                  (t[0] = t[0].substring(0, c).trim()),
                  (t[3] = '');
              }
            }
            let r = t[2],
              i = '';
            if (this.options.pedantic) {
              const o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
              o && ((r = o[1]), (i = o[3]));
            } else i = t[3] ? t[3].slice(1, -1) : '';
            return (
              (r = r.trim()),
              /^</.test(r) &&
                (r =
                  this.options.pedantic && !/>$/.test(e)
                    ? r.slice(1)
                    : r.slice(1, -1)),
              K(
                t,
                {
                  href: r && r.replace(this.rules.inline._escapes, '$1'),
                  title: i && i.replace(this.rules.inline._escapes, '$1'),
                },
                t[0],
                this.lexer
              )
            );
          }
        }
        reflink(n, t) {
          let e;
          if (
            (e = this.rules.inline.reflink.exec(n)) ||
            (e = this.rules.inline.nolink.exec(n))
          ) {
            let r = (e[2] || e[1]).replace(/\s+/g, ' ');
            if (((r = t[r.toLowerCase()]), !r)) {
              const i = e[0].charAt(0);
              return { type: 'text', raw: i, text: i };
            }
            return K(e, r, e[0], this.lexer);
          }
        }
        emStrong(n, t, e = '') {
          let r = this.rules.inline.emStrong.lDelim.exec(n);
          if (!r || (r[3] && e.match(/[\p{L}\p{N}]/u))) return;
          const i = r[1] || r[2] || '';
          if (
            !i ||
            (i && ('' === e || this.rules.inline.punctuation.exec(e)))
          ) {
            const o = r[0].length - 1;
            let s,
              c,
              f = o,
              p = 0;
            const u =
              '*' === r[0][0]
                ? this.rules.inline.emStrong.rDelimAst
                : this.rules.inline.emStrong.rDelimUnd;
            for (
              u.lastIndex = 0, t = t.slice(-1 * n.length + o);
              null != (r = u.exec(t));

            ) {
              if (((s = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !s))
                continue;
              if (((c = s.length), r[3] || r[4])) {
                f += c;
                continue;
              }
              if ((r[5] || r[6]) && o % 3 && !((o + c) % 3)) {
                p += c;
                continue;
              }
              if (((f -= c), f > 0)) continue;
              c = Math.min(c, c + f + p);
              const m = n.slice(0, o + r.index + (r[0].length - s.length) + c);
              if (Math.min(o, c) % 2) {
                const z = m.slice(1, -1);
                return {
                  type: 'em',
                  raw: m,
                  text: z,
                  tokens: this.lexer.inlineTokens(z),
                };
              }
              const h = m.slice(2, -2);
              return {
                type: 'strong',
                raw: m,
                text: h,
                tokens: this.lexer.inlineTokens(h),
              };
            }
          }
        }
        codespan(n) {
          const t = this.rules.inline.code.exec(n);
          if (t) {
            let e = t[2].replace(/\n/g, ' ');
            const r = /[^ ]/.test(e),
              i = /^ /.test(e) && / $/.test(e);
            return (
              r && i && (e = e.substring(1, e.length - 1)),
              (e = M(e, !0)),
              { type: 'codespan', raw: t[0], text: e }
            );
          }
        }
        br(n) {
          const t = this.rules.inline.br.exec(n);
          if (t) return { type: 'br', raw: t[0] };
        }
        del(n) {
          const t = this.rules.inline.del.exec(n);
          if (t)
            return {
              type: 'del',
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2]),
            };
        }
        autolink(n, t) {
          const e = this.rules.inline.autolink.exec(n);
          if (e) {
            let r, i;
            return (
              '@' === e[2]
                ? ((r = M(this.options.mangle ? t(e[1]) : e[1])),
                  (i = 'mailto:' + r))
                : ((r = M(e[1])), (i = r)),
              {
                type: 'link',
                raw: e[0],
                text: r,
                href: i,
                tokens: [{ type: 'text', raw: r, text: r }],
              }
            );
          }
        }
        url(n, t) {
          let e;
          if ((e = this.rules.inline.url.exec(n))) {
            let r, i;
            if ('@' === e[2])
              (r = M(this.options.mangle ? t(e[0]) : e[0])),
                (i = 'mailto:' + r);
            else {
              let o;
              do {
                (o = e[0]), (e[0] = this.rules.inline._backpedal.exec(e[0])[0]);
              } while (o !== e[0]);
              (r = M(e[0])), (i = 'www.' === e[1] ? 'http://' + e[0] : e[0]);
            }
            return {
              type: 'link',
              raw: e[0],
              text: r,
              href: i,
              tokens: [{ type: 'text', raw: r, text: r }],
            };
          }
        }
        inlineText(n, t) {
          const e = this.rules.inline.text.exec(n);
          if (e) {
            let r;
            return (
              (r = this.lexer.state.inRawBlock
                ? this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(e[0])
                    : M(e[0])
                  : e[0]
                : M(this.options.smartypants ? t(e[0]) : e[0])),
              { type: 'text', raw: e[0], text: r }
            );
          }
        }
      }
      const d = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences:
          /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
        def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: Z,
        lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph:
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
      };
      (d.def = b(d.def)
        .replace('label', d._label)
        .replace('title', d._title)
        .getRegex()),
        (d.bullet = /(?:[*+-]|\d{1,9}[.)])/),
        (d.listItemStart = b(/^( *)(bull) */)
          .replace('bull', d.bullet)
          .getRegex()),
        (d.list = b(d.list)
          .replace(/bull/g, d.bullet)
          .replace(
            'hr',
            '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
          )
          .replace('def', '\\n+(?=' + d.def.source + ')')
          .getRegex()),
        (d._tag =
          'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
        (d._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
        (d.html = b(d.html, 'i')
          .replace('comment', d._comment)
          .replace('tag', d._tag)
          .replace(
            'attribute',
            / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
          )
          .getRegex()),
        (d.paragraph = b(d._paragraph)
          .replace('hr', d.hr)
          .replace('heading', ' {0,3}#{1,6} ')
          .replace('|lheading', '')
          .replace('|table', '')
          .replace('blockquote', ' {0,3}>')
          .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
          .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
          .replace(
            'html',
            '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
          )
          .replace('tag', d._tag)
          .getRegex()),
        (d.blockquote = b(d.blockquote)
          .replace('paragraph', d.paragraph)
          .getRegex()),
        (d.normal = { ...d }),
        (d.gfm = {
          ...d.normal,
          table:
            '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
        }),
        (d.gfm.table = b(d.gfm.table)
          .replace('hr', d.hr)
          .replace('heading', ' {0,3}#{1,6} ')
          .replace('blockquote', ' {0,3}>')
          .replace('code', ' {4}[^\\n]')
          .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
          .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
          .replace(
            'html',
            '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
          )
          .replace('tag', d._tag)
          .getRegex()),
        (d.gfm.paragraph = b(d._paragraph)
          .replace('hr', d.hr)
          .replace('heading', ' {0,3}#{1,6} ')
          .replace('|lheading', '')
          .replace('table', d.gfm.table)
          .replace('blockquote', ' {0,3}>')
          .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
          .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
          .replace(
            'html',
            '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
          )
          .replace('tag', d._tag)
          .getRegex()),
        (d.pedantic = {
          ...d.normal,
          html: b(
            '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
          )
            .replace('comment', d._comment)
            .replace(
              /tag/g,
              '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
            )
            .getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^(#{1,6})(.*)(?:\n+|$)/,
          fences: Z,
          lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
          paragraph: b(d.normal._paragraph)
            .replace('hr', d.hr)
            .replace('heading', ' *#{1,6} *[^\n]')
            .replace('lheading', d.lheading)
            .replace('blockquote', ' {0,3}>')
            .replace('|fences', '')
            .replace('|list', '')
            .replace('|html', '')
            .getRegex(),
        });
      const a = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: Z,
        tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: 'reflink|nolink(?!\\()',
        emStrong: {
          lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
          rDelimAst:
            /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
          rDelimUnd:
            /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: Z,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/,
      };
      function _e(l) {
        return l
          .replace(/---/g, '\u2014')
          .replace(/--/g, '\u2013')
          .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
          .replace(/'/g, '\u2019')
          .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
          .replace(/"/g, '\u201d')
          .replace(/\.{3}/g, '\u2026');
      }
      function ee(l) {
        let t,
          e,
          n = '';
        const r = l.length;
        for (t = 0; t < r; t++)
          (e = l.charCodeAt(t)),
            Math.random() > 0.5 && (e = 'x' + e.toString(16)),
            (n += '&#' + e + ';');
        return n;
      }
      (a._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'),
        (a.punctuation = b(a.punctuation)
          .replace(/punctuation/g, a._punctuation)
          .getRegex()),
        (a.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
        (a.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g),
        (a._comment = b(d._comment)
          .replace('(?:--\x3e|$)', '--\x3e')
          .getRegex()),
        (a.emStrong.lDelim = b(a.emStrong.lDelim)
          .replace(/punct/g, a._punctuation)
          .getRegex()),
        (a.emStrong.rDelimAst = b(a.emStrong.rDelimAst, 'g')
          .replace(/punct/g, a._punctuation)
          .getRegex()),
        (a.emStrong.rDelimUnd = b(a.emStrong.rDelimUnd, 'g')
          .replace(/punct/g, a._punctuation)
          .getRegex()),
        (a._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
        (a._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
        (a._email =
          /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
        (a.autolink = b(a.autolink)
          .replace('scheme', a._scheme)
          .replace('email', a._email)
          .getRegex()),
        (a._attribute =
          /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
        (a.tag = b(a.tag)
          .replace('comment', a._comment)
          .replace('attribute', a._attribute)
          .getRegex()),
        (a._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
        (a._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
        (a._title =
          /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
        (a.link = b(a.link)
          .replace('label', a._label)
          .replace('href', a._href)
          .replace('title', a._title)
          .getRegex()),
        (a.reflink = b(a.reflink)
          .replace('label', a._label)
          .replace('ref', d._label)
          .getRegex()),
        (a.nolink = b(a.nolink).replace('ref', d._label).getRegex()),
        (a.reflinkSearch = b(a.reflinkSearch, 'g')
          .replace('reflink', a.reflink)
          .replace('nolink', a.nolink)
          .getRegex()),
        (a.normal = { ...a }),
        (a.pedantic = {
          ...a.normal,
          strong: {
            start: /^__|\*\*/,
            middle:
              /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g,
          },
          em: {
            start: /^_|\*/,
            middle:
              /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g,
          },
          link: b(/^!?\[(label)\]\((.*?)\)/)
            .replace('label', a._label)
            .getRegex(),
          reflink: b(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace('label', a._label)
            .getRegex(),
        }),
        (a.gfm = {
          ...a.normal,
          escape: b(a.escape).replace('])', '~|])').getRegex(),
          _extended_email:
            /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
          url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
          _backpedal:
            /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
          del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
          text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        }),
        (a.gfm.url = b(a.gfm.url, 'i')
          .replace('email', a.gfm._extended_email)
          .getRegex()),
        (a.breaks = {
          ...a.gfm,
          br: b(a.br).replace('{2,}', '*').getRegex(),
          text: b(a.gfm.text)
            .replace('\\b_', '\\b_| {2,}\\n')
            .replace(/\{2,\}/g, '*')
            .getRegex(),
        });
      class E {
        constructor(n) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = n || P),
            (this.options.tokenizer = this.options.tokenizer || new Q()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
          const t = { block: d.normal, inline: a.normal };
          this.options.pedantic
            ? ((t.block = d.pedantic), (t.inline = a.pedantic))
            : this.options.gfm &&
              ((t.block = d.gfm),
              (t.inline = this.options.breaks ? a.breaks : a.gfm)),
            (this.tokenizer.rules = t);
        }
        static get rules() {
          return { block: d, inline: a };
        }
        static lex(n, t) {
          return new E(t).lex(n);
        }
        static lexInline(n, t) {
          return new E(t).inlineTokens(n);
        }
        lex(n) {
          let t;
          for (
            n = n.replace(/\r\n|\r/g, '\n'), this.blockTokens(n, this.tokens);
            (t = this.inlineQueue.shift());

          )
            this.inlineTokens(t.src, t.tokens);
          return this.tokens;
        }
        blockTokens(n, t = []) {
          let e, r, i, o;
          for (
            n = this.options.pedantic
              ? n.replace(/\t/g, '    ').replace(/^ +$/gm, '')
              : n.replace(
                  /^( *)(\t+)/gm,
                  (s, c, f) => c + '    '.repeat(f.length)
                );
            n;

          )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(
                  (s) =>
                    !!(e = s.call({ lexer: this }, n, t)) &&
                    ((n = n.substring(e.raw.length)), t.push(e), !0)
                )
              )
            ) {
              if ((e = this.tokenizer.space(n))) {
                (n = n.substring(e.raw.length)),
                  1 === e.raw.length && t.length > 0
                    ? (t[t.length - 1].raw += '\n')
                    : t.push(e);
                continue;
              }
              if ((e = this.tokenizer.code(n))) {
                (n = n.substring(e.raw.length)),
                  (r = t[t.length - 1]),
                  !r || ('paragraph' !== r.type && 'text' !== r.type)
                    ? t.push(e)
                    : ((r.raw += '\n' + e.raw),
                      (r.text += '\n' + e.text),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        r.text));
                continue;
              }
              if ((e = this.tokenizer.fences(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.heading(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.hr(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.blockquote(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.list(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.html(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.def(n))) {
                (n = n.substring(e.raw.length)),
                  (r = t[t.length - 1]),
                  !r || ('paragraph' !== r.type && 'text' !== r.type)
                    ? this.tokens.links[e.tag] ||
                      (this.tokens.links[e.tag] = {
                        href: e.href,
                        title: e.title,
                      })
                    : ((r.raw += '\n' + e.raw),
                      (r.text += '\n' + e.raw),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        r.text));
                continue;
              }
              if ((e = this.tokenizer.table(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.lheading(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if (
                ((i = n),
                this.options.extensions && this.options.extensions.startBlock)
              ) {
                let s = 1 / 0;
                const c = n.slice(1);
                let f;
                this.options.extensions.startBlock.forEach(function (p) {
                  (f = p.call({ lexer: this }, c)),
                    'number' == typeof f && f >= 0 && (s = Math.min(s, f));
                }),
                  s < 1 / 0 && s >= 0 && (i = n.substring(0, s + 1));
              }
              if (this.state.top && (e = this.tokenizer.paragraph(i))) {
                (r = t[t.length - 1]),
                  o && 'paragraph' === r.type
                    ? ((r.raw += '\n' + e.raw),
                      (r.text += '\n' + e.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        r.text))
                    : t.push(e),
                  (o = i.length !== n.length),
                  (n = n.substring(e.raw.length));
                continue;
              }
              if ((e = this.tokenizer.text(n))) {
                (n = n.substring(e.raw.length)),
                  (r = t[t.length - 1]),
                  r && 'text' === r.type
                    ? ((r.raw += '\n' + e.raw),
                      (r.text += '\n' + e.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        r.text))
                    : t.push(e);
                continue;
              }
              if (n) {
                const s = 'Infinite loop on byte: ' + n.charCodeAt(0);
                if (this.options.silent) {
                  console.error(s);
                  break;
                }
                throw new Error(s);
              }
            }
          return (this.state.top = !0), t;
        }
        inline(n, t = []) {
          return this.inlineQueue.push({ src: n, tokens: t }), t;
        }
        inlineTokens(n, t = []) {
          let e,
            r,
            i,
            s,
            c,
            f,
            o = n;
          if (this.tokens.links) {
            const p = Object.keys(this.tokens.links);
            if (p.length > 0)
              for (
                ;
                null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(o));

              )
                p.includes(s[0].slice(s[0].lastIndexOf('[') + 1, -1)) &&
                  (o =
                    o.slice(0, s.index) +
                    '[' +
                    Y('a', s[0].length - 2) +
                    ']' +
                    o.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ));
          }
          for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(o)); )
            o =
              o.slice(0, s.index) +
              '[' +
              Y('a', s[0].length - 2) +
              ']' +
              o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (
            ;
            null != (s = this.tokenizer.rules.inline.escapedEmSt.exec(o));

          )
            (o =
              o.slice(0, s.index + s[0].length - 2) +
              '++' +
              o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)),
              this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
          for (; n; )
            if (
              (c || (f = ''),
              (c = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(
                  (p) =>
                    !!(e = p.call({ lexer: this }, n, t)) &&
                    ((n = n.substring(e.raw.length)), t.push(e), !0)
                )
              ))
            ) {
              if ((e = this.tokenizer.escape(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.tag(n))) {
                (n = n.substring(e.raw.length)),
                  (r = t[t.length - 1]),
                  r && 'text' === e.type && 'text' === r.type
                    ? ((r.raw += e.raw), (r.text += e.text))
                    : t.push(e);
                continue;
              }
              if ((e = this.tokenizer.link(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.reflink(n, this.tokens.links))) {
                (n = n.substring(e.raw.length)),
                  (r = t[t.length - 1]),
                  r && 'text' === e.type && 'text' === r.type
                    ? ((r.raw += e.raw), (r.text += e.text))
                    : t.push(e);
                continue;
              }
              if ((e = this.tokenizer.emStrong(n, o, f))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.codespan(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.br(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.del(n))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if ((e = this.tokenizer.autolink(n, ee))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if (!this.state.inLink && (e = this.tokenizer.url(n, ee))) {
                (n = n.substring(e.raw.length)), t.push(e);
                continue;
              }
              if (
                ((i = n),
                this.options.extensions && this.options.extensions.startInline)
              ) {
                let p = 1 / 0;
                const u = n.slice(1);
                let m;
                this.options.extensions.startInline.forEach(function (h) {
                  (m = h.call({ lexer: this }, u)),
                    'number' == typeof m && m >= 0 && (p = Math.min(p, m));
                }),
                  p < 1 / 0 && p >= 0 && (i = n.substring(0, p + 1));
              }
              if ((e = this.tokenizer.inlineText(i, _e))) {
                (n = n.substring(e.raw.length)),
                  '_' !== e.raw.slice(-1) && (f = e.raw.slice(-1)),
                  (c = !0),
                  (r = t[t.length - 1]),
                  r && 'text' === r.type
                    ? ((r.raw += e.raw), (r.text += e.text))
                    : t.push(e);
                continue;
              }
              if (n) {
                const p = 'Infinite loop on byte: ' + n.charCodeAt(0);
                if (this.options.silent) {
                  console.error(p);
                  break;
                }
                throw new Error(p);
              }
            }
          return t;
        }
      }
      class j {
        constructor(n) {
          this.options = n || P;
        }
        code(n, t, e) {
          const r = (t || '').match(/\S*/)[0];
          if (this.options.highlight) {
            const i = this.options.highlight(n, r);
            null != i && i !== n && ((e = !0), (n = i));
          }
          return (
            (n = n.replace(/\n$/, '') + '\n'),
            r
              ? '<pre><code class="' +
                this.options.langPrefix +
                M(r) +
                '">' +
                (e ? n : M(n, !0)) +
                '</code></pre>\n'
              : '<pre><code>' + (e ? n : M(n, !0)) + '</code></pre>\n'
          );
        }
        blockquote(n) {
          return `<blockquote>\n${n}</blockquote>\n`;
        }
        html(n) {
          return n;
        }
        heading(n, t, e, r) {
          return this.options.headerIds
            ? `<h${t} id="${
                this.options.headerPrefix + r.slug(e)
              }">${n}</h${t}>\n`
            : `<h${t}>${n}</h${t}>\n`;
        }
        hr() {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        }
        list(n, t, e) {
          const r = t ? 'ol' : 'ul';
          return (
            '<' +
            r +
            (t && 1 !== e ? ' start="' + e + '"' : '') +
            '>\n' +
            n +
            '</' +
            r +
            '>\n'
          );
        }
        listitem(n) {
          return `<li>${n}</li>\n`;
        }
        checkbox(n) {
          return (
            '<input ' +
            (n ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          );
        }
        paragraph(n) {
          return `<p>${n}</p>\n`;
        }
        table(n, t) {
          return (
            t && (t = `<tbody>${t}</tbody>`),
            '<table>\n<thead>\n' + n + '</thead>\n' + t + '</table>\n'
          );
        }
        tablerow(n) {
          return `<tr>\n${n}</tr>\n`;
        }
        tablecell(n, t) {
          const e = t.header ? 'th' : 'td';
          return (
            (t.align ? `<${e} align="${t.align}">` : `<${e}>`) + n + `</${e}>\n`
          );
        }
        strong(n) {
          return `<strong>${n}</strong>`;
        }
        em(n) {
          return `<em>${n}</em>`;
        }
        codespan(n) {
          return `<code>${n}</code>`;
        }
        br() {
          return this.options.xhtml ? '<br/>' : '<br>';
        }
        del(n) {
          return `<del>${n}</del>`;
        }
        link(n, t, e) {
          if (null === (n = J(this.options.sanitize, this.options.baseUrl, n)))
            return e;
          let r = '<a href="' + n + '"';
          return t && (r += ' title="' + t + '"'), (r += '>' + e + '</a>'), r;
        }
        image(n, t, e) {
          if (null === (n = J(this.options.sanitize, this.options.baseUrl, n)))
            return e;
          let r = `<img src="${n}" alt="${e}"`;
          return (
            t && (r += ` title="${t}"`),
            (r += this.options.xhtml ? '/>' : '>'),
            r
          );
        }
        text(n) {
          return n;
        }
      }
      class te {
        strong(n) {
          return n;
        }
        em(n) {
          return n;
        }
        codespan(n) {
          return n;
        }
        del(n) {
          return n;
        }
        html(n) {
          return n;
        }
        text(n) {
          return n;
        }
        link(n, t, e) {
          return '' + e;
        }
        image(n, t, e) {
          return '' + e;
        }
        br() {
          return '';
        }
      }
      class ne {
        constructor() {
          this.seen = {};
        }
        serialize(n) {
          return n
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-');
        }
        getNextSafeSlug(n, t) {
          let e = n,
            r = 0;
          if (this.seen.hasOwnProperty(e)) {
            r = this.seen[n];
            do {
              r++, (e = n + '-' + r);
            } while (this.seen.hasOwnProperty(e));
          }
          return t || ((this.seen[n] = r), (this.seen[e] = 0)), e;
        }
        slug(n, t = {}) {
          const e = this.serialize(n);
          return this.getNextSafeSlug(e, t.dryrun);
        }
      }
      class S {
        constructor(n) {
          (this.options = n || P),
            (this.options.renderer = this.options.renderer || new j()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new te()),
            (this.slugger = new ne());
        }
        static parse(n, t) {
          return new S(t).parse(n);
        }
        static parseInline(n, t) {
          return new S(t).parseInline(n);
        }
        parse(n, t = !0) {
          let r,
            i,
            o,
            s,
            c,
            f,
            p,
            u,
            m,
            h,
            z,
            w,
            T,
            k,
            _,
            R,
            v,
            y,
            O,
            e = '';
          const I = n.length;
          for (r = 0; r < I; r++)
            if (
              ((h = n[r]),
              this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[h.type] &&
                ((O = this.options.extensions.renderers[h.type].call(
                  { parser: this },
                  h
                )),
                !1 !== O ||
                  ![
                    'space',
                    'hr',
                    'heading',
                    'code',
                    'table',
                    'blockquote',
                    'list',
                    'html',
                    'paragraph',
                    'text',
                  ].includes(h.type)))
            )
              e += O || '';
            else
              switch (h.type) {
                case 'space':
                  continue;
                case 'hr':
                  e += this.renderer.hr();
                  continue;
                case 'heading':
                  e += this.renderer.heading(
                    this.parseInline(h.tokens),
                    h.depth,
                    X(this.parseInline(h.tokens, this.textRenderer)),
                    this.slugger
                  );
                  continue;
                case 'code':
                  e += this.renderer.code(h.text, h.lang, h.escaped);
                  continue;
                case 'table':
                  for (u = '', p = '', s = h.header.length, i = 0; i < s; i++)
                    p += this.renderer.tablecell(
                      this.parseInline(h.header[i].tokens),
                      { header: !0, align: h.align[i] }
                    );
                  for (
                    u += this.renderer.tablerow(p),
                      m = '',
                      s = h.rows.length,
                      i = 0;
                    i < s;
                    i++
                  ) {
                    for (f = h.rows[i], p = '', c = f.length, o = 0; o < c; o++)
                      p += this.renderer.tablecell(
                        this.parseInline(f[o].tokens),
                        { header: !1, align: h.align[o] }
                      );
                    m += this.renderer.tablerow(p);
                  }
                  e += this.renderer.table(u, m);
                  continue;
                case 'blockquote':
                  (m = this.parse(h.tokens)),
                    (e += this.renderer.blockquote(m));
                  continue;
                case 'list':
                  for (
                    z = h.ordered,
                      w = h.start,
                      T = h.loose,
                      s = h.items.length,
                      m = '',
                      i = 0;
                    i < s;
                    i++
                  )
                    (_ = h.items[i]),
                      (R = _.checked),
                      (v = _.task),
                      (k = ''),
                      _.task &&
                        ((y = this.renderer.checkbox(R)),
                        T
                          ? _.tokens.length > 0 &&
                            'paragraph' === _.tokens[0].type
                            ? ((_.tokens[0].text = y + ' ' + _.tokens[0].text),
                              _.tokens[0].tokens &&
                                _.tokens[0].tokens.length > 0 &&
                                'text' === _.tokens[0].tokens[0].type &&
                                (_.tokens[0].tokens[0].text =
                                  y + ' ' + _.tokens[0].tokens[0].text))
                            : _.tokens.unshift({ type: 'text', text: y })
                          : (k += y)),
                      (k += this.parse(_.tokens, T)),
                      (m += this.renderer.listitem(k, v, R));
                  e += this.renderer.list(m, z, w);
                  continue;
                case 'html':
                  e += this.renderer.html(h.text);
                  continue;
                case 'paragraph':
                  e += this.renderer.paragraph(this.parseInline(h.tokens));
                  continue;
                case 'text':
                  for (
                    m = h.tokens ? this.parseInline(h.tokens) : h.text;
                    r + 1 < I && 'text' === n[r + 1].type;

                  )
                    (h = n[++r]),
                      (m +=
                        '\n' +
                        (h.tokens ? this.parseInline(h.tokens) : h.text));
                  e += t ? this.renderer.paragraph(m) : m;
                  continue;
                default: {
                  const oe = 'Token with "' + h.type + '" type was not found.';
                  if (this.options.silent) return void console.error(oe);
                  throw new Error(oe);
                }
              }
          return e;
        }
        parseInline(n, t) {
          t = t || this.renderer;
          let r,
            i,
            o,
            e = '';
          const s = n.length;
          for (r = 0; r < s; r++)
            if (
              ((i = n[r]),
              this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[i.type] &&
                ((o = this.options.extensions.renderers[i.type].call(
                  { parser: this },
                  i
                )),
                !1 !== o ||
                  ![
                    'escape',
                    'html',
                    'link',
                    'image',
                    'strong',
                    'em',
                    'codespan',
                    'br',
                    'del',
                    'text',
                  ].includes(i.type)))
            )
              e += o || '';
            else
              switch (i.type) {
                case 'escape':
                case 'text':
                  e += t.text(i.text);
                  break;
                case 'html':
                  e += t.html(i.text);
                  break;
                case 'link':
                  e += t.link(i.href, i.title, this.parseInline(i.tokens, t));
                  break;
                case 'image':
                  e += t.image(i.href, i.title, i.text);
                  break;
                case 'strong':
                  e += t.strong(this.parseInline(i.tokens, t));
                  break;
                case 'em':
                  e += t.em(this.parseInline(i.tokens, t));
                  break;
                case 'codespan':
                  e += t.codespan(i.text);
                  break;
                case 'br':
                  e += t.br();
                  break;
                case 'del':
                  e += t.del(this.parseInline(i.tokens, t));
                  break;
                default: {
                  const c = 'Token with "' + i.type + '" type was not found.';
                  if (this.options.silent) return void console.error(c);
                  throw new Error(c);
                }
              }
          return e;
        }
      }
      class N {
        constructor(n) {
          this.options = n || P;
        }
        static passThroughHooks = new Set(['preprocess', 'postprocess']);
        preprocess(n) {
          return n;
        }
        postprocess(n) {
          return n;
        }
      }
      function re(l, n) {
        return (t, e, r) => {
          'function' == typeof e && ((r = e), (e = null));
          const i = { ...e },
            o = (function Me(l, n, t) {
              return (e) => {
                if (
                  ((e.message +=
                    '\nPlease report this to https://github.com/markedjs/marked.'),
                  l)
                ) {
                  const r =
                    '<p>An error occurred:</p><pre>' +
                    M(e.message + '', !0) +
                    '</pre>';
                  return n ? Promise.resolve(r) : t ? void t(null, r) : r;
                }
                if (n) return Promise.reject(e);
                if (!t) throw e;
                t(e);
              };
            })((e = { ...g.defaults, ...i }).silent, e.async, r);
          if (typeof t > 'u' || null === t)
            return o(
              new Error('marked(): input parameter is undefined or null')
            );
          if ('string' != typeof t)
            return o(
              new Error(
                'marked(): input parameter is of type ' +
                  Object.prototype.toString.call(t) +
                  ', string expected'
              )
            );
          if (
            ((function ke(l) {
              l &&
                l.sanitize &&
                !l.silent &&
                console.warn(
                  'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
                );
            })(e),
            e.hooks && (e.hooks.options = e),
            r)
          ) {
            const s = e.highlight;
            let c;
            try {
              e.hooks && (t = e.hooks.preprocess(t)), (c = l(t, e));
            } catch (u) {
              return o(u);
            }
            const f = function (u) {
              let m;
              if (!u)
                try {
                  e.walkTokens && g.walkTokens(c, e.walkTokens),
                    (m = n(c, e)),
                    e.hooks && (m = e.hooks.postprocess(m));
                } catch (h) {
                  u = h;
                }
              return (e.highlight = s), u ? o(u) : r(null, m);
            };
            if (!s || s.length < 3 || (delete e.highlight, !c.length))
              return f();
            let p = 0;
            return (
              g.walkTokens(c, function (u) {
                'code' === u.type &&
                  (p++,
                  setTimeout(() => {
                    s(u.text, u.lang, function (m, h) {
                      if (m) return f(m);
                      null != h &&
                        h !== u.text &&
                        ((u.text = h), (u.escaped = !0)),
                        p--,
                        0 === p && f();
                    });
                  }, 0));
              }),
              void (0 === p && f())
            );
          }
          if (e.async)
            return Promise.resolve(e.hooks ? e.hooks.preprocess(t) : t)
              .then((s) => l(s, e))
              .then((s) =>
                e.walkTokens
                  ? Promise.all(g.walkTokens(s, e.walkTokens)).then(() => s)
                  : s
              )
              .then((s) => n(s, e))
              .then((s) => (e.hooks ? e.hooks.postprocess(s) : s))
              .catch(o);
          try {
            e.hooks && (t = e.hooks.preprocess(t));
            const s = l(t, e);
            e.walkTokens && g.walkTokens(s, e.walkTokens);
            let c = n(s, e);
            return e.hooks && (c = e.hooks.postprocess(c)), c;
          } catch (s) {
            return o(s);
          }
        };
      }
      function g(l, n, t) {
        return re(E.lex, S.parse)(l, n, t);
      }
      (g.options = g.setOptions =
        function (l) {
          return (
            (function D(l) {
              P = l;
            })((g.defaults = { ...g.defaults, ...l })),
            g
          );
        }),
        (g.getDefaults = function A() {
          return {
            async: !1,
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !0,
            headerPrefix: '',
            highlight: null,
            hooks: null,
            langPrefix: 'language-',
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1,
          };
        }),
        (g.defaults = P),
        (g.use = function (...l) {
          const n = g.defaults.extensions || { renderers: {}, childTokens: {} };
          l.forEach((t) => {
            const e = { ...t };
            if (
              ((e.async = g.defaults.async || e.async || !1),
              t.extensions &&
                (t.extensions.forEach((r) => {
                  if (!r.name) throw new Error('extension name required');
                  if (r.renderer) {
                    const i = n.renderers[r.name];
                    n.renderers[r.name] = i
                      ? function (...o) {
                          let s = r.renderer.apply(this, o);
                          return !1 === s && (s = i.apply(this, o)), s;
                        }
                      : r.renderer;
                  }
                  if (r.tokenizer) {
                    if (
                      !r.level ||
                      ('block' !== r.level && 'inline' !== r.level)
                    )
                      throw new Error(
                        "extension level must be 'block' or 'inline'"
                      );
                    n[r.level]
                      ? n[r.level].unshift(r.tokenizer)
                      : (n[r.level] = [r.tokenizer]),
                      r.start &&
                        ('block' === r.level
                          ? n.startBlock
                            ? n.startBlock.push(r.start)
                            : (n.startBlock = [r.start])
                          : 'inline' === r.level &&
                            (n.startInline
                              ? n.startInline.push(r.start)
                              : (n.startInline = [r.start])));
                  }
                  r.childTokens && (n.childTokens[r.name] = r.childTokens);
                }),
                (e.extensions = n)),
              t.renderer)
            ) {
              const r = g.defaults.renderer || new j();
              for (const i in t.renderer) {
                const o = r[i];
                r[i] = (...s) => {
                  let c = t.renderer[i].apply(r, s);
                  return !1 === c && (c = o.apply(r, s)), c;
                };
              }
              e.renderer = r;
            }
            if (t.tokenizer) {
              const r = g.defaults.tokenizer || new Q();
              for (const i in t.tokenizer) {
                const o = r[i];
                r[i] = (...s) => {
                  let c = t.tokenizer[i].apply(r, s);
                  return !1 === c && (c = o.apply(r, s)), c;
                };
              }
              e.tokenizer = r;
            }
            if (t.hooks) {
              const r = g.defaults.hooks || new N();
              for (const i in t.hooks) {
                const o = r[i];
                r[i] = N.passThroughHooks.has(i)
                  ? (s) => {
                      if (g.defaults.async)
                        return Promise.resolve(t.hooks[i].call(r, s)).then(
                          (f) => o.call(r, f)
                        );
                      const c = t.hooks[i].call(r, s);
                      return o.call(r, c);
                    }
                  : (...s) => {
                      let c = t.hooks[i].apply(r, s);
                      return !1 === c && (c = o.apply(r, s)), c;
                    };
              }
              e.hooks = r;
            }
            if (t.walkTokens) {
              const r = g.defaults.walkTokens;
              e.walkTokens = function (i) {
                let o = [];
                return (
                  o.push(t.walkTokens.call(this, i)),
                  r && (o = o.concat(r.call(this, i))),
                  o
                );
              };
            }
            g.setOptions(e);
          });
        }),
        (g.walkTokens = function (l, n) {
          let t = [];
          for (const e of l)
            switch (((t = t.concat(n.call(g, e))), e.type)) {
              case 'table':
                for (const r of e.header)
                  t = t.concat(g.walkTokens(r.tokens, n));
                for (const r of e.rows)
                  for (const i of r) t = t.concat(g.walkTokens(i.tokens, n));
                break;
              case 'list':
                t = t.concat(g.walkTokens(e.items, n));
                break;
              default:
                g.defaults.extensions &&
                g.defaults.extensions.childTokens &&
                g.defaults.extensions.childTokens[e.type]
                  ? g.defaults.extensions.childTokens[e.type].forEach(function (
                      r
                    ) {
                      t = t.concat(g.walkTokens(e[r], n));
                    })
                  : e.tokens && (t = t.concat(g.walkTokens(e.tokens, n)));
            }
          return t;
        }),
        (g.parseInline = re(E.lexInline, S.parseInline)),
        (g.Parser = S),
        (g.parser = S.parse),
        (g.Renderer = j),
        (g.TextRenderer = te),
        (g.Lexer = E),
        (g.lexer = E.lex),
        (g.Tokenizer = Q),
        (g.Slugger = ne),
        (g.Hooks = N),
        (g.parse = g);
      const Ce = ['easymde'],
        ie = () => {},
        x = window.EasyMDE;
      let we = (() => {
        class l {
          _zone;
          _value = '';
          _easyMDE;
          _fromEditor = !1;
          textarea;
          options = {};
          constructor(t) {
            this._zone = t;
          }
          propagateChange = (t) => ie;
          onTouched = () => ie;
          set value(t) {
            (this._value = t),
              this._easyMDE &&
                (this._fromEditor || this._easyMDE.value(t),
                this.propagateChange(this._value),
                (this._fromEditor = !1),
                this._zone.run(() => (this._value = t)));
          }
          get value() {
            return this._value;
          }
          get easyMDE() {
            return this._easyMDE;
          }
          writeValue(t) {
            this.value = t || '';
          }
          registerOnChange(t) {
            this.propagateChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          ngAfterViewInit() {
            (this.options.element = this.textarea.nativeElement),
              g.setOptions({ sanitize: !0 }),
              (this._easyMDE = new x(this.options)),
              this._easyMDE.value(this.value),
              this._easyMDE.codemirror.on('change', this._onChange);
          }
          ngOnDestroy() {
            this._easyMDE?.codemirror.off('change', this._onChange);
          }
          isPreviewActive() {
            return this._easyMDE.isPreviewActive();
          }
          isSideBySideActive() {
            return this._easyMDE.isSideBySideActive();
          }
          isFullscreenActive() {
            return this._easyMDE.isFullscreenActive();
          }
          clearAutosavedValue() {
            this._easyMDE.clearAutosavedValue();
          }
          toTextArea() {
            this._easyMDE.toTextArea();
          }
          toggleBold() {
            x.toggleBold(this._easyMDE);
          }
          toggleItalic() {
            x.toggleItalic(this._easyMDE);
          }
          toggleStrikethrough() {
            x.toggleStrikethrough(this._easyMDE);
          }
          toggleHeadingSmaller() {
            x.toggleHeadingSmaller(this._easyMDE);
          }
          toggleHeadingBigger() {
            x.toggleHeadingBigger(this._easyMDE);
          }
          toggleHeading1() {
            x.toggleHeading1(this._easyMDE);
          }
          toggleHeading2() {
            x.toggleHeading2(this._easyMDE);
          }
          toggleHeading3() {
            x.toggleHeading3(this._easyMDE);
          }
          toggleCodeBlock() {
            x.toggleCodeBlock(this._easyMDE);
          }
          toggleBlockquote() {
            x.toggleBlockquote(this._easyMDE);
          }
          toggleUnorderedList() {
            x.toggleUnorderedList(this._easyMDE);
          }
          toggleOrderedList() {
            x.toggleOrderedList(this._easyMDE);
          }
          cleanBlock() {
            x.cleanBlock(this._easyMDE);
          }
          drawLink() {
            x.drawLink(this._easyMDE);
          }
          drawImage() {
            x.drawImage(this._easyMDE);
          }
          drawTable() {
            x.drawTable(this._easyMDE);
          }
          drawHorizontalRule() {
            x.drawHorizontalRule(this._easyMDE);
          }
          togglePreview() {
            x.togglePreview(this._easyMDE);
          }
          toggleSideBySide() {
            x.toggleSideBySide(this._easyMDE);
          }
          toggleFullScreen() {
            x.toggleFullScreen(this._easyMDE);
          }
          _onChange = () => {
            (this._fromEditor = !0), this.writeValue(this._easyMDE?.value());
          };
          static ɵfac = function (e) {
            return new (e || l)(C.Y36(C.R0b));
          };
          static ɵcmp = C.Xpm({
            type: l,
            selectors: [['td-text-editor']],
            viewQuery: function (e, r) {
              if ((1 & e && C.Gf(Ce, 7), 2 & e)) {
                let i;
                C.iGM((i = C.CRH())) && (r.textarea = i.first);
              }
            },
            inputs: { options: 'options', value: 'value' },
            features: [
              C._Bn([
                { provide: H.JU, useExisting: (0, C.Gpc)(() => l), multi: !0 },
              ]),
            ],
            decls: 3,
            vars: 0,
            consts: [['easymde', '']],
            template: function (e, r) {
              1 & e &&
                (C.TgZ(0, 'div'), C._UZ(1, 'textarea', null, 0), C.qZA());
            },
            styles: [
              '@charset "UTF-8";[_nghost-%COMP%]     .CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}[_nghost-%COMP%]     .CodeMirror-lines{padding:4px 0}[_nghost-%COMP%]     .CodeMirror pre.CodeMirror-line, [_nghost-%COMP%]     .CodeMirror pre.CodeMirror-line-like{padding:0 4px}[_nghost-%COMP%]     .CodeMirror-gutter-filler, [_nghost-%COMP%]     .CodeMirror-scrollbar-filler{background-color:#fff}[_nghost-%COMP%]     .CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}[_nghost-%COMP%]     .CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}[_nghost-%COMP%]     .CodeMirror-guttermarker{color:#000}[_nghost-%COMP%]     .CodeMirror-guttermarker-subtle{color:#999}[_nghost-%COMP%]     .CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}[_nghost-%COMP%]     .CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}[_nghost-%COMP%]     .cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}[_nghost-%COMP%]     .cm-fat-cursor div.CodeMirror-cursors{z-index:1}[_nghost-%COMP%]     .cm-fat-cursor .CodeMirror-line::selection, [_nghost-%COMP%]     .cm-fat-cursor .CodeMirror-line>span::selection, [_nghost-%COMP%]     .cm-fat-cursor .CodeMirror-line>span>span::selection{background:0 0}[_nghost-%COMP%]     .cm-fat-cursor .CodeMirror-line::-moz-selection, [_nghost-%COMP%]     .cm-fat-cursor .CodeMirror-line>span::-moz-selection, [_nghost-%COMP%]     .cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:0 0}[_nghost-%COMP%]     .cm-fat-cursor{caret-color:transparent}@keyframes _ngcontent-%COMP%_blink{50%{background-color:transparent}}[_nghost-%COMP%]     .cm-tab{display:inline-block;text-decoration:inherit}[_nghost-%COMP%]     .CodeMirror-rulers{position:absolute;inset:-50px 0 0;overflow:hidden}[_nghost-%COMP%]     .CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}[_nghost-%COMP%]     .cm-s-default .cm-header{color:#00f}[_nghost-%COMP%]     .cm-s-default .cm-quote{color:#090}[_nghost-%COMP%]     .cm-negative{color:#d44}[_nghost-%COMP%]     .cm-positive{color:#292}[_nghost-%COMP%]     .cm-header, [_nghost-%COMP%]     .cm-strong{font-weight:700}[_nghost-%COMP%]     .cm-em{font-style:italic}[_nghost-%COMP%]     .cm-link{text-decoration:underline}[_nghost-%COMP%]     .cm-strikethrough{text-decoration:line-through}[_nghost-%COMP%]     .cm-s-default .cm-keyword{color:#708}[_nghost-%COMP%]     .cm-s-default .cm-atom{color:#219}[_nghost-%COMP%]     .cm-s-default .cm-number{color:#164}[_nghost-%COMP%]     .cm-s-default .cm-def{color:#00f}[_nghost-%COMP%]     .cm-s-default .cm-variable-2{color:#05a}[_nghost-%COMP%]     .cm-s-default .cm-type, [_nghost-%COMP%]     .cm-s-default .cm-variable-3{color:#085}[_nghost-%COMP%]     .cm-s-default .cm-comment{color:#a50}[_nghost-%COMP%]     .cm-s-default .cm-string{color:#a11}[_nghost-%COMP%]     .cm-s-default .cm-string-2{color:#f50}[_nghost-%COMP%]     .cm-s-default .cm-meta{color:#555}[_nghost-%COMP%]     .cm-s-default .cm-qualifier{color:#555}[_nghost-%COMP%]     .cm-s-default .cm-builtin{color:#30a}[_nghost-%COMP%]     .cm-s-default .cm-bracket{color:#997}[_nghost-%COMP%]     .cm-s-default .cm-tag{color:#170}[_nghost-%COMP%]     .cm-s-default .cm-attribute{color:#00c}[_nghost-%COMP%]     .cm-s-default .cm-hr{color:#999}[_nghost-%COMP%]     .cm-s-default .cm-link{color:#00c}[_nghost-%COMP%]     .cm-s-default .cm-error{color:red}[_nghost-%COMP%]     .cm-invalidchar{color:red}[_nghost-%COMP%]     .CodeMirror-composing{border-bottom:2px solid}[_nghost-%COMP%]     div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}[_nghost-%COMP%]     div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}[_nghost-%COMP%]     .CodeMirror-matchingtag{background:rgba(255,150,0,.3)}[_nghost-%COMP%]     .CodeMirror-activeline-background{background:#e8f2ff}[_nghost-%COMP%]     .CodeMirror{position:relative;overflow:hidden;background:#fff}[_nghost-%COMP%]     .CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:0;position:relative;z-index:0}[_nghost-%COMP%]     .CodeMirror-sizer{position:relative;border-right:50px solid transparent}[_nghost-%COMP%]     .CodeMirror-gutter-filler, [_nghost-%COMP%]     .CodeMirror-hscrollbar, [_nghost-%COMP%]     .CodeMirror-scrollbar-filler, [_nghost-%COMP%]     .CodeMirror-vscrollbar{position:absolute;z-index:6;display:none;outline:0}[_nghost-%COMP%]     .CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}[_nghost-%COMP%]     .CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}[_nghost-%COMP%]     .CodeMirror-scrollbar-filler{right:0;bottom:0}[_nghost-%COMP%]     .CodeMirror-gutter-filler{left:0;bottom:0}[_nghost-%COMP%]     .CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}[_nghost-%COMP%]     .CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}[_nghost-%COMP%]     .CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important}[_nghost-%COMP%]     .CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}[_nghost-%COMP%]     .CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}[_nghost-%COMP%]     .CodeMirror-gutter-wrapper ::selection{background-color:transparent}[_nghost-%COMP%]     .CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}[_nghost-%COMP%]     .CodeMirror-lines{cursor:text;min-height:1px}[_nghost-%COMP%]     .CodeMirror pre.CodeMirror-line, [_nghost-%COMP%]     .CodeMirror pre.CodeMirror-line-like{border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;font-variant-ligatures:contextual}[_nghost-%COMP%]     .CodeMirror-wrap pre.CodeMirror-line, [_nghost-%COMP%]     .CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}[_nghost-%COMP%]     .CodeMirror-linebackground{position:absolute;inset:0;z-index:0}[_nghost-%COMP%]     .CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}[_nghost-%COMP%]     .CodeMirror-code{outline:0}[_nghost-%COMP%]     .CodeMirror-gutter, [_nghost-%COMP%]     .CodeMirror-gutters, [_nghost-%COMP%]     .CodeMirror-linenumber, [_nghost-%COMP%]     .CodeMirror-scroll, [_nghost-%COMP%]     .CodeMirror-sizer{box-sizing:content-box}[_nghost-%COMP%]     .CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}[_nghost-%COMP%]     .CodeMirror-cursor{position:absolute;pointer-events:none}[_nghost-%COMP%]     .CodeMirror-measure pre{position:static}[_nghost-%COMP%]     div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}[_nghost-%COMP%]     div.CodeMirror-dragcursors{visibility:visible}[_nghost-%COMP%]     .CodeMirror-focused div.CodeMirror-cursors{visibility:visible}[_nghost-%COMP%]     .CodeMirror-selected{background:#d9d9d9}[_nghost-%COMP%]     .CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}[_nghost-%COMP%]     .CodeMirror-crosshair{cursor:crosshair}[_nghost-%COMP%]     .CodeMirror-line::selection, [_nghost-%COMP%]     .CodeMirror-line>span::selection, [_nghost-%COMP%]     .CodeMirror-line>span>span::selection{background:#d7d4f0}[_nghost-%COMP%]     .CodeMirror-line::-moz-selection, [_nghost-%COMP%]     .CodeMirror-line>span::-moz-selection, [_nghost-%COMP%]     .CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}[_nghost-%COMP%]     .cm-searching{background-color:#ffa;background-color:#ff06}[_nghost-%COMP%]     .cm-force-border{padding-right:.1px}@media print{[_nghost-%COMP%]     .CodeMirror div.CodeMirror-cursors{visibility:hidden}}[_nghost-%COMP%]     .cm-tab-wrap-hack:after{content:""}[_nghost-%COMP%]     span.CodeMirror-selectedtext{background:0 0}[_nghost-%COMP%]     .EasyMDEContainer{display:block}[_nghost-%COMP%]     .CodeMirror-rtl pre{direction:rtl}[_nghost-%COMP%]     .EasyMDEContainer.sided--no-fullscreen{display:flex;flex-direction:row;flex-wrap:wrap}[_nghost-%COMP%]     .EasyMDEContainer .CodeMirror{box-sizing:border-box;height:auto;border:1px solid #ced4da;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:0;word-wrap:break-word}[_nghost-%COMP%]     .EasyMDEContainer .CodeMirror-scroll{cursor:text}[_nghost-%COMP%]     .EasyMDEContainer .CodeMirror-fullscreen{background:#fff;position:fixed!important;inset:50px 0 0;height:auto;z-index:8;border-right:none!important;border-bottom-right-radius:0!important}[_nghost-%COMP%]     .EasyMDEContainer .CodeMirror-sided{width:50%!important}[_nghost-%COMP%]     .EasyMDEContainer.sided--no-fullscreen .CodeMirror-sided{border-right:none!important;border-bottom-right-radius:0;position:relative;flex:1 1 auto}[_nghost-%COMP%]     .EasyMDEContainer .CodeMirror-placeholder{opacity:.5}[_nghost-%COMP%]     .EasyMDEContainer .CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}[_nghost-%COMP%]     .editor-toolbar{position:relative;-webkit-user-select:none;-o-user-select:none;user-select:none;padding:9px 10px;border-top:1px solid #ced4da;border-left:1px solid #ced4da;border-right:1px solid #ced4da;border-top-left-radius:4px;border-top-right-radius:4px}[_nghost-%COMP%]     .editor-toolbar.fullscreen{width:100%;height:50px;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}[_nghost-%COMP%]     .editor-toolbar.fullscreen:before{width:20px;height:50px;background:linear-gradient(to right,#fff 0,rgba(255,255,255,0) 100%);position:fixed;top:0;left:0;margin:0;padding:0}[_nghost-%COMP%]     .editor-toolbar.fullscreen:after{width:20px;height:50px;background:linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);position:fixed;top:0;right:0;margin:0;padding:0}[_nghost-%COMP%]     .EasyMDEContainer.sided--no-fullscreen .editor-toolbar{width:100%}[_nghost-%COMP%]     .editor-toolbar .easymde-dropdown, [_nghost-%COMP%]     .editor-toolbar button{background:0 0;display:inline-block;text-align:center;text-decoration:none!important;height:30px;margin:0;padding:0;border:1px solid transparent;border-radius:3px;cursor:pointer}[_nghost-%COMP%]     .editor-toolbar button{font-weight:700;min-width:30px;padding:0 6px;white-space:nowrap}[_nghost-%COMP%]     .editor-toolbar button.active, [_nghost-%COMP%]     .editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}[_nghost-%COMP%]     .editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}[_nghost-%COMP%]     .editor-toolbar button:after{font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}[_nghost-%COMP%]     .editor-toolbar button.heading-1:after{content:"1"}[_nghost-%COMP%]     .editor-toolbar button.heading-2:after{content:"2"}[_nghost-%COMP%]     .editor-toolbar button.heading-3:after{content:"3"}[_nghost-%COMP%]     .editor-toolbar button.heading-bigger:after{content:"\\25b2"}[_nghost-%COMP%]     .editor-toolbar button.heading-smaller:after{content:"\\25bc"}[_nghost-%COMP%]     .editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width: 700px){[_nghost-%COMP%]     .editor-toolbar i.no-mobile{display:none}}[_nghost-%COMP%]     .editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}[_nghost-%COMP%]     .EasyMDEContainer.sided--no-fullscreen .editor-statusbar{width:100%}[_nghost-%COMP%]     .editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}[_nghost-%COMP%]     .editor-statusbar .lines:before{content:"lines: "}[_nghost-%COMP%]     .editor-statusbar .words:before{content:"words: "}[_nghost-%COMP%]     .editor-statusbar .characters:before{content:"characters: "}[_nghost-%COMP%]     .editor-preview-full{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7;overflow:auto;display:none;box-sizing:border-box}[_nghost-%COMP%]     .editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;overflow:auto;display:none;box-sizing:border-box;border:1px solid #ddd;word-wrap:break-word}[_nghost-%COMP%]     .editor-preview-active-side{display:block}[_nghost-%COMP%]     .EasyMDEContainer.sided--no-fullscreen .editor-preview-active-side{flex:1 1 auto;height:auto;position:static}[_nghost-%COMP%]     .editor-preview-active{display:block}[_nghost-%COMP%]     .editor-preview{padding:10px;background:#fafafa}[_nghost-%COMP%]     .editor-preview>p{margin-top:0}[_nghost-%COMP%]     .editor-preview pre{background:#eee;margin-bottom:10px}[_nghost-%COMP%]     .editor-preview table td, [_nghost-%COMP%]     .editor-preview table th{border:1px solid #ddd;padding:5px}[_nghost-%COMP%]     .cm-s-easymde .cm-tag{color:#63a35c}[_nghost-%COMP%]     .cm-s-easymde .cm-attribute{color:#795da3}[_nghost-%COMP%]     .cm-s-easymde .cm-string{color:#183691}[_nghost-%COMP%]     .cm-s-easymde .cm-header-1{font-size:calc(1.375rem + 1.5vw)}[_nghost-%COMP%]     .cm-s-easymde .cm-header-2{font-size:calc(1.325rem + .9vw)}[_nghost-%COMP%]     .cm-s-easymde .cm-header-3{font-size:calc(1.3rem + .6vw)}[_nghost-%COMP%]     .cm-s-easymde .cm-header-4{font-size:calc(1.275rem + .3vw)}[_nghost-%COMP%]     .cm-s-easymde .cm-header-5{font-size:1.25rem}[_nghost-%COMP%]     .cm-s-easymde .cm-header-6{font-size:1rem}[_nghost-%COMP%]     .cm-s-easymde .cm-header-1, [_nghost-%COMP%]     .cm-s-easymde .cm-header-2, [_nghost-%COMP%]     .cm-s-easymde .cm-header-3, [_nghost-%COMP%]     .cm-s-easymde .cm-header-4, [_nghost-%COMP%]     .cm-s-easymde .cm-header-5, [_nghost-%COMP%]     .cm-s-easymde .cm-header-6{margin-bottom:.5rem;line-height:1.2}[_nghost-%COMP%]     .cm-s-easymde .cm-comment{background:rgba(0,0,0,.05);border-radius:2px}[_nghost-%COMP%]     .cm-s-easymde .cm-link{color:#7f8c8d}[_nghost-%COMP%]     .cm-s-easymde .cm-url{color:#aab2b3}[_nghost-%COMP%]     .cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}[_nghost-%COMP%]     .editor-toolbar .easymde-dropdown{position:relative;background:linear-gradient(to bottom right,#fff 0,#fff 84%,#333 50%,#333 100%);border-radius:0;border:1px solid #fff}[_nghost-%COMP%]     .editor-toolbar .easymde-dropdown:hover{background:linear-gradient(to bottom right,#fff 0,#fff 84%,#333 50%,#333 100%)}[_nghost-%COMP%]     .easymde-dropdown-content{display:block;visibility:hidden;position:absolute;background-color:#f9f9f9;box-shadow:0 8px 16px #0003;padding:8px;z-index:2;top:30px}[_nghost-%COMP%]     .easymde-dropdown:active .easymde-dropdown-content, [_nghost-%COMP%]     .easymde-dropdown:focus .easymde-dropdown-content, [_nghost-%COMP%]     .easymde-dropdown:focus-within .easymde-dropdown-content{visibility:visible}[_nghost-%COMP%]     .easymde-dropdown-content button{display:block}[_nghost-%COMP%]     span[data-img-src]:after{content:"";background-image:var(--bg-image);display:block;max-height:100%;max-width:100%;background-size:contain;height:0;padding-top:var(--height);width:var(--width);background-repeat:no-repeat}[_nghost-%COMP%]     .CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:rgba(255,0,0,.15)}',
            ],
          });
        }
        return l;
      })();
    },
    21420: (se, U, $) => {
      $.d(U, { N: () => P });
      var C = $(10503),
        H = $(96814),
        A = $(19212);
      let P = (() => {
        class D {
          static ɵfac = function (B) {
            return new (B || D)();
          };
          static ɵmod = A.oAB({ type: D, bootstrap: [C.B] });
          static ɵinj = A.cJS({ imports: [H.ez] });
        }
        return D;
      })();
    },
  },
]);
