import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { MessageDemoComponent } from './message.component';
import { CovalentMessageModule } from '@covalent/core/message';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { CovalentHighlightModule } from '@covalent/highlight';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = setComponentRoutes({
  overviewDemoComponent: MessageDemoComponent,
  id: 'message',
});

@NgModule({
  declarations: [MessageDemoComponent],
  imports: [
    CommonModule,
    DocumentationToolsModule,
    // Material
    MatIconModule,
    MatButtonModule,
    ComponentDetailsModule,
    // Covalent
    CovalentMessageModule,
    CovalentHighlightModule,
    // Docs
    // Routes
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [],
})
export class MessageDemoModule {}
