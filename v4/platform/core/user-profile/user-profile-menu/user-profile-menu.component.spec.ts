import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TdUserProfileMenuComponent } from './user-profile-menu.component';

describe('CovalentUserProfileMenuComponent', () => {
  let component: TdUserProfileMenuComponent;
  let fixture: ComponentFixture<TdUserProfileMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdUserProfileMenuComponent],
        imports: [MatIconModule, MatListModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TdUserProfileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.email = 'daffy.duck@teradata.com';
    component.name = 'Daffy Duck';
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should block out click event on header click', () => {
    const mouseEvent: MouseEvent = new MouseEvent('click', { bubbles: true, cancelable: true });

    spyOn(mouseEvent, 'preventDefault');
    spyOn(mouseEvent, 'stopPropagation');

    component._blockEvent(mouseEvent);
    fixture.detectChanges();

    expect(mouseEvent.preventDefault).toHaveBeenCalled();
    expect(mouseEvent.stopPropagation).toHaveBeenCalled();
  });
});
