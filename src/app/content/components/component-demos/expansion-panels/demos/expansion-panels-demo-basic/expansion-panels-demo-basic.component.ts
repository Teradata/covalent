import { Component, HostBinding, ViewChild } from '@angular/core';
import { slideInDownAnimation } from 'app/app.animations';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'expansion-panels-demo-basic',
  styleUrls: ['./expansion-panels-demo-basic.component.scss'],
  templateUrl: './expansion-panels-demo-basic.component.html',
  animations: [slideInDownAnimation],
})
export class ExpansionPanelsDemoBasicComponent {
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  @ViewChild('panel1') firstPanel: MatExpansionPanel;
  @ViewChild('panel2') secondPanel: MatExpansionPanel;

  disabled: boolean = false;

  onChange(): void {
    this.firstPanel.close();
    this.secondPanel.close();
  }
}
