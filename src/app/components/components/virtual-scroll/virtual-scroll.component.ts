import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

import { } from '../../../../platform/core';

@Component({
  selector: 'virtual-scroll-demo',
  styleUrls: ['./virtual-scroll.component.scss'],
  templateUrl: './virtual-scroll.component.html',
  animations: [slideInDownAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollDemoComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  randomData: any[] = [];

  ngOnInit(): void {
    for (let index: number = 1; index <= 10000; index++) {
      this.randomData.push({index: index, name: 'element-' + index});
    }
  }

}
