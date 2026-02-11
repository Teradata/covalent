import './card';
import '../icon-button/icon-button';
import '../expansion-panel/expansion-panel';
import '../expansion-panel/expansion-panel-item';
import tableContent from '../../stories/demos/table.content.html?raw';
import '../data-table/data-table.stories.scss';

export default {
  title: 'Components/Cards',
  args: {
    cardTitle: 'Card title',
    outlined: false,
    actionBar: false,
    fullHeight: false,
    interactive: false,
  },
  tags: ['autodocs'],
};

const cardTemplate = ({
  outlined,
  fullHeight,
  actionBar,
  cardTitle,
  interactive,
}) => {
  return `
  <cv-card 
    cardTitle='${cardTitle}'
    ${actionBar ? 'actionBar' : ''}
    ${outlined ? 'outlined' : ''}
    ${fullHeight ? 'fullHeight' : ''}
    ${interactive ? 'interactive' : ''}
  >
    ${tableContent}
    <div slot="card-actions" class="mdc-card__action-buttons">
      <cv-button label="Save" outlined></cv-button>
      <cv-button label="Cancel" outlined></cv-button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <cv-icon-button icon="share"></cv-icon-button>
      <cv-icon-button icon="more_vert"></cv-icon-button>
    </div>
  </cv-card>
  `;
};

const cardExpansionPanelTemplate = ({
  outlined,
  fullHeight,
  actionBar,
  cardTitle,
  interactive,
}) => {
  return `
  <cv-card 
    cardTitle='${cardTitle}'
    ${actionBar ? 'actionBar' : ''}
    ${outlined ? 'outlined' : ''}
    ${fullHeight ? 'fullHeight' : ''}
    ${interactive ? 'interactive' : ''}
  >
    <cv-expansion-panel titleWidth="150px">
      <cv-expansion-panel-item
        title="Title"
        index="0"
        contentPreview="content preview"
      >
        <div slot="content"></div>
      </cv-expansion-panel-item>
      <cv-expansion-panel-item
        title="Title"
        index="0"
        contentPreview="content preview"
      >
        <div slot="content"></div>
      </cv-expansion-panel-item>
      <cv-expansion-panel-item
        title="Title"
        index="0"
        contentPreview="content preview"
      >
        <div slot="content"></div>
      </cv-expansion-panel-item>
    </cv-expansion-panel>
  </cv-card>
  `;
};

export const Main = {
  args: {
    cardTitle: 'Card title',
    actionBar: true,
  },
  render: cardTemplate,
};

export const ExpansionPanel = {
  args: {
    cardTitle: 'Card title',
  },
  render: cardExpansionPanelTemplate,
};

export const Outline = {
  args: {
    outlined: true,
    cardTitle: '',
  },
  render: cardTemplate,
};
