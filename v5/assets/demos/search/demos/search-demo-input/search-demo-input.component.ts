import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'search-demo-input',
  styleUrls: ['./search-demo-input.component.scss'],
  templateUrl: './search-demo-input.component.html',
})
export class SearchDemoInputComponent {
  public appearanceOptions: MatFormFieldAppearance[] = [
    'fill',
    'legacy',
    'outline',
    'standard',
  ];
  public appearance: MatFormFieldAppearance = this.appearanceOptions[1];
  searchInputTerm = '';
  debounce = 0;

  searchChange($event: string) {
    this.searchInputTerm = $event;
  }

  modeChange(): void {
    this.searchInputTerm = '';
  }
}
