import { Component } from '@angular/core';
import { TdMarkdownNavigatorWindowService } from '@covalent/markdown-navigator';

@Component({
  selector: 'markdown-navigator-demo-service',
  styleUrls: ['./markdown-navigator-demo-service.component.scss'],
  templateUrl: './markdown-navigator-demo-service.component.html',
})
export class MarkdownNavigatorDemoServiceComponent {
  constructor(private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) {}
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
          url: 'https://github.com/Teradata/product-help/blob/master/AnalyticFunctions/Best-Match-Mode-ML-Engine.md',
          anchor: 'browser-support',
        },
      ],
      dialogConfig: {
        width: '300px',
        height: '300px',
      },

      copyToClipboard: true,
    });
  }
}
