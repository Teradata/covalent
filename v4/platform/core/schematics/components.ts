import { ISchema } from './ng-add/schema';

export interface IComponent {
  enabled(options: ISchema): boolean;
  dependency(): string;
}

export class DynamicForms implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.dynamicForms;
  }

  public dependency(): string {
    return '@covalent/dynamic-forms';
  }
}

export class Highlight implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.highlight;
  }

  public dependency(): string {
    return '@covalent/highlight';
  }
}

export class Markdown implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.markdown;
  }

  public dependency(): string {
    return '@covalent/markdown';
  }
}

export class FlavoredMarkdown implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.flavoredMarkdown;
  }

  public dependency(): string {
    return '@covalent/flavored-markdown';
  }
}

export class Echarts implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.echarts;
  }

  public dependency(): string {
    return '@covalent/echarts';
  }
}

export class TextEditor implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.textEditor;
  }

  public dependency(): string {
    return '@covalent/text-editor';
  }
}

export class CodeEditor implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.codeEditor;
  }

  public dependency(): string {
    return '@covalent/code-editor';
  }
}

export class MarkdownNavigator implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.markdownNavigator;
  }

  public dependency(): string {
    return '@covalent/markdown-navigator';
  }
}

export const components: IComponent[] = [
  new DynamicForms(),
  new Highlight(),
  new Markdown(),
  new FlavoredMarkdown(),
  new Echarts(),
  new TextEditor(),
  new CodeEditor(),
  new MarkdownNavigator(),
];

export const covalentPackages: string[] = components.map((c: IComponent) => c.dependency());
