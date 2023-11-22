'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [9433],
  {
    9433: (y, _, a) => {
      a.r(_), a.d(_, { UtilitiesModule: () => xt });
      var x = a(1004),
        v = a(52787),
        T = a(73698),
        g = a(75068),
        m = a(1904),
        t = a(19212),
        s = a(95195),
        f = a(26385),
        A = a(30617),
        u = a(59038),
        h = a(32296),
        Z = a(67479);
      const j = (o) => ({ duration: 500, degreesEnd: o }),
        C = (o, l) => ({ value: o, params: l }),
        k = () => ({ duration: 750, degreesEnd: 545 }),
        w = () => ({ duration: 500 });
      let D = (() => {
        class o {
          routeAnimation = !0;
          classAnimation = !0;
          rotateState1 = !1;
          rotateState2 = !1;
          collapseState1 = !0;
          fadeInOutState1 = !1;
          bounceState = !1;
          flashState = !1;
          headshakeState = !1;
          jelloState = !1;
          pulseState = !1;
          animationTypescript =
            "\n  import { tdAnimationUtility_A, tdAnimationUtility_B } from '@covalent/core/common';\n\n  @Component({\n    ...\n    animations: [\n      tdAnimationUtility_A,\n      tdAnimationUtility_B,\n    ],\n  })\n  export class MyComponent {\n    triggerState_A: boolean = false;\n    triggerState_B: boolean = false;\n    ...\n  }\n  ";
          rotate180Typescript =
            "\n  import { tdRotateAnimation } from '@covalent/core/common';\n  ...\n  animations: [\n    tdRotateAnimation, // using implicit anchor name '@tdRotate' in template\n  ],\n  ...\n  class MyDemo {\n    triggerState: boolean = false;\n  }\n  ";
          rotate180Html =
            '\n  <button mat-raised-button [@tdRotate]="triggerState" (click)="triggerState = !triggerState" color="accent">\n    Rotate 180&deg;<mat-icon>mood</mat-icon>\n  </button>\n  ';
          rotate45Typescript =
            "\n  import { tdRotateAnimation } from '@covalent/core/common';\n  ...\n  animations: [\n    tdRotateAnimation,\n  ],\n  ...\n  class MyDemo {\n    triggerState: boolean = false;\n  }\n  ";
          rotate45Html =
            '\n  <button mat-raised-button [@tdRotate]="{ value: rotateState2, params: { duration: 500, degreesEnd: -45 } }" (click)="triggerState = !triggerState" color="accent">\n    Rotate -45&deg;<mat-icon [@tdRotate]="{ value: rotateState2, params: { duration: 750, degreesEnd: 545 } }">mood</mat-icon>\n  </button>\n  ';
          collapseTypescript =
            "\n  import { tdCollapseAnimation } from '@covalent/core/common';\n  ...\n  animations: [\n    tdCollapseAnimation, // using implicit anchor name 'tdCollapse' in template\n  ],\n  ...\n  class MyDemo {\n    triggerState: boolean = true;\n  }\n  ";
          collapseHtml =
            '\n  <button mat-raised-button color="accent" (click)="triggerState = !triggerState">Collapse</button>\n  <div [style.overflow]="\'hidden\'" [@tdCollapse]="{ value: triggerState, params: { duration: 500 }}">\n    <mat-card>\n      <mat-card-title>Collapse card</mat-card-title>\n      <mat-card-content>Collapse card with a click!</mat-card-content>\n      <mat-card-actions><button mat-raised-button color="primary" (click)="triggerState = !triggerState">Collapse</button></mat-card-actions>\n    </mat-card>\n  </div>\n  ';
          fadeTypescript =
            "\n  import { tdFadeInOutAnimation } from '@covalent/core/common';\n  ...\n  animations: [\n    tdFadeInOutAnimation, // using implicit anchor name 'tdFadeInOut' in template\n  ],\n  ...\n  class MyDemo {\n    triggerState: boolean = false;\n  }\n  ";
          fadeHtml =
            '\n  <button mat-raised-button color="accent" (click)="triggerState = !triggerState">Fade In</button>\n  <div [@tdFadeInOut]="triggerState">\n    <mat-card>\n      <mat-card-title>Fade Card</mat-card-title>\n      <mat-card-content>Fade in or out with a click!</mat-card-content>\n      <mat-card-actions><button mat-raised-button color="primary" (click)="triggerState = !triggerState">Fade Out</button></mat-card-actions>\n    </mat-card>\n  </div>\n  ';
          attentionSeekersAnimationTypescript =
            "\n  import {\n    tdBounceAnimation,\n    tdFlashAnimation,\n    tdHeadshakeAnimation,\n    tdJelloAnimation,\n    tdPulseAnimation,\n  } from '@covalent/core/common';\n  ...\n  animations: [\n    tdBounceAnimation, // using implicit anchor name 'tdBounce' in template\n    tdFlashAnimation, // using implicit anchor name 'tdFlash' in template\n    tdHeadshakeAnimation, // using implicit anchor name 'tdHeadshake' in template\n    tdJelloAnimation, // using implicit anchor name 'tdJello' in template\n    tdPulseAnimation, // using implicit anchor name 'tdPulse' in template\n  ],\n  ...\n  class MyDemo {\n    bounceState: boolean = false;\n    flashState: boolean = false;\n    headshakeState: boolean = false;\n    jelloState: boolean = false;\n    pulseState: boolean = false;\n  }\n  ";
          attentionSeekersAnimationHtml =
            '\n  <button mat-raised-button [@tdBounce]="bounceState" (click)="bounceState = !bounceState" color="accent">\n    @tdBounce <mat-icon>mood</mat-icon>\n  </button>\n  <button mat-raised-button [@tdFlash]="flashState" (click)="flashState = !flashState" color="accent">\n    @tdFlash <mat-icon>mood</mat-icon>\n  </button>\n  <button mat-raised-button [@tdHeadshake]="headshakeState" (click)="headshakeState = !headshakeState" color="accent">\n    @tdHeadshake <mat-icon>mood</mat-icon>\n  </button>\n  <button mat-raised-button [@tdJello]="jelloState" (click)="jelloState = !jelloState" color="accent">\n    @tdJello <mat-icon>mood</mat-icon>\n  </button>\n  <button mat-raised-button [@tdPulse]="pulseState" (click)="pulseState = !pulseState" color="accent">\n    @tdPulse <mat-icon>mood</mat-icon>\n  </button>\n  ';
          static ɵfac = function (n) {
            return new (n || o)();
          };
          static ɵcmp = t.Xpm({
            type: o,
            selectors: [['animations-demo']],
            hostVars: 3,
            hostBindings: function (n, e) {
              2 & n &&
                (t.d8E('@routeAnimation', e.routeAnimation),
                t.ekj('td-route-animation', e.classAnimation));
            },
            decls: 276,
            vars: 36,
            consts: [
              [1, 'push-bottom-xl'],
              [1, 'push-bottom-sm', 'mat-h1'],
              [1, 'tc-td-secondary', 'push-bottom-md'],
              [1, 'push-bottom-xxl'],
              [1, 'push-bottom-sm', 'mat-title'],
              ['codeLang', 'typescript'],
              [
                'mat-raised-button',
                '',
                'color',
                'primary',
                'href',
                'https://angular.io/guide/animations',
                'target',
                '_blank',
                1,
                'text-upper',
                'push-top-sm',
              ],
              [1, 'push-bottom-lg', 'mat-elevation-z0', 'push-none'],
              [1, 'mat-body-2'],
              ['mat-raised-button', '', 'color', 'accent', 3, 'click'],
              ['codeLang', 'html'],
              ['matListItemTitle', ''],
              ['matListItemLine', ''],
              ['mat-raised-button', '', 'color', 'primary', 3, 'click'],
              [
                'mat-raised-button',
                '',
                'color',
                'accent',
                1,
                'push-sm',
                3,
                'click',
              ],
            ],
            template: function (n, e) {
              1 & n &&
                (t.TgZ(0, 'section', 0)(1, 'h1', 1),
                t._uU(2, 'Animations'),
                t.qZA(),
                t.TgZ(3, 'p', 2),
                t._uU(
                  4,
                  ' Utilities to help add simple reusable animations and reduce boilerplate code. For custom and complex animations look into the Angular animations doc. '
                ),
                t.qZA()(),
                t.TgZ(5, 'section', 3)(6, 'h3', 4),
                t._uU(7, 'Setup'),
                t.qZA(),
                t._UZ(8, 'mat-divider'),
                t.TgZ(9, 'p'),
                t._uU(
                  10,
                  ' Import individual animation utilities as needed into the component that will contain the elements you want to animate. '
                ),
                t.qZA(),
                t.TgZ(11, 'td-highlight', 5),
                t._uU(12),
                t.qZA(),
                t._UZ(13, 'mat-divider'),
                t.TgZ(14, 'a', 6),
                t._uU(15, ' Animations Docs '),
                t.qZA()(),
                t.TgZ(16, 'mat-card', 7)(17, 'mat-card-header')(
                  18,
                  'mat-card-title'
                ),
                t._uU(19, 'Rotate Animation'),
                t.qZA()(),
                t.TgZ(20, 'mat-card-content')(21, 'p', 8),
                t._uU(22, ' Use '),
                t.TgZ(23, 'code'),
                t._uU(24, 'tdRotateAnimation'),
                t.qZA(),
                t._uU(25, ' to rotate any element based on a boolean state. '),
                t.qZA(),
                t.TgZ(26, 'div')(27, 'h3'),
                t._uU(28, 'Demo 1:'),
                t.qZA(),
                t.TgZ(29, 'button', 9),
                t.NdJ('click', function () {
                  return (e.rotateState1 = !e.rotateState1);
                }),
                t._uU(30, ' Rotate 180\xb0 '),
                t.TgZ(31, 'mat-icon'),
                t._uU(32, 'mood'),
                t.qZA()(),
                t.TgZ(33, 'p'),
                t._uU(34, 'Typescript:'),
                t.qZA(),
                t.TgZ(35, 'td-highlight', 5),
                t._uU(36),
                t.qZA(),
                t.TgZ(37, 'p'),
                t._uU(38, 'HTML:'),
                t.qZA(),
                t.TgZ(39, 'td-highlight', 10),
                t._uU(40),
                t.qZA()(),
                t._UZ(41, 'mat-divider'),
                t.TgZ(42, 'div')(43, 'h3'),
                t._uU(44, 'Demo 2:'),
                t.qZA(),
                t.TgZ(45, 'button', 9),
                t.NdJ('click', function () {
                  return (e.rotateState2 = !e.rotateState2);
                }),
                t._uU(46, ' Rotate -45\xb0 '),
                t.TgZ(47, 'mat-icon'),
                t._uU(48, 'mood'),
                t.qZA()(),
                t.TgZ(49, 'p'),
                t._uU(50, 'Typescript:'),
                t.qZA(),
                t.TgZ(51, 'td-highlight', 5),
                t._uU(52),
                t.qZA(),
                t.TgZ(53, 'p'),
                t._uU(54, 'HTML:'),
                t.qZA(),
                t.TgZ(55, 'td-highlight', 10),
                t._uU(56),
                t.qZA()(),
                t._UZ(57, 'mat-divider'),
                t.TgZ(58, 'div')(59, 'h2'),
                t._uU(60, 'Parameter Options:'),
                t.qZA(),
                t.TgZ(61, 'mat-list')(62, 'mat-list-item')(63, 'h3', 11),
                t._uU(64, 'degreesStart?: number'),
                t.qZA(),
                t.TgZ(65, 'p', 12),
                t._uU(
                  66,
                  ' Degrees of rotation that the dom object will end up in during the "false" state '
                ),
                t.qZA()(),
                t._UZ(67, 'mat-divider'),
                t.TgZ(68, 'mat-list-item')(69, 'h3', 11),
                t._uU(70, 'degreesEnd?: number'),
                t.qZA(),
                t.TgZ(71, 'p', 12),
                t._uU(
                  72,
                  ' Degrees of rotation that the dom object will end up in during the "true" state '
                ),
                t.qZA()(),
                t._UZ(73, 'mat-divider'),
                t.TgZ(74, 'mat-list-item')(75, 'h3', 11),
                t._uU(76, 'duration?: number'),
                t.qZA(),
                t.TgZ(77, 'p', 12),
                t._uU(
                  78,
                  ' Duration the animation will run in milliseconds. Defaults to 250 ms. '
                ),
                t.qZA()(),
                t._UZ(79, 'mat-divider'),
                t.TgZ(80, 'mat-list-item')(81, 'h3', 11),
                t._uU(82, 'delay?: number'),
                t.qZA(),
                t.TgZ(83, 'p', 12),
                t._uU(
                  84,
                  ' Delay before the animation will run in milliseconds. Defaults to 0 ms. '
                ),
                t.qZA()(),
                t._UZ(85, 'mat-divider'),
                t.TgZ(86, 'mat-list-item')(87, 'h3', 11),
                t._uU(88, 'ease?: string'),
                t.qZA(),
                t.TgZ(89, 'p', 12),
                t._uU(
                  90,
                  ' Animation accelerate and decelerate style. Defaults to ease-in. '
                ),
                t.qZA()()()()()(),
                t.TgZ(91, 'mat-card', 7)(92, 'mat-card-header')(
                  93,
                  'mat-card-title'
                ),
                t._uU(94, 'Collapse Animation'),
                t.qZA()(),
                t.TgZ(95, 'mat-card-content')(96, 'p', 8),
                t._uU(97, ' Use '),
                t.TgZ(98, 'code'),
                t._uU(99, 'tdCollapseAnimation'),
                t.qZA(),
                t._uU(
                  100,
                  ' to collapse any element based on a boolean state. '
                ),
                t.qZA(),
                t.TgZ(101, 'div')(102, 'h3'),
                t._uU(103, 'Demo 1:'),
                t.qZA(),
                t.TgZ(104, 'button', 9),
                t.NdJ('click', function () {
                  return (e.collapseState1 = !e.collapseState1);
                }),
                t._uU(105, ' Collapse '),
                t.qZA(),
                t.TgZ(106, 'div')(107, 'mat-card')(108, 'mat-card-title'),
                t._uU(109, 'Collapse card'),
                t.qZA(),
                t.TgZ(110, 'mat-card-content'),
                t._uU(111, 'Collapse card with a click!'),
                t.qZA(),
                t.TgZ(112, 'mat-card-actions')(113, 'button', 13),
                t.NdJ('click', function () {
                  return (e.collapseState1 = !e.collapseState1);
                }),
                t._uU(114, ' Collapse '),
                t.qZA()()()(),
                t.TgZ(115, 'p'),
                t._uU(116, 'Typescript:'),
                t.qZA(),
                t.TgZ(117, 'td-highlight', 5),
                t._uU(118),
                t.qZA(),
                t.TgZ(119, 'p'),
                t._uU(120, 'HTML:'),
                t.qZA(),
                t.TgZ(121, 'td-highlight', 10),
                t._uU(122),
                t.qZA()(),
                t._UZ(123, 'mat-divider'),
                t.TgZ(124, 'div')(125, 'h2'),
                t._uU(126, 'Parameter Options:'),
                t.qZA(),
                t.TgZ(127, 'mat-list')(128, 'mat-list-item')(129, 'h3', 11),
                t._uU(130, 'duration?: number'),
                t.qZA(),
                t.TgZ(131, 'p', 12),
                t._uU(
                  132,
                  ' Duration the animation will run in milliseconds. Defaults to 150 ms. '
                ),
                t.qZA()(),
                t._UZ(133, 'mat-divider'),
                t.TgZ(134, 'mat-list-item')(135, 'h3', 11),
                t._uU(136, 'delay?: number'),
                t.qZA(),
                t.TgZ(137, 'p', 12),
                t._uU(
                  138,
                  ' Delay before the animation will run in milliseconds. Defaults to 0 ms. '
                ),
                t.qZA()(),
                t._UZ(139, 'mat-divider'),
                t.TgZ(140, 'mat-list-item')(141, 'h3', 11),
                t._uU(142, 'easeOnClose?: string'),
                t.qZA(),
                t.TgZ(143, 'p', 12),
                t._uU(
                  144,
                  ' Animation accelerates and decelerates when closing. Defaults to ease-in. '
                ),
                t.qZA()(),
                t._UZ(145, 'mat-divider'),
                t.TgZ(146, 'mat-list-item')(147, 'h3', 11),
                t._uU(148, 'easeOnOpen?: string'),
                t.qZA(),
                t.TgZ(149, 'p', 12),
                t._uU(
                  150,
                  ' Animation accelerates and decelerates when opening. Defaults to ease-out. '
                ),
                t.qZA()()()()()(),
                t.TgZ(151, 'mat-card', 7)(152, 'mat-card-header')(
                  153,
                  'mat-card-title'
                ),
                t._uU(154, 'Fade in/out Animation'),
                t.qZA()(),
                t.TgZ(155, 'mat-card-content')(156, 'p', 8),
                t._uU(157, ' Use '),
                t.TgZ(158, 'code'),
                t._uU(159, 'TdFadeInOutAnimation'),
                t.qZA(),
                t._uU(
                  160,
                  ' to fade in/out any element based on a boolean state. '
                ),
                t.qZA(),
                t.TgZ(161, 'div')(162, 'h3'),
                t._uU(163, 'Demo 1:'),
                t.qZA(),
                t.TgZ(164, 'button', 9),
                t.NdJ('click', function () {
                  return (e.fadeInOutState1 = !e.fadeInOutState1);
                }),
                t._uU(165, ' Fade '),
                t.qZA(),
                t.TgZ(166, 'div')(167, 'mat-card')(168, 'mat-card-title'),
                t._uU(169, 'Fade Card'),
                t.qZA(),
                t.TgZ(170, 'mat-card-content'),
                t._uU(171, 'Fade in or out with a click!'),
                t.qZA(),
                t.TgZ(172, 'mat-card-actions')(173, 'button', 13),
                t.NdJ('click', function () {
                  return (e.fadeInOutState1 = !e.fadeInOutState1);
                }),
                t._uU(174, ' Fade '),
                t.qZA()()()(),
                t.TgZ(175, 'p'),
                t._uU(176, 'Typescript:'),
                t.qZA(),
                t.TgZ(177, 'td-highlight', 5),
                t._uU(178),
                t.qZA(),
                t.TgZ(179, 'p'),
                t._uU(180, 'HTML:'),
                t.qZA(),
                t.TgZ(181, 'td-highlight', 10),
                t._uU(182),
                t.qZA()(),
                t._UZ(183, 'mat-divider'),
                t.TgZ(184, 'div')(185, 'h2'),
                t._uU(186, 'API:'),
                t.qZA(),
                t.TgZ(187, 'mat-list')(188, 'mat-list-item')(189, 'h3', 11),
                t._uU(190, 'anchor?: string'),
                t.qZA(),
                t.TgZ(191, 'p', 12),
                t._uU(
                  192,
                  " The anchor name is used to attach the animation to an arbitrary element in the template. Defaults to 'tdFadeInOut'. "
                ),
                t.qZA()(),
                t._UZ(193, 'mat-divider'),
                t.TgZ(194, 'mat-list-item')(195, 'h3', 11),
                t._uU(196, 'duration?: number'),
                t.qZA(),
                t.TgZ(197, 'p', 12),
                t._uU(
                  198,
                  ' Duration the animation will run in milliseconds. Defaults to 150 ms. '
                ),
                t.qZA()(),
                t._UZ(199, 'mat-divider'),
                t.TgZ(200, 'mat-list-item')(201, 'h3', 11),
                t._uU(202, 'delay?: number'),
                t.qZA(),
                t.TgZ(203, 'p', 12),
                t._uU(
                  204,
                  ' Delay before the animation will run in milliseconds. Defaults to 0 ms. '
                ),
                t.qZA()(),
                t._UZ(205, 'mat-divider'),
                t.TgZ(206, 'mat-list-item')(207, 'h3', 11),
                t._uU(208, 'easeOnIn?: string'),
                t.qZA(),
                t.TgZ(209, 'p', 12),
                t._uU(
                  210,
                  ' Animation accelerates and decelerates when fading in. Defaults to ease-in. '
                ),
                t.qZA()(),
                t._UZ(211, 'mat-divider'),
                t.TgZ(212, 'mat-list-item')(213, 'h3', 11),
                t._uU(214, 'easeOnOut?: string'),
                t.qZA(),
                t.TgZ(215, 'p', 12),
                t._uU(
                  216,
                  ' Animation accelerates and decelerates when fading out. Defaults to ease-out. '
                ),
                t.qZA()()()()()(),
                t.TgZ(217, 'mat-card', 7)(218, 'mat-card-header')(
                  219,
                  'mat-card-title'
                ),
                t._uU(220, 'Attention Seekers Animation'),
                t.qZA()(),
                t.TgZ(221, 'mat-card-content')(222, 'div')(223, 'h3'),
                t._uU(224, 'Demos:'),
                t.qZA(),
                t.TgZ(225, 'button', 14),
                t.NdJ('click', function () {
                  return (e.bounceState = !e.bounceState);
                }),
                t._uU(226, ' @tdBounce '),
                t.TgZ(227, 'mat-icon'),
                t._uU(228, 'mood'),
                t.qZA()(),
                t.TgZ(229, 'button', 14),
                t.NdJ('click', function () {
                  return (e.flashState = !e.flashState);
                }),
                t._uU(230, ' @tdFlash '),
                t.TgZ(231, 'mat-icon'),
                t._uU(232, 'mood'),
                t.qZA()(),
                t.TgZ(233, 'button', 14),
                t.NdJ('click', function () {
                  return (e.headshakeState = !e.headshakeState);
                }),
                t._uU(234, ' @tdHeadshake '),
                t.TgZ(235, 'mat-icon'),
                t._uU(236, 'mood'),
                t.qZA()(),
                t.TgZ(237, 'button', 14),
                t.NdJ('click', function () {
                  return (e.jelloState = !e.jelloState);
                }),
                t._uU(238, ' @tdJello '),
                t.TgZ(239, 'mat-icon'),
                t._uU(240, 'mood'),
                t.qZA()(),
                t.TgZ(241, 'button', 14),
                t.NdJ('click', function () {
                  return (e.pulseState = !e.pulseState);
                }),
                t._uU(242, ' @tdPulse '),
                t.TgZ(243, 'mat-icon'),
                t._uU(244, 'mood'),
                t.qZA()(),
                t.TgZ(245, 'p'),
                t._uU(246, 'Typescript:'),
                t.qZA(),
                t.TgZ(247, 'td-highlight', 5),
                t._uU(248),
                t.qZA(),
                t.TgZ(249, 'p'),
                t._uU(250, 'HTML:'),
                t.qZA(),
                t.TgZ(251, 'td-highlight', 10),
                t._uU(252),
                t.qZA()(),
                t._UZ(253, 'mat-divider'),
                t.TgZ(254, 'div')(255, 'h2'),
                t._uU(256, 'API:'),
                t.qZA(),
                t.TgZ(257, 'mat-list'),
                t._UZ(258, 'mat-divider'),
                t.TgZ(259, 'mat-list-item')(260, 'h3', 11),
                t._uU(261, 'duration?: number'),
                t.qZA(),
                t.TgZ(262, 'p', 12),
                t._uU(
                  263,
                  ' Duration the animation will run in milliseconds. Defaults to 500 ms. '
                ),
                t.qZA()(),
                t._UZ(264, 'mat-divider'),
                t.TgZ(265, 'mat-list-item')(266, 'h3', 11),
                t._uU(267, 'delay?: number'),
                t.qZA(),
                t.TgZ(268, 'p', 12),
                t._uU(
                  269,
                  ' Delay before the animation will run in milliseconds. Defaults to 0 ms. '
                ),
                t.qZA()(),
                t._UZ(270, 'mat-divider'),
                t.TgZ(271, 'mat-list-item')(272, 'h3', 11),
                t._uU(273, 'ease?: number'),
                t.qZA(),
                t.TgZ(274, 'p', 12),
                t._uU(
                  275,
                  ' Animation accelerate and decelerate style. Defaults to ease-out. '
                ),
                t.qZA()()()()()()),
                2 & n &&
                  (t.xp6(12),
                  t.hij(' ', e.animationTypescript, ' '),
                  t.xp6(17),
                  t.Q6J('@tdRotate', e.rotateState1),
                  t.xp6(7),
                  t.hij(' ', e.rotate180Typescript, ' '),
                  t.xp6(4),
                  t.hij(' ', e.rotate180Html, ' '),
                  t.xp6(5),
                  t.Q6J(
                    '@tdRotate',
                    t.WLB(25, C, e.rotateState2, t.VKq(23, j, -45))
                  ),
                  t.xp6(2),
                  t.Q6J(
                    '@tdRotate',
                    t.WLB(29, C, e.rotateState2, t.DdM(28, k))
                  ),
                  t.xp6(5),
                  t.hij(' ', e.rotate45Typescript, ' '),
                  t.xp6(4),
                  t.hij(' ', e.rotate45Html, ' '),
                  t.xp6(50),
                  t.Udp('overflow', 'hidden'),
                  t.Q6J(
                    '@tdCollapse',
                    t.WLB(33, C, e.collapseState1, t.DdM(32, w))
                  ),
                  t.xp6(12),
                  t.hij(' ', e.collapseTypescript, ' '),
                  t.xp6(4),
                  t.hij(' ', e.collapseHtml, ' '),
                  t.xp6(44),
                  t.Q6J('@tdFadeInOut', e.fadeInOutState1),
                  t.xp6(12),
                  t.hij(' ', e.fadeTypescript, ' '),
                  t.xp6(4),
                  t.hij(' ', e.fadeHtml, ' '),
                  t.xp6(43),
                  t.Q6J('@tdBounce', e.bounceState),
                  t.xp6(4),
                  t.Q6J('@tdFlash', e.flashState),
                  t.xp6(4),
                  t.Q6J('@tdHeadshake', e.headshakeState),
                  t.xp6(4),
                  t.Q6J('@tdJello', e.jelloState),
                  t.xp6(4),
                  t.Q6J('@tdPulse', e.pulseState),
                  t.xp6(7),
                  t.hij(' ', e.attentionSeekersAnimationTypescript, ' '),
                  t.xp6(4),
                  t.hij(' ', e.attentionSeekersAnimationHtml, ' '));
            },
            dependencies: [
              s.a8,
              s.hq,
              s.dn,
              s.dk,
              s.n5,
              f.d,
              A.Hw,
              u.i$,
              u.Tg,
              u.WW,
              u.sL,
              h.zs,
              h.lW,
              Z.S,
            ],
            styles: [
              '.mat-card[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}',
            ],
            data: {
              animation: [
                g.kh,
                g.dg,
                m.uX,
                m.nR,
                m.Te,
                m.B$,
                m.sW,
                m.VQ,
                m.IW,
                m.nK,
              ],
            },
          });
        }
        return o;
      })();
      var b = a(96814),
        O = a(3767),
        F = a(84805),
        J = a(61406),
        N = a(40678),
        I = a(94629),
        M = a(53527),
        L = a(40773);
      function B(o, l) {
        if (
          (1 & o && (t.TgZ(0, 'p', 13), t._uU(1), t.ALo(2, 'digits'), t.qZA()),
          2 & o)
        ) {
          const i = t.oxw().$implicit;
          t.xp6(1),
            t.hij(
              ' With precision argument: ',
              t.xi3(2, 1, i.digits, i.precision),
              ' '
            );
        }
      }
      function H(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, 'mat-list-item')(1, 'h3', 14),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'p', 13),
            t._uU(4),
            t.ALo(5, 'digits'),
            t.qZA(),
            t.YNc(6, B, 3, 4, 'p', 15),
            t.qZA()),
          2 & o)
        ) {
          const i = l.$implicit;
          t.xp6(2),
            t.hij('Digits: ', i.digits, ''),
            t.xp6(2),
            t.hij('Converted: ', t.lcZ(5, 3, i.digits), ''),
            t.xp6(2),
            t.Q6J('ngIf', i.precision);
        }
      }
      function V(o, l) {
        if (
          (1 & o && (t.TgZ(0, 'p', 13), t._uU(1), t.ALo(2, 'bytes'), t.qZA()),
          2 & o)
        ) {
          const i = t.oxw().$implicit;
          t.xp6(1),
            t.hij(
              ' With precision argument: ',
              t.xi3(2, 1, i.bytes, i.precision),
              ' '
            );
        }
      }
      function P(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, 'mat-list-item')(1, 'h3', 14),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'p', 13),
            t._uU(4),
            t.ALo(5, 'bytes'),
            t.qZA(),
            t.YNc(6, V, 3, 4, 'p', 15),
            t.qZA()),
          2 & o)
        ) {
          const i = l.$implicit;
          t.xp6(2),
            t.hij('Bytes: ', i.bytes, ''),
            t.xp6(2),
            t.hij('Converted: ', t.lcZ(5, 3, i.bytes), ''),
            t.xp6(2),
            t.Q6J('ngIf', i.precision);
        }
      }
      function Q(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, 'p', 13), t._uU(1), t.ALo(2, 'decimalBytes'), t.qZA()),
          2 & o)
        ) {
          const i = t.oxw().$implicit;
          t.xp6(1),
            t.hij(
              ' With precision argument: ',
              t.xi3(2, 1, i.bytes, i.precision),
              ' '
            );
        }
      }
      function z(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, 'mat-list-item')(1, 'h3', 14),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'p', 13),
            t._uU(4),
            t.ALo(5, 'decimalBytes'),
            t.qZA(),
            t.YNc(6, Q, 3, 4, 'p', 15),
            t.qZA()),
          2 & o)
        ) {
          const i = l.$implicit;
          t.xp6(2),
            t.hij('Bytes: ', i.bytes, ''),
            t.xp6(2),
            t.hij('Converted: ', t.lcZ(5, 3, i.bytes), ''),
            t.xp6(2),
            t.Q6J('ngIf', i.precision);
        }
      }
      function E(o, l) {
        if ((1 & o && (t.TgZ(0, 'p', 13), t._uU(1), t.qZA()), 2 & o)) {
          const i = t.oxw().$implicit;
          t.xp6(1), t.hij(' Reference: ', i.reference, ' ');
        }
      }
      function R(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, 'mat-list-item')(1, 'h3', 14),
            t._uU(2),
            t.ALo(3, 'timeAgo'),
            t.qZA(),
            t.YNc(4, E, 2, 1, 'p', 15),
            t.qZA()),
          2 & o)
        ) {
          const i = l.$implicit;
          t.xp6(2),
            t.AsE(
              ' Timestamp: ',
              i.timestamp,
              ' | ',
              t.xi3(3, 3, i.timestamp, i.reference),
              ' '
            ),
            t.xp6(2),
            t.Q6J('ngIf', i.reference);
        }
      }
      function Y(o, l) {
        if ((1 & o && (t.TgZ(0, 'p', 13), t._uU(1), t.qZA()), 2 & o)) {
          const i = t.oxw().$implicit;
          t.xp6(1), t.hij(' Reference: ', i.reference, ' ');
        }
      }
      function W(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, 'mat-list-item')(1, 'h3', 14),
            t._uU(2),
            t.ALo(3, 'timeUntil'),
            t.qZA(),
            t.YNc(4, Y, 2, 1, 'p', 15),
            t.qZA()),
          2 & o)
        ) {
          const i = l.$implicit;
          t.xp6(2),
            t.AsE(
              ' Timestamp: ',
              i.expiration_date,
              ' | ',
              t.xi3(3, 3, i.expiration_date, i.reference),
              ' '
            ),
            t.xp6(2),
            t.Q6J('ngIf', i.reference);
        }
      }
      function $(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, 'mat-list-item')(1, 'h3', 14),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'p', 13),
            t._uU(4),
            t.ALo(5, 'timeDifference'),
            t.qZA(),
            t.TgZ(6, 'p', 13),
            t._uU(7),
            t.ALo(8, 'timeDifference'),
            t.qZA()()),
          2 & o)
        ) {
          const i = l.$implicit;
          t.xp6(2),
            t.AsE(
              ' Start Time: ',
              i.timestamp,
              ' | End Time: ',
              i.timestampend,
              ' '
            ),
            t.xp6(2),
            t.hij(
              ' Difference: ',
              t.xi3(5, 4, i.timestamp, i.timestampend),
              ' '
            ),
            t.xp6(3),
            t.hij(
              ' Difference relative to current time: ',
              t.lcZ(8, 7, i.timestamp),
              ' '
            );
        }
      }
      function K(o, l) {
        if (
          (1 & o &&
            (t.TgZ(0, 'mat-list-item')(1, 'h3', 14),
            t._uU(2, ' Original value: '),
            t.TgZ(3, 'code'),
            t._uU(4),
            t.qZA()(),
            t.TgZ(5, 'p', 13),
            t._uU(6, ' Truncate with a length value of '),
            t.TgZ(7, 'code'),
            t._uU(8),
            t.qZA(),
            t._uU(9),
            t.ALo(10, 'truncate'),
            t.qZA()()),
          2 & o)
        ) {
          const i = l.$implicit;
          let n;
          t.xp6(4),
            t.Oqu(i.text_value),
            t.xp6(4),
            t.Oqu(i.truncate_length),
            t.xp6(1),
            t.hij(
              ' : ',
              t.xi3(
                10,
                3,
                i.text_value,
                null !== (n = i.truncate_length) && void 0 !== n ? n : 0
              ),
              ' '
            );
        }
      }
      let G = (() => {
        class o {
          routeAnimation = !0;
          classAnimation = !0;
          currentDate = new Date();
          currentTimeStamp = this.currentDate.toISOString();
          logs = [
            {
              bytes: 72452903343,
              digits: 0.03243,
              precision: 3,
              reference: '2016-06-17T12:59:59.000Z',
              timestamp: '2016-01-29T17:59:59.000Z',
              timestampend: '2016-01-29T18:59:59.000Z',
              text_value:
                'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
              truncate_length: 5,
            },
            {
              bytes: 32452341,
              digits: 3.975086,
              precision: 4,
              reference: new Date(2016, 4, 17),
              timestamp: '2016-06-10T17:59:59.000Z',
              timestampend: '2016-11-29T18:59:59.000Z',
              expiration_date: new Date(
                new Date(2016, 4, 17).getTime() + 12e4
              ).toISOString(),
              text_value:
                'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
              truncate_length: 10,
            },
            {
              bytes: 4521903343e3,
              digits: 4521,
              reference: new Date(2016, 4, 17).getTime(),
              timestamp: '2016-06-17T12:59:59.000Z',
              timestampend: '2016-06-17T13:00:00.000Z',
              expiration_date: new Date(
                new Date(2016, 4, 17).getTime() + 72e5
              ).toISOString(),
              text_value:
                'https://test_source_cf433eb5_5a00_4f2b_afa4_4022b7b2aac3',
              truncate_length: 15,
            },
          ];
          covalantCommonTypescript =
            "\n    import { CovalentCommonModule } from '@covalent/core/common';\n    @NgModule({\n      imports: [\n        CovalentCommonModule,\n        ...\n      ],\n      ...\n    })\n    export class MyModule {}\n  ";
          digitsHtml =
            '\n    <mat-list>\n      <mat-list-item *ngFor="let log of logs">\n        \x3c!-- original output --\x3e\n        <h3 matListItemTitle>Digits: { { log.digits } }</h3>\n        \x3c!-- output with digits pipe --\x3e\n        <p matListItemLine>Converted: { { log.digits | digits } }</p>\n        \x3c!-- output with precision aurgument --\x3e\n        <p matListItemLine>With precision argument: { { log.digits | digits:log.precision } } </p>\n      </mat-list-item>\n    </mat-list>\n  ';
          bytesHtml =
            '\n    <mat-list>\n      <mat-list-item *ngFor="let log of logs">\n        \x3c!-- original output --\x3e\n        <h3 matListItemTitle>Bytes: { { log.bytes } }</h3>\n        \x3c!-- output with bytes pipe --\x3e\n        <p matListItemLine>Converted: { { log.bytes | bytes } }</p>\n        \x3c!-- output with precision aurgument --\x3e\n        <p matListItemLine>With precision argument: { { log.bytes | bytes:log.precision } } </p>\n      </mat-list-item>\n    </mat-list>\n  ';
          decimalByteHtml =
            '\n  <mat-list>\n    <mat-list-item *ngFor="let log of logs">\n      \x3c!-- original output --\x3e\n      <h3 matListItemTitle>Bytes: { { log.bytes } }</h3>\n      \x3c!-- output with bytes pipe --\x3e\n      <p matListItemLine>Converted: { { log.bytes | decimalBytes } }</p>\n      \x3c!-- output with precision aurgument --\x3e\n      <p matListItemLine>With precision argument: { { log.bytes | decimalBytes:log.precision } } </p>\n    </mat-list-item>\n  </mat-list>\n  ';
          timeAgoHtml =
            '\n  <mat-list>\n    <mat-list-item *ngFor="let log of logs">\n      \x3c!-- original output --\x3e\n      { { log.timestamp } } | \n      \x3c!-- output with timeAgo pipe --\x3e\n      { { log.timestamp | timeAgo:reference } } //reference is optional\n    </mat-list-item>\n  </mat-list>\n  ';
          timeUntilHtml =
            '\n  <mat-list>\n    <mat-list-item *ngFor="let log of logs">\n      \x3c!-- original output --\x3e\n      { { log.timestamp } } | \n      \x3c!-- output with timeUntil pipe --\x3e\n      { { log.timestamp | timeUntil:reference } } //reference is optional\n    </mat-list-item>\n  </mat-list>\n  ';
          timeDiffHtml =
            '\n  <mat-list>\n    <mat-list-item *ngFor="let log of logs">\n      \x3c!-- Start and end time output --\x3e\n      <h3 matListItemTitle>{ { log.timestamp } } | End Time: { { log.timestampend } }</h3>\n      \x3c!-- output with timeDifference pipe --\x3e\n      <p matListItemLine>Difference: { { log.timestamp | timeDifference:log.timestampend } }</p>\n      \x3c!-- outputs the time difference relative to the current time --\x3e\n      <p matListItemLine>Difference relative to current time: { { log.timestamp | timeDifference } }</p>\n    </mat-list-item>\n  </mat-list> \n  ';
          truncateHtml1 =
            '\n  <mat-list>\n    <mat-list-item *ngFor="let log of logs">\n      \x3c!-- original value output --\x3e\n      <h3 matListItemTitle>Original value: <code>{ { log.text_value } }</code></h3>\n      \x3c!-- truncated value output --\x3e\n      <p matListItemLine>Truncate with a length value of <code>{ { log.truncate_length } }</code>: { { log.text_value | truncate:log.truncate_length } }</p>\n    </mat-list-item>\n  </mat-list>\n  ';
          truncateHtml2 =
            "\n    \x3c!-- Both have the same output because --\x3e\n    \x3c!-- the space is removed in the last example --\x3e\n    { { abcd abcd abcd | truncate:4 } } \x3c!-- 'abcd\u2026' --\x3e\n    { { abcd abcd abcd | truncate:5 } } \x3c!-- 'abcd\u2026' --\x3e\n  ";
          static ɵfac = function (n) {
            return new (n || o)();
          };
          static ɵcmp = t.Xpm({
            type: o,
            selectors: [['pipes-demo']],
            hostVars: 3,
            hostBindings: function (n, e) {
              2 & n &&
                (t.d8E('@routeAnimation', e.routeAnimation),
                t.ekj('td-route-animation', e.classAnimation));
            },
            decls: 169,
            vars: 17,
            consts: [
              [1, 'push-bottom-xl'],
              [1, 'push-bottom-sm', 'mat-h1'],
              [1, 'tc-td-secondary', 'push-bottom-md'],
              [1, 'push-bottom-xxl'],
              [1, 'push-bottom-sm', 'mat-title'],
              ['codeLang', 'typescript'],
              [
                'mat-raised-button',
                '',
                'color',
                'primary',
                'href',
                'https://angular.io/docs/ts/latest/guide/pipes.html',
                'target',
                '_blank',
                1,
                'text-upper',
                'push-top-sm',
              ],
              [1, 'mat-elevation-z0', 'push-bottom-lg', 'push-none'],
              [1, 'mat-body-2'],
              [4, 'ngFor', 'ngForOf'],
              ['codeLang', 'html'],
              [
                'mat-list-item',
                '',
                'href',
                'https://angular.io/api?type=pipe',
                'target',
                '_blank',
              ],
              ['matListItemIcon', ''],
              ['matListItemLine', ''],
              ['matListItemTitle', ''],
              ['matListItemLine', '', 4, 'ngIf'],
            ],
            template: function (n, e) {
              1 & n &&
                (t.TgZ(0, 'section', 0)(1, 'h1', 1),
                t._uU(2, 'Pipes'),
                t.qZA(),
                t.TgZ(3, 'p', 2),
                t._uU(4, 'Custom Angular pipes (filters).'),
                t.qZA()(),
                t.TgZ(5, 'section', 3)(6, 'h3', 4),
                t._uU(7, 'Setup'),
                t.qZA(),
                t._UZ(8, 'mat-divider'),
                t.TgZ(9, 'p'),
                t._uU(
                  10,
                  'Import the [CovalentCommonModule] in your NgModule:'
                ),
                t.qZA(),
                t.TgZ(11, 'td-highlight', 5),
                t._uU(12),
                t.qZA(),
                t._UZ(13, 'mat-divider'),
                t.TgZ(14, 'a', 6),
                t._uU(15, ' Pipes Docs '),
                t.qZA()(),
                t.TgZ(16, 'mat-card', 7)(17, 'mat-card-header')(
                  18,
                  'mat-card-title'
                ),
                t._uU(19, 'Digits Conversion'),
                t.qZA()(),
                t.TgZ(20, 'mat-card-content')(21, 'p', 8),
                t._uU(22, ' The '),
                t.TgZ(23, 'code'),
                t._uU(24, 'digits'),
                t.qZA(),
                t._uU(
                  25,
                  ' pipe takes a number and converts the output to an appropriate numerical measurement with an optional '
                ),
                t.TgZ(26, 'code'),
                t._uU(27, 'precision'),
                t.qZA(),
                t._uU(28, ' argument. '),
                t.qZA(),
                t.TgZ(29, 'mat-list'),
                t.YNc(30, H, 7, 5, 'mat-list-item', 9),
                t.qZA(),
                t.TgZ(31, 'p'),
                t._uU(32, 'Usage:'),
                t.qZA(),
                t.TgZ(33, 'td-highlight', 10),
                t._uU(34),
                t.qZA()()(),
                t.TgZ(35, 'mat-card', 7)(36, 'mat-card-header')(
                  37,
                  'mat-card-title'
                ),
                t._uU(38, 'Byte Conversion'),
                t.qZA()(),
                t.TgZ(39, 'mat-card-content')(40, 'p', 8),
                t._uU(41, ' The '),
                t.TgZ(42, 'code'),
                t._uU(43, 'bytes'),
                t.qZA(),
                t._uU(
                  44,
                  ' pipe takes a number and converts the output to an appropriate base 1024 data measurement with an optional '
                ),
                t.TgZ(45, 'code'),
                t._uU(46, 'precision'),
                t.qZA(),
                t._uU(47, ' argument. '),
                t.qZA(),
                t.TgZ(48, 'mat-list'),
                t.YNc(49, P, 7, 5, 'mat-list-item', 9),
                t.qZA(),
                t.TgZ(50, 'p'),
                t._uU(51, 'Usage:'),
                t.qZA(),
                t.TgZ(52, 'td-highlight', 10),
                t._uU(53),
                t.qZA()()(),
                t.TgZ(54, 'mat-card', 7)(55, 'mat-card-header')(
                  56,
                  'mat-card-title'
                ),
                t._uU(57, 'Decimal Bytes Conversion'),
                t.qZA()(),
                t.TgZ(58, 'mat-card-content')(59, 'p', 8),
                t._uU(60, ' The '),
                t.TgZ(61, 'code'),
                t._uU(62, 'decimalBytes'),
                t.qZA(),
                t._uU(
                  63,
                  ' pipe takes a number and converts the output to an appropriate base 1000 data measurement with an optional '
                ),
                t.TgZ(64, 'code'),
                t._uU(65, 'precision'),
                t.qZA(),
                t._uU(66, ' argument. '),
                t.qZA(),
                t.TgZ(67, 'mat-list'),
                t.YNc(68, z, 7, 5, 'mat-list-item', 9),
                t.qZA(),
                t.TgZ(69, 'p'),
                t._uU(70, 'Usage:'),
                t.qZA(),
                t.TgZ(71, 'td-highlight', 10),
                t._uU(72),
                t.qZA()()(),
                t.TgZ(73, 'mat-card', 7)(74, 'mat-card-header')(
                  75,
                  'mat-card-title'
                ),
                t._uU(76, 'Time Ago'),
                t.qZA()(),
                t.TgZ(77, 'mat-card-content')(78, 'p', 8),
                t._uU(79, ' The '),
                t.TgZ(80, 'code'),
                t._uU(81, 'timeAgo'),
                t.qZA(),
                t._uU(
                  82,
                  ' pipe takes a string, number or Date timestamp (example: '
                ),
                t.TgZ(83, 'code'),
                t._uU(84, '2016-01-29T17:59:59.000Z'),
                t.qZA(),
                t._uU(
                  85,
                  ' ) and tranforms it to the amount of time that has gone by. '
                ),
                t.qZA(),
                t.TgZ(86, 'mat-list'),
                t.YNc(87, R, 5, 6, 'mat-list-item', 9),
                t.qZA(),
                t.TgZ(88, 'p'),
                t._uU(89, 'Usage:'),
                t.qZA(),
                t.TgZ(90, 'td-highlight', 10),
                t._uU(91),
                t.qZA()()(),
                t.TgZ(92, 'mat-card', 7)(93, 'mat-card-header')(
                  94,
                  'mat-card-title'
                ),
                t._uU(95, 'Time Until'),
                t.qZA()(),
                t.TgZ(96, 'mat-card-content')(97, 'p', 8),
                t._uU(98, ' The '),
                t.TgZ(99, 'code'),
                t._uU(100, 'timeUntil'),
                t.qZA(),
                t._uU(
                  101,
                  ' pipe takes a string, number or Date timestamp (example: '
                ),
                t.TgZ(102, 'code'),
                t._uU(103),
                t.qZA(),
                t._uU(
                  104,
                  ' ) and tranforms it to the amount of time until that timestamp will be reached. '
                ),
                t.qZA(),
                t.TgZ(105, 'mat-list'),
                t.YNc(106, W, 5, 6, 'mat-list-item', 9),
                t.qZA(),
                t.TgZ(107, 'p'),
                t._uU(108, 'Usage:'),
                t.qZA(),
                t.TgZ(109, 'td-highlight', 10),
                t._uU(110),
                t.qZA()()(),
                t.TgZ(111, 'mat-card', 7)(112, 'mat-card-header')(
                  113,
                  'mat-card-title'
                ),
                t._uU(114, 'Time Difference'),
                t.qZA()(),
                t.TgZ(115, 'mat-card-content')(116, 'p', 8),
                t._uU(117, ' The '),
                t.TgZ(118, 'code'),
                t._uU(119, 'timeDifference'),
                t.qZA(),
                t._uU(
                  120,
                  ' pipe outputs the difference between two times. Strings, Numbers or Date timestamps are acceptable types. (example: '
                ),
                t.TgZ(121, 'code'),
                t._uU(122, '2016-01-29T17:59:59.000Z'),
                t.qZA(),
                t._uU(123, ' ). '),
                t.qZA(),
                t.TgZ(124, 'mat-list'),
                t.YNc(125, $, 9, 9, 'mat-list-item', 9),
                t.qZA(),
                t.TgZ(126, 'p', 8)(127, 'strong'),
                t._uU(128, 'Note:'),
                t.qZA(),
                t._uU(
                  129,
                  ' Using this pipe without arguments outputs the time difference relative to the current time. '
                ),
                t.qZA(),
                t.TgZ(130, 'p'),
                t._uU(131, 'Usage:'),
                t.qZA(),
                t.TgZ(132, 'td-highlight', 10),
                t._uU(133),
                t.qZA()()(),
                t.TgZ(134, 'mat-card', 7)(135, 'mat-card-header')(
                  136,
                  'mat-card-title'
                ),
                t._uU(137, 'Truncate'),
                t.qZA()(),
                t.TgZ(138, 'mat-card-content')(139, 'p', 8),
                t._uU(140, ' The '),
                t.TgZ(141, 'code'),
                t._uU(142, 'truncate'),
                t.qZA(),
                t._uU(143, ' pipe limits a string to a specified '),
                t.TgZ(144, 'code'),
                t._uU(145, 'length'),
                t.qZA(),
                t._uU(146, ' and adds an ellipsis. '),
                t.qZA(),
                t.TgZ(147, 'mat-list'),
                t.YNc(148, K, 11, 6, 'mat-list-item', 9),
                t.qZA(),
                t.TgZ(149, 'p'),
                t._uU(150, 'Usage:'),
                t.qZA(),
                t.TgZ(151, 'td-highlight', 10),
                t._uU(152),
                t.qZA(),
                t.TgZ(153, 'p', 8)(154, 'strong'),
                t._uU(155, 'Note:'),
                t.qZA(),
                t._uU(
                  156,
                  ' If the last character in a returned output is a space, then that space is removed. '
                ),
                t.qZA(),
                t.TgZ(157, 'td-highlight', 10),
                t._uU(158),
                t.qZA()()(),
                t.TgZ(159, 'mat-card', 7)(160, 'mat-card-header')(
                  161,
                  'mat-card-title'
                ),
                t._uU(162, 'Angular Pipes'),
                t.qZA()(),
                t.TgZ(163, 'mat-nav-list')(164, 'a', 11)(165, 'mat-icon', 12),
                t._uU(166, 'launch'),
                t.qZA(),
                t.TgZ(167, 'span', 13),
                t._uU(
                  168,
                  ' Angular comes with a stock of pipes such as DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, and PercentPipe '
                ),
                t.qZA()()()()),
                2 & n &&
                  (t.xp6(12),
                  t.hij(' ', e.covalantCommonTypescript, ' '),
                  t.xp6(18),
                  t.Q6J('ngForOf', e.logs),
                  t.xp6(4),
                  t.hij(' ', e.digitsHtml, ' '),
                  t.xp6(15),
                  t.Q6J('ngForOf', e.logs),
                  t.xp6(4),
                  t.hij(' ', e.bytesHtml, ' '),
                  t.xp6(15),
                  t.Q6J('ngForOf', e.logs),
                  t.xp6(4),
                  t.hij(' ', e.decimalByteHtml, ' '),
                  t.xp6(15),
                  t.Q6J('ngForOf', e.logs),
                  t.xp6(4),
                  t.hij(' ', e.timeAgoHtml, ' '),
                  t.xp6(12),
                  t.Oqu(e.currentTimeStamp),
                  t.xp6(3),
                  t.Q6J('ngForOf', e.logs),
                  t.xp6(4),
                  t.hij(' ', e.timeUntilHtml, ' '),
                  t.xp6(15),
                  t.Q6J('ngForOf', e.logs),
                  t.xp6(8),
                  t.hij(' ', e.timeDiffHtml, ' '),
                  t.xp6(15),
                  t.Q6J('ngForOf', e.logs),
                  t.xp6(4),
                  t.hij(' ', e.truncateHtml1, ' '),
                  t.xp6(6),
                  t.hij(' ', e.truncateHtml2, ' '));
            },
            dependencies: [
              b.sg,
              b.O5,
              s.a8,
              s.dn,
              s.dk,
              s.n5,
              f.d,
              A.Hw,
              u.i$,
              u.Hk,
              u.Tg,
              u.Yt,
              u.WW,
              u.sL,
              h.zs,
              Z.S,
              O.d,
              F.D,
              J.B,
              N.I,
              I.v,
              M.S,
              L.G,
            ],
            styles: [
              'mat-card[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}',
            ],
            data: { animation: [g.kh] },
          });
        }
        return o;
      })();
      var X = a(15861),
        tt = a(22939),
        c = a(56223),
        q = a(2032),
        S = a(64170),
        U = a(74104);
      function et(o, l) {
        1 & o && t._uU(0, 'Demo');
      }
      function ot(o, l) {
        1 & o && t._uU(0, 'Code');
      }
      function it(o, l) {
        1 & o && t._uU(0, 'Demo');
      }
      function nt(o, l) {
        1 & o && t._uU(0, 'Code');
      }
      function at(o, l) {
        1 & o && t._uU(0, 'Demo');
      }
      function lt(o, l) {
        1 & o && t._uU(0, 'Code');
      }
      function st(o, l) {
        1 & o && t._uU(0, 'Demo');
      }
      function mt(o, l) {
        1 & o && t._uU(0, 'Code');
      }
      let pt = (() => {
          class o {
            _snackBar;
            routeAnimation = !0;
            classAnimation = !0;
            copyText = 'Lorem Ipsum';
            objects = [
              { name: 'user1', id: 123 },
              { name: 'user2', id: 234 },
            ];
            objectsString;
            csvOutput = '';
            csv = 'name,id\r\nuser1,123\r\nuser2,234\r\n';
            jsonOutput = '';
            json = '[{"name":"user1","id":"123"},{"name":"user2","id":"234"}]';
            fileName = 'sample.txt';
            fileContent = 'Lorem Ipsum';
            mimeType = 'text/plain';
            readFileContent = '';
            clipboardCodeHtml =
              '\n  <form> \n    <div layout="row">\n      <mat-form-field flex> \n        <textarea matInput [(ngModel)]="copyText" placeholder="Text to be copied" rows="1" name="copyTextinput"></textarea>\n      </mat-form-field>\n    </div>\n  </form>\n  <button mat-raised-button color="primary" (click)="doCopyToClipboard()" class="text-upper">\n    Copy To Clipboard\n  </button>\n  ';
            clipboardCodeTypescript =
              "\n  import { copyToClipboard } from '@covalent/core/common'\n  \n  export class FunctionsDemoComponent {\n    copyText: string = 'Lorem Ipsum';\n    constructor(private _snackBar: MatSnackBar) {} \n    doCopyToClipboard(): void {\n      // Invoke utility function to copy input text to clipboard \n      copyToClipboard(this.copyText);\n      // Show snackbar to indicate task complete\n      this._snackBar.open('Text copied!', undefined, { duration: 2000, });\n    }\n  }\n  ";
            convertCodeHtml =
              '\n  <h4>Input CSV:</h4> \n  <td-highlight [content]="csv"></td-highlight>\n  <button mat-raised-button color="primary" (click)="doConvertCSVToJSON()" class="text-upper push-top-sm">\n    Convert CSV\n  </button>\n  <h4>Output JSON:</h4>\n  <td-highlight [content]="jsonOutput"></td-highlight> \n  <h4>Input Objects:</h4> \n  <td-highlight [content]="objectsString"></td-highlight>\n  <button mat-raised-button color="primary" (click)="doConvertObjectsToCSV()" class="text-upper push-top-sm">\n    Convert Objects\n  </button>\n  <h4>Output CSV:</h4>\n  <td-highlight[content]="csvOutput"></td-highlight>\n  ';
            convertCodeTypescript =
              "\n  import { convertCSVToJSON, convertObjectsToCSV } from '@covalent/core/common'\n  export class FunctionsDemoComponent {\n    csv: string = 'name,id\r\nuser1,123\r\nuser2,234\r\n'; \n    jsonOutput: string = '';\n    objects: object[] = [\n      { 'name': 'user1', 'id': 123 }, \n      { 'name': 'user2', 'id': 234 }\n    ]; \n    objectsString: string;\n    csvOutput: string = ''; \n    constructor(private _snackBar: MatSnackBar) {\n      this.objectsString = JSON.stringify(this.objects, undefined, 2); \n    }\n\n    doConvertCSVToJSON(): void { \n      // Invoke utility function to CSV value using \n      // comma as the key separator and carriage return line feed \n      // as the line separator into JSON format. Use two space\n      // indent to prettify output JSON. \n      this.jsonOutput = convertCSVToJSON(this.csv,',','\r\n',2); \n      // Show snackbar to indicate task complete \n      this._snackBar.open('Objects converted!', undefined, { duration: 2000, }); \n    }\n\n    doConvertObjectsToCSV(): void { \n      // Invoke utility function to convert objects array using \n      // comma as the key separator and carriage return line feed \n      // as the line separator. \n      this.csvOutput = convertObjectsToCSV(this.objects,',','\r\n'); \n      // Show snackbar to indicate task complete\n      this._snackBar.open('Objects converted!', undefined, { duration: 2000, });\n    }\n\n  }\n  ";
            downloadCodeHtml =
              '\n  <h4>CSV:</h4> \n  <td-highlight [content]="csv"></td-highlight> \n  <button mat-raised-button color="primary" (click)="doDownloadCSV()" class="text-upper push-top-sm">\n    Download CSV\n  </button> \n  <h4>JSON:</h4>\n  <td-highlight [content]="json"></td-highlight> \n  <button mat-raised-button color="primary" (click)="doDownloadJSON()" class="text-upper push-top-sm">\n    Download JSON\n  </button> \n  <h4>Objects:</h4> \n  <td-highlight [content]="objectsString"></td-highlight> \n  <button mat-raied-button color="primary" (click)="doDownloadObjectsToCSV()" class="text-upper push-top-sm">\n    Download To CSV\n  </button> \n  <h4>Objects:</h4>\n  <td-highlight [content]="objectsString"></td-highlight> \n  <button mat-raised-button color="primary" (click)="doDownloadObjectsToJSON()" class="text-upper push-top-sm"> \n    Download To JSON\n  </button> \n  <form> \n    <div layout="column"> \n      <mat-form-field flex> \n        <input matInput [(ngModel)]="fileName" placeholder="File name" rows="1" name="fileNameInput">\n      </mat-form-field>\n      <mat-form-field flex> \n        <textarea matInput [(ngModel)]="fileContent" placeholder="File content" rows="1" name="fileContentInput"></textarea>\n      </mat-form-field>\n      <mat-form-field flex> \n        <input matInput [(ngModel)]="mimeType" placeholder="Mime type" rows="1" name="mimeTypeInput">\n      </mat-form-field>\n    </div> \n  </form>\n  <button mat-raised-button color="primary" (click)="doDownloadFile()" class="text-upper"> \n    Download\n  </button>\n  ';
            downloadCodeTypescript =
              "\n  import { downloadCSV, downloadJSON, downloadObjectsToCSV, downloadObjectsToJSON, downloadFile } from '@covalent/core/common';\n  export class FunctionsDemoComponent { \n    csv: string = 'name,id\r\nuser1,123\r\nuser2,234\r\n';\n    json: string = '[\n      {\"name\":\"user1\",\"id\":\"123\"},\n      {\"name\":\"user2\",\"id\":\"234\"},\n    ]'; \n    objects: object[] = [ \n      { 'name': 'user1', 'id': 123 },\n      { 'name': 'user2', 'id': 234 } \n    ];\n    objectsString: string; fileName: string = 'sample.txt'; \n    fileContent: string = 'Lorem Ipsum'; \n    mimeType: string = 'text/plain'; \n    constructor(private _snackBar: MatSnackBar) { \n      this.objectsString = JSON.stringify(this.objects, undefined, 2); \n    }\n\n    doDownloadCSV(): void { \n      // Invoke utility function to download CSV value into file \n      // with 'text/csv' mime type and '.csv' extension.\n      downloadCSV('csvsampledata', this.csv); \n      // Show snackbar to indicate task complete\n      this._snackBar.open('CSV downloaded!', undefined, { duration: 2000, });\n    }\n\n    doDownloadJSON(): void {\n      // Invoke utility function to download JSON into file\n      // with 'application/json' mime type and '.json' extension.\n      // Request JSON to be prettied. downloadJSON('jsonsampledata', this.json, true, 2); \n      // Show snackbar to indicate task complete \n      this._snackBar.open('JSON downloaded!', undefined, { duration: 2000, });\n    }\n\n    doDownloadObjectsToCSV(): void {\n      // Invoke utility function to convert objects to CSV value \n      // and download into file with 'text/csv' mime type and \n      // '.csv' extension.   \n      downloadObjectsToCSV('objtocsvsampledata', this.objects); \n      // Show snackbar to indicate task complete \n      this._snackBar.open('JSON converted to CSV and downloaded!', undefined, { duration: 2000, });\n    } \n    doDownloadObjectsToJSON(): void { \n      // Invoke utility function to convert objects to JSON \n      // and download into file with 'application/json' mime type and \n      // '.json' extension. \n      downloadObjectsToJSON('objtojsonsampledata', this.objects); \n      // Show snackbar to indicate task complete \n      this._snackBar.open('Objects converted to JSON and downloaded!', undefined, { duration: 2000, });\n    }\n    doDownloadFile(): void { \n      // Invoke utility function to write contents to specified \n      // file with desired mime type. downloadFile(this.fileName, this.fileContent, this.mimeType); \n      // Show snackbar to indicate task complete\n      this._snackBar.open('Content downloaded!', undefined, { duration: 2000, }); \n    } \n  }\n  ";
            fileCodeHtml =
              '\n  <button mat-raised-button class="text-upper" color="primary" (click)="fileInput.click()">\n    Choose File \n    <input #fileInput type="file" (change)="doReadFile($event)" style="display:none"/> \n  </button> \n  <h4>File Content:</h4> \n  <td-highlight [content]="readFileContent"></td-highlight>\n  ';
            fileCodeTypescript =
              "\n  import { readFile } from '@covalent/core/common'\n  export class FunctionsDemoComponent { \n    readFileContent: string = ''; \n    async doReadFile(event: any): Promise<void> { \n      let file: File = event.srcElement.files[0];\n      this.readFileContent = await readFile(file); \n    } \n  }\n  ";
            constructor(i) {
              (this._snackBar = i),
                (this.objectsString = (0, m.t_)(this.objects, 2));
            }
            doCopyToClipboard() {
              (0, m.vQ)(this.copyText),
                this._snackBar.open('Text copied!', void 0, { duration: 2e3 });
            }
            doConvertObjectsToCSV() {
              (this.csvOutput = (0, m.D1)(this.objects, ',', '\r\n')),
                this._snackBar.open('Objects converted!', void 0, {
                  duration: 2e3,
                });
            }
            doConvertCSVToJSON() {
              (this.jsonOutput = (0, m.mw)(this.csv, ',', '\r\n', 2)),
                this._snackBar.open('CSV converted!', void 0, {
                  duration: 2e3,
                });
            }
            doDownloadCSV() {
              (0, m.EZ)('csvsampledata', this.csv),
                this._snackBar.open('CSV downloaded!', void 0, {
                  duration: 2e3,
                });
            }
            doDownloadJSON() {
              (0, m.bb)('jsonsampledata', this.json, !0, 2),
                this._snackBar.open('JSON downloaded!', void 0, {
                  duration: 2e3,
                });
            }
            doDownloadObjectsToCSV() {
              (0, m.rC)('objtocsvsampledata', this.objects),
                this._snackBar.open(
                  'Objects converted to CSV and downloaded!',
                  void 0,
                  { duration: 2e3 }
                );
            }
            doDownloadObjectsToJSON() {
              (0, m.Cr)('objtojsonsampledata', this.objects),
                this._snackBar.open(
                  'Objects converted to JSON and downloaded!',
                  void 0,
                  { duration: 2e3 }
                );
            }
            doDownloadFile() {
              (0, m.Sv)(this.fileName, this.fileContent, this.mimeType),
                this._snackBar.open('Content downloaded!', void 0, {
                  duration: 2e3,
                });
            }
            doReadFile(i) {
              var n = this;
              return (0, X.Z)(function* () {
                const e = i.srcElement.files[0];
                n.readFileContent = yield (0, m.pJ)(e);
              })();
            }
            static ɵfac = function (n) {
              return new (n || o)(t.Y36(tt.ux));
            };
            static ɵcmp = t.Xpm({
              type: o,
              selectors: [['td-functions']],
              hostVars: 3,
              hostBindings: function (n, e) {
                2 & n &&
                  (t.d8E('@routeAnimation', e.routeAnimation),
                  t.ekj('td-route-animation', e.classAnimation));
              },
              decls: 180,
              vars: 21,
              consts: [
                [1, 'push-bottom-xl'],
                [1, 'push-bottom-sm', 'mat-h1'],
                [1, 'tc-td-secondary', 'push-bottom-md'],
                [1, 'push-bottom-lg', 'mat-elevation-z0', 'push-none'],
                [1, 'push-bottom-none'],
                ['mat-stretch-tabs', '', 'dynamicHeight', ''],
                ['matTabLabel', ''],
                [1, 'mat-title'],
                ['layout', 'row'],
                ['flex', ''],
                [
                  'matInput',
                  '',
                  'placeholder',
                  'Text to be copied',
                  'rows',
                  '1',
                  'name',
                  'copyTextinput',
                  3,
                  'ngModel',
                  'ngModelChange',
                ],
                [
                  'mat-raised-button',
                  '',
                  'color',
                  'primary',
                  1,
                  'text-upper',
                  'push-sm',
                  3,
                  'click',
                ],
                ['codeLang', 'html'],
                ['codeLang', 'typescript'],
                [3, 'content'],
                [
                  'mat-raised-button',
                  '',
                  'color',
                  'primary',
                  1,
                  'text-upper',
                  'push-top-sm',
                  3,
                  'click',
                ],
                [1, 'mat-title', 'pad-top-xl'],
                [1, 'mat-title', 'pad-top-lg'],
                ['layout', 'column'],
                [
                  'matInput',
                  '',
                  'placeholder',
                  'File name',
                  'rows',
                  '1',
                  'name',
                  'fileNameInput',
                  3,
                  'ngModel',
                  'ngModelChange',
                ],
                [
                  'matInput',
                  '',
                  'placeholder',
                  'File content',
                  'rows',
                  '1',
                  'name',
                  'fileContentInput',
                  3,
                  'ngModel',
                  'ngModelChange',
                ],
                [
                  'matInput',
                  '',
                  'placeholder',
                  'Mime type',
                  'rows',
                  '1',
                  'name',
                  'mimeTypeInput',
                  3,
                  'ngModel',
                  'ngModelChange',
                ],
                [
                  'mat-raised-button',
                  '',
                  'color',
                  'none',
                  1,
                  'text-upper',
                  'push-sm',
                  3,
                  'click',
                ],
                [
                  'mat-raised-button',
                  '',
                  'color',
                  'primary',
                  1,
                  'text-upper',
                  3,
                  'click',
                ],
                ['type', 'file', 2, 'display', 'none', 3, 'change'],
                ['fileInput', ''],
                [1, 'filecontentmaxheight', 3, 'content'],
              ],
              template: function (n, e) {
                if (1 & n) {
                  const p = t.EpF();
                  t.TgZ(0, 'section', 0)(1, 'h1', 1),
                    t._uU(2, 'Functions'),
                    t.qZA(),
                    t.TgZ(3, 'p', 2),
                    t._uU(4, ' Helpful functions for common interactions. '),
                    t.qZA()(),
                    t.TgZ(5, 'mat-card', 3)(6, 'mat-card-header')(
                      7,
                      'mat-card-title'
                    ),
                    t._uU(8, 'Clipboard'),
                    t.qZA(),
                    t.TgZ(9, 'mat-card-subtitle', 4),
                    t._uU(10, 'Clipboard function.'),
                    t.qZA()(),
                    t.TgZ(11, 'mat-card-content')(12, 'mat-tab-group', 5)(
                      13,
                      'mat-tab'
                    ),
                    t.YNc(14, et, 1, 0, 'ng-template', 6),
                    t.TgZ(15, 'h3', 7),
                    t._uU(16, 'copyToClipboard'),
                    t.qZA(),
                    t.TgZ(17, 'p'),
                    t._uU(
                      18,
                      ' Assign a text value to the system clipboard. Note: Due to browser security restrictions, the copy will only succeed if this method is invoked as a result of a user action (eg. user button click). '
                    ),
                    t.qZA(),
                    t.TgZ(19, 'form')(20, 'div', 8)(21, 'mat-form-field', 9)(
                      22,
                      'textarea',
                      10
                    ),
                    t.NdJ('ngModelChange', function (d) {
                      return (e.copyText = d);
                    }),
                    t.qZA()()()(),
                    t.TgZ(23, 'button', 11),
                    t.NdJ('click', function () {
                      return e.doCopyToClipboard();
                    }),
                    t._uU(24, ' Copy To Clipboard '),
                    t.qZA()(),
                    t.TgZ(25, 'mat-tab'),
                    t.YNc(26, ot, 1, 0, 'ng-template', 6),
                    t.TgZ(27, 'p'),
                    t._uU(28, 'HTML:'),
                    t.qZA(),
                    t.TgZ(29, 'td-highlight', 12),
                    t._uU(30),
                    t.qZA(),
                    t.TgZ(31, 'p'),
                    t._uU(32, 'Typescript:'),
                    t.qZA(),
                    t.TgZ(33, 'td-highlight', 13),
                    t._uU(34),
                    t.qZA()()()()(),
                    t.TgZ(35, 'mat-card', 3)(36, 'mat-card-header')(
                      37,
                      'mat-card-title'
                    ),
                    t._uU(38, 'Convert'),
                    t.qZA(),
                    t.TgZ(39, 'mat-card-subtitle', 4),
                    t._uU(40, 'Type conversion functions.'),
                    t.qZA()(),
                    t.TgZ(41, 'mat-card-content')(42, 'mat-tab-group', 5)(
                      43,
                      'mat-tab'
                    ),
                    t.YNc(44, it, 1, 0, 'ng-template', 6),
                    t.TgZ(45, 'h3', 7),
                    t._uU(46, 'convertCSVToJSON'),
                    t.qZA(),
                    t.TgZ(47, 'p'),
                    t._uU(
                      48,
                      ' Conversion function that takes a CSV representation of objects and converts them to JSON. The first row in the input must be the object keys. Custom key separator and line separator can be specified. Space indentation size for output JSON can be specified. '
                    ),
                    t.qZA(),
                    t.TgZ(49, 'h4'),
                    t._uU(50, 'Input CSV:'),
                    t.qZA(),
                    t._UZ(51, 'td-highlight', 14),
                    t.TgZ(52, 'button', 15),
                    t.NdJ('click', function () {
                      return e.doConvertCSVToJSON();
                    }),
                    t._uU(53, ' Convert CSV '),
                    t.qZA(),
                    t.TgZ(54, 'h4'),
                    t._uU(55, 'Output JSON:'),
                    t.qZA(),
                    t._UZ(56, 'td-highlight', 14),
                    t.TgZ(57, 'h3', 16),
                    t._uU(58, 'convertObjectsToCSV'),
                    t.qZA(),
                    t.TgZ(59, 'p'),
                    t._uU(
                      60,
                      ' Conversion function that takes an array of objects and converts them to CSV format. Custom key and line separators can be specified. '
                    ),
                    t.qZA(),
                    t.TgZ(61, 'h4'),
                    t._uU(62, 'Input Objects:'),
                    t.qZA(),
                    t._UZ(63, 'td-highlight', 14),
                    t.TgZ(64, 'button', 15),
                    t.NdJ('click', function () {
                      return e.doConvertObjectsToCSV();
                    }),
                    t._uU(65, ' Convert Objects '),
                    t.qZA(),
                    t.TgZ(66, 'h4'),
                    t._uU(67, 'Output CSV:'),
                    t.qZA(),
                    t._UZ(68, 'td-highlight', 14),
                    t.qZA(),
                    t.TgZ(69, 'mat-tab'),
                    t.YNc(70, nt, 1, 0, 'ng-template', 6),
                    t.TgZ(71, 'p'),
                    t._uU(72, 'HTML:'),
                    t.qZA(),
                    t.TgZ(73, 'td-highlight', 12),
                    t._uU(74),
                    t.qZA(),
                    t.TgZ(75, 'p'),
                    t._uU(76, 'Typescript:'),
                    t.qZA(),
                    t.TgZ(77, 'td-highlight', 13),
                    t._uU(78),
                    t.qZA()()()()(),
                    t.TgZ(79, 'mat-card', 3)(80, 'mat-card-header')(
                      81,
                      'mat-card-title'
                    ),
                    t._uU(82, 'Download'),
                    t.qZA(),
                    t.TgZ(83, 'mat-card-subtitle', 4),
                    t._uU(84, 'Content download functions.'),
                    t.qZA()(),
                    t.TgZ(85, 'mat-card-content')(86, 'mat-tab-group', 5)(
                      87,
                      'mat-tab'
                    ),
                    t.YNc(88, at, 1, 0, 'ng-template', 6),
                    t.TgZ(89, 'h3', 7),
                    t._uU(90, 'downloadCSV'),
                    t.qZA(),
                    t.TgZ(91, 'p'),
                    t._uU(
                      92,
                      ' Download CSV content to the specified file with .csv extension appended to the provided base file name. '
                    ),
                    t.qZA(),
                    t.TgZ(93, 'h4'),
                    t._uU(94, 'CSV:'),
                    t.qZA(),
                    t._UZ(95, 'td-highlight', 14),
                    t.TgZ(96, 'button', 15),
                    t.NdJ('click', function () {
                      return e.doDownloadCSV();
                    }),
                    t._uU(97, ' Download CSV '),
                    t.qZA(),
                    t.TgZ(98, 'h3', 17),
                    t._uU(99, 'downloadJSON'),
                    t.qZA(),
                    t.TgZ(100, 'p'),
                    t._uU(
                      101,
                      ' Download JSON content to the specified file with .json extension appended to the provided base file name. '
                    ),
                    t.qZA(),
                    t.TgZ(102, 'h4'),
                    t._uU(103, 'JSON:'),
                    t.qZA(),
                    t._UZ(104, 'td-highlight', 14),
                    t.TgZ(105, 'button', 15),
                    t.NdJ('click', function () {
                      return e.doDownloadJSON();
                    }),
                    t._uU(106, ' Download JSON '),
                    t.qZA(),
                    t.TgZ(107, 'h3', 17),
                    t._uU(108, 'downloadObjectsToCSV'),
                    t.qZA(),
                    t.TgZ(109, 'p'),
                    t._uU(
                      110,
                      ' Convert objects to CSV format and download to file with .csv extension appended to the provided base file name. Custom key separator and line separator can be specified. '
                    ),
                    t.qZA(),
                    t.TgZ(111, 'h4'),
                    t._uU(112, 'Objects:'),
                    t.qZA(),
                    t._UZ(113, 'td-highlight', 14),
                    t.TgZ(114, 'button', 15),
                    t.NdJ('click', function () {
                      return e.doDownloadObjectsToCSV();
                    }),
                    t._uU(115, ' Download To CSV '),
                    t.qZA(),
                    t.TgZ(116, 'h3', 17),
                    t._uU(117, 'downloadObjectsToJSON'),
                    t.qZA(),
                    t.TgZ(118, 'p'),
                    t._uU(
                      119,
                      ' Convert objects to JSON format and download to file with .json extension appended to the provided base file name. '
                    ),
                    t.qZA(),
                    t.TgZ(120, 'h4'),
                    t._uU(121, 'Objects:'),
                    t.qZA(),
                    t._UZ(122, 'td-highlight', 14),
                    t.TgZ(123, 'button', 15),
                    t.NdJ('click', function () {
                      return e.doDownloadObjectsToJSON();
                    }),
                    t._uU(124, ' Download To JSON '),
                    t.qZA(),
                    t.TgZ(125, 'h3', 17),
                    t._uU(126, 'download'),
                    t.qZA(),
                    t.TgZ(127, 'p'),
                    t._uU(
                      128,
                      ' Download string content to the specified file with desired mime type. '
                    ),
                    t.qZA(),
                    t.TgZ(129, 'form')(130, 'div', 18)(
                      131,
                      'mat-form-field',
                      9
                    )(132, 'input', 19),
                    t.NdJ('ngModelChange', function (d) {
                      return (e.fileName = d);
                    }),
                    t.qZA()(),
                    t.TgZ(133, 'mat-form-field', 9)(134, 'textarea', 20),
                    t.NdJ('ngModelChange', function (d) {
                      return (e.fileContent = d);
                    }),
                    t.qZA()(),
                    t.TgZ(135, 'mat-form-field', 9)(136, 'input', 21),
                    t.NdJ('ngModelChange', function (d) {
                      return (e.mimeType = d);
                    }),
                    t.qZA()()()(),
                    t.TgZ(137, 'button', 22),
                    t.NdJ('click', function () {
                      return e.doDownloadFile();
                    }),
                    t._uU(138, ' Download '),
                    t.qZA()(),
                    t.TgZ(139, 'mat-tab'),
                    t.YNc(140, lt, 1, 0, 'ng-template', 6),
                    t.TgZ(141, 'p'),
                    t._uU(142, 'HTML:'),
                    t.qZA(),
                    t.TgZ(143, 'td-highlight', 12),
                    t._uU(144),
                    t.qZA(),
                    t.TgZ(145, 'p'),
                    t._uU(146, 'Typescript:'),
                    t.qZA(),
                    t.TgZ(147, 'td-highlight', 13),
                    t._uU(148),
                    t.qZA()()()()(),
                    t.TgZ(149, 'mat-card', 3)(150, 'mat-card-header')(
                      151,
                      'mat-card-title'
                    ),
                    t._uU(152, 'File'),
                    t.qZA(),
                    t.TgZ(153, 'mat-card-subtitle', 4),
                    t._uU(154, 'File handling functions.'),
                    t.qZA()(),
                    t.TgZ(155, 'mat-card-content')(156, 'mat-tab-group', 5)(
                      157,
                      'mat-tab'
                    ),
                    t.YNc(158, st, 1, 0, 'ng-template', 6),
                    t.TgZ(159, 'h3', 7),
                    t._uU(160, 'readFile'),
                    t.qZA(),
                    t.TgZ(161, 'p'),
                    t._uU(
                      162,
                      ' Read file as UTF-8 text. Return string contents on read completion. '
                    ),
                    t.qZA(),
                    t.TgZ(163, 'button', 23),
                    t.NdJ('click', function () {
                      t.CHM(p);
                      const d = t.MAs(166);
                      return t.KtG(d.click());
                    }),
                    t._uU(164, ' Choose File '),
                    t.TgZ(165, 'input', 24, 25),
                    t.NdJ('change', function (d) {
                      return e.doReadFile(d);
                    }),
                    t.qZA()(),
                    t.TgZ(167, 'h4'),
                    t._uU(168, 'File Content:'),
                    t.qZA(),
                    t._UZ(169, 'td-highlight', 26),
                    t.qZA(),
                    t.TgZ(170, 'mat-tab'),
                    t.YNc(171, mt, 1, 0, 'ng-template', 6),
                    t.TgZ(172, 'p'),
                    t._uU(173, 'HTML'),
                    t.qZA(),
                    t.TgZ(174, 'td-highlight', 12),
                    t._uU(175),
                    t.qZA(),
                    t.TgZ(176, 'p'),
                    t._uU(177, 'Typescript'),
                    t.qZA(),
                    t.TgZ(178, 'td-highlight', 13),
                    t._uU(179),
                    t.qZA()()()()();
                }
                2 & n &&
                  (t.xp6(22),
                  t.Q6J('ngModel', e.copyText),
                  t.xp6(8),
                  t.hij(' ', e.clipboardCodeHtml, ' '),
                  t.xp6(4),
                  t.hij(' ', e.clipboardCodeTypescript, ' '),
                  t.xp6(17),
                  t.Q6J('content', e.csv),
                  t.xp6(5),
                  t.Q6J('content', e.jsonOutput),
                  t.xp6(7),
                  t.Q6J('content', e.objectsString),
                  t.xp6(5),
                  t.Q6J('content', e.csvOutput),
                  t.xp6(6),
                  t.hij(' ', e.convertCodeHtml, ' '),
                  t.xp6(4),
                  t.hij(' ', e.convertCodeTypescript, ' '),
                  t.xp6(17),
                  t.Q6J('content', e.csv),
                  t.xp6(9),
                  t.Q6J('content', e.json),
                  t.xp6(9),
                  t.Q6J('content', e.objectsString),
                  t.xp6(9),
                  t.Q6J('content', e.objectsString),
                  t.xp6(10),
                  t.Q6J('ngModel', e.fileName),
                  t.xp6(2),
                  t.Q6J('ngModel', e.fileContent),
                  t.xp6(2),
                  t.Q6J('ngModel', e.mimeType),
                  t.xp6(8),
                  t.hij(' ', e.downloadCodeHtml, ' '),
                  t.xp6(4),
                  t.hij(' ', e.downloadCodeTypescript, ' '),
                  t.xp6(21),
                  t.Q6J('content', e.readFileContent),
                  t.xp6(6),
                  t.hij(' ', e.fileCodeHtml, ' '),
                  t.xp6(4),
                  t.hij(' ', e.fileCodeTypescript, ' '));
              },
              dependencies: [
                c._Y,
                c.Fj,
                c.JJ,
                c.JL,
                c.On,
                c.F,
                s.a8,
                s.dn,
                s.dk,
                s.$j,
                s.n5,
                q.Nt,
                S.KE,
                U.uD,
                U.uX,
                U.SP,
                h.lW,
                Z.S,
              ],
              styles: [
                '.filecontentmaxheight[_ngcontent-%COMP%]{max-height:200px}mat-card[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}',
              ],
              data: { animation: [g.kh] },
            });
          }
          return o;
        })(),
        rt = (() => {
          class o {
            routeAnimation = !0;
            classAnimation = !0;
            generalCss =
              '\n    .radius-none // no border radius\n    .overflow-hidden // hide overflow\n    .overflow-auto // normal overflow\n    .block // display block\n    .inline-block // display inline block\n    .relative // relative positioning\n    .fixed // fixed positioning\n    .height-auto // 0 min height\n    .z-3 // z index 3\n    .z-2 // z index 2\n    .z-1 // z index 1\n  ';
            sizeCss =
              '\n    /* Sizing avail in 12 16 24 32 50 64 72 100 128 256 */\n    .size-256 // 256 height and width\n    .size-height-256 // 256 height and auto width\n    .size-width-256 // 256 width and auto height\n  ';
            textCss =
              '\n    .text-normal // normal font size\n    .text-center // text align center\n    .text-left // text align left\n    .text-right // text align right\n    .text-micro // font size 10px\n    .text-xs // font size 50%\n    .text-sm // font size 70%\n    .text-md // font size 80%\n    .text-lg // font size 110%\n    .text-xl // font size 120%\n    .text-xxl // font size 130%\n    .text-30 // font size 30px\n    .text-super // font size 60px\n    .text-wrap // normal white space\n    .text-break // word break\n    .text-upper // uppercase\n    .text-lower // lowercase\n    .text-caps // all caps\n    .text-truncate // single line of truncated text w/ ...\n    .text-nodecoration // no underline\n  ';
            padCss =
              '\n    .pad             // 16px\n    .pad-xxl         // 56px\n    .pad-xl          // 48px\n    .pad-lg          // 32px\n    .pad-md          // 24px\n    .pad-sm          // 8px\n    .pad-xs          // 4px\n    .pad-none        // 0px\n\n    .pad-top         // 16px\n    .pad-top-xxl     // 56px\n    .pad-top-xl      // 48px\n    .pad-top-lg      // 32px\n    .pad-top-md      // 24px\n    .pad-top-sm      // 8px\n    .pad-top-xs      // 4px\n    .pad-top-none    // 0px\n\n    .pad-right       // 16px\n    .pad-right-xxl   // 56px\n    .pad-right-xl    // 48px\n    .pad-right-lg    // 32px\n    .pad-right-md    // 24px\n    .pad-right-sm    // 8px\n    .pad-right-xs    // 4px\n    .pad-right-none  // 0px\n\n    .pad-bottom      // 16px\n    .pad-bottom-xxl  // 56px\n    .pad-bottom-xl   // 48px\n    .pad-bottom-lg   // 32px\n    .pad-bottom-md   // 24px\n    .pad-bottom-sm   // 8px\n    .pad-bottom-xs   // 4px\n    .pad-bottom-none // 0px\n\n    .pad-left        // 16px\n    .pad-left-xxl    // 56px\n    .pad-left-xl     // 48px\n    .pad-left-lg     // 32px\n    .pad-left-md     // 24px\n    .pad-left-sm     // 8px\n    .pad-left-xs     // 4px\n    .pad-left-none   // 0px\n  ';
            pushCss =
              '\n    .push             // 16px\n    .push-xxl         // 56px\n    .push-xl          // 48px\n    .push-lg          // 32px\n    .push-md          // 24px\n    .push-sm          // 8px\n    .push-xs          // 4px\n    .push-none        // 0px\n\n    .push-top         // 16px\n    .push-top-xxl     // 56px\n    .push-top-xl      // 48px\n    .push-top-lg      // 32px\n    .push-top-md      // 24px\n    .push-top-sm      // 8px\n    .push-top-xs      // 4px\n    .push-top-none    // 0px\n\n    .push-right       // 16px\n    .push-right-xxl   // 56px\n    .push-right-xl    // 48px\n    .push-right-lg    // 32px\n    .push-right-md    // 24px\n    .push-right-sm    // 8px\n    .push-right-xs    // 4px\n    .push-right-none  // 0px\n\n    .push-bottom      // 16px\n    .push-bottom-xxl  // 56px\n    .push-bottom-xl   // 48px\n    .push-bottom-lg   // 32px\n    .push-bottom-md   // 24px\n    .push-bottom-sm   // 8px\n    .push-bottom-xs   // 4px\n    .push-bottom-none // 0px\n\n    .push-left        // 16px\n    .push-left-xxl    // 56px\n    .push-left-xl     // 48px\n    .push-left-lg     // 32px\n    .push-left-md     // 24px\n    .push-left-sm     // 8px\n    .push-left-xs     // 4px\n    .push-left-none   // 0px  \n  ';
            pullCss =
              '\n    .pull             // 16px\n    .pull-xxl         // 56px\n    .pull-xl          // 48px\n    .pull-lg          // 32px\n    .pull-md          // 24px\n    .pull-sm          // 8px\n    .pull-xs          // 4px\n    .pull-none        // 0px\n\n    .pull-top         // 16px\n    .pull-top-xxl     // 56px\n    .pull-top-xl      // 48px\n    .pull-top-lg      // 32px\n    .pull-top-md      // 24px\n    .pull-top-sm      // 8px\n    .pull-top-xs      // 4px\n    .pull-top-none    // 0px\n\n    .pull-right       // 16px\n    .pull-right-xxl   // 56px\n    .pull-right-xl    // 48px\n    .pull-right-lg    // 32px\n    .pull-right-md    // 24px\n    .pull-right-sm    // 8px\n    .pull-right-xs    // 4px\n    .pull-right-none  // 0px\n\n    .pull-bottom      // 16px\n    .pull-bottom-xxl  // 56px\n    .pull-bottom-xl   // 48px\n    .pull-bottom-lg   // 32px\n    .pull-bottom-md   // 24px\n    .pull-bottom-sm   // 8px\n    .pull-bottom-xs   // 4px\n    .pull-bottom-none // 0px\n\n    .pull-left        // 16px\n    .pull-left-xxl    // 56px\n    .pull-left-xl     // 48px\n    .pull-left-lg     // 32px\n    .pull-left-md     // 24px\n    .pull-left-sm     // 8px\n    .pull-left-xs     // 4px\n    .pull-left-none   // 0px\n  ';
            static ɵfac = function (n) {
              return new (n || o)();
            };
            static ɵcmp = t.Xpm({
              type: o,
              selectors: [['utility-styles']],
              hostVars: 3,
              hostBindings: function (n, e) {
                2 & n &&
                  (t.d8E('@routeAnimation', e.routeAnimation),
                  t.ekj('td-route-animation', e.classAnimation));
              },
              decls: 39,
              vars: 6,
              consts: [
                [1, 'push-bottom-xxl'],
                [1, 'push-bottom-sm', 'mat-h1'],
                [1, 'tc-td-secondary', 'push-bottom-md'],
                [1, 'push-bottom-xl'],
                [1, 'push-bottom-sm', 'mat-title'],
                ['codeLang', 'css'],
                [1, 'push-bottom-xs', 'mat-title'],
                ['layout-gt-md', 'row'],
                ['flex', '', 1, 'push-right-sm'],
                [1, 'push-bottom-sm', 'push-top-smP'],
                ['flex', ''],
              ],
              template: function (n, e) {
                1 & n &&
                  (t.TgZ(0, 'section', 0)(1, 'h1', 1),
                  t._uU(2, 'CSS Utility Styles & Classes'),
                  t.qZA(),
                  t.TgZ(3, 'p', 2),
                  t._uU(
                    4,
                    " Covalent includes many utility styles to save you time. We've included general utilities, padding (pad), margin (push), negative margin (pull), sizing, and text classes. "
                  ),
                  t.qZA()(),
                  t.TgZ(5, 'section', 0)(6, 'section', 3)(7, 'h4', 4),
                  t._uU(8, 'General Utilities'),
                  t.qZA(),
                  t.TgZ(9, 'td-highlight', 5),
                  t._uU(10),
                  t.qZA()(),
                  t.TgZ(11, 'section', 3)(12, 'h4', 4),
                  t._uU(13, 'Sizing Utilities'),
                  t.qZA(),
                  t.TgZ(14, 'td-highlight', 5),
                  t._uU(15),
                  t.qZA()(),
                  t.TgZ(16, 'section', 3)(17, 'h4', 4),
                  t._uU(18, 'Text Utilities'),
                  t.qZA(),
                  t.TgZ(19, 'td-highlight', 5),
                  t._uU(20),
                  t.qZA()(),
                  t.TgZ(21, 'h4', 6),
                  t._uU(22, 'Layout Utilities'),
                  t.qZA(),
                  t.TgZ(23, 'div', 7)(24, 'div', 8)(25, 'h4', 9),
                  t._uU(26, 'Pad (Padding)'),
                  t.qZA(),
                  t.TgZ(27, 'td-highlight', 5),
                  t._uU(28),
                  t.qZA()(),
                  t.TgZ(29, 'div', 8)(30, 'h4', 9),
                  t._uU(31, 'Push (Margin)'),
                  t.qZA(),
                  t.TgZ(32, 'td-highlight', 5),
                  t._uU(33),
                  t.qZA()(),
                  t.TgZ(34, 'div', 10)(35, 'h4', 9),
                  t._uU(36, 'Pull (Negative Margin)'),
                  t.qZA(),
                  t.TgZ(37, 'td-highlight', 5),
                  t._uU(38),
                  t.qZA()()()()),
                  2 & n &&
                    (t.xp6(10),
                    t.hij(' ', e.generalCss, ' '),
                    t.xp6(5),
                    t.hij(' ', e.sizeCss, ' '),
                    t.xp6(5),
                    t.hij(' ', e.textCss, ' '),
                    t.xp6(8),
                    t.hij(' ', e.padCss, ' '),
                    t.xp6(5),
                    t.hij(' ', e.pushCss, ' '),
                    t.xp6(5),
                    t.hij(' ', e.pullCss, ' '));
              },
              dependencies: [Z.S],
              data: { animation: [g.kh] },
            });
          }
          return o;
        })();
      var ut = a(91957),
        dt = a(13655);
      function ct(o, l) {
        1 & o &&
          (t.TgZ(0, 'p', 18),
          t._uU(
            1,
            ' Press the button below to view this card in fullscreen mode. '
          ),
          t.qZA());
      }
      function gt(o, l) {
        1 & o &&
          (t.TgZ(0, 'p', 18),
          t._uU(
            1,
            ' Select the button below or press the esc key to exit fullscreen mode. '
          ),
          t.qZA());
      }
      function ht(o, l) {
        if (1 & o) {
          const i = t.EpF();
          t.TgZ(0, 'button', 19),
            t.NdJ('click', function () {
              t.CHM(i), t.oxw();
              const e = t.MAs(16);
              return t.KtG(e.toggleFullScreen());
            }),
            t._uU(1, ' enter fullscreen '),
            t.qZA();
        }
      }
      function Zt(o, l) {
        if (1 & o) {
          const i = t.EpF();
          t.TgZ(0, 'button', 19),
            t.NdJ('click', function () {
              t.CHM(i), t.oxw();
              const e = t.MAs(16);
              return t.KtG(e.toggleFullScreen());
            }),
            t._uU(1, ' exit fullscreen '),
            t.qZA();
        }
      }
      const ft = v.Bz.forChild([
        {
          path: 'utilities',
          children: [
            { path: '', component: T.P, data: { category: 'utilities' } },
            { path: 'animations', component: D },
            { path: 'pipes', component: G },
            { path: 'functions', component: pt },
            {
              path: 'directives',
              component: (() => {
                class o {
                  routeAnimation = !0;
                  classAnimation = !0;
                  trim = '';
                  val = '';
                  toggleDiv = !0;
                  fadeDiv = !0;
                  directiveTypescript =
                    "\n  import { CovalentCommonModule } from '@covalent/core/common';\n  @NgModule({\n    imports: [\n      CovalentCommonModule,\n      ...\n    ],\n    ...\n  })\n  export class MyModule {} \n  ";
                  fullscreenHtml =
                    '\n  <div tdFullScreen #myDirective="tdFullScreen"> \n    <button mat-button color="primary" (click)="myDirective.toggleFullScreen()">\n      Fullscreen\n    </button>\n  </div> \n  ';
                  autotrimHtml =
                    '\n  <mat-form-field> \n    <input matInput tdAutoTrim [(ngModel)]="trim" placeholder="This will be autotrimmed"/>\n  </mat-form-field> \n  ';
                  toggle() {
                    this.toggleDiv = !this.toggleDiv;
                  }
                  fade() {
                    this.fadeDiv = !this.fadeDiv;
                  }
                  static ɵfac = function (n) {
                    return new (n || o)();
                  };
                  static ɵcmp = t.Xpm({
                    type: o,
                    selectors: [['directives-demo']],
                    hostVars: 3,
                    hostBindings: function (n, e) {
                      2 & n &&
                        (t.d8E('@routeAnimation', e.routeAnimation),
                        t.ekj('td-route-animation', e.classAnimation));
                    },
                    decls: 83,
                    vars: 8,
                    consts: [
                      [1, 'push-bottom-xl'],
                      [1, 'push-bottom-sm', 'mat-h1'],
                      [1, 'tc-td-secondary', 'push-bottom-md'],
                      [1, 'push-bottom-xxl'],
                      [1, 'push-bottom-sm', 'mat-title'],
                      ['codeLang', 'typescript'],
                      [
                        'mat-raised-button',
                        '',
                        'color',
                        'primary',
                        'href',
                        'https://angular.io/docs/ts/latest/guide/attribute-directives.html',
                        'target',
                        '_blank',
                        1,
                        'text-upper',
                        'push-top-sm',
                      ],
                      [
                        'tdFullScreen',
                        '',
                        1,
                        'mat-elevation-z0',
                        'push-bottom-lg',
                        'push-none',
                        'text-break',
                      ],
                      ['tdFullScreen', 'tdFullScreen'],
                      [1, 'mat-body-2'],
                      ['codeLang', 'html'],
                      ['layout', 'column'],
                      ['flex', '', 'class', 'mat-line', 4, 'ngIf'],
                      [
                        'mat-raised-button',
                        '',
                        'color',
                        'primary',
                        3,
                        'click',
                        4,
                        'ngIf',
                      ],
                      [1, 'mat-elevation-z0', 'push-bottom-lg', 'push-none'],
                      ['layout', 'row'],
                      ['flex', ''],
                      [
                        'matInput',
                        '',
                        'tdAutoTrim',
                        '',
                        'placeholder',
                        'This will be autotrimmed',
                        3,
                        'ngModel',
                        'ngModelChange',
                      ],
                      ['flex', '', 1, 'mat-line'],
                      ['mat-raised-button', '', 'color', 'primary', 3, 'click'],
                    ],
                    template: function (n, e) {
                      if (
                        (1 & n &&
                          (t.TgZ(0, 'section', 0)(1, 'h1', 1),
                          t._uU(2, 'Directives'),
                          t.qZA(),
                          t.TgZ(3, 'p', 2),
                          t._uU(4, 'Core Covalent directives'),
                          t.qZA()(),
                          t.TgZ(5, 'section', 3)(6, 'h3', 4),
                          t._uU(7, 'Setup'),
                          t.qZA(),
                          t._UZ(8, 'mat-divider'),
                          t.TgZ(9, 'p'),
                          t._uU(
                            10,
                            'Import the [CovalentCommonModule] in your NgModule:'
                          ),
                          t.qZA(),
                          t.TgZ(11, 'td-highlight', 5),
                          t._uU(12),
                          t.qZA(),
                          t.TgZ(13, 'a', 6),
                          t._uU(14, ' Directives Docs '),
                          t.qZA()(),
                          t.TgZ(15, 'mat-card', 7, 8)(17, 'mat-card-header')(
                            18,
                            'mat-card-title'
                          ),
                          t._uU(19, 'Fullscreen directive'),
                          t.qZA()(),
                          t.TgZ(20, 'mat-card-content')(21, 'p', 9),
                          t._uU(22, ' Use '),
                          t.TgZ(23, 'code'),
                          t._uU(24, 'tdFullScreen'),
                          t.qZA(),
                          t._uU(
                            25,
                            ' directive on any element you want full screen. '
                          ),
                          t.qZA(),
                          t.TgZ(26, 'p'),
                          t._uU(27, ' Assign '),
                          t.TgZ(28, 'code'),
                          t._uU(29, 'tdFullScreen'),
                          t.qZA(),
                          t._uU(30, ' to a template reference variable '),
                          t.TgZ(31, 'code'),
                          t._uU(32, '#myFullScreenElement="tdFullScreen"'),
                          t.qZA(),
                          t._uU(33, ' . '),
                          t.qZA(),
                          t.TgZ(34, 'p'),
                          t._uU(
                            35,
                            ' Use the template reference variable to access properties and metheds of the directive: '
                          ),
                          t.qZA(),
                          t.TgZ(36, 'ul')(37, 'li')(38, 'code'),
                          t._uU(39, 'myFullScreenElement.fullScreenIsActive'),
                          t.qZA(),
                          t._uU(
                            40,
                            ' , Check if fullscreen is activated for this element '
                          ),
                          t.qZA(),
                          t.TgZ(41, 'li')(42, 'code'),
                          t._uU(43, 'myFullScreenElement.toggleFullScreen()'),
                          t.qZA(),
                          t._uU(44, ' , Toggle fullscreen for this element '),
                          t.qZA(),
                          t.TgZ(45, 'li')(46, 'code'),
                          t._uU(47, 'myFullScreenElement.enterFullScreen()'),
                          t.qZA(),
                          t._uU(48, ' , Active fullscreen for this element '),
                          t.qZA(),
                          t.TgZ(49, 'li')(50, 'code'),
                          t._uU(51, 'myFullScreenElement.exitFullScreen()'),
                          t.qZA(),
                          t._uU(52, ' , Exit fullscreen for this element '),
                          t.qZA()(),
                          t.TgZ(53, 'p'),
                          t._uU(54, 'Usage:'),
                          t.qZA(),
                          t.TgZ(55, 'td-highlight', 10),
                          t._uU(56),
                          t.qZA(),
                          t.TgZ(57, 'div', 11),
                          t.YNc(58, ct, 2, 0, 'p', 12)(59, gt, 2, 0, 'p', 12),
                          t.qZA()(),
                          t._UZ(60, 'mat-divider'),
                          t.TgZ(61, 'mat-card-actions'),
                          t.YNc(62, ht, 2, 0, 'button', 13)(
                            63,
                            Zt,
                            2,
                            0,
                            'button',
                            13
                          ),
                          t.qZA()(),
                          t.TgZ(64, 'mat-card', 14)(65, 'mat-card-header')(
                            66,
                            'mat-card-title'
                          ),
                          t._uU(67, 'Autotrim directive'),
                          t.qZA()(),
                          t.TgZ(68, 'mat-card-content')(69, 'p', 9),
                          t._uU(70, ' Use '),
                          t.TgZ(71, 'code'),
                          t._uU(72, 'tdAutoTrim'),
                          t.qZA(),
                          t._uU(
                            73,
                            ' on an input to automatically trim the characters. '
                          ),
                          t.qZA(),
                          t.TgZ(74, 'p'),
                          t._uU(
                            75,
                            'Try entering white spaces before or after a word this input:'
                          ),
                          t.qZA(),
                          t.TgZ(76, 'div', 15)(77, 'mat-form-field', 16)(
                            78,
                            'input',
                            17
                          ),
                          t.NdJ('ngModelChange', function (r) {
                            return (e.trim = r);
                          }),
                          t.qZA()()(),
                          t.TgZ(79, 'p'),
                          t._uU(80, 'Usage:'),
                          t.qZA(),
                          t.TgZ(81, 'td-highlight', 10),
                          t._uU(82),
                          t.qZA()()()),
                        2 & n)
                      ) {
                        const p = t.MAs(16);
                        t.xp6(12),
                          t.hij(' ', e.directiveTypescript, ' '),
                          t.xp6(44),
                          t.hij(' ', e.fullscreenHtml, ' '),
                          t.xp6(2),
                          t.Q6J('ngIf', !p.fullScreenIsActive),
                          t.xp6(1),
                          t.Q6J('ngIf', p.fullScreenIsActive),
                          t.xp6(3),
                          t.Q6J('ngIf', !p.fullScreenIsActive),
                          t.xp6(1),
                          t.Q6J('ngIf', p.fullScreenIsActive),
                          t.xp6(15),
                          t.Q6J('ngModel', e.trim),
                          t.xp6(4),
                          t.hij(' ', e.autotrimHtml, ' ');
                      }
                    },
                    dependencies: [
                      c.Fj,
                      c.JJ,
                      c.On,
                      b.O5,
                      s.a8,
                      s.hq,
                      s.dn,
                      s.dk,
                      s.n5,
                      f.d,
                      q.Nt,
                      S.KE,
                      h.zs,
                      h.lW,
                      Z.S,
                      ut.V,
                      dt.K,
                    ],
                    styles: [
                      '.mat-card[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12)}',
                    ],
                    data: { animation: [g.kh] },
                  });
                }
                return o;
              })(),
            },
            { path: 'styling', component: rt },
          ],
        },
      ]);
      var At = a(41257),
        bt = a(96942),
        Ut = a(39419);
      let xt = (() => {
        class o {
          static ɵfac = function (n) {
            return new (n || o)();
          };
          static ɵmod = t.oAB({ type: o });
          static ɵinj = t.cJS({
            imports: [
              ft,
              c.u5,
              b.ez,
              s.QW,
              f.t,
              q.c,
              U.Nh,
              A.Ps,
              S.lN,
              u.ie,
              h.ot,
              bt.B,
              m.IV,
              x.A,
              m.IV,
              Ut.A0,
              At.m,
            ],
          });
        }
        return o;
      })();
    },
    39419: (y, _, a) => {
      a.d(_, { A0: () => t });
      var x = a(96814),
        v = a(30617),
        g = (a(21266), a(19212));
      let t = (() => {
        class s {
          static ɵfac = function (u) {
            return new (u || s)();
          };
          static ɵmod = g.oAB({ type: s });
          static ɵinj = g.cJS({ imports: [x.ez, v.Ps] });
        }
        return s;
      })();
    },
  },
]);
