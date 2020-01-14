import {
  Component,
  Input,
  Output,
  ElementRef,
  AfterViewInit,
  ViewChild,
  EventEmitter,
  ChangeDetectorRef,
  OnChanges,
} from '@angular/core';

import { tdCollapseAnimation } from '@covalent/core/common';

export const enum DeviceType {
  desktop = 'desktop',
  tablet = 'tablet',
  phone = 'phone',
}

export interface IVizCreateOptions {
  hideTabs?: boolean;
  hideToolbar?: boolean;
  instanceIdToClone?: string;
  height?: string;
  width?: string;
  device?: DeviceType;
  onFirstInteractive?: any;
  onFirstVizSizeKnown?: any;
}

declare var tableau: any;

@Component({
  selector: 'td-tableau-embed',
  template: '<div #tableauVizContainer style="height:100%; width: 100%;"></div>',
  animations: [tdCollapseAnimation],
})
export class TdTableauEmbedComponent implements AfterViewInit, OnChanges {
  private _viz: any;
  @ViewChild('tableauVizContainer', { static: true }) tableauVizContainerRef: ElementRef;

  /**
   * url: string
   * Tableau visualization URL
   */
  @Input() url: string;

  /**
   * options: VizCreateOptions
   * Defines options that are specified in the Viz constructor.
   */
  @Input() options: IVizCreateOptions;

  /**
   * filters: "filter key": "value" || []
   * pair .
   */
  @Input() filters: any;

  @Output() vizLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(public cd: ChangeDetectorRef) {
    this.cd.detach();
  }

  ngAfterViewInit(): void {
    this.initTableau();
  }

  ngOnChanges(): void {
    if (this._viz) {
      this.initTableau();
    }
  }

  private initTableau(): any {
    const options: any = {
      ...this.filters,
      ...this.options,
    };

    // Clean up current embedded visualization
    if (this._viz) {
      this._viz.dispose();
      this._viz = undefined;
    }

    this._viz = new tableau.Viz(this.tableauVizContainerRef.nativeElement, this.url, options);
    this.vizLoaded.emit(this._viz);
  }
}
