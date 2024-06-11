import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TdStatusDialogComponent } from './status-dialog.component';
import { CovalentDialogsModule } from '../dialogs.module';
import { MatDialogRef } from '@angular/material/dialog';

class MatDialogRefMock {
  close(): null {
    return null;
  }
}

describe('TdStatusDialogComponent', () => {
  let component: TdStatusDialogComponent;
  let fixture: ComponentFixture<TdStatusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CovalentDialogsModule],
      declarations: [TdStatusDialogComponent],
      providers: [{ provide: MatDialogRef, useClass: MatDialogRefMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TdStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the status icon based on the state', () => {
    component.state = 'positive';
    const icon = component.getStatusIcon();
    expect(icon).toBe('check');
  });

  it('should toggle additional details section', () => {
    component.showDetails = false;
    component.toggleDetails();
    expect(component.showDetails).toBeTruthy();
  });

  it('should close the dialog', () => {
    const closeSpy = jest.spyOn(component['_dialogRef'], 'close');
    component.showDetails = false;
    component.close();
    expect(closeSpy).toHaveBeenCalled();
  });
});
