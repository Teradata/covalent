'use strict';
(self.webpackChunkdocs_app = self.webpackChunkdocs_app || []).push([
  [3032],
  {
    61298: (x, S, n) => {
      n.d(S, { Z: () => Jo });
      var o = n(15861),
        _ = n(23421),
        p = n(76856),
        e = n(19212),
        D = n(1691),
        u = n(33822),
        C = n(58956),
        r = n(96814),
        E = n(64170),
        h = n(98525),
        d = n(23680),
        T = n(30617);
      function O(a, l) {
        if ((1 & a && (e.TgZ(0, 'mat-option', 8), e._uU(1), e.qZA()), 2 & a)) {
          const t = l.$implicit;
          e.Q6J('value', t), e.xp6(1), e.hij(' ', t, ' ');
        }
      }
      function V(a, l) {
        if (
          (1 & a &&
            (e.ynx(0),
            e.TgZ(1, 'div', 0)(2, 'mat-icon', 10)(3, 'span', 11),
            e._uU(4, 'info'),
            e.qZA()(),
            e.TgZ(5, 'span'),
            e._uU(6),
            e.qZA()(),
            e.BQk()),
          2 & a)
        ) {
          const t = e.oxw().$implicit;
          e.xp6(6), e.Oqu(t.name);
        }
      }
      function ee(a, l) {
        1 & a && e.YNc(0, V, 7, 1, 'ng-container', 9),
          2 & a && e.Q6J('ngIf', l.$implicit);
      }
      const ae = () => ({ name: 'AgglomerativeCluster', value: 3938 }),
        ne = () => ({ name: 'CommunityStructure', value: 3812 }),
        te = () => ({ name: 'HierarchicalCluster', value: 6714 }),
        oe = () => ({ name: 'MergeEdge', value: 743 }),
        I = (a, l, t, c) => [a, l, t, c],
        le = (a) => ({ name: 'cluster', children: a }),
        ce = () => ({ name: 'BetweennessCentrality', value: 3534 }),
        me = () => ({ name: 'LinkDistance', value: 5731 }),
        ie = () => ({ name: 'MaxFlowMinCut', value: 7840 }),
        re = () => ({ name: 'ShortestPaths', value: 5914 }),
        se = () => ({ name: 'SpanningTree', value: 3416 }),
        z = (a, l, t, c, m) => [a, l, t, c, m],
        ue = (a) => ({ name: 'graph', children: a }),
        ve = () => ({ name: 'AspectRatioBanker', value: 7074 }),
        U = (a) => [a],
        de = (a) => ({ name: 'optimization', children: a }),
        P = (a, l, t) => [a, l, t],
        _e = (a) => ({ name: 'analytics', collapsed: !0, children: a }),
        De = () => ({ name: 'Easing', value: 17010 }),
        he = () => ({ name: 'FunctionSequence', value: 5842 }),
        Me = () => ({ name: 'ArrayInterpolator', value: 1983 }),
        pe = () => ({ name: 'ColorInterpolator', value: 2047 }),
        ge = () => ({ name: 'DateInterpolator', value: 1375 }),
        Se = () => ({ name: 'Interpolator', value: 8746 }),
        ye = () => ({ name: 'MatrixInterpolator', value: 2202 }),
        Te = () => ({ name: 'NumberInterpolator', value: 1382 }),
        Ce = () => ({ name: 'ObjectInterpolator', value: 1629 }),
        Ee = () => ({ name: 'PointInterpolator', value: 1675 }),
        fe = () => ({ name: 'RectangleInterpolator', value: 2042 }),
        j = (a, l, t, c, m, s, i, v, M) => [a, l, t, c, m, s, i, v, M],
        Oe = (a) => ({ name: 'interpolate', children: a }),
        Le = () => ({ name: 'ISchedulable', value: 1041 }),
        Ae = () => ({ name: 'Parallel', value: 5176 }),
        be = () => ({ name: 'Pause', value: 449 }),
        Pe = () => ({ name: 'Scheduler', value: 5593 }),
        xe = () => ({ name: 'Sequence', value: 5534 }),
        Ie = () => ({ name: 'Transition', value: 9201 }),
        Re = () => ({ name: 'Transitioner', value: 19975 }),
        Fe = () => ({ name: 'TransitionEvent', value: 1116 }),
        Ke = () => ({ name: 'Tween', value: 6006 }),
        Be = (a, l, t, c, m, s, i, v, M, g, y, f) => [
          a,
          l,
          t,
          c,
          m,
          s,
          i,
          v,
          M,
          g,
          y,
          f,
        ],
        Ve = (a) => ({ name: 'animate', children: a }),
        ze = () => ({ name: 'Converters', value: 721 }),
        Ue = () => ({ name: 'DelimitedTextConverter', value: 4294 }),
        qe = () => ({ name: 'GraphMLConverter', value: 9800 }),
        we = () => ({ name: 'IDataConverter', value: 1314 }),
        Ne = () => ({ name: 'JSONConverter', value: 2220 }),
        We = (a) => ({ name: 'converters', children: a }),
        Ze = () => ({ name: 'DataField', value: 1759 }),
        Ge = () => ({ name: 'DataSchema', value: 2165 }),
        Ye = () => ({ name: 'DataSet', value: 586 }),
        Qe = () => ({ name: 'DataSource', value: 3331 }),
        He = () => ({ name: 'DataTable', value: 772 }),
        Je = () => ({ name: 'DataUtil', value: 3322 }),
        k = (a, l, t, c, m, s, i) => [a, l, t, c, m, s, i],
        je = (a) => ({ name: 'data', collapsed: !0, children: a }),
        ke = () => ({ name: 'DirtySprite', value: 8833 }),
        Xe = () => ({ name: 'LineSprite', value: 1732 }),
        $e = () => ({ name: 'RectSprite', value: 3623 }),
        ea = () => ({ name: 'TextSprite', value: 10066 }),
        aa = (a) => ({ name: 'display', children: a }),
        na = () => ({ name: 'FlareVis', value: 4116 }),
        ta = (a) => ({ name: 'flex', collapsed: !0, children: a }),
        oa = () => ({ name: 'DragForce', value: 1082 }),
        la = () => ({ name: 'GravityForce', value: 1336 }),
        ca = () => ({ name: 'IForce', value: 319 }),
        ma = () => ({ name: 'NBodyForce', value: 10498 }),
        ia = () => ({ name: 'Particle', value: 2822 }),
        ra = () => ({ name: 'Simulation', value: 9983 }),
        sa = () => ({ name: 'Spring', value: 2213 }),
        ua = () => ({ name: 'SpringForce', value: 1681 }),
        va = (a, l, t, c, m, s, i, v) => [a, l, t, c, m, s, i, v],
        da = (a) => ({ name: 'physics', children: a }),
        _a = () => ({ name: 'AggregateExpression', value: 1616 }),
        Da = () => ({ name: 'And', value: 1027 }),
        ha = () => ({ name: 'Arithmetic', value: 3891 }),
        Ma = () => ({ name: 'Average', value: 891 }),
        pa = () => ({ name: 'BinaryExpression', value: 2893 }),
        ga = () => ({ name: 'Comparison', value: 5103 }),
        Sa = () => ({ name: 'CompositeExpression', value: 3677 }),
        ya = () => ({ name: 'Count', value: 781 }),
        Ta = () => ({ name: 'DateUtil', value: 4141 }),
        Ca = () => ({ name: 'Distinct', value: 933 }),
        Ea = () => ({ name: 'Expression', value: 5130 }),
        fa = () => ({ name: 'ExpressionIterator', value: 3617 }),
        Oa = () => ({ name: 'Fn', value: 3240 }),
        La = () => ({ name: 'If', value: 2732 }),
        Aa = () => ({ name: 'IsA', value: 2039 }),
        ba = () => ({ name: 'Literal', value: 1214 }),
        Pa = () => ({ name: 'Match', value: 3748 }),
        xa = () => ({ name: 'Maximum', value: 843 }),
        Ia = () => ({ name: 'add', value: 593 }),
        Ra = () => ({ name: 'and', value: 330 }),
        Fa = () => ({ name: 'average', value: 287 }),
        Ka = () => ({ name: 'count', value: 277 }),
        Ba = () => ({ name: 'distinct', value: 292 }),
        Va = () => ({ name: 'div', value: 595 }),
        za = () => ({ name: 'eq', value: 594 }),
        Ua = () => ({ name: 'fn', value: 460 }),
        qa = () => ({ name: 'gt', value: 603 }),
        wa = () => ({ name: 'gte', value: 625 }),
        Na = () => ({ name: 'iff', value: 748 }),
        Wa = () => ({ name: 'isa', value: 461 }),
        Za = () => ({ name: 'lt', value: 597 }),
        Ga = () => ({ name: 'lte', value: 619 }),
        Ya = () => ({ name: 'max', value: 283 }),
        Qa = () => ({ name: 'min', value: 283 }),
        Ha = () => ({ name: 'mod', value: 591 }),
        Ja = () => ({ name: 'mul', value: 603 }),
        ja = () => ({ name: 'neq', value: 599 }),
        ka = () => ({ name: 'not', value: 386 }),
        Xa = () => ({ name: 'or', value: 323 }),
        $a = () => ({ name: 'orderby', value: 307 }),
        en = () => ({ name: 'range', value: 772 }),
        an = () => ({ name: 'select', value: 296 }),
        nn = () => ({ name: 'stddev', value: 363 }),
        tn = () => ({ name: 'sub', value: 600 }),
        on = () => ({ name: 'sum', value: 280 }),
        ln = () => ({ name: 'update', value: 307 }),
        cn = () => ({ name: 'variance', value: 335 }),
        mn = () => ({ name: 'where', value: 299 }),
        rn = () => ({ name: 'xor', value: 354 }),
        sn = () => ({ name: '-', value: 264 }),
        un = (
          a,
          l,
          t,
          c,
          m,
          s,
          i,
          v,
          M,
          g,
          y,
          f,
          L,
          A,
          b,
          R,
          F,
          K,
          B,
          q,
          w,
          N,
          W,
          Z,
          G,
          Y,
          Q,
          H,
          J,
          jo,
          ko,
          Xo
        ) => [
          a,
          l,
          t,
          c,
          m,
          s,
          i,
          v,
          M,
          g,
          y,
          f,
          L,
          A,
          b,
          R,
          F,
          K,
          B,
          q,
          w,
          N,
          W,
          Z,
          G,
          Y,
          Q,
          H,
          J,
          jo,
          ko,
          Xo,
        ],
        vn = (a) => ({ name: 'methods', children: a }),
        dn = () => ({ name: 'Minimum', value: 843 }),
        _n = () => ({ name: 'Not', value: 1554 }),
        Dn = () => ({ name: 'Or', value: 970 }),
        hn = () => ({ name: 'Query', value: 13896 }),
        Mn = () => ({ name: 'Range', value: 1594 }),
        pn = () => ({ name: 'StringUtil', value: 4130 }),
        gn = () => ({ name: 'Sum', value: 791 }),
        Sn = () => ({ name: 'Variable', value: 1124 }),
        yn = () => ({ name: 'Variance', value: 1876 }),
        Tn = () => ({ name: 'Xor', value: 1101 }),
        Cn = (
          a,
          l,
          t,
          c,
          m,
          s,
          i,
          v,
          M,
          g,
          y,
          f,
          L,
          A,
          b,
          R,
          F,
          K,
          B,
          q,
          w,
          N,
          W,
          Z,
          G,
          Y,
          Q,
          H,
          J
        ) => [
          a,
          l,
          t,
          c,
          m,
          s,
          i,
          v,
          M,
          g,
          y,
          f,
          L,
          A,
          b,
          R,
          F,
          K,
          B,
          q,
          w,
          N,
          W,
          Z,
          G,
          Y,
          Q,
          H,
          J,
        ],
        En = (a) => ({ name: 'query', collapsed: !0, children: a }),
        fn = () => ({ name: 'IScaleMap', value: 2105 }),
        On = () => ({ name: 'LinearScale', value: 1316 }),
        Ln = () => ({ name: 'LogScale', value: 3151 }),
        An = () => ({ name: 'OrdinalScale', value: 3770 }),
        bn = () => ({ name: 'QuantileScale', value: 2435 }),
        Pn = () => ({ name: 'QuantitativeScale', value: 4839 }),
        xn = () => ({ name: 'RootScale', value: 1756 }),
        In = () => ({ name: 'Scale', value: 4268 }),
        Rn = () => ({ name: 'ScaleType', value: 1821 }),
        Fn = () => ({ name: 'TimeScale', value: 5833 }),
        X = (a, l, t, c, m, s, i, v, M, g) => [a, l, t, c, m, s, i, v, M, g],
        Kn = (a) => ({ name: 'scale', children: a }),
        Bn = () => ({ name: 'Arrays', value: 8258 }),
        Vn = () => ({ name: 'Colors', value: 10001 }),
        zn = () => ({ name: 'Dates', value: 8217 }),
        Un = () => ({ name: 'Displays', value: 12555 }),
        qn = () => ({ name: 'Filter', value: 2324 }),
        wn = () => ({ name: 'Geometry', value: 10993 }),
        Nn = () => ({ name: 'FibonacciHeap', value: 9354 }),
        Wn = () => ({ name: 'HeapNode', value: 1233 }),
        Zn = (a, l) => [a, l],
        Gn = (a) => ({ name: 'heap', children: a }),
        Yn = () => ({ name: 'IEvaluable', value: 335 }),
        Qn = () => ({ name: 'IPredicate', value: 383 }),
        Hn = () => ({ name: 'IValueProxy', value: 874 }),
        Jn = () => ({ name: 'DenseMatrix', value: 3165 }),
        jn = () => ({ name: 'IMatrix', value: 2815 }),
        kn = () => ({ name: 'SparseMatrix', value: 3366 }),
        Xn = (a) => ({ name: 'math', children: a }),
        $n = () => ({ name: 'Maths', value: 17705 }),
        et = () => ({ name: 'Orientation', value: 1486 }),
        at = () => ({ name: 'ColorPalette', value: 6367 }),
        nt = () => ({ name: 'Palette', value: 1229 }),
        tt = () => ({ name: 'ShapePalette', value: 2059 }),
        ot = () => ({ name: 'SizePalette', value: 2291 }),
        lt = (a) => ({ name: 'palette', children: a }),
        ct = () => ({ name: 'Property', value: 5559 }),
        mt = () => ({ name: 'Shapes', value: 19118 }),
        it = () => ({ name: 'Sort', value: 6887 }),
        rt = () => ({ name: 'Stats', value: 6557 }),
        st = () => ({ name: 'Strings', value: 22026 }),
        ut = (a, l, t, c, m, s, i, v, M, g, y, f, L, A, b, R, F, K, B) => [
          a,
          l,
          t,
          c,
          m,
          s,
          i,
          v,
          M,
          g,
          y,
          f,
          L,
          A,
          b,
          R,
          F,
          K,
          B,
        ],
        vt = (a) => ({ name: 'util', collapsed: !0, children: a }),
        dt = () => ({ name: 'Axes', value: 1302 }),
        _t = () => ({ name: 'Axis', value: 24593 }),
        Dt = () => ({ name: 'AxisGridLine', value: 652 }),
        ht = () => ({ name: 'AxisLabel', value: 636 }),
        Mt = () => ({ name: 'CartesianAxes', value: 6703 }),
        pt = (a) => ({ name: 'axis', children: a }),
        gt = () => ({ name: 'AnchorControl', value: 2138 }),
        St = () => ({ name: 'ClickControl', value: 3824 }),
        yt = () => ({ name: 'Control', value: 1353 }),
        Tt = () => ({ name: 'ControlList', value: 4665 }),
        Ct = () => ({ name: 'DragControl', value: 2649 }),
        Et = () => ({ name: 'ExpandControl', value: 2832 }),
        ft = () => ({ name: 'HoverControl', value: 4896 }),
        Ot = () => ({ name: 'IControl', value: 763 }),
        Lt = () => ({ name: 'PanZoomControl', value: 5222 }),
        At = () => ({ name: 'SelectionControl', value: 7862 }),
        bt = () => ({ name: 'TooltipControl', value: 8435 }),
        $ = (a, l, t, c, m, s, i, v, M, g, y) => [
          a,
          l,
          t,
          c,
          m,
          s,
          i,
          v,
          M,
          g,
          y,
        ],
        Pt = (a) => ({ name: 'controls', children: a }),
        xt = () => ({ name: 'Data', value: 20544 }),
        It = () => ({ name: 'DataList', value: 19788 }),
        Rt = () => ({ name: 'DataSprite', value: 10349 }),
        Ft = () => ({ name: 'EdgeSprite', value: 3301 }),
        Kt = () => ({ name: 'NodeSprite', value: 19382 }),
        Bt = () => ({ name: 'ArrowType', value: 698 }),
        Vt = () => ({ name: 'EdgeRenderer', value: 5569 }),
        zt = () => ({ name: 'IRenderer', value: 353 }),
        Ut = () => ({ name: 'ShapeRenderer', value: 2247 }),
        qt = (a) => ({ name: 'render', children: a }),
        wt = () => ({ name: 'ScaleBinding', value: 11275 }),
        Nt = () => ({ name: 'Tree', value: 7147 }),
        Wt = () => ({ name: 'TreeBuilder', value: 9930 }),
        Zt = (a) => ({ name: 'data', children: a }),
        Gt = () => ({ name: 'DataEvent', value: 2313 }),
        Yt = () => ({ name: 'SelectionEvent', value: 1880 }),
        Qt = () => ({ name: 'TooltipEvent', value: 1701 }),
        Ht = () => ({ name: 'VisualizationEvent', value: 1117 }),
        Jt = (a) => ({ name: 'events', children: a }),
        jt = () => ({ name: 'Legend', value: 20859 }),
        kt = () => ({ name: 'LegendItem', value: 4614 }),
        Xt = () => ({ name: 'LegendRange', value: 10530 }),
        $t = (a) => ({ name: 'legend', children: a }),
        eo = () => ({ name: 'BifocalDistortion', value: 4461 }),
        ao = () => ({ name: 'Distortion', value: 6314 }),
        no = () => ({ name: 'FisheyeDistortion', value: 3444 }),
        to = (a) => ({ name: 'distortion', children: a }),
        oo = () => ({ name: 'ColorEncoder', value: 3179 }),
        lo = () => ({ name: 'Encoder', value: 4060 }),
        co = () => ({ name: 'PropertyEncoder', value: 4138 }),
        mo = () => ({ name: 'ShapeEncoder', value: 1690 }),
        io = () => ({ name: 'SizeEncoder', value: 1830 }),
        ro = (a) => ({ name: 'encoder', children: a }),
        so = () => ({ name: 'FisheyeTreeFilter', value: 5219 }),
        uo = () => ({ name: 'GraphDistanceFilter', value: 3165 }),
        vo = () => ({ name: 'VisibilityFilter', value: 3509 }),
        _o = (a) => ({ name: 'filter', children: a }),
        Do = () => ({ name: 'IOperator', value: 1286 }),
        ho = () => ({ name: 'Labeler', value: 9956 }),
        Mo = () => ({ name: 'RadialLabeler', value: 3899 }),
        po = () => ({ name: 'StackedAreaLabeler', value: 3202 }),
        go = (a) => ({ name: 'label', children: a }),
        So = () => ({ name: 'AxisLayout', value: 6725 }),
        yo = () => ({ name: 'BundledEdgeRouter', value: 3727 }),
        To = () => ({ name: 'CircleLayout', value: 9317 }),
        Co = () => ({ name: 'CirclePackingLayout', value: 12003 }),
        Eo = () => ({ name: 'DendrogramLayout', value: 4853 }),
        fo = () => ({ name: 'ForceDirectedLayout', value: 8411 }),
        Oo = () => ({ name: 'IcicleTreeLayout', value: 4864 }),
        Lo = () => ({ name: 'IndentedTreeLayout', value: 3174 }),
        Ao = () => ({ name: 'Layout', value: 7881 }),
        bo = () => ({ name: 'NodeLinkTreeLayout', value: 12870 }),
        Po = () => ({ name: 'PieLayout', value: 2728 }),
        xo = () => ({ name: 'RadialTreeLayout', value: 12348 }),
        Io = () => ({ name: 'RandomLayout', value: 870 }),
        Ro = () => ({ name: 'StackedAreaLayout', value: 9121 }),
        Fo = () => ({ name: 'TreeMapLayout', value: 9191 }),
        Ko = (a, l, t, c, m, s, i, v, M, g, y, f, L, A, b) => [
          a,
          l,
          t,
          c,
          m,
          s,
          i,
          v,
          M,
          g,
          y,
          f,
          L,
          A,
          b,
        ],
        Bo = (a) => ({ name: 'layout', children: a }),
        Vo = () => ({ name: 'Operator', value: 2490 }),
        zo = () => ({ name: 'OperatorList', value: 5248 }),
        Uo = () => ({ name: 'OperatorSequence', value: 4190 }),
        qo = () => ({ name: 'OperatorSwitch', value: 2581 }),
        wo = () => ({ name: 'SortOperator', value: 2023 }),
        No = (a) => ({ name: 'operator', children: a }),
        Wo = () => ({ name: 'Visualization', value: 16540 }),
        Zo = (a) => ({ name: 'vis', children: a }),
        Go = (a) => ({ name: 'flare', children: a }),
        Yo = () => ({
          padding: 5,
          fontSize: 9,
          distance: 5,
          position: 'right',
        }),
        Qo = (a) => ({ label: a }),
        Ho = () => ({
          padding: 5,
          borderRadius: 10,
          fontSize: 9,
          distance: 5,
          position: 'left',
        });
      let Jo = (() => {
        class a {
          _cdr;
          themeSelector;
          themes = (0, _.RC)();
          selectedTheme;
          data = [
            {
              name: 'flare',
              children: [
                {
                  name: 'analytics',
                  children: [
                    {
                      name: 'cluster',
                      children: [
                        { name: 'AgglomerativeCluster', value: 3938 },
                        { name: 'CommunityStructure', value: 3812 },
                        { name: 'HierarchicalCluster', value: 6714 },
                        { name: 'MergeEdge', value: 743 },
                      ],
                    },
                    {
                      name: 'graph',
                      children: [
                        { name: 'BetweennessCentrality', value: 3534 },
                        { name: 'LinkDistance', value: 5731 },
                        { name: 'MaxFlowMinCut', value: 7840 },
                        { name: 'ShortestPaths', value: 5914 },
                        { name: 'SpanningTree', value: 3416 },
                      ],
                    },
                    {
                      name: 'optimization',
                      children: [{ name: 'AspectRatioBanker', value: 7074 }],
                    },
                  ],
                },
                {
                  name: 'animate',
                  children: [
                    { name: 'Easing', value: 17010 },
                    { name: 'FunctionSequence', value: 5842 },
                    {
                      name: 'interpolate',
                      children: [
                        { name: 'ArrayInterpolator', value: 1983 },
                        { name: 'ColorInterpolator', value: 2047 },
                        { name: 'DateInterpolator', value: 1375 },
                        { name: 'Interpolator', value: 8746 },
                        { name: 'MatrixInterpolator', value: 2202 },
                        { name: 'NumberInterpolator', value: 1382 },
                        { name: 'ObjectInterpolator', value: 1629 },
                        { name: 'PointInterpolator', value: 1675 },
                        { name: 'RectangleInterpolator', value: 2042 },
                      ],
                    },
                    { name: 'ISchedulable', value: 1041 },
                    { name: 'Parallel', value: 5176 },
                    { name: 'Pause', value: 449 },
                    { name: 'Scheduler', value: 5593 },
                    { name: 'Sequence', value: 5534 },
                    { name: 'Transition', value: 9201 },
                    { name: 'Transitioner', value: 19975 },
                    { name: 'TransitionEvent', value: 1116 },
                    { name: 'Tween', value: 6006 },
                  ],
                },
                {
                  name: 'data',
                  children: [
                    {
                      name: 'converters',
                      children: [
                        { name: 'Converters', value: 721 },
                        { name: 'DelimitedTextConverter', value: 4294 },
                        { name: 'GraphMLConverter', value: 9800 },
                        { name: 'IDataConverter', value: 1314 },
                        { name: 'JSONConverter', value: 2220 },
                      ],
                    },
                    { name: 'DataField', value: 1759 },
                    { name: 'DataSchema', value: 2165 },
                    { name: 'DataSet', value: 586 },
                    { name: 'DataSource', value: 3331 },
                    { name: 'DataTable', value: 772 },
                    { name: 'DataUtil', value: 3322 },
                  ],
                },
                {
                  name: 'display',
                  children: [
                    { name: 'DirtySprite', value: 8833 },
                    { name: 'LineSprite', value: 1732 },
                    { name: 'RectSprite', value: 3623 },
                    { name: 'TextSprite', value: 10066 },
                  ],
                },
                { name: 'flex', children: [{ name: 'FlareVis', value: 4116 }] },
                {
                  name: 'physics',
                  children: [
                    { name: 'DragForce', value: 1082 },
                    { name: 'GravityForce', value: 1336 },
                    { name: 'IForce', value: 319 },
                    { name: 'NBodyForce', value: 10498 },
                    { name: 'Particle', value: 2822 },
                    { name: 'Simulation', value: 9983 },
                    { name: 'Spring', value: 2213 },
                    { name: 'SpringForce', value: 1681 },
                  ],
                },
                {
                  name: 'query',
                  children: [
                    { name: 'AggregateExpression', value: 1616 },
                    { name: 'And', value: 1027 },
                    { name: 'Arithmetic', value: 3891 },
                    { name: 'Average', value: 891 },
                    { name: 'BinaryExpression', value: 2893 },
                    { name: 'Comparison', value: 5103 },
                    { name: 'CompositeExpression', value: 3677 },
                    { name: 'Count', value: 781 },
                    { name: 'DateUtil', value: 4141 },
                    { name: 'Distinct', value: 933 },
                    { name: 'Expression', value: 5130 },
                    { name: 'ExpressionIterator', value: 3617 },
                    { name: 'Fn', value: 3240 },
                    { name: 'If', value: 2732 },
                    { name: 'IsA', value: 2039 },
                    { name: 'Literal', value: 1214 },
                    { name: 'Match', value: 3748 },
                    { name: 'Maximum', value: 843 },
                    {
                      name: 'methods',
                      children: [
                        { name: 'add', value: 593 },
                        { name: 'and', value: 330 },
                        { name: 'average', value: 287 },
                        { name: 'count', value: 277 },
                        { name: 'distinct', value: 292 },
                        { name: 'div', value: 595 },
                        { name: 'eq', value: 594 },
                        { name: 'fn', value: 460 },
                        { name: 'gt', value: 603 },
                        { name: 'gte', value: 625 },
                        { name: 'iff', value: 748 },
                        { name: 'isa', value: 461 },
                        { name: 'lt', value: 597 },
                        { name: 'lte', value: 619 },
                        { name: 'max', value: 283 },
                        { name: 'min', value: 283 },
                        { name: 'mod', value: 591 },
                        { name: 'mul', value: 603 },
                        { name: 'neq', value: 599 },
                        { name: 'not', value: 386 },
                        { name: 'or', value: 323 },
                        { name: 'orderby', value: 307 },
                        { name: 'range', value: 772 },
                        { name: 'select', value: 296 },
                        { name: 'stddev', value: 363 },
                        { name: 'sub', value: 600 },
                        { name: 'sum', value: 280 },
                        { name: 'update', value: 307 },
                        { name: 'variance', value: 335 },
                        { name: 'where', value: 299 },
                        { name: 'xor', value: 354 },
                        { name: '-', value: 264 },
                      ],
                    },
                    { name: 'Minimum', value: 843 },
                    { name: 'Not', value: 1554 },
                    { name: 'Or', value: 970 },
                    { name: 'Query', value: 13896 },
                    { name: 'Range', value: 1594 },
                    { name: 'StringUtil', value: 4130 },
                    { name: 'Sum', value: 791 },
                    { name: 'Variable', value: 1124 },
                    { name: 'Variance', value: 1876 },
                    { name: 'Xor', value: 1101 },
                  ],
                },
                {
                  name: 'scale',
                  children: [
                    { name: 'IScaleMap', value: 2105 },
                    { name: 'LinearScale', value: 1316 },
                    { name: 'LogScale', value: 3151 },
                    { name: 'OrdinalScale', value: 3770 },
                    { name: 'QuantileScale', value: 2435 },
                    { name: 'QuantitativeScale', value: 4839 },
                    { name: 'RootScale', value: 1756 },
                    { name: 'Scale', value: 4268 },
                    { name: 'ScaleType', value: 1821 },
                    { name: 'TimeScale', value: 5833 },
                  ],
                },
                {
                  name: 'util',
                  children: [
                    { name: 'Arrays', value: 8258 },
                    { name: 'Colors', value: 10001 },
                    { name: 'Dates', value: 8217 },
                    { name: 'Displays', value: 12555 },
                    { name: 'Filter', value: 2324 },
                    { name: 'Geometry', value: 10993 },
                    {
                      name: 'heap',
                      children: [
                        { name: 'FibonacciHeap', value: 9354 },
                        { name: 'HeapNode', value: 1233 },
                      ],
                    },
                    { name: 'IEvaluable', value: 335 },
                    { name: 'IPredicate', value: 383 },
                    { name: 'IValueProxy', value: 874 },
                    {
                      name: 'math',
                      children: [
                        { name: 'DenseMatrix', value: 3165 },
                        { name: 'IMatrix', value: 2815 },
                        { name: 'SparseMatrix', value: 3366 },
                      ],
                    },
                    { name: 'Maths', value: 17705 },
                    { name: 'Orientation', value: 1486 },
                    {
                      name: 'palette',
                      children: [
                        { name: 'ColorPalette', value: 6367 },
                        { name: 'Palette', value: 1229 },
                        { name: 'ShapePalette', value: 2059 },
                        { name: 'SizePalette', value: 2291 },
                      ],
                    },
                    { name: 'Property', value: 5559 },
                    { name: 'Shapes', value: 19118 },
                    { name: 'Sort', value: 6887 },
                    { name: 'Stats', value: 6557 },
                    { name: 'Strings', value: 22026 },
                  ],
                },
                {
                  name: 'vis',
                  children: [
                    {
                      name: 'axis',
                      children: [
                        { name: 'Axes', value: 1302 },
                        { name: 'Axis', value: 24593 },
                        { name: 'AxisGridLine', value: 652 },
                        { name: 'AxisLabel', value: 636 },
                        { name: 'CartesianAxes', value: 6703 },
                      ],
                    },
                    {
                      name: 'controls',
                      children: [
                        { name: 'AnchorControl', value: 2138 },
                        { name: 'ClickControl', value: 3824 },
                        { name: 'Control', value: 1353 },
                        { name: 'ControlList', value: 4665 },
                        { name: 'DragControl', value: 2649 },
                        { name: 'ExpandControl', value: 2832 },
                        { name: 'HoverControl', value: 4896 },
                        { name: 'IControl', value: 763 },
                        { name: 'PanZoomControl', value: 5222 },
                        { name: 'SelectionControl', value: 7862 },
                        { name: 'TooltipControl', value: 8435 },
                      ],
                    },
                    {
                      name: 'data',
                      children: [
                        { name: 'Data', value: 20544 },
                        { name: 'DataList', value: 19788 },
                        { name: 'DataSprite', value: 10349 },
                        { name: 'EdgeSprite', value: 3301 },
                        { name: 'NodeSprite', value: 19382 },
                        {
                          name: 'render',
                          children: [
                            { name: 'ArrowType', value: 698 },
                            { name: 'EdgeRenderer', value: 5569 },
                            { name: 'IRenderer', value: 353 },
                            { name: 'ShapeRenderer', value: 2247 },
                          ],
                        },
                        { name: 'ScaleBinding', value: 11275 },
                        { name: 'Tree', value: 7147 },
                        { name: 'TreeBuilder', value: 9930 },
                      ],
                    },
                    {
                      name: 'events',
                      children: [
                        { name: 'DataEvent', value: 2313 },
                        { name: 'SelectionEvent', value: 1880 },
                        { name: 'TooltipEvent', value: 1701 },
                        { name: 'VisualizationEvent', value: 1117 },
                      ],
                    },
                    {
                      name: 'legend',
                      children: [
                        { name: 'Legend', value: 20859 },
                        { name: 'LegendItem', value: 4614 },
                        { name: 'LegendRange', value: 10530 },
                      ],
                    },
                    {
                      name: 'operator',
                      children: [
                        {
                          name: 'distortion',
                          children: [
                            { name: 'BifocalDistortion', value: 4461 },
                            { name: 'Distortion', value: 6314 },
                            { name: 'FisheyeDistortion', value: 3444 },
                          ],
                        },
                        {
                          name: 'encoder',
                          children: [
                            { name: 'ColorEncoder', value: 3179 },
                            { name: 'Encoder', value: 4060 },
                            { name: 'PropertyEncoder', value: 4138 },
                            { name: 'ShapeEncoder', value: 1690 },
                            { name: 'SizeEncoder', value: 1830 },
                          ],
                        },
                        {
                          name: 'filter',
                          children: [
                            { name: 'FisheyeTreeFilter', value: 5219 },
                            { name: 'GraphDistanceFilter', value: 3165 },
                            { name: 'VisibilityFilter', value: 3509 },
                          ],
                        },
                        { name: 'IOperator', value: 1286 },
                        {
                          name: 'label',
                          children: [
                            { name: 'Labeler', value: 9956 },
                            { name: 'RadialLabeler', value: 3899 },
                            { name: 'StackedAreaLabeler', value: 3202 },
                          ],
                        },
                        {
                          name: 'layout',
                          children: [
                            { name: 'AxisLayout', value: 6725 },
                            { name: 'BundledEdgeRouter', value: 3727 },
                            { name: 'CircleLayout', value: 9317 },
                            { name: 'CirclePackingLayout', value: 12003 },
                            { name: 'DendrogramLayout', value: 4853 },
                            { name: 'ForceDirectedLayout', value: 8411 },
                            { name: 'IcicleTreeLayout', value: 4864 },
                            { name: 'IndentedTreeLayout', value: 3174 },
                            { name: 'Layout', value: 7881 },
                            { name: 'NodeLinkTreeLayout', value: 12870 },
                            { name: 'PieLayout', value: 2728 },
                            { name: 'RadialTreeLayout', value: 12348 },
                            { name: 'RandomLayout', value: 870 },
                            { name: 'StackedAreaLayout', value: 9121 },
                            { name: 'TreeMapLayout', value: 9191 },
                          ],
                        },
                        { name: 'Operator', value: 2490 },
                        { name: 'OperatorList', value: 5248 },
                        { name: 'OperatorSequence', value: 4190 },
                        { name: 'OperatorSwitch', value: 2581 },
                        { name: 'SortOperator', value: 2023 },
                      ],
                    },
                    { name: 'Visualization', value: 16540 },
                  ],
                },
              ],
            },
          ];
          config = {
            grid: { borderColor: 'transparent' },
            xAxis: { show: !1 },
            yAxis: { show: !1 },
            tooltip: { trigger: 'item', triggerOn: 'mousemove' },
            series: [
              {
                type: 'tree',
                data: this.data,
                top: '10%',
                left: '10%',
                bottom: '10%',
                right: '10%',
                itemStyle: { borderColor: '#F2724B', color: '#F2724B' },
                label: { distance: 5, position: 'left', fontSize: 9 },
                leaves: {
                  label: { distance: 5, fontSize: 9, position: 'right' },
                },
                expandAndCollapse: !0,
                animationDuration: 550,
                animationDurationUpdate: 750,
              },
            ],
          };
          constructor(t, c) {
            (this._cdr = t), (this.themeSelector = c);
          }
          ngOnInit() {
            var t = this;
            return (0, o.Z)(function* () {
              (t.selectedTheme = t.themeSelector.selected),
                t._cdr.markForCheck();
            })();
          }
          selectChartTheme(t) {
            this.themeSelector.select(t);
          }
          static ɵfac = function (c) {
            return new (c || a)(e.Y36(e.sBO), e.Y36(p.n));
          };
          static ɵcmp = e.Xpm({
            type: a,
            selectors: [['tree-demo-basic']],
            decls: 11,
            vars: 590,
            consts: [
              ['layout', 'row', 'layout-align', 'start center'],
              [
                'hide-xs',
                '',
                1,
                'mat-subtitle-1',
                'pad-left',
                'pad-right',
                'push-bottom-none',
              ],
              [3, 'value', 'valueChange'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              [3, 'themeName'],
              [3, 'trigger'],
              ['tdTooltipFormatter', ''],
              [
                'td-tree',
                '',
                3,
                'top',
                'left',
                'bottom',
                'right',
                'data',
                'initialTreeDepth',
                'symbolSize',
                'leaves',
                'label',
              ],
              [3, 'value'],
              [4, 'ngIf'],
              [1, 'push-right-sm'],
              [1, 'tc-blue-300'],
            ],
            template: function (c, m) {
              1 & c &&
                (e.TgZ(0, 'div', 0)(1, 'div', 1),
                e._uU(2, ' Chart Theme: '),
                e.qZA(),
                e.TgZ(3, 'mat-form-field')(4, 'mat-select', 2),
                e.NdJ('valueChange', function (i) {
                  return (m.selectedTheme = i);
                })('valueChange', function (i) {
                  return m.selectChartTheme(i);
                }),
                e.YNc(5, O, 2, 2, 'mat-option', 3),
                e.qZA()()(),
                e.TgZ(6, 'td-chart', 4),
                e.ALo(7, 'async'),
                e.TgZ(8, 'td-chart-tooltip', 5),
                e.YNc(9, ee, 1, 1, 'ng-template', 6),
                e.qZA(),
                e._UZ(10, 'td-chart-series', 7),
                e.qZA()),
                2 & c &&
                  (e.xp6(4),
                  e.Q6J('value', m.selectedTheme),
                  e.xp6(1),
                  e.Q6J('ngForOf', m.themes),
                  e.xp6(1),
                  e.Udp('height', 800, 'px'),
                  e.Q6J('themeName', e.lcZ(7, 15, m.themeSelector.selected$)),
                  e.xp6(2),
                  e.Q6J('trigger', 'item'),
                  e.xp6(2),
                  e.Q6J('top', '10%')('left', '10%')('bottom', '10%')(
                    'right',
                    '30%'
                  )(
                    'data',
                    e.VKq(
                      584,
                      U,
                      e.VKq(
                        582,
                        Go,
                        e.rFY(571, X, [
                          e.VKq(
                            50,
                            _e,
                            e.kEZ(
                              46,
                              P,
                              e.VKq(
                                26,
                                le,
                                e.l5B(
                                  21,
                                  I,
                                  e.DdM(17, ae),
                                  e.DdM(18, ne),
                                  e.DdM(19, te),
                                  e.DdM(20, oe)
                                )
                              ),
                              e.VKq(
                                39,
                                ue,
                                e.qbA(
                                  33,
                                  z,
                                  e.DdM(28, ce),
                                  e.DdM(29, me),
                                  e.DdM(30, ie),
                                  e.DdM(31, re),
                                  e.DdM(32, se)
                                )
                              ),
                              e.VKq(44, de, e.VKq(42, U, e.DdM(41, ve)))
                            )
                          ),
                          e.VKq(
                            97,
                            Ve,
                            e.rFY(84, Be, [
                              e.DdM(52, De),
                              e.DdM(53, he),
                              e.VKq(
                                73,
                                Oe,
                                e.rFY(63, j, [
                                  e.DdM(54, Me),
                                  e.DdM(55, pe),
                                  e.DdM(56, ge),
                                  e.DdM(57, Se),
                                  e.DdM(58, ye),
                                  e.DdM(59, Te),
                                  e.DdM(60, Ce),
                                  e.DdM(61, Ee),
                                  e.DdM(62, fe),
                                ])
                              ),
                              e.DdM(75, Le),
                              e.DdM(76, Ae),
                              e.DdM(77, be),
                              e.DdM(78, Pe),
                              e.DdM(79, xe),
                              e.DdM(80, Ie),
                              e.DdM(81, Re),
                              e.DdM(82, Fe),
                              e.DdM(83, Ke),
                            ])
                          ),
                          e.VKq(
                            126,
                            je,
                            e.Hh0(
                              118,
                              k,
                              e.VKq(
                                110,
                                We,
                                e.qbA(
                                  104,
                                  z,
                                  e.DdM(99, ze),
                                  e.DdM(100, Ue),
                                  e.DdM(101, qe),
                                  e.DdM(102, we),
                                  e.DdM(103, Ne)
                                )
                              ),
                              e.DdM(112, Ze),
                              e.DdM(113, Ge),
                              e.DdM(114, Ye),
                              e.DdM(115, Qe),
                              e.DdM(116, He),
                              e.DdM(117, Je)
                            )
                          ),
                          e.VKq(
                            137,
                            aa,
                            e.l5B(
                              132,
                              I,
                              e.DdM(128, ke),
                              e.DdM(129, Xe),
                              e.DdM(130, $e),
                              e.DdM(131, ea)
                            )
                          ),
                          e.VKq(142, ta, e.VKq(140, U, e.DdM(139, na))),
                          e.VKq(
                            161,
                            da,
                            e.qlk(
                              152,
                              va,
                              e.DdM(144, oa),
                              e.DdM(145, la),
                              e.DdM(146, ca),
                              e.DdM(147, ma),
                              e.DdM(148, ia),
                              e.DdM(149, ra),
                              e.DdM(150, sa),
                              e.DdM(151, ua)
                            )
                          ),
                          e.VKq(
                            288,
                            En,
                            e.rFY(258, Cn, [
                              e.DdM(163, _a),
                              e.DdM(164, Da),
                              e.DdM(165, ha),
                              e.DdM(166, Ma),
                              e.DdM(167, pa),
                              e.DdM(168, ga),
                              e.DdM(169, Sa),
                              e.DdM(170, ya),
                              e.DdM(171, Ta),
                              e.DdM(172, Ca),
                              e.DdM(173, Ea),
                              e.DdM(174, fa),
                              e.DdM(175, Oa),
                              e.DdM(176, La),
                              e.DdM(177, Aa),
                              e.DdM(178, ba),
                              e.DdM(179, Pa),
                              e.DdM(180, xa),
                              e.VKq(
                                246,
                                vn,
                                e.rFY(213, un, [
                                  e.DdM(181, Ia),
                                  e.DdM(182, Ra),
                                  e.DdM(183, Fa),
                                  e.DdM(184, Ka),
                                  e.DdM(185, Ba),
                                  e.DdM(186, Va),
                                  e.DdM(187, za),
                                  e.DdM(188, Ua),
                                  e.DdM(189, qa),
                                  e.DdM(190, wa),
                                  e.DdM(191, Na),
                                  e.DdM(192, Wa),
                                  e.DdM(193, Za),
                                  e.DdM(194, Ga),
                                  e.DdM(195, Ya),
                                  e.DdM(196, Qa),
                                  e.DdM(197, Ha),
                                  e.DdM(198, Ja),
                                  e.DdM(199, ja),
                                  e.DdM(200, ka),
                                  e.DdM(201, Xa),
                                  e.DdM(202, $a),
                                  e.DdM(203, en),
                                  e.DdM(204, an),
                                  e.DdM(205, nn),
                                  e.DdM(206, tn),
                                  e.DdM(207, on),
                                  e.DdM(208, ln),
                                  e.DdM(209, cn),
                                  e.DdM(210, mn),
                                  e.DdM(211, rn),
                                  e.DdM(212, sn),
                                ])
                              ),
                              e.DdM(248, dn),
                              e.DdM(249, _n),
                              e.DdM(250, Dn),
                              e.DdM(251, hn),
                              e.DdM(252, Mn),
                              e.DdM(253, pn),
                              e.DdM(254, gn),
                              e.DdM(255, Sn),
                              e.DdM(256, yn),
                              e.DdM(257, Tn),
                            ])
                          ),
                          e.VKq(
                            311,
                            Kn,
                            e.rFY(300, X, [
                              e.DdM(290, fn),
                              e.DdM(291, On),
                              e.DdM(292, Ln),
                              e.DdM(293, An),
                              e.DdM(294, bn),
                              e.DdM(295, Pn),
                              e.DdM(296, xn),
                              e.DdM(297, In),
                              e.DdM(298, Rn),
                              e.DdM(299, Fn),
                            ])
                          ),
                          e.VKq(
                            376,
                            vt,
                            e.rFY(356, ut, [
                              e.DdM(313, Bn),
                              e.DdM(314, Vn),
                              e.DdM(315, zn),
                              e.DdM(316, Un),
                              e.DdM(317, qn),
                              e.DdM(318, wn),
                              e.VKq(
                                324,
                                Gn,
                                e.WLB(321, Zn, e.DdM(319, Nn), e.DdM(320, Wn))
                              ),
                              e.DdM(326, Yn),
                              e.DdM(327, Qn),
                              e.DdM(328, Hn),
                              e.VKq(
                                336,
                                Xn,
                                e.kEZ(
                                  332,
                                  P,
                                  e.DdM(329, Jn),
                                  e.DdM(330, jn),
                                  e.DdM(331, kn)
                                )
                              ),
                              e.DdM(338, $n),
                              e.DdM(339, et),
                              e.VKq(
                                349,
                                lt,
                                e.l5B(
                                  344,
                                  I,
                                  e.DdM(340, at),
                                  e.DdM(341, nt),
                                  e.DdM(342, tt),
                                  e.DdM(343, ot)
                                )
                              ),
                              e.DdM(351, ct),
                              e.DdM(352, mt),
                              e.DdM(353, it),
                              e.DdM(354, rt),
                              e.DdM(355, st),
                            ])
                          ),
                          e.VKq(
                            569,
                            Zo,
                            e.Hh0(
                              561,
                              k,
                              e.VKq(
                                389,
                                pt,
                                e.qbA(
                                  383,
                                  z,
                                  e.DdM(378, dt),
                                  e.DdM(379, _t),
                                  e.DdM(380, Dt),
                                  e.DdM(381, ht),
                                  e.DdM(382, Mt)
                                )
                              ),
                              e.VKq(
                                414,
                                Pt,
                                e.rFY(402, $, [
                                  e.DdM(391, gt),
                                  e.DdM(392, St),
                                  e.DdM(393, yt),
                                  e.DdM(394, Tt),
                                  e.DdM(395, Ct),
                                  e.DdM(396, Et),
                                  e.DdM(397, ft),
                                  e.DdM(398, Ot),
                                  e.DdM(399, Lt),
                                  e.DdM(400, At),
                                  e.DdM(401, bt),
                                ])
                              ),
                              e.VKq(
                                445,
                                Zt,
                                e.rFY(435, j, [
                                  e.DdM(416, xt),
                                  e.DdM(417, It),
                                  e.DdM(418, Rt),
                                  e.DdM(419, Ft),
                                  e.DdM(420, Kt),
                                  e.VKq(
                                    430,
                                    qt,
                                    e.l5B(
                                      425,
                                      I,
                                      e.DdM(421, Bt),
                                      e.DdM(422, Vt),
                                      e.DdM(423, zt),
                                      e.DdM(424, Ut)
                                    )
                                  ),
                                  e.DdM(432, wt),
                                  e.DdM(433, Nt),
                                  e.DdM(434, Wt),
                                ])
                              ),
                              e.VKq(
                                456,
                                Jt,
                                e.l5B(
                                  451,
                                  I,
                                  e.DdM(447, Gt),
                                  e.DdM(448, Yt),
                                  e.DdM(449, Qt),
                                  e.DdM(450, Ht)
                                )
                              ),
                              e.VKq(
                                465,
                                $t,
                                e.kEZ(
                                  461,
                                  P,
                                  e.DdM(458, jt),
                                  e.DdM(459, kt),
                                  e.DdM(460, Xt)
                                )
                              ),
                              e.VKq(
                                558,
                                No,
                                e.rFY(546, $, [
                                  e.VKq(
                                    474,
                                    to,
                                    e.kEZ(
                                      470,
                                      P,
                                      e.DdM(467, eo),
                                      e.DdM(468, ao),
                                      e.DdM(469, no)
                                    )
                                  ),
                                  e.VKq(
                                    487,
                                    ro,
                                    e.qbA(
                                      481,
                                      z,
                                      e.DdM(476, oo),
                                      e.DdM(477, lo),
                                      e.DdM(478, co),
                                      e.DdM(479, mo),
                                      e.DdM(480, io)
                                    )
                                  ),
                                  e.VKq(
                                    496,
                                    _o,
                                    e.kEZ(
                                      492,
                                      P,
                                      e.DdM(489, so),
                                      e.DdM(490, uo),
                                      e.DdM(491, vo)
                                    )
                                  ),
                                  e.DdM(498, Do),
                                  e.VKq(
                                    506,
                                    go,
                                    e.kEZ(
                                      502,
                                      P,
                                      e.DdM(499, ho),
                                      e.DdM(500, Mo),
                                      e.DdM(501, po)
                                    )
                                  ),
                                  e.VKq(
                                    539,
                                    Bo,
                                    e.rFY(523, Ko, [
                                      e.DdM(508, So),
                                      e.DdM(509, yo),
                                      e.DdM(510, To),
                                      e.DdM(511, Co),
                                      e.DdM(512, Eo),
                                      e.DdM(513, fo),
                                      e.DdM(514, Oo),
                                      e.DdM(515, Lo),
                                      e.DdM(516, Ao),
                                      e.DdM(517, bo),
                                      e.DdM(518, Po),
                                      e.DdM(519, xo),
                                      e.DdM(520, Io),
                                      e.DdM(521, Ro),
                                      e.DdM(522, Fo),
                                    ])
                                  ),
                                  e.DdM(541, Vo),
                                  e.DdM(542, zo),
                                  e.DdM(543, Uo),
                                  e.DdM(544, qo),
                                  e.DdM(545, wo),
                                ])
                              ),
                              e.DdM(560, Wo)
                            )
                          ),
                        ])
                      )
                    )
                  )('initialTreeDepth', 2)('symbolSize', 10)(
                    'leaves',
                    e.VKq(587, Qo, e.DdM(586, Yo))
                  )('label', e.DdM(589, Ho)));
            },
            dependencies: [
              D.L,
              u.HN,
              u.dA,
              C.o,
              r.sg,
              r.O5,
              E.KE,
              h.gD,
              d.ey,
              T.Hw,
              r.Ov,
            ],
            styles: ['[_nghost-%COMP%]{width:100%}'],
            changeDetection: 0,
          });
        }
        return a;
      })();
    },
    99275: (x, S, n) => {
      n.d(S, { V: () => E });
      var o = n(96814),
        _ = n(98525),
        p = n(30617),
        e = n(23421),
        D = n(57337),
        u = n(52514),
        C = n(90305),
        r = n(19212);
      let E = (() => {
        class h {
          static ɵfac = function (O) {
            return new (O || h)();
          };
          static ɵmod = r.oAB({ type: h });
          static ɵinj = r.cJS({
            imports: [e.MX, D.NF, u.Po, C.u5, o.ez, _.LD, p.Ps],
          });
        }
        return h;
      })();
    },
    52514: (x, S, n) => {
      n.d(S, { Po: () => D });
      var o = n(96814),
        p = (n(13063), n(19212));
      let D = (() => {
        class u {
          static ɵfac = function (E) {
            return new (E || u)();
          };
          static ɵmod = p.oAB({ type: u });
          static ɵinj = p.cJS({ imports: [o.ez] });
        }
        return u;
      })();
    },
    13063: (x, S, n) => {
      n.d(S, { G: () => u, O: () => C });
      var o = n(19212),
        _ = n(23421),
        p = n(96814);
      const e = ['toolboxContent'];
      function D(r, E) {}
      let u = (() => {
          class r {
            static ɵfac = function (d) {
              return new (d || r)();
            };
            static ɵdir = o.lG2({
              type: r,
              selectors: [['ng-template', 'tdViewDataFormatter', '']],
            });
          }
          return r;
        })(),
        C = (() => {
          class r {
            _changeDetectorRef;
            _elementRef;
            _optionsService;
            _state = {};
            config = {};
            show = !0;
            trigger;
            orient;
            itemSize;
            itemGap;
            showTitle = !0;
            label;
            feature;
            iconStyle;
            zlevel;
            z;
            transitionDuration = 0.5;
            left = 'auto';
            top = 'auto';
            right = 'auto';
            bottom = 'auto';
            width = 'auto';
            height = 'auto';
            formatterTemplate;
            fullTemplate;
            constructor(h, d, T) {
              (this._changeDetectorRef = h),
                (this._elementRef = d),
                (this._optionsService = T);
            }
            ngOnChanges() {
              this._setOptions();
            }
            ngOnDestroy() {
              this._removeOption();
            }
            _setOptions() {
              this._checkFormatterTemplate();
              const h = (0, _.t8)(
                this._state,
                {
                  show: this.show,
                  name: this.trigger,
                  orient: this.orient,
                  itemSize: this.itemSize,
                  itemGap: this.itemGap,
                  showTitle: this.showTitle,
                  label: this.label,
                  feature: this.feature,
                  iconStyle: this.iconStyle,
                  zlevel: this.zlevel,
                  z: this.z,
                  transitionDuration: this.transitionDuration,
                  left: this.left,
                  top: this.top,
                  right: this.right,
                  bottom: this.bottom,
                  width: this.width,
                  height: this.height,
                },
                this.config ? this.config : {}
              );
              this._optionsService.setOption('toolbox', h);
            }
            _removeOption() {
              this._optionsService.clearOption('toolbox');
            }
            _checkFormatterTemplate() {
              this.formatterTemplate &&
                (this.feature = {
                  ...this.feature,
                  dataView: {
                    ...this.feature?.dataView,
                    optionToContent: this._optionToContentFormatter(),
                  },
                });
            }
            _optionToContentFormatter() {
              return () => (
                this._changeDetectorRef.markForCheck(),
                this._elementRef.nativeElement.innerHTML
              );
            }
            static ɵfac = function (d) {
              return new (d || r)(o.Y36(o.sBO), o.Y36(o.SBq), o.Y36(_.ij));
            };
            static ɵcmp = o.Xpm({
              type: r,
              selectors: [['td-chart-toolbox']],
              contentQueries: function (d, T, O) {
                if ((1 & d && o.Suo(O, u, 5, o.Rgc), 2 & d)) {
                  let V;
                  o.iGM((V = o.CRH())) && (T.formatterTemplate = V.first);
                }
              },
              viewQuery: function (d, T) {
                if ((1 & d && o.Gf(e, 7), 2 & d)) {
                  let O;
                  o.iGM((O = o.CRH())) && (T.fullTemplate = O.first);
                }
              },
              inputs: {
                config: 'config',
                show: 'show',
                trigger: 'trigger',
                orient: 'orient',
                itemSize: 'itemSize',
                itemGap: 'itemGap',
                showTitle: 'showTitle',
                label: 'label',
                feature: 'feature',
                iconStyle: 'iconStyle',
                zlevel: 'zlevel',
                z: 'z',
                transitionDuration: 'transitionDuration',
                left: 'left',
                top: 'top',
                right: 'right',
                bottom: 'bottom',
                width: 'width',
                height: 'height',
              },
              features: [o.TTD],
              decls: 2,
              vars: 1,
              consts: [
                [3, 'ngTemplateOutlet'],
                ['toolboxContent', ''],
              ],
              template: function (d, T) {
                1 & d && o.YNc(0, D, 0, 0, 'ng-template', 0, 1, o.W1O),
                  2 & d && o.Q6J('ngTemplateOutlet', T.formatterTemplate);
              },
              dependencies: [p.tP],
              encapsulation: 2,
              changeDetection: 0,
            });
          }
          return r;
        })();
    },
    90305: (x, S, n) => {
      n.d(S, { u5: () => D });
      var o = n(96814),
        p = (n(58956), n(19212));
      let D = (() => {
        class u {
          static ɵfac = function (E) {
            return new (E || u)();
          };
          static ɵmod = p.oAB({ type: u });
          static ɵinj = p.cJS({ imports: [o.ez] });
        }
        return u;
      })();
    },
    58956: (x, S, n) => {
      n.d(S, { o: () => e });
      var o = n(19212),
        _ = n(23421);
      const p = ['td-tree', ''];
      let e = (() => {
        class D extends _.R0 {
          zlevel;
          z;
          left;
          top;
          right;
          bottom;
          width;
          height;
          layout;
          orient;
          symbol;
          symbolSize;
          symbolRotate;
          symbolKeepAspect;
          roam;
          expandAndCollapse;
          initialTreeDepth;
          itemStyle;
          label;
          lineStyle;
          leaves;
          emphasis;
          constructor(C) {
            super('tree', C);
          }
          getConfig() {
            return {
              zlevel: this.zlevel,
              z: this.z,
              left: this.left,
              top: this.top,
              right: this.right,
              bottom: this.bottom,
              width: this.width,
              height: this.height,
              layout: this.layout,
              orient: this.orient,
              symbol: this.symbol,
              symbolSize: this.symbolSize,
              symbolRotate: this.symbolRotate,
              symbolKeepAspect: this.symbolKeepAspect,
              roam: this.roam,
              expandAndCollapse: this.expandAndCollapse,
              initialTreeDepth: this.initialTreeDepth,
              itemStyle: this.itemStyle,
              label: this.label,
              lineStyle: this.lineStyle,
              leaves: this.leaves,
              emphasis: this.emphasis,
            };
          }
          static ɵfac = function (r) {
            return new (r || D)(o.Y36(_.ij));
          };
          static ɵcmp = o.Xpm({
            type: D,
            selectors: [['td-chart-series', 'td-tree', '']],
            inputs: {
              config: 'config',
              id: 'id',
              name: 'name',
              color: 'color',
              data: 'data',
              animation: 'animation',
              animationThreshold: 'animationThreshold',
              animationDuration: 'animationDuration',
              animationEasing: 'animationEasing',
              animationDelay: 'animationDelay',
              animationDurationUpdate: 'animationDurationUpdate',
              animationEasingUpdate: 'animationEasingUpdate',
              animationDelayUpdate: 'animationDelayUpdate',
              tooltip: 'tooltip',
              zlevel: 'zlevel',
              z: 'z',
              left: 'left',
              top: 'top',
              right: 'right',
              bottom: 'bottom',
              width: 'width',
              height: 'height',
              layout: 'layout',
              orient: 'orient',
              symbol: 'symbol',
              symbolSize: 'symbolSize',
              symbolRotate: 'symbolRotate',
              symbolKeepAspect: 'symbolKeepAspect',
              roam: 'roam',
              expandAndCollapse: 'expandAndCollapse',
              initialTreeDepth: 'initialTreeDepth',
              itemStyle: 'itemStyle',
              label: 'label',
              lineStyle: 'lineStyle',
              leaves: 'leaves',
              emphasis: 'emphasis',
            },
            features: [
              o._Bn([{ provide: _.R0, useExisting: (0, o.Gpc)(() => D) }]),
              o.qOj,
            ],
            attrs: p,
            decls: 0,
            vars: 0,
            template: function (r, E) {},
            encapsulation: 2,
            changeDetection: 0,
          });
        }
        return D;
      })();
    },
  },
]);
