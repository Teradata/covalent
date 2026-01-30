import{l as I,n as i,e as P,s as w,x as v,r as S,i as C}from"./query-assigned-elements-BJdb4KNY.js";import"./icon-BYPYUWym.js";import"./action-ribbon-CpAbqEuw.js";import"./button-ADBjHWlY.js";import"./mwc-icon-BGUO1vKj.js";import"./tslib.es6-C-hQhb2A.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./foundation-BmszT0UM.js";import"./foundation-D9HcNlNd.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./query-pFbEai1B.js";import"./ripple-handlers-CLC5WHP1.js";import"./base-element-C3CkHPn4.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";var B=Object.defineProperty,O=Object.getOwnPropertyDescriptor,u=(n,t,s,r)=>{for(var e=r>1?void 0:r?O(t,s):t,l=n.length-1,p;l>=0;l--)(p=n[l])&&(e=(r?p(t,s,e):p(e))||e);return r&&e&&B(t,s,e),e};let m=class extends w{constructor(){super(...arguments),this.noSurface=!1,this.titleWidth="150px",this._handleToggle=n=>{const t=n.detail.index,s=this.panelItems[t],r=s.open;this.panelItems.forEach(e=>{e.resetPanel()}),r&&(s.open=!0,this.panelItems.forEach(e=>{e.index==t-1?e.index==0?e.separateSinglePanel=!0:e.aboveOpenInnerPanel=!0:e.index==t+1&&(e.index==this.panelItems.length-1&&(e.separateSinglePanel=!0),e.belowOpenInnerPanel=!0)}))}}render(){return v`
      <div class="container">
        <div class="content">
          <slot id="mainSlot"></slot>
        </div>
      </div>
    `}firstUpdated(){if(window.addEventListener("cv-expansionPanel-togglePanel",n=>this._handleToggle(n)),this.style.setProperty("--cv-expansion-panel-item-title-width",this.titleWidth),this.noSurface&&this.style.setProperty("--cv-theme-surface-container","transparent"),this.panelItems.length==1)this.panelItems[0].isSinglePanel=!0;else{let n=0;this.panelItems.forEach(t=>{n==0?t.isTopPanel=!0:n==this.panelItems.length-1?t.isBottomPanel=!0:t.isInnerPanel=!0,t.index=n,n++})}}};u([i({type:Boolean,reflect:!0})],m.prototype,"noSurface",2);u([i({type:String})],m.prototype,"titleWidth",2);u([I()],m.prototype,"panelItems",2);m=u([P("cv-expansion-panel")],m);const _=":host([isTopPanel]) .panel{border-radius:8px 8px 0 0}:host([isBottomPanel]) .panel{border-radius:0 0 8px 8px;border:none}:host([isSinglePanel]) .panel{border-radius:8px;border:none}:host([isInnerPanel]) .panel{border-radius:0}:host([open][isInnerPanel]) .panel{border-radius:8px;margin-top:16px;margin-bottom:16px;border-bottom:0}:host([open][isInnerPanel]) .header{min-height:64px;max-height:64px}:host([open][isInnerPanel]) .dropdown{grid-template-rows:1fr}:host([open][isInnerPanel]) .closedIcon{display:none}:host([open][isInnerPanel]) .openedIcon{display:inline-block}:host([open][isInnerPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isTopPanel]) .panel{border-radius:8px;margin-bottom:16px;border-bottom:0}:host([open][isTopPanel]) .header{min-height:64px;max-height:64px}:host([open][isTopPanel]) .dropdown{grid-template-rows:1fr}:host([open][isTopPanel]) .closedIcon{display:none}:host([open][isTopPanel]) .openedIcon{display:inline-block}:host([open][isTopPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isBottomPanel]) .panel{border-radius:8px;margin-top:16px;border-bottom:0}:host([open][isBottomPanel]) .header{min-height:64px;max-height:64px}:host([open][isBottomPanel]) .dropdown{grid-template-rows:1fr}:host([open][isBottomPanel]) .closedIcon{display:none}:host([open][isBottomPanel]) .openedIcon{display:inline-block}:host([open][isBottomPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isSinglePanel]) .header{min-height:64px;max-height:64px}:host([open][isSinglePanel]) .dropdown{grid-template-rows:1fr}:host([open][isSinglePanel]) .closedIcon{display:none}:host([open][isSinglePanel]) .openedIcon{display:inline-block}:host([open][isSinglePanel]) ::slotted([slot=content]){padding-bottom:16px}:host([belowOpenInnerPanel]) .panel{border-radius:8px 8px 0 0}:host([aboveOpenInnerPanel]) .panel{border-radius:0 0 8px 8px;border-bottom:none}:host([separateSinglePanel]) .panel{border-radius:8px;border-bottom:none}:host .panel{border-bottom:1px solid var(--mdc-theme-border, rgba(0, 0, 0, .12));background-color:var(--cv-theme-surface-container, #ffffff);transition:margin-bottom .5s,margin-top .5s}:host .header{min-height:48px;max-height:48px;padding:0 24px;display:flex;align-items:center;transition:min-height .5s,max-height .5s;cursor:pointer}:host .title{width:var(--cv-expansion-panel-item-title-width, 200px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host .contentPreview{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:16px;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, .54));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host cv-icon{padding-left:16px;margin-left:auto}:host .dropdown{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host .content{overflow-y:hidden}:host .content slot{display:block;padding:0 24px}:host .footer{overflow-y:hidden;padding:16px 24px;border-top:1px solid var(--mdc-theme-border, rgba(0, 0, 0, .12))}:host .openedIcon{display:none}";var q=Object.defineProperty,T=Object.getOwnPropertyDescriptor,a=(n,t,s,r)=>{for(var e=r>1?void 0:r?T(t,s):t,l=n.length-1,p;l>=0;l--)(p=n[l])&&(e=(r?p(t,s,e):p(e))||e);return r&&e&&q(t,s,e),e};let o=class extends w{constructor(){super(...arguments),this.index=0,this.open=!1,this.isTopPanel=!1,this.isInnerPanel=!1,this.isBottomPanel=!1,this.isSinglePanel=!1,this.belowOpenInnerPanel=!1,this.aboveOpenInnerPanel=!1,this.separateSinglePanel=!1,this.title="Title",this.contentPreview="",this.showFooter=!1,this.noSurface=!1}render(){return v`
      <div class="panel">
        <div class="header" @click=${this._toggleContent}>
          <span class="title">${this.title}<slot name="title"></slot></span>
          <span class="contentPreview"
            >${this.contentPreview}<slot name="preview"></slot
          ></span>
          <cv-icon class="closedIcon">expand_more</cv-icon>
          <cv-icon class="openedIcon">expand_less</cv-icon>
        </div>

        <div class="dropdown">
          <div class="content">
            <slot name="content"></slot>
            ${this.showFooter?v`
                  <div class="footer">
                    <slot name="footer"></slot>
                  </div>
                `:""}
          </div>
        </div>
      </div>
    `}resetPanel(){this.belowOpenInnerPanel=!1,this.aboveOpenInnerPanel=!1,this.separateSinglePanel=!1,this.open=!1}_toggleContent(){this.open=!this.open;const n=new CustomEvent("cv-expansionPanel-togglePanel",{detail:{message:`Panel opened: ${this}`,bubbles:!0,composed:!0,open:this.open,index:this.index}});window.dispatchEvent(n)}};o.styles=[C`
      ${S(_)}
    `];a([i({type:Number})],o.prototype,"index",2);a([i({type:Boolean,reflect:!0,attribute:"open"})],o.prototype,"open",2);a([i({type:Boolean,reflect:!0,attribute:"isTopPanel"})],o.prototype,"isTopPanel",2);a([i({type:Boolean,reflect:!0,attribute:"isInnerPanel"})],o.prototype,"isInnerPanel",2);a([i({type:Boolean,reflect:!0,attribute:"isBottomPanel"})],o.prototype,"isBottomPanel",2);a([i({type:Boolean,reflect:!0,attribute:"isSinglePanel"})],o.prototype,"isSinglePanel",2);a([i({type:Boolean,reflect:!0,attribute:"belowOpenInnerPanel"})],o.prototype,"belowOpenInnerPanel",2);a([i({type:Boolean,reflect:!0,attribute:"aboveOpenInnerPanel"})],o.prototype,"aboveOpenInnerPanel",2);a([i({type:Boolean,reflect:!0,attribute:"separateSinglePanel"})],o.prototype,"separateSinglePanel",2);a([i({type:String})],o.prototype,"title",2);a([i({type:String})],o.prototype,"contentPreview",2);a([i({type:Boolean,reflect:!0})],o.prototype,"showFooter",2);a([i({type:Boolean,reflect:!0})],o.prototype,"noSurface",2);o=a([P("cv-expansion-panel-item")],o);const V={title:"Components/Expansion panel",args:{icon:"description",noSurface:!1},parameters:{layout:"centered"}},d=({icon:n,noSurface:t})=>`
    <cv-expansion-panel ${t?"noSurface":""} titleWidth='16em'>

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
    `,c=d.bind({});c.args={noSurface:!0};var h,f,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`({
  icon,
  noSurface
}) => {
  return \`
    <cv-expansion-panel \${noSurface ? 'noSurface' : ''} titleWidth='16em'>

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
    \`;
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,b,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`({
  icon,
  noSurface
}) => {
  return \`
    <cv-expansion-panel \${noSurface ? 'noSurface' : ''} titleWidth='16em'>

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
    \`;
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const X=["Basic","NoSurface"];export{d as Basic,c as NoSurface,X as __namedExportsOrder,V as default};
