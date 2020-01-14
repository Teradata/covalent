import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tableau-demo-basic',
  templateUrl: './tableau-demo-basic.component.html',
  styleUrls: ['./tableau-demo-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class TableauDemoBasicComponent {
  options: any = {
    height: '500px',
    width: '100%',
  };
}
