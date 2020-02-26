import { Component } from '@angular/core';
import { TdDialogService } from '../../../../../../../platform/core/dialogs';

@Component({
  selector: 'message-demo-basic',
  styleUrls: ['./message-demo-basic.component.scss'],
  templateUrl: './message-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class MessageDemoBasicComponent {
  constructor(private _dialogService: TdDialogService) {}

  showAlert(): void {
    this._dialogService.openAlert({
      title: 'VIEW MORE clicked!',
      message: 'Same action can be used for navigation or showing messages like this!',
    });
  }
}
