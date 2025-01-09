import{c as e}from"./esm-c1b900f0.js";import{A as d,M as s}from"./chunk-HLWAVYOI-5152213d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-9f9b6ffa.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-7a3ba272.js";import"./index-11d98b33.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";function a(){return a=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])}return i},a.apply(this,arguments)}const c={},p="wrapper";function n({components:i,...t}){return e(p,a({},c,t,{components:i,mdxType:"MDXLayout"}),e(s,{title:"Guides/Info and help",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e("style",null,`
  .item {
    display: flex;
    width: 100%;
  }
  .left {
    width: 30%;
  }
  .right {
    width: 70%;
  }
  .cv-alert-container {
    margin-left: 64px;
  }
  .step-title {
    width: 304px;
    height: 208px;
    background-color: #B0BEC5;
    border-radius: 8px;
    color: var(--mdc-theme-text-primary-on-background);
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-left: 180px;
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);
  }
  .triangle {
    position: absolute;
    width: 24px;
    height: 24px;
    transform: rotate(45deg);
    left: -13px; 
    top: 104px;
    background-color: #B0BEC5;
    border-color: transparent transparent var(--mdc-theme-border) var(--mdc-theme-border);
  }
  .toolbar {
    display: flex;
    justify-content: space-between;
    padding: 16px;
  }
  .toolbar > div:first-of-type {
    font-family: var(--mdc-typography-subtitle2-font-family);
    font-size: var(--mdc-typography-subtitle2-font-size);
    font-weight: var(--mdc-typography-subtitle2-font-weight);
    line-height: var(--mdc-typography-subtitle2-line-height);
    color: var(--mdc-theme-text-primary-on-background);
  }
  .action-bar {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
  .action-bar > div:first-of-type {
    font-family: var(--mdc-typography-body1-font-family);
    font-size: var(--mdc-typography-body1-font-size);
    font-weight: var(--mdc-typography-body1-font-weight);
    line-height: var(--mdc-typography-body1-line-height);
    color: var(--mdc-theme-text-secondary-on-background);
  }
  .chevron-space {
    margin-right: 16px;
  }
  .see-also {
    width: 272px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--mdc-theme-surface-primary-highlight);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 16px;
  }
  .see-also > div {
    font-family: var(--mdc-typography-caption-font-family);
    font-size: var(--mdc-typography-caption-font-size);
    font-weight: var(--mdc-typography-caption-font-weight);
    line-height: var(--mdc-typography-caption-line-height);
  }
  span {
    display: flex;
    align-items: center;
  }
  span > cv-icon {
    font-size: 16px;
  }
  .help-window-bg {
    margin-left: 24px;
    width: 632px;
    height: 560px;
    border-radius: 8px;
    border: solid 1px var(--mdc-theme-border);
    position: relative;
  }
  .help-window {
    width: 360px;
    height: 544px;
    border: solid 1px var(--mdc-theme-border);
    border-bottom: none;
    background-color: var(--mdc-theme-surface);
    position: absolute;
    right: 16px;
    bottom: 0;
    border-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;
  }
  .help-window-crumbs {
    font-size: 12px;
  }
  .help-window-title {
    font-family: var(--mdc-typography-headline5-font-family);
    font-size: var(--mdc-typography-headline5-font-size);
    font-weight: var(--mdc-typography-headline5-font-weight);
    line-height: var(--mdc-typography-headline5-line-height);
    color: var(--mdc-theme-text-primary-on-background);
    margin-bottom: 8px;
  }
  .photo {
    width: 328px;
    height: 213px;
    background-color: var(--mdc-theme-border);
    border-radius: 8px;
    margin: 16px auto;
  }
  .skeleton-text {
    color: var(--mdc-theme-border) !important;
    letter-spacing: 0 !important;
  }
  .icon-container {
    display: flex;
    gap: 16px;
  }
  #title {
    font-family: var(--mdc-typography-headline6-font-family);
    font-size: var(--mdc-typography-headline6-font-size);
    font-weight: var(--mdc-typography-headline6-font-weight);
    line-height: var(--mdc-typography-headline6-line-height);
    color: var(--mdc-theme-text-primary-on-background);
  }
  .sbdocs hr {
    margin-top: 0px;
    padding-bottom: 0;
  }
  .card {
    margin-left: 64px;
    border-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: solid 1px var(--mdc-theme-border);
    border-bottom: none;
    background: linear-gradient(to bottom, var(--mdc-theme-surface), var(--mdc-theme-background));
  }
  .card-content {
    padding: 16px;
  }
  cv-textfield {
    margin-left: 60px;
    width: 560px;
  }
  .relative {
    position: relative;
  }
  .helper-text {
    position: absolute;
    bottom: -24px;
    left: 76px;
    font-family: var(--mdc-typography-caption-font-family);
    font-size: var(--mdc-typography-caption-font-size);
    font-weight: var(--mdc-typography-caption-font-weight);
    line-height: var(--mdc-typography-caption-line-height);
  }
  .helper-text-error {
    bottom: 16px;
    color: var(--mdc-theme-error);
  }
  .textfield-neutral {
    --mdc-text-field-outlined-hover-border-color: var(--mdc-theme-border);
    --mdc-text-field-fill-color: var(--mdc-theme-border);
    --mdc-text-field-idle-line-color: var(--mdc-theme-border);
    --mdc-text-field-hover-line-color: var(--mdc-theme-border);
    --mdc-text-field-outlined-idle-border-color: var(--mdc-theme-border);
    --mdc-text-field-focused-label-color: var(--mdc-theme-border);
    --mdc-theme-primary: var(--mdc-theme-text-secondary-on-background);
    --mdc-notched-outline-stroke-width: 2px;
  }
  .textfield-error {
    --mdc-text-field-outlined-hover-border-color: var(--mdc-theme-error);
    --mdc-text-field-fill-color: var(--mdc-theme-error);
    --mdc-text-field-idle-line-color: var(--mdc-theme-error);
    --mdc-text-field-hover-line-color: var(--mdc-theme-error);
    --mdc-text-field-outlined-idle-border-color: var(--mdc-theme-error);
    --mdc-text-field-focused-label-color: var(--mdc-theme-error);
    --mdc-theme-primary: var(--mdc-theme-error);
    --mdc-text-field-label-ink-color: var(--mdc-theme-error);
    --mdc-notched-outline-stroke-width: 2px;
  }
  .no-padding {
    padding: 0 0 16px 0;
  }
  .top-margin {
    margin-top: 8px;
  }
  `),e("h1",null,"Info & help"),e("h2",null,"General guidance (always visible)"),e("h3",null,"Applies to the whole page"),e("h6",null,"Guided tour"),e("div",{class:"item"},e("div",{class:"left"},e("div",null,"Take the user on a brief tour of the UI to help acclimate them to the interface."),e("div",{class:"see-also"},e("div",null,"See also"),e("span",null,"Features ",e("cv-icon",null,"chevron_right"),e("a",{href:"https://www.figma.com/file/tDTc1JQZByIK0Igi6p1uky/Guided-tours?node-id=0%3A1",target:"_blank"},"Guided tours")))),e("div",{class:"step-title right"},e("div",{class:"toolbar no-padding"},e("div",null,"Step title"),e("div",null,e("cv-icon",null,"close"))),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi imperdiet dignissim quam lacus vitae tincidunt sagittis. Aliquet ullamcorper congue arcu a, tempus fringilla tellus imperdiet.",e("div",{class:"action-bar"},e("div",null,"2/4"),e("div",null,e("cv-icon",{class:"chevron-space"},"chevron_left"),e("cv-icon",null,"chevron_right"))),e("div",{class:"triangle"}))),e("h6",null,"Help window"),e("div",{class:"item"},e("div",{class:"left"},e("div",null,"Allow the user to toggle extra help on and off as needed."),e("div",{class:"see-also"},e("div",null,"See also"),e("span",null,"Features ",e("cv-icon",null,"chevron_right")," ",e("a",{href:"https://www.figma.com/file/z3w5qXeAISPmBr4IOLAJ38/In-product-help?node-id=0%3A1",target:"_blank"},"In-product help")))),e("div",{class:"right"},e("div",{class:"help-window-bg"},e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("br",null),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text fil"),e("br",null),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"skeleton-text"},"Filler text fil"),e("br",null),e("div",{class:"skeleton-text"},"Filler text filler text filler text filler text filler text filler text fi"),e("div",{class:"help-window"},e("div",{class:"toolbar"},e("div",{id:"title"},"Help"),e("div",{class:"icon-container"},e("cv-icon",null,"expand_more"),e("cv-icon",null,"open_in_new"),e("cv-icon",null,"square"),e("cv-icon",null,"close"))),e("hr",null),e("div",{class:"card-content"},e("span",{class:"help-window-crumbs"},"All topics ",e("cv-icon",null,"chevron_right")," Developer",e("cv-icon",null,"chevron_right")),e("div",{class:"help-window-title"},"Cras adipiscing tempus ornare purus vel.")),e("hr",null),e("div",{class:"card-content"},e("div",{id:"title",class:"top-margin"},"Ultricies nunc massa, id ut felis sed varius accumsan platea."),e("div",{class:"photo"}),e("div",null,"Cras libero tempor pellentesque vitae eget.")))))),e("h3",null,"Applies to part of the page"),e("h6",null,"Text directly in the page"),e("div",{class:"item"},e("div",{class:"left"},"Short explanations directly in the body of the page."),e("div",{class:"right"},e("div",{class:"card"},e("div",{class:"toolbar skeleton-text"},"Filler text"),e("hr",null),e("div",{class:"card-content"},"Configure which roles and groups have permission to create their own workspace in this site."," ",e("a",{href:"https://www.teradata.com",target:"_blank",class:"anchor-resize"},"Learn more"))))),e("h3",null,"An individual form field"),e("h6",null,"Form field hint"),e("div",{class:"item"},e("div",{class:"left"},"Display your message directly adjacent to the field itself."),e("div",{class:"right relative"},e("cv-textfield",{type:"password",class:"textfield-neutral",outlined:!0,value:"aaaaaaaaaa",label:"Password"}),e("div",{class:"helper-text"},"8 – 12 characters long, containing at least one letter and one number"))),e("h2",null,"Temporary guidance"),e("h3",null,"Applies to the whole page"),e("h6",null,"Page-level alert"),e("div",{class:"item"},e("div",{class:"left"},"Use a page-level alert to give feedback that’s not specifically related to any one item or region."),e("div",{class:"right cv-alert-container"},e("cv-alert",{titleText:"Alert title",descriptionText:"Alert description",state:"caution",icon:"warning"},e("cv-icon-button",{slot:"action-items",icon:"close"})))),e("h3",null,"Applies to part of a page, or a dialog"),e("h6",null,"Inline alert"),e("div",{class:"item"},e("div",{class:"left"},"An inline alert allows more specific messaging about a smaller region of a page, or a modal dialog or sheet."),e("div",{class:"right"},e("div",{class:"card"},e("div",{id:"title",class:"toolbar"},"Card title"),e("hr",null),e("div",null,e("cv-alert",{titleText:"Alert title",descriptionText:"Alert description",state:"caution",icon:"warning",inline:!0},e("cv-icon-button",{slot:"action-items",icon:"close"})))))),e("h3",null,"An individual form field"),e("h6",null,"Form field hint"),e("div",{class:"item"},e("div",{class:"left"},"Display your message directly adjacent to the field itself. In the case of errors and warnings, the form field also changes state to draw attention to itself."),e("div",{class:"right relative"},e("cv-textfield",{type:"password",class:"textfield-error",outlined:!0,value:"aaaaaaaaaa",label:"Password"}),e("div",{class:"helper-text helper-text-error"},"8 – 12 characters long, containing at least one letter and one number"))))}n.isMDXComponent=!0;const f=()=>{throw new Error("Docs-only story")};f.parameters={docsOnly:!0};const l={title:"Guides/Info and help",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]},x={};l.parameters=l.parameters||{};l.parameters.docs={...l.parameters.docs||{},page:()=>e(d,{mdxStoryNameToKey:x,mdxComponentAnnotations:l},e(n,null))};const A=["__page"];export{A as __namedExportsOrder,f as __page,l as default};
