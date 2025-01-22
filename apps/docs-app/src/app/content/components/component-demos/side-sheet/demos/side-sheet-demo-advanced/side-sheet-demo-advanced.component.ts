import { Component } from '@angular/core';
import { CovalentSideSheet } from '@covalent/core/side-sheet';

@Component({
  standalone: false,
  selector: 'example',
  template: ` it works from a component `,
})
class SideSheetDemoExampleComponent {}

@Component({
  standalone: false,
  selector: 'side-sheet-demo-advanced',
  templateUrl: './side-sheet-demo-advanced.component.html',
  styleUrls: ['./side-sheet-demo-advanced.component.scss'],
})
export class SideSheetDemoAdvancedComponent {
  constructor(private sideSheet: CovalentSideSheet) {}

  toggleSideSheet(): void {
    this.sideSheet.open(SideSheetDemoExampleComponent);
  }
}
