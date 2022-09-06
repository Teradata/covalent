import { customElement, property } from 'lit/decorators.js';
import styles from './toolbar.scss';
import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import { html } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'td-toolbar': CovalentToolbarBase;
  }
}

@customElement('td-toolbar')
export class CovalentToolbarBase extends TopAppBarBase {
  @property({ type: Number }) breadcrumbs = 0;
  @property({ type: String }) label = '';
  @property({ type: Boolean }) mini = false;

  static override styles = [styles];
  override render() {
    // Create dummy data for the toolbar breadcrumbs.
    const path: any[] = [];
    if (this.breadcrumbs > 5) {
      path.push(
        html`<span
          >Section title <td-icon>chevron_right</td-icon> ...
          <td-icon>chevron_right</td-icon>
        </span>`
      );
      path.push('Page title');
    } else {
      for (let i = 0; i < this.breadcrumbs; i++) {
        if (i == this.breadcrumbs - 1) {
          path.push(`Page title`);
        } else {
          path.push(
            html`<span>Section title <td-icon>chevron_right</td-icon> </span>`
          );
        }
      }
    }
    return html`
      <header class="mdc-top-app-bar ${this.mini ? 'mini' : ''}">
        <div class="mdc-top-app-bar__row">
          <section
            class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
          >
            <div>${this.breadcrumbs ? path : this.label}</div>
          </section>
          <section
            class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
            role="toolbar"
          >
            <slot name="iconActions" slot="actionItems"></slot>
            <slot name="buttonActions" slot="actionItems"></slot>
          </section>
        </div>
      </header>
    `;
  }
}
