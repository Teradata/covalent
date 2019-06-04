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
