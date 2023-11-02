import { Component } from '@angular/core';
import { TdMarkdownNavigatorWindowService } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-service',
  styleUrls: ['./markdown-navigator-demo-service.component.scss'],
  templateUrl: './markdown-navigator-demo-service.component.html',
})
export class MarkdownNavigatorDemoServiceComponent {
  constructor(
    private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService
  ) {}
  open(): void {
    this._markdownNavigatorWindowService.open({
      items: [
        {
          title: 'Mars',
          markdownString: `[Go to Mars](#data={"planet":"mars"})`,
        },
        {
          title: 'Jupiter',
          markdownString: `[Go to Jupiter](#data={"planet":"Jupiter"})`,
        },
        {
          title: 'Covalent Browser Support',
          url: 'https://github.com/Teradata/covalent/blob/main/README.md',
          anchor: 'browser-support',
        },
        {
          id: 'child_id',
          title: 'Children',
          childrenUrl: 'assets/demos-data/children_url_1.json',
        },
      ],
      dialogConfig: {
        width: '300px',
        height: '300px',
      },
      startAt: [{ id: 'child_id' }, { id: 'child-1' }],
    });
  }
}
