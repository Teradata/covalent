import '../list/list';
import '../list/list-item';
import '../card/card';
import '../typography/typography';

export default {
  title: 'Theme/Scrollbar',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

const Template = () => `
  <style>
    .scrollbar-demo-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .demo-card {
      background: var(--cv-theme-surface);
      border: 1px solid var(--cv-theme-outline-variant);
      border-radius: 8px;
      padding: 16px;
    }
    .scrollable-content {
      height: 300px;
      overflow-y: auto;
      padding: 16px;
      background: var(--cv-theme-surface-container);
      border-radius: 4px;
      margin-top: 8px;
    }
    .scrollable-content-horizontal {
      height: 200px;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 16px;
      background: var(--cv-theme-surface-container);
      border-radius: 4px;
      margin-top: 8px;
    }
    .wide-content {
      width: 1200px;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .content-block {
      min-width: 200px;
      height: 160px;
      background: var(--cv-theme-primary-container);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--cv-theme-on-primary-container);
    }
    .demo-info {
      margin-bottom: 16px;
      padding: 12px;
      background: var(--cv-theme-surface-container-low);
      border-radius: 4px;
      color: var(--cv-theme-on-surface-variant);
    }
  </style>

  <div class="scrollbar-demo-container">
    <!-- Vertical Scrollbar Demo -->
    <div class="demo-card">
      <cv-typography type="headline5" style="margin-bottom: 8px;">
        Vertical Scrollbar
      </cv-typography>
      <div class="demo-info">
        <cv-typography type="body2">
          Scroll vertically to see the custom scrollbar styling. 
          Track: <code>--cv-theme-surface-container</code><br>
          Thumb: <code>--cv-theme-outline</code><br>
          Hover: <code>--cv-theme-on-surface-variant</code>
        </cv-typography>
      </div>
      <div class="scrollable-content">
        <cv-list>
          <cv-list-item>List Item 1 - Scroll to see more</cv-list-item>
          <cv-list-item>List Item 2</cv-list-item>
          <cv-list-item>List Item 3</cv-list-item>
          <cv-list-item>List Item 4</cv-list-item>
          <cv-list-item>List Item 5</cv-list-item>
          <cv-list-item>List Item 6</cv-list-item>
          <cv-list-item>List Item 7</cv-list-item>
          <cv-list-item>List Item 8</cv-list-item>
          <cv-list-item>List Item 9</cv-list-item>
          <cv-list-item>List Item 10</cv-list-item>
          <cv-list-item>List Item 11</cv-list-item>
          <cv-list-item>List Item 12</cv-list-item>
          <cv-list-item>List Item 13</cv-list-item>
          <cv-list-item>List Item 14</cv-list-item>
          <cv-list-item>List Item 15</cv-list-item>
        </cv-list>
      </div>
    </div>

    <!-- Horizontal Scrollbar Demo -->
    <div class="demo-card">
      <cv-typography type="headline5" style="margin-bottom: 8px;">
        Horizontal Scrollbar
      </cv-typography>
      <div class="demo-info">
        <cv-typography type="body2">
          Scroll horizontally to see the custom scrollbar styling.
          Same tokens apply to both vertical and horizontal scrollbars.
        </cv-typography>
      </div>
      <div class="scrollable-content-horizontal">
        <div class="wide-content">
          <div class="content-block">Block 1</div>
          <div class="content-block">Block 2</div>
          <div class="content-block">Block 3</div>
          <div class="content-block">Block 4</div>
          <div class="content-block">Block 5</div>
          <div class="content-block">Block 6</div>
        </div>
      </div>
    </div>
  </div>

  <div style="margin-top: 32px; padding: 16px; background: var(--cv-theme-surface-container-lowest); border-radius: 8px;">
    <cv-typography type="headline6" style="margin-bottom: 8px;">
      Testing Instructions
    </cv-typography>
    <cv-typography type="body2" style="color: var(--cv-theme-on-surface-variant);">
      1. <strong>Test both themes:</strong> Toggle between light and dark themes using the toolbar<br>
      2. <strong>Hover effect:</strong> Hover over the scrollbar thumb to see the hover state<br>
      3. <strong>Browser support:</strong> Test in Chrome, Firefox, Safari, and Edge<br>
      4. <strong>OS integration:</strong> The scrollbar should feel native while maintaining brand colors
    </cv-typography>
  </div>
`;

export const ScrollbarDemo = Template.bind({});
ScrollbarDemo.storyName = 'Custom Scrollbars';
