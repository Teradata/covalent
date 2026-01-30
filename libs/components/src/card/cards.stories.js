import './card';
import tableContent from '../../stories/demos/table.content.html?raw';
import '../data-table/data-table.stories.scss';

export default {
  title: 'Components/Cards',
  args: {
    cardTitle: 'Card title',
    outlined: false,
    actionBar: false,
    fullHeight: false,
  },
  tags: ['autodocs'],
};

export const Basic = ({ outlined, fullHeight, actionBar, cardTitle }) => {
  return `
  <cv-card 
    cardTitle='${cardTitle}'
    ${actionBar ? 'actionBar' : ''}
    ${outlined ? 'outlined' : ''}
    ${fullHeight ? 'fullHeight' : ''}
  >
    ${tableContent}
    <div slot="card-actions" class="mdc-card__action-buttons">
      <cv-button label="Action 1"></cv-button>
      <cv-button label="Action 2"></cv-button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <cv-icon-button icon="share"></cv-icon-button>
      <cv-icon-button icon="more_vert"></cv-icon-button>
    </div>
  </cv-card>
  `;
};

export const Outline = Basic.bind({});
Outline.args = {
  outlined: true,
  cardTitle: '',
};
