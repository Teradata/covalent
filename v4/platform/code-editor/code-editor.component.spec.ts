import { TestBed, inject, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { TdCodeEditorComponent } from './';
import { FormsModule } from '@angular/forms';

// to be able to test fullscreen when running headless in travis
interface IFsDocument extends HTMLDocument {
  webkitExitFullscreen?: () => void;
}
interface IFsDocumentElement extends HTMLDivElement {
  webkitRequestFullscreen?: () => void;
}

const monarchTokensProviderCSS: string = `
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
`;
const language: any = {
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
      // tslint:disable:no-hardcoded-credentials
      rules: [
        { token: 'custom-info', foreground: '808080' },
        { token: 'custom-error', foreground: 'ff0000', fontStyle: 'bold' },
        { token: 'custom-notice', foreground: 'FFA500' },
        { token: 'custom-date', foreground: '008800' },
      ],
      // tslint:enable:no-hardcoded-credentials
    },
  },
  monarchTokensProviderCSS,
  completionItemProvider: [
    {
      label: 'simpleText',
      kind: 'monaco.languages.CompletionItemKind.Text',
    },
    {
      label: 'testing',
      kind: 'monaco.languages.CompletionItemKind.Keyword',
      insertText: 'testing({{condition}})',
    },
    {
      label: 'ifelse',
      kind: 'monaco.languages.CompletionItemKind.Snippet',
      insertText: ['if ({{condition}}) {', '\t{{}}', '} else {', '\t', '}'].join('\n'),
      documentation: 'If-Else Statement',
    },
  ],
};

describe('Component: App', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          TdCodeEditorComponent,
          TestMultipleEditorsComponent,
          TestEditorOptionsComponent,
          TestTwoWayBindingWithValueComponent,
          TestTwoWayBindingWithNgModelComponent,
        ],
        imports: [FormsModule],
      });
      TestBed.compileComponents();
    }),
  );

  it('should set the editor value and retrieve that same value from editor', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      const component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editorInitialized.subscribe(() => {
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
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      const component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editorInitialized.subscribe(() => {
          component.editorLanguageChanged.subscribe(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(component.theme).toBe('myCustomTheme');
              expect(component.language).toBe('mySpecialLanguage');
              done();
            });
          });
          component.registerLanguage(language);
          component.theme = 'myCustomTheme';
          component.language = 'mySpecialLanguage';
        });
      });
    })();
  });

  it('should remove style tags on destroy', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);

      const component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editorInitialized.subscribe(() => {
          component.editorLanguageChanged.subscribe(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(document.body.textContent).toContain(monarchTokensProviderCSS);
              fixture.destroy();
              expect(document.body.textContent).not.toContain(monarchTokensProviderCSS);
              done();
            });
          });
          component.registerLanguage(language);
          component.language = 'mySpecialLanguage';
        });
      });
    })();
  });

  it('should set the editor style', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      const component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editorInitialized.subscribe(() => {
          component.editorStyle = 'width:100%;height:500px;border:10px solid green;';
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            fixture.changeDetectorRef.detectChanges();
            const containerDiv: HTMLDivElement = component._editorContainer.nativeElement;
            expect(containerDiv.getAttribute('style')).toBe('width:100%;height:500px;border:10px solid green;');
            done();
          });
        });
      });
    })();
  });

  it('should set the editor options and retrieve them', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestEditorOptionsComponent);
      const component: TestEditorOptionsComponent = fixture.debugElement.componentInstance;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editor1.editorInitialized.subscribe(() => {
          expect(component.editor1.editorOptions.readOnly).toBe(true);
          done();
        });
      });
    })();
  });

  it('should show multiple editors and set the editors values and retrieve that same values from editors', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestMultipleEditorsComponent);
      const component: TestMultipleEditorsComponent = fixture.debugElement.componentInstance;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editor1.editorInitialized.subscribe(() => {
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

  it('should show editor in fullscreen mode and then unset fullscreen mode', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      const component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editorInitialized.subscribe(() => {
          component.editorStyle = 'width:100%;height:500px;border:10px solid green;';
          component.value = 'SELECT * FROM foo;';
          const containerDiv: IFsDocumentElement = <IFsDocumentElement>component._editorContainer.nativeElement;
          spyOn(containerDiv, 'webkitRequestFullscreen');
          component.showFullScreenEditor();
          expect(containerDiv.webkitRequestFullscreen).toHaveBeenCalled();
          component.exitFullScreenEditor();
          const fsDoc: IFsDocument = <IFsDocument>document;
          expect(fsDoc).toBeDefined();

          done();
        });
      });
    })();
  });

  it('should expose editor instance on editorInitialized event', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdCodeEditorComponent);
      const component: TdCodeEditorComponent = fixture.debugElement.componentInstance;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editorInitialized.subscribe(async (editorInstance: any) => {
          expect(editorInstance).toBeDefined();
          const line: any = await editorInstance.getPosition();

          expect(line.column).toBe(1);
          expect(line.lineNumber).toBe(1);
          done();
        });
      });
    })();
  });

  it('should work with 2 way binding via value', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestTwoWayBindingWithValueComponent);
      const component: TestTwoWayBindingWithValueComponent = fixture.debugElement.componentInstance;
      const newSampleCode: string = 'const val = 2;';
      component.sampleCode = newSampleCode;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editor.editorInitialized.subscribe(() => {
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            setTimeout(() => {
              component.editor.getValue().subscribe((value: string) => {
                expect(component.sampleCode).toBe(newSampleCode);
                expect(value).toBe(newSampleCode);
                done();
              });
            }, 1000); // wait for timeouts
          });
        });
      });
    })();
  });

  it('should work with 2 way binding via ngModel', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestTwoWayBindingWithNgModelComponent);
      const component: TestTwoWayBindingWithNgModelComponent = fixture.debugElement.componentInstance;
      const newSampleCode: string = 'const val = 2;';
      component.sampleCode = newSampleCode;
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editor.editorInitialized.subscribe(() => {
          fixture.changeDetectorRef.detectChanges();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            setTimeout(() => {
              component.editor.getValue().subscribe((value: string) => {
                expect(component.sampleCode).toBe(newSampleCode);
                expect(value).toBe(newSampleCode);
                done();
              });
            }, 1000); // wait for timeouts
          });
        });
      });
    })();
  });
});

@Component({
  template: `
    <div>
      <td-code-editor #editor1 style="height: 200px" theme="vs" flex language="javascript"></td-code-editor>
    </div>
    <div>
      <td-code-editor #editor2 style="height: 200px" theme="vs" flex language="HTML"></td-code-editor>
    </div>
    <div>
      <td-code-editor #editor3 style="height: 200px" theme="vs" flex language="css"></td-code-editor>
    </div>
  `,
})
class TestMultipleEditorsComponent {
  @ViewChild('editor1', { static: true }) editor1: TdCodeEditorComponent;
  @ViewChild('editor2', { static: true }) editor2: TdCodeEditorComponent;
  @ViewChild('editor3', { static: true }) editor3: TdCodeEditorComponent;
}

@Component({
  template: `
    <div>
      <td-code-editor
        #editor1
        [editorOptions]="{ readOnly: true }"
        style="height: 200px"
        theme="vs"
        flex
        language="javascript"
      ></td-code-editor>
    </div>
  `,
})
class TestEditorOptionsComponent {
  @ViewChild('editor1', { static: true }) editor1: TdCodeEditorComponent;
}

@Component({
  template: `
    <div>
      <td-code-editor #editor style="height: 200px" language="javascript" [(value)]="sampleCode"></td-code-editor>
    </div>
  `,
})
class TestTwoWayBindingWithValueComponent {
  @ViewChild('editor', { static: true }) editor: TdCodeEditorComponent;
  sampleCode: string = `const val = 1;`;
}

@Component({
  template: `
    <div>
      <td-code-editor #editor style="height: 200px" language="javascript" [(ngModel)]="sampleCode"></td-code-editor>
    </div>
  `,
})
class TestTwoWayBindingWithNgModelComponent {
  @ViewChild('editor', { static: true }) editor: TdCodeEditorComponent;
  sampleCode: string = `const val = 1;`;
}
