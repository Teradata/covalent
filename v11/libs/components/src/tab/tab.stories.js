import './tab-bar';
import './tab';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
};

const Template = ({ icon, activeIndex = 0 }) => {
  return `
        <cv-tab-bar activeIndex="${activeIndex}">
            <cv-tab${icon ? ` icon="${icon}"` : ``} label="Tab one">
            </cv-tab>
            <cv-tab${icon ? ` icon="${icon}"` : ``} label="Tab two">
            </cv-tab>
            <cv-tab${icon ? ` icon="${icon}"` : ``} label="Tab three">
            </cv-tab>
        </cv-tab-bar>`;
};

export const Basic = Template.bind({});

export const Icon = Template.bind({});
Icon.args = {
  icon: 'houseboat',
};

export const Preselected = Template.bind({});
Preselected.args = {
  activeIndex: 1,
};
