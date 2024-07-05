import './cell';

export default {
  title: 'Components/Cell',
  args: {
    code: '',
    index: 0,
    language: 'markdown',
    selected: false,
    timesExecuted: 2,
  },
};

const Template = ({ code, index, language, selected, timesExecuted }) => {
  return `<div style="width: 800px; ">
            <cv-cell code="${code}" index="${index}" language="${language}" timesExecuted="${timesExecuted}" ${
    selected ? 'selected' : ''
  }></cv-cell>
          </div>`;
};

export const Basic = Template.bind({});
