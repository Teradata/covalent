import './linear-progress';

export default {
  title: 'Components/Linear Progress',
  parameters: {
    layout: 'padded',
    // disables Chromatic's snapshotting on a story level
    chromatic: { disableSnapshot: true },
  },
  argTypes: {
    progress: {
      control: { type: 'range', max: 1, min: 0, step: 0.1 },
    },
    buffer: {
      control: { type: 'range', max: 1, min: 0, step: 0.1 },
    },
    reverse:  {
      control: 'boolean',
    },
  }
};

const Template = ({ indeterminate, buffer, progress, reverse }) => {
    const progressBar = document.createElement('td-linear-progress');
    progressBar.indeterminate = indeterminate;
    progressBar.buffer = buffer;
    progressBar.progress = progress;
    progressBar.reverse = reverse;

    return progressBar;
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const Determinate = Template.bind({});
Determinate.args = {
  progress: 0.5,
  buffer: 0.5,
};
