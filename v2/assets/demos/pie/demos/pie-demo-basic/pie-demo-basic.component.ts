import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChartThemeSelectorService } from '../../../../../../utilities/chart-theme';

@Component({
  selector: 'pie-demo-basic',
  templateUrl: './pie-demo-basic.component.html',
  styleUrls: ['./pie-demo-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class PieDemoBasicComponent {
  // Chart config
  config: any = {
    toolbox: {
      showTitle: true,
      top: 0,
      right: '30px',
      show: true,
      feature: {
        dataView: {
          title: 'View Data',
          lang: ['Data View', 'Turn Off', 'Refresh'],
        },
      },
    },

    grid: {
      top: '0',
      bottom: '10',
      left: '0',
    },

    series: [
      {
        type: 'pie',
        itemStyle: {
          opacity: 0.95,
        },
        name: 'Product',
        radius: [0, '75%'],
        data: [
          { name: 'Latte', value: 80, itemStyle: { color: '#26B99A' } },
          { name: 'Tea', value: 50, itemStyle: { color: '#34495E' } },
          { name: 'Cocoa', value: 60, itemStyle: { color: '#BDC3C7' } },
          { name: 'Frappe', value: 122, itemStyle: { color: '#3498DB' } },
          { name: 'Milk', value: 110, itemStyle: { color: '#9B59B6' } },
          { name: 'Mocha', value: 20, itemStyle: { color: '#8abb6f' } },
        ],
      },
    ],

    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
  };

  constructor(public themeSelector: ChartThemeSelectorService) {}
}
