import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CovalentSideSheet } from '@covalent/core/side-sheet';

@Component({
  selector: 'side-sheet-demo-basic',
  templateUrl: './side-sheet-demo-basic.component.html',
  styleUrls: ['./side-sheet-demo-basic.component.scss'],
})
export class SideSheetDemoBasicComponent {
  @ViewChild('example') template!: TemplateRef<any>;

  constructor(private sideSheet: CovalentSideSheet) {}

  toggleSideSheet(): void {
    this.sideSheet.open(this.template);
  }
}
