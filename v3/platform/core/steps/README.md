# td-steps (horizontal and vertical)

selector : `td-steps` 

Element generates a stepper to be used in a wizard flow.

Simply wrap the `<td-step>` elements you need with a `<td-steps>` element.

<br/>

## API Summary

#### Inputs

+ mode?: StepMode or ["vertical" | "horizontal"]
  + Defines if the mode of the [TdStepsComponent]. Defaults to [StepMode.Vertical | "vertical"]

#### Outputs

+ stepChange?: function($event)
  + Method to be executed when [onStepChange] event is emitted. Emits an [IStepChangeEvent] implemented object.

## Usage

Example

HTML
```html
<td-steps (stepChange)="change($event)" mode="'vertical'|'horizontal'">
  <td-step>
    ...
  </td-step>
  ...
</td-steps>
```

TypeScript

```typescript
import { IStepChangeEvent } from '@covalent/core/steps';
...
})
export class Demo {
  change(event: IStepChangeEvent): void {
    ...
  };
}
```

# td-step

Selector: `td-step` 

Add as many `<td-step>` elements you need wrapped by a `<td-steps>` element for control.

Uses StepState enum to define step state value [StepState.None, StepState.Required and StepState.Complete].

Enum values can be replaced with strings ["none", "required" and "complete"].

Note: Components in Angular do not have 2-way binding, so the active variable might be off sync with its [TdStepComponent] sometimes.

You can keep it in sync with the (activated/deactivated) events if there is a need to do it.

## API Summary

#### Inputs

+ label?: string
  + Sets label of [TdStepComponent] header. Defaults to "Step #"
+ sublabel?: string
  + Sets sublabel of [TdStepComponent] header.
+ label?: string
  + Sets label of [TdStepComponent] header. Defaults to "Step #"
+ active?: boolean
  + Toggles [TdStepComponent] between active/deactive.
+ disabled?: boolean
  + Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if "true".
+ state?: StepState or ["none" | "required" | "complete"]
  + Sets state of [TdStepComponent] depending on value. Defaults to [StepState.None | "none"]
+ disableRipple?: boolean
  + Whether the ripple effect for this component is disabled

#### Outputs

+ activated?: function()
  + Event emitted when [TdStepComponent] is activated.
+ deactivated?: function()
  + Event emitted when [TdStepComponent] is deactivated.

#### Methods

+ toggle?: function()
  + Toggle active state of [TdStepComponent]. Retuns "true" if successful, else "false". Can be accessed by referencing element in local variable.
+ open?: function()
  + Opens [TdStepComponent]. Retuns "true" if successful, else "false". Can be accessed by referencing element in local variable.
+ close?: function()
  + Closes [TdStepComponent]. Retuns "true" if successful, else "false". Can be accessed by referencing element in local variable.

## Usage

Example

HTML
```html
<td-step #step label="Label" sublabel="Sublabel" [active]="active" [disabled]="disabled" [state]="state" (activated)="activeEvent()" (deactivated)="deactiveEvent()" [disableRipple]="false">
  <ng-template td-step-label>
    ... add label content (if not used, falls back to [label] input)
  </ng-template>
  ... add content that will be shown when the step is "active"
  <ng-template td-step-actions>
    <button (click)="step.close()">Close</button>
    ... add button elements for the step content (optional)
  </ng-template>
  <ng-template td-step-summary>
    ... add summary that will be shown when step in is "complete" state (optional)
  </ng-template>
</td-step>
```

TypeScript

```typescript
import { StepState } from '@covalent/core/steps';
...
})
export class Demo {

  active: boolean = false;
  disabled: boolean = false;
  state: StepState = StepState.Required; // or state: string = "required";

  activeEvent(): void {
    ...
  };

  deactiveEvent(): void {
    ...
  };
}
```


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


