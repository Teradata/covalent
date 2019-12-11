import { Component } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';

@Component({
  selector: 'dialogs-demo',
  styleUrls: ['./dialogs.component.scss'],
  templateUrl: './dialogs.component.html',
  preserveWhitespaces: true,
})
export class DialogsDemoComponent {
  constructor(private _dialogService: TdDialogService) {}
  openAlert(): void {
    this._dialogService.openAlert({
      title: 'Alert',
      disableClose: true,
      message: 'This is how simple it is to create an alert with this wrapper service.',
    });
  }
}
