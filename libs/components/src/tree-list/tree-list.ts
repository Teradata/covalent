import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './tree-list.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-tree-list': CovalentTreeList;
  }
}
// Wraps cv-tree-list-item components
@customElement('cv-tree-list')
export class CovalentTreeList extends LitElement {
  static override styles = [
    css`
      ${unsafeCSS(styles)}
    `,
  ];
  override render() {
    return html`
      <div class="container" part="container">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
// Create event listener for cv-tree-list-item's select event.
document.addEventListener('select', (e: Event) => {
  handleSelect(e);
});
const handleSelect = (e: Event): void => {
  // All cv-tree-list-item components.
  const items: any[] = Array.from(
    document?.querySelectorAll('cv-tree-list-item'),
  );

  // Currently selected item.
  const target: HTMLElement = e.target as HTMLElement;
  const current = target.shadowRoot?.querySelector('div.itemContent');

  // Find previously selected element and remove the styling.
  items.forEach((item) => {
    item.shadowRoot
      ?.querySelector('div.itemContent')
      ?.classList.remove('selected');
  });

  // Add the selected styling to the currently selected item.
  current?.classList.add('selected');
};

export default CovalentTreeList;
