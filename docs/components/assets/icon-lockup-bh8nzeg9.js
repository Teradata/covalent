import{r as v,i as f,n as s,s as y,x as p,e as u}from"./query-assigned-elements-BJdb4KNY.js";import{t as d}from"./state-CGn7W7VL.js";import{o as h}from"./class-map-LmxYoNzI.js";import"./typography-cb1uvqFc.js";import"./icon-1XQe7S_h.js";const g='.filled{font-variation-settings:"FILL" 1}.hidden{display:none}.icon-lockup{align-items:center;display:flex;gap:4px;max-width:100%}.icon-lockup cv-typography{flex:1 0 0}.icon-lockup--primary,.icon-lockup--loading{color:var(--cv-theme-primary)}.icon-lockup--positive{color:var(--cv-theme-positive)}.icon-lockup--negative{color:var(--cv-theme-negative)}.icon-lockup--caution{color:var(--cv-theme-caution)}.text{font-feature-settings:"liga" off,"clig" off;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.trailing-icon{flex-direction:row-reverse}';var m=Object.defineProperty,I=Object.getOwnPropertyDescriptor,e=(t,i,l,n)=>{for(var c=n>1?void 0:n?I(i,l):i,r=t.length-1,a;r>=0;r--)(a=t[r])&&(c=(n?a(i,l,c):a(c))||c);return n&&c&&m(i,l,c),c};let o=class extends y{constructor(){super(...arguments),this.covalentIcon=!1,this.filledIcon=!1,this.icon="",this.scale="body1",this.state="neutral",this.trailingIcon=!1,this._hasIconSlot=!1}checkIconSlot(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="icon"]');this._hasIconSlot=t&&t.assignedNodes().length>0}iconTemplate(){const t={"covalent-icon":this.covalentIcon,filled:this.filledIcon,hidden:this._hasIconSlot};return p`<slot name="icon"></slot>
      <cv-icon
        class=${h(t)}
        style="${`font-size: var(--cv-typography-${this.scale}-line-height, 16px)`}"
      >
        ${this.icon}
      </cv-icon>`}render(){const t={"icon-lockup":!0,[`icon-lockup--${this.state}`]:this.state,"trailing-icon":this.trailingIcon};return p`
      <cv-typography class=${h(t)} scale="${this.scale}">
        ${this.iconTemplate()}
        <div class="text"><slot></slot></div>
      </cv-typography>
    `}updated(t){super.updated(t),this.checkIconSlot()}};o.styles=[f`
      ${v(g)}
    `];e([s({type:Boolean,reflect:!0})],o.prototype,"covalentIcon",2);e([s({type:Boolean,reflect:!0})],o.prototype,"filledIcon",2);e([s({type:String})],o.prototype,"icon",2);e([s({type:String})],o.prototype,"scale",2);e([s({type:String})],o.prototype,"state",2);e([s({type:Boolean})],o.prototype,"trailingIcon",2);e([d()],o.prototype,"_hasIconSlot",2);o=e([u("cv-icon-lockup")],o);
