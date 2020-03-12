import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { slideInDownAnimation } from 'app/app.animations';

@Component({
  selector: 'expansion-panels-demo-grouped',
  styleUrls: ['./expansion-panels-demo-grouped.component.scss'],
  templateUrl: './expansion-panels-demo-grouped.component.html',
  animations: [slideInDownAnimation],
})
export class ExpansionPanelsDemoGroupedComponent {
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  @ViewChild('matPanelGroup') matPanelGroup: MatAccordion;

  multi: boolean = false;

  onChange(): void {
    this.matPanelGroup.closeAll();
  }
}
