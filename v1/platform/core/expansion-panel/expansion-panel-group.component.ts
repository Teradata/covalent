import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'td-expansion-panel-group',
  styleUrls: ['./expansion-panel-group.component.scss' ],
  templateUrl: './expansion-panel-group.component.html',
})
export class TdExpansionPanelGroupComponent {

  constructor(private _renderer: Renderer2,
              private _elementRef: ElementRef) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
  }

}
