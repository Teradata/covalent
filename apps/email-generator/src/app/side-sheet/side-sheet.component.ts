import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-sheet',
  templateUrl: './side-sheet.component.html',
  styleUrls: ['./side-sheet.component.scss'],
  standalone: true,
})
export class SideSheetComponent {
  @Input() isOpen = false; // Controls whether the side sheet is open or closed
  @Input() title = ''; // The title of the side sheet
  @Output() closeSheet = new EventEmitter<void>(); // Emits an event when the close button is clicked

  // Function to handle closing the side sheet
  closeSideSheet(): void {
    this.closeSheet.emit();
  }
}
