import { Component, inject } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';

@Component({
  standalone: false,
  selector: 'message-demo-action',
  styleUrls: ['./message-demo-action.component.scss'],
  templateUrl: './message-demo-action.component.html',
})
export class MessageDemoActionComponent {
  private _dialogService = inject(TdDialogService);

  showAlert(): void {
    this._dialogService.openAlert({
      title: 'View More Clicked',
      message:
        'Actions can be useful for displaying a dialog to provide more information',
    });
  }
}
