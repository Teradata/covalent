import { Routes, RouterModule } from '@angular/router';
import { TdReadmeLoaderComponent } from '../../documentation-tools/readme-loader/readme-loader.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { UtilitySASSMixinsComponent } from './utility-sass-mixins/utility-sass-mixins.component';
import { IconsComponent } from './icons/icons.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    children: [
      {
        path: '',
        redirectTo: 'get-started',
      },
      {
        path: 'get-started',
        children: [
          { path: '', redirectTo: 'what-is-covalent' },
          { path: 'overview', component: TdReadmeLoaderComponent, data: { resourceUrl: 'docs/GETTING_STARTED.md' } },
          { path: 'angular', component: AngularMaterialComponent },
          {
            path: 'what-is-covalent',
            component: TdReadmeLoaderComponent,
            data: { resourceUrl: 'docs/WHAT_IS_COVALENT.md' },
          },
        ],
      },
      {
        path: 'theming',
        children: [
          { path: '', redirectTo: 'icon-sets' },
          { path: 'sass-mixins', component: UtilitySASSMixinsComponent },
          { path: 'icon-sets', component: IconsComponent },
          { path: 'custom-theme', component: ThemeComponent },
        ],
      },
    ],
    path: 'docs',
  },
];

export const docsRoutes: any = RouterModule.forChild(routes);
