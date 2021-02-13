import { TestBed, inject, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { TdTextEditorComponent } from './';
import { By } from '@angular/platform-browser';

describe('Component: TextEditor', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          TdTextEditorComponent,
          TestTextEditorComponent,
          TestTextEditorResetComponent,
          TestTextEditorOptionsComponent,
        ],
        imports: [],
      });
      TestBed.compileComponents();
    }),
  );

  it('should initialize the markdown editor and set value and test ngModel', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestTextEditorComponent);
      const component: TestTextEditorComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.editor1.value = '# Test this';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.editor1.value).toBe('# Test this');
          done();
        });
      });
    })();
  });

  it('should initialize the markdown editor with no toolbar options', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestTextEditorOptionsComponent);
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

  it('should test isPreviewActive', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestTextEditorOptionsComponent);
      const component: TestTextEditorOptionsComponent = fixture.debugElement.componentInstance;
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

  it('should test isSideBySideActive', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestTextEditorOptionsComponent);
      const component: TestTextEditorOptionsComponent = fixture.debugElement.componentInstance;
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

  it('should test isFullscreenActive', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TestTextEditorOptionsComponent);
      const component: TestTextEditorOptionsComponent = fixture.debugElement.componentInstance;
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
})
class TestTextEditorComponent {
  @ViewChild('editor1', { static: true }) editor1: TdTextEditorComponent;
}

@Component({
  template: `
    <div>
      <td-text-editor #editor1 [value]="Something"></td-text-editor>
    </div>
  `,
})
class TestTextEditorResetComponent {
  @ViewChild('editor1', { static: true }) editor1: TdTextEditorComponent;
}

@Component({
  template: `
    <div>
      <td-text-editor #editor1 [options]="opts"></td-text-editor>
    </div>
  `,
})
class TestTextEditorOptionsComponent {
  opts: any = {
    toolbar: false,
  };
  @ViewChild('editor1', { static: true }) editor1: TdTextEditorComponent;
}
