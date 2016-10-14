import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ComponentsOverviewComponent }  from './overview/overview.component';
import { HighlightDemoComponent } from './highlight/highlight.component';
import { StepsDemoComponent } from './steps/steps.component';
import { ExpansionPanelDemoComponent } from './expansion-panel/expansion-panel.component';
import { FileUploadDemoComponent } from './file-upload/file-upload.component';
import { LoadingDemoComponent } from './loading/loading.component';
import { MarkdownDemoComponent } from './markdown/markdown.component';
import { MediaDemoComponent } from './media/media.component';
import { HttpDemoComponent } from './http/http.component';
import { JsonFormatterDemoComponent } from './json-formatter/json-formatter.component';
import { ChipsDemoComponent } from './chips/chips.component';
import { DialogsDemoComponent } from './dialogs/dialogs.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChartsDemoComponent } from './charts/charts.component';
import { DataTableDemoComponent } from './data-table/data-table.component';
import { MaterialComponentsComponent } from './material-components/material-components.component';

const routes: Routes = [{
  children: [{
      component: ComponentsOverviewComponent,
      path: '',
    }, {
      component: MaterialComponentsComponent,
      path: 'material-components',
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
      component: JsonFormatterDemoComponent,
      path: 'json-formatter',
    }, {
      component: ChipsDemoComponent,
      path: 'chips',
    }, {
      component: DialogsDemoComponent,
      path: 'dialogs',
    }, {
      component: DirectivesComponent,
      path: 'directives',
    }, {
      component: PipesComponent,
      path: 'pipes',
    }, {
      component: ChartsDemoComponent,
      path: 'charts',
    }, {
      component: DataTableDemoComponent,
      path: 'data-table',
    },
  ],
  component: ComponentsComponent,
  path: 'components',
}];

export const componentsRoutes: any = RouterModule.forChild(routes);
