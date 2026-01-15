import{r as c,i as p,n as h,x as a,e as f}from"./query-assigned-elements-BJdb4KNY.js";import{s as u,a as g,T as x}from"./textfield-pUZBZozX.js";import"./circular-progress-LWZPy8Lw.js";import{o as m}from"./class-map-LmxYoNzI.js";var $=Object.defineProperty,v=Object.getOwnPropertyDescriptor,o=(i,e,r,n)=>{for(var t=n>1?void 0:n?v(e,r):e,l=i.length-1,d;l>=0;l--)(d=i[l])&&(t=(n?d(e,r,t):d(t))||t);return n&&t&&$(e,r,t),t};let s=class extends x{constructor(){super(...arguments),this.loading=!1,this.loaderDensity=-6,this.outlined=!0}render(){const i=this.charCounter&&this.maxLength!==-1,e=!!this.helper||!!this.validationMessage||i,r={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned,"cv-text-field--loading":this.loading};return a`
      <label class="mdc-text-field ${m(r)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()} ${this.renderPrefix()}
        ${this.renderInput(e)} ${this.renderSuffix()}
        ${this.renderTrailingIcon()} ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e,i)}
    `}renderTrailingIcon(){return this.loading?a`<cv-circular-progress
        class="text-field-loading"
        indeterminate
        progress="0"
        density="${this.loaderDensity}"
      >
      </cv-circular-progress>`:this.iconTrailing?this.renderIcon(this.iconTrailing,!0):""}};s.styles=[u,p`
      ${c(g)}
    `];o([h({type:Boolean,reflect:!0})],s.prototype,"loading",2);o([h({type:Number})],s.prototype,"loaderDensity",2);s=o([f("cv-textfield")],s);
