import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';

const routes: Routes = [
  {
    path: 'utilities',
    children: [{ path: '', component: ComponentOverviewComponent, data: { category: 'utilities' } }],
  },
];

export const utilitiesRoutes: any = RouterModule.forChild(routes);
