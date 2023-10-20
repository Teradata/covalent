import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ListBase } from '@material/mwc-list/mwc-list-base';
import { styles as baseStyles } from '@material/mwc-list/mwc-list.css';
import styles from './list.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-list': CovalentList;
  }
}

@customElement('cv-list')
export default class CovalentList extends ListBase {
  static override styles = [
    baseStyles,
    css`${unsafeCSS(styles)}`,
  ];
}