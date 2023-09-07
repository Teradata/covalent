import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'td-user-profile',
  templateUrl: './user-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdUserProfileComponent {
  @Input() name?: string;
  @Input() email?: string;
}
