import { Routes, RouterModule } from '@angular/router';

import { AtomicTooltipComponent } from './tooltip/tooltip.component';
import { AtomicAxisComponent } from './axis/axis.component';
import { AtomicToolboxComponent } from './toolbox/toolbox.component';

const routes: Routes = [
  {
    component: AtomicTooltipComponent,
    path: 'tooltip',
  },
  {
    component: AtomicAxisComponent,
    path: 'axis',
  },
  {
    component: AtomicToolboxComponent,
    path: 'toolbox',
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);
