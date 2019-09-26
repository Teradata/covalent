import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentHeroComponent } from './component-details/component-hero/component-hero.component';

@NgModule({
  declarations: [ComponentHeroComponent],
  imports: [CommonModule],
  exports: [ComponentHeroComponent],
  providers: [],
})
export class SharedComponentsModule {}
