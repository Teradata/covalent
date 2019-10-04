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

  /** Whether covalent echarts should be set up. */
  echarts: boolean;

  /** Whether covalent text-editor should be set up. */
  textEditor: boolean;

  /** Whether covalent code editor should be set up. */
  codeEditor: boolean;

  /** Whether markdown navigator should be set up. */
  markdownNavigator: boolean;

  /** Whether covalent utilities stylesheet should be added. */
  styleSheetUtilities: boolean;

  /** Whether covalent flex layout stylesheet should be added. */
  styleSheetFlexLayout: boolean;

  /** Whether covalent colors stylesheet should be added. */
  styleSheetColors: boolean;
}
