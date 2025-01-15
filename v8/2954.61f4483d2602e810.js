"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[2954],{30300:(E,h,e)=>{e.r(h),e.d(h,{DocsModule:()=>V});var u=e(90882),g=e(60177),d=e(2806),m=e(88834),r=e(3902),l=e(99213),i=e(25596),b=e(55911),v=e(21806),F=e(37311),A=e(47091),j=e(88923),y=e(74710),I=e(84843),c=e(17528),p=e(53),t=e(54438),f=e(71997);let k=(()=>{class a{routeAnimation=!0;classAnimation=!0;static \u0275fac=function(o){return new(o||a)};static \u0275cmp=t.VBU({type:a,selectors:[["docs-angular-material"]],hostVars:3,hostBindings:function(o,n){2&o&&(t.zvX("@routeAnimation",n.routeAnimation),t.AVh("td-route-animation",n.classAnimation))},decls:47,vars:0,consts:[[1,"push-bottom-xl"],[1,"push-bottom-sm","mat-h1"],[1,"tc-td-secondary","push-bottom-md"],["mat-button","","color","accent","target","_blank","href","https://v18.material.angular.io/components/categories"],["mat-button","","target","_blank","href","https://github.com/angular/components/releases/tag/18.2.14"],[1,"push-bottom-xxl"],["mat-list-item","","href","https://medium.com/@kyleledbetter/why-we-re-doubling-down-on-material-design-for-our-enterprise-web-apps-ce7d36d498db","target","_blank"],["matListItemIcon",""],["matListItemLine",""],["mat-list-item","","href","https://v18.material.angular.io/","target","_blank"]],template:function(o,n){1&o&&(t.j41(0,"section",0)(1,"h1",1),t.EFF(2,"Angular Material"),t.k0s(),t.j41(3,"p",2),t.EFF(4,"Material Design components"),t.k0s()(),t.j41(5,"section")(6,"h3"),t.EFF(7,"Core Components"),t.k0s(),t.j41(8,"p"),t.EFF(9," The UI Platform is built on top of @angular/material components which are the core of Covalent. "),t.k0s(),t.j41(10,"h3"),t.EFF(11,"New & Custom Components"),t.k0s(),t.j41(12,"p"),t.EFF(13," With the UI Platform and your app usage, we suggest to follow the official material spec as closely as possible for these reasons: "),t.k0s(),t.j41(14,"ul")(15,"li"),t.EFF(16,"So our products remain consistent"),t.k0s(),t.j41(17,"li"),t.EFF(18,"To be able to use public material design resources"),t.k0s(),t.j41(19,"li"),t.EFF(20,"To onboard new hires more easily"),t.k0s(),t.j41(21,"li"),t.EFF(22,"So devs can easily work on multiple products"),t.k0s(),t.j41(23,"li"),t.EFF(24,"To enable easy updates and pull down the latest"),t.k0s()(),t.j41(25,"p"),t.EFF(26," Obviously we'll need to extend and customize material, but when doing so try to submit to the main UI Platform repo and collaborate with others to ensure standards. "),t.k0s(),t.j41(27,"a",3),t.EFF(28," Components "),t.k0s(),t.j41(29,"a",4),t.EFF(30,"Github repo"),t.k0s()(),t.j41(31,"mat-card",5)(32,"mat-card-header")(33,"mat-card-title"),t.EFF(34,"Resources"),t.k0s()(),t.j41(35,"mat-nav-list")(36,"a",6)(37,"mat-icon",7),t.EFF(38,"launch"),t.k0s(),t.j41(39,"span",8),t.EFF(40,"Why Angular Material?"),t.k0s()(),t.nrm(41,"mat-divider"),t.j41(42,"a",9)(43,"mat-icon",7),t.EFF(44,"launch"),t.k0s(),t.j41(45,"span",8),t.EFF(46,"Angular Material Docs Site"),t.k0s()()()())},dependencies:[m.It,r._L,r.YE,r.ZV,f.q,r.C_,l.An,i.RN,i.MM,i.dh],data:{animation:[p.i5]}})}return a})(),C=(()=>{class a{routeAnimation=!0;classAnimation=!0;static \u0275fac=function(o){return new(o||a)};static \u0275cmp=t.VBU({type:a,selectors:[["utility-sass-mixins"]],hostVars:3,hostBindings:function(o,n){2&o&&(t.zvX("@routeAnimation",n.routeAnimation),t.AVh("td-route-animation",n.classAnimation))},decls:1,vars:0,consts:[["resourceUrl","docs/UTILITY_MIXINS.md"]],template:function(o,n){1&o&&t.nrm(0,"td-readme-loader",0)},dependencies:[c.v],data:{animation:[p.i5]}})}return a})();var S=e(54455);const w=y.iI.forChild([{children:[{path:"",redirectTo:"get-started",pathMatch:"full"},{path:"get-started",children:[{path:"",redirectTo:"what-is-covalent",pathMatch:"full"},{path:"overview",component:c.v,data:{resourceUrl:"docs/GETTING_STARTED.md"}},{path:"angular",component:k},{path:"what-is-covalent",component:c.v,data:{resourceUrl:"docs/WHAT_IS_COVALENT.md"}},{path:"web-components",component:c.v,data:{resourceUrl:"docs/COMPONENTS_QUICKSTART.md"}}]},{path:"theming",children:[{path:"",redirectTo:"icon-sets",pathMatch:"full"},{path:"sass-mixins",component:C},{path:"icon-sets",component:(()=>{class a{routeAnimation=!0;classAnimation=!0;iconsHtml="\n  <mat-icon>home</mat-icon> \n  ";svgIconsTypescript="\n  import { DomSanitizer } from '@angular/platform-browser'; \n  import { MatIconRegistry } from '@angular/material/icon';\n  ...\n  ...\n  constructor(private _iconRegistry: MatIconRegistry, private _domSanitizer:DomSanitizer) { \n    this._iconRegistry.addSvgIconInNamespace('assets', 'sun',\n    this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')); \n  } \n  ";svgIconsHtml='\n  <mat-icon svgIcon="assets:sun"></mat-icon>\n  ';static \u0275fac=function(o){return new(o||a)};static \u0275cmp=t.VBU({type:a,selectors:[["docs-icons"]],hostVars:3,hostBindings:function(o,n){2&o&&(t.zvX("@routeAnimation",n.routeAnimation),t.AVh("td-route-animation",n.classAnimation))},decls:32,vars:3,consts:[[1,"push-bottom-xl"],[1,"push-bottom-sm","mat-h1"],[1,"tc-td-secondary","push-bottom-md"],[1,"push-bottom-xxl"],[1,"push-bottom-sm","mat-title"],["codeLang","html"],[1,"push-bottom-lg"],["codeLang","typescript"],["codeLang","html",1,"push-bottom-lg"],["mat-button","","color","accent","target","_blank","href","https://material.io/icons/"]],template:function(o,n){1&o&&(t.j41(0,"section",0)(1,"h1",1),t.EFF(2,"Material Design Icons"),t.k0s(),t.j41(3,"p",2),t.EFF(4,"Access 1000+ SVG or Font icons"),t.k0s()(),t.j41(5,"section",3)(6,"h3",4),t.EFF(7,"Font Icons"),t.k0s(),t.nrm(8,"mat-divider"),t.j41(9,"p"),t.EFF(10,"Font icons using ligatures are the default option and simple to use:"),t.k0s(),t.j41(11,"td-highlight",5),t.EFF(12),t.k0s(),t.j41(13,"p",6),t.EFF(14," which renders "),t.j41(15,"mat-icon"),t.EFF(16,"home"),t.k0s()(),t.j41(17,"h3",4),t.EFF(18,"SVG Icons (from Safe URLS)"),t.k0s(),t.nrm(19,"mat-divider"),t.j41(20,"p"),t.EFF(21," SVG icons have to be sanitized before they can be used with [DomSanitizer] and then icons need to be registered in [MatIconRegistry] so it can be referred later on: "),t.k0s(),t.j41(22,"p"),t.EFF(23,"Typescript:"),t.k0s(),t.j41(24,"td-highlight",7),t.EFF(25),t.k0s(),t.j41(26,"p"),t.EFF(27,"HTML:"),t.k0s(),t.j41(28,"td-highlight",8),t.EFF(29),t.k0s(),t.j41(30,"a",9),t.EFF(31,"Search icons"),t.k0s()()),2&o&&(t.R7$(12),t.SpI(" ",n.iconsHtml," "),t.R7$(13),t.SpI(" ",n.svgIconsTypescript," "),t.R7$(4),t.SpI(" ",n.svgIconsHtml," "))},dependencies:[m.It,f.q,l.An,S.u],data:{animation:[p.i5]}})}return a})()},{path:"custom-theme",component:(()=>{class a{routeAnimation=!0;classAnimation=!0;themeScss='\n  @use \'@angular/material\' as mat;\n\n  // (optional) Additional themes\n  @use "@covalent/markdown/markdown-theme" as markdown;\n  @use "@covalent/highlight/highlight-theme" as highlight;\n  @import "@covalent/flavored-markdown/flavored-markdown-theme";\n\n  // Covalent core themes\n  @import "@covalent/core/theming/all-theme";\n  @import "@covalent/core/theming/teradata-theme";\n\n  // Plus imports for other components in your app.\n\n  @include mat.core();\n\n  // Define a custom typography config that overrides the font-family\n  // or any typography level.\n  $typography: mat.m2-define-typography-config(\n    $font-family: "Inter, monospace",\n    $headline-1: mat.m2-define-typography-level(32px, 48px, 700),\n  );\n\n  // Define the palettes for your theme using the Material Design palettes available in palette.scss\n  // (imported above). For each palette, you can optionally specify a default, lighter, and darker\n  // hue.\n  $primary: mat.m2-define-palette($mat-blue, 700);\n  $accent: mat.m2-define-palette($mat-orange, 800, A100, A400);\n\n  // The warn palette is optional (defaults to red).\n  $warn: mat.m2-define-palette($mat-red, 600);\n\n  // Create the theme object (a Sass map containing all of the palettes).\n  $theme: mat.m2-define-light-theme(\n    (\n      color: (\n        primary: $primary,\n        accent: $accent,\n        warn: $warn,\n      ),\n      typography: $typography,\n    )\n  );\n\n  @include mat.typography-hierarchy($theme, $back-compat: true);\n\n  // Include the Angular Material styles using the custom theme\n  @include mat.all-component-themes($theme);\n\n  // Include theme styles for core and each component used in your app.\n  @include covalent-theme($theme);\n  @include markdown.covalent-markdown-theme($theme);\n  @include covalent-flavored-markdown-theme($theme);\n  @include highlight.covalent-highlight-theme($theme);\n  ';static \u0275fac=function(o){return new(o||a)};static \u0275cmp=t.VBU({type:a,selectors:[["docs-theme"]],hostVars:3,hostBindings:function(o,n){2&o&&(t.zvX("@routeAnimation",n.routeAnimation),t.AVh("td-route-animation",n.classAnimation))},decls:21,vars:1,consts:[[1,"push-bottom-xl"],[1,"push-bottom-sm","mat-h1"],[1,"tc-td-secondary","push-bottom-md"],[1,"push-bottom-xxl"],[1,"push-bottom-sm","mat-title"],["codeLang","scss"],["href","https://m2.material.io/design/color/the-color-system.html","target","_blank"],["mat-button","","color","accent","target","_blank","href","https://v18.material.angular.io/guide/theming"]],template:function(o,n){1&o&&(t.j41(0,"section",0)(1,"h1",1),t.EFF(2,"Custom Theme"),t.k0s(),t.j41(3,"p",2),t.EFF(4," SCSS variables to customize the color scheme "),t.k0s()(),t.j41(5,"section",3)(6,"h3",4),t.EFF(7,"SCSS Variables"),t.k0s(),t.nrm(8,"mat-divider"),t.j41(9,"p"),t.EFF(10,"Simply edit the /theme.scss file and update these SCSS variables:"),t.k0s(),t.j41(11,"td-highlight",5),t.EFF(12),t.k0s(),t.j41(13,"p"),t.EFF(14," Color palettes and hues follow the official "),t.j41(15,"a",6),t.EFF(16,"Material Design Spec"),t.k0s(),t.EFF(17," . "),t.k0s(),t.nrm(18,"mat-divider"),t.j41(19,"a",7),t.EFF(20," Theming docs "),t.k0s()()),2&o&&(t.R7$(12),t.SpI(" ",n.themeScss," "))},dependencies:[m.It,f.q,S.u],styles:[".mat-fab-position-bottom-right[_ngcontent-%COMP%]{bottom:20px}"],data:{animation:[p.i5]}})}return a})()},{path:"web-components",component:c.v,data:{resourceUrl:"docs/COMPONENTS_THEMING.md"}}]}],path:"docs"}]);var U=e(20542);let V=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=t.$C({type:a});static \u0275inj=t.G2t({imports:[g.MD,y.iI,u.vg,m.Hl,r.Fg,l.m_,i.Hu,b.s5,v.Cn,U.z7,F.t,d.M,j.m,I.K,A.a,w]})}return a})()},7707:(E,h,e)=>{e.d(h,{_5:()=>l});var u=e(60177),g=e(99213),m=(e(85901),e(54438));let l=(()=>{class i{static \u0275fac=function(F){return new(F||i)};static \u0275mod=m.$C({type:i});static \u0275inj=m.G2t({imports:[u.MD,g.m_]})}return i})()}}]);