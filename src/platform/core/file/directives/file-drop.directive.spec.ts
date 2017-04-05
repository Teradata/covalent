import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CovalentFileModule, TdFileDropDirective } from '../file.module';
import { By } from '@angular/platform-browser';

describe('Directive: FileDrop', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdFileDropBasicTestComponent,
      ],
      imports: [
        CovalentFileModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should add/remove class on dragenter and dragleave',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        directive.triggerEventHandler('dragenter', new Event('dragenter'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(directive.classes['drop-zone']).toBeTruthy();
          directive.triggerEventHandler('dragleave', new Event('dragleave'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(directive.classes['drop-zone']).toBeFalsy();
          });
        });
      });
  })));

  it('should disable element and not add class on dragenter',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.disabled = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        directive.triggerEventHandler('dragenter', new Event('dragenter'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(directive.classes['drop-zone']).toBeFalsy();
        });
      });
  })));

  it('should throw dragover event and add copy dropEffect for a single file',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        let event: any = <DragEvent>new Event('dragover');
        event.dataTransfer = {
          dropEffect: 'none',
          types: ['Files'],
          items: ['file-name.txt'],
        };
        directive.triggerEventHandler('dragover', event);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(event.dataTransfer.dropEffect).toBe('copy');
        });
      });
  })));

  it('should throw dragover event and not add copy dropEffect for a multiple file',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        let event: any = <DragEvent>new Event('dragover');
        event.dataTransfer = {
          dropEffect: 'none',
          types: ['Files'],
          items: ['file-name.txt', 'file-name1.txt'],
        };
        directive.triggerEventHandler('dragover', event);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(event.dataTransfer.dropEffect).toBe('none');
        });
      });
  })));

  it('should throw dragover event and add copy dropEffect for a multiple file',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        let event: any = <DragEvent>new Event('dragover');
        event.dataTransfer = {
          dropEffect: 'none',
          types: ['Files'],
          items: ['file-name.txt', 'file-name1.txt'],
        };
        directive.triggerEventHandler('dragover', event);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(event.dataTransfer.dropEffect).toBe('copy');
        });
      });
  })));

  it('should throw dragover event and not add copy dropEffect on disabled state',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      component.disabled = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        let event: any = <DragEvent>new Event('dragover');
        event.dataTransfer = {
          dropEffect: 'none',
          types: ['Files'],
          items: ['file-name.txt'],
        };
        directive.triggerEventHandler('dragover', event);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(event.dataTransfer.dropEffect).toBe('none');
        });
      });
  })));

  it('should throw ondrop event for a single file',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = false;
      expect(component.files).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        let event: any = <DragEvent>new Event('drop');
        event.dataTransfer = {
          files: [{}],
        };
        directive.triggerEventHandler('drop', event);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.files).toBeTruthy();
        });
      });
  })));

  it('should throw ondrop event for a multiple files',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.multiple = true;
      expect(component.files).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        let event: any = <DragEvent>new Event('drop');
        event.dataTransfer = {
          files: [{}, {}],
        };
        directive.triggerEventHandler('drop', event);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<FileList>component.files).length).toBe(2);
        });
      });
  })));

  it('should not throw ondrop event for disabled state',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdFileDropBasicTestComponent);
      let component: TdFileDropBasicTestComponent = fixture.debugElement.componentInstance;
      component.disabled = true;
      expect(component.files).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let directive: DebugElement = fixture.debugElement.query(By.directive(TdFileDropDirective));
        let event: any = <DragEvent>new Event('drop');
        event.dataTransfer = {
          files: [{}],
        };
        directive.triggerEventHandler('drop', event);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.files).toBeFalsy();
        });
      });
  })));

});

@Component({
  selector: 'td-file-drop-basic-test',
  template: `
  <div tdFileDrop
       [multiple]="multiple" 
       [disabled]="disabled"
       (fileDrop)="files = $event">
  
  </div>
  `,
})
class TdFileDropBasicTestComponent {
  multiple: boolean;
  disabled: boolean;
  files: FileList | File;
}
