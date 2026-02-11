import './circular-progress';

const circularProgressTemplate = ({
  density = 0,
  indeterminate,
  progress,
  closed,
}) => {
  const progressBar = document.createElement('cv-circular-progress');
  progressBar.density = density;
  progressBar.indeterminate = indeterminate;
  progressBar.progress = progress;
  progressBar.closed = closed;
  progressBar.ariaLabel = 'Example progress bar';

  return progressBar;
};

export default {
  title: 'Components/Circular Progress',
  argTypes: {
    progress: {
      control: { type: 'range', max: 1, min: 0, step: 0.1 },
    },
    density: {
      control: { type: 'range', min: -8, max: 50 },
    },
    closed: {
      control: { type: 'boolean' },
    },
  },
  args: {
    density: 0,
    closed: false,
  },
  tags: ['autodocs'],
  render: circularProgressTemplate,
};

export const Indeterminate = {
  parameters: {
    // disables Chromatic's snapshotting on a story level
    chromatic: { disableSnapshot: true },
  },
  args: {
    indeterminate: true,
  },
};

export const Determinate = {
  args: {
    progress: 0.5,
  },
};
