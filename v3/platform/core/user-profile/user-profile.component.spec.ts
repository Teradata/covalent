import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CovalentMenuModule } from '@covalent/core/menu';

import { TdUserProfileComponent } from './user-profile.component';
import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';

describe('CovalentUserProfileComponent', () => {
  let component: TdUserProfileComponent;
  let fixture: ComponentFixture<TdUserProfileComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TdUserProfileComponent, TdUserProfileMenuComponent],
        imports: [MatMenuModule, MatIconModule, MatButtonModule, MatListModule, CovalentMenuModule],
      }).compileComponents();
    }),
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
