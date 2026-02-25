import './linear-progress';

export default {
  title: 'Components/Linear Progress',
  parameters: {
    layout: 'padded',
    // disables Chromatic's snapshotting on a story level
    chromatic: { disableSnapshot: true },
  },
  argTypes: {
    indeterminate: {
      control: { type: 'boolean' },
    },
    progress: {
      control: { type: 'range', max: 1, min: 0, step: 0.1 },
    },
    buffer: {
      control: { type: 'range', max: 1, min: 0, step: 0.1 },
    },
    reverse: {
      control: 'boolean',
    },
    closed: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => {
  const { indeterminate, buffer, progress, reverse, closed } = args;
  const progressBar = document.createElement('cv-linear-progress');
  progressBar.indeterminate = indeterminate;
  progressBar.buffer = buffer;
  progressBar.progress = progress;
  progressBar.reverse = reverse;
  progressBar.closed = closed;
  progressBar.ariaLabel = 'Example progress bar';

  return progressBar;
};

export const Indeterminate = {
  render: Template,
  args: {
    indeterminate: true,
    reverse: false,
    closed: false,
  },
};

export const Determinate = {
  render: Template,
  args: {
    progress: 0.5,
    buffer: 0.5,
    indeterminate: false,
    reverse: false,
    closed: false,
  },
};
