import { Component, OnDestroy } from '@angular/core';
import {
  TdMarkdownNavigatorWindowService,
  TdMarkdownNavigatorWindowComponent,
} from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';
import { ITdFlavoredMarkdownButtonClickEvent } from '@covalent/flavored-markdown';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'markdown-navigator-demo-service-button-clicked',
  styleUrls: [
    './markdown-navigator-demo-service-button-clicked.component.scss',
  ],
  templateUrl:
    './markdown-navigator-demo-service-button-clicked.component.html',
})
export class MarkdownNavigatorDemoServiceButtonClickedComponent
  implements OnDestroy
{
  private _destroy$ = new Subject<void>();

  constructor(
    private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  open(): void {
    const dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent> =
      this._markdownNavigatorWindowService.open({
        items: [
          {
            markdownString: `[Trigger button click event](#data={"planet":"mars"})`,
          },
        ],
      });
    dialogRef.componentInstance.buttonClicked
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: ITdFlavoredMarkdownButtonClickEvent) =>
        this._snackBar.open(
          `Button clicked: ${JSON.stringify(data)}`,
          undefined,
          { duration: 2000 }
        )
      );
  }
}
