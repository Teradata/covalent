import '../checkbox/checkbox';
import '../formfield/formfield';

import typographyMeta, { Basic } from '../typography/typography.stories';
import loremIpsumContent from '../../stories/demos/lorem-ipsum.content.html?raw';
import tableProgressContent from '../../stories/demos/table-progress-indicator.content.html?raw';

import 'skeleton-elements/css';

const renderStory = (story, meta, args = {}) => {
  if (typeof story === 'function') {
    return story(args);
  }

  const render = story.render ?? meta?.render;

  if (typeof render !== 'function') {
    throw new Error('Story render function is not available');
  }

  return render({ ...(story.args ?? {}), ...args });
};

const applySkeletonClasses = (elements) => {
  Array.from(elements).forEach((element) => {
    element.classList.add(skeletonClsName);
    element.classList.add(skeletonEffect);
  });
};

const createSkeletonContainer = (content, applySkeleton) => {
  const container = document.createElement('div');
  container.innerHTML = content;
  applySkeleton?.(container);

  return container;
};

const renderSkeletonContent = (content) => {
  return createSkeletonContainer(content, (container) => {
    applySkeletonClasses(
      container.children.length ? container.children : [container],
    );
  });
};

const renderDataTable = () => {
  return createSkeletonContainer(tableProgressContent, (container) => {
    applySkeletonClasses(
      container.getElementsByClassName('mdc-data-table__cell'),
    );
  });
};

const renderTypography = () => {
  return renderSkeletonContent(renderStory(Basic, typographyMeta));
};

const renderContent = () => {
  return renderSkeletonContent(loremIpsumContent);
};

const renderCheckbox = ({ label = 'Bananas', indeterminate }) => {
  const container = createSkeletonContainer(
    `
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
      </cv-formfield>`,
    (checkboxContainer) => {
      applySkeletonClasses(
        checkboxContainer.getElementsByTagName('cv-formfield'),
      );
    },
  );

  return container;
};

export default {
  title: 'Components/Skeleton',
  argTypes: {
    label: { control: 'text' },
    indeterminate: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

const skeletonClsName = 'skeleton-text';
const skeletonEffect = 'skeleton-effect-fade';

export const DataTable = {
  render: renderDataTable,
};

export const Typography = {
  render: renderTypography,
};

export const Content = {
  render: renderContent,
};

export const Checkbox = {
  render: renderCheckbox,
  args: {
    label: 'Bananas',
    indeterminate: false,
  },
};
