/**
 * patternId: "badge" templateId: "web-components-40aOlYC6I9"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/badge/web-components-40aOlYC6I9" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.badge.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

export interface Badge {
  /**
   * The content to be displayed in the badge
   */
  content?: string;
  /**
   * Caps the value of badge content
   */
  max?: number;
  /**
   * Sets the size of the badge with the values:
   * small | large
   */
  size?: string;
  /**
   * Controls the visibility of the badge
   */
  hideBadge?: boolean;
  /**
   * Aligns the badge vertically in the wrapped element with values: top | bottom
   */
  verticalAlignment?: string;
  /**
   * Aligns the badge horizontally in the wrapped element with values: left | right
   */
  horizontalAlignment?: string;
  /**
   * Shows the badge when content is zero
   */
  showZero?: boolean;
}
