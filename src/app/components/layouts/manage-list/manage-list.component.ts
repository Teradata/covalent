import { Component, HostBinding, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import { fadeAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-manage-list',
  styleUrls: ['./manage-list.component.scss'],
  templateUrl: './manage-list.component.html',
  animations: [fadeAnimation],
})
export class ManageListComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  constructor(public media: TdMediaService) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }

}
