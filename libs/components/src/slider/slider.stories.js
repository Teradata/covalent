import './slider';
import './slider-range';

const createSliderElement = (tagName, { discrete, disabled, markers }) => {
  const slider = document.createElement(tagName);
  slider.discrete = discrete;
  slider.disabled = disabled;
  slider.markers = markers;
  slider.max = 50;
  slider.min = 5;

  if (markers) {
    slider.step = 5;
  }

  return slider;
};

const renderSingleSlider = ({ value = 10, ...args }) => {
  const slider = createSliderElement('cv-slider', args);
  slider.value = value;

  return slider;
};

const renderRangeSlider = ({ value = 10, ...args }) => {
  const slider = createSliderElement('cv-slider-range', args);
  slider.valueStart = value;
  slider.valueEnd = value + 10;

  return slider;
};

export default {
  title: 'Components/Slider',
  parameters: {
    layout: 'padded',
  },
  args: {
    discrete: false,
    disabled: false,
    markers: false,
  },
  tags: ['autodocs'],
  render: renderSingleSlider,
};

export const Basic = {
  args: {},
};

export const Range = {
  args: {},
  render: renderRangeSlider,
};
