import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IPageChangeEvent } from '../../../../../platform/core/paging';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'paging-demo',
  styleUrls: ['./paging.component.scss'],
  templateUrl: './paging.component.html',
  preserveWhitespaces: true,
})
export class PagingDemoComponent {
  event: IPageChangeEvent;
  firstLast: boolean = true;

  change(event: IPageChangeEvent): void {
    this.event = event;
  }
}
