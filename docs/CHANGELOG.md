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
