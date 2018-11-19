import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'types-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TypesGraphComponent {

  // Chart config
  config: any = {
    tooltip: {},
    xAxis: { show: false },
    yAxis: { show: false },
    series: [
      {
        type: 'graph',
        layout: 'none',
        data: [{ x: -739.36383, y: -404.26147, id: 'jquery', name: 'jquery',
        symbolSize: 40.7252817, itemStyle: { normal: { color: '#4f19c7' } } },
      { x: -134.2215, y: -862.7517, id: 'backbone', name: 'backbone',
        symbolSize: 60.1554675, itemStyle: { normal: { color: '#c71969' } } },
      { x: -818.97516, y: 624.50604, id: 'angular', name: 'angular',
        symbolSize: 60.7816025, itemStyle: { normal: { color: '#c71969' } } },
      { x: -710.59204, y: 120.37976, id: 'socket.io', name: 'socket.io',
        symbolSize: 19.818306, itemStyle: { normal: { color: '#c71919' } } },
      { x: -127.03764, y: 477.03778, id: 'underscore', name: 'underscore',
        symbolSize: 40.0429485, itemStyle: { normal: { color: '#c76919' } } },
      { x: -338.03128, y: -404.62427, id: 'vue.js', name: 'vue.js',
        symbolSize: 80.163814, itemStyle: { normal: { color: '#8419c7' } } },
      { x: 118.30771, y: -380.16626, id: 'lodash', name: 'lodash',
        symbolSize: 18.935852, itemStyle: { normal: { color: '#c76919' } } },
      { x: 381.10724, y: -531.28235, id: 'dateformat', name: 'dateformat',
        symbolSize: 30.3863845, itemStyle: { normal: { color: '#c71969' } } },
      { x: -644.2716, y: -230.14833, id: 'express', name: 'express',
        symbolSize: 49.608772, itemStyle: { normal: { color: '#c71919' } } }],
        edges: [
          { source: 'jquery', target: 'backbone' },
          { source: 'jquery', target: 'vue.js' },
          { source: 'jquery', target: 'lodash' },
          { source: 'jquery', target: 'dateformat' },
          { source: 'backbone', target: 'underscore' },
          { source: 'faye', target: 'cookiejar' },
          { source: 'socket.io', target: 'express' },
          { source: 'socket.io', target: 'faye' },
          { source: 'vue.js', target: 'underscore' },
          { source: 'vue.js', target: 'dateformat' },
          { source: 'express', target: 'socket.io' },
          { source: 'express', target: 'dateformat' },
        ],
        label: {
          emphasis: {
            position: 'right',
            show: true,
          },
        },
        roam: true,
        focusNodeAdjacency: true,
        lineStyle: {
          normal: {
            width: 0.5,
            curveness: 0.3,
            opacity: 0.7,
          },
        },
      },
    ],
  };
}
