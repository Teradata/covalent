import{r as v,i as u,n,s as f,x as p,e as d}from"./query-assigned-elements-BJdb4KNY.js";import{t as y}from"./state-CGn7W7VL.js";import{o as h}from"./class-map-LmxYoNzI.js";import"./typography-BHFGcuk9.js";import"./icon-1XQe7S_h.js";const g='.filled{font-variation-settings:"FILL" 1}.hidden{display:none}.icon-lockup{align-items:center;display:flex;gap:4px;max-width:100%;color:var(--cv-theme-on-surface)}.icon-lockup cv-typography{flex:1 0 0}.icon-lockup cv-icon.covalent-icon{--mdc-icon-font: "covalent-icons"}.icon-lockup--primary,.icon-lockup--loading{color:var(--cv-theme-primary)}.icon-lockup--positive{color:var(--cv-theme-positive)}.icon-lockup--negative{color:var(--cv-theme-negative)}.icon-lockup--caution{color:var(--cv-theme-caution)}.text{font-feature-settings:"liga" off,"clig" off;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.trailing-icon{flex-direction:row-reverse}';var m=Object.defineProperty,I=Object.getOwnPropertyDescriptor,e=(t,i,s,l)=>{for(var c=l>1?void 0:l?I(i,s):i,a=t.length-1,r;a>=0;a--)(r=t[a])&&(c=(l?r(i,s,c):r(c))||c);return l&&c&&m(i,s,c),c};let o=class extends f{constructor(){super(...arguments),this.covalentIcon=!1,this.filledIcon=!1,this.icon="",this.scale="body1",this.state="neutral",this.trailingIcon=!1,this.ICON_SIZE_MAP={headline1:"96px",headline2:"80px",headline3:"64px",headline4:"48px",headline5:"32px",subtitle1:"24px",subtitle2:"20px",button:"20px"},this._hasIconSlot=!1}get iconSize(){return this.ICON_SIZE_MAP[this.scale]??`var(--cv-typography-${this.scale}-line-height, 16px)`}checkIconSlot(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="icon"]');this._hasIconSlot=t&&t.assignedNodes().length>0}iconTemplate(){const t={"covalent-icon":this.covalentIcon,filled:this.filledIcon,hidden:this._hasIconSlot};return p`<slot name="icon"></slot>
      <cv-icon
        class=${h(t)}
        style="${`font-size: ${this.iconSize}`}"
      >
        ${this.icon}
      </cv-icon>`}render(){const t={"icon-lockup":!0,[`icon-lockup--${this.state}`]:this.state,"trailing-icon":this.trailingIcon};return p`
      <cv-typography class=${h(t)} scale="${this.scale}">
        ${this.iconTemplate()}
        <div class="text"><slot></slot></div>
      </cv-typography>
    `}updated(t){super.updated(t),this.checkIconSlot()}};o.styles=[u`
      ${v(g)}
    `];e([n({type:Boolean,reflect:!0})],o.prototype,"covalentIcon",2);e([n({type:Boolean,reflect:!0})],o.prototype,"filledIcon",2);e([n({type:String})],o.prototype,"icon",2);e([n({type:String})],o.prototype,"scale",2);e([n({type:String})],o.prototype,"state",2);e([n({type:Boolean})],o.prototype,"trailingIcon",2);e([y()],o.prototype,"_hasIconSlot",2);o=e([d("cv-icon-lockup")],o);
