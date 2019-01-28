import { ISchema } from './schema';

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

export class Http implements IComponent {
  public enabled(options: ISchema): boolean {
    return options.http;
  }

  public dependency(): string {
    return '@covalent/http';
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
