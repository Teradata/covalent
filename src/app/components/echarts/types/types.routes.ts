import { Routes, RouterModule } from '@angular/router';

import { TypesBarComponent } from './bar/bar.component';
import { TypesPieComponent } from './pie/pie.component';
import { TypesLineComponent } from './line/line.component';
import { TypesScatterComponent } from './scatter/scatter.component';
import { TypesCombinationComponent } from './combination/combination.component';
import { TypesTreeComponent } from './tree/tree.component';
import { TypesTreemapComponent } from './treemap/treemap.component';
import { TypesSankeyComponent } from './sankey/sankey.component';
import { TypesGraphComponent } from './graph/graph.component';
import { TypesWordcloudComponent } from './wordcloud/wordcloud.component';
import { TypesMapComponent } from './map/map.component';

const routes: Routes = [
  {
    component: TypesBarComponent,
    path: 'bar',
  },
  {
    component: TypesPieComponent,
    path: 'pie',
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
  {
    component: TypesTreeComponent,
    path: 'tree',
  },
  {
    component: TypesSankeyComponent,
    path: 'sankey',
  },
  {
    component: TypesGraphComponent,
    path: 'graph',
  },
  {
    component: TypesTreemapComponent,
    path: 'treemap',
  },
  {
    component: TypesWordcloudComponent,
    path: 'wordcloud',
  },
  {
    component: TypesMapComponent,
    path: 'map',
  },
];

export const moduleRoutes: any = RouterModule.forChild(routes);
