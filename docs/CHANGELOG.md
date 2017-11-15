<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0 Responsive Skinnyjeans](https://github.com/Teradata/covalent/tree/v1.0.0-rc.0) (2017-11-14)

The main focus of this release is support both `@angular@5.0.0` and `@angular/material@5.0.0-rc0`, also making our modules really stand alone so they dont depend on the `platform.scss` styles and configurable typography following the angular material usage.

#### Highlights

- `@angular@5.0.0` support
- `@angular/material@5.0.0-rc.0` support
- Real stand alone modules with no dependency to external css styles
- Create style mixins to pick and choose which utility classes you want
- Configurable typography for all Covalent components
- More templates and migration to StackBlitz
- Bugfixes and improvements

## Bug Fixes
* **docs:** add missing (rowClick) event to data-table documentation ([b2d8cc229895aef88fe35df1580fc3c9e7a5beef](https://github.com/Teradata/covalent/commit/b2d8cc229895aef88fe35df1580fc3c9e7a5beef))
* **docs:** fix broken URL for material docs ([5488a099f42995455b8e7dbe9c48060b6657554d](https://github.com/Teradata/covalent/commit/5488a099f42995455b8e7dbe9c48060b6657554d))
* **loading:** get proper heights for overlay strategy ([da0221b6c0d79e56af908e3b7c9ded9e78dc1342](https://github.com/Teradata/covalent/commit/da0221b6c0d79e56af908e3b7c9ded9e78dc1342)), closes [#934](https://github.com/Teradata/covalent/issues/934)
* **media:** fix for `TdMediaService` doesn't trigger Portrait or Landscape ([3c7c5a154fa5fad007192bf257085239285d9f28](https://github.com/Teradata/covalent/commit/3c7c5a154fa5fad007192bf257085239285d9f28)), closes [#922](https://github.com/Teradata/covalent/issues/922)
* **virtual-scroll:** fix issue with virtual scroll not respecting the parent's width ([8849b00bcf8634d676c38ad85e5e1b77353afea1](https://github.com/Teradata/covalent/commit/8849b00bcf8634d676c38ad85e5e1b77353afea1))

## Features
* **all:** stop depending on layout.scss so modules are stand alone (too many commits to list), closes [#659](https://github.com/Teradata/covalent/issues/659)
* **all:** ability to override typography in components ([f8d2e0049b793b244c4ce10dd82ab9ea443ead15](https://github.com/Teradata/covalent/commit/f8d2e0049b793b244c4ce10dd82ab9ea443ead15))
* **data-table:** prioritize column setting for sortable ([d92726550928b1c692c5ade45f5ff4bff4bd6f59](https://github.com/Teradata/covalent/commit/d92726550928b1c692c5ade45f5ff4bff4bd6f59))
* **docs:** Add menu button to switch between dark and light themes ([4e80434f23f84e0a7ad7554c3f85d48da024c59c](https://github.com/Teradata/covalent/commit/4e80434f23f84e0a7ad7554c3f85d48da024c59c))
* **docs:** switch templates to StackBlitz ([d135e1e1754d45586b04997730fbade0a9aa0d6a](https://github.com/Teradata/covalent/commit/d135e1e1754d45586b04997730fbade0a9aa0d6a))
* **file-upload:** ngModel support added ([f62c4edca56169b8c0977993af956c107a02c274](https://github.com/Teradata/covalent/commit/f62c4edca56169b8c0977993af956c107a02c274))
* **loading:** remove blocking background from linear loader ([5bdf4a488893bbf2dd0f8029723d7244d7cd7a2f](https://github.com/Teradata/covalent/commit/5bdf4a488893bbf2dd0f8029723d7244d7cd7a2f)), closes [#823](https://github.com/Teradata/covalent/issues/823)
* **media:** change to BehaviorSubject to stop the use of broadcast method on page load ([0177a9a13db0bc2e7d34a72b1f946f6a47517385](https://github.com/Teradata/covalent/commit/0177a9a13db0bc2e7d34a72b1f946f6a47517385))
* **search:** Make icons of 'Search Box' and 'Search Input' customizable ([798800b1480f0867386a31562b612ad76d798549](https://github.com/Teradata/covalent/commit/798800b1480f0867386a31562b612ad76d798549)), closes [#420](https://github.com/Teradata/covalent/issues/420)
* **utilities:** change push/pad/pull utility baselines to be based on 4px ([d6e36138f1fe80d4790713aa5f1a321d39fcd2fd](https://github.com/Teradata/covalent/commit/d6e36138f1fe80d4790713aa5f1a321d39fcd2fd))
* **utilities:** chore(): create covalent mixins for alternative way to consume our css classes ([a76fde6283c7f13a53de5aeedf49c418237cce8e](https://github.com/Teradata/covalent/commit/a76fde6283c7f13a53de5aeedf49c418237cce8e))

## Internal
* **all:** replace deprecated /deep/ with ::ng-deep ([7b9f72f1dc00dc24ab46aa64e2eab9c51053f532](https://github.com/Teradata/covalent/commit/7b9f72f1dc00dc24ab46aa64e2eab9c51053f532))
* **dependencies:**  upgrade to rxjs@5.5.0 and switch to lettable operators ([69e4cb476f6fa8e53f179c10e067576390d7017e](https://github.com/Teradata/covalent/commit/69e4cb476f6fa8e53f179c10e067576390d7017e))
* **dependencies:** upgrade to angular@5.0.0 and material@5.0.0.rc ([ba18ef5629efc5ae61cb5d0045a91a0a8932fde1](https://github.com/Teradata/covalent/commit/ba18ef5629efc5ae61cb5d0045a91a0a8932fde1))


<a name="1.0.0-beta.8-1"></a>
# [1.0.0-beta.8-1](https://github.com/Teradata/covalent/tree/v1.0.0-beta.8-1) (2017-10-06)

Small patch release to support `@angular/material@2.0.0-beta.12`

#### Material Breaking Changes

The most important breaking change with this latest material release is that `mat-select` will need to be inside a `mat-form-field` if you want the placeholder and underline.

This does give an advantage that now `matInput` and `mat-select` will follow the same API's around hints, errors, prefix, suffix and placeholders.

Read more in the `@angular/material` [changelog](https://github.com/angular/material2/blob/master/CHANGELOG.md#200-beta12-marble-mustache-2017-10-05)

#### Highlights

- `@angular/material@2.0.0-beta.12` support

## Features
* **material:** upgrade to material@beta.12 [f728be364e05cb032102c8f79a611bc1d52d8ec6](https://github.com/Teradata/covalent/commit/f728be364e05cb032102c8f79a611bc1d52d8ec6)), closes [#913](https://github.com/Teradata/covalent/issues/913)


<a name="1.0.0-beta.8"></a>
# [1.0.0-beta.8 Free Fallin](https://github.com/Teradata/covalent/tree/v1.0.0-beta.8) (2017-10-05)

The main focus of this release is support for `@angular/material@2.0.0-beta.11` and rename all `md` references from our selectors and inputs to `mat` for future support since the `md` prefixes are gonna be removed on `@angular/material`'s following release.

The material team created a tool to update it automatically if you want to give it a test. [angular-material-prefix-updater](https://www.npmjs.com/package/angular-material-prefix-updater)

#### Material Breaking Changes

The material team decided to change their prefix from `md` to `mat`. Read more on the reasons in the `@angular/material` [changelog](https://github.com/angular/material2/blob/master/CHANGELOG.md#200-beta11-carapace-parapet-2017-09-21)

#### Steps to rename md to mat

We structured our commits in this [PR](https://github.com/Teradata/covalent/pull/890/commits) with the specific steps needed for the `md`/`mat` conversion.

#### Highlights

- `@angular/material@2.0.0-beta.11` support
- Bugfixes and improvements

## Bug Fixes
* **data-table:** replace hardcoded 100px min width with projected width and way to override it [025ead6e6383f6faafd51decda28511cd30b9e44](https://github.com/Teradata/covalent/commit/025ead6e6383f6faafd51decda28511cd30b9e44)), closes [#891](https://github.com/Teradata/covalent/issues/891)
* **data-table:** show which column was deselected when using single selection mode [013df521bc55818ee7bfe7cf318862ab02787abd](https://github.com/Teradata/covalent/commit/013df521bc55818ee7bfe7cf318862ab02787abd)), closes [#881](https://github.com/Teradata/covalent/issues/881)
* **file-upload:** clear internal file input on cancel [6220b2a7a867f66fd6892888a2e3b21a9a645c74](https://github.com/Teradata/covalent/commit/6220b2a7a867f66fd6892888a2e3b21a9a645c74))
* **json-formatter:** represent array of arrays properly [42c83987ef3498c52fa990ef974e819d1d606621](https://github.com/Teradata/covalent/commit/42c83987ef3498c52fa990ef974e819d1d606621)), closes [#852](https://github.com/Teradata/covalent/issues/852)
* **paging:** stop css bleed to all md-selects from paging scss [8a9b4db4ee89869a5f02b906b07c30f8d49a7bff](https://github.com/Teradata/covalent/commit/8a9b4db4ee89869a5f02b906b07c30f8d49a7bff)), closes [#872](https://github.com/Teradata/covalent/issues/872)
* **virtual-scroll:** re-render rows with proper height when replacing the data set [6590cf2497868d1151c36492f3fc75c4a3b53d8c](https://github.com/Teradata/covalent/commit/6590cf2497868d1151c36492f3fc75c4a3b53d8c)), closes [#878](https://github.com/Teradata/covalent/issues/878)

## Features
* **data-table:** allow dynamic row heights in data table even when using its virtual scroll impl [33790243daf55b265061b175bd092ec0063fc315](https://github.com/Teradata/covalent/commit/33790243daf55b265061b175bd092ec0063fc315)), closes [#868](https://github.com/Teradata/covalent/issues/868)
* **data-table:** update demo and docs with better examples and load data from service [33790243daf55b265061b175bd092ec0063fc315](https://github.com/Teradata/covalent/commit/33790243daf55b265061b175bd092ec0063fc315)), closes [#868](https://github.com/Teradata/covalent/issues/868)

## Refactor
* **material:** upgrade to material@beta.11 [5ffb36432ee155caf706c43aa88f42754e776d64](https://github.com/Teradata/covalent/commit/5ffb36432ee155caf706c43aa88f42754e776d64))
* **styles:** add mat- prefixes to all our md- prefixed classes (ignoring typography) [658680a03ba6fa7f4b7e3361e2404b5588743d99](https://github.com/Teradata/covalent/commit/658680a03ba6fa7f4b7e3361e2404b5588743d99))

## Internal
* **docs:** update resources layout & add Illustrator [00fcf66f2bbe0b86f488ae7ba2bffdd163ac32fe](https://github.com/Teradata/covalent/commit/00fcf66f2bbe0b86f488ae7ba2bffdd163ac32fe))
* **angular:** upgrade to angular@4.4.3 [5ffb36432ee155caf706c43aa88f42754e776d64](https://github.com/Teradata/covalent/commit/5ffb36432ee155caf706c43aa88f42754e776d64))


<a name="1.0.0-beta.7"></a>
# [1.0.0-beta.7 One Step Closer](https://github.com/Teradata/covalent/tree/v1.0.0-beta.7) (2017-09-11)

This release will make sure Covalent works properly with `@angular/material@2.0.0-beta.10`.

We are also pleased to announce the release of the [`covalent/text-editor`](https://github.com/Teradata/covalent-text-editor) module which wraps the SimpleMDE lib for Angular use.

#### Highlights

- Virtual scroll module
- Text Editor module
- Dynamic forms features and bug fixes
- Data table sticky headers, configurable column widths and virtual scroll
- Pre-canned animations!
- Initial [IE11](https://github.com/Teradata/covalent/blob/develop/docs/IE11.md) support (there may be issues, so please [create an issue](https://github.com/Teradata/covalent/issues/new) if you find one)

## Breaking Changes

Please check the Angular Material `beta.10` [changelog](https://github.com/angular/material2/blob/master/CHANGELOG.md#200-beta10-découpage-panjandrum-2017-08-29) for [breaking changes](https://github.com/angular/material2/blob/master/CHANGELOG.md#breaking-changes) and [deprecations](https://github.com/angular/material2/blob/master/CHANGELOG.md#deprecations), since those will be breaking changes in future material releases.

#### CovalentDynamicFormsModule

In order to ensure proper i18n support, all error messages must be provided by the developer.

e.g.

```html
<td-dynamic-forms #dynamicForm [elements]="dynamicElements">
  <ng-template let-element ngFor [ngForOf]="dynamicElements">
    <ng-template let-control="control" [tdDynamicFormsError]="element.name">
      <span *ngIf="control.touched || !control.pristine">
        <span *ngIf="control.hasError('required')">Required</span>
        <span *ngIf="control.hasError('min')">Min value: {{element.min}}</span>
        <span *ngIf="control.hasError('max')">Max value: {{element.max}}</span>
      </span>
    </ng-template>
  </ng-template>
</td-dynamic-forms>
```

#### CovalentPagingModule

The `md-select` component has been abstracted from the paging bar, so that it could be easily added by devs.

The following inputs are:

- `[pageSizes]`, `[pageSizeAll]`, `[pageSizeAllText]`.

Before:

```html
<td-paging-bar #pagingBar
                       [pageSizes]="[50,100,200,500,1000]"
                       [pageSize]="pageSize"
                       [total]="1345"
                       (change)="change($event)">
  <span td-paging-bar-label hide-xs>Rows per page:</span>
  <span>{{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span></span>
</td-paging-bar>
```

After:

```html
<td-paging-bar #pagingBar
                       [pageSize]="pageSize"
                       [total]="1345"
                       (change)="change($event)">
  <span hide-xs>Rows per page:</span>
  <md-select [(ngModel)]="pageSize">
    <md-option *ngFor="let size of [50,100,200,500,1000]" [value]="size">
      {{size}}
    </md-option>
  </md-select>
  <span>{{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span></span>
</td-paging-bar>
```

More information in [https://github.com/Teradata/covalent/pull/772](#772)

## Bug Fixes
* **chips:** close manually autocomplete menu on mousedown [08937b57b82691bf47d674c283406b3cef8897a3](https://github.com/Teradata/covalent/commit/08937b57b82691bf47d674c283406b3cef8897a3))
* **dynamic-forms:** dynamically add, edit, remove Form Controls [e7be2a8b506de83cf63420f0842ba4f5170d9446](https://github.com/Teradata/covalent/commit/e7be2a8b506de83cf63420f0842ba4f5170d9446))
* **flex-layout:** fixed breakpoints limits [2e3b35f72d7d39860b0241128f68b0e097c0eb0c](https://github.com/Teradata/covalent/commit/2e3b35f72d7d39860b0241128f68b0e097c0eb0c))
* **layout:** fix layout directives not hidden element in certain scenarios [d3c8d1b57668d22383316a2daedc7275e43381f0](https://github.com/Teradata/covalent/commit/d3c8d1b57668d22383316a2daedc7275e43381f0))
* **demos:** fix snackbar demos to be more inline with Angular Material [2342dea1e906b9934e9b3264b07f2f792c877290](https://github.com/Teradata/covalent/commit/2342dea1e906b9934e9b3264b07f2f792c877290))
* **sass:** missing scss variables for scss compilation [0a22bbabf053423e586d06d1d6744e118f4c426c](https://github.com/Teradata/covalent/commit/0a22bbabf053423e586d06d1d6744e118f4c426c))


## Features
* **animations:** added pre-canned animation docs [e182bc5e4dcdcc3f9d43eb340ff58f5097e1e777](https://github.com/Teradata/covalent/commit/e182bc5e4dcdcc3f9d43eb340ff58f5097e1e777))
* **animations:** added rotate animation [e182bc5e4dcdcc3f9d43eb340ff58f5097e1e777](https://github.com/Teradata/covalent/commit/e182bc5e4dcdcc3f9d43eb340ff58f5097e1e777))
* **animations:** added attention seekers animations [f106ccf8204d54a95312636aa961c199221fc538](https://github.com/Teradata/covalent/commit/f106ccf8204d54a95312636aa961c199221fc538))
* **animations:** added collapse and fade in/out animations [6906c7557070647f8685445a180a82489c649344](https://github.com/Teradata/covalent/commit/6906c7557070647f8685445a180a82489c649344))
* **browser:** base platform & docs support for IE11 [fee4182540a60ae5a86ffdf4fc5a87216ac30226](https://github.com/Teradata/covalent/commit/fee4182540a60ae5a86ffdf4fc5a87216ac30226))
* **chips:** add chipBlur and chipFocus events to chips [ee7f40f2b2f21ee7cb6401535710621ea5449a46](https://github.com/Teradata/covalent/commit/ee7f40f2b2f21ee7cb6401535710621ea5449a46))
* **code-editor:** introducing [`covalent-text-editor`](https://github.com/Teradata/covalent-text-editor) in our docs.
* **data-table:** add fixed headers when scrolling body [c5f065a3c779eb1b0891efb60748fd3c85ff7035](https://github.com/Teradata/covalent/commit/c5f065a3c779eb1b0891efb60748fd3c85ff7035))
* **data-table:** add virtual scroll into data table [c5f065a3c779eb1b0891efb60748fd3c85ff7035](https://github.com/Teradata/covalent/commit/c5f065a3c779eb1b0891efb60748fd3c85ff7035))
* **data-table:** add configurable column widths [c5f065a3c779eb1b0891efb60748fd3c85ff7035](https://github.com/Teradata/covalent/commit/c5f065a3c779eb1b0891efb60748fd3c85ff7035))
* **data-table:** make users provide all the pieces of an atomic data-table [c5f065a3c779eb1b0891efb60748fd3c85ff7035](https://github.com/Teradata/covalent/commit/c5f065a3c779eb1b0891efb60748fd3c85ff7035))
* **dependencies:** add basic support for Angular v5 [e5fc929c193e46e89c36bbeb0a0333acc3dfb2a5](https://github.com/Teradata/covalent/commit/e5fc929c193e46e89c36bbeb0a0333acc3dfb2a5))
* **dynamic-forms:** added dynamic file input [5993f7ec2892c56028076518f60dc93c26a0a24f](https://github.com/Teradata/covalent/commit/5993f7ec2892c56028076518f60dc93c26a0a24f))
* **dynamic-forms:** make flex width % configurable via element interface [e7be2a8b506de83cf63420f0842ba4f5170d9446](https://github.com/Teradata/covalent/commit/e7be2a8b506de83cf63420f0842ba4f5170d9446))
* **dynamic-forms:** support OnPush change detection [e7be2a8b506de83cf63420f0842ba4f5170d9446](https://github.com/Teradata/covalent/commit/e7be2a8b506de83cf63420f0842ba4f5170d9446))
* **dynamic-forms:** add demo to build your own dynamic forms [e7be2a8b506de83cf63420f0842ba4f5170d9446](https://github.com/Teradata/covalent/commit/e7be2a8b506de83cf63420f0842ba4f5170d9446))
* **dynamic-forms:** add minLength and maxLength validations [be37ea1250e8ebb927120ed0244d2c8a10cfcf14](https://github.com/Teradata/covalent/commit/be37ea1250e8ebb927120ed0244d2c8a10cfcf14))
* **dynamic-forms:** ability to add value/label selection values to dynamic select [8cc52a03f499e46761ddcb70c65a582fe106f8c2](https://github.com/Teradata/covalent/commit/8cc52a03f499e46761ddcb70c65a582fe106f8c2))
* **dynamic-forms:** add custom validation capability and error message template [9050f96be192233c0e9a7c87518c653d7a23b32e](https://github.com/Teradata/covalent/commit/9050f96be192233c0e9a7c87518c653d7a23b32e))
* **docs:** added dedicated Design Patterns section [e586d71f7042023e813af6dd6006d1a68e5fe472](https://github.com/Teradata/covalent/commit/e586d71f7042023e813af6dd6006d1a68e5fe472))
* **navigation-drawer:** ability to override toolbar content [1a7c71ba14b4c10c75a039105c6da83483b63b30](https://github.com/Teradata/covalent/commit/1a7c71ba14b4c10c75a039105c6da83483b63b30))
* **paging:** new demo for input `go to` usage with paging bar leveraging exposed API's [846a4b4ac9403f6a07b582170cfca52b46361a34](https://github.com/Teradata/covalent/commit/846a4b4ac9403f6a07b582170cfca52b46361a34)), closes [#743](https://github.com/Teradata/covalent/issues/743)
* **text-editor:** demo for Covalent text/markdown editor [3127d76856362d84794c0ace1448580eb8f7eb8a](https://github.com/Teradata/covalent/commit/3127d76856362d84794c0ace1448580eb8f7eb8a))
* **virtual-scroll:** initial implementation of virtual scroll module [7bb723dc81f5e5afb6ca77cbc4f6fda3cb8ffe14](https://github.com/Teradata/covalent/commit/7bb723dc81f5e5afb6ca77cbc4f6fda3cb8ffe14))


## Refactor
* **all:** leverage coerceBooleanProperty from `@angular/cdk` [707d0774431eb1832fd9f929abb0d0bde0524bbf](https://github.com/Teradata/covalent/commit/707d0774431eb1832fd9f929abb0d0bde0524bbf))
* **rxjs:** remove uses of rxjs patch operators [9394017896ccdd63ea7a2ec73345f6fd2e3058f7](https://github.com/Teradata/covalent/commit/9394017896ccdd63ea7a2ec73345f6fd2e3058f7))
* **all:** abstract disableRipple inputs and create mixin for reuse [df4fbf167682aef8987a7bdcbe817c7e624d9819](https://github.com/Teradata/covalent/commit/df4fbf167682aef8987a7bdcbe817c7e624d9819))
* **paging:** refactor paging bar to allow devs leverage API for multiple usages [7f2815d8f20eb59eba026a4ce8980c109f68e5e7](https://github.com/Teradata/covalent/commit/7f2815d8f20eb59eba026a4ce8980c109f68e5e7))

## Performance
* **build:** leverage tslib to reduce bundle size and create minified UMD bundle [3ab2fa02d16d33fb032e9efce84a06521b046573](https://github.com/Teradata/covalent/commit/3ab2fa02d16d33fb032e9efce84a06521b046573))
* **data-table:** make checkbox state check more performant [3d2a1abaca6b1f919c208f6e785e9cd36e701d5b](https://github.com/Teradata/covalent/commit/3d2a1abaca6b1f919c208f6e785e9cd36e701d5b))

## Internal
* **all:** set fixed dependencies to zone.js and tslint [d3c8d1b57668d22383316a2daedc7275e43381f0](https://github.com/Teradata/covalent/commit/d3c8d1b57668d22383316a2daedc7275e43381f0))
* **dependencies:** upgrade to @angular/cli@1.4.1 [6fec819e8ad4a98111b482ad0766edd645a070c6](https://github.com/Teradata/covalent/commit/6fec819e8ad4a98111b482ad0766edd645a070c6))
* **dependencies:** upgrade to material/cdk@beta.10 [d53ef53bff710eb0e9447880d55cef4951f3c8b5](https://github.com/Teradata/covalent/commit/d53ef53bff710eb0e9447880d55cef4951f3c8b5))
* **node:** update node engine to 6.11.1 [c3a056bc750422e44602dbca4e3a47b3230f716c](https://github.com/Teradata/covalent/commit/c3a056bc750422e44602dbca4e3a47b3230f716c))
* **ssr:** first iteration on kitchen sink for server-side rendering test script [d88d0be8ade25ca7b9170586ce15762ea5da7de0](https://github.com/Teradata/covalent/commit/d88d0be8ade25ca7b9170586ce15762ea5da7de0))

<a name="1.0.0-beta.6"></a>
# [1.0.0-beta.6 Midnight Rider](https://github.com/Teradata/covalent/tree/v1.0.0-beta.6) (2017-07-07)

This release will make sure we work properly with `@angular/material@2.0.0-beta.8` + usage of the `cdk` module + some layout structure changes to add more flexibility and better  examples for each layout.

Please check the angular material `beta.7` and `beta.8` [changelog](https://github.com/angular/material2/blob/master/CHANGELOG.md#200-beta8-plasma-abacus-2017-07-06)

We are also pleased to announce the release of the [`covalent/code-editor`](https://github.com/Teradata/covalent-code-editor) module which makes the `Monaco` editor (used by `vscode`) simple to use in the browser or electron.

## Breaking Changes

#### @angular/cdk

Material introduced the `component toolkit` module and covalent has been using it for quite a while (directly from `@angular/material`).

So this dependency is needed to be able to use `covalent` and soon `material` since they are deprecating the `cdk` imports from the `@angular/material` package.

So just `npm install @angular/cdk` and you will be good to go!

#### td-chips

We will deprecate the `readOnly` input in favor of a `disabled` input to keep consistency across components and reuse the newly disabled mixin.

#### CovalentLayoutModule

We abstracted the `menu` button from `td-layout-nav` and `td-layout-nav-list`, the `arrow_back` button from `td-layout-nav-list` and `td-layout-manage-list` and the `md-toolbar` from `td-layout-manage-list` and introduced layout directives that toggle/close/open their immediate parent.

The following directives are:

- `[tdLayoutToggle]`, `[tdLayoutOpen]`, `[tdLayoutClose]` for the `td-layout` sidenav.
- `[tdLayoutNavListToggle]`, `[tdLayoutNavListOpen]`, `[tdLayoutNavListClose]` for the `td-layout-nav-list` sidenav.
- `[tdLayoutManageListToggle]`, `[tdLayoutManageListOpen]`, `[tdLayoutManageListClose]` for the `td-layout-manage-list` sidenav.

Every directive has a `[hideWhenOpened]` input that hides the host element when the bound sidenav is opened if set to `true`, also every directive can take a boolean to allow or block the click action.

e.g. `td-layout-nav`

Before:

```html
<td-layout>
  <div td-sidenav-content>
    Sidenav content
  </div>
  <td-layout-nav toolbarTitle="Title">
    Content
  <td-layout-nav>
</td-layout>
```

After:

```html
<td-layout>
  <div td-sidenav-content>
    Sidenav content
  </div>
  <td-layout-nav toolbarTitle="Title">
    <button md-icon-button td-menu-button tdLayoutToggle>
      <md-icon>menu</md-icon>
    </button>
    Content
  <td-layout-nav>
</div>
```

OR

```html
<td-layout-nav toolbarTitle="Title">
  <button md-icon-button td-menu-button (click)="somethingElse()">
    <md-icon>menu</md-icon>
  </button>
  Content
<td-layout-nav>
```

e.g. `td-layout-nav-list`

Before:

```html
<td-layout-nav-list #navList toolbarTitle="Title">
  <div td-sidenav-content (click)="!media.query('gt-sm') && navList.close()">
    Sidenav Content
  </div>
  <div td-toolbar-content>
    Toolbar content
  </div>
  Content
 <td-layout-nav-list> 
```

After:

```html
<td-layout-nav-list toolbarTitle="Title">
  <button md-icon-button td-menu-button tdLayoutToggle>
    <md-icon>menu</md-icon>
  </button>
  <div td-sidenav-content [tdLayoutNavListClose]="!media.query('gt-sm')">
    Sidenav Content
  </div>
  <div td-toolbar-content>
    <button md-icon-button tdLayoutNavListOpen [hideWhenOpened]="true">
      <md-icon>arrow_back</md-icon>
    </button>
  </div>
  Content
 <td-layout-nav-list> 
```

e.g. `td-layout-manage-list`

Before:

```html
<td-layout-manage-list #manageList>
  <md-toolbar td-sidenav-content></md-toolbar>
  <div td-sidenav-content (click)="!media.query('gt-sm') && manageList.close()">
    Sidenav Content
  </div>
  <div td-toolbar-content>
    Toolbar content
  </div>
  Content
 <td-layout-manage-list> 
```

After:

```html
<td-layout-manage-list>
  <md-toolbar td-sidenav-content></md-toolbar>
  <div td-sidenav-content [tdLayoutManageListClose]="!media.query('gt-sm')">
    Sidenav Content
  </div>
  <md-toolbar>
    <button md-icon-button tdLayoutManageListOpen [hideWhenOpened]="true">
      <md-icon>arrow_back</md-icon>
    </button>
  </md-toolbar>
  Content
 <td-layout-manage-list> 
```  

All these changes will allow the developers to toggle parent sidenavs with any clickable element + able to toggle/open/close parent sidenavs from child routes + allow mixing and matching different layouts.

e.g.

```html
<td-layout>
  <div td-sidenav-content>
    Main Sidenav content
  </div>
  <td-layout-nav toolbarTitle="Title">
    <!-- [tdLayoutToggle] makes this button's click toggle the td-layout sidenav -->
    <!-- [td-menu-button] is used to position this button before the logo and title -->
    <button md-icon-button td-menu-button tdLayoutToggle>
      <md-icon>menu</md-icon>
    </button>
    <td-layout-manage-list>
      <md-toolbar td-sidenav-content>
        Section Title
      </md-toolbar>
      <!-- [tdLayoutManageListClose] makes this button's click close the td-layout-manage-list sidenav -->
      <div td-sidenav-content tdLayoutManageListClose>
        Manage List Sidenav Content
      </div>
      <td-layout-nav toolbarTitle="Page Title">
        <!-- [tdLayoutManageListOpen] makes this button's click close the td-layout-manage-list sidenav -->
        <!-- [hideWhenOpened] is used to hide the button when the sidenav is opened -->
        <button md-icon-button td-menu-button tdLayoutManageListOpen [hideWhenOpened]="true">
          <md-icon>arrow_back</md-icon>
        </button>
        Content
      </td-layout-nav>
    </td-layout-manage-list>
  </td-layout-nav>
</td-layout>
```

OR

```html
<td-layout-nav toolbarTitle="Title">
  <!-- [td-menu-button] is used to position this button before the logo and title -->
  <!-- now we use it to toggle the manage-list sidenav for small/mid apps -->
  <button md-icon-button td-menu-button (click)="manageList.toggle()">
    <md-icon>menu</md-icon>
  </button>
  <td-layout-manage-list #manageList>
    <div td-sidenav-content>
      Manage List Sidenav Content
    </div>
    Content
  </td-layout-manage-list>
</td-layout-nav>
```

## Bug Fixes

* **chips:** underline wasnt showing properly when disabled in material `beta.7` and `beta.8` ([045b8688759d8895978d1680de4bcea472ada6f4](https://github.com/Teradata/covalent/commit/045b8688759d8895978d1680de4bcea472ada6f4))
* **data-table:** selectAll event will send toggled rows only ([0c3b31c0c97fadbcaa1eea1cedee7fd4a256e7bc](https://github.com/Teradata/covalent/commit/0c3b31c0c97fadbcaa1eea1cedee7fd4a256e7bc))
* **data-table:** fixes click row error in firefox ([c0da66182ca383aed0dafc05e6288dbea3d3f1b6](https://github.com/Teradata/covalent/commit/c0da66182ca383aed0dafc05e6288dbea3d3f1b6)), closes [#692](https://github.com/Teradata/covalent/issues/692)
* **file:** make progress based on upload API ([9180f9964c90416dca342111eaea8f1804f3f182](https://github.com/Teradata/covalent/commit/9180f9964c90416dca342111eaea8f1804f3f182))
* **file:** file upload xhr request status and response fix ([34ed963173cecf4fc20dd68650e56f0f5aee7d97](https://github.com/Teradata/covalent/commit/34ed963173cecf4fc20dd68650e56f0f5aee7d97))
* **layouts:** remove % note from `sidenavWidth` ([ec31c38ec7d55ee402c196c296fc12f3635fad28](https://github.com/Teradata/covalent/commit/ec31c38ec7d55ee402c196c296fc12f3635fad28))
* **layouts:** fix issue with where the width would act weird in certain occations when the min-width was greater than the max-width ([ec31c38ec7d55ee402c196c296fc12f3635fad28](https://github.com/Teradata/covalent/commit/ec31c38ec7d55ee402c196c296fc12f3635fad28))
* **loading:** `language-service` complain with loading directive (template with no implicit value) ([b84c6c7e90ba0ce8c2271d150dff63d2b70ee004](https://github.com/Teradata/covalent/commit/b84c6c7e90ba0ce8c2271d150dff63d2b70ee004))
* **message:** fixed closing html tags in `message` README.md ([4d15d69f3507861516e3a40054b7c234d17f5421](https://github.com/Teradata/covalent/commit/4d15d69f3507861516e3a40054b7c234d17f5421))

## Features
* **code-editor:** introducing [`covalent-code-editor`](https://github.com/Teradata/covalent-code-editor) in our docs. ([5a20fa9ae943a82186cd0e6504bfa7ce5187ba41](https://github.com/Teradata/covalent/commit/5a20fa9ae943a82186cd0e6504bfa7ce5187ba41))
* **data-table:** add `[compareWith]` input to allow row comparison ([b948746b7fe1f497b224af090549c32bfdb688d1](https://github.com/Teradata/covalent/commit/b948746b7fe1f497b224af090549c32bfdb688d1))
* **layout:** introducing layout directives ([8881dc8e2b5e283e52d8a80598ab648b9b326f59](https://github.com/Teradata/covalent/commit/8881dc8e2b5e283e52d8a80598ab648b9b326f59)) and ([346a4bf8e0de59e3c70ba12cd3b49c32c216d757](https://github.com/Teradata/covalent/commit/346a4bf8e0de59e3c70ba12cd3b49c32c216d757))
* **layout:** add better examples/demos for layout usages ([346a4bf8e0de59e3c70ba12cd3b49c32c216d757](https://github.com/Teradata/covalent/commit/346a4bf8e0de59e3c70ba12cd3b49c32c216d757))

## Refactor
* **disabled:** create a disabled mixin to reuse common disabled behavior ([e07e8e8048c74525f40e2e5a84973520de8a2b54](https://github.com/Teradata/covalent/commit/e07e8e8048c74525f40e2e5a84973520de8a2b54))
* **chips:**  rename `readOnly` to `disabled` and reuse disabled mixin ([e07e8e8048c74525f40e2e5a84973520de8a2b54](https://github.com/Teradata/covalent/commit/e07e8e8048c74525f40e2e5a84973520de8a2b54))

## Performance
* **data-table:** add selected input in row to preserve value ([53592fa24eafd42deafb469212405b8bf8c65025](https://github.com/Teradata/covalent/commit/53592fa24eafd42deafb469212405b8bf8c65025))

## Internal
* **dependencies:** upgrade `@angular/material` to `1.0.0-beta.8` ([045b8688759d8895978d1680de4bcea472ada6f4](https://github.com/Teradata/covalent/commit/045b8688759d8895978d1680de4bcea472ada6f4))
* **dependencies:** add `@angular/cdk` as dependency and import where needed ([045b8688759d8895978d1680de4bcea472ada6f4](https://github.com/Teradata/covalent/commit/045b8688759d8895978d1680de4bcea472ada6f4))
* **dependencies:** hard set typescript dependency to `2.3.2` to avoid error with `rxjs@5.4.1` ([f5d9f3373a5772ba0e3206f813f2983fc2c59f9b](https://github.com/Teradata/covalent/commit/f5d9f3373a5772ba0e3206f813f2983fc2c59f9b))
* **dependencies:** upgrade `@angular/cli` to `1.2.0` ([5f493f6a862105f94cb711edd73a73d4f9059884](https://github.com/Teradata/covalent/commit/5f493f6a862105f94cb711edd73a73d4f9059884))
* **docs:** load notification README instead of duplicated docs ([91fb8528fded955da75c7be4e302d1bc23b4f69c](https://github.com/Teradata/covalent/commit/91fb8528fded955da75c7be4e302d1bc23b4f69c))
* **docs:** fix chips README table structure ([91fb8528fded955da75c7be4e302d1bc23b4f69c](https://github.com/Teradata/covalent/commit/91fb8528fded955da75c7be4e302d1bc23b4f69c))


<a name="1.0.0-beta.5-1"></a>
# [1.0.0-beta.5-1](https://github.com/Teradata/covalent/tree/v1.0.0-beta.5) (2017-06-12)

Small patch release to address a loading component issue and documentation updates with `angular@4.2.0` change detection since creating components or changing inputs on component life hooks cycles need to explicitly call a change detection cycle by developers.

## Bug Fixes
* **loading:** when using the full screen loader in `ngOnInit` it fails ([349d108033f13e1bce5491cc0185b69c596b17f7](https://github.com/Teradata/covalent/commit/349d108033f13e1bce5491cc0185b69c596b17f7))

## Internal
* **docs:** footer & expansion theme, update logo docs ([574e6d184864dbcc46206210ec7c9699807f9c90](https://github.com/Teradata/covalent/commit/574e6d184864dbcc46206210ec7c9699807f9c90)), closes [#578](https://github.com/Teradata/covalent/issues/578)
* **docs:** update documentation with the way to use `media.broadcast` with layouts in `ngAfterViewInit` ([2606b754a303271c41b1d4dd7c37bf24b5b2d4c6](https://github.com/Teradata/covalent/commit/2606b754a303271c41b1d4dd7c37bf24b5b2d4c6)), closes [#684](https://github.com/Teradata/covalent/issues/684)


<a name="1.0.0-beta.5"></a>
# [1.0.0-beta.5 Blackhole Sun](https://github.com/Teradata/covalent/tree/v1.0.0-beta.5) (2017-06-09)

## Breaking Change

#### td-chips

Now that chips have async support and we've abstracted the internal filtering mechanism, the developer needs to provide their own filter.

This will also allow the developer to create custom filters both locally and server-side.

e.g.

```html
<td-chips [items]="filteredStrings"
          [(ngModel)]="stringsModel"
          placeholder="Enter autocomplete strings"
          (inputChange)="filterStrings($event)"
          requireMatch>
</td-chips>
```


```typescript

strings: string[] = [
  'stepper',
  'expansion-panel',
  'markdown',
  'highlight',
  'loading',
  'media',
  'chips',
  'http',
  'json-formatter',
  'pipes',
  'need more?',
];

filteredStrings: string[];

stringsModel: string[] = this.strings.slice(0, 6);

ngOnInit(): void {
  this.filterStrings('');
}

filterStrings(value: string): void {
  if (value) {
    this.filteredStrings = this.strings.filter((item: any) => {
      return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
    }).filter((filteredItem: any) => {
      return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
    });
  }
}
```

#### td-expansion-panel

With the introduction of `td-expansion-panel-group`, the `td-expansion-panel` expanded margin animation will not be applied unless the `td-expansion-panel` is grouped inside of a `td-expansion-panel-group`.

e.g.

```html
<!-- not applied -->
<td-expansion-panel></td-expansion-panel>

<!-- applied -->
<td-expansion-panel-group>
  <td-expansion-panel></td-expansion-panel>
  <td-expansion-panel></td-expansion-panel>
  <td-expansion-panel></td-expansion-panel>
</td-expansion-panel-group>
```

## Bug Fixes

* **chips:** keep focused state as long as you keep clicking inside the chips context ([22d4342c4072560e3903820c4009f8129ec0d184](https://github.com/Teradata/covalent/commit/22d4342c4072560e3903820c4009f8129ec0d184))
* **data-table:** not throw `(rowClick)` event when clicking on checkbox ([ec1cbd8c962d0e5610b075b6f3655afa589ba121](https://github.com/Teradata/covalent/commit/ec1cbd8c962d0e5610b075b6f3655afa589ba121)), closes [#611](https://github.com/Teradata/covalent/issues/611)
* **expansion-panel:** only render label and sublabel when its needed ([e62d3bd68553be7cee188c0b761c68d11247f902](https://github.com/Teradata/covalent/commit/e62d3bd68553be7cee188c0b761c68d11247f902))
* **layout:** use `ScrollDispatcherModule` and leverage `cdkScrollable` in layouts so material components readjust when scrolling ([629d06f161c00f99218708570d6085acbf58ee4f](https://github.com/Teradata/covalent/commit/629d06f161c00f99218708570d6085acbf58ee4f)), closes [#620](https://github.com/Teradata/covalent/issues/620)
* **media:** make media service not use window directly ([90e16f5d7be080aee1601a2d86e72c47536c3e40](https://github.com/Teradata/covalent/commit/90e16f5d7be080aee1601a2d86e72c47536c3e40))
* **stepper:** horizontal scroll was not appearing when needed in certain cases ([9542139ba7b8e84435b1cda47f875b927787a64a](https://github.com/Teradata/covalent/commit/9542139ba7b8e84435b1cda47f875b927787a64a)), closes [#282](https://github.com/Teradata/covalent/issues/282)
* **stepper:** add `cdkScrollable` so material component can hook into it ([9542139ba7b8e84435b1cda47f875b927787a64a](https://github.com/Teradata/covalent/commit/9542139ba7b8e84435b1cda47f875b927787a64a))
* **styles:** fix sm/md/lg card images in title-group ([dda5d9cc3c5fe5728b9b9b27f8a6afa95f969861](https://github.com/Teradata/covalent/commit/dda5d9cc3c5fe5728b9b9b27f8a6afa95f969861))
* **theme:** remove duplicate functions that are already part of material ([98eaf28287db5ebe0597804818a99a11fe82b00a](https://github.com/Teradata/covalent/commit/98eaf28287db5ebe0597804818a99a11fe82b00a)), closes [#632](https://github.com/Teradata/covalent/issues/632)

## Features

* **chips:** new `[chipRemoval]` input to block chips from being removed ([51ba94db1b7adef51a67407fc9db8504678a9af8](https://github.com/Teradata/covalent/commit/51ba94db1b7adef51a67407fc9db8504678a9af8))
* **chips:**  add `[color]` input to change the color of focused chips, input and underline ([5c2635c6548741442100b98724adcf607c6fb770](https://github.com/Teradata/covalent/commit/5c2635c6548741442100b98724adcf607c6fb770)), closes [#605](https://github.com/Teradata/covalent/issues/605)
* **chips:** new `[stacked]` input to make chips stack vertically. ([9a18a6314853f35991868cd0260884fa4cc5b3a4](https://github.com/Teradata/covalent/commit/9a18a6314853f35991868cd0260884fa4cc5b3a4))
* **chips:** ability to use object lists and set templates for both autocomplete and chips ([22d4342c4072560e3903820c4009f8129ec0d184](https://github.com/Teradata/covalent/commit/22d4342c4072560e3903820c4009f8129ec0d184))
* **chips:** abstract the autocomplete filtering and add debounce input (local vs server) ([22d4342c4072560e3903820c4009f8129ec0d184](https://github.com/Teradata/covalent/commit/22d4342c4072560e3903820c4009f8129ec0d184)), closes [#252](https://github.com/Teradata/covalent/issues/252), [#359](https://github.com/Teradata/covalent/issues/252), [#359](https://github.com/Teradata/covalent/issues/601)
* **chips:** add `td-chip-avatar` when using template `td-chip` to mimic a contact chip ([fe9daccb5fd436a3ca527d4e694cc2e02e26f79d](https://github.com/Teradata/covalent/commit/fe9daccb5fd436a3ca527d4e694cc2e02e26f79d))
* **dependencies:** upgrade to `@angular/material@2.0.0-beta.6` ([629d06f161c00f99218708570d6085acbf58ee4f](https://github.com/Teradata/covalent/commit/629d06f161c00f99218708570d6085acbf58ee4f))
* **dialog:**  improve `prompt-dialog` a11y by selection text in input when focused ([e9427aaee1520a83326cd242850b525915b7c5fe](https://github.com/Teradata/covalent/commit/e9427aaee1520a83326cd242850b525915b7c5fe)), closes [#616](https://github.com/Teradata/covalent/issues/616)
* **expansion-panel:** introducing `td-expansion-panel-group` to only give margin to expansion panels when grouped ([9ae0ba532bbabde6eca8d1b4315667333e83ae35](https://github.com/Teradata/covalent/commit/9ae0ba532bbabde6eca8d1b4315667333e83ae35))
* **expansion-panel:** add `[disableRipple]` input to disable ripple effect on demand ([33810ce86915c6d1e948e426a6056500d88e6827](https://github.com/Teradata/covalent/commit/33810ce86915c6d1e948e426a6056500d88e6827))
* **layout:** add `[mode]`, `[opened]` and `[sidenavWidth]` to `td-layout` ([e2172fafdd7ea03f7db1df8d21abea4238e14d65](https://github.com/Teradata/covalent/commit/e2172fafdd7ea03f7db1df8d21abea4238e14d65))
* **layout:** add `[color]` input to `td-layout-footer` ([e912ef4bed205d7da4743d83c45bce3edf150084](https://github.com/Teradata/covalent/commit/e912ef4bed205d7da4743d83c45bce3edf150084)), closes [#489](https://github.com/Teradata/covalent/issues/489)
* **message:** add animation when opening/closing ([5a858c7a94bd3247487684a7473a2657105dbe2a](https://github.com/Teradata/covalent/commit/5a858c7a94bd3247487684a7473a2657105dbe2a))
* **stepper:** add `[disableRipple]` input to disable ripple effect on demand ([33810ce86915c6d1e948e426a6056500d88e6827](https://github.com/Teradata/covalent/commit/33810ce86915c6d1e948e426a6056500d88e6827))

## Performance
* **all:** make sure all services are singleton when provided ([4544c1a5bcabb1fa3e60b6fe6c2f6e1a5215ab5c](https://github.com/Teradata/covalent/commit/4544c1a5bcabb1fa3e60b6fe6c2f6e1a5215ab5c))
* **chips:** support `OnPush` change detection ([22d4342c4072560e3903820c4009f8129ec0d184](https://github.com/Teradata/covalent/commit/22d4342c4072560e3903820c4009f8129ec0d184))
* **expansion-panel:** improved animation performance when toggling in group ([9ae0ba532bbabde6eca8d1b4315667333e83ae35](https://github.com/Teradata/covalent/commit/9ae0ba532bbabde6eca8d1b4315667333e83ae35))


## Internal
* **animations:** make toggle directive use new animations API ([90e16f5d7be080aee1601a2d86e72c47536c3e40](https://github.com/Teradata/covalent/commit/90e16f5d7be080aee1601a2d86e72c47536c3e40))
* **animations:** make fade directive use new animations API ([90e16f5d7be080aee1601a2d86e72c47536c3e40](https://github.com/Teradata/covalent/commit/90e16f5d7be080aee1601a2d86e72c47536c3e40))
* **dependencies:** upgrade to @angular@4.2.0 ([90e16f5d7be080aee1601a2d86e72c47536c3e40](https://github.com/Teradata/covalent/commit/90e16f5d7be080aee1601a2d86e72c47536c3e40))
* **dependencies:** upgrade to @angular/cli@1.1.0 ([90e16f5d7be080aee1601a2d86e72c47536c3e40](https://github.com/Teradata/covalent/commit/90e16f5d7be080aee1601a2d86e72c47536c3e40))
* **docs:** new landing page and theme ([615a4ee02976f4d0ffa0f0394c562cbdcdce5a25](https://github.com/Teradata/covalent/commit/615a4ee02976f4d0ffa0f0394c562cbdcdce5a25))
* **docs:** fix rtl/lrt demo in docs ([7874b5b7a371aeffe9d9d239e910ab31c3a79399](https://github.com/Teradata/covalent/commit/7874b5b7a371aeffe9d9d239e910ab31c3a79399))
* **docs:** add selective preload strategy for lazy loading ([3b4da1cd72b64d20b6f0deb8c7668d785cbd272a](https://github.com/Teradata/covalent/commit/3b4da1cd72b64d20b6f0deb8c7668d785cbd272a))
* **docs:** improved demos/examples
* **docs:** make docs render properly in IE11 ([a118fb9e9f5b83c830f7be9bc7ea19586e1067f6](https://github.com/Teradata/covalent/commit/a118fb9e9f5b83c830f7be9bc7ea19586e1067f6))
* **chips:** add more unit tests
* **validators:** remove max/min validators since angular already has them ([8e9ab29d170f91bc61a54cb07581e0631a576410](https://github.com/Teradata/covalent/commit/8e9ab29d170f91bc61a54cb07581e0631a576410))
* **stepper:** change internal label class to `mat-inactive` ([bb9331b3dffb93c4e96281c8d9469fa8f12e52e3](https://github.com/Teradata/covalent/commit/bb9331b3dffb93c4e96281c8d9469fa8f12e52e3))


<a name="1.0.0-beta.4"></a>
# [1.0.0-beta.4 Johnny B Goode](https://github.com/Teradata/covalent/tree/v1.0.0-beta.4) (2017-05-16)

## Breaking Change
* **all:** remove forRoot() deprecations from modules. ([20b87c3a127e5c61f1cfa758840d5e6f36467a4d](https://github.com/Teradata/covalent/commit/20b87c3a127e5c61f1cfa758840d5e6f36467a4d))

This was announced as deprecated in `beta.3`, so now you only need to import the module and it will work the same way.

e.g.

```typescript
import: [
  CovalentStepsModule // instead of CovalentStepsModule.forRoot()
]
```

* **core:** remove `CovalentCoreModule` since its been deprecated in beta.3 ([feb7cf7a8f4d83d731aea9e7ca14a3250bc3fab9](https://github.com/Teradata/covalent/commit/feb7cf7a8f4d83d731aea9e7ca14a3250bc3fab9))

This was announced as deprecated in `beta.3` to make developer import only what they need to reduce bundle size.

* **dependencies:** removal of flex-layout dependency ([a15d4936fb1ded2e2c1b8907c6b9a72892c946b7](https://github.com/Teradata/covalent/commit/a15d4936fb1ded2e2c1b8907c6b9a72892c946b7)), closes [#542](https://github.com/Teradata/covalent/issues/542)

Since `CovalentCoreModule` has been removed, there is really no use for @angular/flex-layout inernally. we will leave it to the developer to include it on demand.

* **dependencies:** removal of `@angular/material` as hard dependency ([b802efbc59e912b8c49fcc8540c77ff98eb829f3](https://github.com/Teradata/covalent/commit/b802efbc59e912b8c49fcc8540c77ff98eb829f3))

To not force `npm install` to get a specific `material` version, `@angular/material` was moved as `peerDependency`. This means you will need to add it into your `package.json` explicitly.

* **layout:** remove deprecated selectors for `ng-content` ([9b0be9a3235ef4ea25aa9fabe7e8f652d21332e8](https://github.com/Teradata/covalent/commit/9b0be9a3235ef4ea25aa9fabe7e8f652d21332e8))

These selectors were deprecated a few releases back so it should be ok to remove them now. See [#535](https://github.com/Teradata/covalent/pull/535) for more information.

## Bug Fixes
* **chips:** added missing rxjs/add/operator/debounceTime import ([755f84664e65dfa52b131406a8979c8f3502f1c2](https://github.com/Teradata/covalent/commit/755f84664e65dfa52b131406a8979c8f3502f1c2))
* **data-table:** fix when data is undefined and multiple selection ([783228f15154ec04911abf92da0bb199c67190de](https://github.com/Teradata/covalent/commit/783228f15154ec04911abf92da0bb199c67190de))
* **data-table:** fix pseudo checkbox css ([d4d90a2cd20a30f6774a5198526381228a64363a](https://github.com/Teradata/covalent/commit/d4d90a2cd20a30f6774a5198526381228a64363a)), closes [#525](https://github.com/Teradata/covalent/issues/525)
* **dev:** fix tsconfig typeRoots file path ([bec8a3a0d4c99123abe04426071ce3d5d81d9cf0](https://github.com/Teradata/covalent/commit/bec8a3a0d4c99123abe04426071ce3d5d81d9cf0))
* **dynamic-forms:** fix AoT issue with min/max validators ([5bd684fdbd82d8b57bc6bb444cbe3f4e90b33f75](https://github.com/Teradata/covalent/commit/5bd684fdbd82d8b57bc6bb444cbe3f4e90b33f75)), closes [#508](https://github.com/Teradata/covalent/issues/508)
* **flex:** flex=“value” for grow/initial/auto/none/noshink/nogrow ([141550fc5429f8808224786bd7fc7e1119a84601](https://github.com/Teradata/covalent/commit/141550fc5429f8808224786bd7fc7e1119a84601)), closes [#586](https://github.com/Teradata/covalent/issues/586)
* **loading:** remove OnPush change detection from `td-loading` since its a container component ([baea6b384f0c01f54a54b649aecf2b08ae276333](https://github.com/Teradata/covalent/commit/baea6b384f0c01f54a54b649aecf2b08ae276333))
* **pipes:** convert bytes using powers of 2 in `TdBytesPipe` ([c77d517e8ae3beb94e6d4fa68503da7ebafaae9b](https://github.com/Teradata/covalent/commit/c77d517e8ae3beb94e6d4fa68503da7ebafaae9b)), closes [#527](https://github.com/Teradata/covalent/issues/527)

## Features
* **chips:** ability to disable chip addition (input). ([1c75d35b3a399b2236ec49000e2c85af57552723](https://github.com/Teradata/covalent/commit/1c75d35b3a399b2236ec49000e2c85af57552723)), closes [#500](https://github.com/Teradata/covalent/issues/500)
* **data-table:** ability to exclude columns when filtering data ([11c3d15a12b789d561fdb19bc1bad62d7a2f5eb3](https://github.com/Teradata/covalent/commit/11c3d15a12b789d561fdb19bc1bad62d7a2f5eb3)), closes [#513](https://github.com/Teradata/covalent/issues/513)
* **data-table:** ability to hide data table columns ([0ccb19190a6376adcd2345a1a62c642a38b2f11b](https://github.com/Teradata/covalent/commit/0ccb19190a6376adcd2345a1a62c642a38b2f11b)), closes [#511](https://github.com/Teradata/covalent/issues/511)
* **data-table:** indeterminate state in 'selectAll' checkbox ([bd0f7bcd64845801b96fb57a3de42e914da947f6](https://github.com/Teradata/covalent/commit/bd0f7bcd64845801b96fb57a3de42e914da947f6)), closes [#571](https://github.com/Teradata/covalent/issues/571)
* **data-table:** `(rowClick)` event for datatable rows enabled by new `[clickable]` input ([4f84c6ce493996fd749b55d2012f9eb6f4a9e367](https://github.com/Teradata/covalent/commit/4f84c6ce493996fd749b55d2012f9eb6f4a9e367)), closes [#468](https://github.com/Teradata/covalent/issues/468)
* **data-table:** select event will be trigger only when clicking on checkbox ([4f84c6ce493996fd749b55d2012f9eb6f4a9e367](https://github.com/Teradata/covalent/commit/4f84c6ce493996fd749b55d2012f9eb6f4a9e367)), closes [#592](https://github.com/Teradata/covalent/issues/592)
* **data-table:** shift-click for multiple row selection/deselection ([4f84c6ce493996fd749b55d2012f9eb6f4a9e367](https://github.com/Teradata/covalent/commit/4f84c6ce493996fd749b55d2012f9eb6f4a9e367))
* **data-table:** improved keyboard `a11y` for row selection (`space`, `enter`, `up`, `down`, `tab`) ([4f84c6ce493996fd749b55d2012f9eb6f4a9e367](https://github.com/Teradata/covalent/commit/4f84c6ce493996fd749b55d2012f9eb6f4a9e367))
* **dependencies:** upgrade to `@angular@4.1.0` ([78327a9002b93cba01da766dd2b3da0c9cee8099](https://github.com/Teradata/covalent/commit/78327a9002b93cba01da766dd2b3da0c9cee8099))
* **dependencies:** upgrade to `material@beta.5` ([b802efbc59e912b8c49fcc8540c77ff98eb829f3](https://github.com/Teradata/covalent/commit/b802efbc59e912b8c49fcc8540c77ff98eb829f3))
* **file:** add new `[formData]` property to TdFileService#upload options ([77c89acd4ba83b43754ce422fd74e6351e2a6297](https://github.com/Teradata/covalent/commit/77c89acd4ba83b43754ce422fd74e6351e2a6297)), closes [#546](https://github.com/Teradata/covalent/issues/546)
* **file-upload:** add `cancel` event when cancel button is pressed ([9e3be77fb885928fb54e01adb8d023c3e26d7800](https://github.com/Teradata/covalent/commit/9e3be77fb885928fb54e01adb8d023c3e26d7800)), closes [#499](https://github.com/Teradata/covalent/issues/499)
* **highlight:** added `(contentReady)` event binding. ([b3e800cb5342722a50a97292bc81ea8282d3659e](https://github.com/Teradata/covalent/commit/b3e800cb5342722a50a97292bc81ea8282d3659e)), closes [#553](https://github.com/Teradata/covalent/issues/553)
* **layout:** if [navigationRoute] is not set, then the icon/logo/title will not be navigatable. ([dda9b4b5fa6f2b44ce558665c49f1f06b0390237](https://github.com/Teradata/covalent/commit/dda9b4b5fa6f2b44ce558665c49f1f06b0390237))
* **loading:** support for async and boolean with [until] input ([d57bf6757eb3426bd7404edb4b0d1d51c46f6478](https://github.com/Teradata/covalent/commit/d57bf6757eb3426bd7404edb4b0d1d51c46f6478)), closes [#528](https://github.com/Teradata/covalent/issues/528)
* **markdown:** added `(contentReady)` event binding. ([cdf6cad19b3972259e78809aaff5aca6ba408bb1](https://github.com/Teradata/covalent/commit/cdf6cad19b3972259e78809aaff5aca6ba408bb1)), closes [#536](https://github.com/Teradata/covalent/issues/536)
* **message:** introducing `message` module for easy display of inline messages or info boxes ([8a517fb516ea2344a6471d22ec6b23b8fca8fc60](https://github.com/Teradata/covalent/commit/8a517fb516ea2344a6471d22ec6b23b8fca8fc60)), closes [#316](https://github.com/Teradata/covalent/issues/316)
* **paging:** ability to jump to page `n` with page links in `TdPagingBarComponent` ([459dcb3186a72d4e3f5d51108b7723698a13fffa](https://github.com/Teradata/covalent/commit/459dcb3186a72d4e3f5d51108b7723698a13fffa)), closes [#496](https://github.com/Teradata/covalent/issues/496)

## Internal
* **chips:** added initial unit tests for `TdChipsComponent` ([755f84664e65dfa52b131406a8979c8f3502f1c2](https://github.com/Teradata/covalent/commit/755f84664e65dfa52b131406a8979c8f3502f1c2))
* **data-table:** added initial code health for `TdDataTableComponent` ([11c3d15a12b789d561fdb19bc1bad62d7a2f5eb3](https://github.com/Teradata/covalent/commit/11c3d15a12b789d561fdb19bc1bad62d7a2f5eb3))
* **dependencies:** upgrade to `typescript@2.3.1` ([78327a9002b93cba01da766dd2b3da0c9cee8099](https://github.com/Teradata/covalent/commit/78327a9002b93cba01da766dd2b3da0c9cee8099))
* **dependencies:** upgrade to `tslint@5.2.0` ([b802efbc59e912b8c49fcc8540c77ff98eb829f3](https://github.com/Teradata/covalent/commit/b802efbc59e912b8c49fcc8540c77ff98eb829f3))
* **dependencies:** upgrade to `@angular/cli@1.0.3` ([b802efbc59e912b8c49fcc8540c77ff98eb829f3](https://github.com/Teradata/covalent/commit/b802efbc59e912b8c49fcc8540c77ff98eb829f3))
* **dependencies:** upgrade to `highligh.js@9.11.0` ([b802efbc59e912b8c49fcc8540c77ff98eb829f3](https://github.com/Teradata/covalent/commit/b802efbc59e912b8c49fcc8540c77ff98eb829f3))
* **docs:** link to material docs ([e1ea18a27eb0d7397e2bd816410669c4b3ef3e8e](https://github.com/Teradata/covalent/commit/e1ea18a27eb0d7397e2bd816410669c4b3ef3e8e))
* **docs:** lazy load docs for faster rendering ([a06b5c4f811944920293ad1000a5d4db4e223682](https://github.com/Teradata/covalent/commit/a06b5c4f811944920293ad1000a5d4db4e223682))
* **paging:** added initial code health for `TdPagingBarComponent` ([459dcb3186a72d4e3f5d51108b7723698a13fffa](https://github.com/Teradata/covalent/commit/459dcb3186a72d4e3f5d51108b7723698a13fffa))


<a name="1.0.0-beta.3-1"></a>
# [1.0.0-beta.3-1](https://github.com/Teradata/covalent/tree/v1.0.0-beta.3) (2017-04-10)

## External Breaking Changes
* **theming:** update theming to point to the correct path

  Before:
  ```scss
    @import '~@angular/material/core/theming/all-theme';
  ```

  After:
  ```scss
    @import '~@angular/material/theming';
  ```

## Breaking Changes

* **modules:** deprecate `CovalentCoreModule` since tree shaking is not working, we need to push people to import modules on a "need" basis to reduce bundle size ([1994564738b31bd98152c984eda33a10c2f0a993](https://github.com/Teradata/covalent/commit/1994564738b31bd98152c984eda33a10c2f0a993))

## Bug Fixes
* **validations:** remove input invalid style and use `material`s ([1994564738b31bd98152c984eda33a10c2f0a993](https://github.com/Teradata/covalent/commit/1994564738b31bd98152c984eda33a10c2f0a993))

## Features
* **dependencies:** upgrade `@angular/material` to `beta.3`. ([1994564738b31bd98152c984eda33a10c2f0a993](https://github.com/Teradata/covalent/commit/1994564738b31bd98152c984eda33a10c2f0a993))
* **expansion-panel:** add `MdRippleModule` to header and improve internal logic ([1994564738b31bd98152c984eda33a10c2f0a993](https://github.com/Teradata/covalent/commit/1994564738b31bd98152c984eda33a10c2f0a993))

## Performance
* **steps:** remove `MdListModule` dependency from `CovalentStepsModule` and use `MdRippleModule` to reduce DOM and bundle size ([1994564738b31bd98152c984eda33a10c2f0a993](https://github.com/Teradata/covalent/commit/1994564738b31bd98152c984eda33a10c2f0a993))
* **expansion-panel:** remove `MdListModule` dependency from `CovalentExpansionPanelModule` to reduce DOM and bundle size ([1994564738b31bd98152c984eda33a10c2f0a993](https://github.com/Teradata/covalent/commit/1994564738b31bd98152c984eda33a10c2f0a993))


<a name="1.0.0-beta.3"></a>
# [1.0.0-beta.3 Electric Relaxation](https://github.com/Teradata/covalent/tree/v1.0.0-beta.3) (2017-04-05)

## Breaking Change
* **all:** deprecate `forRoot()` method. ([3cea292284d023c5ce8f80b7fe6055ee2e31bfda](https://github.com/Teradata/covalent/commit/3cea292284d023c5ce8f80b7fe6055ee2e31bfda)), closes [#306](https://github.com/Teradata/covalent/issues/306)
* **charts:** remove `@covalent/charts` source code and stop publishing of it. ([d6b62e441247caab82bc11082321c6a5c3eb7b88](https://github.com/Teradata/covalent/commit/d6b62e441247caab82bc11082321c6a5c3eb7b88))
* **loading:** removal of `beta.1` deprecations `[loadingType]`, `[loadingMode]` inputs, `createOverlayComponent` method and `ILoadingOptions` interface. ([9ce8469e357a967c54d04792f62a4986369a9b1d](https://github.com/Teradata/covalent/commit/9ce8469e357a967c54d04792f62a4986369a9b1d))

## Bug Fixes
* **all:**  remove private keyword from `@ViewChild` and `@ContentChild` properties ([04f2ba28e1ba03e83783ac97359f115f6e4a02dd](https://github.com/Teradata/covalent/commit/04f2ba28e1ba03e83783ac97359f115f6e4a02dd)), closes [#384](https://github.com/Teradata/covalent/issues/384)
* **all:** add individual rxjs imports in needed modules ([c3f52aed2b7bea8bed3ae5aa6e43f8a5faf65822](https://github.com/Teradata/covalent/commit/c3f52aed2b7bea8bed3ae5aa6e43f8a5faf65822))
* **expansion-panel:** remove hardcoded string from label ([7b6745d0a0e7a5d60702428adc8fdb35f22d34be](https://github.com/Teradata/covalent/commit/7b6745d0a0e7a5d60702428adc8fdb35f22d34be))
* **data-table:** add missing export for `ITdDataTableSelectAllEvent` ([42e89c5f6f79ef20cc310c8eaf8aab866aa45945](https://github.com/Teradata/covalent/commit/42e89c5f6f79ef20cc310c8eaf8aab866aa45945)), closes [#439](https://github.com/Teradata/covalent/issues/439)
* **data-table:**  make template access only public variables ([4aa916c2a90f5b9a2f61211a283ef2972e5179e0](https://github.com/Teradata/covalent/commit/4aa916c2a90f5b9a2f61211a283ef2972e5179e0)), closes [#471](https://github.com/Teradata/covalent/issues/471)
* **http:** remove `@Injectable` decorator from `HttpInterceptorService` for `@angular@4.0.0` support ([08d272acfaac7726278fe45cc18ee455515d4b3a](https://github.com/Teradata/covalent/commit/08d272acfaac7726278fe45cc18ee455515d4b3a)), closes [#340](https://github.com/Teradata/covalent/issues/340)
* **layout:** animation not working correctly in `navigation-drawer`. ([db837b0b42a61d832f732f3e33fac46164ce1f0c](https://github.com/Teradata/covalent/commit/db837b0b42a61d832f732f3e33fac46164ce1f0c))
* **loading:** support `OnPush` change detection strategy ([4bc56de0f51d7fa793e814fc9228fcbd9127c39e](https://github.com/Teradata/covalent/commit/4bc56de0f51d7fa793e814fc9228fcbd9127c39e))
* **media:** check if subscription has been created before unsubscribing. ([7b559d44287bd5206d17fcba5fb04c1e604cd2e0](https://github.com/Teradata/covalent/commit/7b559d44287bd5206d17fcba5fb04c1e604cd2e0)), closes [#396](https://github.com/Teradata/covalent/issues/396)
* **search:** stop `debounceSearch` event when page loads. ([c0527465216929dd8309c61c4aba7333a2b8e1d2](https://github.com/Teradata/covalent/commit/c0527465216929dd8309c61c4aba7333a2b8e1d2)), closes [#385](https://github.com/Teradata/covalent/issues/385)
* **search:** removed fixed height in `search-box` and `search-input` ([7282ff1528708c0dad2e0dabb960d5bf95a50cba](https://github.com/Teradata/covalent/commit/7282ff1528708c0dad2e0dabb960d5bf95a50cba)), closes [#412](https://github.com/Teradata/covalent/issues/412)
* **search:** stop hiding label when focusing ([7282ff1528708c0dad2e0dabb960d5bf95a50cba](https://github.com/Teradata/covalent/commit/7282ff1528708c0dad2e0dabb960d5bf95a50cba)), closes [#412](https://github.com/Teradata/covalent/issues/412)
* **styles:** rename utilities to mark as partial and prevent import conflicts ([0048ff88a31ccecef9a7b3891675b42db6643d20](https://github.com/Teradata/covalent/commit/0048ff88a31ccecef9a7b3891675b42db6643d20))

## Features
* **all:** `@angular@4.0.0` support ([aef44f88e19173068a5cd4e13bb9bdd11028c9db](https://github.com/Teradata/covalent/commit/aef44f88e19173068a5cd4e13bb9bdd11028c9db)), closes [#393](https://github.com/Teradata/covalent/issues/393)
* **all:** add RTL support to most modules (file-upload, json-formatter, search, paging, data-table, steps, chips, layouts, dialogs, etc etc) ([e2706876bf4dbf6dfe02e3aa2d9094fd53751427](https://github.com/Teradata/covalent/commit/e2706876bf4dbf6dfe02e3aa2d9094fd53751427))
* **animations:** better animation support for `tdFade` and `tdToggle` ([aef44f88e19173068a5cd4e13bb9bdd11028c9db](https://github.com/Teradata/covalent/commit/aef44f88e19173068a5cd4e13bb9bdd11028c9db))
* **chips:** updated demos with better examples ([1561ff8b81b9cc8e1b9feb7ac1f475408753ff45](https://github.com/Teradata/covalent/commit/1561ff8b81b9cc8e1b9feb7ac1f475408753ff45))
* **chips:** use MdAutocomplete, MdChipList and MdBasicChip for a better look and feel ([170174a76606a762b47e3eeef8fd8c3660c2a8c2](https://github.com/Teradata/covalent/commit/170174a76606a762b47e3eeef8fd8c3660c2a8c2)), closes [#215](https://github.com/Teradata/covalent/issues/215), [#165](https://github.com/Teradata/covalent/issues/165)
* **chips:** better `a11y` keyboard support and usage  ([170174a76606a762b47e3eeef8fd8c3660c2a8c2](https://github.com/Teradata/covalent/commit/170174a76606a762b47e3eeef8fd8c3660c2a8c2)), closes [#96](https://github.com/Teradata/covalent/issues/96)
* **datatable:** remove custom message for no results ([e36e5a44ea822a2ac618f6e2b1c3000b5b995d2c](https://github.com/Teradata/covalent/commit/e36e5a44ea822a2ac618f6e2b1c3000b5b995d2c)), closes [#421](https://github.com/Teradata/covalent/issues/421), [#444](https://github.com/Teradata/covalent/issues/444)
* **datatable:** show columns headers when no data ([e36e5a44ea822a2ac618f6e2b1c3000b5b995d2c](https://github.com/Teradata/covalent/commit/e36e5a44ea822a2ac618f6e2b1c3000b5b995d2c)), closes [#421](https://github.com/Teradata/covalent/issues/421), [#444](https://github.com/Teradata/covalent/issues/444)
* **dynamic-forms:** add `password` element ([a2957cae6fa6ae48509895543e67bf27ff5aa9b1](https://github.com/Teradata/covalent/commit/a2957cae6fa6ae48509895543e67bf27ff5aa9b1)), closes [#449](https://github.com/Teradata/covalent/issues/449)
* **loading:** add support to register a `loading` directive in `ngOnInit` ([33131db63b3c03617ec9d7b3914b54ca21a4a92a](https://github.com/Teradata/covalent/commit/33131db63b3c03617ec9d7b3914b54ca21a4a92a)), closes [#303](https://github.com/Teradata/covalent/issues/303)
* **pipes:** `l10n` support for `TdDigitsPipe` ([b060c789bf6543ba552d19738d83294491e6e394](https://github.com/Teradata/covalent/commit/b060c789bf6543ba552d19738d83294491e6e394))
* **search:** make placeholder stay inplace when `search-input` is focused. ([58094fa6622287a8db49cd8c0fce4730c8a69acd](https://github.com/Teradata/covalent/commit/58094fa6622287a8db49cd8c0fce4730c8a69acd)), closes [#226](https://github.com/Teradata/covalent/issues/226)

## Refactor
* **build:** abstract sass-importer from compiler-sass script ([bb5a203590ded227f7295fd9d07bae7853526a6f](https://github.com/Teradata/covalent/commit/bb5a203590ded227f7295fd9d07bae7853526a6f))
* **docs:** rebrand angular 2 to just angular. ([5d6332370201e0a0381c6ead3e30cadf8414df38](https://github.com/Teradata/covalent/commit/5d6332370201e0a0381c6ead3e30cadf8414df38))

## Internal
* **build:** enable yarn package management ([12ea9c4c7fd9127d94c99d636d2ad4f1a3a1be1a](https://github.com/Teradata/covalent/commit/12ea9c4c7fd9127d94c99d636d2ad4f1a3a1be1a)), closes [#313](https://github.com/Teradata/covalent/issues/313)
* **dependencies:** bump `typescript` to `2.1.6` ([aef44f88e19173068a5cd4e13bb9bdd11028c9db](https://github.com/Teradata/covalent/commit/aef44f88e19173068a5cd4e13bb9bdd11028c9db))
* **dependencies:** bump `@angular/cli` to `1.0.0` and general dependencies ([5166ecb019944beaa40d16f70037b68ac08cef3b](https://github.com/Teradata/covalent/commit/5166ecb019944beaa40d16f70037b68ac08cef3b))
* **dependencies:** bump `@swimlane/ngx-charts` to `5.0.0` ([75166731fdaec52e7b320966dcf0a797126a0ab4](https://github.com/Teradata/covalent/commit/75166731fdaec52e7b320966dcf0a797126a0ab4))
* **docs:** add `web-animations-js` for full animation support in docs. ([ec215c97d9175f8d2b8584ddd2fbe085e48f401a](https://github.com/Teradata/covalent/commit/ec215c97d9175f8d2b8584ddd2fbe085e48f401a))
* **docs:** date pipes were not working on safari. ([977e5ad6912da95ff11ee6726fb377eab9209983](https://github.com/Teradata/covalent/commit/977e5ad6912da95ff11ee6726fb377eab9209983))
* **docs:** update docs to updated Material style prefixes ([9142f083e55b77c3f8e89dfde318d23842388f20](https://github.com/Teradata/covalent/commit/9142f083e55b77c3f8e89dfde318d23842388f20)), closes [#410](https://github.com/Teradata/covalent/issues/410)
* **docs:** clarify instructions to include the `platform.css` ([5d6bfe5110c29df6986cb4dd15135f0aa784c0f4](https://github.com/Teradata/covalent/commit/5d6bfe5110c29df6986cb4dd15135f0aa784c0f4))
* **docs:** add covalent-electron and covalent-data to README and docs ([878bacecde77f0e824669ed70ff62b89b7daff19](https://github.com/Teradata/covalent/commit/878bacecde77f0e824669ed70ff62b89b7daff19))
* **theming:** use internal theme functions instead of materials. ([cc74bc154bd076eeaf965686127d9c5cf3c63969](https://github.com/Teradata/covalent/commit/cc74bc154bd076eeaf965686127d9c5cf3c63969))closes [#446](https://github.com/Teradata/covalent/issues/446), [#450](https://github.com/Teradata/covalent/issues/450), [#232](https://github.com/Teradata/covalent/issues/232), [#423](https://github.com/Teradata/covalent/issues/423)

<a name="1.0.0-beta.2-1"></a>
# [1.0.0-beta.2-1](https://github.com/Teradata/covalent/tree/v1.0.0-beta.2) (2017-02-27)

## Bug Fixes
* **animations:** remove overflow from styles in steps and expansion-panel. ([52e74da50e55ea6b6b7aaaaad4724ab610d6f468](https://github.com/Teradata/covalent/commit/52e74da50e55ea6b6b7aaaaad4724ab610d6f468))
* **loading:**  center loading component on replace mode. ([3e40f4bc35dee88941ec398f7575d7b6fd201117](https://github.com/Teradata/covalent/commit/3e40f4bc35dee88941ec398f7575d7b6fd201117))

## Internal
* **docs:** upgrade guide for [beta.2](https://github.com/Teradata/covalent/blob/develop/docs/UPGRADE.md#upgrade-from-100-beta1-to-100-beta2) ([98a5a19650d2bdfd552456fe17cee76de4319d39](https://github.com/Teradata/covalent/commit/98a5a19650d2bdfd552456fe17cee76de4319d39))


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
* **dependencies:** support [@angular/material@2.0.0-beta.2](https://github.com/angular/material2/blob/master/CHANGELOG.md#200-beta2-flannel-papaya-2017-02-15). ([717d309d0a31f21c0dc9870ea3f3f3b40f248a07](https://github.com/Teradata/covalent/commit/717d309d0a31f21c0dc9870ea3f3f3b40f248a07)), closes [#346](https://github.com/Teradata/covalent/issues/346)
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
* **paging:** Usage of `md-select` as `perPage` selection insteaf of `md-icon-button` and `mat-menu`. ([63a0ca3d4acaebeb5b19eac826da0f8d2c4dfd1e](https://github.com/Teradata/covalent/commit/63a0ca3d4acaebeb5b19eac826da0f8d2c4dfd1e))
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
