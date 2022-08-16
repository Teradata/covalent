import Shepherd from 'shepherd.js';
import {
  timer,
  Subject,
  BehaviorSubject,
  merge,
  Subscription,
  fromEvent,
  forkJoin,
} from 'rxjs';
import { takeUntil, skipWhile, filter, skip, first } from 'rxjs/operators';

export type TourStep = Shepherd.Step.StepOptions;
export type TourStepButton = Shepherd.Step.StepOptionsButton;

export enum ITourEvent {
  'click' = 'click',
  'pointerover' = 'pointerover',
  'keyup' = 'keyup',
  'added' = 'added', // added to DOM
  'removed' = 'removed', // removed from DOM
}

export interface ITourEventOn {
  selector?: string; // css selector
  event?: keyof typeof ITourEvent; // click, pointerover, keyup, added, removed
}

export interface ITourEventOnOptions {
  timeBeforeShow?: number; // delay before step is displayed
  interval?: number; // time between searches for element, defaults to 500ms
}

export interface ITourOptions extends Shepherd.Tour.TourOptions {
  abortOn?: ITourEventOn[]; // events to abort on
}

export interface ITourStepAttachToOptions extends ITourEventOnOptions {
  highlight?: boolean;
  retries?: number; // # num of attempts to find element
  skipIfNotFound?: boolean; // if element is not found after n retries, move on to next step
  else?: string; // if element is not found, go to step with this id
  goBackTo?: string; // back button goes back to step with this id
  skipFromStepCount?: boolean; // show/hide progress on step
}

export interface ITourStepAdvanceOnOptions extends ITourEventOnOptions {
  jumpTo?: string; // next button will jump to step with this id
  allowGoBack?: boolean; // allow back within this step
}

export interface ITourStep extends TourStep {
  attachToOptions?: ITourStepAttachToOptions;
  advanceOnOptions?: ITourStepAdvanceOnOptions;
  advanceOn?: ITourEventOn[] | ITourEventOn | any;
  abortOn?: ITourEventOn[];
  count?: number;
}

abstract class TourButtonsActions {
  abstract next(): void;

  abstract back(): void;

  abstract cancel(): void;

  abstract finish(): void;
}

const SHEPHERD_DEFAULT_FIND_TIME_BEFORE_SHOW = 100;
const SHEPHERD_DEFAULT_FIND_INTERVAL = 500;
const SHEPHERD_DEFAULT_FIND_ATTEMPTS = 20;

const overriddenEvents: string[] = [
  ITourEvent.click,
  ITourEvent.pointerover,
  ITourEvent.removed,
  ITourEvent.added,
  ITourEvent.keyup,
];

const keyEvents: Map<number, string> = new Map<number, string>([
  [13, 'enter'],
  [27, 'esc'],
]);

const defaultStepOptions: TourStep = {
  scrollTo: { behavior: 'smooth', block: 'center' },
  cancelIcon: {
    enabled: true,
  },
};

const MAT_ICON_BUTTON = 'mat-icon-button material-icons mat-button-base';
const MAT_BUTTON = 'mat-button-base mat-button';
const MAT_BUTTON_INVISIBLE = 'shepherd-void-button';

export class CovalentGuidedTour extends TourButtonsActions {
  private _destroyedEvent$!: Subject<void>;

  shepherdTour!: Shepherd.Tour;
  stepOptions: ITourStep;

  constructor(stepOptions: ITourStep = defaultStepOptions) {
    super();

    this.stepOptions = stepOptions;
    this.newTour();
  }

  newTour(opts?: ITourOptions): void {
    this.shepherdTour = new Shepherd.Tour(
      Object.assign(
        {
          defaultStepOptions: this.stepOptions,
        },
        opts
      )
    );

    this._destroyedEvent$ = new Subject<void>();
    // listen to cancel and complete to clean up abortOn events
    merge(
      fromEvent(this.shepherdTour, 'cancel'),
      fromEvent(this.shepherdTour, 'complete')
    )
      .pipe(first())
      .subscribe(() => {
        this._destroyedEvent$.next();
        this._destroyedEvent$.complete();
      });

    // if abortOn was passed, we bind the event and execute complete
    if (opts && opts.abortOn) {
      const abortArr$: Subject<void>[] = [];
      opts.abortOn.forEach((abortOn: ITourEventOn) => {
        const abortEvent$: Subject<void> = new Subject<void>();
        abortArr$.push(abortEvent$);
        this._bindEvent(abortOn, undefined, abortEvent$, this._destroyedEvent$);
      });

      const abortSubs: Subscription = merge(...abortArr$)
        .pipe(takeUntil(this._destroyedEvent$))
        .subscribe(() => {
          this.shepherdTour.complete();
          abortSubs.unsubscribe();
        });
    }
  }

  back(): void {
    this.shepherdTour.back();
  }

  cancel(): void {
    this.shepherdTour.cancel();
  }

  next(): void {
    this.shepherdTour.next();
  }

  finish(): void {
    this.shepherdTour.complete();
  }

  addSteps(steps: ITourStep[]): void {
    this.shepherdTour.addSteps(this._prepareTour(steps));
  }

  start(): void {
    this.shepherdTour.start();
  }

  protected _prepareTour(
    originalSteps: ITourStep[],
    finishLabel: string = 'finish'
  ): ITourStep[] {
    // create Subjects for back and forward events
    const backEvent$: Subject<void> = new Subject<void>();
    const forwardEvent$: Subject<void> = new Subject<void>();
    let _backFlow = false;
    // create Subject for your end
    const destroyedEvent$: Subject<void> = new Subject<void>();
    /**
     * This function adds the step progress in the footer of the shepherd tooltip
     */
    const appendProgressFunc = function (this: any): void {
      // get all the footers that are available in the DOM
      const footers: Element[] = Array.from<Element>(
        document.querySelectorAll('.shepherd-footer')
      );
      // get the last footer since Shepherd always puts the active one at the end
      const footer: Element = footers[footers.length - 1];
      // generate steps html element
      const progress: HTMLSpanElement = document.createElement('span');
      progress.className = 'shepherd-progress';
      progress.innerText = `${this.shepherdTour.currentStep.options.count}/${stepTotal}`;
      // insert into the footer before the first button
      footer.insertBefore(progress, footer.querySelector('.shepherd-button'));
    };

    let stepTotal = 0;
    const steps: ITourStep[] = originalSteps.map((step: ITourStep) => {
      let showProgress: () => void = () => {
        //
      };
      if (step.attachToOptions?.skipFromStepCount === true) {
        showProgress = function (): void {
          return;
        };
      } else if (
        step.attachToOptions?.skipFromStepCount === undefined ||
        step.attachToOptions?.skipFromStepCount === false
      ) {
        step.count = ++stepTotal;
        showProgress = appendProgressFunc.bind(this);
      }
      return Object.assign({}, step, {
        when: {
          show: showProgress,
        },
      });
    });

    const finishButton: TourStepButton = {
      text: finishLabel,
      action: this['finish'].bind(this),
      classes: MAT_BUTTON,
    };

    const voidButton: TourStepButton = {
      text: '',
      action(): void {
        return;
      },
      classes: MAT_BUTTON_INVISIBLE,
    };

    // listen to the destroyed event to clean up all the streams
    this._destroyedEvent$.pipe(first()).subscribe(() => {
      backEvent$.complete();
      forwardEvent$.complete();
      destroyedEvent$.next();
      destroyedEvent$.complete();
    });

    const totalSteps: number = steps.length;
    steps.forEach((step: ITourStep, index: number) => {
      // create buttons specific for the step
      // this is done to create more control on events
      const nextButton: TourStepButton = {
        text: 'chevron_right',
        action: () => {
          // intercept the next action and trigger event
          forwardEvent$.next();
          this.shepherdTour.next();
        },
        classes: MAT_ICON_BUTTON,
      };
      const backButton: TourStepButton = {
        text: 'chevron_left',
        action: () => {
          // intercept the back action and trigger event
          backEvent$.next();
          _backFlow = true;
          // check if 'goBackTo' is set to jump to a particular step, else just go back
          if (step.attachToOptions && step.attachToOptions.goBackTo) {
            this.shepherdTour.show(step.attachToOptions.goBackTo, false);
          } else {
            this.shepherdTour.back();
          }
        },
        classes:
          step.advanceOnOptions?.allowGoBack === false
            ? MAT_BUTTON_INVISIBLE
            : MAT_ICON_BUTTON,
      };

      // check if highlight was provided for the step, else fallback into shepherds usage
      step.highlightClass =
        step.attachToOptions && step.attachToOptions.highlight
          ? 'shepherd-highlight'
          : step.highlightClass;

      // Adding buttons in the steps if no buttons are defined
      if (!step.buttons || step.buttons.length === 0) {
        if (index === 0) {
          // first step
          step.buttons = [nextButton];
        } else if (index === totalSteps - 1) {
          // last step
          step.buttons = [backButton, finishButton];
        } else {
          step.buttons = [backButton, nextButton];
        }
      }

      // checks "advanceOn" to override listeners
      let advanceOn: ITourEventOn[] | ITourEventOn = step.advanceOn;
      // remove the shepherd "advanceOn" infavor of ours if the event is part of our list
      if (
        (typeof advanceOn === 'object' &&
          !Array.isArray(advanceOn) &&
          advanceOn.event &&
          overriddenEvents.indexOf(advanceOn.event.split('.')[0]) > -1) ||
        advanceOn instanceof Array
      ) {
        step.advanceOn = undefined;
        step.buttons =
          step.advanceOnOptions && step.advanceOnOptions.allowGoBack
            ? [backButton, voidButton]
            : [voidButton];
      }
      // adds a default beforeShowPromise function
      step.beforeShowPromise = () => {
        return new Promise((resolve: (value?: any) => void) => {
          const additionalCapabilitiesSetup: () => void = () => {
            if (advanceOn && !step.advanceOn) {
              if (!Array.isArray(advanceOn)) {
                advanceOn = [advanceOn];
              }

              const advanceArr$: Subject<void>[] = [];
              advanceOn.forEach((_: any, i: number) => {
                const advanceEvent$: Subject<void> = new Subject<void>();
                advanceArr$.push(advanceEvent$);

                // we start a timer of attempts to find an element in the dom
                this._bindEvent(
                  _,
                  step.advanceOnOptions,
                  advanceEvent$,
                  destroyedEvent$
                );
              });
              const advanceSubs: Subscription = forkJoin(...advanceArr$)
                .pipe(takeUntil(merge(destroyedEvent$, backEvent$)))
                .subscribe(() => {
                  // check if we need to advance to a specific step, else advance to next step
                  if (step.advanceOnOptions && step.advanceOnOptions.jumpTo) {
                    this.shepherdTour.show(step.advanceOnOptions.jumpTo);
                  } else {
                    this.shepherdTour.next();
                  }
                  forwardEvent$.next();
                  advanceSubs.unsubscribe();
                });
            }

            // if abortOn was passed on the step, we bind the event and execute complete
            if (step.abortOn) {
              const abortArr$: Subject<void>[] = [];
              step.abortOn.forEach((abortOn: ITourEventOn) => {
                const abortEvent$: Subject<void> = new Subject<void>();
                abortArr$.push(abortEvent$);
                this._bindEvent(
                  abortOn,
                  undefined,
                  abortEvent$,
                  destroyedEvent$
                );
              });

              const abortSubs: Subscription = merge(...abortArr$)
                .pipe(
                  takeUntil(merge(destroyedEvent$, backEvent$, forwardEvent$))
                )
                .subscribe(() => {
                  this.shepherdTour.complete();
                  abortSubs.unsubscribe();
                });
            }
          };

          const _stopTimer$: Subject<void> = new Subject<void>();
          const _retriesReached$: Subject<number> = new Subject<number>();
          const _retryAttempts$: BehaviorSubject<number> =
            new BehaviorSubject<number>(-1);

          let id: string | undefined;
          // checks if "attachTo" is a string or an object to get the id of an element
          if (typeof step.attachTo === 'string') {
            id = step.attachTo;
          } else if (
            typeof step.attachTo === 'object' &&
            typeof step.attachTo.element === 'string'
          ) {
            id = step.attachTo.element;
          }
          // if we have an id as a string in either case, we use it (we ignore it if its HTMLElement)
          if (id) {
            // if current step is the first step of the tour, we set the buttons to be only "next"
            // we had to use `any` since the tour doesnt expose the steps in any fashion nor a way to check if we have modified them at all
            if (
              this.shepherdTour.getCurrentStep() ===
              (<any>this.shepherdTour).steps[0]
            ) {
              this.shepherdTour.getCurrentStep()?.updateStepOptions({
                buttons: originalSteps[index].advanceOn
                  ? [voidButton]
                  : [nextButton],
              });
            }
            // register to the attempts observable to notify deeveloper when number has been reached
            _retryAttempts$
              .pipe(
                skip(1),
                skipWhile((val: number) => {
                  if (
                    step.attachToOptions &&
                    step.attachToOptions.retries !== undefined
                  ) {
                    return val < step.attachToOptions.retries;
                  }
                  return val < SHEPHERD_DEFAULT_FIND_ATTEMPTS;
                }),
                takeUntil(merge(_stopTimer$.asObservable(), destroyedEvent$))
              )
              .subscribe((attempts: number) => {
                _retriesReached$.next(1);
                _retriesReached$.complete();
                // if attempts have been reached, we check "skipIfNotFound" to move on to the next step
                if (
                  step.attachToOptions &&
                  step.attachToOptions.skipIfNotFound
                ) {
                  // if we get to this step coming back from a step and it wasnt found
                  // then we either check if its the first step and try going forward
                  // or we keep going back until we find a step that actually exists
                  if (_backFlow) {
                    if (
                      (<any>this.shepherdTour).steps.indexOf(
                        this.shepherdTour.getCurrentStep()
                      ) === 0
                    ) {
                      this.shepherdTour.next();
                    } else {
                      this.shepherdTour.back();
                    }
                    _backFlow = false;
                  } else {
                    // destroys current step if we need to skip it to remove it from the tour
                    const currentStep = this.shepherdTour.getCurrentStep();
                    currentStep?.destroy();
                    this.shepherdTour.next();
                    this.shepherdTour.removeStep(currentStep?.id ?? '');
                  }
                } else if (step.attachToOptions && step.attachToOptions.else) {
                  // if "skipIfNotFound" is not true, then we check if "else" has been set to jump to a specific step
                  this.shepherdTour.show(step.attachToOptions.else);
                } else {
                  // tslint:disable-next-line:no-console
                  console.warn(
                    `Retries reached trying to find ${id}. Retried  ${attempts} times.`
                  );
                  // else we show the step regardless
                  resolve();
                }
              });

            // we start a timer of attempts to find an element in the dom
            timer(
              (step.attachToOptions && step.attachToOptions.timeBeforeShow) ||
                SHEPHERD_DEFAULT_FIND_TIME_BEFORE_SHOW,
              (step.attachToOptions && step.attachToOptions.interval) ||
                SHEPHERD_DEFAULT_FIND_INTERVAL
            )
              .pipe(
                // the timer will continue either until we find the element or the number of attempts has been reached
                takeUntil(merge(_stopTimer$, _retriesReached$, destroyedEvent$))
              )
              .subscribe(() => {
                const element = document.querySelector(id ?? '');
                // if the element has been found, we stop the timer and resolve the promise
                if (element) {
                  _stopTimer$.next();
                  _stopTimer$.complete();
                  additionalCapabilitiesSetup();
                  resolve();
                } else {
                  _retryAttempts$.next(_retryAttempts$.value + 1);
                }
              });

            // stop find interval if user stops the tour
            destroyedEvent$.subscribe(() => {
              _stopTimer$.next();
              _stopTimer$.complete();
              _retriesReached$.next(1);
              _retriesReached$.complete();
            });
          } else {
            // resolve observable until the timeBeforeShow has passsed or use default
            timer(
              (step.attachToOptions && step.attachToOptions.timeBeforeShow) ||
                SHEPHERD_DEFAULT_FIND_TIME_BEFORE_SHOW
            )
              .pipe(takeUntil(merge(destroyedEvent$)))
              .subscribe(() => {
                resolve();
              });
          }
        });
      };
    });
    return steps;
  }

  private _bindEvent(
    eventOn: ITourEventOn,
    eventOnOptions: ITourEventOnOptions | undefined,
    event$: Subject<void>,
    destroyedEvent$: Subject<void>
  ): void {
    const selector = eventOn.selector ?? '';
    const event = eventOn.event;
    // we start a timer of attempts to find an element in the dom
    const timerSubs: Subscription = timer(
      (eventOnOptions && eventOnOptions.timeBeforeShow) ||
        SHEPHERD_DEFAULT_FIND_TIME_BEFORE_SHOW,
      (eventOnOptions && eventOnOptions.interval) ||
        SHEPHERD_DEFAULT_FIND_INTERVAL
    )
      .pipe(takeUntil(destroyedEvent$))
      .subscribe(() => {
        const element = document.querySelector(selector);
        // if the element has been found, we stop the timer and resolve the promise
        if (element) {
          timerSubs.unsubscribe();

          if (event === ITourEvent.added) {
            // if event is "Added" trigger a soon as this is attached.
            event$.next();
            event$.complete();
          } else if (
            event === ITourEvent.click ||
            event === ITourEvent.pointerover ||
            (event && event.indexOf(ITourEvent.keyup) > -1)
          ) {
            // we use normal listeners for mouseevents
            const mainEvent = event?.split('.')[0];
            const subEvent = event?.split('.')[1];
            fromEvent(element, mainEvent)
              .pipe(
                filter(($event: Event) => {
                  // only trigger if the event is a keyboard event and part of out list
                  if ($event instanceof KeyboardEvent) {
                    if (keyEvents.get($event.keyCode) === subEvent) {
                      return true;
                    }
                    return false;
                  } else {
                    return true;
                  }
                }),
                takeUntil(merge(event$.asObservable(), destroyedEvent$))
              )
              .subscribe(() => {
                event$.next();
                event$.complete();
              });
          } else if (event === ITourEvent.removed) {
            // and we will use MutationObserver for DOM events
            const observer: MutationObserver = new MutationObserver(() => {
              if (!document.body.contains(element)) {
                event$.next();
                event$.complete();
                observer.disconnect();
              }
            });

            // stop listenining if tour is closed
            destroyedEvent$.subscribe(() => {
              observer.disconnect();
            });
            // observe for any DOM interaction in the element
            observer.observe(element, {
              childList: true,
              subtree: true,
              attributes: true,
            });
          }
        }
      });
  }
}
