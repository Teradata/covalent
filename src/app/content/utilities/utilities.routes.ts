import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from '../../components/shared/component-overview/component-overview.component';
import { TdReadmeLoaderComponent } from '../../documentation-tools/readme-loader/readme-loader.component';
import { AnimationsComponent } from './utilities-demos/animations/animations.component';
import { PipesComponent } from './utilities-demos/pipes/pipes.component';
import { FunctionsDemoComponent } from './utilities-demos/functions/functions.component';
import { UtilityStylesComponent } from './utilities-demos/utility-styles/utility-styles.component';
import { MediaServiceDemoComponent } from './utilities-demos/media/service/media.component';
import { MediaDirectiveDemoComponent } from './utilities-demos/media/directive/media.component';
import { DirectivesComponent } from './utilities-demos/directives/directives.component';

const routes: Routes = [
  {
    path: 'utilities',
    children: [
      { path: '', component: ComponentOverviewComponent, data: { category: 'utilities' } },
      {
        path: 'http-decorators',
        component: TdReadmeLoaderComponent,
        data: { resourceUrl: 'platform/http/actions/README.md' },
      },
      {
        path: 'http-service',
        component: TdReadmeLoaderComponent,
        data: { resourceUrl: 'platform/http/interceptors/README.md' },
      },
      {
        path: 'animations',
        component: AnimationsComponent,
      },
      {
        path: 'pipes',
        component: PipesComponent,
      },
      {
        path: 'functions',
        component: FunctionsDemoComponent,
      },
      {
        path: 'directives',
        component: DirectivesComponent,
      },
      {
        path: 'styling',
        component: UtilityStylesComponent,
      },
      {
        path: 'media-service',
        component: MediaServiceDemoComponent,
      },
      {
        path: 'media-directive',
        component: MediaDirectiveDemoComponent,
      },
    ],
  },
];

export const utilitiesRoutes: any = RouterModule.forChild(routes);
