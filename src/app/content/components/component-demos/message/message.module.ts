import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentHighlightModule } from '@covalent/highlight';
import { ComponentDetailsModule } from 'app/components/shared/component-details/component-details.module';
import { setComponentRoutes } from 'app/content/components/components';
import { MessageDemoComponent } from './message.component';
import { DocumentationToolsModule } from 'app/documentation-tools';
import { CovalentDialogsModule } from '../../../../../platform/core/dialogs';

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
    MatCardModule,
    MatDividerModule,
    ComponentDetailsModule,
    // Covalent
    CovalentDialogsModule,
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
