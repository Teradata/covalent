# td-user-profile

`td-user-profile` element generates user-profile menu to display user information and actions using `mat-list-item` component/directive.

## API Summary

#### Inputs

+ name?: string
  + name of the user.
+ email?: string
  + email of the user.

## Setup

Import the **[CovalentUserProfileModule]** in your NgModule:

```typescript
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
@NgModule({
  imports: [
    CovalentUserProfileModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<td-user-profile name="daffy duck" email="daffy.duck@teradata.com">
</td-user-profile>
```

Example with all inputs and projected content: 

`[td-user-info-list]` is used to project content in the mat-list.
`[td-user-action-list]` is used to project content in the mat-action-list.

```html
<td-user-profile name="daffy duck" email="daffy.duck@teradata.com">
  <ng-container td-user-info-list>
    <mat-list-item>
      <mat-icon matListAvatar>account_balance</mat-icon>
      <span matLine>default</span>
      <span matLine>organization</span>
    </mat-list-item>
  </ng-container>
  <ng-container td-user-action-list>
    <button mat-list-item>
      <span matListAvatar></span>
      <span matLine>Sign out</span>
    </button>
  </ng-container>
</td-user-profile>
```
