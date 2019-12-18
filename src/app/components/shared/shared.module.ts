import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentHeroComponent } from './component-details/component-hero/component-hero.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ComponentHeroComponent],
  imports: [CommonModule, RouterModule],
  exports: [ComponentHeroComponent],
  providers: [],
})
export class SharedComponentsModule {}
