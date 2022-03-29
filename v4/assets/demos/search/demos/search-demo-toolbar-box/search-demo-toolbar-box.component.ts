import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'search-demo-toolbar-box',
  styleUrls: ['./search-demo-toolbar-box.component.scss'],
  templateUrl: './search-demo-toolbar-box.component.html',
})
export class SearchDemoToolbarBoxComponent {
  alwaysVisible = false;

  toggleAlwaysVisible(): void {
    this.alwaysVisible = !this.alwaysVisible;
  }
}
