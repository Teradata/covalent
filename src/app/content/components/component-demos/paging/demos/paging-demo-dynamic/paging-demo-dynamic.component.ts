import { Component } from '@angular/core';
import { IPageChangeEvent } from '@covalent/core/paging';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'paging-demo-dynamic',
  templateUrl: './paging-demo-dynamic.component.html',
  styleUrls: ['./paging-demo-dynamic.component.scss'],
})
export class PagingDemoDynamicComponent {
  eventPageSize: IPageChangeEvent;
  pageSize: FormControl = new FormControl(50);

  changePageSize(event: IPageChangeEvent): void {
    this.eventPageSize = event;
  }
}
