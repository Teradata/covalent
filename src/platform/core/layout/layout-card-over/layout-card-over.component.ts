import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'td-layout-card-over',
  styleUrls: ['./layout-card-over.component.scss' ],
  templateUrl: './layout-card-over.component.html',
})
export class TdLayoutCardOverComponent {

  /**
   * cardTitle?: string
   *
   * Title set in card.
   */
  @Input('cardTitle') cardTitle: string;

  /**
   * cardSubtitle?: string
   *
   * Subtitle set in card.
   */
  @Input('cardSubtitle') cardSubtitle: string;

  /**
   * cardWidth?: string
   *
   * Card flex width in %.
   * Defaults to 70%.
   */
  @Input('cardWidth') cardWidth: number = 70;

  /**
   * color?: string
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, primary is used.
   */
  @Input('color') color: string = 'primary';

}
