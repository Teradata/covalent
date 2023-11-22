'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [2486],
  {
    52486: (i, l, o) => {
      o.r(l), o.d(l, { EchartsModule: () => V });
      var h = o(96814),
        s = o(69862),
        m = o(30617),
        v = o(26385),
        a = o(59038),
        C = o(32651),
        M = o(81274),
        P = o(95195),
        g = o(32296),
        f = o(73176),
        D = o(74104),
        y = o(23680),
        E = o(6311),
        x = o(92596),
        A = o(50678),
        S = o(1904),
        B = o(41257),
        J = o(72297),
        R = o(1004),
        T = o(73698),
        z = o(52787),
        n = o(63048),
        F = o(78955);
      const I = [
          {
            path: 'echarts',
            children: [
              { component: T.P, path: '', data: { category: 'echarts' } },
              {
                path: 'getting-started',
                component: F.I,
                data: { resourceUrl: 'libs/angular-echarts/README.md' },
              },
              {
                path: 'chart',
                children: (0, n.uw)({ id: 'chart', overviewDemoComponent: '' }),
              },
              {
                path: 'combination',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(8592), o.e(1371)])
                    .then(o.bind(o, 95277))
                    .then((t) => t.CombinationModule),
              },
              {
                path: 'bar',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(9448), o.e(8592), o.e(9342)])
                    .then(o.bind(o, 74045))
                    .then((t) => t.BarModule),
              },
              {
                path: 'clustering',
                loadChildren: () =>
                  Promise.all([
                    o.e(8875),
                    o.e(5822),
                    o.e(6944),
                    o.e(8592),
                    o.e(3671),
                  ])
                    .then(o.bind(o, 57853))
                    .then((t) => t.ClusteringModule),
              },
              {
                path: 'graph',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(8592), o.e(7491)])
                    .then(o.bind(o, 5928))
                    .then((t) => t.GraphModule),
              },
              {
                path: 'histogram',
                loadChildren: () =>
                  Promise.all([
                    o.e(8875),
                    o.e(5822),
                    o.e(6424),
                    o.e(8592),
                    o.e(931),
                  ])
                    .then(o.bind(o, 75788))
                    .then((t) => t.HistogramModule),
              },
              {
                path: 'line',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(8592), o.e(8334)])
                    .then(o.bind(o, 89862))
                    .then((t) => t.LineModule),
              },
              {
                path: 'map',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(2902), o.e(8592), o.e(5222)])
                    .then(o.bind(o, 38684))
                    .then((t) => t.MapModule),
              },
              {
                path: 'pie',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(8592), o.e(4005)])
                    .then(o.bind(o, 98802))
                    .then((t) => t.PieModule),
              },
              {
                path: 'regression',
                loadChildren: () =>
                  Promise.all([
                    o.e(8875),
                    o.e(5822),
                    o.e(7726),
                    o.e(8592),
                    o.e(1201),
                  ])
                    .then(o.bind(o, 48245))
                    .then((t) => t.RegressionModule),
              },
              {
                path: 'sankey',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(8592), o.e(5687)])
                    .then(o.bind(o, 46860))
                    .then((t) => t.SankeyModule),
              },
              {
                path: 'scatter',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(8592), o.e(5936)])
                    .then(o.bind(o, 12927))
                    .then((t) => t.ScatterModule),
              },
              {
                path: 'tree',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(3032), o.e(8592), o.e(7855)])
                    .then(o.bind(o, 73790))
                    .then((t) => t.TreeModule),
              },
              {
                path: 'treemap',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(8592), o.e(5941)])
                    .then(o.bind(o, 36581))
                    .then((t) => t.TreemapModule),
              },
              {
                path: 'wordcloud',
                loadChildren: () =>
                  Promise.all([o.e(8875), o.e(8592), o.e(9370)])
                    .then(o.bind(o, 14545))
                    .then((t) => t.WordcloudModule),
              },
              {
                path: 'tooltip',
                children: (0, n.uw)({
                  id: 'tooltip',
                  overviewDemoComponent: '',
                }),
              },
              {
                path: 'axis',
                children: (0, n.uw)({ id: 'axis', overviewDemoComponent: '' }),
              },
              {
                path: 'toolbox',
                children: (0, n.uw)({
                  id: 'toolbox',
                  overviewDemoComponent: '',
                }),
              },
              {
                path: 'dataset',
                children: (0, n.uw)({
                  id: 'dataset',
                  overviewDemoComponent: '',
                }),
              },
            ],
          },
        ],
        N = z.Bz.forChild(I);
      var d = o(19212);
      let V = (() => {
        class t {
          static ɵfac = function (W) {
            return new (W || t)();
          };
          static ɵmod = d.oAB({ type: t });
          static ɵinj = d.cJS({
            imports: [
              h.ez,
              m.Ps,
              v.t,
              C.SJ,
              M.g0,
              a.ie,
              P.QW,
              g.ot,
              f.N6,
              D.Nh,
              y.si,
              E.Tx,
              s.JF,
              x.AV,
              A.i9,
              S.IV,
              B.m,
              N,
              J.E,
              R.A,
            ],
          });
        }
        return t;
      })();
    },
  },
]);
