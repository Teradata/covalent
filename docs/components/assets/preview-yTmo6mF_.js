import"./index-B43vCpwJ.js";const{global:O}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator:l,addons:_}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:E,SELECT_STORY:L}=__STORYBOOK_MODULE_CORE_EVENTS__;var c="links",{document:s,HTMLElement:m}=O,v=e=>_.getChannel().emit(L,e),i=e=>{let{target:t}=e;if(!(t instanceof m))return;let o=t,{sbKind:a,sbStory:r}=o.dataset;(a||r)&&(e.preventDefault(),v({kind:a,story:r}))},n=!1,d=()=>{n||(n=!0,s.addEventListener("click",i))},k=()=>{n&&(n=!1,s.removeEventListener("click",i))},R=l({name:"withLinks",parameterName:c,wrapper:(e,t)=>(d(),_.getChannel().once(E,k),e(t))}),T=[R];export{T as decorators};