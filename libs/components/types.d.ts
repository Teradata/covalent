declare module '*.scss' {
  import { CSSResult } from 'lit';
  const css: CSSResult;
  export default css;
}

declare module '*.css' {
  import { CSSResult } from 'lit';
  const css: CSSResult;
  export default css;
}

declare module '*.scss?inline' {
  const content: string;
  export default content;
}

declare module '*.css?inline' {
  const content: string;
  export default content;
}
