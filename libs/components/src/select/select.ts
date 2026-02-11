import { css, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { MDCSelectAdapter } from '@material/select';
import { SelectBase } from '@material/mwc-select/mwc-select-base';
import { styles as baseStyles } from '@material/mwc-select/mwc-select.css';
import styles from './select.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-select': CovalentSelect;
  }
}

@customElement('cv-select')
export class CovalentSelect extends SelectBase {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
    baseStyles,
  ];

  /*
    Use two line layout.
  */
  @property({ type: Boolean, reflect: true })
  twoLine = false;

  /*
   Use the text style instead of outlined or filled.
  */
  @property({ type: Boolean, reflect: true })
  text = false;

  override async updated(
    changedProperties: Map<string | number | symbol, unknown>,
  ) {
    super.updated(changedProperties);
    if (changedProperties.has('value')) {
      await this.updateComplete;
      await this.layoutOptions();
      await this.layout();
    }
  }

  protected override async firstUpdated() {
    await super.firstUpdated();
    this.normalizeItemValues();
  }

  protected override onItemsUpdated() {
    super.onItemsUpdated();
    this.normalizeItemValues();
  }

  private normalizeItemValues() {
    for (const item of this.items) {
      item.value = String(item.value ?? '');
    }
  }

  override async layout(updateItems = true) {
    await super.layout(updateItems);

    if (this.outlined && this.outlineOpen && this.labelElement) {
      await this.updateComplete;
      const realWidth = this.labelElement.scrollWidth;
      const scaledWidth = realWidth * 0.75;
      if (scaledWidth > this.outlineWidth) {
        this.outlineWidth = scaledWidth;
      }
    }

    if (this.outlined && !this.value && this.selectedText) {
      const labelElement = this.labelElement;
      if (labelElement) {
        labelElement.floatingLabelFoundation.float(true);
        this.outlineOpen = true;
        await this.updateComplete;
        const labelWidth = labelElement.floatingLabelFoundation.getWidth();
        this.outlineWidth = labelWidth;
      }
    }
  }

  override render() {
    const classes = {
      'mdc-select--disabled': this.disabled,
      'mdc-select--no-label': !this.label,
      'mdc-select--filled': !this.outlined,
      'mdc-select--outlined': this.outlined,
      'mdc-select--text': this.text,
      'mdc-select--with-twoline': this.twoLine,
      'mdc-select--with-leading-icon': !!this.icon,
      'mdc-select--required': this.required,
      'mdc-select--invalid': !this.isUiValid,
      'mdc-select--has-value': !!this.value,
    };

    const labelledby = !this.label ? 'label' : undefined;
    const describedby = this.shouldRenderHelperText ? 'helper-text' : undefined;

    return html` <div class="mdc-select ${classMap(classes)}">
        <input
          class="formElement"
          name="${this.name}"
          .value="${this.value}"
          hidden
          ?disabled="${this.disabled}"
          ?required=${this.required}
        />
        <!-- @ts-ignore -->
        <div
          class="mdc-select__anchor"
          aria-autocomplete="none"
          role="combobox"
          aria-expanded=${this.menuOpen}
          aria-invalid=${!this.isUiValid}
          aria-haspopup="listbox"
          aria-labelledby=${ifDefined(labelledby)}
          aria-required=${this.required}
          aria-describedby=${ifDefined(describedby)}
          @click=${this.onClick}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
          @keydown=${this.onKeydown}
        >
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            ${this.renderSelectedText()}
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
              class="mdc-select__dropdown-icon-graphic"
              viewBox="7 10 10 5"
              focusable="false"
            >
              <polygon
                class="mdc-select__dropdown-icon-inactive"
                stroke="none"
                fill-rule="evenodd"
                points="7 10 12 15 17 10"
              ></polygon>
              <polygon
                class="mdc-select__dropdown-icon-active"
                stroke="none"
                fill-rule="evenodd"
                points="7 15 12 10 17 15"
              ></polygon>
            </svg>
          </span>
          ${!this.text ? this.renderLineRipple() : nothing}
        </div>
        ${this.renderMenu()}
      </div>
      ${this.renderHelperText()}`;
  }

  protected renderSelectedText() {
    if (this.twoLine && this.selectedText) {
      return html`
        <span class="mdc-select__selected-text">${this.selectedText}</span>
        <span class="mdc-select__selected-text-secondary"
          ><slot name="selected-secondary"></slot
        ></span>
      `;
    }
    return html`<span class="mdc-select__selected-text"
      >${this.selectedText}</span
    >`;
  }

  protected createAdapter(): MDCSelectAdapter {
    return {
      ...super.createAdapter(),
      getMenuItemTextAtIndex: (index) => {
        const menuElement = this.menuElement;
        if (!menuElement) {
          return '';
        }

        const element = menuElement.items[index];

        if (!element) {
          return '';
        }

        if (element.hasAttribute('twoline')) {
          let onlyRawText = '';
          for (let i = 0; i < element.childNodes.length; i++) {
            const node = element.childNodes[i];
            const nodeText = node.textContent?.trim() ?? '';
            if (node.nodeType === Node.TEXT_NODE && nodeText.length > 0) {
              onlyRawText += node.textContent?.trim() + ' ';
            }
          }
          return onlyRawText.trim();
        }
        return element.text;
      },
    };
  }
}

export default CovalentSelect;
