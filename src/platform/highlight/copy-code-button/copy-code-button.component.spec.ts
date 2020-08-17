import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdCopyCodeButtonComponent } from './copy-code-button.component';

describe('CopyCodeButtonComponent', () => {
  let component: TdCopyCodeButtonComponent;
  let fixture: ComponentFixture<TdCopyCodeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TdCopyCodeButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdCopyCodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
