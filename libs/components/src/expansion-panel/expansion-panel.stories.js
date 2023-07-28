import './expansion-panel';
import './expansion-panel-item';
import '../icon/icon';
import '../action-ribbon/action-ribbon';
import '../button/button';
import '../icon/icon';

export default {
  title: 'Components/Expansion Panel',
  argTypes: {
    icon: {
      control: 'text',
      defaultValue: 'description',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export const ExpansionPanel = ({ icon }) => {
  return `
    <expansion-panel>

      <expansion-panel-item
      title="Title"
      contentPreview="Lorem ipsum dolor sit amet, consectetur adipiscing..."
      panelFooter=true
      noSurface=true
      >
        <div slot="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div slot="footer">
          Basic footer
        </div>
      </expansion-panel-item>

      <expansion-panel-item
      title="Title"
      contentPreview="This content preview is short"
      >
        <div slot="content">
          Content
        </div>
        <div slot="footer">
        </div>
      </expansion-panel-item>

      <expansion-panel-item
      title="Title"
      contentPreview="This content preview is looooooooooooooooooooooooong"
      >
        <div slot="content">
          Content
        </div>
      </expansion-panel-item>

      <expansion-panel-item
      title="Longer title"
      contentPreview=""
      >
        <div slot="content">
          Content
        </div>      
      </expansion-panel-item>

      <expansion-panel-item
      title="Much much much longer title"
      contentPreview="Lorem ipsum dolor sit amet, consectetur adipiscing..."
      >
        <div slot="content">
          Content
        </div>       
      </expansion-panel-item>

    </expansion-panel>
    `;
};
