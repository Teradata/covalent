import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdLoadingMaskComponent } from './loading-mask.component';
import { DebugElement } from '@angular/core';

describe('TdLoadingMaskComponent', () => {
  let component: TdLoadingMaskComponent;
  let fixture: ComponentFixture<TdLoadingMaskComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdLoadingMaskComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TdLoadingMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have animated input set to true', () => {
    expect(component.animated).toBeTruthy();
  });

  it('should have .td-loading-mask-animated class if animated input is true', () => {
    component.animated = true;
    fixture.detectChanges();

    const classes: DebugElement['classes'] = fixture.debugElement.classes;

    expect(classes['td-loading-mask-animated']).toBeTruthy();
  });

  it('should not have .td-loading-mask-animated class if animated input is false', () => {
    component.animated = false;
    fixture.detectChanges();

    const classes: DebugElement['classes'] = fixture.debugElement.classes;

    expect(classes['td-loading-mask-animated']).toBeFalsy();
  });

  it('should match measurements from inputs', () => {
    component.borderRadius = '5px';
    component.height = '10px';
    component.width = '10px';
    fixture.detectChanges();

    const styles: DebugElement['styles'] = fixture.debugElement.styles;

    expect(component.borderRadius === styles.borderRadius).toBeTruthy();
    expect(component.height === styles.height).toBeTruthy();
    expect(component.width === styles.width).toBeTruthy();
  });
});
