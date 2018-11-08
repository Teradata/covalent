# td-horizontal-nav-stepper (experimental)

`td-horizontal-nav-stepper` element generates a stepper to be used with Angular Router navigation.  Handles responsive by removing steps from the beginning of the list as allowable space decreases.  When steps are hidden right and left arrows appear allowing to control which steps are hidden and shown.  Steps can use an anchor with routerLinks to allow to navigate to new pages.

## API Summary

#### Inputs


#### Methods

+ count: number
  + The total count of individual steps (read only)
+ showLeftArrow: boolean
  + Should we show the left Arrow (read only)
+ showRightArrow: boolean
  + Should we show the right Arrow (read only)

#### Attributes

+ hiddenSteps: TdStepsComponent[]
  + Array of currently hidden steps (responsive)

# td-nav-step

`td-nav-step` element generates an individual step component.

## API Summary

#### Inputs

+ routerLink: string 
  + The link to go to when clicking on the step
+ state: StepState 
  + State that indicates change in icon and font, can be StepState.None, StepState.Required, or StepState.Complete
+ sublabel: string 
  + Sublabel to display in step header

#### Methods

+ isRequired: boolean 
  + Is this step required
+ isComplete: boolean 
  + Is this step complete
+ active: boolean 
  + Is this step active
+ displayStep: boolean 
  + Getter and Setter whether this step should be displayed
+ displayLine: boolean 
  + Getter and Setter whether to show separator line after step
+ width: number
  + Get the width of the step

## Setup

Import the [CovalentNavStepperModule] in your NgModule:

```typescript
import { CovalentNavStepperModule } from '@covalent/experimental/nav-stepper';
@NgModule({
  imports: [
    CovalentNavStepperModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Example:

```html
<td-horizontal-nav-stepper #horizontalRightNavStepper>
  <a td-nav-step [routerLink]="'/'" [state]="'complete'" [sublabel]="'1st step'">My Step A</a>
  <a td-nav-step [routerLink]="'/breadcrumbs'" [state]="'complete'" [sublabel]="'2nd step'">My Step B</a>
  <a td-nav-step [routerLink]="'/tabselect'" [state]="'complete'" [sublabel]="'3rd step'">My Step C</a>
  <a td-nav-step [routerLink]="'/navstepper'" [state]="'required'" [sublabel]="'Almost done'">My Step D</a>
  <a td-nav-step [routerLink]="'/breadcrumbs'" [state]="'none'" [sublabel]="'Last and final'">My Step E</a>
</td-horizontal-nav-stepper>
```
