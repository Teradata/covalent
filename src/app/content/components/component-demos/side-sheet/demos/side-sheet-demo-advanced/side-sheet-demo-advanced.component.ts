import { Component } from '@angular/core';
import { CovalentSideSheet } from '@covalent/core/side-sheet';

@Component({
  selector: 'example',
  template: 'it works from a component',
})
class ExampleComponent {}

@Component({
  selector: 'side-sheet-demo-advanced',
  templateUrl: './side-sheet-demo-advanced.component.html',
})
export class SideSheetDemoAdvancedComponent {
  constructor(private sideSheet: CovalentSideSheet) {}

  toggleSideSheet(): void {
    this.sideSheet.open(ExampleComponent);
  }
}
