import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * ANGULAR2 MATERIAL MODULES
 */

import { MdCoreModule, MdRippleModule, PortalModule,
         OverlayModule, RtlModule, MdLiveAnnouncer } from '@angular2-material/core';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdButtonModule } from '@angular2-material/button';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdSliderModule } from '@angular2-material/slider';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdMenuModule } from '@angular2-material/menu';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdInputModule } from '@angular2-material/input';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';

const MATERIAL_MODULES: Type[] = [
  MdCoreModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressCircleModule,
  MdRadioModule,
  MdRippleModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  providers: [ MdLiveAnnouncer ],
})
export class MaterialModule { }

/**
 * COMPONENTS
 */

// Layouts
import { TdLayoutComponent } from './layout/layout.component';
import { TdLayoutNavComponent } from './layout/layout-nav/layout-nav.component';
import { TdLayoutNavListComponent } from './layout/layout-nav-list/layout-nav-list.component';
import { TdLayoutCardOverComponent } from './layout/layout-card-over/layout-card-over.component';
import { TdLayoutManageListComponent } from './layout/layout-manage-list/layout-manage-list.component';
import { TdLayoutService } from './layout/services/layout.service';

export const TD_LAYOUT_DIRECTIVES: Type[] = [
  TdLayoutComponent,
  TdLayoutNavComponent,
  TdLayoutNavListComponent,
  TdLayoutCardOverComponent,
  TdLayoutManageListComponent,
];

export const TD_LAYOUT_PROVIDERS: Type[] = [
  TdLayoutService,
];

export { TdLayoutComponent } from './layout/layout.component';
export { TdLayoutNavComponent } from './layout/layout-nav/layout-nav.component';
export { TdLayoutNavListComponent } from './layout/layout-nav-list/layout-nav-list.component';
export { TdLayoutCardOverComponent } from './layout/layout-card-over/layout-card-over.component';
export { TdLayoutManageListComponent }  from './layout/layout-manage-list/layout-manage-list.component';

// Steps
import { TdStepsComponent } from './steps/steps.component';
import { TdStepComponent } from './steps/step.component';

export const TD_STEPS_DIRECTIVES: Type[] = [
  TdStepsComponent,
  TdStepComponent,
];

export { TdStepComponent, StepState } from './steps/step.component';
export { TdStepsComponent, IStepChangeEvent } from './steps/steps.component';

// Loading
import { TdLoadingService } from './loading/services/loading.service';
import { TdLoadingDirective } from './loading/directives/loading.directive';
import { TdLoadingComponent } from './loading/loading.component';

export const TD_LOADING_ENTRY_COMPONENTS: Type[] = [
  TdLoadingComponent,
];

export { LoadingType } from './loading/loading.component';
export { TdLoadingService, ILoadingOptions } from './loading/services/loading.service';
export { TdLoadingDirective } from './loading/directives/loading.directive'

// Expansion
export { TdExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

import { TdExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

/**
 * DIRECTIVES
 */

import { TdToggleDirective } from './directives/toggle/toggle.directive';
import { TdFadeDirective } from './directives/fade/fade.directive';

export { TdToggleDirective } from './directives/toggle/toggle.directive';
export { TdFadeDirective } from './directives/fade/fade.directive';

/**
 * PIPES
 */
import { TdOrderByPipe } from './pipes/orderby/orderby.pipe';
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';

export const TD_PIPES: Type[] = [
  TdOrderByPipe,
  TdTimeAgoPipe,
  TdTimeDifferencePipe,
  TdBytesPipe,
  TdDigitsPipe,
  TdTruncatePipe,
];

export { TdOrderByPipe } from './pipes/orderby/orderby.pipe';
export { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
export { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
export { TdBytesPipe } from './pipes/bytes/bytes.pipe';
export { TdDigitsPipe } from './pipes/digits/digits.pipe';
export { TdTruncatePipe } from './pipes/truncate/truncate.pipe';

/**
 * SERVICES
 */
export { RESTService, IRestTransform, IRestConfig, IRestQuery, IHttp } from './services/rest.service';

/**
 * MEDIA
 */
import { TdMediaService } from './media/services/media.service';
import { TdMediaToggleDirective } from './media/directives/media-toggle.directive';

export { TdMediaService } from './media/services/media.service';
export { TdMediaToggleDirective } from './media/directives/media-toggle.directive';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule,
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    TdMediaToggleDirective,
    TD_PIPES,
    TD_LAYOUT_DIRECTIVES,
    TdLoadingDirective,
    TdLoadingComponent,
    TD_STEPS_DIRECTIVES,
    TdExpansionPanelComponent,
    TdFadeDirective,
    TdToggleDirective,
  ],
  exports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule,
    CommonModule,
    MaterialModule,

    TdMediaToggleDirective,
    TD_PIPES,
    TD_LAYOUT_DIRECTIVES,
    TdLoadingDirective,
    TdLoadingComponent,
    TD_STEPS_DIRECTIVES,
    TdExpansionPanelComponent,
    TdFadeDirective,
    TdToggleDirective,
  ],
})
export class CovalentCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentCoreModule,
      providers: [ TdMediaService, TdLayoutService, TdLoadingService ],
    };
  }
}
