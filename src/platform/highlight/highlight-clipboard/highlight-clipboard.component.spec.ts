import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightClipboardComponent } from './highlight-clipboard.component';

describe('HighlightClipboardComponent', () => {
  let component: HighlightClipboardComponent;
  let fixture: ComponentFixture<HighlightClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightClipboardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
