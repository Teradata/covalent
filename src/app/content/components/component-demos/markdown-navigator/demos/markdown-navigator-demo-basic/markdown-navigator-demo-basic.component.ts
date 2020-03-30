import { Component } from '@angular/core';
import { TdMarkdownNavigatorWindowService, IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-basic',
  styleUrls: ['./markdown-navigator-demo-basic.component.scss'],
  templateUrl: './markdown-navigator-demo-basic.component.html',
})
export class MarkdownNavigatorDemoBasicComponent {
  constructor(private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) {}
  openDialog(): void {
    this._markdownNavigatorWindowService.open({
      items: [
        {
          title: 'Covalent',
          description: 'Terdata UI Platform',
          icon: 'whatshot',
          url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
        },
        {
          title: 'RxJS',
          description: 'Reactive programming',
          icon: 'speed',
          url: 'https://github.com/ReactiveX/rxjs/blob/master/README.md',
          children: [
            {
              title: 'Intro pt 1',
              markdownString: '🔥',
            },
            {
              title: 'Intro pt 2',
              markdownString: '⚡',
            },
          ],
        },
      ],
    });
  }
}
