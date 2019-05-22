import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpWindowComponent } from './help-window.component';

describe('HelpWindowComponent', () => {
  let component: HelpWindowComponent;
  let fixture: ComponentFixture<HelpWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
