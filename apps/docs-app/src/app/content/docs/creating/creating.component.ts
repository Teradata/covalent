import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-creating',
  styleUrls: ['./creating.component.scss'],
  templateUrl: './creating.component.html',
  animations: [slideInUpAnimation],
})
export class CreatingComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
  newViewRootTypescript = `import { NewViewComponent } from './new-view/new-view.component';`;
  newViewFeatureTypescript = `imports: [ NewViewComponent ]`;
  newViewRouteTypescript = `import { NewViewComponent } from './new-view/new-view.component';`;
  newViewPathTypescript = `{ path: 'new-view', component: NewViewComponent }`;
}
