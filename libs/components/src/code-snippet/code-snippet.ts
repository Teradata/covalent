import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './code-snippet.scss';
import hljs from 'highlight.js';

declare global {
  interface HTMLElementTagNameMap {
    'td-code-snippet': CovalentCodeSnippetBase;
  }
}

@customElement('td-code-snippet')
export class CovalentCodeSnippetBase extends LitElement {
  static override styles = [styles];

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

  _code = '';

  firstUpdated() {
    this._codeItems.forEach((codeEl) => {
      this._code += hljs.highlight(codeEl.textContent ?? '', {
        language: this.language ?? '',
      }).value;
      this.requestUpdate();
    });
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
      'td-code-snippet': true,
      hljs: true,
      inline: this.inline,
    };
    classes[`language-${this.language}`] = true;
    const container = document.createElement('div');
    container.innerHTML = this._code ? this._code.trim() : '<slot></slot>';

    let styleHeight;
    if (this.maxHeight && this.maxHeight > 0) {
      styleHeight = `max-height: ${this.maxHeight}px`;
    }

    return html`<pre
      style="${styleHeight}"
      part="container"
    ><code class="${classMap(classes)}">${container}</code></pre>`;
  }

  renderHeader() {
    return html`<div class="header" part="header">
      <div class="title">${this.label}</div>
      <span><slot name="actionItems"></slot></span>
    </div>`;
  }
}
