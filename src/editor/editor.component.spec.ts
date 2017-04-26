import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { TdEditorComponent } from './';
import { By } from '@angular/platform-browser';

declare var electron: any;

describe('Component: App', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdEditorComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('pass this test', (done: DoneFn) => {
    inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdEditorComponent);
      let component: TdEditorComponent = fixture.debugElement.componentInstance;
      
      fixture.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(true).toBe(true);
        done();
      });
    })();
  });

});
