import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-templates',
  styleUrls: ['./templates.component.scss'],
  templateUrl: './templates.component.html',
  animations: [fadeAnimation],
})
export class TemplatesComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  constructor(public media: TdMediaService) {
              }

  ngAfterViewInit(): void {
    this.media.broadcast();
  }
}
