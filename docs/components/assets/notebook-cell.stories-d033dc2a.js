import{i as O,r as S,s as P,x as c,e as W}from"./query-assigned-elements-9f88bee1.js";import{n as d}from"./property-f36ea729.js";import{t as H}from"./state-2a0073ff.js";import{o as y}from"./class-map-4e4d6bc9.js";import"./code-editor-bf9fe02d.js";import"./code-snippet-c74d531e.js";import"./icon-button-c82eb2c8.js";import"./typography-9d0b5d22.js";import"./alert-4cfff5e5.js";import"./icon-33ce3398.js";import"./list-0ec6e3a4.js";import"./list-item-500f4587.js";import"./directive-12249aa5.js";import"./async-directive-ee28bedc.js";import"./directive-helpers-67cb89d8.js";import"./index-53921170.js";import"./iframe-f9318884.js";import"../sb-preview/runtime.js";import"./query-assigned-nodes-be20542b.js";import"./_commonjsHelpers-de833af9.js";import"./tslib.es6-6921e62d.js";import"./ripple-handlers-4e438af8.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./query-3e91a3b8.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./observer-1f401936.js";import"./foundation-ebc4a482.js";import"./foundation-402d6c96.js";import"./mwc-icon-4afc0ea5.js";const I=`:host{--mdc-icon-button-size: 24px;font-family:var(--mdc-typography-body1-font-family);width:100%}cv-code-snippet{background-color:var(--cv-theme-surface);box-sizing:border-box}cv-code-snippet::part(code){font-size:var(--mdc-typography-body2-font-size);line-height:var(--mdc-typography-body2-line-height);padding:0;white-space:pre-wrap}cv-code-editor{margin-top:-1px}.selectionIndicator{background-color:var(--cv-theme-primary);border-radius:2px;height:100%;visibility:hidden}.selectionIndicatorWrapper{min-width:8px}.selectionIndicatorWrapper:hover .selectionIndicator{visibility:visible}.status{padding:0 1px;position:relative}.loading{top:2.5px}.timesExecuted{align-items:center;box-sizing:border-box;color:var(--cv-theme-on-surface-38);display:flex;font-family:var(--cv-typography-subtitle2-font-family);font-size:var(--cv-typography-subtitle2-font-size);height:56px;line-height:var(--cv-typography-headline6-line-height)}.timesExecuted .executionCount{padding-right:1rem;overflow:hidden;text-align:right;text-overflow:ellipsis;white-space:nowrap;width:50px}.timesExecuted cv-icon{color:var(--cv-theme-on-surface-variant);padding:.5rem;visibility:hidden;transition:visibility .3s ease}.timesExecutedWrapper{cursor:grab}.timesExecutedWrapper:active{cursor:grabbing}.timesExecutedWrapper:hover cv-icon{visibility:visible}.cell{box-sizing:border-box;cursor:pointer;display:flex;justify-content:space-between;position:relative;transition:background-color .2s ease;-webkit-user-select:auto;user-select:auto}.cell.focused .selectionIndicator,.cell.selected .selectionIndicator{visibility:visible}.cell:hover{background-color:var(--cv-theme-secondary-4)}.cell:hover .selectionIndicator{visibility:visible;background-color:var(--cv-theme-on-secondary-container-38)}.cell:active{background-color:var(--cv-theme-secondary-12)}.cell:active .selectionIndicator{visibility:visible;background-color:var(--cv-theme-on-secondary-container-74)}.cellWrapper{display:flex;flex-direction:column;width:100%}.cellOutputWrapper{display:flex;flex-direction:column;max-width:calc(100% - 95px);flex:1}.contextMenu{overflow:auto;position:absolute;visibility:hidden;z-index:1000}.contextMenu.open{visibility:visible}.editorContainer{box-sizing:border-box;background-color:var(--cv-theme-surface);border:1px solid var(--cv-theme-outline-variant);border-radius:var(--cv-editor-border-radius, 4px);min-height:56px;overflow:hidden;padding:1rem}.errors,.output{max-width:100%;width:100%}
`;var L=Object.defineProperty,z=Object.getOwnPropertyDescriptor,s=(e,t,i,o)=>{for(var n=o>1?void 0:o?z(t,i):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(o?l(t,i,n):l(n))||n);return o&&n&&L(t,i,n),n};let r=class extends P{constructor(){super(),this.code="",this.language="",this.loading=!1,this.selected=!1,this.timesExecuted=0,this.hideEditor=!1,this.hideCount=!1,this.editorTheme="",this._editorFocused=!1,this._isMenuOpen=!1,this._menuMaxHeight="auto",this._menuPosition={top:0,left:0},this.editorOptions={minimap:{enabled:!1},wordWrap:"on",fontSize:"14px",glyphMargin:!1,folding:!1,lineHeight:20,lineNumbers:"off",lineDecorationsWidth:0,lineNumbersMinChars:0,renderIndentGuides:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{alwaysConsumeMouseWheel:!1,vertical:"hidden"}},this.closeContextMenu=this.closeContextMenu.bind(this),this.showContextMenu=this.showContextMenu.bind(this)}closeContextMenu(){this._isMenuOpen=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closeContextMenu)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.closeContextMenu)}handleCodeChange(e){this.code=e.detail.code}handleRun(){this.dispatchEvent(new CustomEvent("cell-run-code",{detail:{index:this.index,code:this.code},bubbles:!0,composed:!0}))}setEditorFocus(e){this._editorFocused=e,this.requestUpdate()}showContextMenu(e){var v;e.preventDefault();const t=document.querySelectorAll("cv-notebook-cell");t==null||t.forEach(m=>{m.closeContextMenu()});const i=(v=this.shadowRoot)==null?void 0:v.querySelector(".contextMenu"),o=i==null?void 0:i.offsetHeight,a=window.innerHeight-e.clientY,l=e.clientY;a>=o?(this._menuPosition={top:e.clientY,left:e.clientX},this._menuMaxHeight=`${a}px`):l>=o?(this._menuPosition={top:e.clientY-o,left:e.clientX},this._menuMaxHeight=`${o}px`):(this._menuPosition={top:e.clientY-l,left:e.clientX},this._menuMaxHeight=`${l}px`),this._isMenuOpen=!0}updated(e){var i,o;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("cv-code-editor");if(e.has("code")||e.has("language"))if(t)t.code=this.code,t.language=this.language;else{const n=(o=this.shadowRoot)==null?void 0:o.querySelector("cv-code-snippet");n&&!this.selected&&n.highlight()}super.updated(e)}getEditorBgColor(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".editorContainer");return e?window.getComputedStyle(e).getPropertyValue("background-color"):""}renderEditor(){const e=this.selected?c`<cv-code-editor
          @code-change="${this.handleCodeChange}"
          @editor-focus="${()=>this.setEditorFocus(!0)}"
          @editor-blur="${()=>this.setEditorFocus(!1)}"
          .code="${this.code}"
          .language="${this.language}"
          .options="${this.editorOptions}"
          .theme="${this.editorTheme}"
        ></cv-code-editor>`:c`<cv-code-snippet hideHeader .language="${this.language}"
          >${this.code}</cv-code-snippet
        >`;return c`${this.hideEditor?"":c`<div class="editorContainer">${e}</div>`}`}renderOutput(){const e=c` <div class="errors"><slot name="error"></slot></div>
      <div class="output">
        <slot name="output"></slot>
        <slot name="input"></slot>
      </div>`;return c`${e}`}renderExecutionCount(){if(this.hideCount)return c`&nbsp;`;const e={status:!0,loading:this.loading};return c`[<span class="${y(e)}"
        >${this.loading?"*":this.timesExecuted||" "}</span
      >] :`}render(){const e={cell:!0,selected:this.selected,focused:this._editorFocused};return c`
      <div
        class="${y(e)}"
        draggable="true"
        @contextmenu=${this.showContextMenu}
      >
        <div class="selectionIndicatorWrapper" draggable="false">
          <div class="selectionIndicator"></div>
        </div>

        <div class="timesExecutedWrapper" draggable="false">
          <div class="timesExecuted">
            <cv-icon>drag_indicator</cv-icon>
            <div class="executionCount">${this.renderExecutionCount()}</div>
          </div>
        </div>

        <div class="cellOutputWrapper" draggable="false">
          ${this.renderEditor()} ${this.renderOutput()}
        </div>
      </div>
      <div
        class="contextMenu ${this._isMenuOpen?"open":""}"
        style="left: ${this._menuPosition.left}px; top: ${this._menuPosition.top}px; max-height: ${this._menuMaxHeight}"
      >
        <slot name="context-menu"></slot>
      </div>
    `}};r.styles=[O`
      ${S(I)}
    `];s([d({type:Number})],r.prototype,"index",2);s([d({type:String})],r.prototype,"code",2);s([d({type:String})],r.prototype,"language",2);s([d({type:Boolean,reflect:!0})],r.prototype,"loading",2);s([d({type:Boolean,reflect:!0})],r.prototype,"selected",2);s([d({type:Number})],r.prototype,"timesExecuted",2);s([d({type:Boolean,reflect:!0})],r.prototype,"hideEditor",2);s([d({type:Boolean,reflect:!0})],r.prototype,"hideCount",2);s([d({type:String})],r.prototype,"editorTheme",2);s([H()],r.prototype,"_isMenuOpen",2);r=s([W("cv-notebook-cell")],r);const ge={title:"Components/Notebook Cell",args:{code:"Select * from DBC.UserInfo;",index:0,language:"sql",loading:!1,selected:!0,hideCount:!1,hideEditor:!1,theme:"cv-light",timesExecuted:2}},g=({code:e,index:t,language:i,loading:o,selected:n,hideCount:a,hideEditor:l,theme:v,timesExecuted:m,error:M,output:T})=>`<div style="width: 80vw;">
            <cv-notebook-cell code="${e}" index="${t}" language="${i}" timesExecuted="${m}" editorTheme="${v}" ${l?"hideEditor":""} ${n?"selected":""} ${o?"loading":""} ${a?"hideCount":""}>
      ${M&&`<div slot="error" style="margin-top: 1rem;">
          <cv-alert
              descriptionText="Could not load data!"
              state="negative"
              icon="error"
              iconAriaLabel="error"
            >
            </cv-alert>
        </div>`}
      ${T&&`<div slot="output">
          <cv-typography scale="headline4" style="margin:1rem 0;">Create and Populate Tables</cv-typography>
          <cv-typography scale="body1">Tables are created and populated using SQL</cv-typography>
        </div>`}
      <div slot="context-menu" style="background-color: white;">
        <cv-list activatable>
          <cv-list-item>Cut</cv-list-item>
          <cv-list-item>Copy</cv-list-item>
          <cv-list-item>Paste</cv-list-item>
          <cv-list-item disabled><div>Delete</div></cv-list-item>
          <li divider></li>
          <cv-list-item>Clear outputs</cv-list-item>
          <cv-list-item>Restart</cv-list-item>
        </cv-cv-list>
      </div>
    </cv-notebook-cell>
  </div>`,h=g.bind({}),u=g.bind({});u.args={error:!0};const p=g.bind({});p.args={output:!0};var b,x,f;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`({
  code,
  index,
  language,
  loading,
  selected,
  hideCount,
  hideEditor,
  theme,
  timesExecuted,
  error,
  output
}) => {
  return \`<div style="width: 80vw;">
            <cv-notebook-cell code="\${code}" index="\${index}" language="\${language}" timesExecuted="\${timesExecuted}" editorTheme="\${theme}" \${hideEditor ? 'hideEditor' : ''} \${selected ? 'selected' : ''} \${loading ? 'loading' : ''} \${hideCount ? 'hideCount' : ''}>
      \${error && \`<div slot="error" style="margin-top: 1rem;">
          <cv-alert
              descriptionText="Could not load data!"
              state="negative"
              icon="error"
              iconAriaLabel="error"
            >
            </cv-alert>
        </div>\`}
      \${output && \`<div slot="output">
          <cv-typography scale="headline4" style="margin:1rem 0;">Create and Populate Tables</cv-typography>
          <cv-typography scale="body1">Tables are created and populated using SQL</cv-typography>
        </div>\`}
      <div slot="context-menu" style="background-color: white;">
        <cv-list activatable>
          <cv-list-item>Cut</cv-list-item>
          <cv-list-item>Copy</cv-list-item>
          <cv-list-item>Paste</cv-list-item>
          <cv-list-item disabled><div>Delete</div></cv-list-item>
          <li divider></li>
          <cv-list-item>Clear outputs</cv-list-item>
          <cv-list-item>Restart</cv-list-item>
        </cv-cv-list>
      </div>
    </cv-notebook-cell>
  </div>\`;
}`,...(f=(x=h.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,$,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`({
  code,
  index,
  language,
  loading,
  selected,
  hideCount,
  hideEditor,
  theme,
  timesExecuted,
  error,
  output
}) => {
  return \`<div style="width: 80vw;">
            <cv-notebook-cell code="\${code}" index="\${index}" language="\${language}" timesExecuted="\${timesExecuted}" editorTheme="\${theme}" \${hideEditor ? 'hideEditor' : ''} \${selected ? 'selected' : ''} \${loading ? 'loading' : ''} \${hideCount ? 'hideCount' : ''}>
      \${error && \`<div slot="error" style="margin-top: 1rem;">
          <cv-alert
              descriptionText="Could not load data!"
              state="negative"
              icon="error"
              iconAriaLabel="error"
            >
            </cv-alert>
        </div>\`}
      \${output && \`<div slot="output">
          <cv-typography scale="headline4" style="margin:1rem 0;">Create and Populate Tables</cv-typography>
          <cv-typography scale="body1">Tables are created and populated using SQL</cv-typography>
        </div>\`}
      <div slot="context-menu" style="background-color: white;">
        <cv-list activatable>
          <cv-list-item>Cut</cv-list-item>
          <cv-list-item>Copy</cv-list-item>
          <cv-list-item>Paste</cv-list-item>
          <cv-list-item disabled><div>Delete</div></cv-list-item>
          <li divider></li>
          <cv-list-item>Clear outputs</cv-list-item>
          <cv-list-item>Restart</cv-list-item>
        </cv-cv-list>
      </div>
    </cv-notebook-cell>
  </div>\`;
}`,...(E=($=u.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var w,_,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`({
  code,
  index,
  language,
  loading,
  selected,
  hideCount,
  hideEditor,
  theme,
  timesExecuted,
  error,
  output
}) => {
  return \`<div style="width: 80vw;">
            <cv-notebook-cell code="\${code}" index="\${index}" language="\${language}" timesExecuted="\${timesExecuted}" editorTheme="\${theme}" \${hideEditor ? 'hideEditor' : ''} \${selected ? 'selected' : ''} \${loading ? 'loading' : ''} \${hideCount ? 'hideCount' : ''}>
      \${error && \`<div slot="error" style="margin-top: 1rem;">
          <cv-alert
              descriptionText="Could not load data!"
              state="negative"
              icon="error"
              iconAriaLabel="error"
            >
            </cv-alert>
        </div>\`}
      \${output && \`<div slot="output">
          <cv-typography scale="headline4" style="margin:1rem 0;">Create and Populate Tables</cv-typography>
          <cv-typography scale="body1">Tables are created and populated using SQL</cv-typography>
        </div>\`}
      <div slot="context-menu" style="background-color: white;">
        <cv-list activatable>
          <cv-list-item>Cut</cv-list-item>
          <cv-list-item>Copy</cv-list-item>
          <cv-list-item>Paste</cv-list-item>
          <cv-list-item disabled><div>Delete</div></cv-list-item>
          <li divider></li>
          <cv-list-item>Clear outputs</cv-list-item>
          <cv-list-item>Restart</cv-list-item>
        </cv-cv-list>
      </div>
    </cv-notebook-cell>
  </div>\`;
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ye=["Basic","Error","WithOutput"];export{h as Basic,u as Error,p as WithOutput,ye as __namedExportsOrder,ge as default};
