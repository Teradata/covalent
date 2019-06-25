import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { TdFullscreenDirective } from './fullscreen.directive';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div tdFullScreen #myDirective="tdFullScreen" tdEscapeKey="Tab">
    <button id="test-btn" mat-button color="primary" (click)="myDirective.toggleFullScreen">Fullscreen</button>
  </div>`
})
class TdFullscreenTestComponent {}

describe('TdFullscreenDirective', () => {
  let fixture: ComponentFixture<TdFullscreenTestComponent>;
  let btnEl: DebugElement;
  let directiveEl: DebugElement;
  let directive: TdFullscreenDirective;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
      declarations: [
        TdFullscreenTestComponent,
        TdFullscreenDirective
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TdFullscreenTestComponent);
    btnEl = fixture.debugElement.query(By.css('button'));
    directiveEl = fixture.debugElement.query(By.directive(TdFullscreenDirective))
    directive = directiveEl.injector.get(TdFullscreenDirective);
  });

  it('Should capture fullscreenchange event and toggle fullScreenIsActive property', () => {
    fixture.detectChanges();
    expect(directive.fullScreenIsActive).toBeFalsy();
    const changeSpy = spyOn(directive, 'fsChangeHandler').and.callThrough();
    btnEl.triggerEventHandler('fullscreenchanged', directive.fsChangeHandler());
    expect(changeSpy).toBeDefined();
    expect(changeSpy).toHaveBeenCalled();
    fixture.detectChanges();
    expect(directive.fullScreenIsActive).toBeTruthy();
  });

  it('should trigger toggleFullscreen() on template', () => {
    const toggleSpy = spyOn(directive, 'toggleFullScreen').and.returnValue(true);
    btnEl.triggerEventHandler('click', null);
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

  it('Should handle keyboard input', () => {
    fixture.detectChanges();
    const keySpy = spyOn(directive, 'exitFullScreen');
    const TAB_KEY = 'Tab';
    directive.onKeydownHandler(new KeyboardEvent('keydown', {key: TAB_KEY}));
    expect(keySpy).toHaveBeenCalled();
    expect(directive.tdEscapeKey).toMatch(TAB_KEY);
  });
  
  it('should call enterFullscreen() on directive', () => {
    const enterSpy = spyOn(directive, 'enterFullScreen').and.returnValue(true);
    btnEl.triggerEventHandler('click', directive.enterFullScreen());
    fixture.detectChanges();
    expect(enterSpy).toBeDefined();
    expect(enterSpy).toHaveBeenCalled();
    expect(enterSpy).toBeTruthy();
  });

  it('should call exitFullscreen() on directive', () => {
    const exitSpy = spyOn(directive, 'exitFullScreen').and.returnValue(true);
    btnEl.triggerEventHandler('click', directive.exitFullScreen());
    fixture.detectChanges();
    expect(exitSpy).toBeDefined();
    expect(exitSpy).toHaveBeenCalled();
    expect(exitSpy).toBeTruthy();
  });
});
