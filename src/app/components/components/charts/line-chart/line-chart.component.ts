import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { TdLineChartComponent } from '../../../../../platform/charts/line-chart';
import { TdHighlightComponent } from '../../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon,
    TdLineChartComponent,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-line-chart',
  styleUrls: ['line-chart.component.css'],
  templateUrl: 'line-chart.component.html',
})

export class LineChartDemoComponent {

}
