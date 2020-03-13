import { Component, HostBinding } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { slideInDownAnimation } from 'app/app.animations';

@Component({
  selector: 'dialogs-demo-basic',
  styleUrls: ['./dialogs-demo-basic.component.scss'],
  templateUrl: './dialogs-demo-basic.component.html',
  animations: [slideInDownAnimation],
})
export class DialogsDemoBasicComponent {
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

  openConfirm(): void {
    this._dialogService.openConfirm({
      title: 'Confirm',
      message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
      cancelButton: 'Disagree',
      acceptButton: 'Agree',
      width: '500px',
    });
  }

  openPrompt(): void {
    this._dialogService.openPrompt({
      title: 'Prompt',
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
      value: 'Populated value',
      cancelButton: 'Cancel',
      acceptButton: 'Ok',
    });
  }
}
