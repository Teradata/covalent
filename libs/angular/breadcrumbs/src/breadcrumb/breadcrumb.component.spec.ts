import { ApplicationRef, Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TdBreadcrumbComponent } from './breadcrumb.component';

describe('Components: Breadcrumb', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatIconModule],
        declarations: [TdBreadcrumbTestComponent, TdBreadcrumbComponent],
      });
    })
  );

  it('should prevent default and stop event propagation when the `mat-icon` is clicked but should not trigger change detection', () => {
    const fixture: ComponentFixture<TdBreadcrumbTestComponent> =
      TestBed.createComponent(TdBreadcrumbTestComponent);
    fixture.detectChanges();
    const appRef = TestBed.inject(ApplicationRef);
    jest.spyOn(appRef, 'tick');
    const event = new MouseEvent('click');
    jest.spyOn(event, 'preventDefault');
    jest.spyOn(event, 'stopPropagation');

    fixture.debugElement
      .query(By.css('mat-icon'))
      .nativeElement.dispatchEvent(event);

    expect(appRef.tick).not.toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});

@Component({
  selector: 'td-breadcrumb-test',
  template: '<td-breadcrumb></td-breadcrumb>',
})
class TdBreadcrumbTestComponent {}
