import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// External Dependencies
import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';

import {
  CovalentCommonModule,
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentStepsModule,
  CovalentLoadingModule,
  CovalentDialogsModule,
  CovalentSearchModule,
  CovalentPagingModule,
  CovalentNotificationsModule,
  CovalentMenuModule,
  CovalentChipsModule,
  CovalentDataTableModule,
  CovalentJsonFormatterModule,
  CovalentBreadcrumbsModule,
  CovalentMessageModule,
  CovalentVirtualScrollModule,
  CovalentTabSelectModule,
} from '../../../../platform/core';
import { CovalentHighlightModule } from '../../../../platform/highlight';
import { CovalentMarkdownModule } from '../../../../platform/markdown';
import { CovalentDynamicFormsModule } from '../../../../platform/dynamic-forms';
import { CovalentFlavoredMarkdownModule } from '../../../../platform/flavored-markdown';
import { CovalentCodeEditorModule } from '../../../../platform/code-editor';
import { CovalentTextEditorModule } from '../../../../platform/text-editor';

import { HighlightDemoComponent } from './highlight/highlight.component';
import { NavStepsDemoComponent } from './nav-steps/nav-steps.component';
import { FileInputDemoComponent } from './file-input/file-input.component';
import { LoadingDemoComponent } from './loading/loading.component';
import { MarkdownDemoComponent } from './markdown/markdown.component';
import { MessageDemoComponent } from './message/message.component';
import { JsonFormatterDemoComponent } from './json-formatter/json-formatter.component';
import { ChipsDemoComponent } from './chips/chips.component';
import { DialogsDemoComponent } from './dialogs/dialogs.component';
import { PagingDemoComponent } from './paging/paging.component';
import { BreadcrumbDemoComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchDemoComponent } from './search/search.component';
import { TabSelectDemoComponent } from './tab-select/tab-select.component';
import { DynamicFormsDemoComponent } from './dynamic-forms/dynamic-forms.component';
import { CodeEditorDemoComponent } from './code-editor/code-editor.component';
import { TextEditorDemoComponent } from './text-editor/text-editor.component';
import { NotificationsDemoComponent } from './notifications/notifications.component';
import { FlavoredMarkdownDemoComponent } from './flavored-markdown/flavored-markdown.component';
import { SidesheetDemoComponent } from './sidesheet/sidesheet.component';

import { DocumentationToolsModule } from '../../../documentation-tools';

import { CovalentMarkdownNavigatorModule } from '@covalent/markdown-navigator';
import { CovalentSidesheetModule } from '@covalent/core/sidesheet';

@NgModule({
  declarations: [
    HighlightDemoComponent,
    NavStepsDemoComponent,
    FileInputDemoComponent,
    LoadingDemoComponent,
    MarkdownDemoComponent,
    MessageDemoComponent,
    JsonFormatterDemoComponent,
    ChipsDemoComponent,
    DialogsDemoComponent,
    PagingDemoComponent,
    SearchDemoComponent,
    DynamicFormsDemoComponent,
    CodeEditorDemoComponent,
    TextEditorDemoComponent,
    NotificationsDemoComponent,
    BreadcrumbDemoComponent,
    FlavoredMarkdownDemoComponent,
    TabSelectDemoComponent,
    SidesheetDemoComponent,
    // External Dependencies
  ],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatRadioModule,
    MatSidenavModule,
    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentFileModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentMarkdownModule,
    CovalentChipsModule,
    CovalentJsonFormatterModule,
    CovalentDataTableModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentMessageModule,
    CovalentVirtualScrollModule,
    CovalentCodeEditorModule,
    CovalentTextEditorModule,
    CovalentBreadcrumbsModule,
    CovalentFlavoredMarkdownModule,
    CovalentSidesheetModule,
    CovalentMarkdownNavigatorModule,
    DocumentationToolsModule,
    CovalentTabSelectModule,
    TranslateModule,
  ],
})
export class ComponentDemosModule {}
