export interface IHelpMenuDataItem {
  title: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IHelpMenuDataItem[];
}
