import"./code-snippet-CiSyHDze.js";import"./dialog-CyJJRUa7.js";import"./icon-button-DIHzEZC4.js";import"./button-BEli9AVj.js";import{_ as D}from"./index-B9HoSp-k.js";import{g as G}from"./_commonjsHelpers-gnU0ypJ3.js";import"./query-assigned-elements-BJdb4KNY.js";import"./query-assigned-nodes-BxERp_Ow.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-C-hQhb2A.js";import"./inert.esm-CIOG4SQk.js";import"./base-element-C3CkHPn4.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./query-pFbEai1B.js";import"./ripple-handlers-CLC5WHP1.js";import"./state-CGn7W7VL.js";import"./style-map-CNNK6hz8.js";import"./aria-property-BYXgNswj.js";import"./event-options-CZVCfsC0.js";import"./if-defined-dAx6j6jI.js";import"./mwc-icon-button.css-DLV-hkFx.js";import"./mwc-icon-BGUO1vKj.js";var W="DARK_MODE",J="UPDATE_DARK_MODE",h,T;function z(){return T||(T=1,h=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(o=r;o--!==0;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(n).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;o--!==0;){var i=a[o];if(!t(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}),h}var Q=z();const M=G(Q);function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(t)}var _;function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?x(Object(n),!0).forEach(function(r){X(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function X(t,e,n){return e=Z(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(t){var e=ee(t,"string");return d(e)==="symbol"?e:String(e)}function ee(t,e){if(d(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m(t){return oe(t)||re(t)||ne(t)||te()}function te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(t,e){if(t){if(typeof t=="string")return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}}function re(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function oe(t){if(Array.isArray(t))return b(t)}function b(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const{global:ae}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:ke,SET_STORIES:we,DOCS_RENDERED:Ie}=__STORYBOOK_MODULE_CORE_EVENTS__;var B=ae,ie=B.document,f=B.window,Y="sb-addon-themes-3";(_=f.matchMedia)===null||_===void 0||_.call(f,"(prefers-color-scheme: dark)");var y={classTarget:"body",dark:D.dark,darkClass:["dark"],light:D.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},H=function(e){f.localStorage.setItem(Y,JSON.stringify(e))},ce=function(e,n){var r=n.current,o=n.darkClass,a=o===void 0?y.darkClass:o,i=n.lightClass,p=i===void 0?y.lightClass:i;if(r==="dark"){var E,O;(E=e.classList).remove.apply(E,m(g(p))),(O=e.classList).add.apply(O,m(g(a)))}else{var S,A;(S=e.classList).remove.apply(S,m(g(a))),(A=e.classList).add.apply(A,m(g(p)))}},g=function(e){var n=[];return n.concat(e).map(function(r){return r})},se=function(e){var n=ie.querySelector(e.classTarget);n&&ce(n,e)},le=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=f.localStorage.getItem(Y);if(typeof n=="string"){var r=JSON.parse(n);return e&&(e.dark&&!M(r.dark,e.dark)&&(r.dark=e.dark,H(r)),e.light&&!M(r.light,e.light)&&(r.light=e.light,H(r))),r}return C(C({},y),e)};se(le());const{addons:qe,useState:Ke,useEffect:je}=__STORYBOOK_MODULE_PREVIEW_API__,{addons:ue}=__STORYBOOK_MODULE_PREVIEW_API__,R=ue.getChannel(),F=`
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
`,Ve={title:"Components/Code snippet",args:{hideHeader:!1,inline:!1,label:"Example.sql",language:"sql",content:F,maxHeight:0}},v=({inline:t,content:e,hideHeader:n,label:r,language:o,maxHeight:a})=>(document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("#theme-toggle");R.on(W,p=>{p?i.setAttribute("icon","brightness_high"):i.setAttribute("icon","brightness_4")}),i.addEventListener("click",()=>{R.emit(J)})},{once:!0}),`
    <cv-code-snippet
        label="${r}"
        maxHeight="${a}"
        language="${o}"
        ${n?"hideHeader":""}
        ${t?"inline":""}>
    <cv-icon-button slot="actionItems" id="theme-toggle"></cv-icon-button>
    <cv-icon-button slot="actionItems" icon="content_copy"></cv-icon-button>
    ${e}
    </cv-code-snippet>`),s=v.bind();s.args={language:"sql",content:F};const l=v.bind();l.args={maxHeight:250};const u=v.bind();u.args={hideHeader:!0};const de=(...t)=>`
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
    `,c=de.bind();c.args={inline:!0};c.parameters={docs:{inlineStories:!1}};var $,P,N;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`({
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
}`,...(N=(P=s.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var L,k,w;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var I,q,K;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`({
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
}`,...(K=(q=u.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var j,V,U;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`(...args) => {
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
}`,...(U=(V=c.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};const Ue=["Basic","Scrollable","HiddenHeader","Dialog"];export{s as Basic,c as Dialog,u as HiddenHeader,l as Scrollable,Ue as __namedExportsOrder,Ve as default};
