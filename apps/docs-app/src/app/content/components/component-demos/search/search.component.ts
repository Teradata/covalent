import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'search-demo',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html',
})
export class SearchDemoComponent {
  searchInputTerm = '';
}
