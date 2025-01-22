import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TdUserProfileComponent } from './user-profile.component';
import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';

describe('CovalentUserProfileComponent', () => {
  let component: TdUserProfileComponent;
  let fixture: ComponentFixture<TdUserProfileComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TdUserProfileComponent, TdUserProfileMenuComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TdUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
