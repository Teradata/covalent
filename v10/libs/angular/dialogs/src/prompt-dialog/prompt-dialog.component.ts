import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  NgZone,
  OnDestroy,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { TdDialogActionsDirective, TdDialogComponent, TdDialogContentDirective, TdDialogTitleDirective } from '../dialog.component';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'td-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
  styleUrls: ['./prompt-dialog.component.scss'],
  imports: [CommonModule, FormsModule, MatFormField, MatInput, MatButton, TdDialogComponent, TdDialogTitleDirective, TdDialogContentDirective, TdDialogActionsDirective],
})
export class TdPromptDialogComponent implements AfterViewInit, OnDestroy {
  title?: string;
  message?: string;
  value?: string;
  cancelButton = 'CANCEL';
  acceptButton = 'ACCEPT';

  /** The native `<input matInput />` element. */
  @ViewChild('input', { static: true }) _input!: ElementRef<HTMLInputElement>;

  @ViewChild('closeBtn', { static: true, read: ElementRef })
  _closeBtn!: ElementRef<HTMLButtonElement>;

  @ViewChild('acceptBtn', { static: true, read: ElementRef })
  _acceptBtn!: ElementRef<HTMLButtonElement>;

  private _destroy$ = new Subject<void>();

  constructor(
    private _ngZone: NgZone,
    private _dialogRef: MatDialogRef<TdPromptDialogComponent>
  ) {}

  ngAfterViewInit(): void {
    this._ngZone.runOutsideAngular(() => {
      // Note: `element.focus()` causes re-layout and this may lead to frame drop on slower devices.
      // `Promise` is a microtask and microtask are executed within the current rendering frame.
      // Animation tasks are executed within the next rendering frame.
      // We focus input once everything is rendered and good to go.
      requestAnimationFrame(() => this._input.nativeElement.focus());

      fromEvent(this._input.nativeElement, 'focus')
        .pipe(takeUntil(this._destroy$))
        .subscribe(() => {
          // This is executed when the input is focused, selects all text.
          this._input.nativeElement.select();
        });

      fromEvent<KeyboardEvent>(this._closeBtn.nativeElement, 'keydown')
        .pipe(takeUntil(this._destroy$))
        .subscribe((event) => {
          if (event.keyCode === RIGHT_ARROW) {
            this._acceptBtn.nativeElement.focus();
          }
        });

      fromEvent<KeyboardEvent>(this._acceptBtn.nativeElement, 'keydown')
        .pipe(takeUntil(this._destroy$))
        .subscribe((event) => {
          if (event.keyCode === LEFT_ARROW) {
            this._closeBtn.nativeElement.focus();
          }
        });
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  cancel(): void {
    this._dialogRef.close();
  }

  accept(): void {
    this._dialogRef.close(this.value);
  }
}
