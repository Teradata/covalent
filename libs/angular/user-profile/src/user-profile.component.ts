import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';

@Component({
  selector: 'td-user-profile',
  templateUrl: './user-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TdUserProfileMenuComponent, MatIcon, MatMenuModule],
})
export class TdUserProfileComponent {
  @Input() name?: string;
  @Input() email?: string;
}
