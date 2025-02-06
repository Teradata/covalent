import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';

@Component({
  selector: 'td-user-profile',
  templateUrl: './user-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatMenuTrigger,
    MatMenu,  
    MatIcon,
    MatButtonModule,
    TdUserProfileMenuComponent,
  ],
})
export class TdUserProfileComponent {
  @Input() name?: string;
  @Input() email?: string;
}
