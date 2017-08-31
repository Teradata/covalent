import { Component, OnInit, OnDestroy, NgZone, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../../app.animations';
import { Subscription } from 'rxjs/Subscription';

import { StepState, TdMediaService } from '../../../../platform/core';

@Component({
  selector: 'steps-demo',
  styleUrls: ['./steps.component.scss' ],
  templateUrl: './steps.component.html',
  animations: [slideInDownAnimation],
})
export class StepsDemoComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  stepsAttrs: Object[] = [{
    description: `Method to be executed when [onStepChange] event is emitted.
                  Emits an [IStepChangeEvent] implemented object.`,
    name: 'stepChange?',
    type: 'function($event)',
  }, {
    description: 'Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]',
    name: 'mode?',
    type: 'StepMode or ["vertical" | "horizontal"]',
  }];

  stepAttrs: Object[] = [{
    description: 'Sets label of [TdStepComponent] header. Defaults to "Step #"',
    name: 'label?',
    type: 'string',
  }, {
    description: 'Sets sublabel of [TdStepComponent] header.',
    name: 'sublabel?',
    type: 'string',
  }, {
    description: 'Toggles [TdStepComponent] between active/deactive.',
    name: 'active?',
    type: 'boolean',
  }, {
    description: 'Disables icon and header, blocks click event and sets [TdStepComponent] to deactive if "true".',
    name: 'disabled?',
    type: 'boolean',
  }, {
    description: 'Sets state of [TdStepComponent] depending on value. Defaults to [StepState.None | "none"]',
    name: 'state?',
    type: 'StepState or ["none" | "required" | "complete"]',
  }, {
    description: ' Whether the ripple effect for this component is disabled',
    name: 'disableRipple?',
    type: 'boolean',
  }, {
    description: 'Event emitted when [TdStepComponent] is activated.',
    name: 'activated?',
    type: 'function()',
  }, {
    description: 'Event emitted when [TdStepComponent] is deactivated.',
    name: 'deactivated?',
    type: 'function()',
  }, {
    description: `Toggle active state of [TdStepComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'toggle',
    type: 'function()',
  }, {
    description: `Opens [TdStepComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'open',
    type: 'function()',
  }, {
    description: `Closes [TdStepComponent]. Retuns "true" if successful, else "false".
                  Can be accessed by referencing element in local variable.`,
    name: 'close',
    type: 'function()',
  }];

  querySubscription: Subscription;
  mode: number = 0;
  horizontal: boolean = false;
  isScreenGtSm: boolean = false;
  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;

  constructor(private _mediaService: TdMediaService, private _ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.watchScreen();
  }
  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  watchScreen(): void {
    this._ngZone.run(() => {
      this.isScreenGtSm = this._mediaService.query('gt-sm');
    });
    this.querySubscription = this._mediaService.registerQuery('gt-sm').subscribe((matches: boolean) => {
      this._ngZone.run(() => {
        this.isScreenGtSm = matches;
        if (this.mode === 2) {
          this.horizontal = matches;
        }
      });
    });
  }

  modeChange(): void {
    if (this.mode === 2) {
      this.horizontal = this.isScreenGtSm;
    } else {
      this.horizontal = this.mode === 1;
    }
  }

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }

  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }
}
