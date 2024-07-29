import { css, LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './code-snippet.scss?inline';
import hljs from 'highlight.js/lib/common';

declare global {
  interface HTMLElementTagNameMap {
    'cv-code-snippet': CovalentCodeSnippet;
  }
}

@customElement('cv-code-snippet')
export class CovalentCodeSnippet extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  @property()
  language?: string;

  @property()
  label?: string;

  @property({ type: Boolean, reflect: true })
  inline = false;

  @property({ type: Boolean, reflect: true })
  hideHeader = false;

  @queryAssignedNodes({})
  _codeItems!: Array<Node>;

  @property()
  maxHeight?: number;

  private _code = '';

  highlight() {
    this._code = '';
    this._codeItems.forEach((codeEl) => {
      this._code += hljs.highlight(codeEl.textContent ?? '', {
        language: this.language ?? '',
      }).value;
      this.requestUpdate();
    });
  }

  firstUpdated() {
    this.highlight();
  }

  override render() {
    let container = html`${this.renderContainer()}`;
    if (!this.hideHeader) {
      container = html`${this.renderHeader()}${this.renderContainer()}`;
    }
    return container;
  }

  renderContainer() {
    const classes: { [key: string]: boolean } = {
      'cv-code-snippet': true,
      hljs: true,
      inline: this.inline,
    };
    classes[`language-${this.language}`] = true;
    const container = document.createElement('div');
    container.innerHTML = this._code.trim();

    let styleHeight;
    if (this.maxHeight && this.maxHeight > 0) {
      styleHeight = `max-height: ${this.maxHeight}px`;
    }

    return html` <pre
        style="${styleHeight}"
        part="container"
      ><code part="code" class="${classMap(classes)}">${container}</code></pre>
      <slot class="code-slot"></slot>`;
  }

  renderHeader() {
    return html`<div class="header" part="header">
      <div class="title">${this.label}</div>
      <span><slot name="actionItems"></slot></span>
    </div>`;
  }
}

export default CovalentCodeSnippet;
