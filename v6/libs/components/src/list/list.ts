import { ListBase } from '@material/mwc-list/mwc-list-base';
import { styles } from '@material/mwc-list/mwc-list.css';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import CovalentNavRailListItem from './nav-list-item';

declare global {
  interface HTMLElementTagNameMap {
    'cv-list': CovalentList;
  }
}

@customElement('cv-list')
export class CovalentList extends ListBase {
  @queryAssignedElements({ flatten: true })
  slotElements!: CovalentNavRailListItem[];

  @property({ type: Boolean, reflect: true })
  navOpen = false;

  static override styles = [styles];

  override async getUpdateComplete() {
    this.slotElements.forEach((el) => {
      el.setAttribute('navopen', this.navOpen.toString());
    });

    return await super.getUpdateComplete();
  }

  override attributeChangedCallback(name: string, _old: string, value: string) {
    super.attributeChangedCallback(name, _old, value);

    if (name === 'navopen') {
      this.slotElements.forEach((el) => {
        if (value === 'true') {
          el.setAttribute('navopen', value);
        } else {
          el.removeAttribute('navopen');
        }
      });
    }
  }
}

export default CovalentList;
