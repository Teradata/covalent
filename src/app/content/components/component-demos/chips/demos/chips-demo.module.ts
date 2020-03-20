import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsDemoWithRequireMatchAttributeComponent } from './chips-demo-with-requireMatch-attribute/chips-demo-with-requireMatch-attribute.component';
import { CovalentChipsModule } from '@covalent/core/chips';
import { ChipsDemoComponent } from './chips-demo.component';
import { ChipsDemoRoutingModule } from './chips-demo-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { DemoModule } from '../../../../../components/shared/demo-tools/demo.module';
import { FormsModule } from '@angular/forms';
import { ChipsDemoWithObjectsComponent } from './chips-demo-with-objects/chips-demo-with-objects.component';
import { ChipsDemoWithRequiredAttributeComponent } from './chips-demo-with-required-attribute/chips-demo-with-required-attribute.component';
import { ChipsDemoWithChipAvatarComponent } from './chips-demo-with-chip-avatar/chips-demo-with-chip-avatar.component';
import { ChipsDemoAsCustomChipsComponent } from './chips-demo-as-custom-chips/chips-demo-as-custom-chips.component';
import { ChipsDemoAsStackedChipsComponent } from './chips-demo-as-stacked-chips/chips-demo-as-stacked-chips.component';
import { ChipsDemoWithCompareWithFunctionComponent } from './chips-demo-with-compareWith-function/chips-demo-with-compareWith-function.component';
import { ChipsDemoForChipEventsComponent } from './chips-demo-for-chip-events/chips-demo-for-chip-events.component';

@NgModule({
  declarations: [
    ChipsDemoComponent,
    ChipsDemoWithRequireMatchAttributeComponent,
    ChipsDemoWithObjectsComponent,
    ChipsDemoWithRequiredAttributeComponent,
    ChipsDemoWithChipAvatarComponent,
    ChipsDemoAsCustomChipsComponent,
    ChipsDemoAsStackedChipsComponent,
    ChipsDemoWithCompareWithFunctionComponent,
    ChipsDemoForChipEventsComponent,
  ],
  imports: [
    DemoModule,
    ChipsDemoRoutingModule,
    /** Covalent Modules */
    CovalentChipsModule,
    /** Angular Modules */
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatIconModule,
  ],
})
export class ChipsDemoModule {}
