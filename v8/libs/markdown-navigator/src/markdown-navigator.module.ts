import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdMarkdownNavigatorComponent } from './markdown-navigator.component';
import { TdMarkdownNavigatorWindowComponent } from './markdown-navigator-window/markdown-navigator-window.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentMessageModule } from '@covalent/core/message';
import { TdMarkdownNavigatorWindowDirective } from './markdown-navigator-window-directive/markdown-navigator-window.directive';
import { TdMarkdownNavigatorWindowService } from './markdown-navigator-window-service/markdown-navigator-window.service';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';

@NgModule({
  imports: [
    CommonModule,

    // material
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    CovalentBreadcrumbsModule,
    CovalentDialogsModule,
    CovalentFlavoredMarkdownModule,
    CovalentMessageModule,
  ],
  declarations: [
    TdMarkdownNavigatorComponent,
    TdMarkdownNavigatorWindowComponent,
    TdMarkdownNavigatorWindowDirective,
  ],
  exports: [
    TdMarkdownNavigatorComponent,
    TdMarkdownNavigatorWindowComponent,
    TdMarkdownNavigatorWindowDirective,
  ],
  providers: [TdMarkdownNavigatorWindowService],
})
export class CovalentMarkdownNavigatorModule {}
