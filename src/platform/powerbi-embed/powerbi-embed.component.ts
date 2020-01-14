import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnChanges, Output, EventEmitter } from '@angular/core';

import { tdCollapseAnimation } from '@covalent/core/common';
import * as pbi from 'powerbi-client';
import * as models from 'powerbi-models';

export const enum TokenType {
  Aad = 'Aad',
  Embed = 'Embed',
}

export const enum ViewMode {
  View = 'View',
  Edit = 'Edit',
}

export const enum VizType {
  Dashboard = 'Dashboard',
  Report = 'Report',
  Tile = 'Tile',
}

export interface ISettings extends models.ISettings {}

@Component({
  selector: 'td-powerbi-embed',
  template: '<div #powerbiVizContainer style="height:100%; width: 100%;"></div>',
  animations: [tdCollapseAnimation],
})
export class TdPowerBIEmbedComponent implements AfterViewInit, OnChanges {
  private _viz: any;
  private _powerbi: any;
  @ViewChild('powerbiVizContainer', { static: true }) powerBiVizContainerRef: ElementRef;

  /**
   * accessToken: string
   * Required token for
   */
  @Input() accessToken: string;

  /**
   * accessToken: TokenType
   * Defines the type of the generated token
   */
  @Input() tokenType: TokenType;

  /**
   * embedUrl: string
   * The embed URL generated either from `Publish to Web` or `Embed` options.
   */
  @Input() embedUrl: string;

  /**
   * id: string
   * The asset id
   */
  @Input() id: string;

  /**
   * type: ReportType
   * The asset type for embedding.
   */
  @Input() type: VizType;

  /**
   * settings: ISettings
   * Embed configuration settings.
   */
  @Input() settings: ISettings = {};

  /**
   * theme: any
   * Custom theme object.
   */
  @Input() theme: any;

  /**
   * viewMode: ViewMode
   * Vizualization view mode. Default is 'View'.
   */
  @Input() viewMode: ViewMode;

  /**
   * vizLoaded: function($event)
   * Emits viz object
   */
  @Output() vizLoaded: EventEmitter<any> = new EventEmitter<any>();

  ngAfterViewInit(): void {
    this.initPowerBI();
  }

  ngOnChanges(): void {
    if (this._viz) {
      this.initPowerBI();
    }
  }

  private initPowerBI(): any {
    let embedConfiguration: any = {
      type: this.type,
      id: this.id,
      embedUrl: this.embedUrl,
      tokenType: this.getTokenType(this.tokenType),
      accessToken: this.accessToken,
      settings: this.settings,
      viewMode: this.getViewModeType(this.viewMode),
    };

    if (this.theme) {
      embedConfiguration = {
        ...embedConfiguration,
        theme: { themeJson: this.theme },
      };
    }

    // Clean up current embedded visualization
    if (this._viz) {
      this._powerbi.reset(this.powerBiVizContainerRef.nativeElement);
      this._powerbi = undefined;
    }

    this._powerbi = new pbi.service.Service(
      pbi.factories.hpmFactory,
      pbi.factories.wpmpFactory,
      pbi.factories.routerFactory,
    );
    this._viz = this._powerbi.embed(this.powerBiVizContainerRef.nativeElement, embedConfiguration);

    this._viz.on('loaded', () => {
      const newSettings: any = {
        bookmarksPaneEnabled: this.settings.bookmarksPaneEnabled,
      };
      this._viz.updateSettings(newSettings);
      this.vizLoaded.emit(this._viz);
    });
  }

  private getTokenType(tokenType: TokenType): models.TokenType {
    if (tokenType) {
      switch (tokenType) {
        case TokenType.Aad:
          return models.TokenType.Aad;
        case TokenType.Embed:
          return models.TokenType.Embed;
        default:
          return models.TokenType.Aad;
      }
    } else {
      return models.TokenType.Aad;
    }
  }

  private getViewModeType(viewMode: ViewMode): models.ViewMode {
    if (viewMode) {
      switch (viewMode) {
        case ViewMode.Edit:
          return models.ViewMode.Edit;
        case ViewMode.View:
          return models.ViewMode.View;
        default:
          return models.ViewMode.View;
      }
    } else {
      return models.ViewMode.View;
    }
  }
}
