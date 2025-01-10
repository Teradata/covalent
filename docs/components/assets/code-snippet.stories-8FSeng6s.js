import"./code-snippet-mHpOeTZ3.js";import"./dialog-C4t-v-qD.js";import"./icon-button-C19p1m3Z.js";import"./button-DL8Q-BuB.js";import"./index-CBqU2yxZ.js";import{g as Y}from"./_commonjsHelpers-BosuxZz1.js";import{t as A}from"./chunk-ZGA76URP-CNF9LlSg.js";import"./query-assigned-elements-DrVEbY-Z.js";import"./property-jaip2ZBL.js";import"./query-assigned-nodes-kmKsePzO.js";import"./class-map-BiVinSLa.js";import"./directive-CvdRHFdJ.js";import"./tslib.es6-BHOXe2z4.js";import"./inert.esm-BjwkyC0B.js";import"./base-element-DsKKxcfh.js";import"./utils-DQt7ZoY7.js";import"./observer-D8jHVEI7.js";import"./query-BwR-Wesx.js";import"./ripple-handlers-DDpyjNEg.js";import"./state-BvMmCZpn.js";import"./style-map-CYkhWXm1.js";import"./aria-property-BYXgNswj.js";import"./event-options-DUJCy-Gh.js";import"./if-defined-BYt77_e6.js";import"./mwc-icon-button.css-BN1SKsX6.js";import"./mwc-icon-BqP9gbHN.js";var F="DARK_MODE",G="UPDATE_DARK_MODE",J=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(o=r;o--!==0;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(n).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;o--!==0;){var i=a[o];if(!t(e[i],n[i]))return!1}return!0}return e!==e&&n!==n};const D=Y(J);function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(t)}var h;function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?T(Object(n),!0).forEach(function(r){W(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function W(t,e,n){return e=z(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(t){var e=Q(t,"string");return d(e)==="symbol"?e:String(e)}function Q(t,e){if(d(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m(t){return te(t)||ee(t)||Z(t)||X()}function X(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t,e){if(t){if(typeof t=="string")return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}}function ee(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function te(t){if(Array.isArray(t))return _(t)}function _(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const{global:ne}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:Pe,SET_STORIES:ke,DOCS_RENDERED:we}=__STORYBOOK_MODULE_CORE_EVENTS__;var U=ne,re=U.document,f=U.window,V="sb-addon-themes-3";(h=f.matchMedia)===null||h===void 0||h.call(f,"(prefers-color-scheme: dark)");var b={classTarget:"body",dark:A.dark,darkClass:["dark"],light:A.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},C=function(e){f.localStorage.setItem(V,JSON.stringify(e))},oe=function(e,n){var r=n.current,o=n.darkClass,a=o===void 0?b.darkClass:o,i=n.lightClass,p=i===void 0?b.lightClass:i;if(r==="dark"){var y,E;(y=e.classList).remove.apply(y,m(g(p))),(E=e.classList).add.apply(E,m(g(a)))}else{var O,S;(O=e.classList).remove.apply(O,m(g(a))),(S=e.classList).add.apply(S,m(g(p)))}},g=function(e){var n=[];return n.concat(e).map(function(r){return r})},ae=function(e){var n=re.querySelector(e.classTarget);n&&oe(n,e)},ie=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=f.localStorage.getItem(V);if(typeof n=="string"){var r=JSON.parse(n);return e&&(e.dark&&!D(r.dark,e.dark)&&(r.dark=e.dark,C(r)),e.light&&!D(r.light,e.light)&&(r.light=e.light,C(r))),r}return M(M({},b),e)};ae(ie());const{addons:Ke}=__STORYBOOK_MODULE_ADDONS__,{addons:ce}=__STORYBOOK_MODULE_PREVIEW_API__,x=ce.getChannel(),B=`
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
`,Ie={title:"Components/Code snippet",args:{hideHeader:!1,inline:!1,label:"Example.sql",language:"sql",content:B,maxHeight:0}},v=({inline:t,content:e,hideHeader:n,label:r,language:o,maxHeight:a})=>(document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("#theme-toggle");x.on(F,p=>{p?i.setAttribute("icon","brightness_high"):i.setAttribute("icon","brightness_4")}),i.addEventListener("click",()=>{x.emit(G)})},{once:!0}),`
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
    `,c=se.bind();c.args={inline:!0};c.parameters={docs:{inlineStories:!1}};var H,$,R;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`({
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
}`,...(R=($=s.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var N,L,P;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`({
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
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var k,w,K;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(K=(w=u.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};var I,j,q;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(...args) => {
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
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const je=["Basic","Scrollable","HiddenHeader","Dialog"];export{s as Basic,c as Dialog,u as HiddenHeader,l as Scrollable,je as __namedExportsOrder,Ie as default};
