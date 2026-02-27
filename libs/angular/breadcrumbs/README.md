# td-breadcrumbs

`td-breadcrumbs` element generates breadcrumbs for navigation. Handles responsive layouts intelligently by always showing the first and last breadcrumb, while middle items are hidden in an overflow menu (···) when space is limited. The last breadcrumb is truncated with ellipsis if too long.

## API Summary

#### Inputs

- separatorIcon?: string
  - Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
- size?: string
  - Sets the typography size. Options: 'headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'headline6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption'
  - **Note:** Requires `@covalent/tokens/index.css` to be imported in your global styles

#### Methods

- count: number
  - The total count of individual breadcrumbs (read only)

#### Attributes

- hiddenBreadcrumbs: TdBreadcrumbComponent[]
  - Array of currently hidden breadcrumbs shown in the overflow menu (responsive)
- showOverflowButton: boolean
  - Whether the overflow menu button (···) is currently displayed

# td-breadcrumb

`td-breadcrumb` element generates an individual breadcrumb component.

## API Summary

#### Methods

- displayCrumb: boolean
  - Whether to display the individual breadcrumb or not
- width: number
  - The current width of the individual breadcrumb (read only)

## Setup

### Standalone Components (Recommended)

Import the standalone components directly:

```typescript
import { TdBreadcrumbsComponent, TdBreadcrumbComponent } from '@covalent/core/breadcrumbs';

@Component({
  standalone: true,
  imports: [TdBreadcrumbsComponent, TdBreadcrumbComponent, ...],
  ...
})
export class MyComponent {}
```

### NgModule (Legacy)

Import the [CovalentBreadcrumbsModule] in your NgModule:

```typescript
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
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
<td-breadcrumbs>
  <a td-breadcrumb [routerLink]="'/'">Home</a>
  <a td-breadcrumb [routerLink]="'/layouts'">Layouts</a>
  <a td-breadcrumb [routerLink]="'/layouts2'">Layouts2</a>
  <a td-breadcrumb [routerLink]="'/layouts3'">Layouts3</a>
  <td-breadcrumb>Manage List</td-breadcrumb>
</td-breadcrumbs>
```

Example with typography size:

```html
<td-breadcrumbs size="caption">
  <a td-breadcrumb [routerLink]="'/'">Home</a>
  <a td-breadcrumb [routerLink]="'/projects'">Projects</a>
  <a td-breadcrumb [routerLink]="'/project/123'">Project Details</a>
  <td-breadcrumb>Settings</td-breadcrumb>
</td-breadcrumbs>
```

Example with all inputs/outputs:

```html
<td-breadcrumbs #breadcrumbs separatorIcon="motorcycle" size="body2">
  <a td-breadcrumb [routerLink]="'/'">Home</a>
  <a td-breadcrumb [routerLink]="'/layouts'">Layouts</a>
  <a td-breadcrumb [routerLink]="'/layouts2'">Layouts2</a>
  <a td-breadcrumb [routerLink]="'/layouts3'">Layouts3</a>
  <td-breadcrumb>Manage List</td-breadcrumb>
</td-breadcrumbs>
<mat-divider></mat-divider>
<div>Total Breadcrumbs Count: {{breadcrumbs.count}}</div>
<div>Hidden Breadcrumbs Count (shrink window to see overflow menu): {{breadcrumbs.hiddenBreadcrumbs.length}}</div>
<div *ngIf="breadcrumbs.showOverflowButton">Overflow menu (···) is visible with {{breadcrumbs.hiddenBreadcrumbs.length}} hidden items</div>
<ng-template let-breadcrumb let-index="index" ngFor [ngForOf]="breadcrumbs.hiddenBreadcrumbs">
  <div>
    <p>Hidden Breadcrumb {{index}}: {{breadcrumb?.fullText}}</p>
    <p>Original Width: {{breadcrumb?.width}}px</p>
    <mat-divider></mat-divider>
  </div>
</ng-template>
```

## Responsive Behavior

The breadcrumbs component automatically handles responsive layouts:

- **First breadcrumb**: Always visible (typically "Home" or root)
- **Last breadcrumb**: Always visible (current page), truncated with ellipsis if too long
- **Middle breadcrumbs**: Hidden in overflow menu (···) when space is limited
- **Overflow menu**: Clickable button that shows all hidden breadcrumbs
- **Tooltips**: Displayed on truncated breadcrumbs showing the full text
