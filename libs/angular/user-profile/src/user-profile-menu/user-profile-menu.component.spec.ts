import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TdMenuComponent } from '../../../menu/src/menu.component';

import { TdUserProfileMenuComponent } from './user-profile-menu.component';

describe('CovalentUserProfileMenuComponent', () => {
  let component: TdUserProfileMenuComponent;
  let fixture: ComponentFixture<TdUserProfileMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [TdUserProfileMenuComponent, TdMenuComponent],
    }).compileComponents();
  }));

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
    const mouseEvent: MouseEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });

    jest.spyOn(mouseEvent, 'preventDefault');
    jest.spyOn(mouseEvent, 'stopPropagation');

    component._blockEvent(mouseEvent);
    fixture.detectChanges();

    expect(mouseEvent.preventDefault).toHaveBeenCalled();
    expect(mouseEvent.stopPropagation).toHaveBeenCalled();
  });
});
