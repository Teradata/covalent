import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { TdBarChartComponent } from '../../../../../platform/charts/bar-chart';
import { TdHighlightComponent } from '../../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon,
    TdBarChartComponent,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-bar-chart',
  styleUrls: ['bar-chart.component.css'],
  templateUrl: 'bar-chart.component.html',
})

export class BarChartDemoComponent {

}
