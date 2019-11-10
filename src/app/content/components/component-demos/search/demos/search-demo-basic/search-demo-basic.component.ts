import { Component } from '@angular/core';

@Component({
  selector: 'search-demo-basic',
  styleUrls: ['./search-demo-basic.component.scss'],
  templateUrl: './search-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class SearchDemoBasicComponent {
  searchInputTerm: string = '';
}
