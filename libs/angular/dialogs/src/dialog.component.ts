import {
  Component,
  Directive,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

@Directive({ selector: '[tdDialogTitle]' })
export class TdDialogTitleDirective {}

@Directive({ selector: '[tdDialogContent]' })
export class TdDialogContentDirective {}

@Directive({ selector: '[tdDialogActions]' })
export class TdDialogActionsDirective {}

@Component({
  selector: 'td-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class TdDialogComponent implements AfterContentInit {
  @ContentChildren(TdDialogTitleDirective, { descendants: true })
  dialogTitle!: QueryList<TdDialogTitleDirective>;
  @ContentChildren(TdDialogContentDirective, { descendants: true })
  dialogContent!: QueryList<TdDialogContentDirective>;
  @ContentChildren(TdDialogActionsDirective, { descendants: true })
  dialogActions!: QueryList<TdDialogActionsDirective>;

  ngAfterContentInit(): void {
    if (this.dialogTitle.length > 1) {
      throw new Error('Duplicate td-dialog-title component at in td-dialog.');
    }
    if (this.dialogContent.length > 1) {
      throw new Error('Duplicate td-dialog-content component at in td-dialog.');
    }
    if (this.dialogActions.length > 1) {
      throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
    }
  }
}
