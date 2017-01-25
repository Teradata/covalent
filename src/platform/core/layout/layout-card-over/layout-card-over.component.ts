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

}
