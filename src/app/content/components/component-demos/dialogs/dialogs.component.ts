import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../../app.animations';
import { TdDialogService } from '../../../../../platform/core/dialogs';

@Component({
  selector: 'dialogs-demo',
  styleUrls: ['./dialogs.component.scss'],
  templateUrl: './dialogs.component.html',
})
export class DialogsDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  constructor(private _dialogService: TdDialogService) {}
  openAlert(): void {
    this._dialogService.openAlert({
      title: 'Alert',
      disableClose: true,
      message: 'This is how simple it is to create an alert with this wrapper service.',
    });
  }
}
