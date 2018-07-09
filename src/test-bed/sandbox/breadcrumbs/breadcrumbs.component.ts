import { Component } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'breadcrumbs-demo',
  styleUrls: [ './breadcrumbs.component.scss' ],
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbDemoComponent {

  constructor(public media: TdMediaService) { }
}
