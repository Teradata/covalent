import '../checkbox/checkbox';
import '../formfield/formfield';

import { Basic } from '../typography/typography.stories';
import loremIpsumContent from '../../stories/demos/lorem-ipsum.content.html?raw';
import tableProgressContent from '../../stories/demos/table-progress-indicator.content.html?raw';

import 'skeleton-elements/css';

export default {
  title: 'Components/Skeleton',
  tags: ['autodocs'],
};

const skeletonClsName = 'skeleton-text';
const skeletonEffect = 'skeleton-effect-fade';

export const DataTable = () => {
  const container = document.createElement('div');
  container.innerHTML = tableProgressContent;
  const tableCell = container.getElementsByClassName('mdc-data-table__cell');
  Array.from(tableCell).forEach((cell) => {
    cell.classList.add(skeletonClsName);
    cell.classList.add(skeletonEffect);
  });

  return container;
};

export const Typography = () => {
  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = `${Basic()}`;

  return container;
};

export const Content = () => {
  const container = document.createElement('div');
  container.classList.add(skeletonClsName);
  container.classList.add(skeletonEffect);
  container.innerHTML = loremIpsumContent;

  return container;
};

export const Checkbox = ({ label = 'Bananas', indeterminate }) => {
  const container = document.createElement('div');
  container.innerHTML = `
      <style>
          cv-formfield {
              display: block;
          }
          .child {
              margin-left: 20px;
          }
      </style>
      <cv-formfield label="${label}">
          <cv-checkbox ${indeterminate ? `indeterminate` : null}></cv-checkbox>
      </cv-formfield>
      
      <cv-formfield label="${label}">
          <cv-checkbox class="child"></cv-checkbox>
      </cv-formfield>
      
      <cv-formfield label="${label}">
          <cv-checkbox class="child" checked></cv-checkbox>
      </cv-formfield>`;

  const labels = container.getElementsByTagName('cv-formfield');
  Array.from(labels).forEach((label) => {
    label.classList.add(skeletonClsName);
    label.classList.add(skeletonEffect);
  });

  return container;
};
