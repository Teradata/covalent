import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'microstrategy-demo-basic',
  templateUrl: './microstrategy-demo-basic.component.html',
  styleUrls: ['./microstrategy-demo-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class MicrostrategyDemoBasicComponent {
  url: string =
    'https://mobiledossier.microstrategy.com/MicroStrategyLibrary/app/EC70648611E7A2F962E90080EFD58751/853E550711E9C5B700000080AFF33F0B/share';
  embeddingLibUrl: string = 'https://mobiledossier.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js';
  viz: any;

  settings: any = {
    enableResponsive: true,
    navigationBar: {
      enabled: true,
      gotoLibrary: true,
      title: true,
      toc: true,
      share: true,
      comment: true,
      notification: true,
      filter: true,
      bookmark: true,
    },
  };

  onVizLoaded(viz: any): void {
    this.viz = viz;
  }
}
