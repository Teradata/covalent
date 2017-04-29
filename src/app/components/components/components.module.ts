import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { componentsRoutes } from './components.routes';

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
import { MaterialComponentsComponent, DialogComponent } from './material-components/material-components.component';
import { NotificationsDemoComponent } from './notifications/notifications.component';
import { NgxChartsDemoComponent } from './ngx-charts/ngx-charts.component';
import { NgxTranslateDemoComponent } from './ngx-translate/ngx-translate.component';

// External Dependencies
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

import { MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdMenuModule, MdInputModule, MdButtonToggleModule,
         MdProgressSpinnerModule, MdSelectModule, MdSlideToggleModule, MdDialogModule, MdSnackBarModule, MdToolbarModule,
         MdTabsModule, MdSidenavModule, MdTooltipModule, MdCheckboxModule, MdRadioModule, MdCoreModule, MdAutocompleteModule,
         MdProgressBarModule, MdSliderModule, MdChipsModule, MdGridListModule, MdRippleModule } from '@angular/material';

import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentFileModule,
         CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
         CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentDataTableModule, CovalentJsonFormatterModule,
         } from '../../../platform/core';
import { CovalentHighlightModule } from '../../../platform/highlight';
import { CovalentMarkdownModule } from '../../../platform/markdown';
import { CovalentDynamicFormsModule } from '../../../platform/dynamic-forms';

import { DocumentationToolsModule } from '../../documentation-tools';

@NgModule({
  declarations: [
    ComponentsComponent,
    ComponentsOverviewComponent,
    HighlightDemoComponent,
    StepsDemoComponent,
    ExpansionPanelDemoComponent,
    FileInputDemoComponent,
    FileUploadDemoComponent,
    LoadingDemoComponent,
    MarkdownDemoComponent,
    MediaDemoComponent,
    HttpDemoComponent,
    JsonFormatterDemoComponent,
    ChipsDemoComponent,
    DialogsDemoComponent,
    DirectivesComponent,
    PipesComponent,
    DataTableDemoComponent,
    PagingDemoComponent,
    SearchDemoComponent,
    DynamicFormsDemoComponent,
    MaterialComponentsComponent,
    DialogComponent,
    NotificationsDemoComponent,
    // External Dependencies
    NgxChartsDemoComponent,
    NgxTranslateDemoComponent,
  ],
  imports: [
    /** Angular Modules */
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    /** Material Modules */
    MdCoreModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdSelectModule,
    MdButtonToggleModule,
    MdSlideToggleModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdTabsModule,
    MdSidenavModule,
    MdTooltipModule,
    MdCheckboxModule,
    MdRadioModule,
    MdAutocompleteModule,
    MdSliderModule,
    MdProgressBarModule,
    MdChipsModule,
    MdGridListModule,
    MdRippleModule,
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
    CovalentChipsModule,
    CovalentJsonFormatterModule,
    CovalentDataTableModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    DocumentationToolsModule,
    NgxChartsModule,
    TranslateModule,
    componentsRoutes,
  ],
  entryComponents: [ DialogComponent ],
})
export class ComponentsModule {}
