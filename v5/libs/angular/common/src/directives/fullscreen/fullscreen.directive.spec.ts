import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { TdFullscreenDirective } from './fullscreen.directive';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div tdFullScreen #myDirective="tdFullScreen">
      <button
        id="test-btn"
        mat-button
        color="primary"
        (click)="myDirective.toggleFullScreen()"
      >
        Fullscreen
      </button>
      <button
        id="test-btn-exit"
        mat-button
        color="warn"
        (click)="myDirective.exitFullScreen()"
      >
        exit Fullscreen
      </button>
    </div>
  `,
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
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [TdFullscreenTestComponent, TdFullscreenDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TdFullscreenTestComponent);
    btnEl = fixture.debugElement.query(By.css('#test-btn'));
    btnExit = fixture.debugElement.query(By.css('#test-btn-exit'));
    directiveEl = fixture.debugElement.query(
      By.directive(TdFullscreenDirective)
    );
    directive = directiveEl.injector.get(TdFullscreenDirective);
  });

  it('Should capture fullscreenchange event and toggle fullScreenIsActive property', async () => {
    expect(directive.fullScreenIsActive).toBeFalsy();
    jest.spyOn(directive, 'fsChangeHandler').mockImplementation(() => true);
    btnEl.triggerEventHandler('fullscreenchange', undefined);
    directive.fullScreenIsActive = true;
    fixture.detectChanges();
    await fixture.whenStable();
    expect(directive.fsChangeHandler).toBeDefined();
    expect(directive.fsChangeHandler).toBeTruthy();
    expect(directive.fullScreenIsActive).toBeTruthy();
  });

  it('should trigger toggleFullscreen() on template', () => {
    jest.spyOn(directive, 'toggleFullScreen').mockImplementation(() => true);
    btnEl.triggerEventHandler('click', undefined);
    fixture.detectChanges();
    expect(directive.toggleFullScreen).toBeDefined();
    expect(directive.toggleFullScreen).toBeTruthy();
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
    jest.spyOn(directive, 'enterFullScreen').mockImplementation(() => true);
    btnEl.triggerEventHandler('click', undefined);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(directive.enterFullScreen).toBeDefined();
    expect(directive.enterFullScreen).toHaveBeenCalled();
    expect(directive.enterFullScreen).toBeTruthy();
  });

  it('should call exitFullScreen() on directive', async () => {
    jest.spyOn(directive, 'exitFullScreen').mockImplementation(() => true);
    btnExit.triggerEventHandler('click', undefined);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(directive.exitFullScreen).toBeDefined();
    expect(directive.exitFullScreen).toHaveBeenCalled();
    expect(directive.exitFullScreen).toBeTruthy();
  });
});
