import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'docs-covalent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class DocsAppComponent {

  plot: any = [{
    color: '#575757',
    opacity: 0.75,
    name: 'Historical Model',
    type: 'bar',
    data: [3002403],
  }, {
    color: '#00E5FF',
    opacity: 0.75,
    name: 'Today',
    type: 'bar',
    data: [2432433],
  }];

  constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

}
