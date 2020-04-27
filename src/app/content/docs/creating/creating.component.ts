import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-creating',
  styleUrls: ['./creating.component.scss'],
  templateUrl: './creating.component.html',
  animations: [slideInUpAnimation],
})
export class CreatingComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  newViewRootTypescript: string = `import { NewViewComponent } from './new-view/new-view.component';`;
  newViewFeatureTypescript: string = `imports: [ NewViewComponent ]`;
  newViewRouteTypescript: string = `import { NewViewComponent } from './new-view/new-view.component';`;
  newViewPathTypescript: string = `{ path: 'new-view', component: NewViewComponent }`;
}
