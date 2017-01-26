import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'td-layout-card-over',
  styleUrls: ['./layout-card-over.component.scss' ],
  templateUrl: './layout-card-over.component.html',
})
export class TdLayoutCardOverComponent {

  /**
   * title?: string 
   * Title set in card.
   */
  @Input('cardTitle') cardTitle: string;

  /**
   * title?: string 
   * Title set in card.
   */
  @Input('cardSubtitle') cardSubtitle: string;

  /**
   * cardWidth?: string
   * Card flex width in %.
   * 
   * Defaults to 70%.
   */
  @Input('cardWidth') cardWidth: number = 70;

}
