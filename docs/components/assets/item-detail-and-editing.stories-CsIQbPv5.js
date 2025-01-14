import{c as t}from"./esm-CZLLrdIi.js";import{A as s,M as c}from"./chunk-HLWAVYOI-B67Aurvk.js";import"./index-BS1Ahyye.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-D_jBBxzS.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-DHNTfeXg.js";import"./index-B43vCpwJ.js";import"./index-BJFSwJn8.js";import"./index-ogSvIofg.js";function n(){return n=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(i[a]=r[a])}return i},n.apply(this,arguments)}const d={},x="wrapper";function o({components:i,...e}){return t(x,n({},d,e,{components:i,mdxType:"MDXLayout"}),t(c,{title:"Guides/Item Detail and Editing",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),t("style",null,`
    .container {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        border: var(--mdc-theme-border) 1px solid;
        margin-top: 24px;
        background-color: var(--mdc-theme-surface);
    }
    .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-top: 16px;
        border-top: solid 2px #ff5f02;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .header {
        font-family: var(--mdc-typography-headline6-font-family);
        font-size: var(--mdc-typography-headline6-font-size);
        font-weight: var(--mdc-typography-headline6-font-weight);
        line-height: var(--mdc-typography-headline6-line-height);
        color: var(--mdc-theme-text-primary-on-background);
        margin-left: 16px;
    }
    .actions {
        margin-right: 16px;
    }
    .actions cv-button:first-of-type {
        margin-right: 8px;
    }
    cv-tab-bar {
        width: 405px;
        margin-left: 16px;
        margin-top: 8px;
    }
    .sbdocs hr {
        margin-top: 0;
        padding-bottom: 16px;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .content div:first-of-type {
        width: 60%;
    }
    .content cv-icon-button {
        position: absolute;
        right: 8px;
        top: -8px;
        padding: 0;
    }
    .content-text {
        color: var(--mdc-theme-text-primary-on-background);
    }
    .subtitle {
        font-family: var(--mdc-typography-body2-font-family);
        font-size: var(--mdc-typography-body2-font-size);
        font-weight: var(--mdc-typography-body2-font-weight);
        line-height: var(--mdc-typography-body2-line-height);
        margin-bottom: 4px;
    }
    .subtitle:last-of-type {
        margin-top: 16px;
    }
    .divider {
      border: solid 1px var(--mdc-theme-border);
      margin-top: 72px;
      margin-bottom: 24px;
    }
    .changes-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .changes-container-item {
        display: flex;
        gap: 24px;
    }
    .changes-container-item > div:first-of-type {
        width: 30%;
    }
    .changes-container-item > div:last-of-type {
        width: 60%;
    }
    .changes-container hr {
        padding: 0;
    }
    .changes-title {
        font-family: var(--mdc-typography-headline6-font-family);
        font-size: var(--mdc-typography-headline6-font-size);
        font-weight: var(--mdc-typography-headline6-font-weight);
        line-height: var(--mdc-typography-headline6-line-height);
        color: var(--mdc-theme-text-primary-on-background);
        margin-bottom: 8px;
    }
    .changes-example {
        width: 632px;
        min-height: 200px;
        border: solid 1px var(--mdc-theme-border);
        border-radius: 8px;
        background-color: var(--mdc-theme-surface);
    }
    .list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        padding-left: 16px;
        border-bottom: solid var(--mdc-theme-border) 1px;
    }
    .list-item:last-of-type {
        border-bottom: none;
    }
    .list-item-text {
        font-family: var(--mdc-typography-body1-font-family);
        font-size: var(--mdc-typography-body1-font-size);
        font-weight: var(--mdc-typography-body1-font-weight);
        line-height: var(--mdc-typography-body1-line-height);
        color: var(--mdc-theme-text-primary-on-background);
    }
    .list-item-subtext {
        font-family: var(--mdc-typography-body2-font-family);
        font-size: var(--mdc-typography-body2-font-size);
        font-weight: var(--mdc-typography-body2-font-weight);
        line-height: var(--mdc-typography-body2-line-height);
    }
    .list-item-blue-bg {
        background-color: var(--mdc-theme-surface-primary-highlight-hover);
    }
    .skeleton-text {
      color: var(--mdc-theme-border) !important;
      letter-spacing: 0 !important;
    }
    .skeleton-title {
        margin-left: 16px;
        margin-top: 8px;
    }
    .skeleton-block {
        width: 96px;
        height: 32px;
        border-radius: 8px;
        background-color: var(--mdc-theme-border) !important;
        margin-right: 16px;
    }
    .skeleton-square {
        width: 24px;
        height: 24px;
        background-color: var(--mdc-theme-border);
        margin-right: 16px;
    }
    .object-list-example {
        display: flex;
    }
    .object-list-left {
        width: 50%;
        border-right: solid 1px var(--mdc-theme-border);
    }
    .object-list-item {
        justify-content: flex-start;
        column-gap: 16px;
    }
    .object-list-left > div.list-item {
        height: 33%;
    }
    cv-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--mdc-theme-border);
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .object-list-right {
        padding-left: 16px;
        padding-top: 14px;
        overflow: hidden;
    }
    .action-ribbon-bottom-content {
        padding-left: 16px;
        padding-top: 14px;
        padding-right: 56px;
        border-top: solid 1px var(--mdc-theme-border);
    }
    .new-text-block {
        margin-top: 16px;
    }
  `),t("h1",null,"Item detail & editing"),t("h2",null,"Viewing item details"),t("p",null,"For content that’s intended to be browsed for information, display in read-only form, with an edit icon in the top right of the tab to enable editing."),t("div",{class:"container"},t("div",{class:"toolbar"},t("div",{class:"header"},"Interdum pellentesque cras ornare porttitor tellus ante."),t("div",{class:"actions"},t("cv-button",{outlined:!0,slot:"buttonActions",label:"Action"}),t("cv-button",{outlined:!0,slot:"buttonActions",label:"Action"}))),t("cv-tab-bar",{activeIndex:"0"},t("cv-tab",{label:"Details"}),t("cv-tab",{label:"Tab 2"}),t("cv-tab",{label:"Tab 3"}),t("cv-tab",{label:"Tab 4"})),t("hr",null),t("div",{class:"content"},t("div",null,t("div",{class:"subtitle"},"Description"),t("div",{class:"content-text"},"Elit in semper faucibus aliquam. Nisl, augue porta eu urna adipiscing amet scelerisque enim odio. Arcu, posuere ultricies egestas viverra quis. Id pharetra lacinia donec orci."),t("div",{class:"subtitle"},"Tags"),t("cv-chip-set",null,t("cv-chip",{label:"Lorem"}),t("cv-chip",{label:"Ipsum"}),t("cv-chip",{label:"Dolor sit"}))),t("cv-icon-button",{icon:"edit"}))),t("div",{class:"divider"}),t("h2",null,"Editing"),t("p",null,"Editing takes place in context, not in a separate view. Show form fields by default, and use the action ribbon to display state, save changes, or perform other relevant operations."),t("h3",null,"Indicating changes"),t("div",{class:"changes-container"},t("div",{class:"changes-container-item"},t("div",null,t("div",{class:"changes-title"},"Tabs"),t("div",null,"Show a change indicator in the relevant tab.")),t("div",{class:"changes-example"},t("div",{class:"skeleton-text skeleton-title"},"Elit in semper faucibus aliquam. Nisl, augue porta eu urna."),t("cv-tab-bar",{activeIndex:"0"},t("cv-tab",{label:"Details ●"}),t("cv-tab",{label:"Tab 2"}),t("cv-tab",{label:"Tab 3"}),t("cv-tab",{label:"Tab 4"})),t("hr",null),t("div",{class:"list-item list-item-blue-bg"},t("div",{class:"skeleton-text"},"Filler text"),t("div",{class:"skeleton-block"})),t("div",{class:"list-item"},t("div",{class:"skeleton-text"},"Filler text Filler text Filler text Filler text Filler text Filler text")))),t("div",{class:"changes-container-item"},t("div",null,t("div",{class:"changes-title"},"Object list"),t("div",null,"If the object list is visible, show a change indicator in the relevant list item.")),t("div",{class:"changes-example object-list-example"},t("div",{class:"object-list-left"},t("div",{class:"list-item"},t("div",{class:"skeleton-text"},"Some filler text"),t("div",{class:"skeleton-square"})),t("div",{class:"list-item list-item-blue-bg object-list-item"},t("cv-icon",null,"square"),t("div",null,t("div",{class:"list-item-text"},"● Interdum pellentesque cra..."),t("div",{class:"list-item-subtext"},"June 24, 2020 5:12 PM"))),t("div",{class:"list-item object-list-item"},t("cv-icon",null),t("div",null,t("div",{class:"skeleton-text"},"Interdum pellentesque cra..."),t("div",{class:"skeleton-text"},"June 24, 2020 5:12 PM")))),t("div",{class:"object-list-right"},t("div",{class:"skeleton-text"},"Filler text filler text filler text"),t("div",{class:"skeleton-text"},"Filler text filler text filler text"),t("div",{class:"skeleton-text"},"Filler text filler text filler text"),t("br",null),t("div",{class:"skeleton-text"},"Filler text filler text filler text"),t("div",{class:"skeleton-text"},"Filler text filler text filler text"),t("div",{class:"skeleton-text"},"Filler text filler text filler text"),t("div",{class:"skeleton-text"},"Filler text filler text filler text")))),t("div",{class:"changes-container-item"},t("div",null,t("div",{class:"changes-title"},"Action ribbon - ",t("br",null)," Nothing changed"),t("div",null,"Provide “No changes” text to the left of the ribbon."),t("div",{class:"new-text-block"},"Disable actions.")),t("div",{class:"changes-example"},t("cv-tab-bar",{activeIndex:"0"},t("cv-tab",{label:"Details"}),t("cv-tab",{label:"Tab 2"}),t("cv-tab",{label:"Tab 3"}),t("cv-tab",{label:"Tab 4"})),t("hr",null),t("cv-action-ribbon",{labelText:"No changes"},t("cv-button",{slot:"action-items",label:"Cancel",outlined:!0}),t("cv-button",{slot:"action-items",label:"Save",raised:!0,disabled:!0})),t("div",{class:"action-ribbon-bottom-content"},t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("br",null),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text ")))),t("div",{class:"changes-container-item"},t("div",null,t("div",{class:"changes-title"},"Action ribbon - ",t("br",null)," Unsaved changes"),t("div",null,"Provide “You have unsaved changes” text to the left of the ribbon."),t("div",{class:"new-text-block"},"Enable any relevant actions.")),t("div",{class:"changes-example"},t("cv-tab-bar",{activeIndex:"0"},t("cv-tab",{label:"Details ●"}),t("cv-tab",{label:"Tab 2"}),t("cv-tab",{label:"Tab 3"}),t("cv-tab",{label:"Tab 4"})),t("hr",null),t("cv-action-ribbon",{labelText:"You have unsaved changes",state:"active"},t("cv-button",{slot:"action-items",label:"Cancel",outlined:!0}),t("cv-button",{slot:"action-items",label:"Save",raised:!0})),t("div",{class:"action-ribbon-bottom-content"},t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("br",null),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler"),t("div",{class:"skeleton-text"},"Filler text filler text filler text "))))))}o.isMDXComponent=!0;const f=()=>{throw new Error("Docs-only story")};f.parameters={docsOnly:!0};const l={title:"Guides/Item Detail and Editing",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]},p={};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>t(s,{mdxStoryNameToKey:p,mdxComponentAnnotations:l},t(o,null))};const T=["__page"];export{T as __namedExportsOrder,f as __page,l as default};
