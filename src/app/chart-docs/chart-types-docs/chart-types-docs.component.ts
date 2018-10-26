import { Component } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/dataZoom';

import { tdCollapseAnimation, tdRotateAnimation, tdFadeInOutAnimation } from '@covalent/core/common';

@Component({
  selector: 'app-chart-types-docs',
  templateUrl: './chart-types-docs.component.html',
  styleUrls: ['./chart-types-docs.component.scss'],
  animations: [tdCollapseAnimation, tdRotateAnimation, tdFadeInOutAnimation],
})
export class ChartTypesDocsComponent {
  
  miniNav: boolean = false;

  routes: Object[] = [
    {
      description: 'Atomic and Config Options',
      icon: 'insert_chart',
      route: 'bar',
      title: 'Bar',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'show_chart',
      route: 'line',
      title: 'Line',
    },
    {
      description: 'Atomic and Config Options',
      icon: 'bubble_chart',
      route: 'scatter',
      title: 'Scatter',
    },
    {
      description: 'Example using line/bar and 2 y-axis',
      icon: 'multiline_chart',
      route: 'combination',
      title: 'Combination',
    },
  ];

  atomicComponentRoutes: Object[] = [
    {
      description: 'Series component, determines chart type and series styling.',
      icon: 'style',
      route: '',
      title: 'Series',
    },
    {
      description: 'Global tooltip component, enable/disable and other tooltip level options.',
      icon: 'info',
      route: '',
      title: 'Tooltip',
    },
    {
      description: 'X-Axis component, x-axis styling and other options',
      icon: 'trending_flat',
      route: '',
      title: 'X-Axis',
    },
    {
      description: 'Y-Axis component, y-axis styling and other options',
      icon: 'trending_up',
      route: '',
      title: 'Y-Axis',
    },
    {
      description: 'Chart legend options, including position and styling.',
      icon: 'text_fields',
      route: '',
      title: 'Legend',
    },
    {
      description: 'Series Tooltip, extends from main tooltip settings and provides specific series level control.',
      icon: 'info',
      route: '',
      title: 'Series Tooltip',
    },
  ];

  constructor(public media: TdMediaService) {
  }

  toggleMiniNav(): void {
    this.miniNav = !this.miniNav;
  }
}
