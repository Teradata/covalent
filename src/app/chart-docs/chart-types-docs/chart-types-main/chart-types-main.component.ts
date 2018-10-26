import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'app-chart-types-main',
  templateUrl: './chart-types-main.component.html',
  styleUrls: ['./chart-types-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ChartTypesMainComponent {

  items: Object[] = [{
    color: 'deep-purple-A700',
    icon: 'insert_chart',
    route: 'bar',
    title: 'Bar Chart',
  }, 
  {
    color: 'blue-A700',
    icon: 'show_chart',
    route: 'line',
    title: 'Line Chart',
  }, 
  {
    color: 'pink-A700',
    icon: 'multiline_chart',
    route: 'combination',
    title: 'Combination Chart',
  },
  {
    color: 'teal-A700',
    icon: 'bubble_chart',
    route: 'scatter',
    title: 'Scatter Chart',
  },
];

atomicComponents: Object[] = [
  {
    color: 'cyan-A700',
    icon: 'style',
    route: '',
    title: 'Series',
  },
  {
    color: 'deep-orange-A700',
    icon: 'info',
    route: '',
    title: 'Tooltip',
  },
  {
    color: 'lime-A700',
    icon: 'trending_flat',
    route: '',
    title: 'X-Axis',
  },
  {
    color: 'amber-A700',
    icon: 'trending_up',
    route: '',
    title: 'Y-Axis',
  },
  {
    color: 'green-A700',
    icon: 'info',
    route: '',
    title: 'Series Tooltip',
  },
  {
    color: 'orange-A700',
    icon: 'text_fields',
    route: '',
    title: 'Legend',
  },
];

  constructor(public media: TdMediaService) { }

}
