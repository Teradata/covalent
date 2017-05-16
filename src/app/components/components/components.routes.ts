import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ComponentsOverviewComponent }  from './overview/overview.component';
import { HighlightDemoComponent } from './highlight/highlight.component';
import { StepsDemoComponent } from './steps/steps.component';
import { ExpansionPanelDemoComponent } from './expansion-panel/expansion-panel.component';
import { FileInputDemoComponent } from './file-input/file-input.component';
import { FileUploadDemoComponent } from './file-upload/file-upload.component';
import { LoadingDemoComponent } from './loading/loading.component';
import { MarkdownDemoComponent } from './markdown/markdown.component';
import { MediaDemoComponent } from './media/media.component';
import { MessageDemoComponent } from './message/message.component';
import { HttpDemoComponent } from './http/http.component';
import { JsonFormatterDemoComponent } from './json-formatter/json-formatter.component';
import { ChipsDemoComponent } from './chips/chips.component';
import { DialogsDemoComponent } from './dialogs/dialogs.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { DataTableDemoComponent } from './data-table/data-table.component';
import { PagingDemoComponent } from './paging/paging.component';
import { SearchDemoComponent } from './search/search.component';
import { DynamicFormsDemoComponent } from './dynamic-forms/dynamic-forms.component';
import { NotificationsDemoComponent } from './notifications/notifications.component';
import { NgxChartsDemoComponent } from './ngx-charts/ngx-charts.component';
import { NgxTranslateDemoComponent } from './ngx-translate/ngx-translate.component';

const routes: Routes = [{
  children: [{
      component: ComponentsOverviewComponent,
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
      component: FileInputDemoComponent,
      path: 'file-input',
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
      component: MessageDemoComponent,
      path: 'message',
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
      component: SearchDemoComponent,
      path: 'search',
    }, {
      component: DirectivesComponent,
      path: 'directives',
    }, {
      component: PipesComponent,
      path: 'pipes',
    }, {
      component: DataTableDemoComponent,
      path: 'data-table',
    }, {
      component: PagingDemoComponent,
      path: 'paging',
    }, {
      component: NotificationsDemoComponent,
      path: 'notifications',
    }, {
      component: DynamicFormsDemoComponent,
      path: 'dynamic-forms',
    }, {
      component: NgxChartsDemoComponent,
      path: 'ngx-charts',
    }, {
      component: NgxTranslateDemoComponent,
      path: 'ngx-translate',
    },
  ],
  component: ComponentsComponent,
  path: 'components',
}];

export const componentsRoutes: any = RouterModule.forChild(routes);
