# nav[td-steps] (horizontal and vertical)

`nav[td-steps]` element generates a stepper to be used with Angular Router navigation. Steps can use as an anchor with routerLinks to allow to navigate to new pages.

The `horizontal` version of this component handles responsiveness by adding scrolling buttons when the width of the container is less than its content. 

# td-step-link

`td-step-link` element generates an individual step component.

## API Summary

#### Inputs

+ routerLink: string 
  + The link to go to when clicking on the step
+ state?: StepState or ["none" | "required" | "complete"] 
  + Sets state that indicates change in icon and font
+ label?: string 
  + Sets label of step header
+ sublabel?: string 
  + Sets sublabel of step header
+ active?: boolean
  + Toggles step link between active/deactive state.
+ disabled?: boolean
  + Disables icon and header and also blocks click events
+ disableRipple?: boolean
  + Whether the ripple effect for this component is disabled

## Setup

Import the [CovalentStepsModule] in your NgModule:

```typescript
import { CovalentStepsModule } from '@covalent/core/steps';
@NgModule({
  imports: [
    CovalentStepsModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example Horizontal:

```html
<nav td-steps horizontal>
  <a td-step-link
      routerLinkActive
      #rla="routerLinkActive"
      [routerLinkActiveOptions]="{exact:true}"
      [routerLink]="['/route1']"
      [label]="'1st step'"
      [sublabel]="'some description'"
      [active]="rla.isActive"></a>
  <a td-step-link
      routerLinkActive
      #rla2="routerLinkActive"
      [routerLinkActiveOptions]="{exact: true}"
      [routerLink]="['/route2']"
      [label]="'2nd step'"
      [active]="rla2.isActive"></a>
</nav>
```

Example Vertical:

```html
<nav td-steps vertical>
  <a td-step-link
      routerLinkActive
      #rla="routerLinkActive"
      [routerLinkActiveOptions]="{exact:true}"
      [routerLink]="['/route1']"
      [label]="'1st step'"
      [sublabel]="'some description'"
      [active]="rla.isActive"></a>
  <a td-step-link
      routerLinkActive
      #rla2="routerLinkActive"
      [routerLinkActiveOptions]="{exact: true}"
      [routerLink]="['/route2']"
      [label]="'2nd step'"
      [active]="rla2.isActive"></a>
</nav>
```
