/*! For license information please see 363.15672f27f6bb1dc59483.manager.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcovalent=self.webpackChunkcovalent||[]).push([[363],{5363:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Figspec:()=>Figspec,default:()=>components_Figspec});var react=__webpack_require__(67294),react_namespaceObject=__webpack_require__.t(react,2);const css_tag_t=window,css_tag_e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class css_tag_o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(css_tag_e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new css_tag_o(n,t,s)},c=css_tag_e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new css_tag_o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var reactive_element_s;const reactive_element_e=window,reactive_element_r=reactive_element_e.trustedTypes,h=reactive_element_r?reactive_element_r.emptyScript:"",reactive_element_o=reactive_element_e.reactiveElementPolyfillSupport,reactive_element_n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_n,reflect:!1,hasChanged:a};class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((s,n)=>{css_tag_e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=css_tag_t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:reactive_element_n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:reactive_element_n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var lit_html_t;d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==reactive_element_o||reactive_element_o({ReactiveElement:d}),(null!==(reactive_element_s=reactive_element_e.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:reactive_element_e.reactiveElementVersions=[]).push("1.4.0");const lit_html_i=window,lit_html_s=lit_html_i.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o=`lit$${(Math.random()+"").slice(9)}$`,lit_html_n="?"+lit_html_o,lit_html_l=`<${lit_html_n}>`,lit_html_h=document,lit_html_r=(t="")=>lit_html_h.createComment(t),lit_html_d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,lit_html_c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lit_html_a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),lit_html_y=g(1),w=g(2),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,E=lit_html_h.createTreeWalker(lit_html_h,129,null,!1),C=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=lit_html_a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===lit_html_a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+lit_html_l:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+lit_html_o+y):s+lit_html_o+(-2===c?(n.push(void 0),i):y)}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==lit_html_e?lit_html_e.createHTML(u):u,n]};class P{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,i);if(this.el=P.createElement(v,e),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=E.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(lit_html_o)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(lit_html_o),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?R:"?"===i[1]?H:"@"===i[1]?I:M})}else c.push({type:6,index:h})}for(const i of t)l.removeAttribute(i)}if($.test(l.tagName)){const t=l.textContent.split(lit_html_o),i=t.length-1;if(i>0){l.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],lit_html_r()),E.nextNode(),c.push({type:2,index:++h});l.append(t[i],lit_html_r())}}}else if(8===l.nodeType)if(l.data===lit_html_n)c.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(lit_html_o,t+1));)c.push({type:7,index:h}),t+=lit_html_o.length-1}h++}}static createElement(t,i){const s=lit_html_h.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=lit_html_d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=V(t,r._$AS(t,i.values),r,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_h).importNode(s,!0);E.currentNode=o;let n=E.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new lit_html_S(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r]}l!==(null==d?void 0:d.index)&&(n=E.nextNode(),l++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class lit_html_S{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),lit_html_d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):lit_html_c(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==b&&lit_html_d(this._$AH)?this._$AA.nextSibling.data=t:this.k(lit_html_h.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new N(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new P(t)),i}O(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new lit_html_S(this.S(lit_html_r()),this.S(lit_html_r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class M{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!lit_html_d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!lit_html_d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.P(t)}P(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends M{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===b?void 0:t}}const k=lit_html_s?lit_html_s.emptyScript:"";class H extends M{constructor(){super(...arguments),this.type=4}P(t){t&&t!==b?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends M{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Z=lit_html_i.litHtmlPolyfillSupport;var lit_element_l,lit_element_o;null==Z||Z(P,lit_html_S),(null!==(lit_html_t=lit_html_i.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:lit_html_i.litHtmlVersions=[]).push("2.3.0");class lit_element_s extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new lit_html_S(i.insertBefore(lit_html_r(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return x}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.2.2");const property_i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}};function property_e(e){return(n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i)})(e,n,t):property_i(e,n)}var query_assigned_elements_n;null===(query_assigned_elements_n=window.HTMLSlotElement)||void 0===query_assigned_elements_n||query_assigned_elements_n.prototype.assignedElements;const ErrorMessage=({title,children})=>lit_html_y`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${title}</span
      >
      <span class="error-description">${children}</span>
    </div>
  </div>
`,ErrorMessage_styles=i`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`,directive_t_ATTRIBUTE=1;const style_map_i=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==directive_t_ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.vt){this.vt=new Set;for(const t in r)this.vt.add(t);return this.render(r)}this.vt.forEach((t=>{null==r[t]&&(this.vt.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in r){const e=r[t];null!=e&&(this.vt.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e)}return x}});function absRect(rect){return{top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height,left:rect.x}}function round(n){return Math.round(100*n)/100}function extendStyles(left,right){return[...stylesToArray(left),...stylesToArray(right)]}function stylesToArray(styles){return styles?styles instanceof Array?styles:[styles]:[]}var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};const NodeSelectableMixin=superClass=>{class NodeSelectable extends superClass{constructor(...args){super(...args),this.selectedNode=null}updated(changedProperties){super.updated(changedProperties),changedProperties.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return __decorate([property_e({attribute:!1})],NodeSelectable.prototype,"selectedNode",void 0),NodeSelectable};function shouldSkipEvent(ev){return 0===ev.touches.length||ev.touches.length>2}const TouchGestureMixin=superClass=>class CTouchGesture extends superClass{constructor(...args){super(...args),this.previousTouches=null,this.addEventListener("touchstart",(ev=>{shouldSkipEvent(ev)||(ev.preventDefault(),this.previousTouches=ev.touches)})),this.addEventListener("touchend",(ev=>{shouldSkipEvent(ev)||(ev.preventDefault(),this.previousTouches=null)})),this.addEventListener("touchcancel",(ev=>{shouldSkipEvent(ev)||(ev.preventDefault(),this.previousTouches=null)})),this.addEventListener("touchmove",(ev=>{if(shouldSkipEvent(ev))return;const previousTouches=Array.from(this.previousTouches||[]),currentTouches=Array.from(ev.touches);this.previousTouches=ev.touches,currentTouches.length===previousTouches.length&&currentTouches.every((t=>previousTouches.some((pt=>pt.identifier===t.identifier))))&&(1!==currentTouches.length?this.onTouchPinch(function getDistance(a,b){return Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2))}({x:currentTouches[0].pageX,y:currentTouches[0].pageY},{x:previousTouches[0].pageX,y:previousTouches[0].pageY})):this.onTouchPan({x:currentTouches[0].pageX-previousTouches[0].pageX,y:currentTouches[0].pageY-previousTouches[0].pageY}))}))}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(delta){}onTouchPinch(delta){}};var PositionedMixin_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)},__classPrivateFieldSet=function(receiver,privateMap,value){if(!privateMap.has(receiver))throw new TypeError("attempted to set private field on non-instance");return privateMap.set(receiver,value),value};const PositionedMixin=superClass=>{var _isDragModeOn,_movePanel,_keyDown,_keyUp,_listenToKeyboardEvents;class Positioned extends(TouchGestureMixin(superClass)){constructor(...args){super(...args),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,_isDragModeOn.set(this,!1),_movePanel.set(this,((shiftX,shiftY)=>{this.panX+=shiftX/this.scale/window.devicePixelRatio,this.panY+=shiftY/this.scale/window.devicePixelRatio})),_keyDown.set(this,(event=>{"Space"!==event.code||__classPrivateFieldGet(this,_isDragModeOn)||(__classPrivateFieldSet(this,_isDragModeOn,!0),document.body.style.cursor="grab")})),_keyUp.set(this,(event=>{"Space"===event.code&&__classPrivateFieldGet(this,_isDragModeOn)&&(__classPrivateFieldSet(this,_isDragModeOn,!1),document.body.style.cursor="auto")})),_listenToKeyboardEvents.set(this,(()=>{document.addEventListener("keyup",__classPrivateFieldGet(this,_keyUp)),document.addEventListener("keydown",__classPrivateFieldGet(this,_keyDown))})),this.addEventListener("wheel",(ev=>{if(this.isMovable)if(ev.preventDefault(),ev.ctrlKey){let{deltaY}=ev;1===ev.deltaMode&&(deltaY*=15);const prevScale=this.scale;this.scale*=1-deltaY/(.5*(1e3-this.zoomSpeed));const offsetX=ev.offsetX-this.offsetWidth/2,offsetY=ev.offsetY-this.offsetHeight/2;this.panX+=offsetX/this.scale-offsetX/prevScale,this.panY+=offsetY/this.scale-offsetY/prevScale}else{const speed=.002*this.panSpeed;this.panX-=ev.deltaX*speed/this.scale,this.panY-=ev.deltaY*speed/this.scale}}),{passive:!1});let gestureStartScale=1;this.addEventListener("gesturestart",(ev=>{ev.preventDefault(),gestureStartScale=this.scale})),this.addEventListener("gesturechange",(_ev=>{const ev=_ev;ev.preventDefault(),this.scale=gestureStartScale*ev.scale})),this.addEventListener("pointermove",(ev=>{4&ev.buttons&&(ev.preventDefault(),__classPrivateFieldGet(this,_movePanel).call(this,ev.movementX,ev.movementY))})),__classPrivateFieldGet(this,_listenToKeyboardEvents).call(this),this.onmousedown=()=>{__classPrivateFieldGet(this,_isDragModeOn)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX,movementY})=>{__classPrivateFieldGet(this,_movePanel).call(this,movementX,movementY)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",__classPrivateFieldGet(this,_keyUp)),document.removeEventListener("keydown",__classPrivateFieldGet(this,_keyDown)),super.disconnectedCallback()}updated(changedProperties){super.updated(changedProperties),changedProperties.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(changedProperties.has("panX")||changedProperties.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(delta){this.panX+=delta.x/this.scale,this.panY+=delta.y/this.scale}onTouchPinch(delta){this.scale*=1-delta/1e3}}return _isDragModeOn=new WeakMap,_movePanel=new WeakMap,_keyDown=new WeakMap,_keyUp=new WeakMap,_listenToKeyboardEvents=new WeakMap,PositionedMixin_decorate([property_e({attribute:!1})],Positioned.prototype,"panX",void 0),PositionedMixin_decorate([property_e({attribute:!1})],Positioned.prototype,"panY",void 0),PositionedMixin_decorate([property_e({attribute:!1})],Positioned.prototype,"scale",void 0),PositionedMixin_decorate([property_e({type:Number,attribute:"zoom-speed"})],Positioned.prototype,"zoomSpeed",void 0),PositionedMixin_decorate([property_e({type:Number,attribute:"pan-speed"})],Positioned.prototype,"panSpeed",void 0),Positioned},guidesCache=new Map,Guides=({node,distanceTo,reverseScale,fontSize})=>{const combinedId=node.id+"\n"+distanceTo.id;let guides=guidesCache.get(combinedId);return guides||(guides=function getDistanceGuides(selected,compared){const a=absRect(selected),b=absRect(compared),isYIntersecting=!(a.top>b.bottom||a.bottom<b.top),isXIntersecting=!(a.left>b.right||a.right<b.left);if(isXIntersecting&&isYIntersecting){const intersectCenter={x:(Math.max(a.left,b.left)+Math.min(a.right,b.right))/2,y:(Math.max(a.top,b.top)+Math.min(a.bottom,b.bottom))/2};return[{points:[{x:a.left,y:intersectCenter.y},{x:b.left,y:intersectCenter.y}]},{points:[{x:a.right,y:intersectCenter.y},{x:b.right,y:intersectCenter.y}]},{points:[{y:a.top,x:intersectCenter.x},{y:b.top,x:intersectCenter.x}]},{points:[{y:a.bottom,x:intersectCenter.x},{y:b.bottom,x:intersectCenter.x}]}]}const isALeft=a.left>b.right,isABelow=a.top>b.bottom,selectedCenter={x:selected.x+selected.width/2,y:selected.y+selected.height/2};return[isXIntersecting?null:{points:[{x:isALeft?a.left:a.right,y:selectedCenter.y},{x:isALeft?b.right:b.left,y:selectedCenter.y}],bisector:isYIntersecting?void 0:[{x:isALeft?b.right:b.left,y:selectedCenter.y},{x:isALeft?b.right:b.left,y:isABelow?b.bottom:b.top}]},isYIntersecting?null:{points:[{y:isABelow?a.top:a.bottom,x:selectedCenter.x},{y:isABelow?b.bottom:b.top,x:selectedCenter.x}],bisector:isXIntersecting?void 0:[{y:isABelow?b.bottom:b.top,x:selectedCenter.x},{y:isABelow?b.bottom:b.top,x:isALeft?b.right:b.left}]}].filter((x=>!!x))}(node.absoluteBoundingBox,distanceTo.absoluteBoundingBox),guidesCache.set(combinedId,guides)),[...guides.map((guide=>(({guide,reverseScale})=>{const xLength=Math.abs(guide.points[0].x-guide.points[1].x),yLength=Math.abs(guide.points[0].y-guide.points[1].y);return 0===xLength&&0===yLength?null:w`
    <line
      class="distance-line"
      x1=${guide.points[0].x}
      y1=${guide.points[0].y}
      x2=${guide.points[1].x}
      y2=${guide.points[1].y}
    />

    ${guide.bisector&&w`
        <line
          class="distance-line"
          x1=${guide.bisector[0].x}
          y1=${guide.bisector[0].y}
          x2=${guide.bisector[1].x}
          y2=${guide.bisector[1].y}
          style=${style_map_i({strokeDasharray:""+4*reverseScale})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `})({guide,reverseScale}))),...guides.map((guide=>(({guide,reverseScale,fontSize})=>{const xLength=Math.abs(guide.points[0].x-guide.points[1].x),yLength=Math.abs(guide.points[0].y-guide.points[1].y);if(0===xLength&&0===yLength)return null;const text=round(Math.max(xLength,yLength)).toString(10),width=text.length*fontSize*.5,startMargin=.25*fontSize,vPadding=.25*fontSize,hPadding=.5*fontSize,x=xLength>yLength?(guide.points[0].x+guide.points[1].x)/2-width/2:guide.points[0].x,y=xLength>yLength?guide.points[0].y:(guide.points[0].y+guide.points[1].y)/2-fontSize/2,transform=[`scale(${reverseScale})`,xLength>yLength?`translate(0, ${startMargin+vPadding})`:`translate(${startMargin+hPadding}, 0)`].join(" "),cx=x+width/2,transformOrigin=xLength>yLength?`${cx} ${y}`:`${x} ${y+fontSize/2}`;return w`
    <g class="distance-tooltip">
      <rect
        x=${x-hPadding}
        y=${y-vPadding}
        rx="2"
        width=${width+2*hPadding}
        height=${fontSize+2*vPadding}
        transform=${transform}
        transform-origin=${transformOrigin}
        stroke="none"
      />

      <text
        x=${cx}
        y=${y+fontSize-vPadding/2}
        text-anchor="middle"
        transform=${transform}
        transform-origin=${transformOrigin}
        stroke="none"
        fill="white"
        style="font-size: ${fontSize}px"
      >
        ${text}
      </text>
    </g>
  `})({guide,reverseScale,fontSize})))]},DistanceGuide_styles=i`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`,CopyIcon=({onClick=()=>{}})=>w`
  <svg @click=${onClick} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,extractColorStyle=color=>0===color.a?"transparent":color.a<1?`rgba(${rgbToIntArray(color).join(", ")}, ${color.a.toFixed(2)})`:rgbToHex(color);class Gradient{constructor(data){this.gradientHandles={start:data.gradientHandlePositions[0],end:data.gradientHandlePositions[1]},this.colors=data.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map(((color,index)=>color+" "+this.floatToPercent(this.colors[index].position)))}get cssColor(){const cssGradientArray=this.cssGradientArray;return cssGradientArray.unshift(this.angle+"deg"),`linear-gradient(${cssGradientArray.join(", ")})`}createColorObjects(colors){return colors.map((({color})=>extractColorStyle(color)))}floatToPercent(value){return(value*=100).toFixed(0)+"%"}calculateAngle(startHandle,endHandle){const radians=Math.atan(this.calculateGradient(startHandle,endHandle));return parseInt(this.radToDeg(radians).toFixed(1))}calculateGradient(startHandle,endHandle){return(endHandle.y-startHandle.y)/(endHandle.x-startHandle.x)*-1}radToDeg(radian){return 180*radian/Math.PI}}class NodeStyles{constructor(node){var _a,_b,_c;if(this.hasPadding=!1,this.height=`${Math.trunc(node.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(node.absoluteBoundingBox.width)}px`,(node.horizontalPadding||node.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${node.horizontalPadding}px`,this.verticalPadding=`${node.verticalPadding}px`),node.style&&(this.fontFamily=node.style.fontFamily,this.fontPostScriptName=null===(_a=node.style.fontPostScriptName)||void 0===_a?void 0:_a.replace("-"," "),this.fontWeight=node.style.fontWeight,this.fontSize=`${Math.ceil(node.style.fontSize)}px`,this.lineHeight=`${Math.trunc(node.style.lineHeightPx)}px`),node.rectangleCornerRadii&&(this.borderRadius=node.rectangleCornerRadii.filter((radius=>radius===node.cornerRadius)).length<4?`${node.rectangleCornerRadii.join("px ")}px`:`${node.cornerRadius}px`),node.backgroundColor||node.backgroundColor){const color=node.backgroundColor||(null===(_b=node.background)||void 0===_b?void 0:_b[0].color);this.background=extractColorStyle(color)}const fillColor=null===(_c=node.fills)||void 0===_c?void 0:_c[0];if(fillColor&&!1!==fillColor.visible&&("TEXT"===node.type?this.color=extractColorStyle(fillColor.color):fillColor.type.includes("GRADIENT")?this.backgroundImage=new Gradient(fillColor).cssColor:"SOLID"===fillColor.type&&(this.background=extractColorStyle(fillColor.color))),node.strokes&&node.strokes.length>0&&(this.borderColor=extractColorStyle(node.strokes[0].color),this.border=`${node.strokeWeight}px solid ${this.borderColor}`),node.effects&&node.effects.length>0){const{offset,radius,color}=node.effects[0];this.boxShadowColor=extractColorStyle(color),this.boxShadow=`${(null==offset?void 0:offset.x)||0}px ${(null==offset?void 0:offset.y)||0}px 0 ${radius} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(getStyleRule).join("\n")}}const rgbToIntArray=color=>[Math.trunc(255*color.r),Math.trunc(255*color.g),Math.trunc(255*color.b)],rgbToHex=color=>{const[r,g,b]=rgbToIntArray(color);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)},getStyleRule=({property,value})=>`${property}: ${value};`;var __awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))};const copy=text=>__awaiter(void 0,void 0,void 0,(function*(){yield navigator.clipboard.writeText(text)})),View=({node,onClose})=>{if(!node)return null;const nodeStyles=new NodeStyles(node),stopPropagation=ev=>ev.stopPropagation();return lit_html_y`
    <div
      class="inspector-view"
      @click=${stopPropagation}
      @wheel=${stopPropagation}
      @keydown=${stopPropagation}
      @keyup=${stopPropagation}
      @pointermove=${stopPropagation}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${node.name}</h4>
          ${(({onClick=()=>{}})=>w`
  <svg @click=${onClick} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`)({onClick:onClose})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${nodeStyles.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${nodeStyles.height}
            </p>
          </div>
          ${nodeStyles.fontPostScriptName?lit_html_y`<p class="inspector-property">
                <span>Font:</span>
                ${nodeStyles.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${nodeStyles.hasPadding?lit_html_y`<div class="inspector-section">
            <h4>Layout</h4>
            ${nodeStyles.horizontalPadding&&lit_html_y`<p class="inspector-property">
              ${w`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`} ${nodeStyles.horizontalPadding}
            </p>`}
            ${nodeStyles.verticalPadding&&lit_html_y`<p class="inspector-property">
              ${w`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`} ${nodeStyles.verticalPadding}
            </p>`}
          </div>`:null}
      ${node.characters?lit_html_y`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${CopyIcon({onClick:()=>copy(node.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${node.characters}
            </p>
          </div>`:null}
      ${StylesSection(nodeStyles)}
    </div>
  `},StylesSection=nodeStyles=>{const styles=nodeStyles.getStyles();return lit_html_y`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${CopyIcon({onClick:()=>copy(nodeStyles.getStyleSheet())})}
    </div>
    <div class="code-section selectable-content">
      ${styles.map(CSSProperty)}
    </div>
  </div>`},CSSProperty=cssProperty=>{const{property,value,color}=cssProperty;let coloredSquare=null;switch(property){case"background":case"fill":case"border":case"box-shadow":case"color":coloredSquare=lit_html_y`<span
        class="color-preview"
        style="background-color: ${color}"
      ></span>`;break;case"background-image":coloredSquare=lit_html_y`<span
        class="color-preview"
        style="background-image: ${value}"
      ></span>`}return lit_html_y`<div class="css-property" @click=${()=>copy(getStyleRule(cssProperty))}>
    <span>${property}:</span>${coloredSquare}<span class="css-value">${value}</span>;</span>
  </div>`},InspectorView_styles=i`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`,Outline=({node,selected=!1,computedThickness,onClick})=>{const{x,y,width,height}=node.absoluteBoundingBox,radius="cornerRadius"in node&&node.cornerRadius?{topLeft:node.cornerRadius,topRight:node.cornerRadius,bottomRight:node.cornerRadius,bottomLeft:node.cornerRadius}:"rectangleCornerRadii"in node&&node.rectangleCornerRadii?{topLeft:node.rectangleCornerRadii[0],topRight:node.rectangleCornerRadii[1],bottomRight:node.rectangleCornerRadii[2],bottomLeft:node.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},shift=computedThickness/2,lineTo=(x,y)=>`L${x},${y}`,arcTo=(r,x,y)=>`A${r},${r} 0 0 1 ${x},${y}`,boxPath=[((x,y)=>`M${x},${y}`)(radius.topLeft+shift,shift),lineTo(width-radius.topRight,shift),arcTo(radius.topRight-shift,width-shift,radius.topRight),lineTo(width-shift,height-radius.bottomRight),arcTo(radius.bottomRight-shift,width-radius.bottomRight,height-shift),lineTo(radius.bottomLeft,height-shift),arcTo(radius.bottomLeft-shift,shift,height-radius.bottomLeft),lineTo(shift,radius.topLeft),arcTo(radius.topLeft-shift,radius.topLeft,shift),"Z"].join(" ");return w`
    <path
      class="guide"
      d=${boxPath}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${x}, ${y})"
      ?data-selected=${selected}
      @click=${onClick}
    />
  `},Node_styles=i`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`,DAY=864e5,intervals=[{gte:31536e6,divisor:31536e6,unit:"year"},{gte:2592e6,divisor:2592e6,unit:"month"},{gte:6048e5,divisor:6048e5,unit:"week"},{gte:DAY,divisor:DAY,unit:"day"},{gte:36e5,divisor:36e5,unit:"hour"},{gte:6e4,divisor:6e4,unit:"minute"},{gte:3e4,divisor:1e3,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],getTime=targetDate=>("object"==typeof targetDate?targetDate:new Date(targetDate)).getTime(),Footer_styles=i`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,Footer=metadata=>{if(!metadata||!metadata.link||void 0===metadata.link||"undefined"===metadata.link)return null;const{link,timestamp,fileName}=metadata;return lit_html_y`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${link}"
  >
    <span class="figma-footer--icon"> ${w`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`} </span>
    <span class="figma-footer--title"> ${fileName} </span>
    <span
      title="Last time edited: ${new Date(timestamp).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${((date,nowDate=Date.now(),rft=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{const diff=getTime(nowDate)-getTime(date),diffAbs=Math.abs(diff);for(const interval of intervals)if(diffAbs>=interval.gte){const x=Math.round(Math.abs(diff)/interval.divisor),isInFuture=diff<0,intervalUnit=interval.unit;return intervalUnit?rft.format(isInFuture?x:-x,intervalUnit):interval.text}})(timestamp)}
    </span>
  </a>`};var ViewerMixin_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},ViewerMixin_classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)},ViewerMixin_classPrivateFieldSet=function(receiver,privateMap,value){if(!privateMap.has(receiver))throw new TypeError("attempted to set private field on non-instance");return privateMap.set(receiver,value),value};const ViewerMixin=superClass=>{var _canvasSize,_effectMargins,_flattenedNodes,_handleNodeClick,_getNodeById;class Viewer extends(NodeSelectableMixin(PositionedMixin(superClass))){constructor(...args){super(...args),this.zoomMargin=50,this.link="",_canvasSize.set(this,void 0),_effectMargins.set(this,void 0),_flattenedNodes.set(this,void 0),_handleNodeClick.set(this,(node=>ev=>{ev.preventDefault(),ev.stopPropagation(),this.selectedNode=node})),_getNodeById.set(this,(id=>{var _a,_b;return null!==(_b=null===(_a=ViewerMixin_classPrivateFieldGet(this,_flattenedNodes))||void 0===_a?void 0:_a.find((n=>n.id===id)))&&void 0!==_b?_b:null}))}static get styles(){return extendStyles(super.styles,[i`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,Node_styles,ErrorMessage_styles,DistanceGuide_styles,InspectorView_styles,Footer_styles])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return ViewerMixin_classPrivateFieldGet(this,_canvasSize)&&ViewerMixin_classPrivateFieldGet(this,_flattenedNodes)?null:ErrorMessage({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."})}render(){if(this.error)return this.error instanceof Error?ErrorMessage({title:this.error.name||"Error",children:this.error.message}):"string"==typeof this.error?ErrorMessage({title:"Error",children:this.error}):this.error;const canvasSize=ViewerMixin_classPrivateFieldGet(this,_canvasSize),reverseScale=1/this.scale,guideThickness=`calc(var(--guide-thickness) * ${reverseScale})`,computedGuideThickness=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),computedGuideTooltipFontSize=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return lit_html_y`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${canvasSize.width}px;
          height: ${canvasSize.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map((([nodeId,uri])=>{var _a;const node=ViewerMixin_classPrivateFieldGet(this,_getNodeById).call(this,nodeId);if(!node||!("absoluteBoundingBox"in node)||!(null===(_a=ViewerMixin_classPrivateFieldGet(this,_effectMargins))||void 0===_a?void 0:_a[node.id]))return null;const margin=ViewerMixin_classPrivateFieldGet(this,_effectMargins)[node.id];return lit_html_y`
                <img class="rendered-image" src="${uri}"
                style=${style_map_i({top:node.absoluteBoundingBox.y-canvasSize.y+"px",left:node.absoluteBoundingBox.x-canvasSize.x+"px",marginTop:-margin.top+"px",marginLeft:-margin.left+"px",width:node.absoluteBoundingBox.width+margin.left+margin.right+"px",height:node.absoluteBoundingBox.height+margin.top+margin.bottom+"px"})}"
                " />
              `}))}
            ${this.selectedNode&&(({nodeSize:{x,y,width,height},offsetX,offsetY,reverseScale})=>lit_html_y`
    <div class="tooltip" style="${style_map_i({top:`${offsetY+y+height}px`,left:`${offsetX+x+width/2}px`,transform:`translateX(-50%) scale(${reverseScale}) translateY(0.25em)`})}">
      ${round(width)} x ${round(height)}
    </div>
  `)({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-canvasSize.x,offsetY:-canvasSize.y,reverseScale})}
            ${w`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${style_map_i({left:-canvasSize.x+"px",top:-canvasSize.y+"px",strokeWidth:guideThickness})}
            >
              ${this.selectedNode&&Outline({node:this.selectedNode,selected:!0,computedThickness:computedGuideThickness*reverseScale})}

              ${ViewerMixin_classPrivateFieldGet(this,_flattenedNodes).map((node=>{var _a;return node.id===(null===(_a=this.selectedNode)||void 0===_a?void 0:_a.id)?null:w`
                  <g>
                    ${Outline({node,computedThickness:computedGuideThickness*reverseScale,onClick:ViewerMixin_classPrivateFieldGet(this,_handleNodeClick).call(this,node)})}
                    ${this.selectedNode&&Guides({node,distanceTo:this.selectedNode,reverseScale,fontSize:computedGuideTooltipFontSize})}
                  </g>
                `}))}
            </svg>
          `}
          </div>
          ${View({node:this.selectedNode,onClose:this.deselectNode})}
          ${Footer(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(changedProperties){super.updated(changedProperties)}__updateTree(node){if("CANVAS"!==node.type&&"FRAME"!==node.type&&"COMPONENT"!==node.type&&"COMPONENT_SET"!==node.type)throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");ViewerMixin_classPrivateFieldSet(this,_canvasSize,"CANVAS"===node.type?function getCanvasSize(node){const left=[],right=[],top=[],bottom=[];for(const child of node.children){if("FRAME"!==child.type&&"COMPONENT"!==child.type)continue;const{x,y,width,height}=child.absoluteBoundingBox;left.push(x),right.push(x+width),top.push(y),bottom.push(y+height)}const minX=Math.min(...left),minY=Math.min(...top);return{x:minX,y:minY,width:Math.abs(Math.max(...right)-minX),height:Math.abs(Math.min(...bottom)-minY)}}(node):node.absoluteBoundingBox),ViewerMixin_classPrivateFieldSet(this,_flattenedNodes,flattenNode(node)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;const containers=Object.keys(this.__images).map(ViewerMixin_classPrivateFieldGet(this,_getNodeById)).filter((n=>!!n));ViewerMixin_classPrivateFieldSet(this,_effectMargins,containers.reduce(((margin,node)=>"absoluteBoundingBox"in node?Object.assign(Object.assign({},margin),{[node.id]:getEffectMargin(node,flattenNode(node))}):margin),{})),this.requestUpdate()}resetZoom(){if(ViewerMixin_classPrivateFieldGet(this,_canvasSize)){const{width,height}=ViewerMixin_classPrivateFieldGet(this,_canvasSize),{width:elementWidth,height:elementHeight}=this.getBoundingClientRect(),wDiff=elementWidth/(width+2*this.zoomMargin),hDiff=elementHeight/(height+2*this.zoomMargin);this.scale=Math.min(wDiff,hDiff,1)}}}return _canvasSize=new WeakMap,_effectMargins=new WeakMap,_flattenedNodes=new WeakMap,_handleNodeClick=new WeakMap,_getNodeById=new WeakMap,ViewerMixin_decorate([property_e({type:Number,attribute:"zoom-margin"})],Viewer.prototype,"zoomMargin",void 0),ViewerMixin_decorate([property_e({type:String,attribute:"link"})],Viewer.prototype,"link",void 0),Viewer};function getEffectMargin(container,nodes){const points=nodes.map((node=>{if(!("effects"in node))return{top:node.absoluteBoundingBox.y,right:node.absoluteBoundingBox.x+node.absoluteBoundingBox.width,bottom:node.absoluteBoundingBox.y+node.absoluteBoundingBox.height,left:node.absoluteBoundingBox.x};const blurRadiuses=node.effects.filter((effect=>effect.visible&&"LAYER_BLUR"===effect.type)).map((effect=>effect.radius)),shadowMargins=node.effects.filter((effect=>effect.visible&&"DROP_SHADOW"===effect.type&&!!effect.offset)).map((effect=>({left:effect.radius-effect.offset.x,top:effect.radius-effect.offset.y,right:effect.radius+effect.offset.x,bottom:effect.radius+effect.offset.y}))),margin_top=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.top))),margin_right=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.right))),margin_bottom=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.bottom))),margin_left=Math.max(0,...blurRadiuses,...shadowMargins.map((margin=>margin.left)));return{top:node.absoluteBoundingBox.y-margin_top,right:node.absoluteBoundingBox.x+node.absoluteBoundingBox.width+margin_right,bottom:node.absoluteBoundingBox.y+node.absoluteBoundingBox.height+margin_bottom,left:node.absoluteBoundingBox.x-margin_left}})),bounds_top=Math.min(...points.map((p=>p.top))),bounds_right=Math.max(...points.map((p=>p.right))),bounds_bottom=Math.max(...points.map((p=>p.bottom))),bounds_left=Math.min(...points.map((p=>p.left)));return{top:container.absoluteBoundingBox.y-bounds_top,right:bounds_right-container.absoluteBoundingBox.x-container.absoluteBoundingBox.width,bottom:bounds_bottom-container.absoluteBoundingBox.y-container.absoluteBoundingBox.height,left:container.absoluteBoundingBox.x-bounds_left}}function flattenNode(node,depth=0){return"absoluteBoundingBox"in node?"children"in node&&0!==node.children.length?[Object.assign(Object.assign({},node),{depth}),...node.children.map((child=>flattenNode(child,depth+1))).flat()]:[Object.assign(Object.assign({},node),{depth})]:node.children.map((child=>flattenNode(child,depth+1))).flat()}var FigspecFrameViewer_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};class FigspecFrameViewer extends(ViewerMixin(lit_element_s)){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;const documentNode=Object.values(this.nodes.nodes)[0];return documentNode&&"absoluteBoundingBox"in documentNode.document?documentNode.document:null}get __images(){return this.documentNode&&this.renderedImage?{[this.documentNode.id]:this.renderedImage}:{}}get error(){return this.nodes&&this.renderedImage?this.documentNode?super.error?super.error:void 0:ErrorMessage({title:"Parameter Error",children:lit_html_y`
          <span> Document node is empty or does not have size. </span>
        `}):ErrorMessage({title:"Parameter error",children:lit_html_y`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`})}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(changedProperties){if(super.updated(changedProperties),changedProperties.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}changedProperties.has("renderedImage")&&this.__updateEffectMargins()}}FigspecFrameViewer_decorate([property_e({type:Object})],FigspecFrameViewer.prototype,"nodes",void 0),FigspecFrameViewer_decorate([property_e({type:String,attribute:"rendered-image"})],FigspecFrameViewer.prototype,"renderedImage",void 0);var _selectFirstPage,_handlePageChange,FigspecFileViewer_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},FigspecFileViewer_classPrivateFieldGet=function(receiver,privateMap){if(!privateMap.has(receiver))throw new TypeError("attempted to get private field on non-instance");return privateMap.get(receiver)};class FigspecFileViewer extends(ViewerMixin(lit_element_s)){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,_selectFirstPage.set(this,(()=>{var _a;this.documentNode?this.selectedPage=null!==(_a=this.documentNode.document.children.filter((c=>"CANVAS"===c.type))[0])&&void 0!==_a?_a:null:this.selectedPage=null})),_handlePageChange.set(this,(ev=>{var _a,_b;const target=ev.currentTarget;this.selectedPage=null!==(_b=null===(_a=this.documentNode)||void 0===_a?void 0:_a.document.children.find((c=>c.id===target.value)))&&void 0!==_b?_b:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)}))}get isMovable(){return!(!this.renderedImages||!this.documentNode)}get __images(){return this.renderedImages||{}}get error(){return this.documentNode&&this.renderedImages?super.error?super.error:void 0:ErrorMessage({title:"Parameter error",children:lit_html_y`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`})}static get styles(){return extendStyles(super.styles,[i`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var _a;return lit_html_y`
      <div class="controls">
        <select @change=${FigspecFileViewer_classPrivateFieldGet(this,_handlePageChange)}>
          ${null===(_a=this.documentNode)||void 0===_a?void 0:_a.document.children.map((c=>lit_html_y`<option value=${c.id}>${c.name}</option>`))}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(FigspecFileViewer_classPrivateFieldGet(this,_selectFirstPage).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(changedProperties){super.updated(changedProperties),changedProperties.has("documentNode")&&(FigspecFileViewer_classPrivateFieldGet(this,_selectFirstPage).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),changedProperties.has("renderedImages")&&this.__updateEffectMargins()}}_selectFirstPage=new WeakMap,_handlePageChange=new WeakMap,FigspecFileViewer_decorate([property_e({type:Object,attribute:"document-node"})],FigspecFileViewer.prototype,"documentNode",void 0),FigspecFileViewer_decorate([property_e({type:Object,attribute:"rendered-images"})],FigspecFileViewer.prototype,"renderedImages",void 0),customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",FigspecFileViewer),customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",FigspecFrameViewer);const create_component_t=new Set(["children","localName","ref","style","className"]),create_component_e=new WeakMap,create_component_n=(t,n,s,i,o)=>{const l=null==o?void 0:o[n];void 0!==l?s!==i&&((t,n,s)=>{let i=create_component_e.get(t);void 0===i&&create_component_e.set(t,i=new Map);let o=i.get(n);void 0!==s?void 0===o?(i.set(n,o={handleEvent:s}),t.addEventListener(n,o)):o.handleEvent=s:void 0!==o&&(i.delete(n),t.removeEventListener(n,o))})(t,l,s):t[n]=s},create_component_s=(e,s,i,o,l)=>{const d=e.Component,c=e.createElement,h=new Set(Object.keys(null!=o?o:{}));class r extends d{constructor(){super(...arguments),this.o=null}t(t){if(null!==this.o)for(const e in this.i)create_component_n(this.o,e,this.props[e],t?t[e]:void 0,o)}componentDidMount(){this.t()}componentDidUpdate(t){this.t(t)}render(){const e=this.props._$Gl;void 0!==this.h&&this.u===e||(this.h=t=>{null===this.o&&(this.o=t),null!==e&&((t,e)=>{"function"==typeof t?t(e):t.current=e})(e,t),this.u=e});const n={ref:this.h};this.i={};for(const[e,s]of Object.entries(this.props))"__forwardedRef"!==e&&(h.has(e)||!create_component_t.has(e)&&!(e in HTMLElement.prototype)&&e in i.prototype?this.i[e]=s:n["className"===e?"class":e]=s);return c(s,n)}}r.displayName=null!=l?l:i.name;const a=e.forwardRef(((t,e)=>c(r,{...t,_$Gl:e},null==t?void 0:t.children)));return a.displayName=r.displayName,a},es2015_FigspecFrameViewer=create_component_s(react_namespaceObject,"figspec-frame-viewer",FigspecFrameViewer,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),es2015_FigspecFileViewer=create_component_s(react_namespaceObject,"figspec-file-viewer",FigspecFileViewer,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"});var index_681e4b07=__webpack_require__(94601),esm=__webpack_require__(65316),Figma=__webpack_require__(38570),process=__webpack_require__(34155),__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Figspec_awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}},fullscreen=(0,esm.css)(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"],["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"])));function unwrapJson(res){return 200!==res.status?Promise.reject(res.statusText):res.json()}var Figspec=function(_a){var config=_a.config,_b=(0,react.useState)({state:"loading"}),state=_b[0],setState=_b[1],fetchDetails=function(signal){return Figspec_awaiter(void 0,void 0,void 0,(function(){var match,fileKey,url,nodeId,accessToken,headers,nodeUrl,imageUrl,documentNode,frames_1,images_1,_a,nodes,images,err_1;return __generator(this,(function(_b){switch(_b.label){case 0:setState({state:"loading"}),_b.label=1;case 1:if(_b.trys.push([1,6,,7]),!(match=config.url.match(Figma.sC)))throw new Error(config.url+" is not a valid Figma URL.");if(fileKey=match[3],url=new URL(config.url),nodeId=url.searchParams.get("node-id"),accessToken=function getAccessToken(cfg){var _a;if(cfg.accessToken)return cfg.accessToken;try{return null!==(_a=process.env.STORYBOOK_FIGMA_ACCESS_TOKEN)&&void 0!==_a?_a:null}catch(err){return null}}(config),!accessToken)throw new Error("Personal Access Token is required.");return headers={"X-FIGMA-TOKEN":accessToken},nodeUrl=new URL("https://api.figma.com/v1/files/"+fileKey),(imageUrl=new URL("https://api.figma.com/v1/images/"+fileKey)).searchParams.set("format","svg"),nodeId?[3,4]:[4,fetch(nodeUrl.href,{headers,signal}).then(unwrapJson)];case 2:return documentNode=_b.sent(),frames_1=listAllFrames(documentNode.document),imageUrl.searchParams.set("ids",frames_1.map((function(frame){return frame.id})).join(",")),[4,fetch(imageUrl.href,{headers,signal}).then(unwrapJson)];case 3:return images_1=_b.sent(),setState({state:"fetched",value:{type:"file",props:{documentNode,renderedImages:images_1.images,link:config.url}}}),[2];case 4:return nodeUrl.pathname+="/nodes",nodeUrl.searchParams.set("ids",nodeId),imageUrl.searchParams.set("ids",nodeId),[4,Promise.all([fetch(nodeUrl.href,{headers,signal}).then(unwrapJson),fetch(imageUrl.href,{headers,signal}).then(unwrapJson)])];case 5:return _a=_b.sent(),nodes=_a[0],images=_a[1],setState({state:"fetched",value:{type:"frame",props:{nodes,renderedImage:Object.values(images.images)[0],link:config.url}}}),[3,7];case 6:return(err_1=_b.sent())instanceof DOMException&&err_1.code===DOMException.ABORT_ERR?[2]:(console.error(err_1),setState({state:"failed",error:err_1 instanceof Error?err_1.message:String(err_1)}),[3,7]);case 7:return[2]}}))}))};switch((0,react.useEffect)((function(){var fulfilled=!1,fulfil=function(){fulfilled=!0},ac=new AbortController;return fetchDetails(ac.signal).then(fulfil,fulfil),function(){fulfilled||ac.abort()}}),[config.url]),state.state){case"loading":return(0,esm.jsx)(index_681e4b07.a7,null,(0,esm.jsx)(react.Fragment,null,"Loading Figma file..."));case"failed":return(0,esm.jsx)(index_681e4b07.a7,null,(0,esm.jsx)(react.Fragment,null,"Failed to load Figma file"),(0,esm.jsx)(react.Fragment,null,state.error));case"fetched":return"file"===state.value.type?(0,esm.jsx)(es2015_FigspecFileViewer,__assign({css:fullscreen},state.value.props)):(0,esm.jsx)(es2015_FigspecFrameViewer,__assign({css:fullscreen},state.value.props))}};const components_Figspec=Figspec;function listAllFrames(node){return"absoluteBoundingBox"in node?[node]:node.children&&0!==node.children.length?node.children.map(listAllFrames).flat():[]}var templateObject_1}}]);