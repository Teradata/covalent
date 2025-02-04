import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatActionList, MatList, MatListItem, MatListItemAvatar } from '@angular/material/list';
import { TdMenuComponent } from '@covalent/core/menu';

@Component({
  selector: 'td-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TdMenuComponent, MatIcon, MatList, MatActionList, MatListItemAvatar, MatListItem],
})
export class TdUserProfileMenuComponent {
  @Input() email?: string;
  @Input() name?: string;

  _blockEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
