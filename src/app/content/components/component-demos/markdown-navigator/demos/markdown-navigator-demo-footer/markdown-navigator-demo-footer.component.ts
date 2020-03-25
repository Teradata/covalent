import { Component } from '@angular/core';
import { IMarkdownNavigatorWindowConfig } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-footer-example-a',
  template: `
    <div [style.padding.em]="1">
      <button mat-raised-button>
        Launch space shuttle
      </button>
    </div>
  `,
})
export class MarkdownNavigatorDemoFooterExampleAComponent {}

@Component({
  selector: 'markdown-navigator-demo-footer-example-b',
  template: `
    <div>
      <h2 [style.padding-right.em]="0.5" [style.padding-left.em]="0.5">Learn more:</h2>
      <mat-nav-list>
        <a mat-list-item href="https://angular.io/" target="_blank">Angular</a>
        <a mat-list-item href="https://rxjs-dev.firebaseapp.com/" target="_blank">RxJS</a>
        <a mat-list-item href="https://material.angular.io/ " target="_blank">Angular Material</a>
      </mat-nav-list>
    </div>
  `,
})
export class MarkdownNavigatorDemoFooterExampleBComponent {}

@Component({
  selector: 'markdown-navigator-demo-footer',
  styleUrls: ['./markdown-navigator-demo-footer.component.scss'],
  templateUrl: './markdown-navigator-demo-footer.component.html',
})
export class MarkdownNavigatorDemoFooterComponent {
  mdNavWindowConfig: IMarkdownNavigatorWindowConfig = {
    items: [
      {
        title: 'Button Footer',
        markdownString: `With a button as a footer`,
        footer: MarkdownNavigatorDemoFooterExampleAComponent,
      },
      {
        title: 'Nav list footer',
        markdownString: ` With a nav-list as a footer`,
        footer: MarkdownNavigatorDemoFooterExampleBComponent,
      },
    ],
  };
}
