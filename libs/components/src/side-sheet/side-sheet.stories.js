import './side-sheet';
import '../button/button';
import { Active as ActiveStatusHeader } from '../status-header/status-header.stories';
import tableRowSelectionContent from '../../stories/demos/table-row-selection.content.html?raw';
import '../data-table/data-table.stories.scss';

const attachSideSheetToggle = ({
  triggerSelector,
  sideSheetSelector,
  childTriggerSelector,
  childSideSheetSelector,
}) => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const sideSheet = document.querySelector(sideSheetSelector);

      document
        .querySelector(triggerSelector)
        ?.addEventListener('click', () =>
          sideSheet?.open ? sideSheet.close() : sideSheet?.show(),
        );

      if (!childTriggerSelector || !childSideSheetSelector) {
        return;
      }

      const childSideSheet = document.querySelector(childSideSheetSelector);

      document
        .querySelector(childTriggerSelector)
        ?.addEventListener('click', () =>
          childSideSheet?.open
            ? childSideSheet.close()
            : childSideSheet?.show(),
        );
    },
    { once: true },
  );
};

const renderSingleSideSheet = ({
  heading = 'Sample side sheet',
  open = false,
  pushed = false,
  noPadding = false,
  width,
  content = '',
}) => {
  attachSideSheetToggle({
    triggerSelector: 'cv-button',
    sideSheetSelector: 'cv-side-sheet',
  });

  return `
        ${
          width
            ? `<style>
            cv-side-sheet {
                --cv-side-sheet-width: ${width};
            }
        </style>`
            : ''
        }
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet ${heading ? `heading="${heading}"` : ''} ${open ? 'open' : ''} ${pushed ? 'pushed' : ''} ${noPadding ? 'noPadding' : ''}>
          ${content}
        </cv-side-sheet>
    `;
};

const renderMultipleSideSheets = () => {
  attachSideSheetToggle({
    triggerSelector: '#parentTarget',
    sideSheetSelector: '#parentSideSheet',
    childTriggerSelector: '#childTarget',
    childSideSheetSelector: '#childSideSheet',
  });

  return `
        <cv-button id="parentTarget" raised>Open side sheet</cv-button>
        <cv-side-sheet id="parentSideSheet" heading="Sample side sheet">
            <cv-button id="childTarget" raised>Open child</cv-button>
        </cv-side-sheet>
        <cv-side-sheet id="childSideSheet" heading="Child side sheet">
        </cv-side-sheet>
    `;
};

export default {
  title: 'Components/Side sheet',
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    actions: {
      handles: ['click cv-button'],
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  render: renderSingleSideSheet,
};

export const Multiple = {
  render: renderMultipleSideSheets,
};

export const StatusHeader = {
  render: renderSingleSideSheet,
  args: {
    noPadding: true,
    width: '800px',
    content: `${ActiveStatusHeader({
      state: 'active',
      title: 'Example status from a side sheet',
    })}
          ${tableRowSelectionContent}`,
  },
};
