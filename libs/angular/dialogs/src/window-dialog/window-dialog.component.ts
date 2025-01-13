import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'td-window-dialog',
  templateUrl: './window-dialog.component.html',
  styleUrls: ['./window-dialog.component.scss'],
  imports: [MatToolbarModule, MatTooltip, MatIcon],
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
