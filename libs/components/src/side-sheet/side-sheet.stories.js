import './side-sheet';
import '../button/button';
import { Active as ActiveStatusHeader } from '../status-header/status-header.stories';
import tableRowSelectionContent from '../../stories/demos/table-row-selection.content.html?raw';
import '../data-table/data-table.stories.scss';

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

export const Basic = () => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const sideSheet = document.querySelector('cv-side-sheet');
      document
        .querySelector('cv-button')
        ?.addEventListener('click', () =>
          sideSheet?.open ? sideSheet.close() : sideSheet?.show(),
        );
    },
    { once: true },
  );
  return `
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet heading="Sample side sheet">
        </cv-side-sheet>
    `;
};

export const Multiple = () => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const sideSheet = document.querySelector('#parentSideSheet');
      const childSideSheet = document.querySelector('#childSideSheet');

      document
        .querySelector('#parentTarget')
        ?.addEventListener('click', () =>
          sideSheet?.open ? sideSheet.close() : sideSheet?.show(),
        );
      document
        .querySelector('#childTarget')
        ?.addEventListener('click', () =>
          childSideSheet?.open
            ? childSideSheet.close()
            : childSideSheet?.show(),
        );
    },
    { once: true },
  );
  return `
        <cv-button id="parentTarget" raised>Open side sheet</cv-button>
        <cv-side-sheet id="parentSideSheet" heading="Sample side sheet">
            <cv-button id="childTarget" raised>Open child</cv-button>
        </cv-side-sheet>
        <cv-side-sheet id="childSideSheet" heading="Child side sheet" >
        </cv-side-sheet>
    `;
};

export const StatusHeader = () => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const sideSheet = document.querySelector('cv-side-sheet');
      console.log(sideSheet);
      document
        .querySelector('cv-button')
        ?.addEventListener('click', () =>
          sideSheet?.open ? sideSheet.close() : sideSheet?.show(),
        );
    },
    { once: true },
  );
  return `
        <style>
            cv-side-sheet {
                --cv-side-sheet-width: 800px;
            }
        </style>
        <cv-button raised>Open side sheet</cv-button>
        <cv-side-sheet noPadding>
          ${ActiveStatusHeader({
            state: 'active',
            title: 'Example status from a side sheet',
          })}
          ${tableRowSelectionContent}
        </cv-side-sheet>
    `;
};
