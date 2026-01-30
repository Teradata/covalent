import './circular-progress';

export default {
  title: 'Components/Circular Progress',
  argTypes: {
    progress: {
      control: { type: 'range', max: 1, min: 0, step: 0.1 },
    },
    density: {
      control: { type: 'range', min: -8, max: 50 },
    },
  },
  args: {
    density: 0,
  },
  tags: ['autodocs'],
};

const Template = ({ density = 0, indeterminate, progress }) => {
  const progressBar = document.createElement('cv-circular-progress');
  progressBar.density = density;
  progressBar.indeterminate = indeterminate;
  progressBar.progress = progress;
  progressBar.ariaLabel = 'Example progress bar';

  return progressBar;
};

export const Indeterminate = Template.bind({});
Indeterminate.parameters = {
  // disables Chromatic's snapshotting on a story level
  chromatic: { disableSnapshot: true },
};
Indeterminate.args = {
  indeterminate: true,
};

export const Determinate = Template.bind({});
Determinate.args = {
  progress: 0.5,
};
