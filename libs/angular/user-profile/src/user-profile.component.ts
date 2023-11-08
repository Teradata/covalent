import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';

@Component({
  selector: 'td-user-profile',
  templateUrl: './user-profile.component.html',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    TdUserProfileMenuComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdUserProfileComponent {
  @Input() name?: string;
  @Input() email?: string;
}
