/**
 * patternId: "list" templateId: "web-components-fObxCsu2i8"
 * This file was automatically generated by Knapsack.
 * DO NOT MODIFY IT BY HAND.
 * Instead, adjust it's spec, by either:
 * 1) go to "/patterns/list/web-components-fObxCsu2i8" and use the UI to edit the spec
 * 2) OR edit the "knapsack.pattern.list.json" file's "spec.props".
 * Run Knapsack again to regenerate this file.
 */

export interface List {
  /**
   * Sets activated attribute on selected items which provides a focus-persistent highlight.
   */
  activatible?: boolean;
  /**
   * When true, sets tabindex="0" on the internal list. Otherwise sets tabindex="-1".
   */
  rootTabbable?: boolean;
  /**
   * When true, enables selection of multiple items. This will result in index being of type Set<number> and selected returning ListItemBase[].
   */
  multi?: boolean;
  /**
   * When true, pressing up on the keyboard when focused on the first item will focus the last item and down when focused on the last item will focus the first item.
   */
  wrapFocus?: boolean;
  /**
   * When true, disables focus and pointer events (thus ripples) on the list. Used for display-only lists.
   */
  noninteractive?: boolean;
  /**
   * Determines what role attribute to set on all list items.
   */
  itemRoles?: string;
  /**
   * aria-label of the internal <ul> element.
   */
  innerAriaLabel?: string;
  /**
   * Role of the internal <ul> element.
   */
  innerRole?: string;
}
