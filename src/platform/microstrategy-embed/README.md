# td-microstrategy-embed
`td-microstrategy-embed` element generates an embedding MicroStrategy visualization, which is built on top of the official [library](https://lw.microstrategy.com/msdz/MSDL/GARelease_Current/docs/projects/EmbeddingSDK/Content/topics/Intro_to_the_Embedding_SDK.htm).

## API Summary

The ISettings input gets the following interfaces:

```typescript
interface IFilterSelection { 
  id: string;
  name: string;
}

interface IFilter { 
  key: string;
  name: string;
  selections: IFilterSelection[];
}

interface ISettings {
  containerHeight?: string;
  containerWidth?: string;
  customAuthenticationType?: any;
  disableNotification?: boolean;
  dockedComment?: {
    dockedPosition?: 'left' | 'right',
    canClose?: boolean,
    dockChangeable?: boolean,
    isDocked?: boolean,
  };
  dockedFilter?: {
    dockedPosition?: 'left' | 'right',
    canClose?: boolean,
    dockChangeable?: boolean,
    isDocked?: boolean,
  };
  dockedTOC?: {
    dockedPosition?: 'left' | 'right',
    theme?: 'dark' | 'light',
    canClose?: boolean,
    dockChangeable?: boolean,
    isDocked?: boolean,
  };
  dossierFeature?: {
    readonly?: boolean,
  };
  enableCollaboration?: boolean;
  enableCustomAuthentication?: boolean;
  enableResponsive?: boolean;
  navigationBar?: {
    enabled?: boolean,
    gotoLibrary?: boolean,
    title?: boolean,
    toc?: boolean,
    reset?: boolean,
    reprompt?: boolean,
    share?: boolean,
    comment?: boolean,
    notification?: boolean,
    filter?: boolean,
    options?: boolean,
    search?: boolean,
    bookmark?: boolean,
  };
  filters?: IFilter[];
  filterFeature?: {
    enabled?: boolean,
    edit?: boolean,
    summary?: boolean,
  };
  getLoginToken?: any;
  instance?: {
    mid: string;
    id?: string;
    partialManipulation?: boolean;
    status?: number;
  };
  optionsFeature?: {
    enabled?: boolean,
    help?: boolean,
    logout?: boolean,
    manage?: boolean,
    showTutorials?: boolean,
  };
  shareFeature?: {
    enabled?: boolean,
    invite?: boolean,
    link?: boolean,
    email?: boolean,
    export?: boolean,
    download?: boolean,
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
  }
}
```

#### Inputs

+ url: string
  + The embedding dossier URL.
+ embeddingLibUrl: string
  + The embedding library URL, which usually is hosted on the user's/company deploy of their Web MicroStrategy application.
  + The URL must match the following format: http://{domain}/javascript/embeddinglib.js.
+ settings?: ISettings
  + Embed configuration settings.

#### Outputs

+ vizLoaded: function($event) 
  + Returns the loaded visualization object.

## Setup

Import the [CovalentMicroStrategyModule] in your NgModule:

```typescript
import { CovalentMicroStrategyModule } from '@covalent/microstrategy-embed';
@NgModule({
  imports: [
    CovalentMicroStrategyModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example for HTML usage:

```html
<td-microstrategy-embed 
  [url]="url"
  [settings]="settings"
>
</td-microstrategy-embed>
```

Example of retrieving Table of Contents and navigate programatically:

```html
<div layout="row">
  <div flex="15" layout="column">
    <ng-container *ngIf="tableOfContents">
      <div layout="column" class="push" *ngFor="let chapter of tableOfContents.chapters">
        <label>{{chapter.name}}</label>
        <a mat-button class="push-left push-sm" *ngFor="let page of chapter.pages" (click)="onNavigateToPage(page.nodeKey)">{{page.name}}</a>
      </div>
    </ng-container>
  </div>
  <div flex="85" [style.height.px]="660">
    <td-microstrategy-embed 
      [url]="'[your-url-here]'"
      [embeddingLibUrl]="'[your-embedding-lib-url-here]'"
      [settings]="settings"
      (vizLoaded)="onVizLoaded($event)"
      >
    </td-microstrategy-embed>
  </div>
</div>
```

```typescript
export class MicroStrategyDemoComponent {
  url: string = '[your-url-here]';
  embeddingLibUrl: string = '[your-embedding-lib-here]';
  viz: any;
  tableOfContents: any;

  settings: any = {
    enableResponsive: true,
    tocFeature: {
      enabled: true,
    },
  };

  onVizLoaded(viz: any): void {
    this.viz = viz;
    this.tableOfContents = this.viz.getTableContent();
  }

  onNavigateToPage(nodeKey: string): void {
    this.viz.navigateToPage(this.viz.getPageByNodeKey(nodeKey));
  }
}
```