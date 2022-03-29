import { Component } from '@angular/core';
import { CovalentSideSheet } from '@covalent/core/side-sheet';

@Component({
  selector: 'example',
  template: `
    it works from a component
    <div style="display:flex; justify-content:space-between;">
      <button mat-raised-button color="primary" (click)="openSideSheet()">
        Open
      </button>
      <button mat-raised-button td-side-sheet-close>Close</button>
    </div>
  `,
})
export class SideSheetDemoExampleComponent {
  constructor(private sideSheet: CovalentSideSheet) {}

  openSideSheet(): void {
    this.sideSheet.open(SideSheetDemoExampleLayeredComponent, {
      minWidth: '800px',
    });
  }
}

@Component({
  selector: 'example-layered',
  template: 'Im Mulit layered!',
})
class SideSheetDemoExampleLayeredComponent {}

@Component({
  selector: 'side-sheet-demo-multi',
  templateUrl: './side-sheet-demo-multi.component.html',
  styleUrls: ['./side-sheet-demo-multi.component.scss'],
})
export class SideSheetDemoMultiComponent {
  constructor(private sideSheet: CovalentSideSheet) {}

  toggleSideSheet(): void {
    this.sideSheet.open(SideSheetDemoExampleComponent);
  }
}
