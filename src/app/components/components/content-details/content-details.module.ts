import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { CovalentExpansionPanelModule, CovalentMediaModule, CovalentCommonModule } from '../../../../platform/core';
import { RouterModule } from '@angular/router';

import { ContentDetailsComponent } from './content-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { contentDetailsRoutes } from './content-details.routes';
import { ContentOverviewComponent } from './content-overview/content-overview.component';
import { ContentApiComponent } from './content-api/content-api.component';
import { ContentExamplesComponent } from './content-examples/content-examples.component';
import { ComponentDemosModule } from '../component-demos';
import { PortalModule } from '@angular/cdk/portal';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { MarkdownDemoComponent } from '../component-demos/markdown/markdown.component';
import { SidesheetDemoComponent } from '../component-demos/sidesheet/sidesheet.component';
import { BreadcrumbDemoComponent } from '../component-demos/breadcrumbs/breadcrumbs.component';
import { HelpDemoComponent } from '../component-demos/help/help.component';
import { ChipsDemoComponent } from '../component-demos/chips/chips.component';
import { DialogsDemoComponent } from '../component-demos/dialogs/dialogs.component';
import { DynamicFormsDemoComponent } from '../component-demos/dynamic-forms/dynamic-forms.component';
import { FileInputDemoComponent } from '../component-demos/file-input/file-input.component';
import { JsonFormatterDemoComponent } from '../component-demos/json-formatter/json-formatter.component';
import { LoadingDemoComponent } from '../component-demos/loading/loading.component';
import { SearchDemoComponent } from '../component-demos/search/search.component';
import { MessageDemoComponent } from '../component-demos/message/message.component';
import { TabSelectDemoComponent } from '../component-demos/tab-select/tab-select.component';
import { FlavoredMarkdownDemoComponent } from '../component-demos/flavored-markdown/flavored-markdown.component';
import { HighlightDemoComponent } from '../component-demos/highlight/highlight.component';
import { CodeEditorDemoComponent } from '../component-demos/code-editor/code-editor.component';

@NgModule({
  declarations: [ContentDetailsComponent, ContentOverviewComponent, ContentApiComponent, ContentExamplesComponent],
  exports: [ContentDetailsComponent],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    PortalModule,
    /** Covalent Modules */
    CovalentExpansionPanelModule,
    CovalentMediaModule,
    CovalentCommonModule,
    ComponentDemosModule,
    contentDetailsRoutes,
    DocumentationToolsModule,
  ],
  entryComponents: [
    BreadcrumbDemoComponent,
    SidesheetDemoComponent,
    HelpDemoComponent,
    JsonFormatterDemoComponent,
    LoadingDemoComponent,
    SearchDemoComponent,
    FileInputDemoComponent,
    MessageDemoComponent,
    TabSelectDemoComponent,
    DialogsDemoComponent,
    DynamicFormsDemoComponent,
    ChipsDemoComponent,
    MarkdownDemoComponent,
    FlavoredMarkdownDemoComponent,
    HighlightDemoComponent,
    CodeEditorDemoComponent,
    MarkdownDemoComponent,
  ],
})
export class ContentDetailsModule {}
