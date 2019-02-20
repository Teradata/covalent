export interface ISchema {

  /** Whether covalent dynamic-forms should be set up. */
  dynamicForms: boolean;

  /** Whether covalent highlight should be set up. */
  highlight: boolean;

  /** Whether covalent http should be set up. */
  http: boolean;

  /** Whether covalent markdown should be set up. */
  markdown: boolean;

  /** Whether covalent flavored markdown should be set up. */
  flavoredMarkdown: boolean;

  /** Whether covalent utilities stylesheet should be added. */
  styleSheetUtilities: boolean;

  /** Whether covalent flex layout stylesheet should be added. */
  styleSheetFlexLayout: boolean;

  /** Whether covalent colors stylesheet should be added. */
  styleSheetColors: boolean;
}
