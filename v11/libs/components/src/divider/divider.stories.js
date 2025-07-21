import './divider';
import './divider.scss';

export default {
  title: 'Components/Divider',
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    size: {
      options: ['full', 'inset', 'icon'],
      control: { type: 'select' },
    },
    flush: {
      control: { type: 'boolean' },
    },
  },
  args: {
    direction: 'horizontal',
    size: 'full',
    flush: false,
  },
};

const Template = ({ direction, size, flush }) => {
  return `
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
  `;
};

export const Basic = Template.bind({});
