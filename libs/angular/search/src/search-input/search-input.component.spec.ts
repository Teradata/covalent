import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CovalentSearchModule } from '../search.module';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TdSearchInputComponent } from './search-input.component';

describe('Component: SearchInput', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, FormsModule, CovalentSearchModule, TestNgModelSupportComponent],
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
    const inputElement: DebugElement = fixture.debugElement.query(
      By.css('input')
    );

    expect(inputElement.nativeElement).toBeTruthy();

    component.value = 'test';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(inputElement.nativeElement.value).toBe('test');

        component.value = 'another_test';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(inputElement.nativeElement.value).toBe('another_test');
            done();
          });
        });
      });
    });
  });
});

@Component({
  template: ` <td-search-input [(ngModel)]="value"></td-search-input> `,
  imports: [TdSearchInputComponent, FormsModule],
})
class TestNgModelSupportComponent {
  value!: string;
}
