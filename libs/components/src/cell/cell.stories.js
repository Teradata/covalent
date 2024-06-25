import './cell';

export default {
  title: 'Components/Cell',
  args: {
    code: '',
    index: 0,
    language: 'sql',
    output: 'Heres my output!',
    selected: false,
  },
};

const Template = ({ code, index, language, selected }) => {
  return `<div style="width: 800px; ">
            <cv-cell code="${code}" index="${index}" language="${language}" ${
    selected ? 'selected' : ''
  }></cv-cell>
          </div>`;
};

export const Basic = Template.bind({});
