import{c as t}from"./esm-c1b900f0.js";import{A as o,M as m}from"./chunk-HLWAVYOI-19aabd90.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-6603fde4.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-7a3ba272.js";import"./index-11d98b33.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function i(){return i=Object.assign?Object.assign.bind():function(l){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(l[r]=n[r])}return l},i.apply(this,arguments)}const u={},c="wrapper";function d({components:l,...a}){return t(c,i({},u,a,{components:l,mdxType:"MDXLayout"}),t(m,{title:"Guides/Color Use",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("style",null,`
    {/* EXAMPLE */}
    
    .textfield-primary {
      --mdc-text-field-outlined-hover-border-color: var(--mdc-theme-primary);
      --mdc-text-field-label-ink-color: var(--mdc-theme-primary);
      --mdc-text-field-fill-color: var(--mdc-theme-primary);
      --mdc-text-field-idle-line-color: var(--mdc-theme-primary);
      --mdc-text-field-hover-line-color: var(--mdc-theme-primary);
      --mdc-text-field-outlined-idle-border-color: var(--mdc-theme-primary);
      --mdc-notched-outline-stroke-width: 2px;
    }
    .textfield-negative {
      --mdc-text-field-outlined-hover-border-color: var(--mdc-theme-negative);
      --mdc-text-field-fill-color: var(--mdc-theme-negative);
      --mdc-text-field-label-ink-color: var(--mdc-theme-negative);
      --mdc-text-field-idle-line-color: var(--mdc-theme-negative);
      --mdc-text-field-hover-line-color: var(--mdc-theme-negative);
      --mdc-text-field-outlined-idle-border-color: var(--mdc-theme-negative);
      --mdc-text-field-focused-label-color: var(--mdc-theme-negative);
      --mdc-notched-outline-stroke-width: 2px;
      --mdc-theme-primary: var(--mdc-theme-negative);
    }
    .exampleContainer {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        max-width: none;
        padding: 40px;
        justify-self: center;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .cardContent {
        padding: 16px 16px 56px 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        column-gap: 8px;
        max-width: 60%;
    }
    .mdc-layout-grid {
        padding-left: 0;
        padding-bottom: 0;
    }
    .cardContainer {
        display: flex;
        column-gap: 16px;
    }
    div.cardContainer cv-card div {
        padding: 16px 16px 32px;
    }
    .mdc-dialog__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .dark {
        background-color: #161C1F;
        color: white;
    }
    .darkText cv-button {
        margin-right: 8px;
    }
    .light {
        background-color: #F5F5F5;
    }
    .lightText cv-button {
        margin-right: 8px;
    }
    .dialog {
      width: 440px;
      height: 224px;
      border-radius: 8px;
      position: absolute;
      background-color: var(--mdc-theme-background);
      box-shadow: 
        0px 16px 24px rgba(0, 0, 0, 0.14), 
        0px 6px 30px rgba(0, 0, 0, 0.12), 
        0px 8px 10px rgba(0, 0, 0, 0.2);
    }
    .dialog .dialogContainer  {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      padding: 0 16px;
      border-bottom: solid 1px var(--mdc-theme-border)
    }
    .dialogContainer div {
      font-family: var(--mdc-typography-headline6-font-family);
      font-size: var(--mdc-typography-headline6-font-size);
      font-weight: var(--mdc-typography-headline6-font-weight);
      line-height: var(--mdc-typography-headline6-line-height);
    }
    .dialogContent {
      height: calc(224px - 96px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px 16px 0 16px;
    }
    .darkDialog {
      background-color: #28353B;
    }
    .dialogActions {
      display: flex;
      justify-content: flex-end;
    }
    {/* FOREGROUND */}
    
    .primaryText {
        color: var(--mdc-theme-text-primary-on-background);
    }    
    .secondary {
        color: var(--mdc-theme-text-secondary-on-background);
    }
    .disabled {
        color: var(--mdc-theme-text-disabled-on-background);
    }
    .divider {
        width: 200px;
        border-bottom: solid 1px var(--mdc-theme-border);
    }
    .positiveFg {
        color: var(--mdc-theme-positive);
    }
    .cautionFg {
        color: var(--mdc-theme-caution);
    }
    .negativeFg {
        color: var(--mdc-theme-negative);
    }
    .primaryFg {
        color: var(--mdc-theme-primary);
    }
    .emphasisFg {
        color: var(--mdc-theme-emphasis);
    }
    
    {/* BACKGROUND */}

    table tr td:first-of-type div:first-of-type {
      color: var(--mdc-theme-text-primary-on-background);
    }
    table:nth-of-type(2) tr td:nth-of-type(2) div {
      width: 114px;
      height: 56px;
      border-radius: 8px;
    }
    .background {
        background-color: var(--mdc-theme-background);
        border: solid var(--mdc-theme-border) 1px;
    }
    .appbar {}
    .surface {
      background-color: var(--mdc-theme-surface);
    }
    .canvas {
        background-color: var(--mdc-theme-surface-canvas);
    }
    .positive {
        background-color: var(--mdc-theme-surface-positive);
    }
    .positiveHighlight {
        background-color: var(--mdc-theme-surface-positive-highlight);
    }
    .positiveHighlightHover {
        background-color: var(--mdc-theme-surface-positive-highlight-hover);
    }
    .caution {
        background-color: var(--mdc-theme-surface-caution);
    }
    .cautionHighlight {
        background-color: var(--mdc-theme-surface-caution-highlight);
    }
    .cautionHighlightHover {
        background-color: var(--mdc-theme-surface-caution-highlight-hover);
    }
    .negative {
        background-color: var(--mdc-theme-surface-negative);
    }
    .negativeHighlight {
        background-color: var(--mdc-theme-surface-negative-highlight);
    }
    .negativeHighlightHover {
        background-color: var(--mdc-theme-surface-negative-highlight-hover);
    }
    .neutral {
        background-color: var(--mdc-theme-surface-neutral);
    }
    .neutralHighlight {
        background-color: var(--mdc-theme-surface-neutral-highlight);
    }
    .neutralHighlightHover {
        background-color: var(--mdc-theme-surface-neutral-highlight-hover);
    }

    .primaryHighlight {
        background-color: var(--mdc-theme-surface-primary-highlight);
    }
    .primaryHighlightHover {
        background-color: var(--mdc-theme-surface-primary-highlight-hover);
    }
    .emphasis {
        background-color: var(--mdc-theme-surface-emphasis);
    }
    .emphasisHighlight {
        background-color: var(--mdc-theme-surface-emphasis-highlight);
    }
    .emphasisHighlightHover {
        background-color: var(--mdc-theme-surface-emphasis-highlight-hover);
    }

    {/* CONFIG COLORS */}
    table:last-of-type tr td:nth-of-type(2) div,
    table:last-of-type tr td:last-of-type div {
      width: 324px;
      height: 56px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      color: #FFFFFFDE;
    }
    .cv-teal-500 {
      background-color: #00B2B1;
    }
    .accent-background-light {
      color: var(--mdc-theme-text-primary-on-light) !important;
      background-color: #85DDDC;
    }
    .accent-foreground-light {
      color: var(--mdc-theme-text-primary-on-light) !important;
      background-color: #59CECD;
    }
    .accent-background-dark {
      background-color: #007373;
    }
    .accent-foreground-dark {
      background-color: #045C5C;
    }
    .cv-slate-500 {
      background-color: #616d73;
    }
    .primary-foreground-dark {
      background-color: #43515A;
    }
    .primary-background-dark {
      background-color: #394851;
    }
    .primary-light {
      color: var(--mdc-theme-text-primary-on-light) !important;
      background-color: #AFB6B9;
    }
    .darkBg {
      background-color: #28353B;
    }
    .sbdocs .sbdocs-table tr th {
      font-family: var(--mdc-typography-caption-font-family);
      font-size: var(--mdc-typography-caption-font-size);
      font-weight: var(--mdc-typography-caption-font-weight);
      line-height: var(--mdc-typography-caption-line-height);
      color: var(--mdc-theme-text-secondary-on-background);
    }
    table:last-of-type tr td {
      width: 300px;
    }
    table:last-of-type tr td:last-of-type, 
    table:last-of-type tr th:last-of-type {
      background: #28353B;
      color: var(--mdc-theme-text-secondary-on-dark);
    }
  `),t("h1",null,"Color use"),t("h2",null,"Basics"),t("ul",null,t("li",{parentName:"ul"},"Use “foreground” colors for items such as text or icons."),t("li",{parentName:"ul"},"When at all possible, use one of our named colors rather than a Material Design color or a hex code.")),t("hr",null),t("h2",null,"Naming"),t("p",null,"Colors are named based on function. This prevents errors from accumulating when using color codes directly. It also allows us to update a color in one place and see the results wherever it’s used."),t("hr",null),t("h2",null,"Theming"),t("p",null,"Each color is defined in both a light and dark version. These are designed to work together, and should not be changed. For example, when using the “emphasis” background color in light mode, you cannot use “accent” color in dark mode for the same element."),t("h4",null,"Examples"),t("div",{class:"light lightText exampleContainer"},t("cv-card",{cardTitle:"Title",class:"card"},t("div",{slot:"card-content",class:"cardContent"},t("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo"),t("div",{class:"mdc-layout-grid"},t("div",{class:"mdc-layout-grid__inner"},t("cv-textfield",{label:"Label",value:"Value",outlined:!0,class:"mdc-layout-grid__cell--span-6"}),t("cv-textfield",{label:"Label",value:"Value",outlined:!0,class:"mdc-layout-grid__cell--span-6 textfield-negative"}),t("cv-textfield",{label:"Label",value:"Value",outlined:!0,class:"mdc-layout-grid__cell--span-6  textfield-primary"}),t("cv-textfield",{label:"Label",value:"Value",outlined:!0,class:"mdc-layout-grid__cell--span-6"}))))),t("div",{class:"cardContainer"},t("cv-card",{cardTitle:"Title"},t("div",{slot:"card-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo")),t("cv-card",{cardTitle:"Title"},t("div",{slot:"card-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo"))),t("div",{class:"dialog"},t("div",{class:"dialogContainer"},t("div",null,"Title"),t("cv-icon",null,"close")),t("div",{class:"dialogContent"},t("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t("div",{class:"dialogActions"},t("cv-button",{label:"Button text",outlined:!0}),t("cv-button",{label:"Button text",raised:!0}))))),t("div",{class:"dark darkText exampleContainer"},t("cv-card",{cardTitle:"Title",class:"card"},t("div",{slot:"card-content",class:"cardContent"},t("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo"),t("div",{class:"mdc-layout-grid"},t("div",{class:"mdc-layout-grid__inner"},t("cv-textfield",{label:"Label",value:"Value",outlined:!0,class:"mdc-layout-grid__cell--span-6"}),t("cv-textfield",{label:"Label",value:"Value",outlined:!0,class:"mdc-layout-grid__cell--span-6 textfield-negative"}),t("cv-textfield",{label:"Label",value:"Value",outlined:!0,class:"mdc-layout-grid__cell--span-6 textfield-primary"}),t("cv-textfield",{label:"Label",value:"Value",outlined:!0,class:"mdc-layout-grid__cell--span-6"})))),t("div",{slot:"card-actions",class:"mdc-card__action-buttons"},t("cv-button",{label:"Button text",outlined:!0}),t("cv-button",{label:"Button text",raised:!0}))),t("div",{class:"cardContainer"},t("cv-card",{cardTitle:"Title"},t("div",{slot:"card-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo")),t("cv-card",{cardTitle:"Title"},t("div",{slot:"card-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo"))),t("div",{class:"dialog darkDialog"},t("div",{class:"dialogContainer"},t("div",null,"Title"),t("cv-icon",null,"close")),t("div",{class:"dialogContent"},t("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),t("div",{class:"dialogActions"},t("cv-button",{label:"Button text",outlined:!0}),t("cv-button",{label:"Button text",raised:!0}))))),t("h2",null,"Color list"),t("h4",null,"Foreground colors"),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Name"),t("th",{parentName:"tr",align:null},"Example"),t("th",{parentName:"tr",align:null},"Light mode hexadecimal color"),t("th",{parentName:"tr",align:null},"Dark mode hexadecimal color"),t("th",{parentName:"tr",align:null},"Covalent variable name"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Text")," ",t("div",null,"Default text color")),t("td",{parentName:"tr",align:null},t("div",{class:"primaryText"},"Lorem ipsum dolor sit amet")),t("td",{parentName:"tr",align:null},"#000000 ",t("br",null)," 0.87 opacity"),t("td",{parentName:"tr",align:null},"#ffffff ",t("br",null)," 1.00 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-text-primary-on-background")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Secondary text")," ",t("div",null,"Less emphasized text")),t("td",{parentName:"tr",align:null},t("div",{class:"secondary"},"Lorem ipsum dolor sit amet")),t("td",{parentName:"tr",align:null},"#000000 ",t("br",null)," 0.54 opacity"),t("td",{parentName:"tr",align:null},"#ffffff ",t("br",null)," 0.7 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-text-secondary-on-background")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Disabled text")),t("td",{parentName:"tr",align:null},t("div",{class:"disabled"},"Lorem ipsum dolor sit amet")),t("td",{parentName:"tr",align:null},"#000000 ",t("br",null)," 0.38 opacity"),t("td",{parentName:"tr",align:null},"#ffffff ",t("br",null)," 0.5 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-text-disabled-on-background")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Icon"),t("div",null,"Default icon color")),t("td",{parentName:"tr",align:null},t("cv-icon",null,"directions_boat")),t("td",{parentName:"tr",align:null},"#000000 ",t("br",null)," 0.54 opacity"),t("td",{parentName:"tr",align:null},"#ffffff ",t("br",null)," 0.7 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-text-secondary-on-background")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Disabled icon")),t("td",{parentName:"tr",align:null},t("cv-icon",{class:"disabled"},"directions_boat")),t("td",{parentName:"tr",align:null},"#000000 ",t("br",null)," 0.38 opacity"),t("td",{parentName:"tr",align:null},"#ffffff ",t("br",null)," 0.5 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-text-disabled-on-background")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Divider")),t("td",{parentName:"tr",align:null},t("div",{class:"divider"})),t("td",{parentName:"tr",align:null},"#000000 ",t("br",null)," 0.12 opacity"),t("td",{parentName:"tr",align:null},"#ffffff ",t("br",null)," 0.2 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-border")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Positive")),t("td",{parentName:"tr",align:null},t("div",{class:"positiveFg"},"Lorem ipsum dolor sit amet")," ",t("cv-icon",{class:"positiveFg"},"directions_boat")),t("td",{parentName:"tr",align:null},"#0a7e07"),t("td",{parentName:"tr",align:null},"#42bd41"),t("td",{parentName:"tr",align:null},"--mdc-theme-positive")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Caution")),t("td",{parentName:"tr",align:null},t("div",{class:"cautionFg"},"Lorem ipsum dolor sit amet")," ",t("cv-icon",{class:"cautionFg"},"directions_boat")),t("td",{parentName:"tr",align:null},"#ff8f00"),t("td",{parentName:"tr",align:null},"#ffb74d"),t("td",{parentName:"tr",align:null},"--mdc-theme-caution")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Negative")),t("td",{parentName:"tr",align:null},t("div",{class:"negativeFg"},"Lorem ipsum dolor sit amet")," ",t("cv-icon",{class:"negativeFg"},"directions_boat")),t("td",{parentName:"tr",align:null},"#b11d00"),t("td",{parentName:"tr",align:null},"#f46f5a"),t("td",{parentName:"tr",align:null},"--mdc-theme-negative")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Primary")),t("td",{parentName:"tr",align:null},t("div",{class:"primaryFg"},"Lorem ipsum dolor sit amet")," ",t("cv-icon",{class:"primaryFg"},"directions_boat")),t("td",{parentName:"tr",align:null},"#007373"),t("td",{parentName:"tr",align:null},"#59cecd"),t("td",{parentName:"tr",align:null},"--mdc-theme-primary")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Emphasis")),t("td",{parentName:"tr",align:null},t("div",{class:"emphasisFg"},"Lorem ipsum dolor sit amet")," ",t("cv-icon",{class:"emphasisFg"},"directions_boat")),t("td",{parentName:"tr",align:null},"#546e7a"),t("td",{parentName:"tr",align:null},"#b0bec5"),t("td",{parentName:"tr",align:null},"--mdc-theme-emphasis")))),t("h4",null,"Background colors"),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Name"),t("th",{parentName:"tr",align:null},"Example"),t("th",{parentName:"tr",align:null},"Light mode material color"),t("th",{parentName:"tr",align:null},"Light mode hexadecimal color"),t("th",{parentName:"tr",align:null},"Dark mode material color"),t("th",{parentName:"tr",align:null},"Dark mode hexadecimal Color"),t("th",{parentName:"tr",align:null},"Covalent variable name"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Background")," ",t("div",null,"The page background")),t("td",{parentName:"tr",align:null},t("div",{class:"background"})),t("td",{parentName:"tr",align:null},"Mat Grey 100"),t("td",{parentName:"tr",align:null},"#f5f5f5"),t("td",{parentName:"tr",align:null},"TD Slate 1500"),t("td",{parentName:"tr",align:null},"#161c1f"),t("td",{parentName:"tr",align:null},"--mdc-theme-background")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Surface")),t("td",{parentName:"tr",align:null},t("div",{class:"surface"})),t("td",{parentName:"tr",align:null},"Mat White"),t("td",{parentName:"tr",align:null},"#ffffff"),t("td",{parentName:"tr",align:null},"TD Slate 1100"),t("td",{parentName:"tr",align:null},"#28353b"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Canvas")," ",t("div",null,"Editable workspaces like code windows")),t("td",{parentName:"tr",align:null},t("div",{class:"canvas"})),t("td",{parentName:"tr",align:null},"Mat Grey 200"),t("td",{parentName:"tr",align:null},"#eeeeee"),t("td",{parentName:"tr",align:null},"TD Slate 1700"),t("td",{parentName:"tr",align:null},"#101314"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-canvas")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Positive")),t("td",{parentName:"tr",align:null},t("div",{class:"positive"})),t("td",{parentName:"tr",align:null},"Mat Green 200"),t("td",{parentName:"tr",align:null},"#a5d6a7"),t("td",{parentName:"tr",align:null},"#336033"),t("td",{parentName:"tr",align:null},"#336033"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-positive")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Positive (highlight)")),t("td",{parentName:"tr",align:null},t("div",{class:"positiveHighlight"})),t("td",{parentName:"tr",align:null},"Positive (10% opaque)"),t("td",{parentName:"tr",align:null},"#a5d6a7",t("br",null)," 0.1 opacity"),t("td",{parentName:"tr",align:null},"Positive (40% opaque)"),t("td",{parentName:"tr",align:null},"#336033 ",t("br",null)," 0.4 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-positive-highlight")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Primary (highlight hover)")),t("td",{parentName:"tr",align:null},t("div",{class:"positiveHighlightHover"})),t("td",{parentName:"tr",align:null},"Positive (20% opaque)"),t("td",{parentName:"tr",align:null},"#a5d6a7",t("br",null)," 0.2 opacity"),t("td",{parentName:"tr",align:null},"Positive (60% opaque)"),t("td",{parentName:"tr",align:null},"#336033 ",t("br",null)," 0.6 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-positive-highlight-hover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Caution")),t("td",{parentName:"tr",align:null},t("div",{class:"caution"})),t("td",{parentName:"tr",align:null},"Mat Orange 300"),t("td",{parentName:"tr",align:null},"#ffb74d"),t("td",{parentName:"tr",align:null},"#704c16"),t("td",{parentName:"tr",align:null},"#704c16"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-caution")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Caution (highlight)")),t("td",{parentName:"tr",align:null},t("div",{class:"cautionHighlight"})),t("td",{parentName:"tr",align:null},"Caution (10% opaque)"),t("td",{parentName:"tr",align:null},"#ffb74d",t("br",null)," 0.1 opacity"),t("td",{parentName:"tr",align:null},"Caution (40% opaque)"),t("td",{parentName:"tr",align:null},"#704c16 ",t("br",null)," 0.4 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-caution-highlight")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Caution (highlight hover)")),t("td",{parentName:"tr",align:null},t("div",{class:"cautionHighlightHover"})),t("td",{parentName:"tr",align:null},"Caution (20% opaque)"),t("td",{parentName:"tr",align:null},"#ffb74d ",t("br",null)," 0.2 opacity"),t("td",{parentName:"tr",align:null},"Caution (60% opaque)"),t("td",{parentName:"tr",align:null},"#704c16 ",t("br",null)," 0.6 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-caution-highlight-hover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Negative")),t("td",{parentName:"tr",align:null},t("div",{class:"negative"})),t("td",{parentName:"tr",align:null},"Mat Red 300"),t("td",{parentName:"tr",align:null},"#e57373"),t("td",{parentName:"tr",align:null},"#883e32"),t("td",{parentName:"tr",align:null},"#883e32"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-negative")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Negative (highlight)")),t("td",{parentName:"tr",align:null},t("div",{class:"negativeHighlight"})),t("td",{parentName:"tr",align:null},"Negative (10% opaque)"),t("td",{parentName:"tr",align:null},"#e57373",t("br",null)," 0.1 opacity"),t("td",{parentName:"tr",align:null},"Negative (40% opaque)"),t("td",{parentName:"tr",align:null},"#883e32 ",t("br",null)," 0.4 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-negative-highlight")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Negative (highlight hover)")),t("td",{parentName:"tr",align:null},t("div",{class:"negativeHighlightHover"})),t("td",{parentName:"tr",align:null},"Negative (20% opaque)"),t("td",{parentName:"tr",align:null},"#e57373",t("br",null)," 0.2 opacity"),t("td",{parentName:"tr",align:null},"Negative (60% opaque)"),t("td",{parentName:"tr",align:null},"#883e32 ",t("br",null)," 0.6 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-negative-highlight-hover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Neutral")),t("td",{parentName:"tr",align:null},t("div",{class:"neutral"})),t("td",{parentName:"tr",align:null},"Mat Grey 400"),t("td",{parentName:"tr",align:null},"#bdbdbd"),t("td",{parentName:"tr",align:null},"TD Slate 800"),t("td",{parentName:"tr",align:null},"#43515a"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-neutral")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Neutral (highlight)")),t("td",{parentName:"tr",align:null},t("div",{class:"neutralHighlight"})),t("td",{parentName:"tr",align:null},"Neutral (4% opaque)"),t("td",{parentName:"tr",align:null},"#bdbdbd",t("br",null)," 0.04 opacity"),t("td",{parentName:"tr",align:null},"Neutral (40% opaque)"),t("td",{parentName:"tr",align:null},"#43515a ",t("br",null)," 0.4 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-neutral-highlight")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Neutral (highlight hover)")),t("td",{parentName:"tr",align:null},t("div",{class:"neutralHighlightHover"})),t("td",{parentName:"tr",align:null},"Neutral (8% opaque)"),t("td",{parentName:"tr",align:null},"#bdbdbd",t("br",null)," 0.08 opacity"),t("td",{parentName:"tr",align:null},"Neutral (60% opaque)"),t("td",{parentName:"tr",align:null},"#43515a ",t("br",null)," 0.6 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-neutral-highlight-hover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Primary")),t("td",{parentName:"tr",align:null},t("div",{class:"primary"})),t("td",{parentName:"tr",align:null},"TD Teal 200"),t("td",{parentName:"tr",align:null},"#85dddc"),t("td",{parentName:"tr",align:null},"TD Teal 1200"),t("td",{parentName:"tr",align:null},"#045c5c"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-primary")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Primary (highlight)")),t("td",{parentName:"tr",align:null},t("div",{class:"primaryHighlight"})),t("td",{parentName:"tr",align:null},"Primary (10% opaque)"),t("td",{parentName:"tr",align:null},"#85dddc ",t("br",null)," 0.1 opacity"),t("td",{parentName:"tr",align:null},"Primary (40% opaque)"),t("td",{parentName:"tr",align:null},"#045c5c ",t("br",null)," 0.4 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-primary-highlight")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Primary (highlight hover)")),t("td",{parentName:"tr",align:null},t("div",{class:"primaryHighlightHover"})),t("td",{parentName:"tr",align:null},"Primary (20% opaque)"),t("td",{parentName:"tr",align:null},"#85dddc ",t("br",null)," 0.2 opacity"),t("td",{parentName:"tr",align:null},"Primary (60% opaque)"),t("td",{parentName:"tr",align:null},"#045c5c ",t("br",null)," 0.6 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-primrary-highlight-hover")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Emphasis")),t("td",{parentName:"tr",align:null},t("div",{class:"emphasis"})),t("td",{parentName:"tr",align:null},"TD Slate 200"),t("td",{parentName:"tr",align:null},"#afb6b9"),t("td",{parentName:"tr",align:null},"TD Slate 800"),t("td",{parentName:"tr",align:null},"#43515a"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-emphasis")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Emphasis (highlight)")),t("td",{parentName:"tr",align:null},t("div",{class:"emphasisHighlight"})),t("td",{parentName:"tr",align:null},"Emphasis (10% opaque)"),t("td",{parentName:"tr",align:null},"#afb6b9 ",t("br",null)," 0.1 opacity"),t("td",{parentName:"tr",align:null},"Emphasis (40% opaque)"),t("td",{parentName:"tr",align:null},"#43515a ",t("br",null)," 0.4 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-emphasis-highlight")),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Emphasis (highlight hover)")),t("td",{parentName:"tr",align:null},t("div",{class:"emphasisHighlightHover"})),t("td",{parentName:"tr",align:null},"Emphasis (20% opaque)"),t("td",{parentName:"tr",align:null},"#afb6b9 ",t("br",null)," 0.2 opacity"),t("td",{parentName:"tr",align:null},"Emphasis (60% opaque)"),t("td",{parentName:"tr",align:null},"#43515a ",t("br",null)," 0.6 opacity"),t("td",{parentName:"tr",align:null},"--mdc-theme-surface-emphasis-highlight-hover")))),t("h2",null,"Config colors for Material Design"),t("p",null,"You should almost never use these. They're here to explain the initial theme setup in Angular Material. Instead, use the colors above."),t("table",null,t("thead",{parentName:"table"},t("tr",{parentName:"thead"},t("th",{parentName:"tr",align:null},"Name"),t("th",{parentName:"tr",align:null},"Light mode example"),t("th",{parentName:"tr",align:null},"Dark mode example"))),t("tbody",{parentName:"table"},t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Accent")),t("td",{parentName:"tr",align:null},t("div",{class:"cv-teal-500"},"TD Teal 500")),t("td",{parentName:"tr",align:null},t("div",{class:"cv-teal-500"},"TD Teal 500"))),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Accent (light)")),t("td",{parentName:"tr",align:null},t("div",{class:"accent-background-light"},"Background - Accent")),t("td",{parentName:"tr",align:null},t("div",{class:"accent-foreground-light"},"Foreground - Accent"))),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Accent (dark)")),t("td",{parentName:"tr",align:null},t("div",{class:"accent-background-dark"},"Foreground - Accent")),t("td",{parentName:"tr",align:null},t("div",{class:"accent-foreground-dark"},"Background - Accent"))),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Primary")),t("td",{parentName:"tr",align:null},t("div",{class:"cv-slate-500"},"TD Slate 500")),t("td",{parentName:"tr",align:null},t("div",{class:"cv-slate-500"},"TD Slate 500"))),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Primary (dark)")),t("td",{parentName:"tr",align:null},t("div",{class:"primary-foreground-dark"},"Foreground - Primary")),t("td",{parentName:"tr",align:null},t("div",{class:"primary-background-dark"},"Background - Primary"))),t("tr",{parentName:"tbody"},t("td",{parentName:"tr",align:null},t("div",null,"Primary (light)")),t("td",{parentName:"tr",align:null},t("div",{class:"primary-light"},"Background - Primary")),t("td",{parentName:"tr",align:null},t("div",{class:"primary-light"},"Foreground - Primary"))))))}d.isMDXComponent=!0;const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const e={title:"Guides/Color Use",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]},g={};e.parameters=e.parameters||{};e.parameters.docs={...e.parameters.docs||{},page:()=>t(o,{mdxStoryNameToKey:g,mdxComponentAnnotations:e},t(d,null))};const T=["__page"];export{T as __namedExportsOrder,p as __page,e as default};
