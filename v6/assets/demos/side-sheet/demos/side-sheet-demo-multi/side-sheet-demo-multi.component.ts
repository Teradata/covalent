import { Component } from '@angular/core';
import { SubPageMode, CovalentSideSheet } from '@covalent/core/side-sheet';

@Component({
  selector: 'example',
  template: `
    it works from a component

    <div style="display:flex; justify-content:right; padding-top:50px">
      <button mat-raised-button td-side-sheet-close>Close</button>
    </div>

    <div style="display:flex; justify-content:space-between; padding-top:50px">
      <button mat-raised-button color="primary" (click)="openSideSheet()">
        Open pushed
      </button>
    </div>

    <div style="display:flex; justify-content:space-between; padding-top:50px">
      <button
        mat-raised-button
        color="primary"
        (click)="openSideSheet(SubPageOpenMode.shifted)"
      >
        Open shifted
      </button>
    </div>

    <div style="display:flex; justify-content:space-between; padding-top:50px">
      <button
        mat-raised-button
        color="primary"
        (click)="openSideSheet(SubPageOpenMode.none)"
      >
        Open none
      </button>
    </div>
  `,
})
export class SideSheetDemoExampleComponent {
  SubPageOpenMode = SubPageMode;
  constructor(private sideSheet: CovalentSideSheet) {}

  openSideSheet(mode: SubPageMode = SubPageMode.pushed): void {
    this.sideSheet.open(SideSheetDemoExampleLayeredComponent, {
      minWidth: '400px',
      subPageMode: mode,
    });
  }
}

@Component({
  selector: 'example-layered',
  template: 'Im Multi layered!',
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
