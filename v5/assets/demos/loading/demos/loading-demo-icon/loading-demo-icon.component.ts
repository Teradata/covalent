import { Component } from '@angular/core';
import {
  LoadingMode,
  LoadingStrategy,
  LoadingType,
} from '@covalent/core/loading';

@Component({
  selector: 'loading-demo-icon',
  templateUrl: './loading-demo-icon.component.html',
  styleUrls: ['./loading-demo-icon.component.scss'],
})
export class LoadingDemoIconComponent {
  loadingMode = LoadingMode;
  loadingStrategy = LoadingStrategy;
  loadingType = LoadingType;
  itemList: any[] = [
    { label: 'Light', value: true },
    { label: 'Console', value: false },
    { label: 'T.V.', value: true },
  ];
}
