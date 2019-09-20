import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../../app.animations';

@Component({
  selector: 'markdown-demo',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
  animations: [slideInUpAnimation],
  preserveWhitespaces: true,
})
export class MarkdownDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  anchor: string;

  jumpToH1(): void {
    this.anchor = 'heading-1';
  }

  jumpToH2(): void {
    this.anchor = 'heading-2';
  }
}
