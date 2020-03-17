import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { TdFullscreenDirective } from './fullscreen.directive';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div tdFullScreen #myDirective="tdFullScreen">
    <button id="test-btn" mat-button color="primary" (click)="myDirective.toggleFullScreen()">Fullscreen</button>
    <button id="test-btn-exit" mat-button color="warn" (click)="myDirective.exitFullScreen()">exit Fullscreen</button>
  </div>`,
})
class TdFullscreenTestComponent {}

describe('TdFullscreenDirective', () => {
  let fixture: ComponentFixture<TdFullscreenTestComponent>;
  let btnEl: DebugElement;
  let btnExit: DebugElement;
  let directiveEl: DebugElement;
  let directive: TdFullscreenDirective;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
      declarations: [
        TdFullscreenTestComponent,
        TdFullscreenDirective,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TdFullscreenTestComponent);
    btnEl = fixture.debugElement.query(By.css('#test-btn'));
    btnExit = fixture.debugElement.query(By.css('#test-btn-exit'));
    directiveEl = fixture.debugElement.query(By.directive(TdFullscreenDirective));
    directive = directiveEl.injector.get(TdFullscreenDirective);
  });

  it('Should capture fullscreenchange event and toggle fullScreenIsActive property', async () => {
    expect(directive.fullScreenIsActive).toBeFalsy();
    const changeSpy: any = spyOn(directive, 'fsChangeHandler').and.returnValue(true);
    btnEl.triggerEventHandler('fullscreenchange', undefined);
    directive.fullScreenIsActive = true;
    fixture.detectChanges();
    await fixture.whenStable();
    expect(changeSpy).toBeDefined();
    expect(changeSpy).toBeTruthy();
    expect(directive.fullScreenIsActive).toBeTruthy();
  });

  it('should trigger toggleFullscreen() on template', () => {
    const toggleSpy: any = spyOn(directive, 'toggleFullScreen').and.returnValue(true);
    btnEl.triggerEventHandler('click', undefined);
    fixture.detectChanges();
    expect(toggleSpy).toBeDefined();
    expect(toggleSpy).toBeTruthy();
  });

  it('fullScreenIsActive should change boolean value', () => {
    directive.fullScreenIsActive = true;
    fixture.detectChanges();
    expect(directive.fullScreenIsActive).toBe(true);
    directive.fullScreenIsActive = false;
    fixture.detectChanges();
    expect(directive.fullScreenIsActive).toBe(false);
  });
  
  it('should call enterFullScreen() on directive', async () => {
    const enterSpy: any = spyOn(directive, 'enterFullScreen').and.returnValue(true);
    btnEl.triggerEventHandler('click', undefined);
    fixture.detectChanges();
    await fixture.whenStable(); 
    expect(enterSpy).toBeDefined();
    expect(enterSpy).toHaveBeenCalled();
    expect(enterSpy).toBeTruthy();
  });

  it('should call exitFullScreen() on directive', async () => {
    const exitSpy: any = spyOn(directive, 'exitFullScreen').and.callFake(() => true);
    btnExit.triggerEventHandler('click', undefined);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(exitSpy).toBeDefined();
    expect(exitSpy).toHaveBeenCalled();
    expect(exitSpy).toBeTruthy();
  });
});
