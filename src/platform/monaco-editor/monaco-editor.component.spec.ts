import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CovalentCoreModule } from '../core';
import { TdMonacoEditorComponent } from './';
import { By } from '@angular/platform-browser';

declare var electron: any;

describe('Component: App', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdMonacoEditorComponent,
      ],
      imports: [
        CovalentCoreModule.forRoot(),
      ],
    });
    TestBed.compileComponents();
  }));

  it('should set the editor value and retrieve that same value from editor', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdMonacoEditorComponent);
      let component: TdMonacoEditorComponent = fixture.debugElement.componentInstance;
      component.setMonacoNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
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
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdMonacoEditorComponent);
      let component: TdMonacoEditorComponent = fixture.debugElement.componentInstance;
      component.setMonacoNodeModuleDirOverride(electron.remote.process.env.NODE_MODULE_DIR);
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.onEditorInitialized.subscribe(() => {
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
          component.onEditorLanguageChanged.subscribe(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(component.theme).toBe('myCustomTheme');
              expect(component.language).toBe('mySpecialLanguage');
              done();
            });
          });
        });
      });
    })();
  });

});
