import './expansion-panel';
import './expansion-panel-item';
import '../icon/icon';
import '../action-ribbon/action-ribbon';
import '../button/button';
import '../icon/icon';

export default {
  title: 'Components/Expansion panel',
  args: {
    icon: 'description',
    noSurface: false,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = ({ icon, noSurface }) => {
  return `
    <cv-expansion-panel ${noSurface ? 'noSurface' : ''} titleWidth='16em'>

      <cv-expansion-panel-item
      title="Title"
      contentPreview="Content preview"
      showFooter
      >
        <div slot="content">
         Culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div slot="footer">
          Basic footer
        </div>
      </cv-expansion-panel-item>

      <cv-expansion-panel-item
      title="Lorem ipsum dolor sit amet"
      contentPreview="Content preview"
      showFooter
      >
        <div slot="content">Mxollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div slot="footer" style="display:flex; align-items:center">
          <div style="color:rgba(255, 255, 255, 0.54)">You have unsaved changes</div>
          <div style="margin-left:auto">
            <cv-button outlined label="Cancel"></cv-button>
            <cv-button raised label="Save" class="primary accent"></cv-button>
          </div>
        </div>
      </cv-expansion-panel-item>

      <cv-expansion-panel-item
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
      contentPreview="Content preview"
      >
        <div slot="content">
          Content
        </div>
      </cv-expansion-panel-item>

      <cv-expansion-panel-item
      title="Lorem ipsum dolor"
      >
        <div slot="content">
          Content
        </div>      
      </cv-expansion-panel-item>

    </cv-expansion-panel>
    `;
};

export const NoSurface = Basic.bind({});

NoSurface.args = {
  noSurface: true,
};
