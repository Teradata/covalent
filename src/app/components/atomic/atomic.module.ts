import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AtomicTooltipComponent } from './tooltip/tooltip.component';
import { AtomicAxisComponent } from './axis/axis.component';
import { AtomicToolboxComponent } from './toolbox/toolbox.component';

import { moduleRoutes } from './atomic.routes';

import { DocumentationToolsModule } from '../../documentation-tools';

@NgModule({
  imports: [
    CommonModule,
    // Material
    MatIconModule,
    MatListModule,
    MatCardModule,
    // internal
    DocumentationToolsModule,
    moduleRoutes,
  ],
  declarations: [
    AtomicTooltipComponent,
    AtomicAxisComponent,
    AtomicToolboxComponent,
  ],
})
export class AtomicModule {}
