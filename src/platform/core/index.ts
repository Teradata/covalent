import { Type } from '@angular/core';

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
export { LoadingType } from './loading/loading.component';
export { TdLoadingService, ILoadingOptions } from './loading/services/loading.service';
export { TdLoadingDirective } from './loading/directives/loading.directive';

// Expansion
export { TdExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

/**
 * DIRECTIVES
 */

export { TdToggleDirective } from './directives/toggle/toggle.directive';
export { TdFadeDirective } from './directives/fade/fade.directive';

/**
 * PIPES
 */
export { TdOrderByPipe } from './pipes/orderby/orderby.pipe';
export { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
export { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
export { TdBytesPipe } from './pipes/bytes/bytes.pipe';
export { TdDigitsPipe } from './pipes/digits/digits.pipe';

/**
 * SERVICES
 */
export { RESTService, IRestTransform, IRestConfig, IRestQuery, IHttp } from './services/rest.service';

/**
 * MEDIA
 */
import { TdMediaService } from './media/services/media.service';

export const TD_MEDIA_PROVIDERS: Type[] = [
  TdMediaService,
];
export { TdMediaService } from './media/services/media.service';
export { TdMediaToggleDirective } from './media/directives/media-toggle.directive';
