<a name="1.0.0-beta.2"></a>
# [1.0.0-beta.2 Hotel California](https://github.com/Teradata/covalent/tree/v1.0.0-beta.2) (2017-02-23)

## Breaking Change
* **material:** [breaking changes](https://github.com/angular/material2/blob/master/CHANGELOG.md#breaking-changes-from-beta1) from `@material`.
* **file-upload:** add way to set its labels for easier i18n usage ([c91d3cdd61358a1af2ad459cd67f56d62070c3c7](https://github.com/Teradata/covalent/commit/c91d3cdd61358a1af2ad459cd67f56d62070c3c7)), closes [#286](https://github.com/Teradata/covalent/issues/286) 

  Usage:

  ```html
  <td-file-upload #singleFileUpload (upload)="uploadEvent($event)" [disabled]="disabled">
    <md-icon>file_upload</md-icon><span>{{ singleFileUpload.files?.name }}</span>
    <template td-file-input-label>
      <md-icon>attach_file</md-icon><span>Choose a file...</span>
    </template>
  </td-file-upload>
  ```

* **paging-bar:** add way to set its labels for easier i18n usage. ([e454b985fdbbaed6dce2040830177f47118a5be3](https://github.com/Teradata/covalent/commit/e454b985fdbbaed6dce2040830177f47118a5be3)) closes [#356](https://github.com/Teradata/covalent/issues/356) and [214](https://github.com/Teradata/covalent/issues/214)

  Usage:

  ```html
  <td-paging-bar #pagingBar pageSizeAllText="All" [pageSizeAll]="true">
    <span td-paging-bar-label hide-xs>Row per page:</span>
    {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>
  </td-paging-bar>
  ```

## Bug Fixes
* **data-table:** make `td-data-table-column` return proper name in sort event. ([8a19aa0cc9b5bb8ec4ffda8d0f7ae6c1dd3cd0dc](https://github.com/Teradata/covalent/commit/8a19aa0cc9b5bb8ec4ffda8d0f7ae6c1dd3cd0dc))
* **data-table:** no more need for refresh work around for tooltips used under `OnPush`. ([717d309d0a31f21c0dc9870ea3f3f3b40f248a07](https://github.com/Teradata/covalent/commit/717d309d0a31f21c0dc9870ea3f3f3b40f248a07))
* **data-table:** force change detection when model array ref is changed ([65d1c3b14ef41992fe1847eecb8c833810775c2c](https://github.com/Teradata/covalent/commit/65d1c3b14ef41992fe1847eecb8c833810775c2c))
* **dynamic-forms:** `number` type input works again. ([717d309d0a31f21c0dc9870ea3f3f3b40f248a07](https://github.com/Teradata/covalent/commit/717d309d0a31f21c0dc9870ea3f3f3b40f248a07))
* **json-formatter:** no more need for refresh work around for tooltips used under `OnPush`. ([717d309d0a31f21c0dc9870ea3f3f3b40f248a07](https://github.com/Teradata/covalent/commit/717d309d0a31f21c0dc9870ea3f3f3b40f248a07))
* **layout:** leverage `[disableClose]` input from sidenav to prevent `ESC` closing the sidenav on `side` mode. ([717d309d0a31f21c0dc9870ea3f3f3b40f248a07](https://github.com/Teradata/covalent/commit/717d309d0a31f21c0dc9870ea3f3f3b40f248a07))
* **publish:** stop publishing the `ts` source files. ([e5841d6fe62a0f36bf227d9d2b72a2b9f40db5b2](https://github.com/Teradata/covalent/commit/e5841d6fe62a0f36bf227d9d2b72a2b9f40db5b2)), closes [#319](https://github.com/Teradata/covalent/issues/319)

## Features
* **build:** support [nightly-build](https://github.com/Teradata/covalent-nightly). ([5e6cf4a47214b6ad4a52a865ed8172cc6d4e3a0c](https://github.com/Teradata/covalent/commit/5e6cf4a47214b6ad4a52a865ed8172cc6d4e3a0c))

  At any point you can point to our latest build by using:

  ```
  npm install --save https://github.com/Teradata/covalent-nightly.git
  ```
* **covalent-data:** new `0.7.0` [@covalent/data](https://github.com/Teradata/covalent-data) release. 
* **data-table:** add a way to configure a specific column as `sortable`. ([3e24fcfd505395da2f18db2fe2dd96f5cc6e8b87](https://github.com/Teradata/covalent/commit/3e24fcfd505395da2f18db2fe2dd96f5cc6e8b87)), closes [#347](https://github.com/Teradata/covalent/issues/347)
* **data-table:** leverage the `md-pseudo-checkbox` to render the selectable rows more efficiently. ([717d309d0a31f21c0dc9870ea3f3f3b40f248a07](https://github.com/Teradata/covalent/commit/717d309d0a31f21c0dc9870ea3f3f3b40f248a07))
* **dependencies:** add documentation on how to use `ngx-translate` and `LOCALE_ID`. ([776331bb5bc4098a4264a36e1275b3c83727e61a](https://github.com/Teradata/covalent/commit/776331bb5bc4098a4264a36e1275b3c83727e61a))
* **dependencies:** add `@angular/flex-layout` as a `@covalent/core` dependency. ([171a69dbc77e3cb02fee2cd38db314670015f3fe](https://github.com/Teradata/covalent/commit/171a69dbc77e3cb02fee2cd38db314670015f3fe)), closes [#239](https://github.com/Teradata/covalent/issues/239)
* **dependencies:** support [@angular/material@1.0.0-beta.2](https://github.com/angular/material2/blob/master/CHANGELOG.md#200-beta2-flannel-papaya-2017-02-15). ([717d309d0a31f21c0dc9870ea3f3f3b40f248a07](https://github.com/Teradata/covalent/commit/717d309d0a31f21c0dc9870ea3f3f3b40f248a07)), closes [#346](https://github.com/Teradata/covalent/issues/346)
* **deployment:** make every `@angular` dependency a `peerDependency` except for `material` since its still beta. ([c05c45c2d83cc008233f81889ed5e873f9b98dde](https://github.com/Teradata/covalent/commit/c05c45c2d83cc008233f81889ed5e873f9b98dde))
* **docs:** add browser support. ([0e2bb25ccc86388dbe4c4e42c68399f29c4ff05d](https://github.com/Teradata/covalent/commit/0e2bb25ccc86388dbe4c4e42c68399f29c4ff05d))
* **file-input:** introducing `file-input` component as part of the `file` module with `ngModel` support. ([c91d3cdd61358a1af2ad459cd67f56d62070c3c7](https://github.com/Teradata/covalent/commit/c91d3cdd61358a1af2ad459cd67f56d62070c3c7)), closes [#326](https://github.com/Teradata/covalent/issues/326)
* **file-upload:** add `(select)` event to td-file-upload component. ([c91d3cdd61358a1af2ad459cd67f56d62070c3c7](https://github.com/Teradata/covalent/commit/c91d3cdd61358a1af2ad459cd67f56d62070c3c7))
* **file-upload:** add `OnPush` change detection. ([c91d3cdd61358a1af2ad459cd67f56d62070c3c7](https://github.com/Teradata/covalent/commit/c91d3cdd61358a1af2ad459cd67f56d62070c3c7))
* **file-upload:** improve demos and docs. ([c91d3cdd61358a1af2ad459cd67f56d62070c3c7](https://github.com/Teradata/covalent/commit/c91d3cdd61358a1af2ad459cd67f56d62070c3c7))
* **modules:** only import modules that are required. ([1b1b49f6a3a2de08f35171119dbbd0ae6557fa0d](https://github.com/Teradata/covalent/commit/1b1b49f6a3a2de08f35171119dbbd0ae6557fa0d)), closes [#287](https://github.com/Teradata/covalent/issues/287)
* **layout:** add `[navigationRoute]` input in `layouts`/`navigation-drawer` to be able to navigate to `/` or a user defined route when clicking on the icon, logo or title. ([46b6ff2e9e9575cdf6fb0674227dbcbf50719274](https://github.com/Teradata/covalent/commit/46b6ff2e9e9575cdf6fb0674227dbcbf50719274)), closes [#315](https://github.com/Teradata/covalent/issues/315)
* **paging-bar:** add `[initialPage]` input. ([e454b985fdbbaed6dce2040830177f47118a5be3](https://github.com/Teradata/covalent/commit/e454b985fdbbaed6dce2040830177f47118a5be3))
* **paging-bar:** improve demos and docs. ([e454b985fdbbaed6dce2040830177f47118a5be3](https://github.com/Teradata/covalent/commit/e454b985fdbbaed6dce2040830177f47118a5be3))

## Refactor
* **file-upload:** leverage file-input component internally. ([c91d3cdd61358a1af2ad459cd67f56d62070c3c7](https://github.com/Teradata/covalent/commit/c91d3cdd61358a1af2ad459cd67f56d62070c3c7))

## Internal
* **cli:** upgrade to latest `@angular/cli@1.0.0-beta.32.3` and its dependencies. ([3a082d7b645ded78544bb42efdf3fff52fe1d90d](https://github.com/Teradata/covalent/commit/3a082d7b645ded78544bb42efdf3fff52fe1d90d))
* **dependencies:** bump to `@angular@2.4.5`. ([c05c45c2d83cc008233f81889ed5e873f9b98dde](https://github.com/Teradata/covalent/commit/c05c45c2d83cc008233f81889ed5e873f9b98dde))
* **dependencies:** bump to `@swimlane/ngx-charts@4.1.1`. ([3f0ace5b4b3e599a99a4761891d897abaa05c938](https://github.com/Teradata/covalent/commit/3f0ace5b4b3e599a99a4761891d897abaa05c938))
* **docs:** use `td-search-box` in the iconography docs. ([717d309d0a31f21c0dc9870ea3f3f3b40f248a07](https://github.com/Teradata/covalent/commit/717d309d0a31f21c0dc9870ea3f3f3b40f248a07))
* **ghpages:** leverage `--sourcemap=false` for deployment. ([3a082d7b645ded78544bb42efdf3fff52fe1d90d](https://github.com/Teradata/covalent/commit/3a082d7b645ded78544bb42efdf3fff52fe1d90d))
* **publish:** separate `publish-release` to run as individual script. ([d1e397a50ea7d02d70339567ecdf40258acac906](https://github.com/Teradata/covalent/commit/d1e397a50ea7d02d70339567ecdf40258acac906))
* **file-upload:** add initial unit tests for `file-upload`. ([c91d3cdd61358a1af2ad459cd67f56d62070c3c7](https://github.com/Teradata/covalent/commit/c91d3cdd61358a1af2ad459cd67f56d62070c3c7))


<a name="1.0.0-beta.1-1"></a>
# [1.0.0-beta.1-1](https://github.com/Teradata/covalent/tree/v1.0.0-beta.1) (2017-01-31)

## Bug Fixes
* **loading**: Fixed edge case that tried to create the same `tdLoading` twice a component that uses `[routerLinkActive]` when navigating into it.


<a name="1.0.0-beta.1"></a>
# [1.0.0-beta.1 Purple Rain](https://github.com/Teradata/covalent/tree/v1.0.0-beta.1) (2017-01-30)

## Breaking Changes
* **layout:** `td-layout` removal of `(logout)` event and `[displayName]`, `[logo]`, `[icon]` and `[sidenavTitle]` inputs. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))

* **layout:** deprecation of `layout` module selectors to make more sense in the context used and `td` preffixed. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))

### td-layout
Before (deprecated):
```html
<td-layout>
  <md-nav-list menu-items></md-nav-list>
  // content
</td-layout>
```
After:
```html
<td-layout>
  <md-nav-list td-sidenav-content></md-nav-list>
  // content
</td-layout>
```

### td-layout-nav
Before (deprecated):
```html
<td-layout-nav>
  <div toolbar-content></div>
  // content
</td-layout-nav>
```
After:
```html
<td-layout-nav>
  <div td-toolbar-content></div>
  // content
</td-layout-nav>
```

### td-layout-card-over
Before (deprecated):
```html
<td-layout-card-over>
  // content
  <div after-card></div>
</td-layout-card-over>
```
After:
```html
<td-layout-card-over>
  // content
  <div td-after-card></div>
</td-layout-card-over>
```

### td-layout-nav-list
Before (deprecated):
```html
<td-layout-nav-list>
  <div list-toolbar-content></div>
  <md-nav-list list-items></md-nav-list>
  <div nav-toolbar-content></div>
  // content
</td-layout-nav-list>
```
After:
```html
<td-layout-nav-list>
  <div td-sidenav-toolbar-content></div>
  <md-nav-list td-sidenav-content></md-nav-list>
  <div td-toolbar-content></div>
  // content
</td-layout-nav-list>
```

### td-layout-manage-list
Before (deprecated):
```html
<td-layout-manage-list>
  <md-toolbar list-items></md-toolbar>
  <md-nav-list list-items></md-nav-list>
  <div toolbar-buttons></div>
  // content
</td-layout-manage-list>
```
After:
```html
<td-layout-manage-list>
  <md-toolbar td-sidenav-content></md-toolbar>
  <md-nav-list td-sidenav-content></md-nav-list>
  <div td-toolbar-content></div>
  // content
</td-layout-manage-list>
```

* **loading:** deprecate `ILoadingOptions` interface in favor of `ITdLoadingConfig` ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **loading:** deprecate `createOverlayComponent` method from `TdDialogService` in favor of `create` method ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **loading:** deprecate `[loadingType]` and `[loadingMode]` in favor of `[tdLoadingType]` and `[tdLoadingMode]` so the inputs can be used correctly in `(*)` syntax. e.g. `*tdLoading="'name'; type:'linear'"` ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **pipes:** Removed `orderBy` pipe since it wasnt documented and its not a best practice for `@angular`. ([e368057ff1983e6c3353210058c010f02830a30f](https://github.com/Teradata/covalent/commit/e368057ff1983e6c3353210058c010f02830a30f))

## Bug Fixes
* **chips:** `readOnly` state wasnt being shown properly. ([64ff1100af2983709205833de5900fd3b33076ab](https://github.com/Teradata/covalent/commit/64ff1100af2983709205833de5900fd3b33076ab))
* **search:** Clear button wasnt working properly since `input` was considered not empty (floating label). ([64ff1100af2983709205833de5900fd3b33076ab](https://github.com/Teradata/covalent/commit/64ff1100af2983709205833de5900fd3b33076ab))
* **search:** Scss for `hide-underline` was wrong. ([64ff1100af2983709205833de5900fd3b33076ab](https://github.com/Teradata/covalent/commit/64ff1100af2983709205833de5900fd3b33076ab))
* **coverage-badge:** Make coverage badge point to the develop branch ([c50155a21a996f71eb1c7b117e162862adfa5b8c](https://github.com/Teradata/covalent/commit/c50155a21a996f71eb1c7b117e162862adfa5b8c))
* **docs:** Fixed `theme.scss` styles duplication ([b297746b0bb65fa7a434c4b31d789d5c8a95347d](https://github.com/Teradata/covalent/commit/b297746b0bb65fa7a434c4b31d789d5c8a95347d))
* **file:** Changed `file.types` type to work with both `typescript` 2.0 and 2.1. ([48cdbcaa56ac8cc679e9d36b7f4e65fabad039c0](https://github.com/Teradata/covalent/commit/48cdbcaa56ac8cc679e9d36b7f4e65fabad039c0)), closes [#236] (https://github.com/Teradata/covalent/issues/236)
* **highlight:** Use Renderer to limit access to native DOM and `DomSanitizer` to prevent `XSS` issues. ([3311d4a942849e72a2952200ac24043ab9849ecb](https://github.com/Teradata/covalent/commit/3311d4a942849e72a2952200ac24043ab9849ecb))
* **highlight:** Remove only empty lines at the beginning and end of code content only to keep new lines within code. ([3311d4a942849e72a2952200ac24043ab9849ecb](https://github.com/Teradata/covalent/commit/3311d4a942849e72a2952200ac24043ab9849ecb))
* **highlight:** Remove html workaround so code parsing is more generic now and html is properly displayed. ([3311d4a942849e72a2952200ac24043ab9849ecb](https://github.com/Teradata/covalent/commit/3311d4a942849e72a2952200ac24043ab9849ecb))
* **icon:** Fixed alignment issues when using smaller icon size classes (e.g. .material-icons.md-18) than the default one (.material-icons.md-24). ([88be8c3be645a4747a4f06a0b5dbb6ed3afa7f1e](https://github.com/Teradata/covalent/commit/88be8c3be645a4747a4f06a0b5dbb6ed3afa7f1e))
* **json-formatter:** Recreate children array so it doesnt append the new children data. ([da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1](https://github.com/Teradata/covalent/commit/da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1)), closes [#247](https://github.com/Teradata/covalent/issues/247)
* **markdown:** `<hr>` was not showing properly. ([988940253db3df545f1e19ee119cc2c4dee19605](https://github.com/Teradata/covalent/commit/988940253db3df545f1e19ee119cc2c4dee19605))
* **markdown:** Use Renderer to limit access to native DOM and `DomSanitizer` to prevent `XSS` issues. ([988940253db3df545f1e19ee119cc2c4dee19605](https://github.com/Teradata/covalent/commit/988940253db3df545f1e19ee119cc2c4dee19605))
* **layout:** Apply elevation on toolbar on all layouts not just `toolbars` inside `td-layout`. ([e0c8480c9ffa73d9d39466e31260b1e73895003b](https://github.com/Teradata/covalent/commit/e0c8480c9ffa73d9d39466e31260b1e73895003b))
* **layout:** `td-layout-manage-list`'s `md-toolbar[td-sidenav-content]` selector stays in place and doesnt move when scrolling. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))
* **layout:** `td-layout-manage-list` removal of its `position: relative`. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5)), closes closes [#231] (https://github.com/Teradata/covalent/issues/231)
* **media:** `registerQuery` method returns the same `Observable` when reusing a query breakpoint + `next()` method is executing in an `ngZone` now internally. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))

## Features
* **animations:** Added `tdFadeInOut` animation. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **dependencies:** Upgrade to @angular@2.4.4. ([fd0f32a79616a086444a90de853ba30d6ced01a3](https://github.com/Teradata/covalent/commit/fd0f32a79616a086444a90de853ba30d6ced01a3))
* **deployment:** Added `umd` files as `main` entry in `package.json` modules. ([9152500c366b0e8e6dead2664e1f809cdafc5d29](https://github.com/Teradata/covalent/commit/9152500c366b0e8e6dead2664e1f809cdafc5d29))
* **docs:** Show `beta.1` main features in homepage notifications + `sketch.beta.1` update. ([681df135d07a5cd2fd9a277c42e71c0682336b52](https://github.com/Teradata/covalent/commit/681df135d07a5cd2fd9a277c42e71c0682336b52))
* **docs:** Better docs for `notification` usage. ([8015a6744d09a6980a250bf40e34af8a8b04b7b4](https://github.com/Teradata/covalent/commit/8015a6744d09a6980a250bf40e34af8a8b04b7b4))
* **docs:** Better docs for `loading` usage. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **docs:** Added star count in docs to show stargazers ([5ea18ec1f3a986e4e8543478d8aad49abd5aaf44](https://github.com/Teradata/covalent/commit/5ea18ec1f3a986e4e8543478d8aad49abd5aaf44))
* **docs:** Added documentation around `ngx charts` and links to their docs. ([d8311eb3fc773188e1fc9494d5760fbb084c5b56](https://github.com/Teradata/covalent/commit/d8311eb3fc773188e1fc9494d5760fbb084c5b56))
* **notifications:** Added `positionX` and `positionY` to `notification-count` and `rtl` support (with proper unit tests). ([8015a6744d09a6980a250bf40e34af8a8b04b7b4](https://github.com/Teradata/covalent/commit/8015a6744d09a6980a250bf40e34af8a8b04b7b4))
* **highlight:** Added `[content]` input to load code content dynamically. ([3311d4a942849e72a2952200ac24043ab9849ecb](https://github.com/Teradata/covalent/commit/3311d4a942849e72a2952200ac24043ab9849ecb))
* **highlight:** Support for any pre-built `highlight.js` theme. ([3311d4a942849e72a2952200ac24043ab9849ecb](https://github.com/Teradata/covalent/commit/3311d4a942849e72a2952200ac24043ab9849ecb))
* **highlight:** Mimicking VS Dark+ theme as closely as possible when importing `covalent-highlight-theme`. ([3311d4a942849e72a2952200ac24043ab9849ecb](https://github.com/Teradata/covalent/commit/3311d4a942849e72a2952200ac24043ab9849ecb))
* **json-formatter:** Use `collapse` animation when toggling formatter. ([da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1](https://github.com/Teradata/covalent/commit/da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1))
* **json-formatter:** Use `mdTooltip` instead of native `title`. ([da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1](https://github.com/Teradata/covalent/commit/da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1))
* **json-formatter:** Improved efficiency by changing its change detection to `OnPush` + added `refresh` method for explicit change detection. ([da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1](https://github.com/Teradata/covalent/commit/da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1))
* **markdown:** Support space indentation set by the first markdown line. ([988940253db3df545f1e19ee119cc2c4dee19605](https://github.com/Teradata/covalent/commit/988940253db3df545f1e19ee119cc2c4dee19605))
* **markdown:** No more need to add `<pre><code>` in content. ([988940253db3df545f1e19ee119cc2c4dee19605](https://github.com/Teradata/covalent/commit/988940253db3df545f1e19ee119cc2c4dee19605))
* **markdown:** Added `[content]` input to `td-markdown` to load content dynamically. ([988940253db3df545f1e19ee119cc2c4dee19605](https://github.com/Teradata/covalent/commit/988940253db3df545f1e19ee119cc2c4dee19605))
* **layout:** All components that have proxy methods like `open`, `close` and `toggle` return the underlying `Promise`. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))
* **layout:** `td-layout` is now a blank sidenav that gets hooked into the layouts so you can set custom content. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))
* **layout:** Added `td-nagivation-drawer` component as a `td-layout` addon and following the MD spec better. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))

Usage:
```html
<td-layout>
  <td-navigation-drawer sidenavTitle="title" logo="logoName" name="User Name" email="user@email.com" backgroundUrl="safeUrl/to/background" color="none">
     Main Content
    <div td-navigation-drawer-menu>
      Menu Content
    </div>
  </td-navigation-drawer>
  .. rest of the app
</td-layout>
```

* **layout:** `td-layout-nav-list` and `td-layout-nav` can be used as standalone without a `td-layout` parent (which will hide/show the menu button depending on that). ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))
* **layout:** Removed fixed breakpoint for mobile in `td-layout-nav-list` and `td-layout-manage-list`. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5)), closes [#265] (https://github.com/Teradata/covalent/issues/265)
* **layout:** `td-layout-nav-list` and `td-layout-manage-list` new inputs `[opened]`, `[mode]` and `[sidenavWidth]` to allow more flexibility. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5)), closes [#180] (https://github.com/Teradata/covalent/issues/180)  

Usage:
```html
<td-layout-manage-list #manageList
                        [opened]="media.registerQuery('gt-sm') | async"
                        [mode]="(media.registerQuery('gt-sm') | async) ? 'side' : 'push'"
                        [sidenavWidth]="(media.registerQuery('gt-xs') | async) ? '257px' : '100%'">
  <md-nav-list td-sidenav-content (click)="!media.query('gt-sm') && manageList.close()">
```

```html
<td-layout-nav-list #navList
                    logo="assets:teradata"
                    toolbarTitle="Covalent"
                    [opened]="media.registerQuery('gt-sm') | async"
                    [mode]="(media.registerQuery('gt-sm') | async) ? 'side' : 'push'"
                    [sidenavWidth]="(media.registerQuery('gt-xs') | async) ? '350px' : '100%'">
  <md-nav-list td-sidenav-content (click)="!media.query('gt-sm') && navList.close()">
```

```typescript
constructor(public media: TdMediaService) {}

ngAfterViewInit(): void {
  // broadcast to all listener observables when loading the page
  this.media.broadcast();
}
```

* **loading:** Added `[tdLoadingStrategy]` input to change between overlay and replace strat. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f)), closes [#84](https://github.com/Teradata/covalent/issues/84)
* **loading:** Added `[tdLoadingColor]` input for `primary` , `accent` or `warn`. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f)), closes [#255] (https://github.com/Teradata/covalent/issues/255)
* **loading:** Use `tdFadeInOut` animation instead of `tdFade` directive. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **loading:** Easier fullscreen `tdLoading` component instantiation with `create()` method + default fullscreen mask. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **loading:** Better efficiency with `OnPush` strategy. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **media:**  Optimize resize event handling on `TdMediaService`. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))
* **media:** Added `broadcast` method in `TdMediaService` to explicitly trigger the media query checkup on subscribers. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))
* **pattern:** Added `management data-list` design pattern. ([3a15e7ad8ed8f9a83b072524d4054569ead92de2](https://github.com/Teradata/covalent/commit/3a15e7ad8ed8f9a83b072524d4054569ead92de2))
* **plnkr:** Covalent now has a `plnkr` (Plunker) template for easier `bug` replication, `demo` and `idea sharing`. Go to [plnkr](http://plnkr.co/edit/7uZQn4mLNJkL6XN9WSNd). closes [#47](https://github.com/Teradata/covalent/issues/47)
* **theming:** Added prebuilt themes `orange-light-blue`, `blue-grey-deep-orange`, `blue-orange`, `indigo-pink` and `teal-orange`. ([45d4c1b35c6e2a23d19ac73273cfbd817acb6686](https://github.com/Teradata/covalent/commit/45d4c1b35c6e2a23d19ac73273cfbd817acb6686))

## Internal
* **build:** Upgraded `gulp-sass` and added custom `importer` into the `compile-sass` to handle `~` imports like `sass-loader`. ([45d4c1b35c6e2a23d19ac73273cfbd817acb6686](https://github.com/Teradata/covalent/commit/45d4c1b35c6e2a23d19ac73273cfbd817acb6686))
* **build:** Leverage `skipTemplateCodegen` from the `angularCompilerOptions`. ([2b605831c501b743189dc7d24a91c3dc5445b8b7](https://github.com/Teradata/covalent/commit/2b605831c501b743189dc7d24a91c3dc5445b8b7))
* **build:** leverage the `ngc` to generate our `ts` complation from the `tsconfig-aot.json` and removed usage of `gulp-typescript`. ([2b605831c501b743189dc7d24a91c3dc5445b8b7](https://github.com/Teradata/covalent/commit/2b605831c501b743189dc7d24a91c3dc5445b8b7))
* **build:** Added a preparation step to replace `.scss` extensions for `.css` so aot loads precompiled files. ([2b605831c501b743189dc7d24a91c3dc5445b8b7](https://github.com/Teradata/covalent/commit/2b605831c501b743189dc7d24a91c3dc5445b8b7))
* **code-health:** Initial unit tests for `file` module. ([48cdbcaa56ac8cc679e9d36b7f4e65fabad039c0](https://github.com/Teradata/covalent/commit/48cdbcaa56ac8cc679e9d36b7f4e65fabad039c0))
* **code-health:**  Added initial unit tests for json-formatter. ([da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1](https://github.com/Teradata/covalent/commit/da4db7fbc6efbe5e3379cd377b2826e25c2b2ea1))
* **code-health:** Initial unit tests for `TdLoadingDirective` and `TdLoadingService`. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **code-health:** Initial unit tests for `td-expansion-panel`. ([5e5a7efbb3ef1a13b602edeeb3fbe6318fd977e2](https://github.com/Teradata/covalent/commit/5e5a7efbb3ef1a13b602edeeb3fbe6318fd977e2))
* **code-health:** Initial unit tests for `td-highlight`. ([3311d4a942849e72a2952200ac24043ab9849ecb](https://github.com/Teradata/covalent/commit/3311d4a942849e72a2952200ac24043ab9849ecb))
* **code-health:** Initial unit tests for `td-markdown`. ([988940253db3df545f1e19ee119cc2c4dee19605](https://github.com/Teradata/covalent/commit/988940253db3df545f1e19ee119cc2c4dee19605))
* **dependencies:** Upgrade `tslint` and `codelyzer` to support `typescript@2.1.5` ([48cdbcaa56ac8cc679e9d36b7f4e65fabad039c0](https://github.com/Teradata/covalent/commit/48cdbcaa56ac8cc679e9d36b7f4e65fabad039c0))
* **dependencies:** Upgrade to `angular-cli@1.0.0-beta.26`. ([fd0f32a79616a086444a90de853ba30d6ced01a3](https://github.com/Teradata/covalent/commit/fd0f32a79616a086444a90de853ba30d6ced01a3))
* **dependencies:** Upgrade to `typescript@2.1.5`. ([fd0f32a79616a086444a90de853ba30d6ced01a3](https://github.com/Teradata/covalent/commit/fd0f32a79616a086444a90de853ba30d6ced01a3))
* **documentation-tools:** New internal module `documentation-tools` for doc components and utilities. ([2570fa4ecb6a6cc72e308993d9dd9747eb053897](https://github.com/Teradata/covalent/commit/2570fa4ecb6a6cc72e308993d9dd9747eb053897))
* **documentation-tools:** New internal `td-pretty-markdown` (name not final) component which leverages `md-checkbox`, `td-data-table`, `td-highlight` and `td-markdown` components to render GitHub markdown in a more visually attractive way in docs app. ([2570fa4ecb6a6cc72e308993d9dd9747eb053897](https://github.com/Teradata/covalent/commit/2570fa4ecb6a6cc72e308993d9dd9747eb053897))
* **documentation-tools:** New internal `td-readme-loader` component which uses `http` and `pretty-markdown` to load `README.md` files simpler. ([2570fa4ecb6a6cc72e308993d9dd9747eb053897](https://github.com/Teradata/covalent/commit/2570fa4ecb6a6cc72e308993d9dd9747eb053897))
* **layout:** Removed internal `TdLayoutService`. ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))
* **layout:** Removal of `(openMenu)` method since it not documented or needed in `td-layout-nav` and `td-layout-nav-list` ([026520cc346721d72c815b0d09fbd469fd3f2ad5](https://github.com/Teradata/covalent/commit/026520cc346721d72c815b0d09fbd469fd3f2ad5))
* **loading:** Leverage `TemplatePortal` and `Overlay` from `@angular/material`. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **loading:** Separated code into creation (factory) and execution (service), and made `TdLoadingFactory` for internal usage only. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **loading:** Better error messages. ([d87aa65f18af6081ebcff7fe21cb44ac9a0be00f](https://github.com/Teradata/covalent/commit/d87aa65f18af6081ebcff7fe21cb44ac9a0be00f))
* **tooling:** Fixed `ng lint` usage. ([e382f16bcb5c5530d0a0fc92d49a15e078352813](https://github.com/Teradata/covalent/commit/e382f16bcb5c5530d0a0fc92d49a15e078352813))
* **serve:** Exclude spec test files when running `ng serve --aot`. ([2b9172eb653920e8cd7114f6ee751b0e43e20dfc](https://github.com/Teradata/covalent/pull/269/commits/2b9172eb653920e8cd7114f6ee751b0e43e20dfc)), closes [#267](https://github.com/Teradata/covalent/issues/267)


<a name="0.10.2"></a>
# [0.10.2](https://github.com/Teradata/covalent/tree/v0.10.0) (2017-1-3)

## Bug Fixes
* **http:** `interceptors` instead of `inteceptors` typo in `HttpConfig`. closes [#233](https://github.com/Teradata/covalent/issues/233)


<a name="0.10.1"></a>
# [0.10.1](https://github.com/Teradata/covalent/tree/v0.10.0) (2017-1-2)

## Bug Fixes
* **animations:** Depending on the tsconfig.json, setTimeout could be either window.setTimeout or NodeJS.setTimeout. ([1cd3e49c62a3cc8b03f3f153fc3bb554061e495e](https://github.com/Teradata/covalent/commit/1cd3e49c62a3cc8b03f3f153fc3bb554061e495e)), closes [#225](https://github.com/Teradata/covalent/issues/225)
* **http:** `rxjs` upgrade caused concurrent request failure. ([31a60cd0e322f2ab9190325381c08b4872414caa](https://github.com/Teradata/covalent/commit/31a60cd0e322f2ab9190325381c08b4872414caa))


<a name="0.10.0"></a>
# [0.10.0 Bedlington Cummerbund](https://github.com/Teradata/covalent/tree/v0.10.0) (2016-12-30)


## Breaking Changes
* **deploy:** Single core package. ([81901b23eca8e02330260b5831c64da3005a39fd](https://github.com/Teradata/covalent/commit/81901b23eca8e02330260b5831c64da3005a39fd)), closes [#166](https://github.com/Teradata/covalent/issues/166) and [#93](https://github.com/Teradata/covalent/issues/93)

  - Created submodules of all core modules which are wrapped by one parent module CovalentCoreModule (`@covalent/core`)
    - CovalentCommonModule
    - CovalentChipsModule
    - CovalentDataTableModule
    - CovalentDialogsModule
    - CovalentExpansionPanelModule
    - CovalentFileModule
    - CovalentJsonFormatterModule
    - CovalentLayoutModule
    - CovalentLoadingModule
    - CovalentMediaModule
    - CovalentMenuModule
    - CovalentNofiticationsModule
    - CovalentPagingModule
    - CovalentSearchModule
    - CovalentStepsModule

  - Stand alone modules:
    - CovalentHttpModule (`@covalent/http`)
    - CovalentDynamicFormsModule (`@covalent/dynamic-forms`)
    - CovalentHighlightModule (`@covalent/highlight`)
    - CovalentMarkdownModule (`@covalent/markdown`)
  
  - `markdown` is a separate module and its theme needs to be imported separatly `@import ~@covalent/markdown/markdown-theme'` and included `@include covalent-markdown-theme($theme);`
  - `highlight` is a separate module and its theme needs to be imported separatly `@import ~@covalent/highlight/highlight-theme'` and included `@include covalent-highlight-theme();`

  - `all-theme` and `platform.css` changed directories.

    Before: 

    ```scss
    `~@covalent/core/styles/platform.css`
    `~@covalent/core/styles/theming/all-theme';`
    ```

    After:

    ```scss
    `@covalent/core/common/platform.css`
    `~@covalent/core/theming/all-theme';`
    ```

* **http:** Path interceptors configuration. ([7db377e62254f6add6995065f09f4b5528bd0c16](https://github.com/Teradata/covalent/commit/7db377e62254f6add6995065f09f4b5528bd0c16)), closes [#194](https://github.com/Teradata/covalent/issues/194)

  Before:

  ```typescript
  CovalentHttpModule.forRoot([Interceptor1, Interceptor2]),
  ```

  After:

  ```typescript
  const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
    Interceptor1,
    Interceptor2,
    ...
  ];
  ...
  imports: [
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: Interceptor1, paths: ['**'],
      }, {
        interceptor: Interceptor2, paths: ['**'],
      }],
    }),
    ...
  ],
  providers: [
    httpInterceptorProviders,
    ...
  ],
  ```

* **steps:** (stepChange) event now returns the step objects instead of the step number. ([6486eb527ae845224a170b8c7dda2dc92a089c3a](https://github.com/Teradata/covalent/commit/6486eb527ae845224a170b8c7dda2dc92a089c3a))

  Before:

  ```typescript
  export interface IStepChangeEvent {
    newStep: number;
    prevStep: number;
  }
  ```

  After:

  ```typescript
  export interface IStepChangeEvent {
    newStep: TdStepComponent;
    prevStep: TdStepComponent;
  }
  ```

* **layouts:** `logo` expects an `svgIcon` value now from an `MdIconRegistry` svg. (breaking change from `@angular/material`). ([6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15](https://github.com/Teradata/covalent/commit/6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15))

  Before:

  ```html
  <td-layout logo="/assets/route/to/icon1.svg">
  ```

  After (once at any toplevel component):
  
  ```typescript
  import { DomSanitizer } from '@angular/platform-browser';
  import { MdIconRegistry } from '@angular/material';
  ...
  ...
  constructor(iconRegistry: MdIconRegistry, domSanitizer: DomSanitizer) {
    iconRegistry.addSvgIconInNamespace('assets', 'icon1', domSanitizer.bypassSecurityTrustResourceUrl('/assets/route/to/icon1.svg'));
  }
  ```

  ```html
  <td-layout logo="assets:icon1">
  ```

* **charts (deprecated):** `CovalentChartModule` is being deprecated in favor of [ngx-charts](https://github.com/swimlane/ngx-charts) `@swimlane/ngx-charts`.


## Bug Fixes
* **search:** Use enter event instead of search event so it works in IE and firefox ([16b28a68fa0143f2e00e76199eb71c1ba949426d](https://github.com/Teradata/covalent/commit/16b28a68fa0143f2e00e76199eb71c1ba949426d))
* **data-table:** Format columns correctly when displaying them. ([66ab3f6c02c6e70b404c3a6beb26d659390555be](https://github.com/Teradata/covalent/commit/66ab3f6c02c6e70b404c3a6beb26d659390555be)), closes [#187](https://github.com/Teradata/covalent/issues/187)
* **data-table:** Handle undefined data array propertly. ([66ab3f6c02c6e70b404c3a6beb26d659390555be](https://github.com/Teradata/covalent/commit/66ab3f6c02c6e70b404c3a6beb26d659390555be))
* **layouts:** Nav-list and manage-list removal of non-spec box-shadow. ([a61ff1d16aeec05cdd4737ef5f4d366f4fcd03ef](https://github.com/Teradata/covalent/commit/a61ff1d16aeec05cdd4737ef5f4d366f4fcd03ef))
* **http:** Updated `module` to support AoT compilation. ([7db377e62254f6add6995065f09f4b5528bd0c16](https://github.com/Teradata/covalent/commit/7db377e62254f6add6995065f09f4b5528bd0c16)), closes [#195](https://github.com/Teradata/covalent/issues/195)
* **paging:** Show proper range `0-0` when total is `0`. ([6403262e7e05cd54cf98928c165468f029976752](https://github.com/Teradata/covalent/commit/6403262e7e05cd54cf98928c165468f029976752))
* **paging:** Able to re-navigate to page 1 when explicitly done with `navigateTo()`. ([6403262e7e05cd54cf98928c165468f029976752](https://github.com/Teradata/covalent/commit/6403262e7e05cd54cf98928c165468f029976752))
* **file-upload:** Stop submit when enter is pressed for `file-upload`, `search` & `paging` inside a `form` element. ([3eb363873f11b5929655ec4c5ffa822a91fbc5e0](https://github.com/Teradata/covalent/commit/3eb363873f11b5929655ec4c5ffa822a91fbc5e0)), closes [#210](https://github.com/Teradata/covalent/issues/210)


## Features
* **docs:** Added `GETTING_STARTED.md`. ([48dcbc21f10d1a8233cb3835bc4fe20644a00a6d](https://github.com/Teradata/covalent/commit/48dcbc21f10d1a8233cb3835bc4fe20644a00a6d)), closes [#178](https://github.com/Teradata/covalent/issues/178)
* **dialogs:** Better a11y ([f6bc8292538bfe0468ee698f23f9911ff3a5ddaf](https://github.com/Teradata/covalent/commit/f6bc8292538bfe0468ee698f23f9911ff3a5ddaf)), closes [#170](https://github.com/Teradata/covalent/issues/170)
* **dialogs:** Exposed open/closeAll methods from MdDialog. ([f6bc8292538bfe0468ee698f23f9911ff3a5ddaf](https://github.com/Teradata/covalent/commit/f6bc8292538bfe0468ee698f23f9911ff3a5ddaf)), closes [#171](https://github.com/Teradata/covalent/issues/171) 
* **http:** Adding an extra parameter for a `transform` callback in the RESTService methods. ([d73badbe62e7ed5a81be9b3279325b5b46ffc266](https://github.com/Teradata/covalent/commit/d73badbe62e7ed5a81be9b3279325b5b46ffc266)), closes [#179](https://github.com/Teradata/covalent/issues/179)
* **http:** Added onRequestError interceptor hook. ([d73badbe62e7ed5a81be9b3279325b5b46ffc266](https://github.com/Teradata/covalent/commit/d73badbe62e7ed5a81be9b3279325b5b46ffc266))
* **http:** Request URL path interceptors. ([7db377e62254f6add6995065f09f4b5528bd0c16](https://github.com/Teradata/covalent/commit/7db377e62254f6add6995065f09f4b5528bd0c16)), closes [#194](https://github.com/Teradata/covalent/issues/194)
* **data-table:** Added `selectAll` event when clicking select/deselect all checkbox. ([1d59af9a2def99eac1bf9dc8696efc00f974418c](https://github.com/Teradata/covalent/commit/1d59af9a2def99eac1bf9dc8696efc00f974418c)), closes [#172](https://github.com/Teradata/covalent/issues/172)
* **data-table:** Support for nested object rendering. ([91ab4735df96d1cfa539c0ce8be8a25ff5cb3b4f](https://github.com/Teradata/covalent/commit/91ab4735df96d1cfa539c0ce8be8a25ff5cb3b4f)), closes [#189](https://github.com/Teradata/covalent/issues/189)
* **data-table:** Improved efficiency by changing its change detection to `OnPush`. ([91ab4735df96d1cfa539c0ce8be8a25ff5cb3b4f](https://github.com/Teradata/covalent/commit/91ab4735df96d1cfa539c0ce8be8a25ff5cb3b4f))
* **data-table:** Added `refresh()` method to explicitly throw a change detection check when the data or columns objects are updated internally. ([91ab4735df96d1cfa539c0ce8be8a25ff5cb3b4f](https://github.com/Teradata/covalent/commit/91ab4735df96d1cfa539c0ce8be8a25ff5cb3b4f))
* **steps:** Support for ngFor and ngIf usage on td-step components and register/de-register steps automatically. ([6486eb527ae845224a170b8c7dda2dc92a089c3a](https://github.com/Teradata/covalent/commit/6486eb527ae845224a170b8c7dda2dc92a089c3a)), closes [#200](https://github.com/Teradata/covalent/issues/200)
* **dependencies:** Upgrade to @angular@2.4.1 and @material@beta.1. ([6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15](https://github.com/Teradata/covalent/commit/6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15))
* **deployment:** Initial AoT support. ([6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15](https://github.com/Teradata/covalent/commit/6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15)), closes [#149](https://github.com/Teradata/covalent/issues/149)
* **paging:** Usage of `md-select` as `perPage` selection insteaf of `md-icon-button` and `md-menu`. ([63a0ca3d4acaebeb5b19eac826da0f8d2c4dfd1e](https://github.com/Teradata/covalent/commit/63a0ca3d4acaebeb5b19eac826da0f8d2c4dfd1e))
* **layouts:** Added optional sticky footer (and footer-inner). ([59253bef91c354cb85ddd9f1d9622ec76241d13e](https://github.com/Teradata/covalent/commit/59253bef91c354cb85ddd9f1d9622ec76241d13e))

  Usage:

  ```html
   <td-layout-nav>
     ...
     <td-layout-footer></td-layout-footer>
   </td-layout-nav>
  ```

* **dynamic-forms:** Introducing `dynamic-forms` module. ([3eb363873f11b5929655ec4c5ffa822a91fbc5e0](https://github.com/Teradata/covalent/commit/3eb363873f11b5929655ec4c5ffa822a91fbc5e0)), closes [#8](https://github.com/Teradata/covalent/issues/8)
  
  - Supported TdDynamicType

    - TdDynamicType.Text (renders md-input-container input type="text")
    - TdDynamicType.Number (renders md-input-container input type="number")
    - TdDynamicType.Boolean (renders md-slide-toggle)
    - TdDynamicType.Array (renders md-select)

  - Supported TdDynamicElement

    - TdDynamicElement.Input (renders md-input-container input type="text")
    - TdDynamicElement.Textarea (renders md-input-container textarea)
    - TdDynamicElement.Slider (renders md-slider)
    - TdDynamicElement.SlideToggle (renders md-slide-toggle)
    - TdDynamicElement.Checkbox (renders md-checkbox)
    - TdDynamicElement.Select (renders md-select)

* **notifications:** Introducing `notifications` module. ([746fe3caec62a77bc69b50a2fc0bfcf9b0a9a695](https://github.com/Teradata/covalent/commit/746fe3caec62a77bc69b50a2fc0bfcf9b0a9a695)), closes [#148](https://github.com/Teradata/covalent/issues/148)
  
  Usage:

  ```html
   <td-notification-count color="primary | accent | warn" [notifications]="boolean | number">
     ... // could be an icon <md-icon>notifications</md-icon> or empty
   </td-notification-count>
  ```

* **notifications:** Added examples and demo for a `notifications` menu usage. ([746fe3caec62a77bc69b50a2fc0bfcf9b0a9a695](https://github.com/Teradata/covalent/commit/746fe3caec62a77bc69b50a2fc0bfcf9b0a9a695))


## Internal
* **dependencies:** Upgrade to `zone.js@^0.7.2` ([8d2d0845f47d5d8a67f78e81ac449c6013a7e4ab](https://github.com/Teradata/covalent/commit/8d2d0845f47d5d8a67f78e81ac449c6013a7e4ab))
* **dependencies:** Upgrade to `rxjs@5.0.1`. ([6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15](https://github.com/Teradata/covalent/commit/6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15))
* **dependencies:** Upgrade to `angular-cli@2.0.0-beta.24`. ([6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15](https://github.com/Teradata/covalent/commit/6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15))
* **animations:** Added `collapse` animation and used in `steps` and `expansion-panel` ([fe0182285ffa505be42892c235eed295e2814e59](https://github.com/Teradata/covalent/commit/fe0182285ffa505be42892c235eed295e2814e59))
* **security:** Sanitized and registered svg icons from assets into the `MdIconRegistry`. ([6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15](https://github.com/Teradata/covalent/commit/6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15))
* **material:** Remove usage of deprecated `@angular/material` directives. ([6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15](https://github.com/Teradata/covalent/commit/6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15))
* **scripts:** Make `npm run test` do an `ng test` with generated code coverage. ([6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15](https://github.com/Teradata/covalent/commit/6cd31f063ae5a1fd0e31378c1bbf6c466a7d3c15))
* **docs:** Added animation transitions in doc route components. ([334edbdaa518a7e171b0e749ea8fb8c85ab83b09](https://github.com/Teradata/covalent/commit/334edbdaa518a7e171b0e749ea8fb8c85ab83b09))
* **docs:** Updated version dependency in github docs. ([48dcbc21f10d1a8233cb3835bc4fe20644a00a6d](https://github.com/Teradata/covalent/commit/48dcbc21f10d1a8233cb3835bc4fe20644a00a6d)), closes [#178](https://github.com/Teradata/covalent/issues/178)


## Code Health

* **travis:** Fix to run unit tests in chrome 55 and travis CI ([de393fd091b1c312df096c5d326bfbe0cd367274](https://github.com/Teradata/covalent/commit/de393fd091b1c312df096c5d326bfbe0cd367274))
* **http:** Added `RESTService` unit tests. ([d73badbe62e7ed5a81be9b3279325b5b46ffc266](https://github.com/Teradata/covalent/commit/d73badbe62e7ed5a81be9b3279325b5b46ffc266))
* **http:** Added `HttpInterceptorService` unit tests. ([7db377e62254f6add6995065f09f4b5528bd0c16](https://github.com/Teradata/covalent/commit/7db377e62254f6add6995065f09f4b5528bd0c16))
* **steps:** Added `TdStepsComponent` unit tests. ([6486eb527ae845224a170b8c7dda2dc92a089c3a](https://github.com/Teradata/covalent/commit/6486eb527ae845224a170b8c7dda2dc92a089c3a))
* **dynamic-forms:** Added `TdDynamicFormsComponent` and `TdDynamicFormsService` unit tests. ([3eb363873f11b5929655ec4c5ffa822a91fbc5e0](https://github.com/Teradata/covalent/commit/3eb363873f11b5929655ec4c5ffa822a91fbc5e0))
* **notifications:** Added `TdNotificationCountComponent` unit tests. ([746fe3caec62a77bc69b50a2fc0bfcf9b0a9a695](https://github.com/Teradata/covalent/commit/746fe3caec62a77bc69b50a2fc0bfcf9b0a9a695))


<a name="0.9.0"></a>
# [0.9.0 Pallettown Cummerbund](https://github.com/Teradata/covalent/tree/v0.9.0) (2016-11-21)


## Breaking Changes
* **dependencies:** Upgrade to `@angular/matarial@alpha.10` ([b806afabeda784b285342e3673fcaa20e722d954](https://github.com/Teradata/covalent/commit/b806afabeda784b285342e3673fcaa20e722d954))
* **dialog:** Deprecate `setDefaultViewContainerRef` from `TdDialogService` since `viewContainerRef` is not required for dialogs. ([4ee33c74dcff764125a9bba2ad84e37d0aaf0721](https://github.com/Teradata/covalent/commit/4ee33c74dcff764125a9bba2ad84e37d0aaf0721))
* **layout:** Changed layout input attributes. ([7489d21859fa2634a9ca3073ecf175e4df4b669b](https://github.com/Teradata/covalent/commit/7489d21859fa2634a9ca3073ecf175e4df4b669b))

Before (deprecated):
```html
<td-layout title="Covalent">
<td-layout-nav-list title="Covalent">
<td-layout-nav title="Covalent">
<td-layout-card-over title="Title" subtitle="Subtitle">
```
After:
```html
<td-layout sidenavTitle="Title">
<td-layout-nav-list toolbarTitle="Title">
<td-layout-nav toolbarTitle="Title">
<td-layout-card-over cardTitle="Title" cardSubtitle="Subtitle">
```

* **theming:** Created covalent-theme for components. ([773200a081fbb87b542eadd7fb8e912bc4a1d049](https://github.com/Teradata/covalent/commit/773200a081fbb87b542eadd7fb8e912bc4a1d049))

Example:
```scss
@import '~@angular/material/core/theming/all-theme';
@import '~@covalent/core/styles/theming/all-theme';

@include md-core();

$primary: md-palette($md-orange, 800);
$accent:  md-palette($md-light-blue, 600, A100, A400);

$warn:    md-palette($md-red);

$theme: md-light-theme($primary, $accent, $warn);

@include angular-material-theme($theme);
@include covalent-theme($theme);
```

* **data-table:** Abstract paging, sort and search from data-table. ([9b87990daf9c5a9b73c3ce7218a91fe90eae730d](https://github.com/Teradata/covalent/commit/9b87990daf9c5a9b73c3ce7218a91fe90eae730d)), closes [#119](https://github.com/Teradata/covalent/issues/119)

Before:
```html
<td-data-table
  [data]="data"
  [columns]="columns"
  sortBy="age"
  title="title"
  sortOrder="DESC"
  pagination="true"
  pageSize="5"
  sorting="true"
  search="true"
  rowSelection="true"
  multiple="true"
  search="true">
</td-data-table>
```

After:
```html
<td-data-table
  [data]="filteredData"
  [columns]="columns"
  [selectable]="selectable"
  [multiple]="multiple"
  [sortable]="true"
  [sortBy]="sortBy"
  [(ngModel)]="selectedRows"
  [sortOrder]="sortOrder"
  (sortChange)="sort($event)">
</td-data-table>
```

* **steps:** Remove [td-step-content] to fix bug with template referencing. ([5d87249e9a13561ff2bb14fd3ebf41393f902230](https://github.com/Teradata/covalent/commit/5d87249e9a13561ff2bb14fd3ebf41393f902230))

Before:
```html
<td-step>
  <template td-step-content>
    ... add content that will be shown when the step is "active"
  </template>
</td-step>
```

After:
```html
<td-step>
  ... add content that will be shown when the step is "active"
</td-step>
```


## Bug Fixes
* **steps:** Removed pointer cursor in disabled state ([773cffd847018009a9d4c8c6493e169f7a59cd7a](https://github.com/Teradata/covalent/commit/773cffd847018009a9d4c8c6493e169f7a59cd7a))
* **steps:** Fixed vertical line height when step is inactive ([9ea75f3accf0170a670c446b17f98c447d7a6454](https://github.com/Teradata/covalent/commit/9ea75f3accf0170a670c446b17f98c447d7a6454))
* **expansion-panel:** Removed outline when focus and hover/pointer on disabled state ([773cffd847018009a9d4c8c6493e169f7a59cd7a](https://github.com/Teradata/covalent/commit/773cffd847018009a9d4c8c6493e169f7a59cd7a)), closes [#111](https://github.com/Teradata/covalent/issues/111)
* **file-upload:** Removed 'drop-zone' class on drop + fixed on drag event/leave methods ([9ea75f3accf0170a670c446b17f98c447d7a6454](https://github.com/Teradata/covalent/commit/9ea75f3accf0170a670c446b17f98c447d7a6454))
* **layouts:** Fixed sidenav usage inside nav-list and manage-list ([7489d21859fa2634a9ca3073ecf175e4df4b669b](https://github.com/Teradata/covalent/commit/7489d21859fa2634a9ca3073ecf175e4df4b669b))
* **steps:** Conditional margin for templates ([6db4a6a3b3b2d3171d7aa55d7680628e3e568f41](https://github.com/Teradata/covalent/commit/6db4a6a3b3b2d3171d7aa55d7680628e3e568f41)), closes [#130](https://github.com/Teradata/covalent/issues/130)
* **charts:** Line charts wouldn’t render with empty data set ([5c1df459e7a63df83744c992a3df536f1722d218](https://github.com/Teradata/covalent/commit/5c1df459e7a63df83744c992a3df536f1722d218))
* **resources:** Fixed urls for downloads in docs ([6be672297f6f7cd15d2248c122a8825c9fb7c5da](https://github.com/Teradata/covalent/commit/6be672297f6f7cd15d2248c122a8825c9fb7c5da))
* **file-upload:** Change uploader input file field to not use NGModel instead using fileSelect event. NGModel not working correctly on file input for Firefox 49 and above ([bb2b7f6afaed375555d3078527ce0e9e605a8be9](https://github.com/Teradata/covalent/commit/bb2b7f6afaed375555d3078527ce0e9e605a8be9))


## Features
* **dialog:** Added `disableClose` property for dialogs. ([4ee33c74dcff764125a9bba2ad84e37d0aaf0721](https://github.com/Teradata/covalent/commit/4ee33c74dcff764125a9bba2ad84e37d0aaf0721))
* **http:** Added `dynamicHeaders` to `RESTService` constructor. ([3130186ca3bb4cdd5a1ef5c03699aaaf9bbac5a6](https://github.com/Teradata/covalent/commit/3130186ca3bb4cdd5a1ef5c03699aaaf9bbac5a6)), closes [#151](https://github.com/Teradata/covalent/issues/151)
* **paging:** Introducing 'paging' module. ([d46470d5d02c9e2a32badc726eb78fd694184a08](https://github.com/Teradata/covalent/commit/d46470d5d02c9e2a32badc726eb78fd694184a08))
* **search:** Introducing 'search' module. ([8783f6011df9e253c00ec9fa6c85826ecf627c4b](https://github.com/Teradata/covalent/commit/8783f6011df9e253c00ec9fa6c85826ecf627c4b))
* **layouts:** Added cardWidth input to card-over layout. ([7489d21859fa2634a9ca3073ecf175e4df4b669b](https://github.com/Teradata/covalent/commit/7489d21859fa2634a9ca3073ecf175e4df4b669b))
* **docs:** Added dark material color palette ([2e69dbcb8c54003dced7a48f606a9c086b25400d](https://github.com/Teradata/covalent/commit/2e69dbcb8c54003dced7a48f606a9c086b25400d))
* **data-table:** Split data-table into atomic reusable components. ([9b87990daf9c5a9b73c3ce7218a91fe90eae730d](https://github.com/Teradata/covalent/commit/9b87990daf9c5a9b73c3ce7218a91fe90eae730d))

Usage:
```html
<table td-data-table>
  <th td-data-table-column
        [name]="colName"
        [numeric]="numeric"
        [active]="true|false"
        [sortable]="true|false"
        [sortOrder]="colName"
        (sortChange)="handleSort($event)">
    ...
  </th>
  <tr td-data-table-row>
    <td td-data-table-cell
        [numeric]="column.numeric">
      ...
    </td>
  </tr>
</table>
```

* **data-table:** Added TdDataTableService for base local sort, paging and search algorithms. ([9b87990daf9c5a9b73c3ce7218a91fe90eae730d](https://github.com/Teradata/covalent/commit/9b87990daf9c5a9b73c3ce7218a91fe90eae730d)), closes [#115](https://github.com/Teradata/covalent/issues/115)
* **data-table:** Added NgModel support to `<data-table>`. ([9b87990daf9c5a9b73c3ce7218a91fe90eae730d](https://github.com/Teradata/covalent/commit/9b87990daf9c5a9b73c3ce7218a91fe90eae730d))
* **data-table:** Added rowSelect event (row selection) to `<data-table>`. ([9b87990daf9c5a9b73c3ce7218a91fe90eae730d](https://github.com/Teradata/covalent/commit/9b87990daf9c5a9b73c3ce7218a91fe90eae730d))
* **data-table:** Added better demo examples. ([9b87990daf9c5a9b73c3ce7218a91fe90eae730d](https://github.com/Teradata/covalent/commit/9b87990daf9c5a9b73c3ce7218a91fe90eae730d))
* **data-table:** Added template support to `<data-table>` ([fe0547f38627da75140ca1406b9a6433f2b537ab](https://github.com/Teradata/covalent/commit/fe0547f38627da75140ca1406b9a6433f2b537ab))

Usage:
```html
 <td-data-table
  [data]="{'type': 'test'}"
  [columns]="['type']">
  <template tdDataTableTemplate="type" let-value="value" let-row="row" let-column="column">
    ...
  </template>
</td-data-table>
```

* **expansion-panel:** Added open/close/toggle methods to API. ([177895cf8786e50385f4321367fed63c9f6fe7f1](https://github.com/Teradata/covalent/commit/177895cf8786e50385f4321367fed63c9f6fe7f1))
* **expansion-panel** Header/label/sublabel template overrides. ([177895cf8786e50385f4321367fed63c9f6fe7f1](https://github.com/Teradata/covalent/commit/177895cf8786e50385f4321367fed63c9f6fe7f1))

Usage:
```html
<td-expansion-panel label="label" sublabel="sublabel">
  <template td-expansion-panel-header>
    ... add header content (overrides label and sublabel)
  </template>
  <template td-expansion-panel-label>
    ... add label content (if not used, falls back to [label] input)
  </template>
  <template td-expansion-panel-sublabel>
    ... add sublabel content (if not used, falls back to [sublabel] input)
  </template>
  ...
</td-expansion-panel>
```

* **steps:** Support for label template template[td-step-label] as an alternative while keeping the easy API [label] input for normal (simple) use cases in td-step ([5d87249e9a13561ff2bb14fd3ebf41393f902230](https://github.com/Teradata/covalent/commit/5d87249e9a13561ff2bb14fd3ebf41393f902230))

Usage:
```html
<td-step label="Label">
  <template td-step-label>
    ... add label content (if not used, falls back to [label] input)
  </template>
  ... add content that will be shown when the step is "active"
</td-step>  
```


## Internal
* **code-health:** added additional code-health for http forkJoin. ([9ea75f3accf0170a670c446b17f98c447d7a6454](https://github.com/Teradata/covalent/commit/9ea75f3accf0170a670c446b17f98c447d7a6454)), closes [#109](https://github.com/Teradata/covalent/issues/109) 
* **dependencies:** Relaxed dependency limitations. ([f67bd1e150559ac1fe7faa22a730a70de5366635](https://github.com/Teradata/covalent/commit/f67bd1e150559ac1fe7faa22a730a70de5366635)), closes [#136](https://github.com/Teradata/covalent/issues/136) 
* **http:** Remove covalent/core as dependency from http module and added angular/core and angular/http. ([f67bd1e150559ac1fe7faa22a730a70de5366635](https://github.com/Teradata/covalent/commit/f67bd1e150559ac1fe7faa22a730a70de5366635)), closes [#134](https://github.com/Teradata/covalent/issues/134) 
* **dependencies:** Upgrade to `@angular@2.2.1` ([b806afabeda784b285342e3673fcaa20e722d954](https://github.com/Teradata/covalent/commit/b806afabeda784b285342e3673fcaa20e722d954))
* **dependencies:** Upgrade to `@angular-cli@beta.19-3` ([b806afabeda784b285342e3673fcaa20e722d954](https://github.com/Teradata/covalent/commit/b806afabeda784b285342e3673fcaa20e722d954))


<a name="0.8.0"></a>
# [0.8.0 Pixel Raichu](https://github.com/Teradata/covalent/tree/v0.8.0) (2016-10-14)


## Breaking Changes
* **release:** Upgrade material to alpha.9-3. ([790278d6bb2ab92cd8d6e14c8abdb3e020e19378](https://github.com/Teradata/covalent/commit/790278d6bb2ab92cd8d6e14c8abdb3e020e19378))
* **themes:** Added doc usage for themes from `@angular/material`. ([790278d6bb2ab92cd8d6e14c8abdb3e020e19378](https://github.com/Teradata/covalent/commit/790278d6bb2ab92cd8d6e14c8abdb3e020e19378))

theme.scss content:
```scss
@import '~@angular/material/core/theming/all-theme';
// Plus imports for other components in your app.

// Include the base styles for Angular Material core. We include this here so that you only
// have to load a single css file for Angular Material in your app.
@include md-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue.
$primary: md-palette($md-orange, 800);
$accent:  md-palette($md-light-blue, 600, A100, A400);

// The warn palette is optional (defaults to red).
$warn:    md-palette($md-red, 600);

// Create the theme object (a Sass map containing all of the palettes).
$theme: md-light-theme($primary, $accent, $warn);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($theme);
```

* **steps:** Removed `multiple` attribute from `td-steps` since it defeats the purpose of a stepper. ([023d3f3c02444bf4db3a6b712a07548fdb622325](https://github.com/Teradata/covalent/commit/023d3f3c02444bf4db3a6b712a07548fdb622325))
* **steps:** `td-step-summary` and `td-step-actions` are now directives used with a template (needed for `Portal` usage). ([023d3f3c02444bf4db3a6b712a07548fdb622325](https://github.com/Teradata/covalent/commit/023d3f3c02444bf4db3a6b712a07548fdb622325))

Before:
```
<td-step-summary>
  // summary here
</td-step-summary>

<td-step-actions>
  // actions here
</td-step-actions>
```
After:
```
<template td-step-summary>
  // summary here
</template >

<template td-step-actions>
  // actions here
</template >
```
* **steps:** `td-step` content is defined differently now ([023d3f3c02444bf4db3a6b712a07548fdb622325](https://github.com/Teradata/covalent/commit/023d3f3c02444bf4db3a6b712a07548fdb622325)):

Before:
```
<td-step>
  // content here
</td-step>
```
After:
```
<td-step>
  <template td-step-content>
    // content here
  </template >
</td-step>
```


## Bug Fixes
* **http:** Adding complete callback to [HttpInterceptorService] ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62)), closes [#87](https://github.com/Teradata/covalent/issues/87)
* **http:** Check for 200 in patch request [RESTService] ([5a29149cb5d3169325199d5528fb54cd08a77940](https://github.com/Teradata/covalent/commit/5a29149cb5d3169325199d5528fb54cd08a77940))


## Features
* **docs:** Changed covalent data instructions in the documentation. ([be8fa6ef03e406715505c91b0177a8f9407ac202](https://github.com/Teradata/covalent/commit/be8fa6ef03e406715505c91b0177a8f9407ac202))
* **data-table:** Introducing 'data-table' module (big thanks to @fcoury and the Gistia Team). ([2bc523405482a3daa0c96b1979ee95a844042ea8](https://github.com/Teradata/covalent/commit/2bc523405482a3daa0c96b1979ee95a844042ea8)), closes [#2](https://github.com/Teradata/covalent/issues/2)
* **charts:** Introducing 'charts' module (d3 responsive line/bar/area/combo charts). ([c14d6f13ccb93d15ca670b9ed2c464d5ff590bc9](https://github.com/Teradata/covalent/commit/c14d6f13ccb93d15ca670b9ed2c464d5ff590bc9))
* **docs:** Flexbox layout intro docs. ([f151d5906b1b35fd7f930fe1ebc8a1c0f6fe216b](https://github.com/Teradata/covalent/commit/f151d5906b1b35fd7f930fe1ebc8a1c0f6fe216b))
* **docs:** Dialogs, toast & inline error patterns docs. ([63da8b2ff659240b9686590dd0743cea3d1a5e88](https://github.com/Teradata/covalent/commit/63da8b2ff659240b9686590dd0743cea3d1a5e88)), closes [#48](https://github.com/Teradata/covalent/issues/48)
* **validators:** Added min/max/number-required directives and docs. ([7b7b6765e8de4ae06385de6832f638b417bfe00c](https://github.com/Teradata/covalent/commit/7b7b6765e8de4ae06385de6832f638b417bfe00c))
* **directives:** Add `tdToggle` to directives and docs. ([7b7b6765e8de4ae06385de6832f638b417bfe00c](https://github.com/Teradata/covalent/commit/7b7b6765e8de4ae06385de6832f638b417bfe00c))
* **directives:** Add `tdFade` to directives and docs. ([7b7b6765e8de4ae06385de6832f638b417bfe00c](https://github.com/Teradata/covalent/commit/7b7b6765e8de4ae06385de6832f638b417bfe00c))
* **directives:** Add `tdAutoTrim` to directives and docs. ([01cbd92b7e668502cf1be3b1a323962efe640940](https://github.com/Teradata/covalent/commit/01cbd92b7e668502cf1be3b1a323962efe640940))
* **steps:** Added new [mode] input to `td-steps`. ('horizontal' | 'vertical'), and followed specs better. ([023d3f3c02444bf4db3a6b712a07548fdb622325](https://github.com/Teradata/covalent/commit/023d3f3c02444bf4db3a6b712a07548fdb622325)), closes [#29](https://github.com/Teradata/covalent/issues/29)
* **dialogs:** Added dialog templates and wrapper service for easier use. ([90e50816dc23bfe0ae0177c10e610bd02562ae54](https://github.com/Teradata/covalent/commit/90e50816dc23bfe0ae0177c10e610bd02562ae54))
* **loading:** Added determinate/indeterminate mode. ([2e83b20fe66848ae9dbc105dfa739d96354cc138](https://github.com/Teradata/covalent/commit/2e83b20fe66848ae9dbc105dfa739d96354cc138)), closes [#80](https://github.com/Teradata/covalent/pull/80)


## Internal
* **code-health:** Add slack notification for travis ci #travisci-ux. ([be8fa6ef03e406715505c91b0177a8f9407ac202](https://github.com/Teradata/covalent/commit/be8fa6ef03e406715505c91b0177a8f9407ac202))
* **deploy:** Usage of webpack angular CLI for docs deployment. ([0a272b0867c58b72bdea6cb524fe9037597500e4](https://github.com/Teradata/covalent/commit/0a272b0867c58b72bdea6cb524fe9037597500e4))
* **release:** Upgraded to ^2.0.0. ([790278d6bb2ab92cd8d6e14c8abdb3e020e19378](https://github.com/Teradata/covalent/commit/790278d6bb2ab92cd8d6e14c8abdb3e020e19378))


<a name="0.7.0"></a>
# [0.7.0 Beetlejuice Charizard](https://github.com/Teradata/covalent/tree/v0.7.0) (2016-09-14)


## Bug Fixes
* **loading:** Changed default duration to 150ms so it doesnt look like its delayed in IE/Firefox (they dont support animations). ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **file-upload:** Fixed file-upload select/drop events for Firefox and IE. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **http:** Fixed request pipeline for interceptors. ([91050c51fa32b6e57d711199997829d0f4fc4c62](https://github.com/Teradata/covalent/commit/91050c51fa32b6e57d711199997829d0f4fc4c62))
* **http:** Changes IQueryRest property type to `any`. ([91050c51fa32b6e57d711199997829d0f4fc4c62](https://github.com/Teradata/covalent/commit/91050c51fa32b6e57d711199997829d0f4fc4c62))
* **loading:** Added mode flag to switch modes so protractor doesnt timeout when circle is indeterminate (problem with md-progress-circle using setInterval()). ([2bbe223982df4deb2d3eca15cad9b4a230f66713](https://github.com/Teradata/covalent/commit/2bbe223982df4deb2d3eca15cad9b4a230f66713))
* **loading:** Allow to override Overlay components when used in a constructor. ([2bbe223982df4deb2d3eca15cad9b4a230f66713](https://github.com/Teradata/covalent/commit/2bbe223982df4deb2d3eca15cad9b4a230f66713))
* **docs:** Fixed example for td-layout-manage-list. ([b63bf5ff606792c3e16ec5a63682bef6fa89c503](https://github.com/Teradata/covalent/commit/b63bf5ff606792c3e16ec5a63682bef6fa89c503))


## Code Refactoring
* **docs-app:** Restructured imports in docs to remove the majority of the index.ts files and less explicit declarations in system-config.ts. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **loading:** Removed NgZone/ChangeDetectorRef usage from tdLoading. ([2bbe223982df4deb2d3eca15cad9b4a230f66713](https://github.com/Teradata/covalent/commit/2bbe223982df4deb2d3eca15cad9b4a230f66713))


## Features
* **loading:** Changed TdLoadingDirective's creation to be sync so it can be accessed in the ngAfterViewInit hook on page load. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **core:** Added tooltip, slider, button-toggle and menu from angular-material. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **docs:** Added resource docs with axure and sketch downloads for Covalent usage. ([13110bf701e3fdbfd487003b7c88f66b63c4642e](https://github.com/Teradata/covalent/commit/13110bf701e3fdbfd487003b7c88f66b63c4642e)), closes [#55](https://github.com/Teradata/covalent/issues/55)
* **docs:** Updated docs with ngModule usage. closes [#65](https://github.com/Teradata/covalent/issues/65)
* **release:** Inline html/css in compiled js files. ([23007cd7598a599539cc2e14d4f02735ff84a7a2](https://github.com/Teradata/covalent/commit/23007cd7598a599539cc2e14d4f02735ff84a7a2)), closes [#27](https://github.com/Teradata/covalent/issues/27)
* **release:** Bundle module code into a single `[module].umd.js` to match angular/angular2-material's. ([23007cd7598a599539cc2e14d4f02735ff84a7a2](https://github.com/Teradata/covalent/commit/23007cd7598a599539cc2e14d4f02735ff84a7a2)), closes [#56](https://github.com/Teradata/covalent/issues/56) 
* **covalent-data:** Introducing `Covalent Data` mock server API endpoints for better prototyping. Visit our [repo](https://github.com/Teradata/covalent-data) for more information.
* **docs:** Added covalent-data docs for usage with `Covalent Quickstart`. ([c77d42c22d2c9e745431c12b9b19e803e44871c1](https://github.com/Teradata/covalent/commit/c77d42c22d2c9e745431c12b9b19e803e44871c1))


## Internal
* **loading:** Changed code in animations since the angular classes used are no longer public. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **code-health:** Unit test karma-test-shim changes to set up test environment using `rc7`. ([78f813c412ea42124e399edd7960b58d56139768](https://github.com/Teradata/covalent/commit/78f813c412ea42124e399edd7960b58d56139768))
* **code-health:** Removed all unit tests (gonna start from scratch with each one). ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **code-health:** Unit tests changes to use TestBed and remove imports describe/it/beforeEach since they are taken as global. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **docs-app:** Need to add angular2-material core.css and overlay.css as a workaround for ripple and menu into index.html angular/material2#972. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **code-health:** Fixed karma setup for rc7, updated travis CI config and added example test case as base. ([d11f0a9e75ee69509d7bce2ae186366052ce471a](https://github.com/Teradata/covalent/commit/d11f0a9e75ee69509d7bce2ae186366052ce471a)), closes [#57](https://github.com/Teradata/covalent/issues/57)
* **release:** Added dependency to rollup. ([23007cd7598a599539cc2e14d4f02735ff84a7a2](https://github.com/Teradata/covalent/commit/23007cd7598a599539cc2e14d4f02735ff84a7a2))
* **release:** Updated RELEASE.md and fixed bug on `finish-release` script.


## Breaking Changes
* **release:** Upgraded to RC7. ([78f813c412ea42124e399edd7960b58d56139768](https://github.com/Teradata/covalent/commit/78f813c412ea42124e399edd7960b58d56139768)), closes [#36](https://github.com/Teradata/covalent/issues/36)
* **release:** Upgrade material to alpha.8-1. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **release:** Updated rxjs to 5.0.0-beta.12 (@angular dependency). ([78f813c412ea42124e399edd7960b58d56139768](https://github.com/Teradata/covalent/commit/78f813c412ea42124e399edd7960b58d56139768))
* **release:** Updated zone.js to 0.6.21 (@angular dependency). ([78f813c412ea42124e399edd7960b58d56139768](https://github.com/Teradata/covalent/commit/78f813c412ea42124e399edd7960b58d56139768))
* **release:** Added hammerjs dependency (@angular2-material dependency). ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **release:** Removed bootstrap and implemented everything with NgModule decorator. ([6104b554376bb70d013e80d7b39d78a04dc4aa62](https://github.com/Teradata/covalent/commit/6104b554376bb70d013e80d7b39d78a04dc4aa62))
* **loading:** Removed tdLoadingDirective class from API. ([2bbe223982df4deb2d3eca15cad9b4a230f66713](https://github.com/Teradata/covalent/commit/2bbe223982df4deb2d3eca15cad9b4a230f66713))
* **highlight:** Removed static lib file and added npm dependency for highlight.js (see docs for more info on how to setup). ([e555bc438ab898c48a24f507204205db95c4dcbc](https://github.com/Teradata/covalent/commit/e555bc438ab898c48a24f507204205db95c4dcbc))
* **all:** Covalent now depends on TypeScript 2.0.

* **all:** Updated packaging to match angular/angular2-material's packaging creating a `[module].umd.js` file per module.

  Example SystemJS config with UMD bundles: 

  ```ts
  '@covalent/core': {
      format: 'cjs',
      main: 'core.umd.js'
    }
  ```

* **all:** Covalent modules must be included with `forRoot()` when bootstrapping. See the [ngModules guide](https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-for-root) for 
more information.

  ```ts
  @NgModule({
      imports: [
          CovalentCoreModule.forRoot(),
          CovalentHttpModule.forRoot()
      ]
  ...
  });
  ```

* **http:** Use CovalentHttpModule.forRoot() to register interceptors. (provideInterceptors() is deprecated and removed) ([91050c51fa32b6e57d711199997829d0f4fc4c62](https://github.com/Teradata/covalent/commit/91050c51fa32b6e57d711199997829d0f4fc4c62)), closes [#58](https://github.com/Teradata/covalent/issues/58)

   Before:

  ```ts
    bootstrap(AppComponent,[
      provideInterceptors([ CustomInterceptor ]),
      ...
    ])
  ```

   After:

  ```ts
    imports: [
      CovalentHttpModule.forRoot([ CustomInterceptor ]),
      ...
    ]
  ```

* **layouts:** Changed placeholders to accept attributes since angular2 complains if the element doesnt exist, and turned md-content into a class since `angular2-material` never intended for it to be a component. ([ab67c403d0aad3022e2e0112dfd62a89295c4f4b](https://github.com/Teradata/covalent/commit/ab67c403d0aad3022e2e0112dfd62a89295c4f4b))

    Before(elements):

  ```html
    <toolbar-content>
      ...
    </toolbar-content>

    <list-toolbar-content>
      ...
    </list-toolbar-content>

    <toolbar-buttons>
      ...
    </toolbar-buttons>

    <nav-toolbar-content>
      ...
    </nav-toolbar-content>

    <md-content>
      ...
    </md-content>
  ```

    After(attributes):

  ```html
    <div toolbar-content>
      ...
    </div>

    <div list-toolbar-content>
      ...
    </div>

    <div toolbar-buttons>
      ...
    </div>

    <div nav-toolbar-content>
      ...
    </div>

    <div class="md-content">
      ...
    </div>  
  ```

<a name="0.6.0"></a>
# [0.6.0 Butterfree Cumbersome](https://github.com/Teradata/covalent/tree/v0.6.0) (2016-08-19)


## Bug Fixes
* **docs:** Updated to git clone to correct repo url ([d3f0522d6521d9944eb274fcff62582624fa88ec](https://github.com/Teradata/covalent/commit/d3f0522d6521d9944eb274fcff62582624fa88ec))
* **loading:** Added a max diameter to TdLoadingComponent circle ([a013cd7a3d272f6836eea62fb26e69a8719469c1](https://github.com/Teradata/covalent/commit/a013cd7a3d272f6836eea62fb26e69a8719469c1))
* **loading:** Added NgZone#runOutsideAngular() to attach/detach loading component since it affected e2e tests with protractor. ([a013cd7a3d272f6836eea62fb26e69a8719469c1](https://github.com/Teradata/covalent/commit/a013cd7a3d272f6836eea62fb26e69a8719469c1))
* **loading:** Made loading component instantiation sync, so it can be called in [ngAfterContentInit] without problems when used as a directive. ([a013cd7a3d272f6836eea62fb26e69a8719469c1](https://github.com/Teradata/covalent/commit/a013cd7a3d272f6836eea62fb26e69a8719469c1))

## Code Refactoring

* **core:** Moved RESTService to **http** module ([2093930c45e7183280faea445fd5efd483fe3532](https://github.com/Teradata/covalent/commit/2093930c45e7183280faea445fd5efd483fe3532))
* **loading:** Removed deprecated TimerWrapper and ComponentResolver and added usage of ComponentFactoryResolver. ([a013cd7a3d272f6836eea62fb26e69a8719469c1](https://github.com/Teradata/covalent/commit/a013cd7a3d272f6836eea62fb26e69a8719469c1))
* **layouts:** Changing `<list-items>` and `<menu-items>` to use `<md-nav-list list-items>` and `<md-nav-list menu-items>` to be more flexible in layouts. ([1df3f42ead63a946e0c1749e66b06ef584e2dc79](https://github.com/Teradata/covalent/commit/1df3f42ead63a946e0c1749e66b06ef584e2dc79))
* **dependencies:** All modules depend now on @covalent/core.

## Features

* **docs:** Added active icon for menu-items in navigation list.
* **pipes:** Added truncate pipe and docs ([b213c7d0cd48aa544ab27432031ff2b0558bc315](https://github.com/Teradata/covalent/commit/b213c7d0cd48aa544ab27432031ff2b0558bc315))
* **http:** Introduced [http](https://github.com/Teradata/covalent/pull/25) module with abstract RESTService and HttpInterceptorService and docs ([2093930c45e7183280faea445fd5efd483fe3532](https://github.com/Teradata/covalent/commit/2093930c45e7183280faea445fd5efd483fe3532)), closes [#19](https://github.com/Teradata/covalent/issues/19)
* **loading:** Added number of registers/resolves to TdLoadingService register/resolve methods ([a013cd7a3d272f6836eea62fb26e69a8719469c1](https://github.com/Teradata/covalent/commit/a013cd7a3d272f6836eea62fb26e69a8719469c1))
* **docs:** Add scss theming info for covalent-quickstart ([e453a8055ff79b187f311255fe1662623564bb0d](https://github.com/Teradata/covalent/commit/e453a8055ff79b187f311255fe1662623564bb0d))
* **deploy:** Ship scss files in npm release ([d1027c666d919966520bfb32ac8304c4506e504e](https://github.com/Teradata/covalent/commit/d1027c666d919966520bfb32ac8304c4506e504e)), closes [#28](https://github.com/Teradata/covalent/issues/28)
* **steps:** Added toggle/open/close methods to TdStepComponent ([310fd388a8f3effca0aa0ccae534163bdc4ef733](https://github.com/Teradata/covalent/commit/310fd388a8f3effca0aa0ccae534163bdc4ef733))
* **chips:** Introduced [chips](https://github.com/Teradata/covalent/pull/44) module with autocomplete and docs ([095748ee5d0baf614055e892c2c15c3d38084e17](https://github.com/Teradata/covalent/commit/095748ee5d0baf614055e892c2c15c3d38084e17))
* **json-formatter:** Introduced [json-formatter](https://github.com/Teradata/covalent/pull/42) module and docs ([90fba53d8c7bad903dd6e05b280202a86650bd1a](https://github.com/Teradata/covalent/commit/90fba53d8c7bad903dd6e05b280202a86650bd1a))


## Internal

* **badge:** Added dependency badge to README ([147c06965227a481591e09e3d21cb46a413d9990](https://github.com/Teradata/covalent/commit/147c06965227a481591e09e3d21cb46a413d9990))
* **deploy:** Use hash urls for github pages ([92352314187a3592091ac7b6df4c2126e4d76d96](https://github.com/Teradata/covalent/commit/92352314187a3592091ac7b6df4c2126e4d76d96)), closes [#33](https://github.com/Teradata/covalent/issues/33)


## Breaking Changes

* **loading:** There is a need to add `TD_LOADING_ENTRY_COMPONENTS` in the `precompile` array of your main component, so the `TdLoadingComponent` can be resolved by the `ComponentFactoryResolver`.

  e.g. 

  ```typescript
  import { TD_LOADING_ENTRY_COMPONENTS } from '@covalent/core';
  ...
    precompile: [ TD_LOADING_ENTRY_COMPONENTS ],
  })
  export class YourMainComponent {}
  ```

* **td-layout:**  `<menu-items>` will need to change to `<md-nav-list menu-items>`

  Before:

  ```html
  <td-layout>
    <menu-items>
      ...
    </menu-items>
  </td-layout>
  ```

  After:

  ```html
  <td-layout>
    <md-nav-list menu-items>
      ...
    </md-nav-list>
  </td-layout>
  ```

* **td-layout-nav-list:** `<list-items>` will need to change to `<md-nav-list list-items>`

  Before:

  ```html
  <td-layout-nav-list>
    <list-items>
      ...
    </list-items>
  </td-layout-nav-list>
  ```

  After:

  ```html
  <td-layout-nav-list>
    <md-nav-list list-items>
      ...
    </md-nav-list>
  </td-layout-nav-list>
  ```

* **td-layout-manage-list:** `<list-items>` will need to change to `<md-nav-list list-items>`

  Before:

  ```html
  <td-layout-manage-list>
    <list-items>
      ...
    </list-items>
  </td-layout-manage-list>
  ```

  After:

  ```html
  <td-layout-manage-list>
    <md-nav-list list-items>
      ...
    </md-nav-list>
  </td-layout-manage-list>
  ```
