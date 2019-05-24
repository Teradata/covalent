import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableHelpWindowDialogComponent } from './draggable-help-window-dialog.component';

describe('DraggableHelpWindowDialogComponent', () => {
  let component: DraggableHelpWindowDialogComponent;
  let fixture: ComponentFixture<DraggableHelpWindowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableHelpWindowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableHelpWindowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
