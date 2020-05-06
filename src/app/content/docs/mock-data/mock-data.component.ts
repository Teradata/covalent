import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-mock-data',
  styleUrls: ['./mock-data.component.scss'],
  templateUrl: './mock-data.component.html',
  animations: [slideInUpAnimation],
})
export class MockDataComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  mockApiDataTypescript: string = `
  import { Injectable } from '@angular/core'; 
  @Injectable() 
  export class ItemsService { 
    private mockApiData: string = 'http://localhost:8080/items';
    ...
  }
  `;
}
