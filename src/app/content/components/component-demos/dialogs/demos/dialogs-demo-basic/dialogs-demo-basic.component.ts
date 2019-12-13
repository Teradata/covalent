import { Component } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';

@Component({
  selector: 'dialogs-demo-basic',
  styleUrls: ['./dialogs-demo-basic.component.scss'],
  templateUrl: './dialogs-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class DialogsDemoBasicComponent {
  constructor(private _dialogService: TdDialogService) {}
  openAlert(): void {
    this._dialogService.openAlert({
      title: 'Alert',
      disableClose: true,
      message: 'This is how simple it is to create an alert with this wrapper service.',
    });
  }
}
