import { Routes, RouterModule } from '@angular/router';

import { TypesBarComponent } from './bar/bar.component';
import { TypesLineComponent } from './line/line.component';
import { TypesScatterComponent } from './scatter/scatter.component';
import { TypesCombinationComponent } from './combination/combination.component';
import { TypesTreeComponent } from './tree/tree.component';
import { TypesSankeyComponent } from './sankey/sankey.component';

const routes: Routes = [{
    component: TypesBarComponent,
    path: 'bar',
  }, {
    component: TypesLineComponent,
    path: 'line',
  }, {
    component: TypesCombinationComponent,
    path: 'combination',
  }, {
    component: TypesScatterComponent,
    path: 'scatter',
  }, {
    component: TypesTreeComponent,
    path: 'tree',
  }, {
    component: TypesSankeyComponent,
    path: 'sankey',
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);
