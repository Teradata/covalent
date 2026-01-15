import{r as S,i as O,n as l,s as P,x as a,e as H}from"./query-assigned-elements-BJdb4KNY.js";import{t as I}from"./state-CGn7W7VL.js";import{o as b}from"./class-map-LmxYoNzI.js";import{K as W}from"./code-editor-DIukqkhm.js";import"./code-snippet-CiSyHDze.js";import"./icon-button-DIHzEZC4.js";import"./typography-Bxx1_gIs.js";import"./alert-KUZX4LQJ.js";import"./icon-BYPYUWym.js";import"./list-CVk4ScCz.js";import"./list-item-CmxEoEoc.js";import"./directive-CvdRHFdJ.js";import"./async-directive-0v26byF-.js";import"./directive-helpers-7tzC9zVi.js";import"./index-BrLBe1JS.js";import"./iframe-DU2_aAEy.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./tslib.es6-C-hQhb2A.js";import"./ripple-handlers-CLC5WHP1.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./query-pFbEai1B.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./observer-D8jHVEI7.js";import"./foundation-BmszT0UM.js";import"./foundation-D9HcNlNd.js";import"./mwc-icon-BGUO1vKj.js";const L=":host{--mdc-icon-button-size: 2rem;font-family:var(--mdc-typography-body1-font-family);width:100%}cv-code-snippet{background-color:var(--cv-theme-surface);border-radius:0;box-sizing:border-box}cv-code-snippet::part(code){font-size:var(--mdc-typography-body2-font-size);line-height:var(--mdc-typography-body2-line-height);padding:0;white-space:pre-wrap}cv-code-editor{margin-top:-1px}.selectionIndicator{background-color:var(--cv-theme-primary);border-radius:2px;height:100%;visibility:hidden}.selectionIndicatorWrapper{min-width:8px}.selectionIndicatorWrapper:hover .selectionIndicator{visibility:visible}.status{padding:0 1px;position:relative}.loading{top:2.5px}.timesExecuted{--cv-icon-button-cursor: grab;align-items:center;box-sizing:border-box;color:var(--cv-theme-on-surface-38);display:flex;font-family:var(--cv-typography-subtitle2-font-family);font-size:var(--cv-typography-subtitle2-font-size);gap:.5rem;height:56px;line-height:var(--cv-typography-headline6-line-height)}.timesExecuted .executionCount{padding-right:1rem;overflow:hidden;text-align:right;text-overflow:ellipsis;-webkit-user-select:none;user-select:none;white-space:nowrap;width:52px}.timesExecuted .dragHandle{color:var(--cv-theme-on-surface-variant);cursor:grab;padding-left:.5rem;transition:visibility .3s ease;visibility:hidden}.timesExecuted .dragHandle:active{--cv-icon-button-cursor: grabbing}.timesExecutedWrapper{cursor:grab}.timesExecutedWrapper:active{cursor:grabbing}.timesExecutedWrapper:hover .dragHandle{visibility:visible}.cell{box-sizing:border-box;cursor:pointer;display:flex;justify-content:space-between;position:relative;transition:background-color .2s ease;-webkit-user-select:auto;user-select:auto}.cell.focused .selectionIndicator,.cell.selected .selectionIndicator{visibility:visible}.cell:hover{background-color:var(--cv-theme-secondary-4)}.cell:hover .selectionIndicator{visibility:visible;background-color:var(--cv-theme-on-secondary-container-38)}.cell:active{background-color:var(--cv-theme-secondary-12)}.cell:active .selectionIndicator{visibility:visible;background-color:var(--cv-theme-on-secondary-container-74)}.cellWrapper{display:flex;flex-direction:column;width:100%}.cellOutputWrapper{display:flex;flex-direction:column;max-width:calc(100% - 130px);flex:1}.contextMenu{background-color:var(--cv-theme-surface-canvas);border-radius:8px;box-shadow:0 8px 12px 6px #00000026,0 4px 4px #0000004d;display:flex;flex-direction:column;position:fixed;visibility:hidden;z-index:1000}.contextMenuContent{border-radius:4px;flex-grow:1;max-height:100%;overflow:auto}.contextMenu.open{visibility:visible}.editorContainer{box-sizing:border-box;background-color:var(--cv-theme-surface);border:1px solid var(--cv-theme-outline-variant);border-radius:var(--cv-editor-border-radius, 4px);min-height:56px;overflow:hidden;padding:1rem}.errors,.output{max-width:100%;width:100%}";var z=Object.defineProperty,D=Object.getOwnPropertyDescriptor,s=(e,t,i,o)=>{for(var n=o>1?void 0:o?D(t,i):t,c=e.length-1,d;c>=0;c--)(d=e[c])&&(n=(o?d(t,i,n):d(n))||n);return o&&n&&z(t,i,n),n};let r=class extends P{constructor(){super(),this.code="",this.language="",this.loading=!1,this.selected=!1,this.timesExecuted=0,this.hideEditor=!1,this.hideCount=!1,this.editorTheme="",this._editorFocused=!1,this._isMenuOpen=!1,this._menuMaxHeight="auto",this._menuPosition={top:0,left:0},this.editorOptions={minimap:{enabled:!1},wordWrap:"on",fontSize:"14px",glyphMargin:!1,folding:!1,lineHeight:20,lineNumbers:"off",lineDecorationsWidth:0,lineNumbersMinChars:0,renderIndentGuides:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{alwaysConsumeMouseWheel:!1,vertical:"hidden"}},this.closeContextMenu=this.closeContextMenu.bind(this),this.showContextMenu=this.showContextMenu.bind(this)}closeContextMenu(){this._isMenuOpen=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.closeContextMenu)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.closeContextMenu)}handleCodeChange(e){this.code=e.detail.code}setEditorFocus(e,t){e.stopImmediatePropagation(),this._editorFocused=t,this.requestUpdate()}setEditorInstance(e){e.stopImmediatePropagation(),this._editor=e.detail.editor,this._editor.onKeyDown(t=>{t.shiftKey&&t.keyCode===W.Enter&&t.preventDefault()})}showContextMenu(e){var v;e.preventDefault();const t=document.querySelectorAll("cv-notebook-cell");t==null||t.forEach(m=>{m.closeContextMenu()});const i=(v=this.shadowRoot)==null?void 0:v.querySelector(".contextMenu"),o=i==null?void 0:i.offsetHeight,c=window.innerHeight-e.clientY,d=e.clientY;c>=o?(this._menuPosition={top:e.clientY,left:e.clientX},this._menuMaxHeight=`${c}px`):d>=o?(this._menuPosition={top:e.clientY-o,left:e.clientX},this._menuMaxHeight=`${o}px`):(this._menuPosition={top:e.clientY-d,left:e.clientX},this._menuMaxHeight=`${d}px`),this._isMenuOpen=!0}updated(e){var i,o;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("cv-code-editor");if(e.has("code")||e.has("language"))if(t)t.code=this.code,t.language=this.language;else{const n=(o=this.shadowRoot)==null?void 0:o.querySelector("cv-code-snippet");n&&!this.selected&&n.highlight()}super.updated(e)}getEditorBgColor(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".editorContainer");return e?window.getComputedStyle(e).getPropertyValue("background-color"):""}renderEditor(){const e=this.selected?a`<cv-code-editor
          @code-change="${this.handleCodeChange}"
          @editor-ready="${this.setEditorInstance}"
          @editor-focus="${t=>this.setEditorFocus(t,!0)}"
          @editor-blur="${t=>this.setEditorFocus(t,!1)}"
          .code="${this.code}"
          .language="${this.language}"
          .options="${this.editorOptions}"
          .theme="${this.editorTheme}"
          disableScroll
        ></cv-code-editor>`:a`<cv-code-snippet hideHeader .language="${this.language}"
          >${this.code}</cv-code-snippet
        >`;return a`${this.hideEditor?"":a`<div class="editorContainer">${e}</div>`}`}renderOutput(){const e=a` <div class="errors"><slot name="error"></slot></div>
      <div class="output">
        <slot name="output"></slot>
        <slot name="input"></slot>
      </div>`;return a`${e}`}renderExecutionCount(){if(this.hideCount)return a`&nbsp;`;const e={status:!0,loading:this.loading};return a`[<span class="${b(e)}"
        >${this.loading?"*":this.timesExecuted||" "}</span
      >] :`}render(){const e={cell:!0,selected:this.selected,focused:this._editorFocused};return a`
      <div class="${b(e)}" @contextmenu=${this.showContextMenu}>
        <div class="selectionIndicatorWrapper">
          <div class="selectionIndicator"></div>
        </div>

        <div class="timesExecutedWrapper">
          <div class="timesExecuted">
            <div class="dragHandle">
              <slot name="drag-handle"></slot>
            </div>
            <div class="executionCount">${this.renderExecutionCount()}</div>
          </div>
        </div>

        <div class="cellOutputWrapper">
          ${this.renderEditor()} ${this.renderOutput()}
        </div>
      </div>
      <div
        class="contextMenu ${this._isMenuOpen?"open":""}"
        style="left: ${this._menuPosition.left}px; top: ${this._menuPosition.top}px; max-height: ${this._menuMaxHeight}"
      >
        <div class="contextMenuContent">
          <slot name="context-menu"></slot>
        </div>
      </div>
    `}};r.styles=[O`
      ${S(L)}
    `];s([l({type:Number})],r.prototype,"index",2);s([l({type:String})],r.prototype,"code",2);s([l({type:String})],r.prototype,"language",2);s([l({type:Boolean,reflect:!0})],r.prototype,"loading",2);s([l({type:Boolean,reflect:!0})],r.prototype,"selected",2);s([l({type:Number})],r.prototype,"timesExecuted",2);s([l({type:Boolean,reflect:!0})],r.prototype,"hideEditor",2);s([l({type:Boolean,reflect:!0})],r.prototype,"hideCount",2);s([l({type:String})],r.prototype,"editorTheme",2);s([I()],r.prototype,"_isMenuOpen",2);r=s([H("cv-notebook-cell")],r);const ge={title:"Components/Notebook Cell",args:{code:"Select * from DBC.UserInfo;",index:0,language:"sql",loading:!1,selected:!0,hideCount:!1,hideEditor:!1,editorTheme:"cv-light",timesExecuted:2}},g=({code:e,index:t,language:i,loading:o,selected:n,hideCount:c,hideEditor:d,editorTheme:v,timesExecuted:m,error:k,output:T})=>`<div style="width: 60vw;">
            <cv-notebook-cell code="${e}" index="${t}" language="${i}" timesExecuted="${m}" editorTheme="${v}" ${d?"hideEditor":""} ${n?"selected":""} ${o?"loading":""} ${c?"hideCount":""}>
      ${k&&`<div slot="error" style="margin-top: 1rem;">
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
      <cv-icon-button slot="drag-handle" icon="drag_indicator"></cv-icon-button>
      <div slot="context-menu">
        <cv-list activatable>
          <cv-list-item>Cut</cv-list-item>
          <cv-list-item>Copy</cv-list-item>
          <cv-list-item>Paste</cv-list-item>
          <cv-list-item disabled><div>Delete</div></cv-list-item>
          <li divider></li>
          <cv-list-item>Clear outputs</cv-list-item>
          <cv-list-item>Restart</cv-list-item>
        </cv-list>
      </div>
    </cv-notebook-cell>
  </div>`,h=g.bind({}),u=g.bind({});u.args={error:!0};const p=g.bind({});p.args={output:!0};var y,x,f;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`({
  code,
  index,
  language,
  loading,
  selected,
  hideCount,
  hideEditor,
  editorTheme,
  timesExecuted,
  error,
  output
}) => {
  return \`<div style="width: 60vw;">
            <cv-notebook-cell code="\${code}" index="\${index}" language="\${language}" timesExecuted="\${timesExecuted}" editorTheme="\${editorTheme}" \${hideEditor ? 'hideEditor' : ''} \${selected ? 'selected' : ''} \${loading ? 'loading' : ''} \${hideCount ? 'hideCount' : ''}>
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
      <cv-icon-button slot="drag-handle" icon="drag_indicator"></cv-icon-button>
      <div slot="context-menu">
        <cv-list activatable>
          <cv-list-item>Cut</cv-list-item>
          <cv-list-item>Copy</cv-list-item>
          <cv-list-item>Paste</cv-list-item>
          <cv-list-item disabled><div>Delete</div></cv-list-item>
          <li divider></li>
          <cv-list-item>Clear outputs</cv-list-item>
          <cv-list-item>Restart</cv-list-item>
        </cv-list>
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
  editorTheme,
  timesExecuted,
  error,
  output
}) => {
  return \`<div style="width: 60vw;">
            <cv-notebook-cell code="\${code}" index="\${index}" language="\${language}" timesExecuted="\${timesExecuted}" editorTheme="\${editorTheme}" \${hideEditor ? 'hideEditor' : ''} \${selected ? 'selected' : ''} \${loading ? 'loading' : ''} \${hideCount ? 'hideCount' : ''}>
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
      <cv-icon-button slot="drag-handle" icon="drag_indicator"></cv-icon-button>
      <div slot="context-menu">
        <cv-list activatable>
          <cv-list-item>Cut</cv-list-item>
          <cv-list-item>Copy</cv-list-item>
          <cv-list-item>Paste</cv-list-item>
          <cv-list-item disabled><div>Delete</div></cv-list-item>
          <li divider></li>
          <cv-list-item>Clear outputs</cv-list-item>
          <cv-list-item>Restart</cv-list-item>
        </cv-list>
      </div>
    </cv-notebook-cell>
  </div>\`;
}`,...(E=($=u.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var w,_,M;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`({
  code,
  index,
  language,
  loading,
  selected,
  hideCount,
  hideEditor,
  editorTheme,
  timesExecuted,
  error,
  output
}) => {
  return \`<div style="width: 60vw;">
            <cv-notebook-cell code="\${code}" index="\${index}" language="\${language}" timesExecuted="\${timesExecuted}" editorTheme="\${editorTheme}" \${hideEditor ? 'hideEditor' : ''} \${selected ? 'selected' : ''} \${loading ? 'loading' : ''} \${hideCount ? 'hideCount' : ''}>
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
      <cv-icon-button slot="drag-handle" icon="drag_indicator"></cv-icon-button>
      <div slot="context-menu">
        <cv-list activatable>
          <cv-list-item>Cut</cv-list-item>
          <cv-list-item>Copy</cv-list-item>
          <cv-list-item>Paste</cv-list-item>
          <cv-list-item disabled><div>Delete</div></cv-list-item>
          <li divider></li>
          <cv-list-item>Clear outputs</cv-list-item>
          <cv-list-item>Restart</cv-list-item>
        </cv-list>
      </div>
    </cv-notebook-cell>
  </div>\`;
}`,...(M=(_=p.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const be=["Basic","Error","WithOutput"];export{h as Basic,u as Error,p as WithOutput,be as __namedExportsOrder,ge as default};
