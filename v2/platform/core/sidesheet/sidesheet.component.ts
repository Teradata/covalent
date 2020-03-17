import { Component, ContentChild, Directive, Input, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: 'td-sidesheet-content',
})
export class TdSidesheetContentDirective {}

@Directive({
  selector: 'td-sidesheet-title',
})
export class TdSidesheetTitleDirective {}

@Directive({
  selector: 'td-sidesheet-actions',
  /* tslint:disable-next-line */
  host: {
    '[class.align-end]': 'align === "end"',
    '[class.align-start]': 'align === "start"',
  },
})
export class TdSidesheetActionsDirective {
  @Input() align: 'start' | 'end' = 'start';
}

@Component({
  selector: 'td-sidesheet-header',
  templateUrl: 'sidesheet-header.component.html',
})
export class TdSidesheetHeaderComponent {}

@Component({
  selector: 'td-sidesheet',
  templateUrl: './sidesheet.component.html',
  styleUrls: ['./sidesheet.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TdSidesheetComponent {
  @ContentChild(TdSidesheetHeaderComponent) headerExists: TdSidesheetHeaderComponent;
  @ContentChild(TdSidesheetActionsDirective) actionsExist: TdSidesheetActionsDirective;
}
