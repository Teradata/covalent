import { Component } from '@angular/core';

@Component({
  selector: 'search-demo-box',
  styleUrls: ['./search-demo-box.component.scss'],
  templateUrl: './search-demo-box.component.html',
})
export class SearchDemoBoxComponent {
  searchBoxTerm = '';
  debounce = 0;
  alwaysVisible = false;

  toggleAlwaysVisible(): void {
    this.alwaysVisible = !this.alwaysVisible;
  }

  modeChange(): void {
    this.searchBoxTerm = '';
  }
}
