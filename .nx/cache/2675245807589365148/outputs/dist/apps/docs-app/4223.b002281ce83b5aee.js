'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [4223],
  {
    34223: (P, l, o) => {
      o.r(l), o.d(l, { ComponentsModule: () => C });
      var d = o(52787),
        h = o(73698);
      const s = d.Bz.forChild([
        {
          path: 'components',
          children: [
            { path: '', component: h.P, data: { category: 'components' } },
            {
              path: 'breadcrumbs',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(1933)])
                  .then(o.bind(o, 15376))
                  .then((n) => n.BreadcrumbsDemoModule),
            },
            {
              path: 'code-editor',
              loadChildren: () =>
                Promise.all([o.e(1694), o.e(8592), o.e(39)])
                  .then(o.bind(o, 16085))
                  .then((n) => n.CodeEditorDemoModule),
            },
            {
              path: 'dialogs',
              loadChildren: () =>
                Promise.all([o.e(9347), o.e(8035), o.e(8592), o.e(4098)])
                  .then(o.bind(o, 69460))
                  .then((n) => n.DialogsDemoModule),
            },
            {
              path: 'guided-tour',
              loadChildren: () =>
                Promise.all([o.e(7022), o.e(8592), o.e(6656)])
                  .then(o.bind(o, 41780))
                  .then((n) => n.GuidedTourDemoModule),
            },
            {
              path: 'dynamic-forms',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(2564)])
                  .then(o.bind(o, 99455))
                  .then((n) => n.DynamicFormsDemoModule),
            },
            {
              path: 'dynamic-menu',
              loadChildren: () =>
                Promise.all([o.e(8584), o.e(9410)])
                  .then(o.bind(o, 29410))
                  .then((n) => n.DynamicMenuDemoModule),
            },
            {
              path: 'file-input',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(7465)])
                  .then(o.bind(o, 49857))
                  .then((n) => n.FileInputDemoModule),
            },
            {
              path: 'flavored-markdown',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(8409)])
                  .then(o.bind(o, 56010))
                  .then((n) => n.FlavoredMarkdownDemoModule),
            },
            {
              path: 'markdown-parser',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(8119)])
                  .then(o.bind(o, 53347))
                  .then((n) => n.MarkdownDemoModule),
            },
            {
              path: 'highlight',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(1216)])
                  .then(o.bind(o, 8885))
                  .then((n) => n.HighlightDemoModule),
            },
            {
              path: 'json-formatter',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(5785)])
                  .then(o.bind(o, 11716))
                  .then((n) => n.JsonFormatterDemoModule),
            },
            {
              path: 'markdown-navigator',
              loadChildren: () =>
                Promise.all([
                  o.e(9347),
                  o.e(8035),
                  o.e(1694),
                  o.e(7466),
                  o.e(6964),
                  o.e(8592),
                  o.e(6651),
                ])
                  .then(o.bind(o, 96651))
                  .then((n) => n.MarkdownNavigatorDemoModule),
            },
            {
              path: 'message',
              loadChildren: () =>
                Promise.all([o.e(9347), o.e(8035), o.e(8592), o.e(9306)])
                  .then(o.bind(o, 99306))
                  .then((n) => n.MessageDemoModule),
            },
            {
              path: 'search',
              loadChildren: () =>
                Promise.all([o.e(7466), o.e(5133), o.e(8592), o.e(9409)])
                  .then(o.bind(o, 61247))
                  .then((n) => n.SearchDemoModule),
            },
            {
              path: 'side-sheet',
              loadChildren: () =>
                Promise.all([o.e(9347), o.e(677), o.e(8592), o.e(3723)])
                  .then(o.bind(o, 69837))
                  .then((n) => n.SideSheetDemoModule),
            },
            {
              path: 'layout',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(1575)])
                  .then(o.bind(o, 1925))
                  .then((n) => n.LayoutDemoModule),
            },
            {
              path: 'layout-nav',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(4965)])
                  .then(o.bind(o, 86823))
                  .then((n) => n.LayoutNavDemoModule),
            },
            {
              path: 'layout-nav-list',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(8527)])
                  .then(o.bind(o, 73084))
                  .then((n) => n.LayoutNavListDemoModule),
            },
            {
              path: 'layout-card-over',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(5007)])
                  .then(o.bind(o, 45214))
                  .then((n) => n.LayoutCardOverDemoModule),
            },
            {
              path: 'layout-management-list',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(4037)])
                  .then(o.bind(o, 72900))
                  .then((n) => n.LayoutManagementListDemoModule),
            },
            {
              path: 'loading',
              loadChildren: () =>
                Promise.all([o.e(4076), o.e(8592), o.e(9359)])
                  .then(o.bind(o, 76093))
                  .then((n) => n.LoadingDemoModule),
            },
            {
              path: 'text-editor',
              loadChildren: () =>
                Promise.all([o.e(1420), o.e(8592), o.e(980)])
                  .then(o.bind(o, 38672))
                  .then((n) => n.TextEditorDemoModule),
            },
            {
              path: 'user-profile',
              loadChildren: () =>
                Promise.all([o.e(8592), o.e(5281)])
                  .then(o.bind(o, 23734))
                  .then((n) => n.UserProfileDemoModule),
            },
          ],
        },
      ]);
      var M = o(1004),
        t = o(19212);
      let C = (() => {
        class n {
          static ɵfac = function (D) {
            return new (D || n)();
          };
          static ɵmod = t.oAB({ type: n });
          static ɵinj = t.cJS({ imports: [M.A, s] });
        }
        return n;
      })();
    },
  },
]);
