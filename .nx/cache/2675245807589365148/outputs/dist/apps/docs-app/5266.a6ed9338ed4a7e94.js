'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [5266],
  {
    45266: (ct, L, i) => {
      i.r(L), i.d(L, { LayoutsModule: () => mt });
      var s = i(96814),
        u = i(52787),
        t = i(19212),
        l = i(32296),
        g = i(30617),
        Z = i(96681),
        h = i(57896),
        w = i(20553);
      let M = (() => {
        class a {
          static ɵfac = function (n) {
            return new (n || a)();
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['app-layouts']],
            decls: 6,
            vars: 0,
            consts: [
              [
                'logo',
                'assets:teradata',
                'toolbarTitle',
                'Covalent',
                'navigationRoute',
                '/',
              ],
              [
                'mat-icon-button',
                '',
                'td-menu-button',
                '',
                'tdLayoutToggle',
                '',
              ],
              ['td-toolbar-content', '', 'flex', '', 'layout', 'row'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'td-layout-nav', 0)(1, 'button', 1)(2, 'mat-icon'),
                t._uU(3, 'menu'),
                t.qZA()(),
                t._UZ(4, 'td-toolbar', 2)(5, 'router-outlet'),
                t.qZA());
            },
            dependencies: [l.RK, g.Hw, Z.vR, h.M, u.lC, w.n],
          });
        }
        return a;
      })();
      var m = i(59038),
        _ = i(26385),
        c = i(95195),
        y = i(23890),
        U = i(182),
        d = i(93197),
        T = i(67479),
        b = i(78955);
      function F(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 4)(1, 'mat-icon'),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      function k(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 4)(1, 'mat-icon'),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      const p = () => ['/'];
      let D = (() => {
        class a {
          routes = [
            { icon: 'home', route: '.', title: 'Home' },
            { icon: 'library_books', route: '.', title: 'Documentation' },
            { icon: 'color_lens', route: '.', title: 'Style Guide' },
            { icon: 'view_quilt', route: '.', title: 'Layouts' },
            {
              icon: 'picture_in_picture',
              route: '.',
              title: 'Components & Addons',
            },
          ];
          usermenu = [
            { icon: 'swap_horiz', route: '.', title: 'Switch account' },
            { icon: 'tune', route: '.', title: 'Account settings' },
            { icon: 'exit_to_app', route: '.', title: 'Sign out' },
          ];
          navViewMinHtml =
            '\n    <td-layout-nav logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/">\n      Content goes here\n    </td-layout-nav>\n  ';
          navViewBasicHtml =
            '\n    <td-layout>\n      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">\n        <mat-nav-list>\n          <a mat-list-item><mat-icon>home</mat-icon>Home</a>\n        </mat-nav-list>\n        <div tdNavigationDrawerMenu>\n          <mat-nav-list>\n            <a mat-list-item><mat-icon>account_box</mat-icon>Profile</a>\n          </mat-nav-list>\n        </div>\n      </td-navigation-drawer>\n      <td-layout-nav logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/">\n        <button mat-icon-button td-menu-button tdLayoutToggle>\n          <mat-icon>menu</mat-icon>\n        </button>\n        Content goes here\n      </td-layout-nav>\n    </td-layout>\n  ';
          navViewFullHtml =
            '\n    <td-layout>\n      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">\n        <mat-nav-list>\n          <a *ngFor="let item of routes" mat-list-item><mat-icon>{ {item.icon} }</mat-icon>{ {item.title} }</a>\n        </mat-nav-list>\n        <div tdNavigationDrawerMenu>\n          <mat-nav-list>\n            <a *ngFor="let item of usermenu" mat-list-item><mat-icon>{ {item.icon}}</mat-icon>{ {item.title} }</a>\n          </mat-nav-list>\n        </div>\n      </td-navigation-drawer>\n      <td-layout-nav>\n      <div td-toolbar-content layout="row" layout-align="start center" flex>\n        <button mat-icon-button td-menu-button tdLayoutToggle><mat-icon>menu</mat-icon></button>\n        <mat-icon [routerLink]="[\'/\']" class="mat-icon-logo cursor-pointer" svgIcon="assets:teradata"></mat-icon>\n        <span [routerLink]="[\'/\']" class="cursor-pointer">Covalent</span>\n        <span flex></span>\n        <a mat-icon-button matTooltip="Docs" href="https://teradata.github.io/covalent/" target="_blank"><mat-icon>chrome_reader_mode</mat-icon></a>\n        <a mat-icon-button matTooltip="Github" href="https://github.com/teradata/covalent" target="_blank"><mat-icon svgIcon="assets:github"></mat-icon></a>\n      </div>\n      <div layout-gt-sm="row">\n        <div flex-gt-sm="60">\n          <mat-card>\n            <mat-card-title>Products Sales</mat-card-title>\n            <mat-card-subtitle>usage stats for our products</mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-content> card content </mat-card-content>\n          </mat-card>\n          <mat-card>\n            <mat-card-title>Customer Activity</mat-card-title>\n            <mat-card-subtitle>Recent activity from select members</mat-card-subtitle> <mat-divider></mat-divider>\n            <mat-card-content> card content </mat-card-content>\n          </mat-card>\n        </div>\n          <div flex-gt-sm="40">\n            <mat-card>\n              <mat-card-title>Alerts</mat-card-title> <mat-card-subtitle>Items requiring attention</mat-card-subtitle>\n              <mat-divider></mat-divider> <mat-card-content> card content </mat-card-content> <mat-divider></mat-divider>\n              <mat-card-actions>\n                <a mat-button color="accent" class="text-upper" [routerLink]="[\'/logs\']"> <span>View More</span> </a>\n              </mat-card-actions>\n            </mat-card>\n            <mat-card>\n              <mat-card-title>Favorites</mat-card-title>\n              <mat-card-subtitle>Your favorite products</mat-card-subtitle>\n              <mat-divider></mat-divider>\n              <mat-card-content> card content </mat-card-content>\n              <mat-card-actions>\n                <a mat-button color="accent" class="text-upper" [routerLink]="[\'/product\']"> <span>View More</span> </a>\n              </mat-card-actions>\n            </mat-card>\n          </div>\n        </div>\n        <td-layout-footer>\n          <div layout="row" layout-align="start center">\n            <span class="mat-caption">Copyright &copy; 2017 Teradata. All rights reserved</span>\n          </div>\n        </td-layout-footer>\n      </td-layout-nav>\n    </td-layout>\n  ';
          navViewFullTypescript =
            "\n    import { Component, ChangeDetectionStrategy } from '@angular/core';\n    @Component({\n      changeDetection: ChangeDetectionStrategy.OnPush,\n      selector: 'layouts-nav-view',\n      styleUrls: ['./nav-view.component.scss'],\n      templateUrl: './nav-view.component.html',\n    })\n    export class NavViewComponent {\n      routes: object[] = [\n        { icon: 'home', route: '.', title: 'Home', },\n        { icon: 'library_books', route: '.', title: 'Documentation', },\n        { icon: 'color_lens', route: '.', title: 'Style Guide', },\n        { icon: 'view_quilt', route: '.', title: 'Layouts', },\n        { icon: 'picture_in_picture', route: '.', title: 'Components & Addons', },\n      ];\n      usermenu: object[] = [\n        { icon: 'swap_horiz', route: '.', title: 'Switch account', },\n        { icon: 'tune', route: '.', title: 'Account settings', },\n        { icon: 'exit_to_app', route: '.', title: 'Sign out', },\n      ];\n    }\n  ";
          static ɵfac = function (n) {
            return new (n || a)();
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['layouts-nav-view']],
            decls: 139,
            vars: 24,
            consts: [
              [1, 'relative'],
              [
                'logo',
                'assets:teradata',
                'toolbarTitle',
                'Covalent',
                'navigationRoute',
                '/',
              ],
              ['codeLang', 'html'],
              [
                'flex',
                '',
                'sidenavTitle',
                'Covalent',
                'logo',
                'teradata-dark',
                'name',
                'Firstname Lastname',
                'email',
                'firstname.lastname@company.com',
              ],
              ['mat-list-item', ''],
              ['matListItemIcon', ''],
              ['tdNavigationDrawerMenu', ''],
              [
                'mat-icon-button',
                '',
                'td-menu-button',
                '',
                'tdLayoutToggle',
                '',
              ],
              ['mat-list-item', '', 4, 'ngFor', 'ngForOf'],
              [
                'td-toolbar-content',
                '',
                'layout',
                'row',
                'layout-align',
                'start center',
                'flex',
                '',
              ],
              [
                'svgIcon',
                'assets:teradata',
                1,
                'mat-icon-logo',
                'cursor-pointer',
                3,
                'routerLink',
              ],
              [1, 'cursor-pointer', 3, 'routerLink'],
              ['flex', ''],
              [
                'mat-icon-button',
                '',
                'matTooltip',
                'Docs',
                'href',
                'https://teradata.github.io/covalent/',
                'target',
                '_blank',
              ],
              [
                'mat-icon-button',
                '',
                'matTooltip',
                'Github',
                'href',
                'https://github.com/teradata/covalent',
                'target',
                '_blank',
              ],
              ['svgIcon', 'assets:github'],
              ['layout-gt-sm', 'row'],
              ['flex-gt-sm', '60'],
              [
                'mat-button',
                '',
                'color',
                'accent',
                1,
                'text-upper',
                3,
                'routerLink',
              ],
              ['flex-gt-sm', '40'],
              ['layout', 'row', 'layout-align', 'start center'],
              [1, 'mat-caption'],
              [1, 'mat-title'],
              ['codeLang', 'typescript'],
              ['resourceUrl', 'platform/core/layout/layout-nav/README.md'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'mat-card')(1, 'mat-card-title'),
                t._uU(2, 'Minimum Demo'),
                t.qZA(),
                t.TgZ(3, 'mat-card-subtitle'),
                t._uU(4, 'Minimum code for this layout with no wrapper'),
                t.qZA(),
                t._UZ(5, 'mat-divider'),
                t.TgZ(6, 'div', 0)(7, 'td-layout')(8, 'td-layout-nav', 1),
                t._uU(9, ' Content goes here '),
                t.qZA()()(),
                t._UZ(10, 'mat-divider'),
                t.TgZ(11, 'mat-card-content')(12, 'td-highlight', 2),
                t._uU(13),
                t.qZA()()(),
                t.TgZ(14, 'mat-card')(15, 'mat-card-title'),
                t._uU(16, 'Basic Demo'),
                t.qZA(),
                t.TgZ(17, 'mat-card-subtitle'),
                t._uU(18, 'Basic layout wrapper & nav drawer'),
                t.qZA(),
                t._UZ(19, 'mat-divider'),
                t.TgZ(20, 'div', 0)(21, 'td-layout')(
                  22,
                  'td-navigation-drawer',
                  3
                )(23, 'mat-nav-list')(24, 'a', 4)(25, 'mat-icon', 5),
                t._uU(26, 'home'),
                t.qZA(),
                t._uU(27, ' Home '),
                t.qZA()(),
                t.TgZ(28, 'div', 6)(29, 'mat-nav-list')(30, 'a', 4)(
                  31,
                  'mat-icon',
                  5
                ),
                t._uU(32, 'account_box'),
                t.qZA(),
                t._uU(33, ' Profile '),
                t.qZA()()()(),
                t.TgZ(34, 'td-layout-nav', 1)(35, 'button', 7)(36, 'mat-icon'),
                t._uU(37, 'menu'),
                t.qZA()(),
                t._uU(38, ' Content goes here '),
                t.qZA()()(),
                t._UZ(39, 'mat-divider'),
                t.TgZ(40, 'mat-card-content')(41, 'td-highlight', 2),
                t._uU(42),
                t.qZA()()(),
                t.TgZ(43, 'mat-card')(44, 'mat-card-title'),
                t._uU(45, 'Full Demo'),
                t.qZA(),
                t.TgZ(46, 'mat-card-subtitle'),
                t._uU(47, 'Full working code with all options and templates'),
                t.qZA(),
                t._UZ(48, 'mat-divider'),
                t.TgZ(49, 'div', 0)(50, 'td-layout')(
                  51,
                  'td-navigation-drawer',
                  3
                )(52, 'mat-nav-list'),
                t.YNc(53, F, 4, 2, 'a', 8),
                t.qZA(),
                t.TgZ(54, 'div', 6)(55, 'mat-nav-list'),
                t.YNc(56, k, 4, 2, 'a', 8),
                t.qZA()()(),
                t.TgZ(57, 'td-layout-nav')(58, 'div', 9)(59, 'button', 7)(
                  60,
                  'mat-icon'
                ),
                t._uU(61, 'menu'),
                t.qZA()(),
                t._UZ(62, 'mat-icon', 10),
                t.TgZ(63, 'span', 11),
                t._uU(64, 'Covalent'),
                t.qZA(),
                t._UZ(65, 'span', 12),
                t.TgZ(66, 'a', 13)(67, 'mat-icon'),
                t._uU(68, 'chrome_reader_mode'),
                t.qZA()(),
                t.TgZ(69, 'a', 14),
                t._UZ(70, 'mat-icon', 15),
                t.qZA()(),
                t.TgZ(71, 'div', 16)(72, 'div', 17)(73, 'mat-card')(
                  74,
                  'mat-card-title'
                ),
                t._uU(75, 'Products Sales'),
                t.qZA(),
                t.TgZ(76, 'mat-card-subtitle'),
                t._uU(77, 'usage stats for our products'),
                t.qZA(),
                t._UZ(78, 'mat-divider'),
                t.TgZ(79, 'mat-card-content'),
                t._uU(80, 'card content'),
                t.qZA(),
                t._UZ(81, 'mat-divider'),
                t.TgZ(82, 'mat-card-actions')(83, 'a', 18)(84, 'span'),
                t._uU(85, 'View More'),
                t.qZA()()()(),
                t.TgZ(86, 'mat-card')(87, 'mat-card-title'),
                t._uU(88, 'Customer Activity'),
                t.qZA(),
                t.TgZ(89, 'mat-card-subtitle'),
                t._uU(90, 'Recent activity from select members'),
                t.qZA(),
                t._UZ(91, 'mat-divider'),
                t.TgZ(92, 'mat-card-content'),
                t._uU(93, 'card content'),
                t.qZA(),
                t._UZ(94, 'mat-divider'),
                t.TgZ(95, 'mat-card-actions')(96, 'a', 18)(97, 'span'),
                t._uU(98, 'View More'),
                t.qZA()()()()(),
                t.TgZ(99, 'div', 19)(100, 'mat-card')(101, 'mat-card-title'),
                t._uU(102, 'Alerts'),
                t.qZA(),
                t.TgZ(103, 'mat-card-subtitle'),
                t._uU(104, 'Items requiring attention'),
                t.qZA(),
                t._UZ(105, 'mat-divider'),
                t.TgZ(106, 'mat-card-content'),
                t._uU(107, 'card content'),
                t.qZA(),
                t._UZ(108, 'mat-divider'),
                t.TgZ(109, 'mat-card-actions')(110, 'a', 18)(111, 'span'),
                t._uU(112, 'View More'),
                t.qZA()()()(),
                t.TgZ(113, 'mat-card')(114, 'mat-card-title'),
                t._uU(115, 'Favorites'),
                t.qZA(),
                t.TgZ(116, 'mat-card-subtitle'),
                t._uU(117, 'Your favorite products'),
                t.qZA(),
                t._UZ(118, 'mat-divider'),
                t.TgZ(119, 'mat-card-content'),
                t._uU(120, 'card content'),
                t.qZA(),
                t._UZ(121, 'mat-divider'),
                t.TgZ(122, 'mat-card-actions')(123, 'a', 18)(124, 'span'),
                t._uU(125, 'View More'),
                t.qZA()()()()()(),
                t.TgZ(126, 'td-layout-footer')(127, 'div', 20)(128, 'span', 21),
                t._uU(129, 'Copyright \xa9 2017 Teradata. All rights reserved'),
                t.qZA()()()()()(),
                t._UZ(130, 'mat-divider'),
                t.TgZ(131, 'mat-card-content')(132, 'td-highlight', 2),
                t._uU(133),
                t.qZA(),
                t.TgZ(134, 'h3', 22),
                t._uU(135, 'TypeScript:'),
                t.qZA(),
                t.TgZ(136, 'td-highlight', 23),
                t._uU(137),
                t.qZA()()(),
                t._UZ(138, 'td-readme-loader', 24)),
                2 & n &&
                  (t.xp6(6),
                  t.Udp('height', '200px'),
                  t.xp6(7),
                  t.hij(' ', o.navViewMinHtml, ' '),
                  t.xp6(7),
                  t.Udp('height', '400px'),
                  t.xp6(22),
                  t.hij(' ', o.navViewBasicHtml, ' '),
                  t.xp6(7),
                  t.Udp('height', '400px'),
                  t.xp6(4),
                  t.Q6J('ngForOf', o.routes),
                  t.xp6(3),
                  t.Q6J('ngForOf', o.usermenu),
                  t.xp6(6),
                  t.Q6J('routerLink', t.DdM(18, p)),
                  t.xp6(1),
                  t.Q6J('routerLink', t.DdM(19, p)),
                  t.xp6(20),
                  t.Q6J('routerLink', t.DdM(20, p)),
                  t.xp6(13),
                  t.Q6J('routerLink', t.DdM(21, p)),
                  t.xp6(14),
                  t.Q6J('routerLink', t.DdM(22, p)),
                  t.xp6(13),
                  t.Q6J('routerLink', t.DdM(23, p)),
                  t.xp6(10),
                  t.hij(' ', o.navViewFullHtml, ' '),
                  t.xp6(4),
                  t.hij(' ', o.navViewFullTypescript, ' '));
            },
            dependencies: [
              s.sg,
              l.zs,
              l.o6,
              l.RK,
              m.Hk,
              m.Tg,
              m.Yt,
              _.d,
              g.Hw,
              c.a8,
              c.hq,
              c.dn,
              c.$j,
              c.n5,
              y.M,
              Z.vR,
              h.M,
              U.A,
              d.Xg,
              d.m7,
              T.S,
              b.I,
              u.rH,
            ],
            styles: [
              '[_nghost-%COMP%]     .mat-drawer-container[fullscreen]{position:static;width:100%;min-height:200px}[_nghost-%COMP%]     .mat-drawer-container[fullscreen] .td-layout-sidenav{min-height:200px}',
            ],
            changeDetection: 0,
          });
        }
        return a;
      })();
      var O = i(29114),
        q = i(92796);
      function I(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 5)(1, 'mat-icon'),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      function S(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 5)(1, 'mat-icon'),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      function H(a, r) {
        1 & a && t._UZ(0, 'mat-divider', 34), 2 & a && t.Q6J('inset', !0);
      }
      function J(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 5)(1, 'mat-icon', 30),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'h3', 31),
            t._uU(4),
            t.qZA(),
            t.TgZ(5, 'p', 32),
            t._uU(6),
            t.qZA()(),
            t.YNc(7, H, 1, 1, 'mat-divider', 33)),
          2 & a)
        ) {
          const e = r.$implicit,
            n = r.last;
          t.xp6(2),
            t.Oqu(e.icon),
            t.xp6(2),
            t.Oqu(e.title),
            t.xp6(2),
            t.Oqu(e.description),
            t.xp6(1),
            t.Q6J('ngIf', !n);
        }
      }
      const A = () => ['/'];
      let N = (() => {
        class a {
          routes = [
            { icon: 'home', route: '.', title: 'Home' },
            { icon: 'library_books', route: '.', title: 'Documentation' },
            { icon: 'color_lens', route: '.', title: 'Style Guide' },
            { icon: 'view_quilt', route: '.', title: 'Layouts' },
            {
              icon: 'picture_in_picture',
              route: '.',
              title: 'Components & Addons',
            },
          ];
          usermenu = [
            { icon: 'swap_horiz', route: '.', title: 'Switch account' },
            { icon: 'tune', route: '.', title: 'Account settings' },
            { icon: 'exit_to_app', route: '.', title: 'Sign out' },
          ];
          navmenu = [
            {
              icon: 'looks_one',
              route: '.',
              title: 'First item',
              description: 'Item description',
            },
            {
              icon: 'looks_two',
              route: '.',
              title: 'Second item',
              description: 'Item description',
            },
            {
              icon: 'looks_3',
              route: '.',
              title: 'Third item',
              description: 'Item description',
            },
            {
              icon: 'looks_4',
              route: '.',
              title: 'Fourth item',
              description: 'Item description',
            },
            {
              icon: 'looks_5',
              route: '.',
              title: 'Fifth item',
              description: 'Item description',
            },
          ];
          navListMinHtml =
            '\n    <td-layout-nav-list logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/" opened="true" mode="side">\n      <div td-sidenav-content>\n        Sidenav content here\n      </div>\n      Content goes here\n    </td-layout-nav-list>\n  ';
          navListBasicHtml =
            '\n    <td-layout>\n      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">\n        <mat-nav-list>\n          <a mat-list-item><mat-icon>home</mat-icon>Home</a>\n        </mat-nav-list>\n        <div tdNavigationDrawerMenu>\n          <mat-nav-list>\n            <a mat-list-item><mat-icon>account_box</mat-icon>Profile</a>\n          </mat-nav-list>\n        </div>\n      </td-navigation-drawer>\n      <td-layout-nav-list logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/" opened="true" mode="side">\n        <button mat-icon-button td-menu-button tdLayoutToggle>\n          <mat-icon>menu</mat-icon>\n        </button>\n        <div td-sidenav-content>\n          Sidenav content here\n        </div>\n        <div td-toolbar-content>\n          <button mat-button tdLayoutNavListToggle> Toggle </button>\n        </div>\n        Content goes here\n      </td-layout-nav-list>\n    </td-layout>\n  ';
          navListFullHtml =
            '\n    <td-layout> \n      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">\n        <mat-nav-list>\n          <a *ngFor="let item of routes" mat-list-item><mat-icon>{ {item.icon} }</mat-icon>{ {item.title} }</a>\n        </mat-nav-list>\n        <div tdNavigationDrawerMenu>\n          <mat-nav-list>\n            <a *ngFor="let item of usermenu" mat-list-item><mat-icon>{{ item.icon }}</mat-icon>{{ item.title }}</a>\n          </mat-nav-list>\n        </div>\n      </td-navigation-drawer>\n      <td-layout-nav-list #navList >\n        <div td-sidenav-toolbar-content layout="row" layout-align="start center">\n          <button mat-icon-button tdLayoutToggle>\n            <mat-icon>menu</mat-icon>\n          </button> \n          <mat-icon [routerLink]="[\'/\']" class="mat-icon-logo cursor-pointer" svgIcon="assets:teradata"></mat-icon>\n          <span [routerLink]="[\'/\']" class="cursor-pointer">Covalent</span>\n        </div>\n        <div td-toolbar-content layout="row" layout-align="start center" flex>\n          <button mat-icon-button tdLayoutNavListOpen [hideWhenOpened]="true">\n            <mat-icon>arrow_back</mat-icon>\n          </button>\n          <span>Page Title</span>\n          <span flex></span>\n          <a mat-icon-button matTooltip="Docs" href="https://teradata.github.io/covalent/" target="_blank"><mat-icon>chrome_reader_mode</mat-icon></a>\n          <a mat-icon-button matTooltip="Github" href="https://github.com/teradata/covalent" target="_blank"><mat-icon svgIcon="assets:github"></mat-icon></a>\n        </div> \n        <mat-nav-list td-sidenav-content [tdLayoutNavListClose]="">\n          <ng-template let-item let-last="last" ngFor [ngForOf]="navmenu"> \n            <a mat-list-item>\n              <mat-icon matListItemAvatar>{{ item.icon }}</mat-icon>\n              <h3 matListItemTitle> { {item.title} } </h3> \n              <p matListItemLine>{{ item.description }}</p>\n            </a> \n            <mat-divider [inset]="true" *ngIf="!last"></mat-divider>\n          </ng-template>\n        </mat-nav-list>\n        <div>\n          <mat-card>\n            <mat-card-title>Main Content</mat-card-title>\n            <mat-card-subtitle>content area</mat-card-subtitle>\n            <mat-divider></mat-divider>\n            <mat-card-content> card content </mat-card-content>\n            <mat-divider></mat-divider>\n            <mat-card-actions>\n              <a mat-button color="accent" class="text-upper" [routerLink]="[\'/\']">\n                <span>View More</span>\n              </a> \n            </mat-card-actions>\n          </mat-card>\n        </div>\n        <td-layout-footer-inner>Optional inner footer </td-layout-footer-inner>\n        <td-layout-footer>\n          <div layout="row" layout-align="start center">\n            <span class="mat-caption">Copyright &copy; 2017 Teradata. All rights reserved</span>\n          </div>\n        </td-layout-footer>\n      </td-layout-nav-list>\n    </td-layout>\n  ';
          navListFullTypescript =
            "\n    import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';\n    @Component({\n      changeDetection: ChangeDetectionStrategy.OnPush,\n      selector: 'layouts-nav-list',\n      styleUrls: ['./nav-list.component.scss'],\n      templateUrl: './nav-list.component.html',\n    })\n    export class NavListComponent {\n      routes: object[] = [\n        { icon: 'home', route: '.', title: 'Home', },\n        { icon: 'library_books', route: '.', title: 'Documentation', },\n        { icon: 'color_lens', route: '.', title: 'Style Guide', },\n        { icon: 'view_quilt', route: '.', title: 'Layouts', },\n        { icon: 'picture_in_picture', route: '.', title: 'Components & Addons', },\n      ];\n      usermenu: object[] = [\n        { icon: 'swap_horiz', route: '.', title: 'Switch account', },\n        { icon: 'tune', route: '.', title: 'Account settings', },\n        { icon: 'exit_to_app', route: '.', title: 'Sign out', },\n      ];\n      navmenu: object[] = [\n        { icon: 'looks_one', route: '.', title: 'First item', description: 'Item description', },\n        { icon: 'looks_two', route: '.', title: 'Second item', description: 'Item description', },\n        { icon: 'looks_3', route: '.', title: 'Third item', description: 'Item description', },\n        { icon: 'looks_4', route: '.', title: 'Fourth item', description: 'Item description', },\n        { icon: 'looks_5', route: '.', title: 'Fifth item', description: 'Item description', },\n      ];\n    }\n  ";
          static ɵfac = function (n) {
            return new (n || a)();
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['layouts-nav-list']],
            decls: 115,
            vars: 22,
            consts: [
              [1, 'relative'],
              [
                'logo',
                'assets:teradata',
                'toolbarTitle',
                'Covalent',
                'navigationRoute',
                '/',
                'mode',
                'side',
                3,
                'opened',
              ],
              ['td-sidenav-content', ''],
              ['codeLang', 'html'],
              [
                'flex',
                '',
                'sidenavTitle',
                'Covalent',
                'logo',
                'teradata-dark',
                'name',
                'Firstname Lastname',
                'email',
                'firstname.lastname@company.com',
              ],
              ['mat-list-item', ''],
              ['matListItemIcon', ''],
              ['tdNavigationDrawerMenu', ''],
              [
                'mat-icon-button',
                '',
                'td-menu-button',
                '',
                'tdLayoutToggle',
                '',
              ],
              ['td-toolbar-content', ''],
              ['mat-button', '', 'tdLayoutNavListToggle', ''],
              ['mat-list-item', '', 4, 'ngFor', 'ngForOf'],
              ['navList', ''],
              [
                'td-sidenav-toolbar-content',
                '',
                'layout',
                'row',
                'layout-align',
                'start center',
              ],
              ['mat-icon-button', '', 'tdLayoutToggle', ''],
              [
                'svgIcon',
                'assets:teradata',
                1,
                'mat-icon-logo',
                'cursor-pointer',
                3,
                'routerLink',
              ],
              [1, 'cursor-pointer', 3, 'routerLink'],
              [
                'td-toolbar-content',
                '',
                'layout',
                'row',
                'layout-align',
                'start center',
                'flex',
                '',
              ],
              [
                'mat-icon-button',
                '',
                'tdLayoutNavListOpen',
                '',
                3,
                'hideWhenOpened',
              ],
              ['flex', ''],
              [
                'mat-icon-button',
                '',
                'matTooltip',
                'Docs',
                'href',
                'https://teradata.github.io/covalent/',
                'target',
                '_blank',
              ],
              [
                'mat-icon-button',
                '',
                'matTooltip',
                'Github',
                'href',
                'https://github.com/teradata/covalent',
                'target',
                '_blank',
              ],
              ['svgIcon', 'assets:github'],
              ['ngFor', '', 3, 'ngForOf'],
              [
                'mat-button',
                '',
                'color',
                'accent',
                1,
                'text-upper',
                3,
                'routerLink',
              ],
              ['layout', 'row', 'layout-align', 'start center'],
              [1, 'mat-caption'],
              [1, 'mat-title'],
              ['codeLang', 'typescript'],
              ['resourceUrl', 'platform/core/layout/layout-nav-list/README.md'],
              ['matListItemAvatar', ''],
              ['matListItemTitle', ''],
              ['matListItemLine', ''],
              [3, 'inset', 4, 'ngIf'],
              [3, 'inset'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'mat-card')(1, 'mat-card-title'),
                t._uU(2, 'Minimum Demo'),
                t.qZA(),
                t.TgZ(3, 'mat-card-subtitle'),
                t._uU(4, 'Minimum code for this layout with no wrapper'),
                t.qZA(),
                t._UZ(5, 'mat-divider'),
                t.TgZ(6, 'div', 0)(7, 'td-layout-nav-list', 1)(8, 'div', 2),
                t._uU(9, 'Sidenav content here'),
                t.qZA(),
                t._uU(10, ' Content goes here '),
                t.qZA()(),
                t._UZ(11, 'mat-divider'),
                t.TgZ(12, 'mat-card-content')(13, 'td-highlight', 3),
                t._uU(14),
                t.qZA()()(),
                t.TgZ(15, 'mat-card')(16, 'mat-card-title'),
                t._uU(17, 'Basic Demo'),
                t.qZA(),
                t.TgZ(18, 'mat-card-subtitle'),
                t._uU(19, 'Basic layout wrapper & nav drawer'),
                t.qZA(),
                t._UZ(20, 'mat-divider'),
                t.TgZ(21, 'div', 0)(22, 'td-layout')(
                  23,
                  'td-navigation-drawer',
                  4
                )(24, 'mat-nav-list')(25, 'a', 5)(26, 'mat-icon', 6),
                t._uU(27, 'home'),
                t.qZA(),
                t._uU(28, ' Home '),
                t.qZA()(),
                t.TgZ(29, 'div', 7)(30, 'mat-nav-list')(31, 'a', 5)(
                  32,
                  'mat-icon',
                  6
                ),
                t._uU(33, 'account_box'),
                t.qZA(),
                t._uU(34, ' Profile '),
                t.qZA()()()(),
                t.TgZ(35, 'td-layout-nav-list', 1)(36, 'button', 8)(
                  37,
                  'mat-icon'
                ),
                t._uU(38, 'menu'),
                t.qZA()(),
                t.TgZ(39, 'div', 2),
                t._uU(40, 'Sidenav content here'),
                t.qZA(),
                t.TgZ(41, 'div', 9)(42, 'button', 10),
                t._uU(43, 'Toggle'),
                t.qZA()(),
                t._uU(44, ' Content goes here '),
                t.qZA()()(),
                t._UZ(45, 'mat-divider'),
                t.TgZ(46, 'mat-card-content')(47, 'td-highlight', 3),
                t._uU(48),
                t.qZA()()(),
                t.TgZ(49, 'mat-card')(50, 'mat-card-title'),
                t._uU(51, 'Full Demo'),
                t.qZA(),
                t.TgZ(52, 'mat-card-subtitle'),
                t._uU(53, 'Full working code with all options and templates'),
                t.qZA(),
                t._UZ(54, 'mat-divider'),
                t.TgZ(55, 'div', 0)(56, 'td-layout')(
                  57,
                  'td-navigation-drawer',
                  4
                )(58, 'mat-nav-list'),
                t.YNc(59, I, 4, 2, 'a', 11),
                t.qZA(),
                t.TgZ(60, 'div', 7)(61, 'mat-nav-list'),
                t.YNc(62, S, 4, 2, 'a', 11),
                t.qZA()()(),
                t.TgZ(63, 'td-layout-nav-list', null, 12)(65, 'div', 13)(
                  66,
                  'button',
                  14
                )(67, 'mat-icon'),
                t._uU(68, 'menu'),
                t.qZA()(),
                t._UZ(69, 'mat-icon', 15),
                t.TgZ(70, 'span', 16),
                t._uU(71, 'Covalent'),
                t.qZA()(),
                t.TgZ(72, 'div', 17)(73, 'button', 18)(74, 'mat-icon'),
                t._uU(75, 'arrow_back'),
                t.qZA()(),
                t.TgZ(76, 'span'),
                t._uU(77, 'Page Title'),
                t.qZA(),
                t._UZ(78, 'span', 19),
                t.TgZ(79, 'a', 20)(80, 'mat-icon'),
                t._uU(81, 'chrome_reader_mode'),
                t.qZA()(),
                t.TgZ(82, 'a', 21),
                t._UZ(83, 'mat-icon', 22),
                t.qZA()(),
                t.TgZ(84, 'mat-nav-list', 2),
                t.YNc(85, J, 8, 4, 'ng-template', 23),
                t.qZA(),
                t.TgZ(86, 'div')(87, 'mat-card')(88, 'mat-card-title'),
                t._uU(89, 'Main Content'),
                t.qZA(),
                t.TgZ(90, 'mat-card-subtitle'),
                t._uU(91, 'content area'),
                t.qZA(),
                t._UZ(92, 'mat-divider'),
                t.TgZ(93, 'mat-card-content'),
                t._uU(94, 'card content'),
                t.qZA(),
                t._UZ(95, 'mat-divider'),
                t.TgZ(96, 'mat-card-actions')(97, 'a', 24)(98, 'span'),
                t._uU(99, 'View More'),
                t.qZA()()()()(),
                t.TgZ(100, 'td-layout-footer-inner'),
                t._uU(101, 'Optional inner footer'),
                t.qZA(),
                t.TgZ(102, 'td-layout-footer')(103, 'div', 25)(104, 'span', 26),
                t._uU(105, 'Copyright \xa9 2017 Teradata. All rights reserved'),
                t.qZA()()()()()(),
                t._UZ(106, 'mat-divider'),
                t.TgZ(107, 'mat-card-content')(108, 'td-highlight', 3),
                t._uU(109),
                t.qZA(),
                t.TgZ(110, 'h3', 27),
                t._uU(111, 'TypeScript:'),
                t.qZA(),
                t.TgZ(112, 'td-highlight', 28),
                t._uU(113),
                t.qZA()()(),
                t._UZ(114, 'td-readme-loader', 29)),
                2 & n &&
                  (t.xp6(6),
                  t.Udp('height', '400px'),
                  t.xp6(1),
                  t.Q6J('opened', !0),
                  t.xp6(7),
                  t.hij(' ', o.navListMinHtml, ' '),
                  t.xp6(7),
                  t.Udp('height', '400px'),
                  t.xp6(14),
                  t.Q6J('opened', !0),
                  t.xp6(13),
                  t.hij(' ', o.navListBasicHtml, ' '),
                  t.xp6(7),
                  t.Udp('height', '400px'),
                  t.xp6(4),
                  t.Q6J('ngForOf', o.routes),
                  t.xp6(3),
                  t.Q6J('ngForOf', o.usermenu),
                  t.xp6(7),
                  t.Q6J('routerLink', t.DdM(19, A)),
                  t.xp6(1),
                  t.Q6J('routerLink', t.DdM(20, A)),
                  t.xp6(3),
                  t.Q6J('hideWhenOpened', !0),
                  t.xp6(12),
                  t.Q6J('ngForOf', o.navmenu),
                  t.xp6(12),
                  t.Q6J('routerLink', t.DdM(21, A)),
                  t.xp6(12),
                  t.hij(' ', o.navListFullHtml, ' '),
                  t.xp6(4),
                  t.hij(' ', o.navListFullTypescript, ' '));
            },
            dependencies: [
              s.sg,
              s.O5,
              l.zs,
              l.lW,
              l.o6,
              l.RK,
              m.Hk,
              m.Tg,
              m.D1,
              m.Yt,
              _.d,
              m.WW,
              m.sL,
              g.Hw,
              c.a8,
              c.hq,
              c.dn,
              c.$j,
              c.n5,
              y.M,
              Z.vR,
              O.$,
              q.lz,
              q.iG,
              U.A,
              d.Xg,
              d.m7,
              T.S,
              b.I,
              u.rH,
            ],
            styles: [
              '[_nghost-%COMP%]     .mat-drawer-container[fullscreen]{position:static;width:100%;min-height:200px}[_nghost-%COMP%]     .mat-drawer-container[fullscreen] .td-layout-sidenav{min-height:200px}',
            ],
            changeDetection: 0,
          });
        }
        return a;
      })();
      var Q = i(79392),
        j = i(3767);
      function R(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 4)(1, 'mat-icon'),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      function V(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 4)(1, 'mat-icon'),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      function P(a, r) {
        1 & a && t._UZ(0, 'mat-divider', 29), 2 & a && t.Q6J('inset', !0);
      }
      function Y(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'mat-list-item')(1, 'mat-icon', 25),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'h3', 26),
            t._uU(4),
            t.qZA(),
            t.TgZ(5, 'p', 27),
            t._uU(6),
            t.qZA()(),
            t.YNc(7, P, 1, 1, 'mat-divider', 28)),
          2 & a)
        ) {
          const e = r.$implicit,
            n = r.last;
          t.xp6(2),
            t.Oqu(e.icon),
            t.xp6(2),
            t.Oqu(e.title),
            t.xp6(2),
            t.Oqu(e.description),
            t.xp6(1),
            t.Q6J('ngIf', !n);
        }
      }
      function $(a, r) {
        1 & a && t._UZ(0, 'mat-divider', 29), 2 & a && t.Q6J('inset', !0);
      }
      function B(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'mat-list-item')(1, 'mat-icon', 25),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'h3', 26),
            t._uU(4),
            t.ALo(5, 'timeAgo'),
            t.qZA(),
            t.TgZ(6, 'p', 27),
            t._uU(7),
            t.qZA()(),
            t.YNc(8, $, 1, 1, 'mat-divider', 28)),
          2 & a)
        ) {
          const e = r.$implicit,
            n = r.last;
          t.xp6(2),
            t.Oqu(e.icon),
            t.xp6(2),
            t.Oqu(t.lcZ(5, 4, e.date)),
            t.xp6(3),
            t.Oqu(e.description),
            t.xp6(1),
            t.Q6J('ngIf', !n);
        }
      }
      const x = () => ['/'];
      let G = (() => {
        class a {
          routes = [
            { icon: 'home', route: '.', title: 'Home' },
            { icon: 'library_books', route: '.', title: 'Documentation' },
            { icon: 'color_lens', route: '.', title: 'Style Guide' },
            { icon: 'view_quilt', route: '.', title: 'Layouts' },
            {
              icon: 'picture_in_picture',
              route: '.',
              title: 'Components & Addons',
            },
          ];
          usermenu = [
            { icon: 'swap_horiz', route: '.', title: 'Switch account' },
            { icon: 'tune', route: '.', title: 'Account settings' },
            { icon: 'exit_to_app', route: '.', title: 'Sign out' },
          ];
          cardlist = [
            {
              icon: 'account_box',
              route: '.',
              title: 'John Jameson',
              description: 'Owner',
            },
            {
              icon: 'description',
              route: '.',
              title: 'An item description',
              description: 'Description',
            },
            {
              icon: 'vpn_key',
              route: '.',
              title: '1141e8e8-8d24-4956-93c2',
              description: 'API Key',
            },
          ];
          carddates = [
            {
              icon: 'access_time',
              route: '.',
              date: '2017-07-07T00:25:49+00:00',
              description: 'Last Updated',
            },
            {
              icon: 'today',
              route: '.',
              date: '2017-07-04T00:25:49+00:00',
              description: 'Created',
            },
          ];
          tdLayoutMinHtml =
            '\n    <td-layout-card-over cardTitle="Covalent" cardSubtitle="Card Over Layout Demo"> \n      Content goes here\n    </td-layout-card-over>\n  ';
          tdLayoutDrawerHtml =
            '\n    <td-layout> \n      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com"> \n        <mat-nav-list>\n          <a mat-list-item><mat-icon>home</mat-icon>Home</a> \n        </mat-nav-list>\n        <div tdNavigationDrawerMenu> \n          <mat-nav-list> \n            <a mat-list-item><mat-icon>account_box</mat-icon>Profile</a>\n          </mat-nav-list>\n        </div>\n      </td-navigation-drawer>\n      <td-layout-nav logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/"> \n        <button mat-icon-button td-menu-button tdLayoutToggle> \n          <mat-icon>menu</mat-icon> \n        </button>\n        <td-layout-card-over cardTitle="Covalent" cardSubtitle="Card Over Layout Demo">\n          Content goes here\n        </td-layout-card-over>\n      </td-layout-nav>\n    </td-layout>\n  ';
          tdLayoutLinksHtml =
            '\n    <td-layout>\n      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">\n        <mat-nav-list> \n          <a *ngFor="let item of routes" mat-list-item><mat-icon>{ {item.icon} }</mat-icon>{ {item.title} }</a>\n        </mat-nav-list> \n        <div tdNavigationDrawerMenu>\n          <mat-nav-list> \n            <a *ngFor="let item of usermenu" mat-list-item><mat-icon>{ {item.icon} }</mat-icon>{ {item.title} }</a>\n          </mat-nav-list> \n        </div> \n      </td-navigation-drawer>\n      <td-layout-nav>\n        <div td-toolbar-content layout="row" layout-align="start center" flex> \n          <button mat-icon-button td-menu-button tdLayoutToggle>\n            <mat-icon>menu</mat-icon>\n          </button>\n          <mat-icon [routerLink]="[\'/\']" class="mat-icon-logo cursor-pointer" svgIcon="assets:teradata"></mat-icon>\n            <span [routerLink]="[\'/\']" class="cursor-pointer">Covalent</span>\n            <span flex></span>\n            <a mat-icon-button matTooltip="Docs" href="https://teradata.github.io/covalent/" target="_blank"><mat-icon>chrome_reader_mode</mat-icon></a>\n            <a mat-icon-button matTooltip="Github" href="https://github.com/teradata/covalent" target="_blank"><mat-icon svgIcon="assets:github"></mat-icon></a>\n        </div>\n        <td-layout-card-over cardWidth="75">\n          <mat-card-title>Card Over Layout</mat-card-title>\n          <mat-card-subtitle>A card over layout with all available options</mat-card-subtitle>\n          <mat-divider></mat-divider>\n          <mat-card-content>\n            <mat-list>\n              <h3 matSubheader>Metadata</h3>\n              <ng-template let-item let-last="last" ngFor [ngForOf]="cardlist">\n                <mat-list-item>\n                  <mat-icon matListItemAvatar>{ {item.icon} }</mat-icon>\n                  <h3 matListItemTitle> {{ item.title }} </h3>\n                  <p matListItemLine> {{ item.description }}</p>\n                </mat-list-item>\n                <mat-divider [inset]="true" *ngIf="!last"></mat-divider>\n                </ng-template>\n                <mat-divider></mat-divider>\n                <h3 matSubheader>Dates</h3>\n                <ng-template let-item let-last="last" ngFor [ngForOf]="carddates">\n                <mat-list-item>\n                  <mat-icon matListItemAvatar>{{ item.icon }}</mat-icon>\n                  <h3 matListItemTitle>{{ item.date | timeAgo }}</h3>\n                  <p matListItemLine>{{ item.description }}</p>\n                </mat-list-item>\n                <mat-divider [inset]="true" *ngIf="!last"></mat-divider>\n                </ng-template>\n            </mat-list>\n          </mat-card-content>\n          <mat-divider></mat-divider>\n          <mat-card-actions>\n            <button mat-button color="accent" class="text-upper">Edit</button>\n          </mat-card-actions>\n        </td-layout-card-over>\n      </td-layout-nav>\n    </td-layout>\n  ';
          tdLayoutTypescript =
            "\n    import { Component, ChangeDetectionStrategy } from '@angular/core';\n    @Component({\n      changeDetection: ChangeDetectionStrategy.OnPush,\n      selector: 'layouts-card-over',\n      styleUrls: ['./card-over.component.scss'],\n      templateUrl: './card-over.component.html',\n    })\n    export class CardOverComponent {\n      routes: object[] = [\n        { icon: 'home', route: '.', title: 'Home', },\n        { icon: 'library_books', route: '.', title: 'Documentation', },\n        { icon: 'color_lens', route: '.', title: 'Style Guide', },\n        { icon: 'view_quilt', route: '.', title: 'Layouts', },\n        { icon: 'picture_in_picture', route: '.', title: 'Components & Addons', },\n      ];\n      usermenu: object[] = [\n        { icon: 'swap_horiz', route: '.', title: 'Switch account', },\n        { icon: 'tune', route: '.', title: 'Account settings', },\n        { icon: 'exit_to_app', route: '.', title: 'Sign out', },\n      ];\n      cardlist: object[] = [\n        { icon: 'account_box', route: '.', title: 'John Jameson', description: 'Owner', },\n        { icon: 'description', route: '.', title: 'An item description', description: 'Description', },\n        { icon: 'vpn_key', route: '.', title: '1141e8e8-8d24-4956-93c2', description: 'API Key', },\n      ];\n      carddates: object[] = [\n        { icon: 'access_time', route: '.', date: '2017-07-07T00:25:49+00:00', description: 'Last Updated', },\n        { icon: 'today', route: '.', date: '2017-07-04T00:25:49+00:00', description: 'Created', },\n      ];\n    }\n  ";
          static ɵfac = function (n) {
            return new (n || a)();
          };
          static ɵcmp = t.Xpm({
            type: a,
            selectors: [['layouts-card-over']],
            decls: 99,
            vars: 19,
            consts: [
              [1, 'relative'],
              [
                'cardTitle',
                'Covalent',
                'cardSubtitle',
                'Card Over Layout Demo',
              ],
              ['codeLang', 'html'],
              [
                'flex',
                '',
                'sidenavTitle',
                'Covalent',
                'logo',
                'teradata-dark',
                'name',
                'Firstname Lastname',
                'email',
                'firstname.lastname@company.com',
              ],
              ['mat-list-item', ''],
              ['matListItemIcon', ''],
              ['tdNavigationDrawerMenu', ''],
              ['mat-list-item', '', 'matListItemIcon', ''],
              [
                'logo',
                'assets:teradata',
                'toolbarTitle',
                'Covalent',
                'navigationRoute',
                '/',
              ],
              [
                'mat-icon-button',
                '',
                'td-menu-button',
                '',
                'tdLayoutToggle',
                '',
              ],
              ['mat-list-item', '', 4, 'ngFor', 'ngForOf'],
              [
                'td-toolbar-content',
                '',
                'layout',
                'row',
                'layout-align',
                'start center',
                'flex',
                '',
              ],
              [
                'svgIcon',
                'assets:teradata',
                1,
                'mat-icon-logo',
                'cursor-pointer',
                3,
                'routerLink',
              ],
              [1, 'cursor-pointer', 3, 'routerLink'],
              ['flex', ''],
              [
                'mat-icon-button',
                '',
                'matTooltip',
                'Docs',
                'href',
                'https://teradata.github.io/covalent/',
                'target',
                '_blank',
              ],
              [
                'mat-icon-button',
                '',
                'matTooltip',
                'Github',
                'href',
                'https://github.com/teradata/covalent',
                'target',
                '_blank',
              ],
              ['svgIcon', 'assets:github'],
              [3, 'cardWidth'],
              ['matSubheader', ''],
              ['ngFor', '', 3, 'ngForOf'],
              ['mat-button', '', 'color', 'accent', 1, 'text-upper'],
              [1, 'mat-title'],
              ['codeLang', 'typescript'],
              [
                'td-after-card',
                '',
                'resourceUrl',
                'platform/core/layout/layout-card-over/README.md',
              ],
              ['matListItemAvatar', ''],
              ['matListItemTitle', ''],
              ['matListItemLine', ''],
              [3, 'inset', 4, 'ngIf'],
              [3, 'inset'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'mat-card')(1, 'mat-card-title'),
                t._uU(2, 'Minimum Demo'),
                t.qZA(),
                t.TgZ(3, 'mat-card-subtitle'),
                t._uU(4, 'Minimum code for this layout with no wrapper'),
                t.qZA(),
                t._UZ(5, 'mat-divider'),
                t.TgZ(6, 'div', 0)(7, 'td-layout-card-over', 1),
                t._uU(8, ' Content goes here '),
                t.qZA()(),
                t._UZ(9, 'mat-divider'),
                t.TgZ(10, 'mat-card-content')(11, 'td-highlight', 2),
                t._uU(12),
                t.qZA()()(),
                t.TgZ(13, 'mat-card')(14, 'mat-card-title'),
                t._uU(15, 'Basic Demo'),
                t.qZA(),
                t.TgZ(16, 'mat-card-subtitle'),
                t._uU(17, 'Basic layout wrapper & nav drawer'),
                t.qZA(),
                t._UZ(18, 'mat-divider'),
                t.TgZ(19, 'div', 0)(20, 'td-layout')(
                  21,
                  'td-navigation-drawer',
                  3
                )(22, 'mat-nav-list')(23, 'a', 4)(24, 'mat-icon', 5),
                t._uU(25, 'home'),
                t.qZA(),
                t._uU(26, ' Home '),
                t.qZA()(),
                t.TgZ(27, 'div', 6)(28, 'mat-nav-list')(29, 'a', 7)(
                  30,
                  'mat-icon'
                ),
                t._uU(31, 'account_box'),
                t.qZA(),
                t._uU(32, ' Profile '),
                t.qZA()()()(),
                t.TgZ(33, 'td-layout-nav', 8)(34, 'button', 9)(35, 'mat-icon'),
                t._uU(36, 'menu'),
                t.qZA()(),
                t.TgZ(37, 'td-layout-card-over', 1),
                t._uU(38, ' Content goes here '),
                t.qZA()()()(),
                t._UZ(39, 'mat-divider'),
                t.TgZ(40, 'mat-card-content')(41, 'td-highlight', 2),
                t._uU(42),
                t.qZA()()(),
                t.TgZ(43, 'mat-card')(44, 'mat-card-title'),
                t._uU(45, 'Full Demo'),
                t.qZA(),
                t.TgZ(46, 'mat-card-subtitle'),
                t._uU(47, 'Full working code with all options and templates'),
                t.qZA(),
                t._UZ(48, 'mat-divider'),
                t.TgZ(49, 'div', 0)(50, 'td-layout')(
                  51,
                  'td-navigation-drawer',
                  3
                )(52, 'mat-nav-list'),
                t.YNc(53, R, 4, 2, 'a', 10),
                t.qZA(),
                t.TgZ(54, 'div', 6)(55, 'mat-nav-list'),
                t.YNc(56, V, 4, 2, 'a', 10),
                t.qZA()()(),
                t.TgZ(57, 'td-layout-nav')(58, 'div', 11)(59, 'button', 9)(
                  60,
                  'mat-icon'
                ),
                t._uU(61, 'menu'),
                t.qZA()(),
                t._UZ(62, 'mat-icon', 12),
                t.TgZ(63, 'span', 13),
                t._uU(64, 'Covalent'),
                t.qZA(),
                t._UZ(65, 'span', 14),
                t.TgZ(66, 'a', 15)(67, 'mat-icon'),
                t._uU(68, 'chrome_reader_mode'),
                t.qZA()(),
                t.TgZ(69, 'a', 16),
                t._UZ(70, 'mat-icon', 17),
                t.qZA()(),
                t.TgZ(71, 'td-layout-card-over', 18)(72, 'mat-card-title'),
                t._uU(73, 'Card Over Layout'),
                t.qZA(),
                t.TgZ(74, 'mat-card-subtitle'),
                t._uU(75, 'A card over layout with all available options'),
                t.qZA(),
                t._UZ(76, 'mat-divider'),
                t.TgZ(77, 'mat-card-content')(78, 'mat-list')(79, 'h3', 19),
                t._uU(80, 'Metadata'),
                t.qZA(),
                t.YNc(81, Y, 8, 4, 'ng-template', 20),
                t._UZ(82, 'mat-divider'),
                t.TgZ(83, 'h3', 19),
                t._uU(84, 'Dates'),
                t.qZA(),
                t.YNc(85, B, 9, 6, 'ng-template', 20),
                t.qZA()(),
                t._UZ(86, 'mat-divider'),
                t.TgZ(87, 'mat-card-actions')(88, 'button', 21),
                t._uU(89, 'Edit'),
                t.qZA()()()()()(),
                t._UZ(90, 'mat-divider'),
                t.TgZ(91, 'mat-card-content')(92, 'td-highlight', 2),
                t._uU(93),
                t.qZA(),
                t.TgZ(94, 'h3', 22),
                t._uU(95, 'TypeScript:'),
                t.qZA(),
                t.TgZ(96, 'td-highlight', 23),
                t._uU(97),
                t.qZA()()(),
                t._UZ(98, 'td-readme-loader', 24)),
                2 & n &&
                  (t.xp6(6),
                  t.Udp('height', '150px'),
                  t.xp6(6),
                  t.hij(' ', o.tdLayoutMinHtml, ' '),
                  t.xp6(7),
                  t.Udp('height', '400px'),
                  t.xp6(23),
                  t.hij(' ', o.tdLayoutDrawerHtml, ' '),
                  t.xp6(7),
                  t.Udp('height', '400px'),
                  t.xp6(4),
                  t.Q6J('ngForOf', o.routes),
                  t.xp6(3),
                  t.Q6J('ngForOf', o.usermenu),
                  t.xp6(6),
                  t.Q6J('routerLink', t.DdM(17, x)),
                  t.xp6(1),
                  t.Q6J('routerLink', t.DdM(18, x)),
                  t.xp6(8),
                  t.Q6J('cardWidth', 75),
                  t.xp6(10),
                  t.Q6J('ngForOf', o.cardlist),
                  t.xp6(4),
                  t.Q6J('ngForOf', o.carddates),
                  t.xp6(8),
                  t.hij(' ', o.tdLayoutLinksHtml, ' '),
                  t.xp6(4),
                  t.hij(' ', o.tdLayoutTypescript, ' '));
            },
            dependencies: [
              s.sg,
              s.O5,
              l.lW,
              l.o6,
              l.RK,
              m.i$,
              m.Hk,
              m.Tg,
              m.D1,
              m.Yt,
              m.gs,
              _.d,
              m.WW,
              m.sL,
              g.Hw,
              c.a8,
              c.hq,
              c.dn,
              c.$j,
              c.n5,
              y.M,
              Z.vR,
              h.M,
              Q.g,
              d.Xg,
              d.m7,
              T.S,
              b.I,
              u.rH,
              j.d,
            ],
            styles: [
              '[_nghost-%COMP%]     .mat-drawer-container[fullscreen]{position:static;width:100%;min-height:200px}[_nghost-%COMP%]     .mat-drawer-container[fullscreen] .td-layout-sidenav{min-height:200px}',
            ],
            changeDetection: 0,
          });
        }
        return a;
      })();
      var C = i(81274),
        W = i(62684),
        f = i(76587);
      function z(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 5)(1, 'mat-icon'),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      function E(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 5)(1, 'mat-icon'),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      function X(a, r) {
        if (
          (1 & a &&
            (t.TgZ(0, 'a', 5)(1, 'mat-icon', 34),
            t._uU(2),
            t.qZA(),
            t._uU(3),
            t.qZA()),
          2 & a)
        ) {
          const e = r.$implicit;
          t.xp6(2), t.Oqu(e.icon), t.xp6(1), t.hij(' ', e.title, ' ');
        }
      }
      const v = () => ['/'],
        tt = u.Bz.forChild([
          {
            children: [
              { component: D, path: 'nav-view' },
              { component: N, path: 'nav-list' },
              { component: G, path: 'card-over' },
              {
                component: (() => {
                  class a {
                    routes = [
                      { icon: 'home', route: '.', title: 'Home' },
                      {
                        icon: 'library_books',
                        route: '.',
                        title: 'Documentation',
                      },
                      { icon: 'color_lens', route: '.', title: 'Style Guide' },
                      { icon: 'view_quilt', route: '.', title: 'Layouts' },
                      {
                        icon: 'picture_in_picture',
                        route: '.',
                        title: 'Components & Addons',
                      },
                    ];
                    usermenu = [
                      {
                        icon: 'swap_horiz',
                        route: '.',
                        title: 'Switch account',
                      },
                      { icon: 'tune', route: '.', title: 'Account settings' },
                      { icon: 'exit_to_app', route: '.', title: 'Sign out' },
                    ];
                    navmenu = [
                      {
                        icon: 'looks_one',
                        route: '.',
                        title: 'First item',
                        description: 'Item description',
                      },
                      {
                        icon: 'looks_two',
                        route: '.',
                        title: 'Second item',
                        description: 'Item description',
                      },
                      {
                        icon: 'looks_3',
                        route: '.',
                        title: 'Third item',
                        description: 'Item description',
                      },
                      {
                        icon: 'looks_4',
                        route: '.',
                        title: 'Fourth item',
                        description: 'Item description',
                      },
                      {
                        icon: 'looks_5',
                        route: '.',
                        title: 'Fifth item',
                        description: 'Item description',
                      },
                    ];
                    managedListMinHtml =
                      '\n    <td-layout-manage-list opened="true" mode="side">\n      <mat-toolbar td-sidenav-content></mat-toolbar>\n      <div td-sidenav-content> Sidenav content here </div> \n      <mat-toolbar></mat-toolbar>\n      Content goes here\n    </td-layout-manage-list>\n  ';
                    managedListBasicHtml =
                      '\n  <td-layout>\n    <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com"> \n    <mat-nav-list>\n      <a mat-list-item><mat-icon>home</mat-icon>Home</a>\n    </mat-nav-list>\n    <div tdNavigationDrawerMenu>\n      <mat-nav-list>\n        <a mat-list-item><mat-icon>account_box</mat-icon>Profile</a>\n      </mat-nav-list>\n    </div>\n    </td-navigation-drawer>\n    <td-layout-nav logo="assets:teradata" toolbarTitle="Covalent" navigationRoute="/">\n      <button mat-icon-button td-menu-button tdLayoutToggle>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <td-layout-manage-list opened="true" mode="side">\n        <mat-toolbar td-sidenav-content>Nav Title</mat-toolbar>\n        <div td-sidenav-content>\n          Sidenav content here\n        </div>\n        <mat-toolbar>\n          <button mat-button tdLayoutManageListToggle> Toggle </button> \n          Content Title\n        </mat-toolbar>\n        Content goes here\n      </td-layout-manage-list>\n    </td-layout-nav>\n  </td-layout>\n  ';
                    managedListFullHtml =
                      '\n    <td-layout>\n      <td-navigation-drawer flex sidenavTitle="Covalent" logo="teradata-dark" name="Firstname Lastname" email="firstname.lastname@company.com">\n        <mat-nav-list>\n          <a *ngFor="let item of routes" mat-list-item> <mat-icon>{{ item.icon }}</mat-icon>{{ item.title }}</a>\n        </mat-nav-list>\n        <div tdNavigationDrawerMenu>\n          <mat-nav-list>\n            <a *ngFor="let item of usermenu" mat-list-item><mat-icon>{{ item.icon }}</mat-icon>{{ item.title }}</a>\n          </mat-nav-list>\n        </div>\n      </td-navigation-drawer>\n      <td-layout-nav>\n        <div td-toolbar-content layout="row" layout-align="start center" flex>\n          <button mat-icon-button td-menu-button tdLayoutToggle>\n            <mat-icon>menu</mat-icon>\n          </button>\n          <mat-icon [routerLink]="[\'/\']" class="mat-icon-logo cursor-pointer" svgIcon="assets:teradata"></mat-icon>\n          <span [routerLink]="[\'/\']" class="cursor-pointer">Covalent</span>\n          <span flex></span>\n          <a mat-icon-button matTooltip="Docs" href="https://teradata.github.io/covalent/" target="_blank"><mat-icon>chrome_reader_mode</mat-icon></a>\n          <a mat-icon-button matTooltip="Github" href="https://github.com/teradata/covalent" target="_blank"><mat-icon svgIcon="assets:github"></mat-icon></a>\n        </div>\n        <td-layout-manage-list #manageList>\n          <mat-toolbar td-sidenav-content>\n            <span>Optional Title</span>\n          </mat-toolbar>\n          <mat-nav-list td-sidenav-content [tdLayoutManageListClose]="!media.query(\'gt-sm\')">\n            <ng-template let-item let-last="last" ngFor [ngForOf]="navmenu">\n              <a mat-list-item> <mat-icon matListIcon>{ {item.icon} }</mat-icon> { {item.title} } </a>\n            </ng-template>\n          </mat-nav-list>\n          <mat-toolbar>\n            <div layout="row" layout-align="start center" flex>\n              <button mat-icon-button tdLayoutManageListOpen [hideWhenOpened]="true">\n                <mat-icon>arrow_back</mat-icon>\n              </button>\n              <span>Content Title</span> <span flex></span>\n              <button mat-icon-button>\n                <mat-icon>settings</mat-icon>\n              </button>\n            </div>\n          </mat-toolbar>\n          <div layout-gt-sm="row">\n            <div flex-gt-sm="60">\n              <mat-card>\n                <mat-card-title>Products Sales</mat-card-title>\n                <mat-card-subtitle>usage stats for our products</mat-card-subtitle>\n                <mat-divider></mat-divider>\n                <mat-card-content> card content </mat-card-content>\n                <mat-divider></mat-divider>\n                <mat-card-actions>\n                <a mat-button color="accent" class="text-upper" [routerLink]="[\'/\']">\n                  <span>View More</span>\n                </a>\n                </mat-card-actions>\n              </mat-card>\n              <mat-card>\n                <mat-card-title>Customer Activity</mat-card-title>\n                <mat-card-subtitle>Recent activity from select members</mat-card-subtitle>\n                <mat-divider></mat-divider>\n                <mat-card-content> card content </mat-card-content>\n                <mat-divider></mat-divider>\n                <mat-card-actions>\n                  <a mat-button color="accent" class="text-upper" [routerLink]="[\'/\']">\n                    <span>View More</span>\n                  </a>\n                </mat-card-actions>\n              </mat-card>\n            </div>\n          <div flex-gt-sm="40">\n            <mat-card>\n              <mat-card-title>Alerts</mat-card-title>\n              <mat-card-subtitle>Items requiring attention</mat-card-subtitle>\n              <mat-divider></mat-divider>\n              <mat-card-content> card content </mat-card-content>\n              <mat-divider></mat-divider>\n              <mat-card-actions>\n                <a mat-button color="accent" class="text-upper"[routerLink]="[\'/\']"><span>View More</span> </a>\n              </mat-card-actions>\n            </mat-card>\n            <mat-card>\n              <mat-card-title>Favorites</mat-card-title>\n              <mat-card-subtitle>Your favorite products</mat-card-subtitle>\n              <mat-divider></mat-divider>\n              <mat-card-content> card content </mat-card-content>\n              <mat-divider></mat-divider>\n              <mat-card-actions>\n                <a mat-button color="accent" class="text-upper" [routerLink]="[\'/\']"> <span>View More</span></a>\n              </mat-card-actions>\n            </mat-card>\n          </div>\n        </div>\n        <td-layout-footer-inner> Optional inner footer </td-layout-footer-inner>\n      </td-layout-manage-list>\n        <td-layout-footer>\n          <div layout="row" layout-align="start center"> \n            <span class="mat-caption">Copyright &copy; 2017 Teradata. All rights reserved</span>\n          </div>\n        </td-layout-footer>\n      </td-layout-nav>\n    </td-layout>\n  ';
                    managedListFullTypescript =
                      "\n    import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';\n    @Component({\n      changeDetection: ChangeDetectionStrategy.OnPush,\n      selector: 'layouts-manage-list',\n      styleUrls: ['./manage-list.component.scss'],\n      templateUrl: './manage-list.component.html',\n    })\n    export class ManageListComponent {\n      routes: object[] = [\n        { icon: 'home', route: '.', title: 'Home', },\n        { icon: 'library_books', route: '.', title: 'Documentation', },\n        { icon: 'color_lens', route: '.', title: 'Style Guide', },\n        { icon: 'view_quilt', route: '.', title: 'Layouts', },\n        { icon: 'picture_in_picture', route: '.', title: 'Components & Addons', },\n      ];\n      usermenu: object[] = [\n        { icon: 'swap_horiz', route: '.', title: 'Switch account', },\n        { icon: 'tune', route: '.', title: 'Account settings', },\n        { icon: 'exit_to_app', route: '.', title: 'Sign out', },\n      ];\n      navmenu: object[] = [\n        { icon: 'looks_one', route: '.', title: 'First item', description: 'Item description', },\n        { icon: 'looks_two', route: '.', title: 'Second item', description: 'Item description', },\n        { icon: 'looks_3', route: '.', title: 'Third item', description: 'Item description', },\n        { icon: 'looks_4', route: '.', title: 'Fourth item', description: 'Item description', },\n        { icon: 'looks_5', route: '.', title: 'Fifth item', description: 'Item description', },\n      ];\n    }\n  ";
                    static ɵfac = function (n) {
                      return new (n || a)();
                    };
                    static ɵcmp = t.Xpm({
                      type: a,
                      selectors: [['layouts-manage-list']],
                      decls: 171,
                      vars: 29,
                      consts: [
                        [1, 'relative'],
                        ['mode', 'side', 3, 'opened'],
                        ['td-sidenav-content', ''],
                        ['codeLang', 'html'],
                        [
                          'flex',
                          '',
                          'sidenavTitle',
                          'Covalent',
                          'logo',
                          'teradata-dark',
                          'name',
                          'Firstname Lastname',
                          'email',
                          'firstname.lastname@company.com',
                        ],
                        ['mat-list-item', ''],
                        ['matListItemIcon', ''],
                        ['tdNavigationDrawerMenu', ''],
                        [
                          'logo',
                          'assets:teradata',
                          'toolbarTitle',
                          'Covalent',
                          'navigationRoute',
                          '/',
                        ],
                        [
                          'mat-icon-button',
                          '',
                          'td-menu-button',
                          '',
                          'tdLayoutToggle',
                          '',
                        ],
                        ['mat-button', '', 'tdLayoutManageListToggle', ''],
                        ['mat-list-item', '', 4, 'ngFor', 'ngForOf'],
                        [
                          'td-toolbar-content',
                          '',
                          'layout',
                          'row',
                          'layout-align',
                          'start center',
                          'flex',
                          '',
                        ],
                        [
                          'svgIcon',
                          'assets:teradata',
                          1,
                          'mat-icon-logo',
                          'cursor-pointer',
                          3,
                          'routerLink',
                        ],
                        [1, 'cursor-pointer', 3, 'routerLink'],
                        ['flex', ''],
                        [
                          'mat-icon-button',
                          '',
                          'matTooltip',
                          'Docs',
                          'href',
                          'https://teradata.github.io/covalent/',
                          'target',
                          '_blank',
                        ],
                        [
                          'mat-icon-button',
                          '',
                          'matTooltip',
                          'Github',
                          'href',
                          'https://github.com/teradata/covalent',
                          'target',
                          '_blank',
                        ],
                        ['svgIcon', 'assets:github'],
                        ['manageList', ''],
                        [
                          'td-sidenav-content',
                          '',
                          3,
                          'tdLayoutManageListClose',
                        ],
                        ['ngFor', '', 3, 'ngForOf'],
                        [
                          'layout',
                          'row',
                          'layout-align',
                          'start center',
                          'flex',
                          '',
                        ],
                        [
                          'mat-icon-button',
                          '',
                          'tdLayoutManageListOpen',
                          '',
                          3,
                          'hideWhenOpened',
                        ],
                        ['mat-icon-button', ''],
                        ['layout-gt-sm', 'row'],
                        ['flex-gt-sm', '60'],
                        [
                          'mat-button',
                          '',
                          'color',
                          'accent',
                          1,
                          'text-upper',
                          3,
                          'routerLink',
                        ],
                        ['flex-gt-sm', '40'],
                        ['layout', 'row', 'layout-align', 'start center'],
                        [1, 'mat-caption'],
                        [1, 'mat-title'],
                        ['codeLang', 'typescript'],
                        [
                          'resourceUrl',
                          'platform/core/layout/layout-manage-list/README.md',
                        ],
                        ['matListIcon', ''],
                      ],
                      template: function (n, o) {
                        1 & n &&
                          (t.TgZ(0, 'mat-card')(1, 'mat-card-title'),
                          t._uU(2, 'Minimum Demo'),
                          t.qZA(),
                          t.TgZ(3, 'mat-card-subtitle'),
                          t._uU(
                            4,
                            'Minimum code for this layout with no wrapper'
                          ),
                          t.qZA(),
                          t._UZ(5, 'mat-divider'),
                          t.TgZ(6, 'div', 0)(7, 'td-layout-manage-list', 1),
                          t._UZ(8, 'mat-toolbar', 2),
                          t.TgZ(9, 'div', 2),
                          t._uU(10, 'Sidenav content here'),
                          t.qZA(),
                          t._UZ(11, 'mat-toolbar'),
                          t._uU(12, ' Content goes here '),
                          t.qZA()(),
                          t._UZ(13, 'mat-divider'),
                          t.TgZ(14, 'mat-card-content')(15, 'td-highlight', 3),
                          t._uU(16),
                          t.qZA()()(),
                          t.TgZ(17, 'mat-card')(18, 'mat-card-title'),
                          t._uU(19, 'Basic Demo'),
                          t.qZA(),
                          t.TgZ(20, 'mat-card-subtitle'),
                          t._uU(21, 'Basic layout wrapper & nav drawer'),
                          t.qZA(),
                          t._UZ(22, 'mat-divider'),
                          t.TgZ(23, 'div', 0)(24, 'td-layout')(
                            25,
                            'td-navigation-drawer',
                            4
                          )(26, 'mat-nav-list')(27, 'a', 5)(28, 'mat-icon', 6),
                          t._uU(29, 'home'),
                          t.qZA(),
                          t._uU(30, ' Home '),
                          t.qZA()(),
                          t.TgZ(31, 'div', 7)(32, 'mat-nav-list')(33, 'a', 5)(
                            34,
                            'mat-icon',
                            6
                          ),
                          t._uU(35, 'account_box'),
                          t.qZA(),
                          t._uU(36, ' Profile '),
                          t.qZA()()()(),
                          t.TgZ(37, 'td-layout-nav', 8)(38, 'button', 9)(
                            39,
                            'mat-icon'
                          ),
                          t._uU(40, 'menu'),
                          t.qZA()(),
                          t.TgZ(41, 'td-layout-manage-list', 1)(
                            42,
                            'mat-toolbar',
                            2
                          ),
                          t._uU(43, 'Nav Title'),
                          t.qZA(),
                          t.TgZ(44, 'div', 2),
                          t._uU(45, 'Sidenav content here'),
                          t.qZA(),
                          t.TgZ(46, 'mat-toolbar')(47, 'button', 10),
                          t._uU(48, 'Toggle'),
                          t.qZA(),
                          t._uU(49, ' Content Title '),
                          t.qZA(),
                          t._uU(50, ' Content goes here '),
                          t.qZA()()()(),
                          t._UZ(51, 'mat-divider'),
                          t.TgZ(52, 'mat-card-content')(53, 'td-highlight', 3),
                          t._uU(54),
                          t.qZA()()(),
                          t.TgZ(55, 'mat-card')(56, 'mat-card-title'),
                          t._uU(57, 'Full Demo'),
                          t.qZA(),
                          t.TgZ(58, 'mat-card-subtitle'),
                          t._uU(
                            59,
                            'Full working code with all options and templates'
                          ),
                          t.qZA(),
                          t._UZ(60, 'mat-divider'),
                          t.TgZ(61, 'div', 0)(62, 'td-layout')(
                            63,
                            'td-navigation-drawer',
                            4
                          )(64, 'mat-nav-list'),
                          t.YNc(65, z, 4, 2, 'a', 11),
                          t.qZA(),
                          t.TgZ(66, 'div', 7)(67, 'mat-nav-list'),
                          t.YNc(68, E, 4, 2, 'a', 11),
                          t.qZA()()(),
                          t.TgZ(69, 'td-layout-nav')(70, 'div', 12)(
                            71,
                            'button',
                            9
                          )(72, 'mat-icon'),
                          t._uU(73, 'menu'),
                          t.qZA()(),
                          t._UZ(74, 'mat-icon', 13),
                          t.TgZ(75, 'span', 14),
                          t._uU(76, 'Covalent'),
                          t.qZA(),
                          t._UZ(77, 'span', 15),
                          t.TgZ(78, 'a', 16)(79, 'mat-icon'),
                          t._uU(80, 'chrome_reader_mode'),
                          t.qZA()(),
                          t.TgZ(81, 'a', 17),
                          t._UZ(82, 'mat-icon', 18),
                          t.qZA()(),
                          t.TgZ(
                            83,
                            'td-layout-manage-list',
                            null,
                            19
                          )(
                            85,
                            'mat-toolbar',
                            2
                          )(86, 'span'),
                          t._uU(87, 'Optional Title'),
                          t.qZA()(),
                          t.TgZ(88, 'mat-nav-list', 20),
                          t.YNc(89, X, 4, 2, 'ng-template', 21),
                          t.qZA(),
                          t.TgZ(90, 'mat-toolbar')(91, 'div', 22)(
                            92,
                            'button',
                            23
                          )(93, 'mat-icon'),
                          t._uU(94, 'arrow_back'),
                          t.qZA()(),
                          t.TgZ(95, 'span'),
                          t._uU(96, 'Content Title'),
                          t.qZA(),
                          t._UZ(97, 'span', 15),
                          t.TgZ(98, 'button', 24)(99, 'mat-icon'),
                          t._uU(100, 'settings'),
                          t.qZA()()()(),
                          t.TgZ(101, 'div', 25)(102, 'div', 26)(
                            103,
                            'mat-card'
                          )(104, 'mat-card-title'),
                          t._uU(105, 'Products Sales'),
                          t.qZA(),
                          t.TgZ(106, 'mat-card-subtitle'),
                          t._uU(107, 'usage stats for our products'),
                          t.qZA(),
                          t._UZ(108, 'mat-divider'),
                          t.TgZ(109, 'mat-card-content'),
                          t._uU(110, 'card content'),
                          t.qZA(),
                          t._UZ(111, 'mat-divider'),
                          t.TgZ(112, 'mat-card-actions')(113, 'a', 27)(
                            114,
                            'span'
                          ),
                          t._uU(115, 'View More'),
                          t.qZA()()()(),
                          t.TgZ(116, 'mat-card')(117, 'mat-card-title'),
                          t._uU(118, 'Customer Activity'),
                          t.qZA(),
                          t.TgZ(119, 'mat-card-subtitle'),
                          t._uU(120, 'Recent activity from select members'),
                          t.qZA(),
                          t._UZ(121, 'mat-divider'),
                          t.TgZ(122, 'mat-card-content'),
                          t._uU(123, 'card content'),
                          t.qZA(),
                          t._UZ(124, 'mat-divider'),
                          t.TgZ(125, 'mat-card-actions')(126, 'a', 27)(
                            127,
                            'span'
                          ),
                          t._uU(128, 'View More'),
                          t.qZA()()()()(),
                          t.TgZ(129, 'div', 28)(130, 'mat-card')(
                            131,
                            'mat-card-title'
                          ),
                          t._uU(132, 'Alerts'),
                          t.qZA(),
                          t.TgZ(133, 'mat-card-subtitle'),
                          t._uU(134, 'Items requiring attention'),
                          t.qZA(),
                          t._UZ(135, 'mat-divider'),
                          t.TgZ(136, 'mat-card-content'),
                          t._uU(137, 'card content'),
                          t.qZA(),
                          t._UZ(138, 'mat-divider'),
                          t.TgZ(139, 'mat-card-actions')(140, 'a', 27)(
                            141,
                            'span'
                          ),
                          t._uU(142, 'View More'),
                          t.qZA()()()(),
                          t.TgZ(143, 'mat-card')(144, 'mat-card-title'),
                          t._uU(145, 'Favorites'),
                          t.qZA(),
                          t.TgZ(146, 'mat-card-subtitle'),
                          t._uU(147, 'Your favorite products'),
                          t.qZA(),
                          t._UZ(148, 'mat-divider'),
                          t.TgZ(149, 'mat-card-content'),
                          t._uU(150, 'card content'),
                          t.qZA(),
                          t._UZ(151, 'mat-divider'),
                          t.TgZ(152, 'mat-card-actions')(153, 'a', 27)(
                            154,
                            'span'
                          ),
                          t._uU(155, 'View More'),
                          t.qZA()()()()()(),
                          t.TgZ(156, 'td-layout-footer-inner'),
                          t._uU(157, 'Optional inner footer'),
                          t.qZA()(),
                          t.TgZ(158, 'td-layout-footer')(159, 'div', 29)(
                            160,
                            'span',
                            30
                          ),
                          t._uU(
                            161,
                            'Copyright \xa9 2017 Teradata. All rights reserved'
                          ),
                          t.qZA()()()()()(),
                          t._UZ(162, 'mat-divider'),
                          t.TgZ(163, 'mat-card-content')(
                            164,
                            'td-highlight',
                            3
                          ),
                          t._uU(165),
                          t.qZA(),
                          t.TgZ(166, 'h3', 31),
                          t._uU(167, 'TypeScript:'),
                          t.qZA(),
                          t.TgZ(168, 'td-highlight', 32),
                          t._uU(169),
                          t.qZA()()(),
                          t._UZ(170, 'td-readme-loader', 33)),
                          2 & n &&
                            (t.xp6(6),
                            t.Udp('height', '200px'),
                            t.xp6(1),
                            t.Q6J('opened', !0),
                            t.xp6(9),
                            t.hij(' ', o.managedListMinHtml, ' '),
                            t.xp6(7),
                            t.Udp('height', '400px'),
                            t.xp6(18),
                            t.Q6J('opened', !0),
                            t.xp6(13),
                            t.hij(' ', o.managedListBasicHtml, ' '),
                            t.xp6(7),
                            t.Udp('height', '400px'),
                            t.xp6(4),
                            t.Q6J('ngForOf', o.routes),
                            t.xp6(3),
                            t.Q6J('ngForOf', o.usermenu),
                            t.xp6(6),
                            t.Q6J('routerLink', t.DdM(23, v)),
                            t.xp6(1),
                            t.Q6J('routerLink', t.DdM(24, v)),
                            t.xp6(13),
                            t.Q6J('tdLayoutManageListClose', !1),
                            t.xp6(1),
                            t.Q6J('ngForOf', o.navmenu),
                            t.xp6(3),
                            t.Q6J('hideWhenOpened', !0),
                            t.xp6(21),
                            t.Q6J('routerLink', t.DdM(25, v)),
                            t.xp6(13),
                            t.Q6J('routerLink', t.DdM(26, v)),
                            t.xp6(14),
                            t.Q6J('routerLink', t.DdM(27, v)),
                            t.xp6(13),
                            t.Q6J('routerLink', t.DdM(28, v)),
                            t.xp6(12),
                            t.hij(' ', o.managedListFullHtml, ' '),
                            t.xp6(4),
                            t.hij(' ', o.managedListFullTypescript, ' '));
                      },
                      dependencies: [
                        s.sg,
                        l.zs,
                        l.lW,
                        l.o6,
                        l.RK,
                        m.Hk,
                        m.Tg,
                        m.Yt,
                        _.d,
                        g.Hw,
                        c.a8,
                        c.hq,
                        c.dn,
                        c.$j,
                        c.n5,
                        C.Ye,
                        y.M,
                        Z.vR,
                        h.M,
                        W.X,
                        f.zM,
                        f.N$,
                        f.zr,
                        U.A,
                        d.Xg,
                        d.m7,
                        T.S,
                        b.I,
                        u.rH,
                      ],
                      styles: [
                        '[_nghost-%COMP%]     .mat-drawer-container[fullscreen]{position:static;width:100%;min-height:200px}[_nghost-%COMP%]     .mat-drawer-container[fullscreen] .td-layout-sidenav{min-height:200px}',
                      ],
                      changeDetection: 0,
                    });
                  }
                  return a;
                })(),
                path: 'manage-list',
              },
            ],
            component: M,
            path: 'layouts',
          },
        ]);
      var at = i(3305),
        et = i(96942),
        ot = i(41257),
        it = i(50678),
        nt = i(1904),
        rt = i(78721);
      let mt = (() => {
        class a {
          static ɵfac = function (n) {
            return new (n || a)();
          };
          static ɵmod = t.oAB({ type: a });
          static ɵinj = t.cJS({
            imports: [
              s.ez,
              l.ot,
              m.ie,
              g.Ps,
              c.QW,
              C.g0,
              at.To,
              it.i9,
              et.B,
              nt.IV,
              ot.m,
              tt,
              rt.V,
            ],
          });
        }
        return a;
      })();
    },
  },
]);
