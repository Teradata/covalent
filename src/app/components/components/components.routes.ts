import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ComponentsOverviewComponent } from './overview/overview.component';
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
import { AnimationsComponent } from './animations/animations.component';
import { DataTableDemoComponent } from './data-table/data-table.component';
import { PagingDemoComponent } from './paging/paging.component';
import { SearchDemoComponent } from './search/search.component';
import { DynamicFormsDemoComponent } from './dynamic-forms/dynamic-forms.component';
import { CodeEditorDemoComponent } from './code-editor/code-editor.component';
import { TextEditorDemoComponent } from './text-editor/text-editor.component';
import { NotificationsDemoComponent } from './notifications/notifications.component';
import { VirtualScrollDemoComponent } from './virtual-scroll/virtual-scroll.component';
import { FlavoredMarkdownDemoComponent } from './flavored-markdown/flavored-markdown.component';
import { BreadcrumbDemoComponent } from './breadcrumbs/breadcrumbs.component';
import { SidesheetDemoComponent } from './sidesheet/sidesheet.component';
import { NgxTranslateDemoComponent } from './ngx-translate/ngx-translate.component';
import { TabSelectDemoComponent } from './tab-select/tab-select.component';
import { UtilitiesDemoComponent } from './utilities/utilities.component';

import {
  NavStepsDemoComponent,
  NavStepsRoute1DemoComponent,
  NavStepsRoute3DemoComponent,
  NavStepsRoute4DemoComponent,
} from './nav-steps/nav-steps.component';
import { HelpDemoComponent } from './help/help.component';

const routes: Routes = [
  {
    children: [
      {
        component: ComponentsOverviewComponent,
        path: '',
      },
      {
        component: HighlightDemoComponent,
        path: 'syntax-highlighting',
      },
      {
        component: StepsDemoComponent,
        path: 'steps',
      },
      {
        component: NavStepsDemoComponent,
        path: 'nav-steps',
        children: [
          {
            path: '',
            component: NavStepsRoute1DemoComponent,
          },
          {
            path: 'route3',
            component: NavStepsRoute3DemoComponent,
          },
          {
            path: 'route4',
            component: NavStepsRoute4DemoComponent,
          },
        ],
      },
      {
        component: ExpansionPanelDemoComponent,
        path: 'expansion-panel',
      },
      {
        component: FileInputDemoComponent,
        path: 'file-input',
      },
      {
        component: FileUploadDemoComponent,
        path: 'file-upload',
      },
      {
        component: LoadingDemoComponent,
        path: 'loading',
      },
      {
        component: MarkdownDemoComponent,
        path: 'markdown',
      },
      {
        component: FlavoredMarkdownDemoComponent,
        path: 'flavored-markdown',
      },
      {
        component: MediaDemoComponent,
        path: 'media',
      },
      {
        component: MessageDemoComponent,
        path: 'message',
      },
      {
        component: HttpDemoComponent,
        path: 'http',
      },
      {
        component: JsonFormatterDemoComponent,
        path: 'json-formatter',
      },
      {
        component: ChipsDemoComponent,
        path: 'chips',
      },
      {
        component: DialogsDemoComponent,
        path: 'dialogs',
      },
      {
        component: SearchDemoComponent,
        path: 'search',
      },
      {
        component: DirectivesComponent,
        path: 'directives',
      },
      {
        component: PipesComponent,
        path: 'pipes',
      },
      {
        component: AnimationsComponent,
        path: 'animations',
      },
      {
        component: UtilitiesDemoComponent,
        path: 'utilities',
      },
      {
        component: DataTableDemoComponent,
        path: 'data-table',
      },
      {
        component: PagingDemoComponent,
        path: 'paging',
      },
      {
        component: NotificationsDemoComponent,
        path: 'notifications',
      },
      {
        component: BreadcrumbDemoComponent,
        path: 'breadcrumbs',
      },
      {
        component: VirtualScrollDemoComponent,
        path: 'virtual-scroll',
      },
      {
        component: TabSelectDemoComponent,
        path: 'tab-select',
      },
      {
        component: DynamicFormsDemoComponent,
        path: 'dynamic-forms',
      },
      {
        component: CodeEditorDemoComponent,
        path: 'code-editor',
      },
      {
        component: TextEditorDemoComponent,
        path: 'text-editor',
      },
      {
        component: NgxTranslateDemoComponent,
        path: 'ngx-translate',
      },
      {
        component: HelpDemoComponent,
        path: 'help',
      },
      {
        component: SidesheetDemoComponent,
        path: 'sidesheet',
      },
    ],
    component: ComponentsComponent,
    path: 'components',
  },
];

export const componentsRoutes: any = RouterModule.forChild(routes);
