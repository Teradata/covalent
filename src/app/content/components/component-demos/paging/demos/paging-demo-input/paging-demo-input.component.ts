import { Component } from '@angular/core';
import { IPageChangeEvent } from '@covalent/core/paging';

@Component({
  selector: 'paging-demo-input',
  templateUrl: './paging-demo-input.component.html',
  styleUrls: ['./paging-demo-input.component.scss'],
})
export class PagingDemoInputComponent {
  eventInput: IPageChangeEvent;

  changeInput(event: IPageChangeEvent): void {
    this.eventInput = event;
  }
}
