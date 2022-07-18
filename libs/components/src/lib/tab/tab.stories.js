import './tab-bar';
import './tab';

export default {
  title: 'Components/Tabs',
  argTypes: {
    onClick: { action: 'onClick'}
  }
};

const Template = ({ icon, activeIndex = 0 }) => {

    return `
        <td-tab-bar activeIndex="${activeIndex}">
            <td-tab ${icon ? `icon="${icon}"` : null }
                     label="Tab one">
            </td-tab>
            <td-tab ${icon ? `icon="${icon}"` : null }
                     label="Tab two">
            </td-tab>
            <td-tab ${icon ? `icon="${icon}"` : null }
                     label="Tab three">
            </td-tab>
        </td-tab-bar>`;
};

export const Basic = Template.bind({});


export const Icon = Template.bind({});
Icon.args = {
    icon: 'houseboat',
}

export const Preselected = Template.bind({});
Preselected.args = {
    activeIndex: 1,
}