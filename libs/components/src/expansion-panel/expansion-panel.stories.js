import './expansion-panel';
import './expansion-panel-item';
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
    <expansion-panel panelIndex="0">

    <section>
        <expansion-panel-item
        title="Title"
        contentPreview="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ></expansion-panel-item>
    </section>

    <section>
        <expansion-panel-item
        title="Title"
        contentPreview="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ></expansion-panel-item>
    </section>

    <section>
        <expansion-panel-item
        title="Title"
        contentPreview="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ></expansion-panel-item>
    </section>


    `;
};
