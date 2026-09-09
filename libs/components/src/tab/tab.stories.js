import './tab-bar';
import './tab';

export default {
  title: 'Components/Tabs',
  args: {
    label: 'Tab',
    activeIndex: 0,
    icon: undefined,
    indicatorIcon: undefined,
    hasImageIcon: false,
    isFadingIndicator: false,
    minWidth: false,
    isMinWidthIndicator: false,
    stacked: false,
    active: false,
  },
  tags: ['autodocs'],
};

const renderBooleanAttribute = (name, value) => (value ? ` ${name}` : '');

const renderStringAttribute = (name, value) =>
  value ? ` ${name}="${value}"` : '';

const renderTab = ({
  label,
  icon,
  indicatorIcon,
  hasImageIcon,
  isFadingIndicator,
  minWidth,
  isMinWidthIndicator,
  stacked,
  active,
}) => {
  return `<cv-tab label="${label}"${renderStringAttribute('icon', icon)}${renderStringAttribute('indicatorIcon', indicatorIcon)}${renderBooleanAttribute('hasImageIcon', hasImageIcon)}${renderBooleanAttribute('isFadingIndicator', isFadingIndicator)}${renderBooleanAttribute('minWidth', minWidth)}${renderBooleanAttribute('isMinWidthIndicator', isMinWidthIndicator)}${renderBooleanAttribute('stacked', stacked)}${renderBooleanAttribute('active', active)}>
            </cv-tab>`;
};

const Template = ({
  label = 'Tab',
  icon,
  indicatorIcon,
  hasImageIcon = false,
  isFadingIndicator = false,
  minWidth = false,
  isMinWidthIndicator = false,
  stacked = false,
  active = false,
  activeIndex = 0,
}) => {
  return `
        <cv-tab-bar activeIndex="${activeIndex}">
            ${renderTab({
              label: `${label} one`,
              icon,
              indicatorIcon,
              hasImageIcon,
              isFadingIndicator,
              minWidth,
              isMinWidthIndicator,
              stacked,
              active,
            })}
            ${renderTab({
              label: `${label} two`,
              icon,
              indicatorIcon,
              hasImageIcon,
              isFadingIndicator,
              minWidth,
              isMinWidthIndicator,
              stacked,
              active: false,
            })}
            ${renderTab({
              label: `${label} three`,
              icon,
              indicatorIcon,
              hasImageIcon,
              isFadingIndicator,
              minWidth,
              isMinWidthIndicator,
              stacked,
              active: false,
            })}
        </cv-tab-bar>`;
};

export const Basic = {
  render: Template,
};

export const Icon = {
  render: Template,
  args: {
    icon: 'houseboat',
  },
};

export const Preselected = {
  render: Template,
  args: {
    activeIndex: 1,
  },
};
