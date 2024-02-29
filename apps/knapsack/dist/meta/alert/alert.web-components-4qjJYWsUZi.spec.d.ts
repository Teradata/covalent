/**
 * patternId: "alert" templateId: "web-components-4qjJYWsUZi"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/alert/web-components-4qjJYWsUZi" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.alert.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

type AlertTitle = string;

export interface Alert {
  icon?: string;
  state?: string;
  inline?: boolean;
  titleText?: string;
  iconAriaLabel?: AlertTitle;
  descriptionText?: string;
}
