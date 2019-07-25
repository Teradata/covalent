import { Component, ChangeDetectorRef } from '@angular/core';
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
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  animations: [tdCollapseAnimation, tdRotateAnimation, tdFadeInOutAnimation],
})
export class ComponentsComponent {
  
  miniNav: boolean = false;

  routes: Object[] = [
    {
      icon: 'insert_chart',
      route: ['types', 'bar'],
      title: 'Bar',
    },
    {
      icon: 'show_chart',
      route: ['types', 'line'],
      title: 'Line',
    },
    {
      icon: 'bubble_chart',
      route: ['types', 'scatter'],
      title: 'Scatter',
    },
    {
      icon: 'multiline_chart',
      route: ['types', 'combination'],
      title: 'Combination',
    },
    {
      icon: 'share',
      route: ['types', 'tree'],
      title: 'Tree',
    },
    {
      icon: 'dashboard',
      route: ['types', 'treemap'],
      title: 'Treemap',
    },
    {
      icon: 'call_split',
      route: ['types', 'sankey'],
      title: 'Sankey',
    },
    {
      icon: 'grain',
      route: ['types', 'graph'],
      title: 'Graph',
    },
  ];

  atomicComponentRoutes: Object[] = [
    {
      description: 'Chart/Series Tooltip component, enable/disable and other tooltip level options.',
      icon: 'info',
      route: ['atomic', 'tooltip'],
      title: 'Tooltip',
    },
    {
      description: 'X and Y Axis components styling and other options',
      icon: 'trending_flat',
      route: ['atomic', 'axis'],
      title: 'Axis',
    },
    {
      description: 'Toolbox options for refreshing, saving chart as an image, data zoom, data view and on the fly chart types.',
      icon: 'art_track',
      route: ['atomic', 'toolbox'],
      title: 'Toolbox',
    },
    {
      description: `Dataset options, allows a convenient way to separate data and styles and enables reuse by different series. 
      It also enables data encoding.`,
      icon: 'view_list',
      route: ['atomic', 'dataset'],
      title: 'Dataset',
    },
  ];

  constructor(public media: TdMediaService,
              private _changeDetectorRef: ChangeDetectorRef) {
  }

  toggleMiniNav(): void {
    this.miniNav = !this.miniNav;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    }, 100);
  }
}
