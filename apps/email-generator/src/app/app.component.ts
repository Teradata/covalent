import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import {
  TemplateNode,
  TreeListComponent,
} from './tree-list/tree-list.component';
import { CommonModule } from '@angular/common';
import { SideSheetComponent } from './side-sheet/side-sheet.component';
import { getEmailTemplates, EmailTemplate } from '@covalent/email-templates';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    EditorComponent,
    TreeListComponent,
    SideSheetComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  emailTemplates = getEmailTemplates();
  isSideSheetOpen = false;
  selectedTemplate = '';
  templateNodes: TemplateNode[] = [];
  title = 'Email Editor';

  constructor() {
    this.parseTemplates(this.emailTemplates);
  }

  parseTemplates(data: EmailTemplate[]): void {
    this.templateNodes = [];
    const categories: { [key: string]: TemplateNode } = {};

    data.forEach((item) => {
      if (!categories[item.category]) {
        // Create a new category node if it doesn't exist
        categories[item.category] = {
          title: item.category,
          templates: [],
        };
      }

      // Add the individual template to the category's templates
      categories[item.category].templates?.push({
        title: item.name,
        value: item.content,
      });
    });

    // Convert the categories object into an array of TemplateNodes
    this.templateNodes = Object.values(categories);
    this.selectedTemplate = this.emailTemplates[0].content;
  }

  selectTemplate(template: string): void {
    this.selectedTemplate = template;
  }

  toggleSideSheet(): void {
    this.isSideSheetOpen = !this.isSideSheetOpen;
  }
}
