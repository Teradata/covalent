/**
 * patternId: "icon-radio" templateId: "web-components-gmBL6Mhy4"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/icon-radio/web-components-gmBL6Mhy4" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.icon-radio.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

export interface IconRadio {
  /**
   * True when the icon radio is checked
   */
  checked?: boolean;
  /**
   * Disables the icon radio and renders in muted colors.
   */
  disabled?: boolean;
  /**
   * Displays the icon without any text in the icon radio
   */
  iconOnly?: boolean;
  /**
   * Value of the input for form submission. Maps to the native value attribute.
   */
  value?: string;
  /**
   * Name of the input for form submission, and identifier for the selection group. Only one radio button can be checked for a given selection group. Maps to the native name attribute.
   */
  name?: string;
}