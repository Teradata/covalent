import { Component } from '@angular/core';

@Component({
  selector: 'loading-demo-icon',
  templateUrl: './loading-demo-icon.component.html',
  styleUrls: ['./loading-demo-icon.component.scss'],
})
export class LoadingDemoIconComponent {
  itemList: any[] = [
    { label: 'Light', value: true },
    { label: 'Console', value: false },
    { label: 'T.V.', value: true },
  ];
}
