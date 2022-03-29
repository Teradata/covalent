import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'td-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
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
