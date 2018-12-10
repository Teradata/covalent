import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { TdCodeEditorComponent } from './';

declare var electron: any;
declare const process: any;

describe('Component: App', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdCodeEditorComponent,
        TestMultipleEditorsComponent,
        TestEditorOptionsComponent,
      ],
      imports: [
      ],
    });
    TestBed.compileComponents();
  }));

  it('should set the editor value and retrieve that same value from editor', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      let component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      if (component.isElectronApp) {
        component.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      }
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.onEditorInitialized.subscribe(() => {
          component.value = 'SELECT * FROM foo;';
          component.getValue().subscribe((value: string) => {
            fixture.whenStable().then(() => {
              fixture.detectChanges();
              fixture.changeDetectorRef.detectChanges();
              expect(value).toBe('SELECT * FROM foo;');
              done();
            });
          });
        });
      });
    })();
  });

  it('should register a custom language and custom theme and set to custom language', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      let component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      if (component.isElectronApp) {
        component.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      }
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.onEditorInitialized.subscribe(() => {
          component.onEditorLanguageChanged.subscribe(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(component.theme).toBe('myCustomTheme');
              expect(component.language).toBe('mySpecialLanguage');
              done();
            });
          });
          let language: any = {
            id: 'mySpecialLanguage',
            monarchTokensProvider: [
              ['/\\[error.*/', 'custom-error'],
              ['/\\[notice.*/', 'custom-notice'],
              ['/\\[info.*/', 'custom-info'],
              ['/\\[[a-zA-Z 0-9:]+\\]/', 'custom-date'],
            ],
            customTheme: {
              id: 'myCustomTheme',
              theme: {
                base: 'vs-dark',
                inherit: true,
                rules: [
                  { token: 'custom-info', foreground: '808080' },
                  { token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold' },
                  { token: 'custom-notice', foreground: 'FFA500' },
                  { token: 'custom-date', foreground: '008800' },
                ],
              },
            },
            monarchTokensProviderCSS: `
              .monaco-editor .token.custom-info {
                color: grey;
              }
              .monaco-editor .token.custom-error {
                color: red;
                font-weight: bold;
                font-size: 1.2em;
              }
              .monaco-editor .token.custom-notice {
                color: orange;
              }

              .monaco-editor .token.custom-date {
                color: green;
              }
            `,
            completionItemProvider: [
              {
                label: 'simpleText',
                kind: 'monaco.languages.CompletionItemKind.Text',
              }, {
                label: 'testing',
                kind: 'monaco.languages.CompletionItemKind.Keyword',
                insertText: 'testing({{condition}})',
              },
              {
                label: 'ifelse',
                kind: 'monaco.languages.CompletionItemKind.Snippet',
                insertText: [
                  'if ({{condition}}) {',
                  '\t{{}}',
                  '} else {',
                  '\t',
                  '}',
                ].join('\n'),
                documentation: 'If-Else Statement',
              },
            ],
          };
          component.registerLanguage(language);
          component.theme = 'myCustomTheme';
          component.language = 'mySpecialLanguage';
        });
      });
    })();
  });

  it('should set the editor style', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      let component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      if (component.isElectronApp) {
        component.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      }
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.onEditorInitialized.subscribe(() => {
          component.editorStyle = 'width:100%;height:500px;border:10px solid green;';
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            fixture.changeDetectorRef.detectChanges();
            if (component.isElectronApp) {
              expect(component.editorStyle).toBe('width:100%;height:500px;border:10px solid green;');
            } else {
              let containerDiv: HTMLDivElement = component._editorContainer.nativeElement;
              expect(containerDiv.getAttribute('style')).toBe('width:100%;height:500px;border:10px solid green;');
            }
            done();
          });
        });
      });
    })();
  });

  it('should set the editor options and retrieve them', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TestEditorOptionsComponent);
      let component: TestEditorOptionsComponent = fixture.debugElement.componentInstance;
      if (component.editor1.isElectronApp) {
        component.editor1.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      }
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editor1.onEditorInitialized.subscribe(() => {
          expect(component.editor1.editorOptions.readOnly).toBe(true);
          done();
        });
      });
    })();
  });

  it('should show multiple editors and set the editors values and retrieve that same values from editors', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TestMultipleEditorsComponent);
      let component: TestMultipleEditorsComponent = fixture.debugElement.componentInstance;
      if (component.editor1.isElectronApp) {
        component.editor1.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
        component.editor2.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
        component.editor3.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      }
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editor1.onEditorInitialized.subscribe(() => {
          component.editor1.value = 'SELECT * FROM foo;';
          component.editor1.getValue().subscribe((value: string) => {
            fixture.whenStable().then(() => {
              fixture.detectChanges();
              fixture.changeDetectorRef.detectChanges();
              expect(value).toBe('SELECT * FROM foo;');

              component.editor2.value = 'SELECT * FROM foo2;';
              component.editor2.getValue().subscribe((value2: string) => {
                fixture.whenStable().then(() => {
                  fixture.detectChanges();
                  fixture.changeDetectorRef.detectChanges();
                  expect(value2).toBe('SELECT * FROM foo2;');

                  component.editor3.value = 'SELECT * FROM foo3;';
                  component.editor3.getValue().subscribe((value3: string) => {
                    fixture.whenStable().then(() => {
                      fixture.detectChanges();
                      fixture.changeDetectorRef.detectChanges();
                      expect(value3).toBe('SELECT * FROM foo3;');
                      done();
                    });
                  });
                });
              });
            });
          });
        });
      });
    })();
  });

  it('should add fullscreen command in context menu', () => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      let component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      if (component.isElectronApp) {
        component.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      }
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.onEditorInitialized.subscribe(() => {
          spyOn(component.getEditor(), 'addAction');

          component.addFullScreenModeCommand();

          expect(component.getEditor().addAction).toHaveBeenCalled();
        });
      });
    })();
  });

  it('should exit fullscreen mode', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      let component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      if (component.isElectronApp) {
        component.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      }
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.onEditorInitialized.subscribe(() => {
          component.editorStyle = 'width:100%;height:500px;border:10px solid green;';

          component.value = 'SELECT * FROM foo;';

          component.exitFullScreenEditor();

          expect(document.webkitExitFullscreen).toBeDefined();
          done();
        });
      });
    })();
  });

  it('should show editor in fullscreen mode', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      let component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      if (component.isElectronApp) {
        component.setEditorNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      }
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.onEditorInitialized.subscribe(() => {
          component.editorStyle = 'width:100%;height:500px;border:10px solid green;';
          component.value = 'SELECT * FROM foo;';
          let containerDiv: HTMLDivElement = component._editorContainer.nativeElement;
          spyOn(containerDiv, 'webkitRequestFullscreen');

          component.showFullScreenEditor();

          expect(containerDiv.webkitRequestFullscreen).toHaveBeenCalled();
          done();
        });
      });
    })();
  });

});

@Component({
  template: `
    <div>
      <td-code-editor #editor1 automaticLayout style="height: 200px" theme="vs" flex language="javascript"></td-code-editor>
    </div>
    <div>
      <td-code-editor #editor2 automaticLayout style="height: 200px" theme="vs" flex language="HTML"></td-code-editor>
    </div>
    <div>
      <td-code-editor #editor3 automaticLayout style="height: 200px" theme="vs" flex language="css"></td-code-editor>
    </div>`,
})
class TestMultipleEditorsComponent {
  @ViewChild('editor1') editor1: TdCodeEditorComponent;
  @ViewChild('editor2') editor2: TdCodeEditorComponent;
  @ViewChild('editor3') editor3: TdCodeEditorComponent;
}

@Component({
  template: `
    <div>
      <td-code-editor #editor1 [editorOptions]="{readOnly:true}" style="height: 200px" theme="vs" flex language="javascript"></td-code-editor>
    </div>
`,
})
class TestEditorOptionsComponent {
  @ViewChild('editor1') editor1: TdCodeEditorComponent;
}
