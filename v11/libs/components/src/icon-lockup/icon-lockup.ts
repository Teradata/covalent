import { LitElement, html, css, unsafeCSS, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './icon-lockup.scss?inline';
import '../typography/typography';
import '../icon/icon';

/**
 * Icon lockup
 *
 * @slot icon - Slot for a custom icon. If provided, this slot content replaces the `icon` property.
 */
@customElement('cv-icon-lockup')
export class CovalentIconLockup extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  /**
   * Whether the icon is a covalent icon.
   */
  @property({ type: Boolean, reflect: true })
  covalentIcon = false;

  /**
   * Whether the icon is filled.
   */
  @property({ type: Boolean, reflect: true })
  filledIcon = false;

  /**
   * The icon to display.
   */
  @property({ type: String })
  icon = '';

  /**
   * Scale of the component, controlling font-size and icon size.
   * Default is "1", but it can be set to other values to scale the component.
   */
  @property({ type: String })
  scale = 'body1';

  /**
   * State of the component, used to apply different styles based on status.
   * Example values might include "success", "error", etc.
   */
  @property({ type: String })
  state = 'neutral';

  /**
   * If true, the icon is displayed after the text (trailing).
   * If false, the icon is displayed before the text.
   */
  @property({ type: Boolean })
  trailingIcon = false;

  /**
   * Icon size per scale. Scales not listed fall back to the
   * corresponding typography line-height CSS variable.
   */
  private readonly ICON_SIZE_MAP: Record<string, string> = {
    headline1: '96px',
    headline2: '80px',
    headline3: '64px',
    headline4: '48px',
    headline5: '32px',
    subtitle1: '24px',
    subtitle2: '20px',
    button: '20px',
  };

  private get iconSize(): string {
    return (
      this.ICON_SIZE_MAP[this.scale] ??
      `var(--cv-typography-${this.scale}-line-height, 16px)`
    );
  }

  /**
   * Tracks if the icon slot has content.
   */
  @state() private _hasIconSlot = false;

  /**
   * Checks if there is content in the icon slot and updates `hasIconSlot`.
   */
  private checkIconSlot() {
    const slot = this.shadowRoot?.querySelector(
      'slot[name="icon"]',
    ) as HTMLSlotElement;
    this._hasIconSlot = slot && slot.assignedNodes().length > 0;
  }

  /**
   * Template method for rendering the icon. If content is provided in the
   * `icon` slot, it is displayed instead of the `icon` property.
   */
  private iconTemplate() {
    const classes = {
      'covalent-icon': this.covalentIcon,
      filled: this.filledIcon,
      hidden: this._hasIconSlot,
    };
    return html`<slot name="icon"></slot>
      <cv-icon
        class=${classMap(classes)}
        style="${`font-size: ${this.iconSize}`}"
      >
        ${this.icon}
      </cv-icon>`;
  }

  /**
   * Renders the component with icon and text. If `trailingIcon` is true,
   * the icon is displayed after the text. Otherwise, it is displayed before.
   */
  render() {
    const classes = {
      'icon-lockup': true,
      [`icon-lockup--${this.state}`]: this.state,
      'trailing-icon': this.trailingIcon,
    };

    return html`
      <cv-typography class=${classMap(classes)} scale="${this.scale}">
        ${this.iconTemplate()}
        <div class="text"><slot></slot></div>
      </cv-typography>
    `;
  }

  protected override updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    this.checkIconSlot();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon-lockup': CovalentIconLockup;
  }
}

export default CovalentIconLockup;
