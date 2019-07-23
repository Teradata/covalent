## Electron

<img alt="Covalent" src="https://cdn.rawgit.com/Teradata/covalent-electron/develop/src/app/assets/icons/covalent-and-electron.svg" width="150">

*  Covalent-Code-Editor can run in Electron as well as Web Browsers.  When running in Electron the component automatically runs itself inside a "webview" to sandbox away the AMDRequires used in Monaco Editor so it doesn't cause issues with the Requires in Electron.
   * See:
     * <a href="https://github.com/Microsoft/monaco-editor/issues/90">https://github.com/Microsoft/monaco-editor/issues/90</a>
     * <a href="https://electron.atom.io/docs/api/webview-tag/">https://electron.atom.io/docs/api/webview-tag/</a>
