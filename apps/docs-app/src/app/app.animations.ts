import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
  group,
  animateChild,
  query,
  keyframes,
} from '@angular/animations';

export const slideInLeftAnimation: AnimationTriggerMetadata = trigger(
  'routeAnimation',
  [
    state(
      '*',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
    transition(':enter', [
      group([
        query('@*', animateChild(), { optional: true }),
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        animate('0.3s ease-in'),
      ]),
    ]),
    transition(':leave', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate(
          '0.5s ease-out',
          style({
            opacity: 0,
            transform: 'translateX(100%)',
          })
        ),
      ]),
    ]),
  ]
);
export const slideInDownAnimation: AnimationTriggerMetadata = trigger(
  'routeAnimation',
  [
    state(
      '*',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
    transition(':enter', [
      group([
        query('@*', animateChild(), { optional: true }),
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        }),
        animate('0.3s ease-in'),
      ]),
    ]),
    transition(':leave', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate(
          '0.5s ease-out',
          style({
            opacity: 0,
            transform: 'translateY(100%)',
          })
        ),
      ]),
    ]),
  ]
);
export const slideInUpAnimation: AnimationTriggerMetadata = trigger(
  'routeAnimation',
  [
    state(
      '*',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
    transition(':enter', [
      group([
        query('@*', animateChild(), { optional: true }),
        style({
          opacity: 0,
          transform: 'translateY(90px)',
        }),
        animate(
          '0.40s cubic-bezier(0.0, 0.0, 0.2, 1)',
          keyframes([
            style({
              offset: 0,
              opacity: 0,
              transform: 'translateY(18px)',
            }),
            style({
              opacity: 0,
              offset: 0.5,
            }),
            style({
              offset: 1,
              opacity: 1,
              transform: 'translateY(0)',
            }),
          ])
        ),
      ]),
    ]),
  ]
);
