import { Component } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';

@Component({
  selector: 'message-demo-action',
  styleUrls: ['./message-demo-action.component.scss'],
  templateUrl: './message-demo-action.component.html',
})
export class MessageDemoActionComponent {
  constructor(private _dialogService: TdDialogService) {}

  showAlert(): void {
    this._dialogService.openAlert({
      title: 'View More Clicked',
      message:
        'Actions can be useful for displaying a dialog to provide more information',
    });
  }
}
