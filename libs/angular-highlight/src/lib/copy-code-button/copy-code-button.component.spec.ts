import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdCopyCodeButtonComponent } from './copy-code-button.component';
import { By } from '@angular/platform-browser';

describe('CopyCodeButtonComponent', () => {
  let component: TdCopyCodeButtonComponent;
  let fixture: ComponentFixture<TdCopyCodeButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TdCopyCodeButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdCopyCodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css('button')).nativeElement
    ).toBeTruthy();
  });

  it('should display default tooltip', () => {
    component.copyCodeTooltips = undefined;
    component.copyCodeToClipboard = true;
    expect(component).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css('button')).nativeElement
    ).toBeTruthy();
    expect(
      fixture.debugElement
        .query(By.css('button'))
        .nativeElement.getAttribute('ng-reflect-message')
    ).toEqual('Copy');
  });

  it('should override tooltip', () => {
    component.copyCodeTooltips = { copy: 'CC', copied: 'CC Copied' };
    component.copyCodeToClipboard = true;
    fixture.detectChanges();
    fixture.whenStable();
    expect(component).toBeTruthy();
    expect(
      fixture.debugElement.query(By.css('button')).nativeElement
    ).toBeTruthy();
    expect(
      fixture.debugElement
        .query(By.css('button'))
        .nativeElement.getAttribute('ng-reflect-message')
    ).toEqual('CC');
  });
});
