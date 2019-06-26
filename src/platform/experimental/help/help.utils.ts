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

export interface IHelpWindowToolbarComponentLabels {
  help?: string;
  close?: string;
}

export interface IHelpWindowComponentLabels extends IHelpComponentLabels, IHelpWindowToolbarComponentLabels {}
