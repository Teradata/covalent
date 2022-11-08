import './side-sheet';
import '../button/button';
//import { Active as ActiveStatusHeader } from '../status-header/status-header.stories';
import * as tableRowSelectionContent from '../../stories/demos/table-row-selection.content.html';

export default {
  title: 'Components/Side sheet',
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    actions: {
      handles: ['click td-button'],
    },
  },
};

export const Basic = () => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const sideSheet = document.querySelector('td-side-sheet');
      document
        .querySelector('td-button')
        ?.addEventListener('click', () =>
          sideSheet?.open ? sideSheet.close() : sideSheet?.show()
        );
    },
    { once: true }
  );
  return `
        <td-button raised>Open side sheet</td-button>
        <td-side-sheet heading="Sample side sheet">
        </td-side-sheet>
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
          sideSheet?.open ? sideSheet.close() : sideSheet?.show()
        );
      document
        .querySelector('#childTarget')
        ?.addEventListener('click', () =>
          childSideSheet?.open ? childSideSheet.close() : childSideSheet?.show()
        );
    },
    { once: true }
  );
  return `
        <td-button id="parentTarget" raised>Open side sheet</td-button>
        <td-side-sheet id="parentSideSheet" heading="Sample side sheet">
            <td-button id="childTarget" raised>Open child</td-button>
        </td-side-sheet>
        <td-side-sheet id="childSideSheet" heading="Child side sheet" >
        </td-side-sheet>
    `;
};

export const StatusHeader = () => {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      const sideSheet = document.querySelector('td-side-sheet');
      console.log(sideSheet);
      document
        .querySelector('td-button')
        ?.addEventListener('click', () =>
          sideSheet?.open ? sideSheet.close() : sideSheet?.show()
        );
    },
    { once: true }
  );
  return `
        <style>
            td-side-sheet {
                --td-side-sheet-width: 800px;
            }
        </style>
        <td-button raised>Open side sheet</td-button>
        <td-side-sheet noPadding>
            ${tableRowSelectionContent}
        </td-side-sheet>
    `;
};
