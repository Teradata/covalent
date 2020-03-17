import { Component, Directive, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Directive({selector: 'td-dialog-title'})
export class TdDialogTitleDirective {}

@Directive({selector: 'td-dialog-content'})
export class TdDialogContentDirective {}

@Directive({selector: 'td-dialog-actions'})
export class TdDialogActionsDirective {}

@Component({
  selector: 'td-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss' ],
})
export class TdDialogComponent implements AfterContentInit {

  @ContentChildren(TdDialogTitleDirective) dialogTitle: QueryList<TdDialogTitleDirective>;
  @ContentChildren(TdDialogContentDirective) dialogContent: QueryList<TdDialogContentDirective>;
  @ContentChildren(TdDialogActionsDirective) dialogActions: QueryList<TdDialogActionsDirective>;

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
