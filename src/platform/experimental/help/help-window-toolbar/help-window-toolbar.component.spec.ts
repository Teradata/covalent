import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpWindowToolbarComponent } from './help-window-toolbar.component';

describe('HelpWindowToolbarComponent', () => {
  let component: HelpWindowToolbarComponent;
  let fixture: ComponentFixture<HelpWindowToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpWindowToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpWindowToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
