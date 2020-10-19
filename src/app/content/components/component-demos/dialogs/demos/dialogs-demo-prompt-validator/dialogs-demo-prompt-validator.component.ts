import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';

@Component({
  selector: 'dialogs-demo-prompt-validator',
  templateUrl: './dialogs-demo-prompt-validator.component.html',
  styleUrls: ['./dialogs-demo-prompt-validator.component.scss'],
})
export class DialogsDemoPromptValidatorComponent {
  constructor(private _dialogService: TdDialogService) {}
  openPrompt(): void {
    this._dialogService.openPrompt({
      title: 'Prompt',
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
      value: 'Populated value',
      cancelButton: 'Cancel',
      acceptButton: 'Ok',

      validators: {
        min: 5,
        max: 10,
        // email: true,
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
    });
  }
}
