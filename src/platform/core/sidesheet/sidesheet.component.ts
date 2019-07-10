import { Component, Directive, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: 'td-sidesheet-title',
})
export class TdSidesheetTitle {}

@Component({
  selector: 'td-sidesheet',
  templateUrl: './sidesheet.component.html',
  styleUrls: ['./sidesheet.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TdSidesheetComponent { }
