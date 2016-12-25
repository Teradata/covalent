import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'td-layout-card-over',
  styleUrls: ['./layout-card-over.component.scss' ],
  templateUrl: './layout-card-over.component.html',
})
export class TdLayoutCardOverComponent {

  /**
   * title in card
   */
  @Input('cardTitle') cardTitle: string;

  /**
   * subtitle in card
   */
  @Input('cardSubtitle') cardSubtitle: string;

  /**
   * card flex width %
   */
  @Input('cardWidth') cardWidth: number = 70;

  /**
   * title in card
   * @deprecated since 0.9, use cardTitle instead
   */
  @Input()
  set title(title: string) {
    /* tslint:disable-next-line */
    console.warn("title is deprecated.  Please use cardTitle instead");
    this.cardTitle = title;
  }

  /**
   * title in card
   * @deprecated since 0.9, use cardTitle instead
   */
  get title(): string {
    return this.cardTitle;
  }

  /**
   * subtitle in card
   * @deprecated since 0.9, use cardSubtitle instead
   */
  @Input()
  set subtitle(subtitle: string) {
    /* tslint:disable-next-line */
    console.warn("subtitle is deprecated.  Please use cardSubtitle instead");
    this.cardSubtitle = subtitle;
  }

  /**
   * subtitle in card
   * @deprecated since 0.9, use cardSubtitle instead
   */
  get subtitle(): string {
    return this.cardSubtitle;
  }
}
