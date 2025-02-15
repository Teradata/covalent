import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { TdTextEditorComponent } from './text-editor.component';

describe('Component: TextEditor', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TestTextEditorComponent,
        TestTextEditorResetComponent,
        TestTextEditorOptionsComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should initialize the markdown editor and set value and test ngModel', (done) => {
    inject([], () => {
      const fixture = TestBed.createComponent(TestTextEditorComponent);
      const component: TestTextEditorComponent =
        fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        done();

        component.editor1.value = '# Test this';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.editor1.value).toBe('# Test this');
          done();
        });
      });
    })();
  });

  it('should initialize the markdown editor with no toolbar options', (done) => {
    inject([], () => {
      const fixture = TestBed.createComponent(TestTextEditorOptionsComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const element: HTMLElement = fixture.nativeElement;
          expect(element.querySelectorAll('.editor-toolbar')).toBeTruthy();
          done();
        });
      });
    })();
  });

  it('should test isPreviewActive', (done) => {
    inject([], () => {
      const fixture = TestBed.createComponent(TestTextEditorOptionsComponent);
      const component: TestTextEditorOptionsComponent =
        fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.editor1.isFullscreenActive()).toBe(false);
          done();
        });
      });
    })();
  });

  it('should test isSideBySideActive', (done) => {
    inject([], () => {
      const fixture = TestBed.createComponent(TestTextEditorOptionsComponent);
      const component: TestTextEditorOptionsComponent =
        fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.editor1.isSideBySideActive()).toBe(false);
          done();
        });
      });
    })();
  });

  it('should test isFullscreenActive', (done) => {
    inject([], () => {
      const fixture = TestBed.createComponent(TestTextEditorOptionsComponent);
      const component: TestTextEditorOptionsComponent =
        fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.editor1.isFullscreenActive()).toBe(false);
          done();
        });
      });
    })();
  });
});

@Component({
  template: `
    <div>
      <td-text-editor #editor1></td-text-editor>
    </div>
  `,
  imports: [TdTextEditorComponent],
})
class TestTextEditorComponent {
  @ViewChild('editor1', { static: true }) editor1!: TdTextEditorComponent;
}

@Component({
  template: `
    <div>
      <td-text-editor #editor1 [value]="Something"></td-text-editor>
    </div>
  `,
  imports: [TdTextEditorComponent],
})
class TestTextEditorResetComponent {
  @ViewChild('editor1', { static: true }) editor1!: TdTextEditorComponent;
}

@Component({
  template: `
    <div>
      <td-text-editor #editor1 [options]="opts"></td-text-editor>
    </div>
  `,
  imports: [TdTextEditorComponent],
})
class TestTextEditorOptionsComponent {
  opts: { toolbar: boolean } = {
    toolbar: false,
  };
  @ViewChild('editor1', { static: true }) editor1!: TdTextEditorComponent;
}
