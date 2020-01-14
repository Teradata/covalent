import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChild,
  OnChanges,
  Output,
  EventEmitter,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { tdCollapseAnimation } from '@covalent/core/common';

declare var microstrategy: any;
const EMBEDDING_LIB_SDK_URL: RegExp = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)\/javascript\/embeddinglib.js$/i;

export interface IFilterSelection {
  id: string;
  name: string;
}

export interface IFilter {
  key: string;
  name: string;
  selections: IFilterSelection[];
}

export interface ISettings {
  containerHeight?: string;
  containerWidth?: string;
  customAuthenticationType?: any;
  disableNotification?: boolean;
  dockedComment?: {
    dockedPosition?: 'left' | 'right';
    canClose?: boolean;
    dockChangeable?: boolean;
    isDocked?: boolean;
  };
  dockedFilter?: {
    dockedPosition?: 'left' | 'right';
    canClose?: boolean;
    dockChangeable?: boolean;
    isDocked?: boolean;
  };
  dockedTOC?: {
    dockedPosition?: 'left' | 'right';
    theme?: 'dark' | 'light';
    canClose?: boolean;
    dockChangeable?: boolean;
    isDocked?: boolean;
  };
  dossierFeature?: {
    readonly?: boolean;
  };
  enableCollaboration?: boolean;
  enableCustomAuthentication?: boolean;
  enableResponsive?: boolean;
  navigationBar?: {
    enabled?: boolean;
    title?: boolean;
    toc?: boolean;
    share?: boolean;
    comment?: boolean;
    notification?: boolean;
    filter?: boolean;
    bookmark?: boolean;
  };
  filters?: IFilter[];
  filterFeature?: {
    enabled?: boolean;
    edit?: boolean;
    summary?: boolean;
  };
  getLoginToken?: any;
  instance?: {
    mid: string;
    id?: string;
    partialManipulation?: boolean;
    status?: number;
  };
  optionsFeature?: {
    enabled?: boolean;
    help?: boolean;
    logout?: boolean;
    manage?: boolean;
    showTutorials?: boolean;
  };
  shareFeature?: {
    enabled?: boolean;
    invite?: boolean;
    link?: boolean;
    email?: boolean;
    export?: boolean;
    download?: boolean;
  };
  smartBanner?: boolean;
  tocFeature?: {
    enabled?: boolean;
  };
  uiMessage?: {
    enabled?: boolean;
    addToLibrary?: boolean;
  };
  visibleTutorials?: {
    welcome?: boolean;
    library?: boolean;
    dossier?: boolean;
    notification?: boolean;
  };
}

@Component({
  selector: 'td-microstrategy-embed',
  template: '<div #microStrategyVizContainer style="height:100%; width: 100%;"></div>',
  animations: [tdCollapseAnimation],
})
export class TdMicroStrategyEmbedComponent implements OnChanges, OnInit, AfterViewInit {
  private _viz: any;
  private _isScriptLoaded: boolean = false;
  private _embeddingLibUrl: string;
  @ViewChild('microStrategyVizContainer', { static: true }) microStrategyVizContainerRef: ElementRef;

  /**
   * url: string
   * MicroStrategy dossier share URL
   */
  @Input() url: string;

  /**
   * embeddingLibUrl: string
   * MicroStrategy embedding library hosted on user's domain
   */
  @Input()
  set embeddingLibUrl(url: string) {
    // Validate URL format
    if (url.match(EMBEDDING_LIB_SDK_URL)) {
      this._embeddingLibUrl = url;
    } else {
      // tslint:disable-next-line: no-console
      console.error('The embeddingLibUrl must be in the following format: http://{domain}/javascript/embeddinglib.js');
    }
  }

  /**
   * settings: ISettings
   * Set of visualization settings
   */
  @Input() settings: ISettings = {};

  /**
   * vizLoaded: function($event)
   * Emits viz object
   */
  @Output() vizLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this._checkIfMicroStrategyScriptIsLoaded();

    if (!this._isScriptLoaded) {
      this._loadMicroStrategyScript(this._embeddingLibUrl).onload = () => {
        this._isScriptLoaded = true;
        this._initMicroStrategy();
      };
    }
  }

  ngAfterViewInit(): void {
    if (this._isScriptLoaded) {
      this._initMicroStrategy();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings || changes.url) {
      // tslint:disable-next-line: no-collapsible-if
      if (this._isScriptLoaded && this.microStrategyVizContainerRef.nativeElement) {
        this._initMicroStrategy();
      }
    }
  }

  private _loadMicroStrategyScript(src: string): HTMLScriptElement {
    const script: HTMLScriptElement = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.head, script);
    return script;
  }

  private _checkIfMicroStrategyScriptIsLoaded(): void {
    const scripts: HTMLScriptElement[] = Array.from(document.getElementsByTagName('script'));

    scripts.forEach((script: HTMLScriptElement) => {
      if (script.getAttribute('src') !== null && script.getAttribute('src').match(EMBEDDING_LIB_SDK_URL)) {
        this._isScriptLoaded = true;
      }
    });
  }

  private _initMicroStrategy(): void {
    const url: string = this.url;
    const options: any = {
      url,
      placeholder: this.microStrategyVizContainerRef.nativeElement,
      ...this.settings,
    };
    microstrategy.dossier.create(options).then((dossier: any) => {
      this._viz = dossier;
      this.vizLoaded.emit(this._viz);
    });
  }
}
