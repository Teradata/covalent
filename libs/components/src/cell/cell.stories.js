import './cell';

export default {
  title: 'Components/Cell',
  args: {
    code: '',
    index: 0,
    language: 'markdown',
    selected: true,
    showEditor: true,
    timesExecuted: 2,
  },
};

const Template = ({
  code,
  index,
  language,
  selected,
  showEditor,
  timesExecuted,
}) => {
  return `<div style="width: 800px; ">
            <cv-cell code="${code}" index="${index}" language="${language}" timesExecuted="${timesExecuted}" ${
    showEditor ? 'showEditor' : ''
  } ${selected ? 'selected' : ''}
  ></cv-cell>
          </div>`;
};

export const Basic = Template.bind({});
