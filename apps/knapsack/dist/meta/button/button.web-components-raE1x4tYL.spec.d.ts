/**
 * patternId: "button" templateId: "web-components-raE1x4tYL"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/button/web-components-raE1x4tYL" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.button.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

export interface Button {
  /**
   * Label to display for the button, and aria-label
   */
  label?: string;
  /**
   * Icon to display, and aria-label value when label is not defined
   */
  icon?: string;
  /**
   * Applies the button color
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'emphasis'
    | 'neutral'
    | 'caution'
    | 'negative'
    | 'positive';
  /**
   * Creates a contained button that is elevated above the surface
   */
  raised?: boolean;
  /**
   * Creates a contained button that is flush with the surface
   */
  unelevated?: boolean;
  /**
   * Creates an outlined button that is flush with the surface
   */
  outlined?: boolean;
  /**
   * Makes the button text and container slightly smaller
   */
  dense?: boolean;
  /**
   * Disabled buttons cannot be interacted with and have no visual interaction effect
   */
  disabled?: boolean;
  /**
   * When true, the space after the label and before any trailing icon, where default slotted content is rendered, is expanded to fit the available space inside the button
   */
  expandContent?: boolean;
  /**
   * When true, the button is expanded to fit the entire available space.
   */
  fullwidth?: boolean;
  /**
   * When true, icon will be displayed after label
   */
  trailingIcon?: boolean;
}