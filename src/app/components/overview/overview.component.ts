import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'overview-main',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class OverviewComponent {

  items: Object[] = [{
    color: 'deep-purple-A700',
    icon: 'insert_chart',
    route: ['types', 'bar'],
    title: 'Bar Chart',
  }, 
  {
    color: 'blue-A700',
    icon: 'show_chart',
    route: ['types', 'line'],
    title: 'Line Chart',
  }, 
  {
    color: 'teal-A700',
    icon: 'bubble_chart',
    route: ['types', 'scatter'],
    title: 'Scatter Chart',
  },
  {
    color: 'pink-A700',
    icon: 'multiline_chart',
    route: ['types', 'combination'],
    title: 'Combination Chart',
  },
  {
    color: 'amber-A700',
    icon: 'share',
    route: ['types', 'tree'],
    title: 'Tree Chart',
  },
  {
    color: 'green-A700',
    icon: 'dashboard',
    route: ['types', 'treemap'],
    title: 'Treemap Chart',
  },
  {
    color: 'yellow-A700',
    icon: 'call_split',
    route: ['types', 'sankey'],
    title: 'Sankey Chart',
  },
  {
    color: 'orange-A700',
    icon: 'grain',
    route: ['types', 'graph'],
    title: 'Graph Chart',
  },
];

atomicComponents: Object[] = [
  {
    color: 'deep-orange-A700',
    icon: 'info',
    route: ['atomic', 'tooltip'],
    title: 'Tooltip',
  },
  {
    color: 'lime-A700',
    icon: 'trending_flat',
    route: ['atomic', 'axis'],
    title: 'Axis',
  },
  {
    color: 'cyan-500',
    icon: 'art_track',
    route: ['atomic', 'toolbox'],
    title: 'Toolbox',
  },
];

  constructor(public media: TdMediaService) { }

}
