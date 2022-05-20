import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'td-window-dialog',
  templateUrl: './window-dialog.component.html',
  styleUrls: ['./window-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdWindowDialogComponent {
  @Input() toolbarColor?: ThemePalette;
  @Input() docked? = false;

  @Input() title?: string;
  @Input() toggleDockedStateLabel?: string;
  @Input() closeLabel?: string;

  @Output() dockToggled: EventEmitter<boolean> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();

  toolbarHeight = 56;

  toggleDockedState(): void {
    this.dockToggled.emit(this.docked);
  }
}
