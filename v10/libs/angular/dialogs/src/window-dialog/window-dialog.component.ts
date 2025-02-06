import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'td-window-dialog',
  templateUrl: './window-dialog.component.html',
  styleUrls: ['./window-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIcon, MatIconButton, MatToolbar, MatToolbarRow, MatTooltip],
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
