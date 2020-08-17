import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyCodeButtonComponent } from './copy-code-button.component';

describe('CopyCodeButtonComponent', () => {
  let component: CopyCodeButtonComponent;
  let fixture: ComponentFixture<CopyCodeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CopyCodeButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyCodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
