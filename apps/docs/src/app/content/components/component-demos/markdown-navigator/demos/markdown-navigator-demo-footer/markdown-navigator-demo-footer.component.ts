import { Component } from '@angular/core';
import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  template: ` <p [style.padding.em]="1">Global footer</p> `,
})
export class MarkdownNavigatorDemoFooterGlobalExampleComponent {}

@Component({
  template: ` <p [style.padding.em]="1">Item footer</p> `,
})
export class MarkdownNavigatorDemoFooterItemExampleComponent {}

@Component({
  selector: 'markdown-navigator-demo-footer',
  styleUrls: ['./markdown-navigator-demo-footer.component.scss'],
  templateUrl: './markdown-navigator-demo-footer.component.html',
})
export class MarkdownNavigatorDemoFooterComponent {
  items: IMarkdownNavigatorItem[] = [
    {
      title: 'Item Footer',
      markdownString: `Uses footer set at item level`,
      footer: MarkdownNavigatorDemoFooterItemExampleComponent,
    },
    {
      title: 'Global footer',
      markdownString: `Falls back to footer set at the top level`,
    },
  ];
  footer: MarkdownNavigatorDemoFooterGlobalExampleComponent =
    MarkdownNavigatorDemoFooterGlobalExampleComponent;
}
