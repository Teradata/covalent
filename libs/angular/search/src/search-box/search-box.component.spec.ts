import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TdSearchInputComponent } from '../search-input/search-input.component';
import { CovalentSearchModule } from '../search.module';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TdSearchBoxComponent } from './search-box.component';

describe('Component: SearchBox', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, CovalentSearchModule, TestNgModelSupportComponent],
      });
      TestBed.compileComponents();
    })
  );

  it('should leverage ngModel to set a value', (done) => {
    const fixture: ComponentFixture<any> = TestBed.createComponent(
      TestNgModelSupportComponent
    );
    const component: TestNgModelSupportComponent =
      fixture.debugElement.componentInstance;
    const inputComponent: DebugElement = fixture.debugElement.query(
      By.directive(TdSearchInputComponent)
    );

    expect(inputComponent).toBeTruthy();

    component.value = 'test';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(inputComponent.componentInstance.value).toBe('test');

        component.value = 'another_test';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(inputComponent.componentInstance.value).toBe('another_test');
            done();
          });
        });
      });
    });
  });
});

@Component({
  template: ` <td-search-box [(ngModel)]="value"></td-search-box> `,
  imports: [TdSearchBoxComponent, FormsModule]
})
class TestNgModelSupportComponent {
  value!: string;
}
