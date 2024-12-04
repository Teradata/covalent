import { css, html, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styles as baseStyles } from '@material/mwc-dialog/mwc-dialog.css';
import { classMap } from 'lit/directives/class-map.js';
import CovalentDialog from '../dialog/dialog';
import styles from './status-dialog.scss?inline';
import '../icon/icon';
import '../icon-button/icon-button';

declare global {
  interface HTMLElementTagNameMap {
    'cv-status-dialog': CovalentStatusDialog;
  }
}

/**
 * Status Dialog
 *
 * @slot - This element has a slot
 */
@customElement('cv-status-dialog')
export class CovalentStatusDialog extends CovalentDialog {
  @query('#details')
  _details?: HTMLSlotElement;

  /**
   * The state representation error|positive|warning
   */
  @property({ type: String })
  state: 'error' | 'positive' | 'warning' = 'error';

  /**
   * Whether the content details are expanded
   */
  @state()
  protected expandDetails = false;

  /**
   * Whether the expand details link is shown
   */
  @state()
  showDetailsLink = false;

  static override styles = [
    baseStyles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];

  protected override firstUpdated(): void {
    super.firstUpdated();
    if (this._details) {
      const detailNodes = this._details.assignedNodes({
        flatten: true,
      }) as Element[];

      // Filter out non-element nodes
      this.showDetailsLink = detailNodes.some(
        (node) => node.nodeType === Node.ELEMENT_NODE
      );
    }
  }

  toggleDetails() {
    this.expandDetails = !this.expandDetails;
  }

  private _getStatusIcon(): string {
    switch (this.state) {
      case 'positive':
        return 'check';
      default:
        return this.state;
    }
  }

  // Renders the details section in the dialog content
  renderDetails() {
    const detailsClasses = {
      'status-dialog__details': true,
      visible: this.expandDetails,
    };

    const animation = {
      open: !this.expandDetails,
      close: this.expandDetails,
    };

    const arrow = html`<cv-icon
      class="${classMap(animation)} status-dialog__arrow-icon"
      >arrow_drop_down</cv-icon
    >`;
    return html`${this.showDetailsLink
        ? html`<div>
            <span
              class="status-dialog__toggle-details"
              @click="${this.toggleDetails}"
              >${this.expandDetails ? 'Hide details' : 'Show details'} ${arrow}
            </span>
          </div>`
        : ''}
      <slot
        name="details"
        id="details"
        class="${classMap(detailsClasses)}"
      ></slot>`;
  }

  protected override renderHeading() {
    const headingClasses = {
      'status-dialog__heading': true,
      'no-heading': !this.heading,
    };
    let heading = html``;
    if (this.heading) {
      heading = html`<h2 id="title" class="mdc-dialog__title">
        ${this.heading}
      </h2>`;
    }
    return html`<span class="${classMap(headingClasses)}">
      ${heading}
      <cv-icon-button
        class="status-dialog__close-icon"
        icon="close"
        @click=${this.close}
      ></cv-icon-button>
    </span>`;
  }

  override render() {
    const classes = {
      'mdc-dialog--stacked': this.stacked,
      error: this.state === 'error',
      positive: this.state === 'positive',
      warning: this.state === 'warning',
    };

    const heading = this.renderHeading();

    const details = this.renderDetails();

    const actionsClasses = {
      'mdc-dialog__actions': !this.hideActions,
    };

    const contentClasses = {
      'mdc-dialog__content': true,
      'padding-bottom': this.hideActions,
    };

    return html` <div
      class="mdc-dialog ${classMap(classes)}"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="title"
      aria-describedby="content"
    >
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          <div class="status-dialog__container">
            <div class="status-dialog__state">
              <cv-icon>${this._getStatusIcon()}<cv-icon>
            </div>
            <div class="status-dialog__content">
              ${heading}
              <div id="content" class="${classMap(contentClasses)}">
                <slot id="contentSlot"></slot>
                ${details}
              </div>
              <footer id="actions" class="${classMap(actionsClasses)}">
                <span>
                  <slot name="secondaryAction"></slot>
                </span>
                <span>
                  <slot name="primaryAction"></slot>
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`;
  }
}

export default CovalentStatusDialog;
