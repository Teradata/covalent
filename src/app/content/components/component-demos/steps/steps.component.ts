import { Component, OnInit, OnDestroy, NgZone, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepState } from '../../../../../platform/core/steps';
import { TdMediaService } from '../../../../../platform/core/media';

@Component({
  selector: 'steps-hero',
  styleUrls: ['./steps.component.scss'],
  templateUrl: './steps.component.html',
})
export class StepsHeroComponent implements OnInit, OnDestroy {
  querySubscription: Subscription;
  mode: number = 0;
  horizontal: boolean = false;
  isScreenGtSm: boolean = false;
  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;

  constructor(private _mediaService: TdMediaService, private _ngZone: NgZone) {}

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
    this.stateStep2 = this.stateStep2 === StepState.Required ? StepState.None : StepState.Required;
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete;
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
