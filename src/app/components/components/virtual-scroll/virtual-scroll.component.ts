import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { TdCollapseAnimation } from '@covalent/core';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'virtual-scroll-demo',
  styleUrls: ['./virtual-scroll.component.scss'],
  templateUrl: './virtual-scroll.component.html',
  animations: [
    slideInDownAnimation,
    TdCollapseAnimation(),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollDemoComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  toggleDemoCode: boolean = false;
  data: any[] = [];

  ngOnInit(): void {
    for (let index: number = 1; index <= 1200; index++) {
      this.data.push({index: index, name: 'element-' + index});
    }
  }

}
