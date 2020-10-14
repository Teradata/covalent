import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { IInputValidator } from '../public-api';

@Component({
  selector: 'td-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss'],
})
export class TdPromptDialogComponent implements AfterViewInit {
  title: string;
  message: string;
  value: string;
  cancelButton: string = 'CANCEL';
  acceptButton: string = 'ACCEPT';

  validators: IInputValidator = {};

  @ViewChild('input', { static: true }) _input: ElementRef;

  // inputForm: FormGroup = new FormGroup({
  //   input: new FormControl('', [Validators.required, this.isInputValidator.bind(this)]),
  // });

  constructor(private _dialogRef: MatDialogRef<TdPromptDialogComponent>) {}

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
  // isInputValidator(control: AbstractControl): ValidationErrors | undefined {
  //   const { value }: AbstractControl = control;
  //   console.log('value -- ', value);
  //   if(this.value === value) {
  //     return {input: false};
  //   }

  //   if (value === '') {
  //     return undefined;
  //   }
  // }
}
