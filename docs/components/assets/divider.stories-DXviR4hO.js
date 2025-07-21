import{r as p,i as h,s as g,x as u,e as m}from"./query-assigned-elements-TXvH8BPC.js";const f=':host{display:block;width:100%;padding:8px 0;margin:0;position:relative;box-sizing:border-box}:host([direction=vertical]){display:inline-block;min-height:100%;max-height:100vh;width:auto;padding:0 8px}:host([flush=true]){padding:0}:host([direction=vertical][flush=true]){padding:0}:host([size=inset]){padding-left:16px;padding-right:16px}:host([direction=vertical][size=inset]){padding:12px 8px}:host([direction=vertical][size=inset][flush=true]){padding:12px 0}:host([flush]){padding:0!important}:host:before{content:"";position:absolute;background-color:var(--cv-theme-outline-variant, #d1d5e7);top:50%;left:0;right:0;height:1px;transform:translateY(-50%)}:host([direction=vertical]):before{top:0;bottom:0;left:50%;right:auto;width:1px;height:auto;transform:translate(-50%)}:host([size=icon]):before{top:50%;left:50%;width:24px;height:1px;right:auto;bottom:auto;transform:translate(-50%) translateY(-50%)}:host([direction=vertical][size=icon]):before{top:50%;left:50%;width:1px;height:24px;right:auto;bottom:auto;transform:translate(-50%) translateY(-50%)}:host([size=inset]):before{left:16px;right:16px}:host([direction=vertical][size=inset]):before{top:12px;bottom:12px;left:50%;right:auto;width:1px;height:auto;transform:translate(-50%)}';var z=Object.getOwnPropertyDescriptor,S=(d,c,n,s)=>{for(var i=s>1?void 0:s?z(c,n):c,t=d.length-1,r;t>=0;t--)(r=d[t])&&(i=r(i)||i);return i};let e=class extends g{constructor(){super(),this.direction="horizontal",this.size="full",this.flush=!1}render(){return u`
      <div
        class="cv-divider ${this.direction} ${this.size} ${this.flush?"flush":""}"
      ></div>
    `}};e.properties={direction:{type:String},size:{type:String},flush:{type:Boolean}};e.styles=[h`
      ${p(f)}
    `];e=S([m("cv-divider")],e);const I={title:"Components/Divider",argTypes:{direction:{options:["horizontal","vertical"],control:{type:"select"}},size:{options:["full","inset","icon"],control:{type:"select"}},flush:{control:{type:"boolean"}}},args:{direction:"horizontal",size:"full",flush:!1}},x=({direction:d,size:c,flush:n})=>`
    <section class="horizontal-section">
      <h1>Horizontal dividers</h1>

      <div class="card horizontal">
        <p><strong>Default:</strong></p>
        <pre><code>&lt;cv-divider&gt;&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li>Sample list item</li>
          <li>Sample list item</li>
          <cv-divider></cv-divider>
          <li>Sample list item</li>
          <li>Sample list item</li>
        </ul>
      </div>

      <div class="card horizontal">
        <p><strong>Flush:</strong></p>
        <pre><code>&lt;cv-divider
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li>Sample list item</li>
          <li>Sample list item</li>
          <cv-divider flush></cv-divider>
          <li>Sample list item</li>
          <li>Sample list item</li>
        </ul>
      </div>

      <div class="card horizontal">
        <p><strong>Inset:</strong></p>
        <pre><code>&lt;cv-divider
     size="inset"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li>Sample list item</li>
          <li>Sample list item</li>
          <cv-divider size="inset"></cv-divider>
          <li>Sample list item</li>
          <li>Sample list item</li>
        </ul>
      </div>

      <div class="card horizontal">
        <p><strong>Inset + flush:</strong></p>
        <pre><code>&lt;cv-divider
     size="inset"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li>Sample list item</li>
          <li>Sample list item</li>
          <cv-divider size="inset" flush></cv-divider>
          <li>Sample list item</li>
          <li>Sample list item</li>
        </ul>
      </div>

      <div class="card horizontal icon-demo">
        <p><strong>Icon width:</strong></p>
        <pre><code>&lt;cv-divider
     size="icon"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider size="icon"></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card horizontal icon-demo">
        <p><strong>Icon + flush:</strong></p>
        <pre><code>&lt;cv-divider
     size="icon"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider size="icon" flush></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>
    </section>

    <section class="vertical-section">
      <h1>Vertical dividers</h1>

      <div class="card vertical">
        <p><strong>Default:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical"></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Flush:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" flush></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Inset:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     size="inset"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" size="inset"></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Inset + flush:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     size="inset"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" size="inset" flush></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Icon height:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     size="icon"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" size="icon"></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Icon + flush:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     size="icon"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" size="icon" flush></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>
    </section>
  `,l=x.bind({});var o,v,a;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`({
  direction,
  size,
  flush
}) => {
  return \`
    <section class="horizontal-section">
      <h1>Horizontal dividers</h1>

      <div class="card horizontal">
        <p><strong>Default:</strong></p>
        <pre><code>&lt;cv-divider&gt;&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li>Sample list item</li>
          <li>Sample list item</li>
          <cv-divider></cv-divider>
          <li>Sample list item</li>
          <li>Sample list item</li>
        </ul>
      </div>

      <div class="card horizontal">
        <p><strong>Flush:</strong></p>
        <pre><code>&lt;cv-divider
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li>Sample list item</li>
          <li>Sample list item</li>
          <cv-divider flush></cv-divider>
          <li>Sample list item</li>
          <li>Sample list item</li>
        </ul>
      </div>

      <div class="card horizontal">
        <p><strong>Inset:</strong></p>
        <pre><code>&lt;cv-divider
     size="inset"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li>Sample list item</li>
          <li>Sample list item</li>
          <cv-divider size="inset"></cv-divider>
          <li>Sample list item</li>
          <li>Sample list item</li>
        </ul>
      </div>

      <div class="card horizontal">
        <p><strong>Inset + flush:</strong></p>
        <pre><code>&lt;cv-divider
     size="inset"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li>Sample list item</li>
          <li>Sample list item</li>
          <cv-divider size="inset" flush></cv-divider>
          <li>Sample list item</li>
          <li>Sample list item</li>
        </ul>
      </div>

      <div class="card horizontal icon-demo">
        <p><strong>Icon width:</strong></p>
        <pre><code>&lt;cv-divider
     size="icon"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider size="icon"></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card horizontal icon-demo">
        <p><strong>Icon + flush:</strong></p>
        <pre><code>&lt;cv-divider
     size="icon"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider size="icon" flush></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>
    </section>

    <section class="vertical-section">
      <h1>Vertical dividers</h1>

      <div class="card vertical">
        <p><strong>Default:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical"></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Flush:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" flush></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Inset:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     size="inset"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" size="inset"></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Inset + flush:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     size="inset"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" size="inset" flush></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Icon height:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     size="icon"&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" size="icon"></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>

      <div class="card vertical">
        <p><strong>Icon + flush:</strong></p>
        <pre><code>&lt;cv-divider
     direction="vertical"
     size="icon"
     flush&gt;
&lt;/cv-divider&gt;</code></pre>
        <ul>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
          <cv-divider direction="vertical" size="icon" flush></cv-divider>
          <li><div class="placeholder-icon"></div></li>
          <li><div class="placeholder-icon"></div></li>
        </ul>
      </div>
    </section>
  \`;
}`,...(a=(v=l.parameters)==null?void 0:v.docs)==null?void 0:a.source}}};const y=["Basic"];export{l as Basic,y as __namedExportsOrder,I as default};
