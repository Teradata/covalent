import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'td-layout-card-over',
  styleUrls: [ 'layout-card-over.component.scss' ],
  templateUrl: 'layout-card-over.component.html',
})
export class TdLayoutCardOverComponent {

  /**
   * title in card
   */
  @Input('title') title: string; // deprecated
  @Input('cardTitle') cardTitle: string;

  /**
   * subtitle in card
   */
  @Input('subtitle') subtitle: string; // deprecated
  @Input('cardSubTitle') cardSubTitle: string;

  /**
   * card flex width %
   */
  @Input('cardWidth') cardWidth: number = 70;
}
