import './slider';
import './slider-range';

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
};

const SingleTemplate = ({ discrete, disabled, markers, value = 10 }) => {
  const progressBar = document.createElement('cv-slider');
  progressBar.discrete = discrete;
  progressBar.disabled = disabled;
  progressBar.markers = markers;
  progressBar.value = value;
  progressBar.max = 50;
  progressBar.min = 5;

  if (markers) {
    progressBar.step = 5;
  }

  return progressBar;
};

const RangeTemplate = ({ discrete, disabled, markers, value = 10 }) => {
  const progressBar = document.createElement('cv-slider-range');
  progressBar.discrete = discrete;
  progressBar.disabled = disabled;
  progressBar.markers = markers;
  progressBar.valueStart = value;
  progressBar.valueEnd = value + 10;

  progressBar.max = 50;
  progressBar.min = 5;

  if (markers) {
    progressBar.step = 5;
  }

  return progressBar;
};

export const Basic = SingleTemplate.bind({});
Basic.args = {};

export const Range = RangeTemplate.bind({});
Range.args = {};
