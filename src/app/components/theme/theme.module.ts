import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VANTAGE_THEME_PROVIDER } from './theme.service';

@NgModule({
  imports: [CommonModule],
  providers: [VANTAGE_THEME_PROVIDER],
})

export class VantageThemeModule {}
