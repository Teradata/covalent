import{l as b,e as f,s as x,x as h,i as y,r as P}from"./query-assigned-elements-9f88bee1.js";import{n as i}from"./property-f36ea729.js";import"./icon-dab2e138.js";import"./action-ribbon-30ef7d5c.js";import"./button-54d97217.js";import"./mwc-icon-6ece1001.js";import"./tslib.es6-4b90b051.js";import"./utils-529e1a6d.js";import"./observer-1f401936.js";import"./foundation-4f97f2e7.js";import"./class-map-018c3a6a.js";import"./query-3e91a3b8.js";import"./mwc-button-base-82cdc40f.js";import"./ripple-handlers-20d146be.js";import"./base-element-cae00a28.js";import"./state-2a0073ff.js";import"./style-map-4c420736.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";var w=Object.defineProperty,I=Object.getOwnPropertyDescriptor,m=(n,t,r,s)=>{for(var e=s>1?void 0:s?I(t,r):t,l=n.length-1,p;l>=0;l--)(p=n[l])&&(e=(s?p(t,r,e):p(e))||e);return s&&e&&w(t,r,e),e};let d=class extends x{constructor(){super(...arguments),this.noSurface=!1,this.titleWidth="150px",this._handleToggle=n=>{const t=n.detail.index,r=this.panelItems[t],s=r.open;this.panelItems.forEach(e=>{e.resetPanel()}),s&&(r.open=!0,this.panelItems.forEach(e=>{e.index==t-1?e.index==0?e.separateSinglePanel=!0:e.aboveOpenInnerPanel=!0:e.index==t+1&&(e.index==this.panelItems.length-1&&(e.separateSinglePanel=!0),e.belowOpenInnerPanel=!0)}))}}render(){return h`
      <div class="container">
        <div class="content">
          <slot id="mainSlot"></slot>
        </div>
      </div>
    `}firstUpdated(){if(window.addEventListener("cv-expansionPanel-togglePanel",n=>this._handleToggle(n)),this.style.setProperty("--cv-expansion-panel-item-title-width",this.titleWidth),this.noSurface&&this.style.setProperty("--mdc-theme-surface","transparent"),this.panelItems.length==1)this.panelItems[0].isSinglePanel=!0;else{let n=0;this.panelItems.forEach(t=>{n==0?t.isTopPanel=!0:n==this.panelItems.length-1?t.isBottomPanel=!0:t.isInnerPanel=!0,t.index=n,n++})}}};m([i({type:Boolean,reflect:!0})],d.prototype,"noSurface",2);m([i({type:String})],d.prototype,"titleWidth",2);m([b()],d.prototype,"panelItems",2);d=m([f("cv-expansion-panel")],d);const S=`:host([isTopPanel]) .panel{border-radius:8px 8px 0 0}:host([isBottomPanel]) .panel{border-radius:0 0 8px 8px;border:none}:host([isSinglePanel]) .panel{border-radius:8px;border:none}:host([isInnerPanel]) .panel{border-radius:0}:host([open][isInnerPanel]) .panel{border-radius:8px;margin-top:16px;margin-bottom:16px;border-bottom:0}:host([open][isInnerPanel]) .header{min-height:64px;max-height:64px}:host([open][isInnerPanel]) .dropdown{grid-template-rows:1fr}:host([open][isInnerPanel]) .closedIcon{display:none}:host([open][isInnerPanel]) .openedIcon{display:inline-block}:host([open][isInnerPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isTopPanel]) .panel{border-radius:8px;margin-bottom:16px;border-bottom:0}:host([open][isTopPanel]) .header{min-height:64px;max-height:64px}:host([open][isTopPanel]) .dropdown{grid-template-rows:1fr}:host([open][isTopPanel]) .closedIcon{display:none}:host([open][isTopPanel]) .openedIcon{display:inline-block}:host([open][isTopPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isBottomPanel]) .panel{border-radius:8px;margin-top:16px;border-bottom:0}:host([open][isBottomPanel]) .header{min-height:64px;max-height:64px}:host([open][isBottomPanel]) .dropdown{grid-template-rows:1fr}:host([open][isBottomPanel]) .closedIcon{display:none}:host([open][isBottomPanel]) .openedIcon{display:inline-block}:host([open][isBottomPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isSinglePanel]) .header{min-height:64px;max-height:64px}:host([open][isSinglePanel]) .dropdown{grid-template-rows:1fr}:host([open][isSinglePanel]) .closedIcon{display:none}:host([open][isSinglePanel]) .openedIcon{display:inline-block}:host([open][isSinglePanel]) ::slotted([slot=content]){padding-bottom:16px}:host([belowOpenInnerPanel]) .panel{border-radius:8px 8px 0 0}:host([aboveOpenInnerPanel]) .panel{border-radius:0 0 8px 8px;border-bottom:none}:host([separateSinglePanel]) .panel{border-radius:8px;border-bottom:none}:host .panel{width:550px;border-bottom:1px solid var(--mdc-theme-border, rgba(0, 0, 0, .12));background-color:var(--mdc-theme-surface, #ffffff);transition:margin-bottom .5s,margin-top .5s}:host .header{min-height:48px;max-height:48px;padding:0 24px;display:flex;align-items:center;transition:min-height .5s,max-height .5s}:host .title{width:var(--cv-expansion-panel-item-title-width, 200px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host .contentPreview{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:16px;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, .54));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host cv-icon{padding-left:16px;margin-left:auto}:host .dropdown{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host .content{overflow-y:hidden}:host ::slotted([slot=content]){padding:0 24px 16px}:host .footer{overflow-y:hidden;padding:16px 24px;border-top:1px solid var(--mdc-theme-border, rgba(0, 0, 0, .12))}:host .openedIcon{display:none}
`;var B=Object.defineProperty,C=Object.getOwnPropertyDescriptor,a=(n,t,r,s)=>{for(var e=s>1?void 0:s?C(t,r):t,l=n.length-1,p;l>=0;l--)(p=n[l])&&(e=(s?p(t,r,e):p(e))||e);return s&&e&&B(t,r,e),e};let o=class extends x{constructor(){super(...arguments),this.index=0,this.open=!1,this.isTopPanel=!1,this.isInnerPanel=!1,this.isBottomPanel=!1,this.isSinglePanel=!1,this.belowOpenInnerPanel=!1,this.aboveOpenInnerPanel=!1,this.separateSinglePanel=!1,this.title="Title",this.contentPreview="",this.showFooter=!1,this.noSurface=!1}render(){return h`
      <div class="panel">
        <div class="header" @click=${this._toggleContent}>
          <span class="title">${this.title}</span>
          <span class="contentPreview">${this.contentPreview}</span>

          <cv-icon class="closedIcon">expand_more</cv-icon>
          <cv-icon class="openedIcon">expand_less</cv-icon>
        </div>

        <div class="dropdown">
          <div class="content">
            <slot name="content"></slot>
            ${this.showFooter?h`
                  <div class="footer">
                    <slot name="footer"></slot>
                  </div>
                `:""}
          </div>
        </div>
      </div>
    `}resetPanel(){this.belowOpenInnerPanel=!1,this.aboveOpenInnerPanel=!1,this.separateSinglePanel=!1,this.open=!1}_toggleContent(){this.open=!this.open;const n=new CustomEvent("cv-expansionPanel-togglePanel",{detail:{message:`Panel opened: ${this}`,bubbles:!0,composed:!0,open:this.open,index:this.index}});window.dispatchEvent(n)}};o.styles=[y`
      ${P(S)}
    `];a([i({type:Number})],o.prototype,"index",2);a([i({type:Boolean,reflect:!0,attribute:"open"})],o.prototype,"open",2);a([i({type:Boolean,reflect:!0,attribute:"isTopPanel"})],o.prototype,"isTopPanel",2);a([i({type:Boolean,reflect:!0,attribute:"isInnerPanel"})],o.prototype,"isInnerPanel",2);a([i({type:Boolean,reflect:!0,attribute:"isBottomPanel"})],o.prototype,"isBottomPanel",2);a([i({type:Boolean,reflect:!0,attribute:"isSinglePanel"})],o.prototype,"isSinglePanel",2);a([i({type:Boolean,reflect:!0,attribute:"belowOpenInnerPanel"})],o.prototype,"belowOpenInnerPanel",2);a([i({type:Boolean,reflect:!0,attribute:"aboveOpenInnerPanel"})],o.prototype,"aboveOpenInnerPanel",2);a([i({type:Boolean,reflect:!0,attribute:"separateSinglePanel"})],o.prototype,"separateSinglePanel",2);a([i({type:String})],o.prototype,"title",2);a([i({type:String})],o.prototype,"contentPreview",2);a([i({type:Boolean,reflect:!0})],o.prototype,"showFooter",2);a([i({type:Boolean,reflect:!0})],o.prototype,"noSurface",2);o=a([f("cv-expansion-panel-item")],o);const K={title:"Components/Expansion panel",args:{icon:"description"},parameters:{layout:"centered"}},c=({icon:n})=>`
    <cv-expansion-panel titleWidth='16em'>

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
    `;var u,v,g;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`({
  icon
}) => {
  return \`
    <cv-expansion-panel titleWidth='16em'>

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
}`,...(g=(v=c.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const Q=["Basic"];export{c as Basic,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=expansion-panel.stories-b98021f3.js.map
