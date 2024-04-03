/**
 * patternId: "toolbar" templateId: "web-components-A6-16QhSaM"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/toolbar/web-components-A6-16QhSaM" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.toolbar.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

export interface Toolbar {
  /**
   * Makes the bar a little smaller for higher density applications.
   */
  dense?: boolean;
  /**
   * Centers the title horizontally. Only meant to be used with 0 or 1 actionItems.
   */
  centerTitle?: boolean;
  /**
   * Makes the bar much taller, can be combined with dense.
   */
  prominent?: string;
  /**
   * Element used to listen for scroll events. (Type: HTMLElement | Window)
   */
  scrollTarget?: string;
  /**
   * Position is sticky when scrolled.
   */
  sticky?: boolean;
}
