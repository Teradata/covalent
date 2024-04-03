import{i as v,s as w,x as m,e as x,r as R}from"./query-assigned-elements-9f88bee1.js";import{_ as o}from"./tslib.es6-6921e62d.js";import{e as $,R as k}from"./ripple-handlers-32cb331f.js";import{a as I}from"./aria-property-3dc182ec.js";import{n as r}from"./property-f36ea729.js";import{t as z}from"./state-2a0073ff.js";import{e as y}from"./event-options-b5830ec0.js";import{i as L}from"./query-3e91a3b8.js";import{o as O}from"./class-map-018c3a6a.js";import{l as b}from"./if-defined-c3862b86.js";import{i as h}from"./material-codepoints-6ade1b53.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./style-map-4c420736.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const T=v`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class t extends w{constructor(){super(...arguments),this.disabled=!1,this.onIcon="",this.offIcon="",this.on=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new k(()=>(this.shouldRenderRipple=!0,this.ripple))}handleClick(){this.on=!this.on,this.dispatchEvent(new CustomEvent("icon-button-toggle-change",{detail:{isOn:this.on},bubbles:!0}))}click(){this.mdcRoot.focus(),this.mdcRoot.click()}focus(){this.rippleHandlers.startFocus(),this.mdcRoot.focus()}blur(){this.rippleHandlers.endFocus(),this.mdcRoot.blur()}renderRipple(){return this.shouldRenderRipple?m`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}render(){const n={"mdc-icon-button--on":this.on},e=this.ariaLabelOn!==void 0&&this.ariaLabelOff!==void 0,c=e?void 0:this.on,i=e?this.on?this.ariaLabelOn:this.ariaLabelOff:this.ariaLabel;return m`<button
          class="mdc-icon-button mdc-icon-button--display-flex ${O(n)}"
          aria-pressed="${b(c)}"
          aria-label="${b(i)}"
          @click="${this.handleClick}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >${this.renderRipple()}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`}handleRippleMouseDown(n){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(n)}handleRippleTouchStart(n){this.rippleHandlers.startPress(n)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}o([L(".mdc-icon-button")],t.prototype,"mdcRoot",void 0);o([I,r({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0);o([r({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);o([r({type:String})],t.prototype,"onIcon",void 0);o([r({type:String})],t.prototype,"offIcon",void 0);o([r({type:String})],t.prototype,"ariaLabelOn",void 0);o([r({type:String})],t.prototype,"ariaLabelOff",void 0);o([r({type:Boolean,reflect:!0})],t.prototype,"on",void 0);o([$("mwc-ripple")],t.prototype,"ripple",void 0);o([z()],t.prototype,"shouldRenderRipple",void 0);o([y({passive:!0})],t.prototype,"handleRippleMouseDown",null);o([y({passive:!0})],t.prototype,"handleRippleTouchStart",null);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let d=class extends t{};d.styles=[T];d=o([x("mwc-icon-button-toggle")],d);const B=`:host{border-radius:50%;color:var(--cv-theme-on-surface-variant)}:host([disabled]){background-color:transparent}:host([on]){--mdc-ripple-press-opacity: .16;--mdc-ripple-hover-opacity: .12;--mdc-ripple-focus-opacity: .16;background-color:var(--cv-theme-primary-8);color:var(--cv-theme-primary)}
`;var H=Object.defineProperty,C=Object.getOwnPropertyDescriptor,D=(s,n,e,c)=>{for(var i=c>1?void 0:c?C(n,e):n,l=s.length-1,p;l>=0;l--)(p=s[l])&&(i=(c?p(n,e,i):p(i))||i);return c&&i&&H(n,e,i),i};let u=class extends d{};u.styles=[...d.styles,v`
      ${R(B)}
    `];u=D([x("cv-icon-button-toggle")],u);const X={title:"Components/Icon Button Toggle",argTypes:{onIcon:{control:"select",options:Object.keys(h)},offIcon:{control:"select",options:Object.keys(h)}},args:{onIcon:"flashlight_on",offIcon:"flashlight_off",disabled:!1,on:!1}},P=({disabled:s,onIcon:n,offIcon:e,on:c})=>`
    <cv-icon-button-toggle onIcon="${n}" offIcon="${e}"${s?" disabled":""}${c?" on":""}>
    </cv-icon-button-toggle>`,a=P.bind({});var f,g,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`({
  disabled,
  onIcon,
  offIcon,
  on
}) => {
  return \`
    <cv-icon-button-toggle onIcon="\${onIcon}" offIcon="\${offIcon}"\${disabled ? \` disabled\` : \`\`}\${on ? ' on' : ''}>
    </cv-icon-button-toggle>\`;
}`,...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const Y=["Basic"];export{a as Basic,Y as __namedExportsOrder,X as default};
