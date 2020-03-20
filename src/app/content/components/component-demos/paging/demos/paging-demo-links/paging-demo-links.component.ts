import { Component } from '@angular/core';
import { IPageChangeEvent } from '@covalent/core/paging';

@Component({
  selector: 'paging-demo-links',
  templateUrl: './paging-demo-links.component.html',
  styleUrls: ['./paging-demo-links.component.scss'],
})
export class PagingDemoLinksComponent {
  eventLinks: IPageChangeEvent;

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
  }
}
