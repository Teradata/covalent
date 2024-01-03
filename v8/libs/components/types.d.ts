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
declare module '*?inline' {
  const contents:{default: string}
  export = contents
}