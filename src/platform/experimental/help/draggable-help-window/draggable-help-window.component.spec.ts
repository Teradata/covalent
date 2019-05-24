import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableHelpWindowComponent } from './draggable-help-window.component';

describe('DraggableHelpWindowComponent', () => {
  let component: DraggableHelpWindowComponent;
  let fixture: ComponentFixture<DraggableHelpWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableHelpWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableHelpWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
