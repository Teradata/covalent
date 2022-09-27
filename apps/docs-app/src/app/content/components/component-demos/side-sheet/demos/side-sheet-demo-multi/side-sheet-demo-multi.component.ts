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
      <button
        mat-raised-button
        color="primary"
        (click)="openSideSheet('pushed')"
      >
        Open pushed
      </button>
    </div>

    <div style="display:flex; justify-content:space-between; padding-top:50px">
      <button
        mat-raised-button
        color="primary"
        (click)="openSideSheet('shifted')"
      >
        Open shifted
      </button>
    </div>

    <div style="display:flex; justify-content:space-between; padding-top:50px">
      <button mat-raised-button color="primary" (click)="openSideSheet('none')">
        Open none
      </button>
    </div>
  `,
})
export class SideSheetDemoExampleComponent {
  constructor(private sideSheet: CovalentSideSheet) {}

  openSideSheet(mode?: string): void {
    let subPageMode: SubPageMode = SubPageMode.pushed;
    if (mode === 'shifted') {
      subPageMode = SubPageMode.shifted;
    } else if (mode === 'none') {
      subPageMode = SubPageMode.none;
    }
    this.sideSheet.open(SideSheetDemoExampleLayeredComponent, {
      minWidth: '400px',
      subPageMode: subPageMode,
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
