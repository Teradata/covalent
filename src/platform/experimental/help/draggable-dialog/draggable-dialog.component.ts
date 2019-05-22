import { Component, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'draggable-dialog',
  templateUrl: './draggable-dialog.component.html',
  styleUrls: ['./draggable-dialog.component.scss'],
})
export class DraggableDialogComponent {

  title: string;
  template: TemplateRef<any>;

  constructor(private _cdr: ChangeDetectorRef) {}

}
