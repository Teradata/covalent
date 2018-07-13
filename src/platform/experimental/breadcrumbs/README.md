# td-breadcrumbs (experimental)

`td-breadcrumbs` element generates breadcrumbs for navigation.  Handles Responsive by removing breadcrumbs from the beginning of the list as allowable space decreases.

## API Summary

#### Inputs

+ separatorIcon?: string
  + Sets the icon url shown between breadcrumbs. Defaults to right chevron.

#### Methods

+ count: number
  + The total count of individual breadcrumbs (read only)

#### Attributes

+ hiddenBreadcrumbs: TdBreadcrumbComponent[]
  + Array of currently hidden breadcrumbs (responsive)

# td-breadcrumb

`td-breadcrumb` element generates an individual breadcrumb component.

## API Summary

#### Methods

+ displayCrumb: boolean 
  + Whether to display the individual breadcrumb or not
+ width: number 
  + The current width of the individual breadcrumb (read only)

## Setup

Import the [CovalentBreadcrumbsModule] in your NgModule:

```typescript
import { CovalentBreadcrumbsModule } from '@covalent/experimental/breadcrumbs';
@NgModule({
  imports: [
    CovalentBreadcrumbsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-breadcrumbs class="pad-left">
  <a td-breadcrumb [routerLink]="'/'">Home</a>
  <a td-breadcrumb [routerLink]="'/layouts'">Layouts</a>
  <a td-breadcrumb [routerLink]="'/layouts2'">Layouts2</a>
  <a td-breadcrumb [routerLink]="'/layouts3'">Layouts3</a>
  <td-breadcrumb class="tc-grey-500">Manage List</td-breadcrumb>
</td-breadcrumbs>
```

Example with all inputs/outputs: 

```html
<td-breadcrumbs #breadcrumbs separatorIcon="motorcycle">
  <a td-breadcrumb [routerLink]="'/'">Home</a>
  <a td-breadcrumb [routerLink]="'/layouts'">Layouts</a>
  <a td-breadcrumb [routerLink]="'/layouts2'">Layouts2</a>
  <a td-breadcrumb [routerLink]="'/layouts3'">Layouts3</a>
  <td-breadcrumb class="tc-grey-500">Manage List</td-breadcrumb>
</td-breadcrumbs>
<mat-divider></mat-divider>
<div>
  Total Breadcrumbs Count: {{breadcrumbs.count}}
</div>
<div>
  Hidden Breadcrumbs Count (shrink window to see): {{breadcrumbs.hiddenBreadcrumbs.length}}
</div>
<ng-template let-breadcrumb let-index="index" ngFor [ngForOf]="breadcrumbs.hiddenBreadcrumbs">
  <div>
    <p>Breadcrumb Number: {{index}}</p>
    <p>Breadcrumb Width: {{breadcrumb?.width}}</p>
    <mat-divider></mat-divider>
  </div>
</ng-template>
```
