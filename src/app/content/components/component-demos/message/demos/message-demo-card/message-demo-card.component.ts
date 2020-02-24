import { Component } from '@angular/core';
import { TdDialogService } from '../../../../../../../platform/core/dialogs';

@Component({
  selector: 'message-demo-card',
  styleUrls: ['./message-demo-card.component.scss'],
  templateUrl: './message-demo-card.component.html',
})
export class MessageDemoCardComponent {
  constructor(private _dialogService: TdDialogService) {}

  showAlert(): void {
    this._dialogService.openAlert({
      title: 'VIEW MORE clicked!',
      message: 'Same action can be used for navigation or showing messages like this!',
    });
  }
}
