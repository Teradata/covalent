export interface IHelpMenuDataItem {
  title?: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IHelpMenuDataItem[];
}

export enum MaximizedOrMinimized {
  Maximized = 'Maximized',
  Minimized = 'Minimized',
}

export interface IHelpComponentLabels {
  goHome?: string;
  goBack?: string;
  emptyState?: string;
}

export interface IHelpWindowToolbarComponentLabels {
  help?: string;
  minimize?: string;
  maximize?: string;
  close?: string;
}

export interface IHelpWindowComponentLabels extends IHelpComponentLabels, IHelpWindowToolbarComponentLabels {}
