import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TdMenuComponent } from '@covalent/core/menu';

@Component({
  selector: 'td-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, TdMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdUserProfileMenuComponent {
  @Input() email?: string;
  @Input() name?: string;

  _blockEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
