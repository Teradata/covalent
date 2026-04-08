import"./expansion-panel-item-Bx9-JHPw.js";import"./icon-1XQe7S_h.js";import"./action-ribbon-Btu7LDQO.js";import"./button-_PqhMK-p.js";import"./query-assigned-elements-BJdb4KNY.js";import"./mwc-icon-ClXlKBjv.js";import"./tslib.es6-X4n3o5C8.js";import"./utils-sZhlDiu_.js";import"./observer-D8jHVEI7.js";import"./foundation-D59LkgK_.js";import"./foundation-D9HcNlNd.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./query-pFbEai1B.js";import"./ripple-handlers-_TDZG32v.js";import"./base-element-BG6oFIG9.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";const D={title:"Components/Expansion panel",args:{icon:"description",noSurface:!1,titleWidth:"150px"},argTypes:{icon:{control:{type:"text"}},noSurface:{control:{type:"boolean"}},titleWidth:{control:{type:"text"}}},parameters:{layout:"centered"},tags:["autodocs"]},i=({icon:x,noSurface:v,titleWidth:n}={})=>`
    <cv-expansion-panel ${v?"noSurface":""} ${n?`titleWidth='${n}'`:""}>

      <cv-expansion-panel-item
      title="Title"
      contentPreview="Content preview"
      showFooter
      >
        <div slot="content">
         Culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div slot="footer">
          Basic footer
        </div>
      </cv-expansion-panel-item>

      <cv-expansion-panel-item
      title="Lorem ipsum dolor sit amet"
      contentPreview="Content preview"
      showFooter
      >
        <div slot="content">Mxollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div slot="footer" style="display:flex; align-items:center">
          <div style="color:rgba(255, 255, 255, 0.54)">You have unsaved changes</div>
          <div style="margin-left:auto">
            <cv-button outlined label="Cancel"></cv-button>
            <cv-button raised label="Save" class="primary accent"></cv-button>
          </div>
        </div>
      </cv-expansion-panel-item>

      <cv-expansion-panel-item
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
      contentPreview="Content preview"
      >
        <div slot="content">
          Content
        </div>
      </cv-expansion-panel-item>

      <cv-expansion-panel-item
      title="Lorem ipsum dolor"
      >
        <div slot="content">
          Content
        </div>      
      </cv-expansion-panel-item>

    </cv-expansion-panel>
    `,e={render:i,args:{noSurface:!1,titleWidth:"150px"}},t={render:i,args:{noSurface:!0}},o={render:i,args:{titleWidth:"150px"}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    noSurface: false,
    titleWidth: '150px'
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    noSurface: true
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    titleWidth: '150px'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const O=["Main","NoSurface","WithContentAndFooter"];export{e as Main,t as NoSurface,o as WithContentAndFooter,O as __namedExportsOrder,D as default};
