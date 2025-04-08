import{n as a,l as m,e as g,s as f,x as c,i as y,r as b}from"./query-assigned-elements-XF8sHqwE.js";import"./icon-CrSZ4KIT.js";var P=Object.defineProperty,x=Object.getOwnPropertyDescriptor,h=(n,t,i,r)=>{for(var e=r>1?void 0:r?x(t,i):t,l=n.length-1,p;l>=0;l--)(p=n[l])&&(e=(r?p(t,i,e):p(e))||e);return r&&e&&P(t,i,e),e};let d=class extends f{constructor(){super(...arguments),this.noSurface=!1,this.titleWidth="150px",this._handleToggle=n=>{const t=n.detail.index,i=this.panelItems[t],r=i.open;this.panelItems.forEach(e=>{e.resetPanel()}),r&&(i.open=!0,this.panelItems.forEach(e=>{e.index==t-1?e.index==0?e.separateSinglePanel=!0:e.aboveOpenInnerPanel=!0:e.index==t+1&&(e.index==this.panelItems.length-1&&(e.separateSinglePanel=!0),e.belowOpenInnerPanel=!0)}))}}render(){return c`
      <div class="container">
        <div class="content">
          <slot id="mainSlot"></slot>
        </div>
      </div>
    `}firstUpdated(){if(window.addEventListener("cv-expansionPanel-togglePanel",n=>this._handleToggle(n)),this.style.setProperty("--cv-expansion-panel-item-title-width",this.titleWidth),this.noSurface&&this.style.setProperty("--cv-theme-surface-container","transparent"),this.panelItems.length==1)this.panelItems[0].isSinglePanel=!0;else{let n=0;this.panelItems.forEach(t=>{n==0?t.isTopPanel=!0:n==this.panelItems.length-1?t.isBottomPanel=!0:t.isInnerPanel=!0,t.index=n,n++})}}};h([a({type:Boolean,reflect:!0})],d.prototype,"noSurface",2);h([a({type:String})],d.prototype,"titleWidth",2);h([m()],d.prototype,"panelItems",2);d=h([g("cv-expansion-panel")],d);const v=":host([isTopPanel]) .panel{border-radius:8px 8px 0 0}:host([isBottomPanel]) .panel{border-radius:0 0 8px 8px;border:none}:host([isSinglePanel]) .panel{border-radius:8px;border:none}:host([isInnerPanel]) .panel{border-radius:0}:host([open][isInnerPanel]) .panel{border-radius:8px;margin-top:16px;margin-bottom:16px;border-bottom:0}:host([open][isInnerPanel]) .header{min-height:64px;max-height:64px}:host([open][isInnerPanel]) .dropdown{grid-template-rows:1fr}:host([open][isInnerPanel]) .closedIcon{display:none}:host([open][isInnerPanel]) .openedIcon{display:inline-block}:host([open][isInnerPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isTopPanel]) .panel{border-radius:8px;margin-bottom:16px;border-bottom:0}:host([open][isTopPanel]) .header{min-height:64px;max-height:64px}:host([open][isTopPanel]) .dropdown{grid-template-rows:1fr}:host([open][isTopPanel]) .closedIcon{display:none}:host([open][isTopPanel]) .openedIcon{display:inline-block}:host([open][isTopPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isBottomPanel]) .panel{border-radius:8px;margin-top:16px;border-bottom:0}:host([open][isBottomPanel]) .header{min-height:64px;max-height:64px}:host([open][isBottomPanel]) .dropdown{grid-template-rows:1fr}:host([open][isBottomPanel]) .closedIcon{display:none}:host([open][isBottomPanel]) .openedIcon{display:inline-block}:host([open][isBottomPanel]) ::slotted([slot=content]){padding-bottom:16px}:host([open][isSinglePanel]) .header{min-height:64px;max-height:64px}:host([open][isSinglePanel]) .dropdown{grid-template-rows:1fr}:host([open][isSinglePanel]) .closedIcon{display:none}:host([open][isSinglePanel]) .openedIcon{display:inline-block}:host([open][isSinglePanel]) ::slotted([slot=content]){padding-bottom:16px}:host([belowOpenInnerPanel]) .panel{border-radius:8px 8px 0 0}:host([aboveOpenInnerPanel]) .panel{border-radius:0 0 8px 8px;border-bottom:none}:host([separateSinglePanel]) .panel{border-radius:8px;border-bottom:none}:host .panel{border-bottom:1px solid var(--mdc-theme-border, rgba(0, 0, 0, .12));background-color:var(--cv-theme-surface-container, #ffffff);transition:margin-bottom .5s,margin-top .5s}:host .header{min-height:48px;max-height:48px;padding:0 24px;display:flex;align-items:center;transition:min-height .5s,max-height .5s;cursor:pointer}:host .title{width:var(--cv-expansion-panel-item-title-width, 200px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host .contentPreview{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:16px;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, .54));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host cv-icon{padding-left:16px;margin-left:auto}:host .dropdown{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));font-family:var(--mdc-typography-body1-font-family, Arial);font-size:var(--mdc-typography-body1-font-size, 14px);font-style:normal;font-weight:var(--mdc-typography-body1-font-weight, 400);line-height:var(--mdc-typography-body1-line-height, 20px);letter-spacing:.25px}:host .content{overflow-y:hidden}:host .content slot{display:block;padding:0 24px}:host .footer{overflow-y:hidden;padding:16px 24px;border-top:1px solid var(--mdc-theme-border, rgba(0, 0, 0, .12))}:host .openedIcon{display:none}";var u=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(n,t,i,r)=>{for(var e=r>1?void 0:r?w(t,i):t,l=n.length-1,p;l>=0;l--)(p=n[l])&&(e=(r?p(t,i,e):p(e))||e);return r&&e&&u(t,i,e),e};let o=class extends f{constructor(){super(...arguments),this.index=0,this.open=!1,this.isTopPanel=!1,this.isInnerPanel=!1,this.isBottomPanel=!1,this.isSinglePanel=!1,this.belowOpenInnerPanel=!1,this.aboveOpenInnerPanel=!1,this.separateSinglePanel=!1,this.title="Title",this.contentPreview="",this.showFooter=!1,this.noSurface=!1}render(){return c`
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
            ${this.showFooter?c`
                  <div class="footer">
                    <slot name="footer"></slot>
                  </div>
                `:""}
          </div>
        </div>
      </div>
    `}resetPanel(){this.belowOpenInnerPanel=!1,this.aboveOpenInnerPanel=!1,this.separateSinglePanel=!1,this.open=!1}_toggleContent(){this.open=!this.open;const n=new CustomEvent("cv-expansionPanel-togglePanel",{detail:{message:`Panel opened: ${this}`,bubbles:!0,composed:!0,open:this.open,index:this.index}});window.dispatchEvent(n)}};o.styles=[y`
      ${b(v)}
    `];s([a({type:Number})],o.prototype,"index",2);s([a({type:Boolean,reflect:!0,attribute:"open"})],o.prototype,"open",2);s([a({type:Boolean,reflect:!0,attribute:"isTopPanel"})],o.prototype,"isTopPanel",2);s([a({type:Boolean,reflect:!0,attribute:"isInnerPanel"})],o.prototype,"isInnerPanel",2);s([a({type:Boolean,reflect:!0,attribute:"isBottomPanel"})],o.prototype,"isBottomPanel",2);s([a({type:Boolean,reflect:!0,attribute:"isSinglePanel"})],o.prototype,"isSinglePanel",2);s([a({type:Boolean,reflect:!0,attribute:"belowOpenInnerPanel"})],o.prototype,"belowOpenInnerPanel",2);s([a({type:Boolean,reflect:!0,attribute:"aboveOpenInnerPanel"})],o.prototype,"aboveOpenInnerPanel",2);s([a({type:Boolean,reflect:!0,attribute:"separateSinglePanel"})],o.prototype,"separateSinglePanel",2);s([a({type:String})],o.prototype,"title",2);s([a({type:String})],o.prototype,"contentPreview",2);s([a({type:Boolean,reflect:!0})],o.prototype,"showFooter",2);s([a({type:Boolean,reflect:!0})],o.prototype,"noSurface",2);o=s([g("cv-expansion-panel-item")],o);
