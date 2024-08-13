import"./code-snippet-c74d531e.js";import"./dialog-91ada908.js";import"./icon-button-c82eb2c8.js";import"./button-d9b036d1.js";import"./index-76fb7be0.js";import{g as Y}from"./_commonjsHelpers-de833af9.js";import{t as S}from"./chunk-ZGA76URP-7a3ba272.js";import"./query-assigned-elements-9f88bee1.js";import"./property-f36ea729.js";import"./query-assigned-nodes-be20542b.js";import"./class-map-4e4d6bc9.js";import"./directive-12249aa5.js";import"./tslib.es6-6921e62d.js";import"./inert.esm-a76031cb.js";import"./base-element-cae00a28.js";import"./utils-529e1a6d.js";import"./observer-1f401936.js";import"./query-3e91a3b8.js";import"./ripple-handlers-4e438af8.js";import"./state-2a0073ff.js";import"./style-map-ec903154.js";import"./aria-property-3dc182ec.js";import"./event-options-b5830ec0.js";import"./if-defined-c3862b86.js";import"./mwc-icon-4afc0ea5.js";var F="DARK_MODE",G="UPDATE_DARK_MODE",J=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(o=r;o--!==0;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(n).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;o--!==0;){var i=a[o];if(!t(e[i],n[i]))return!1}return!0}return e!==e&&n!==n};const D=Y(J);function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(t)}var h;function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?T(Object(n),!0).forEach(function(r){W(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function W(t,e,n){return e=z(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(t){var e=Q(t,"string");return d(e)==="symbol"?e:String(e)}function Q(t,e){if(d(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m(t){return te(t)||ee(t)||Z(t)||X()}function X(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t,e){if(t){if(typeof t=="string")return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}}function ee(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function te(t){if(Array.isArray(t))return _(t)}function _(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const{global:ne}=__STORYBOOK_MODULE_GLOBAL__;__STORYBOOK_MODULE_CORE_EVENTS__;var U=ne,re=U.document,f=U.window,V="sb-addon-themes-3";(h=f.matchMedia)===null||h===void 0||h.call(f,"(prefers-color-scheme: dark)");var b={classTarget:"body",dark:S.dark,darkClass:["dark"],light:S.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},x=function(e){f.localStorage.setItem(V,JSON.stringify(e))},oe=function(e,n){var r=n.current,o=n.darkClass,a=o===void 0?b.darkClass:o,i=n.lightClass,p=i===void 0?b.lightClass:i;if(r==="dark"){var y,E;(y=e.classList).remove.apply(y,m(g(p))),(E=e.classList).add.apply(E,m(g(a)))}else{var O,A;(O=e.classList).remove.apply(O,m(g(a))),(A=e.classList).add.apply(A,m(g(p)))}},g=function(e){var n=[];return n.concat(e).map(function(r){return r})},ae=function(e){var n=re.querySelector(e.classTarget);n&&oe(n,e)},ie=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=f.localStorage.getItem(V);if(typeof n=="string"){var r=JSON.parse(n);return e&&(e.dark&&!D(r.dark,e.dark)&&(r.dark=e.dark,x(r)),e.light&&!D(r.light,e.light)&&(r.light=e.light,x(r))),r}return M(M({},b),e)};ae(ie());__STORYBOOK_MODULE_ADDONS__;const{addons:ce}=__STORYBOOK_MODULE_PREVIEW_API__,C=ce.getChannel(),B=`
SELECT * FROM load_to_teradata (
    ON (
    SELECT "class" AS class_col,
            "variable" AS variable_col,
            "type" AS type_col,
            category,
            cnt,
            "sum" AS sum_col,
            "sumSq",
            "totalCnt"
    FROM aster_nb_modelSC
    )
    tdpid ('sdt12432.labs.teradata.com')
    username ('sample_user')
    password ('sample_user')
    target_table ('td_nb_modelSC')
);
`,Pe={title:"Components/Code snippet",args:{hideHeader:!1,inline:!1,label:"Example.sql",language:"sql",content:B,maxHeight:0}},v=({inline:t,content:e,hideHeader:n,label:r,language:o,maxHeight:a})=>(document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("#theme-toggle");C.on(F,p=>{p?i.setAttribute("icon","brightness_high"):i.setAttribute("icon","brightness_4")}),i.addEventListener("click",()=>{C.emit(G)})},{once:!0}),`
    <cv-code-snippet
        label="${r}"
        maxHeight="${a}"
        language="${o}"
        ${n?"hideHeader":""}
        ${t?"inline":""}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    ${e}
    </cv-code-snippet>`),s=v.bind();s.args={language:"sql",content:B};const l=v.bind();l.args={maxHeight:250};const u=v.bind();u.args={hideHeader:!0};const se=(...t)=>`
    <style>
    cv-code-snippet {
        margin:8px -24px -36px;
    }
    cv-code-snippet::part(container) {
        padding-left: 8px;
        padding-right: 8px;
    }
    cv-code-snippet::part(header) {
        padding-left: 24px;
    }
    </style>
    <cv-dialog heading="Lorem ipsum dolor sit amet" open>
        <cv-typography scale="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor consectetur quis velit donec vel integer diam. Nisl pretium egestas ultrices facilisis sed amet et. Odio elementum ut eu magnis at ullamcorper euismod.</cv-typography>
        ${v(...t)}
        <cv-button outlined slot="primaryAction">Export</cv-button>
        <cv-button slot="secondaryAction">Close</cv-button>
    </cv-dialog>
    `,c=se.bind();c.args={inline:!0};c.parameters={docs:{inlineStories:!1}};var H,$,L;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`({
  inline,
  content,
  hideHeader,
  label,
  language,
  maxHeight
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');

    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, darkMode => {
      if (darkMode) {
        themeToggle.setAttribute('icon', 'brightness_high');
      } else {
        themeToggle.setAttribute('icon', 'brightness_4');
      }
    });
    themeToggle.addEventListener('click', () => {
      channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
    });
  }, {
    once: true
  });
  return \`
    <cv-code-snippet
        label="\${label}"
        maxHeight="\${maxHeight}"
        language="\${language}"
        \${hideHeader ? 'hideHeader' : ''}
        \${inline ? 'inline' : ''}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    \${content}
    </cv-code-snippet>\`;
}`,...(L=($=s.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var N,P,k;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`({
  inline,
  content,
  hideHeader,
  label,
  language,
  maxHeight
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');

    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, darkMode => {
      if (darkMode) {
        themeToggle.setAttribute('icon', 'brightness_high');
      } else {
        themeToggle.setAttribute('icon', 'brightness_4');
      }
    });
    themeToggle.addEventListener('click', () => {
      channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
    });
  }, {
    once: true
  });
  return \`
    <cv-code-snippet
        label="\${label}"
        maxHeight="\${maxHeight}"
        language="\${language}"
        \${hideHeader ? 'hideHeader' : ''}
        \${inline ? 'inline' : ''}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    \${content}
    </cv-code-snippet>\`;
}`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var R,w,K;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`({
  inline,
  content,
  hideHeader,
  label,
  language,
  maxHeight
}) => {
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');

    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, darkMode => {
      if (darkMode) {
        themeToggle.setAttribute('icon', 'brightness_high');
      } else {
        themeToggle.setAttribute('icon', 'brightness_4');
      }
    });
    themeToggle.addEventListener('click', () => {
      channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
    });
  }, {
    once: true
  });
  return \`
    <cv-code-snippet
        label="\${label}"
        maxHeight="\${maxHeight}"
        language="\${language}"
        \${hideHeader ? 'hideHeader' : ''}
        \${inline ? 'inline' : ''}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    \${content}
    </cv-code-snippet>\`;
}`,...(K=(w=u.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};var j,I,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`(...args) => {
  return \`
    <style>
    cv-code-snippet {
        margin:8px -24px -36px;
    }
    cv-code-snippet::part(container) {
        padding-left: 8px;
        padding-right: 8px;
    }
    cv-code-snippet::part(header) {
        padding-left: 24px;
    }
    </style>
    <cv-dialog heading="Lorem ipsum dolor sit amet" open>
        <cv-typography scale="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor consectetur quis velit donec vel integer diam. Nisl pretium egestas ultrices facilisis sed amet et. Odio elementum ut eu magnis at ullamcorper euismod.</cv-typography>
        \${Template(...args)}
        <cv-button outlined slot="primaryAction">Export</cv-button>
        <cv-button slot="secondaryAction">Close</cv-button>
    </cv-dialog>
    \`;
}`,...(q=(I=c.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ke=["Basic","Scrollable","HiddenHeader","Dialog"];export{s as Basic,c as Dialog,u as HiddenHeader,l as Scrollable,ke as __namedExportsOrder,Pe as default};
