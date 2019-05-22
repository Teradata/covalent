# Inline Documentation

## Sample Usage

```ts

// pass in httpRequest
// method overrides
this.draggableDocService.getOneMD({})
this.draggableDocService.getListOfMD([])


this.draggableDocService.getMarkdown([
  {
    url: 'github.com/product/reset-password.md',
  },
]);
this.draggableDocService.getMarkdown([
  {
    url: 'github.com/product/reset-password.md',
    title: 'reset-password',
  },
]);
this.draggableDocService.getMarkdown([
  {
    url: 'github.com/product/reset-password.md',
    anchor: 'reset-password',
  },
]);
this.draggableDocService.getMarkdown(
  [
    {
      url: 'github.com/product/reset-password.md',
      title: 'reset-password',
      anchor: 'reset-password',
    },
  ],
  { ...MatDialogConfig }
);
this.draggableDocService.parseMarkdown([
  {
    markdownString: '# Heading \n etc',
    anchor: 'reset-password',
  },
]);

// etc

// nested?
// v2?
//
this.draggableDocService.getMarkdown([
  {
    url: 'github.com/product/reset-password.md',
    title: '',
    children: [
      {
        url: 'github.com/product/reset-password.md',
        title: '',
        children: [
          {
            url: 'github.com/product/reset-password.md',
            title: '',
          },
        ],
      },
    ],
  },
  {
    url: 'github.com/product/reset-password.md',
  },
]);
```

## Diagram

// add to covalent dialog service

![alt text](./diagram.svg 'Logo Title Text 1')

## DraggableDocService

```ts
export class DraggableDocService {
  getMarkdown(urls: string[], config: MatDialogConfig) {
    draggableDialog.open(draggableDoc, {
      data: {
        urls,
        config,
      },
    });
  }

  parseMarkdown(markdownStrings: string[], config: MatDialogConfig) {
    draggableDialog.open(draggableDoc, {
      data: {
        markdownStrings,
        config,
      },
    });
  }
}
```

### Tests

- Test 2 methods?

// help

// draggable help

## DraggableDocComponent

```html
<div>
  <mat-list>
    <mat-list-item ngFor="item in items" (click)="goTo(item)">
      {{ title }}
    </mat-list-item>
  </mat-list>
  <!-- <markdown-loader ngIf="type === ItemType.Url" [url]="url" (ready)="handleReady" />

  <markdown-loader ngIf="type === ItemType.Markdown" [markdown]="markdown" (ready)="handleReady" /> -->
   <markdown-url-loader ngIf="type === ItemType.Url" [url]="url" (ready)="handleReady" />
    <markdown-request-loader ngIf="type === ItemType.Request" [request]="request" (ready)="handleReady" />
    <td-markdown ngIf="type === ItemType.Markdown" [content]="content" (ready)="handleReady" />
</div>
```

```ts
export class DraggableDocComponent {

  // data containing urls or markdown strings will be injected

  @output: opened
  @output: minimized
  @output: maximized
  @output: closed
  @output: clickedOnListItem

enum ItemType {
  Markdown = 'Markdown',
  Url = 'Url',
  Request: 'Request,
}
  constructor(){
    if(data.markdownStrings) {
      this.type = ItemType.Markdown;
    } else {
      this.type = ItemType.Url;;
    }
    goTo(0);
  }

  goTo(index) {
    if(this.type === ItemType.Markdown) {
      this.markdown = this.markdownStrings[index];
    } else {
      this.url = this.urls[index];
    }
  }

  minimize() {
   // emit minimize event

  }

  maximize() {
  // emit maximize event
  }

  close() {
    // emit close event
  }

  get title() {
    if(this.item.title) {
      return this.item.title;
    } else if (this.item.anchor) {
      return this.item.anchor;
    }

    // these would be last resort
    else if (this.type === ItemType.Markdown) {
      // parse markdown and get title?
      return getTitleFromMarkdown(this.item)
    } else  {
      // parse url and try to get filename?
      return getTitleFromUrl(this.item);
    }
  }
}
```

### Tests

- Minimize
- Maximize
- Close
- Interacting with menu sets the right url
- If only one item then don't show list

## DraggableDialogService

```ts
export class DraggableDialogService {
  constructor(private _dialog: MatDialog) {}

  open(component: ComponentType<any>, options: { title?: string }): MatDialogRef<DraggableDialogComponent> {
    let draggableDialog: MatDialogRef<DraggableDialogComponent> = this._dialog.open(
      component,
      Object.assign(
        {
          hasBackdrop: false,
          closeOnNavigation: true,
          panelClass: 'draggable-dialog-wrapper',
        },
        options
      )
    );
    draggableDialog.componentInstance.title = options.title;
    // draggableDialog.componentInstance. = template;
    return draggableDialog;
  }
}
```

## DraggableDialogComponent

```html
<div [class.draggable-dialog]="true" layout="column" cdkDrag cdkDragRootElement=".cdk-overlay-pane">
  <mat-toolbar cdkDragHandle [style.cursor]="'move'" color="accent" class="bgc-grey-600">
    <mat-toolbar-row>
      <div layout="row" layout-align="start center" flex>
        <span class="mat-title push-bottom-none" flex>{{title}}</span>
        <button mat-icon-button mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </div>
    </mat-toolbar-row>
  </mat-toolbar>
  <div [style.overflow-y]="'auto'" flex>
    <ng-container *ngTemplateOutlet="template"></ng-container>
  </div>
</div>
```

### Tests

- Open method
- Close method

## MarkdownLoaderService

response = MarkdownLoaderService.getUrl('url)
response = MarkdownLoaderService.getRequest(requet)




## MarkdownLoaderComponent

```html
<td-markdown [content]="content" (ready)="emitReady" />
```

Td-markdown would have to be able to prevent routing to urls
Get url
Get
If markdown, show
Else open url in new tab

```ts
export class MarkdownLoader {
  @input url; // optional
  @input HttpRequest; // optional
  @input markdown: string; //optional
  @input anchor: string; // optional

  @output: ready // ?

  constructor(http: HttpClient){

    if(this.markdown) {
      this.content = markdown;
    } else if (this.url){
      this.content = this.getMarkdownService.get(url);
    } else {
      throw Error();
      return;
    }

    const anchor = this.anchor || parseAnchor(url);

    if(anchor) {
      // jump to anchor or pass anchor to td-markdown
      jumpToAnchor()
    }

  }
}
```

### Tests

- url is passed in and valid
- url is passed in but invalid
- http request is passed in and valid
- http request is passed in but invalid
- markdown is passed in but valid
- markdown is passed in but invalid
- if all 3 are passed in, first markdown, then http request, then url

- jump to a anchor
- test output ready
- test error thrown

### Other notes

- Expandable? Yes in future
