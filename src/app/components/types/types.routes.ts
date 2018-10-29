import { Routes, RouterModule } from '@angular/router';

import { TypesBarComponent } from './bar/bar.component';
import { TypesLineComponent } from './line/line.component';
import { TypesScatterComponent } from './scatter/scatter.component';
import { TypesCombinationComponent } from './combination/combination.component';

const routes: Routes = [{
    component: TypesBarComponent,
    path: 'bar',
  },
  {
    component: TypesLineComponent,
    path: 'line',
  },
  {
    component: TypesCombinationComponent,
    path: 'combination',
  },
  {
    component: TypesScatterComponent,
    path: 'scatter',
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);
