import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { TdTextEditorComponent } from './';
import { By } from '@angular/platform-browser';

describe('Component: TextEditor', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdTextEditorComponent,
        TestTextEditorComponent,
      ],
      imports: [
      ],
    });
    TestBed.compileComponents();
  }));

  it('should initialize the markdown editor and set value and test ngModel', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TestTextEditorComponent);
      let component: TestTextEditorComponent = fixture.debugElement.componentInstance;
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

});

@Component({
  template: `
    <div>
      <td-text-editor #editor1></td-text-editor>  
    </div>`,
})
class TestTextEditorComponent {
  @ViewChild('editor1') editor1: TdTextEditorComponent;
}
