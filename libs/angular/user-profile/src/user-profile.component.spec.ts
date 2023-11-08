import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { TdMenuComponent } from '../../menu/src/menu.component';

import { TdUserProfileComponent } from './user-profile.component';
import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';

describe('CovalentUserProfileComponent', () => {
  let component: TdUserProfileComponent;
  let fixture: ComponentFixture<TdUserProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        TdUserProfileComponent,
        TdUserProfileMenuComponent,
        TdMenuComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
