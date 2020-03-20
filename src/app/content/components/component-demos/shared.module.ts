import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule, MatCheckbox } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ScrollingModule } from '@angular/cdk/scrolling';


import {
  CovalentDynamicFormsModule,
  TdDynamicInputComponent,
  TdDynamicTextareaComponent,
} from '@covalent/dynamic-forms';

import { CovalentSidesheetModule } from '@covalent/core/sidesheet';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { CovalentMenuModule } from '@covalent/core/menu';
import { CovalentMediaModule } from '@covalent/core/media';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { CovalentPagingModule } from '@covalent/core/paging';
import { CovalentDataTableModule, TdDataTableComponent } from '@covalent/core/data-table';
import { CovalentDialogsModule, TdAlertDialogComponent, TdPromptDialogComponent } from '@covalent/core/dialogs';
import { CovalentFileModule } from '@covalent/core/file';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentLoadingModule, TdLoadingComponent } from '@covalent/core/loading';
import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentChipsModule } from '@covalent/core/chips';
import { CovalentTabSelectModule } from '@covalent/core/tab-select';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { CovalentMarkdownModule, TdMarkdownComponent } from '@covalent/markdown';
import { CovalentMarkdownNavigatorModule, TdMarkdownNavigatorWindowComponent } from '@covalent/markdown-navigator';
import { CovalentVirtualScrollModule } from '@covalent/core/virtual-scroll';

import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { CovalentHighlightModule, TdHighlightComponent } from '@covalent/highlight';
import { CovalentJsonFormatterModule } from '@covalent/core/json-formatter';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentGraphEchartsModule } from '@covalent/echarts/graph';
import { CovalentMapEchartsModule } from '@covalent/echarts/map';
import { CovalentPieEchartsModule } from '@covalent/echarts/pie';
import { CovalentSankeyEchartsModule } from '@covalent/echarts/sankey';
import { CovalentScatterEchartsModule } from '@covalent/echarts/scatter';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';
import { CovalentTreemapEchartsModule } from '@covalent/echarts/treemap';
import { CovalentWordcloudEchartsModule } from '@covalent/echarts/wordcloud';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ScrollingModule,

    /** Covalent Modules */
    CovalentExpansionPanelModule,
    CovalentMenuModule,
    CovalentMediaModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,

    CovalentBreadcrumbsModule,
    CovalentPagingModule,
    CovalentDataTableModule,
    CovalentDialogsModule,
    CovalentSidesheetModule,
    CovalentFileModule,
    CovalentStepsModule,
    CovalentLayoutModule,
    CovalentLoadingModule,
    CovalentMessageModule,
    CovalentSearchModule,
    CovalentNotificationsModule,
    CovalentChipsModule,
    CovalentTabSelectModule,
    CovalentFlavoredMarkdownModule,
    CovalentMarkdownModule,
    CovalentMarkdownNavigatorModule,

    CovalentCodeEditorModule,
    CovalentHighlightModule,
    CovalentJsonFormatterModule,
    CovalentVirtualScrollModule,

    CovalentBaseEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentToolboxEchartsModule,

    CovalentBarEchartsModule,
    CovalentLineEchartsModule,
    CovalentGraphEchartsModule,
    CovalentMapEchartsModule,
    CovalentPieEchartsModule,
    CovalentSankeyEchartsModule,
    CovalentScatterEchartsModule,
    CovalentTreeEchartsModule,
    CovalentTreemapEchartsModule,
    CovalentWordcloudEchartsModule,
  ],
  providers: [],
  entryComponents: [
    TdLoadingComponent,
    TdAlertDialogComponent,
    TdPromptDialogComponent,
    TdDynamicInputComponent,
    TdDynamicTextareaComponent,
    TdMarkdownNavigatorWindowComponent,
    TdDataTableComponent,
    TdMarkdownComponent,
    TdHighlightComponent,
    MatCheckbox,
  ],
})
export class SharedModule {}
