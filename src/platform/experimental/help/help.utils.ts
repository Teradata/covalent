export interface IHelpMenuDataItem {
  title?: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IHelpMenuDataItem[];
}

export interface IHelpComponentLabels {
  goHome?: string;
  goBack?: string;
  emptyState?: string;
}

export interface IHelpWindowComponentLabels extends IHelpComponentLabels {
  help?: string;
  close?: string;
}

export const DEFAULT_HELP_COMP_LABELS: IHelpComponentLabels = {
  goHome: 'Go home',
  goBack: 'Go back',
  emptyState: 'No item(s) to display',
};

export const DEFAULT_HELP_WINDOW_COMP_LABELS: IHelpWindowComponentLabels = {
  help: 'Help',
  close: 'Close',
};
