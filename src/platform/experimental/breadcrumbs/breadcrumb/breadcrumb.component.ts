import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'td-breadcrumb, a[td-breadcrumb]',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
})
export class TdBreadcrumbComponent implements AfterViewInit {

  private _displayIcon: boolean = true;
  title: string = '';

  @ViewChild('breadcrumbContent', { read: ElementRef }) breadcrumbContent: ElementRef;

  constructor(private elt: ElementRef) {}

  ngAfterViewInit(): void {
    this.title = this.elt.nativeElement.childNodes[0].childNodes[2].nodeValue;
  }
  
  get displayIcon(): boolean {
    return this._displayIcon;
  }

  set displayIcon(shouldDisplay: boolean) {
    this._displayIcon = shouldDisplay;
  }

}
