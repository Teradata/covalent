import { RouterConfig } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { OverviewComponent }  from './overview';
import { HighlightDemoComponent } from './highlight';
import { StepsDemoComponent } from './steps';
import { ExpansionPanelDemoComponent } from './expansion-panel';
import { FileUploadDemoComponent } from './file-upload';
import { LoadingDemoComponent } from './loading';
import { MarkdownDemoComponent } from './markdown';
import { MediaDemoComponent } from './media';
import { HttpDemoComponent } from './http';
import { PipesComponent } from './pipes';

export const componentsRoutes: RouterConfig = [{
  children: [{
      component: OverviewComponent,
      path: '',
    }, {
      component: HighlightDemoComponent,
      path: 'syntax-highlighting',
    }, {
      component: StepsDemoComponent,
      path: 'steps',
    }, {
      component: ExpansionPanelDemoComponent,
      path: 'expansion-panel',
    }, {
      component: FileUploadDemoComponent,
      path: 'file-upload',
    }, {
      component: LoadingDemoComponent,
      path: 'loading',
    }, {
      component: MarkdownDemoComponent,
      path: 'markdown',
    }, {
      component: MediaDemoComponent,
      path: 'media',
    }, {
      component: HttpDemoComponent,
      path: 'http',
    }, {
      component: PipesComponent,
      path: 'pipes',
    },
  ],
  component: ComponentsComponent,
  path: 'components',
}];
