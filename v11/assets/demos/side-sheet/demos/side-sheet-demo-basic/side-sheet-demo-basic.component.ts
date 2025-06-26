import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { CovalentSideSheet } from '@covalent/core/side-sheet';

@Component({
  standalone: false,
  selector: 'side-sheet-demo-basic',
  templateUrl: './side-sheet-demo-basic.component.html',
  styleUrls: ['./side-sheet-demo-basic.component.scss'],
})
export class SideSheetDemoBasicComponent {
  private sideSheet = inject(CovalentSideSheet);

  @ViewChild('example') template!: TemplateRef<any>;

  toggleSideSheet(): void {
    this.sideSheet.open(this.template);
  }
}
