import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'loading-demo-replace',
  styleUrls: ['./loading-demo-replace.component.scss'],
  templateUrl: './loading-demo-replace.component.html',
})
export class LoadingDemoReplaceComponent {
  loading = false;

  toggle(): void {
    this.loading = !this.loading;
  }
}
