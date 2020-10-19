import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { IInputValidator } from '../public-api';
import { DialogValidator } from '../dialog-validator';

@Component({
  selector: 'td-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss'],
})
export class TdPromptDialogComponent implements OnInit, AfterViewInit {
  title: string;
  message: string;
  value: string;
  cancelButton: string = 'CANCEL';
  acceptButton: string = 'ACCEPT';

  validators: IInputValidator = {};

  @ViewChild('input', { static: true }) _input: ElementRef;

  inputForm: FormGroup;
  constructor(private _dialogRef: MatDialogRef<TdPromptDialogComponent>) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      promptInput: new FormControl('', [
        DialogValidator.required(this.validators.required),
        DialogValidator.email(this.validators.email),
        DialogValidator.min(this.validators.min),
        DialogValidator.max(this.validators.max),
        DialogValidator.pattern(this.validators.pattern),
      ]),
    });
  }
  ngAfterViewInit(): void {
    // focus input once everything is rendered and good to go
    Promise.resolve().then(() => {
      (<HTMLInputElement>this._input.nativeElement).focus();
    });
  }

  /**
   * Method executed when input is focused
   * Selects all text
   */
  handleInputFocus(): void {
    (<HTMLInputElement>this._input.nativeElement).select();
  }

  cancel(): void {
    this._dialogRef.close();
  }

  accept(): void {
    this._dialogRef.close(this.value);
  }
}
