import '../checkbox/checkbox';
import '../formfield/formfield';

import { Basic } from '../typography/typography.stories';
import * as loremIpsumContent from '../../stories/demos/lorem-ipsum.content.html';
import * as tableProgressContent from '../../stories/demos/table-progress-indicator.content.html';

import '!style-loader!css-loader!sass-loader!skeleton-elements/skeleton-elements.scss';

export default {
  title: 'Components/Skeleton',
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
          td-formfield {
              display: block;
          }
          .child {
              margin-left: 20px;
          }
      </style>
      <td-formfield label="${label}">
          <td-checkbox ${indeterminate ? `indeterminate` : null}></td-checkbox>
      </td-formfield>
      
      <td-formfield label="${label}">
          <td-checkbox class="child"></td-checkbox>
      </td-formfield>
      
      <td-formfield label="${label}">
          <td-checkbox class="child" checked></td-checkbox>
      </td-formfield>`;

  const labels = container.getElementsByTagName('td-formfield');
  Array.from(labels).forEach((label) => {
    label.classList.add(skeletonClsName);
    label.classList.add(skeletonEffect);
  });

  return container;
};
