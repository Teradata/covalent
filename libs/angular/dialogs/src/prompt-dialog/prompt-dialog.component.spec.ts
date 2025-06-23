import { Component } from '@angular/core';
import {
  TestBed,
  waitForAsync,
  ComponentFixture,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentDialogsModule } from '../dialogs.module';
import { TdDialogService } from '../services/dialog.service';
import { TdPromptDialogComponent } from './prompt-dialog.component';

describe('Component: TdPromptDialogComponent', () => {
  @Component({ template: '' })
  class TestComponent {
    promptDialogComponent!: TdPromptDialogComponent;

    constructor(private _dialogService: TdDialogService) {}

    openPrompt(): void {
      const ref = this._dialogService.openPrompt({
        title: 'Prompt',
        message:
          'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
        value: 'Populated value',
        cancelButton: 'Cancel',
        acceptButton: 'Ok',
      });

      this.promptDialogComponent = ref.componentInstance;
    }
  }

  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CovalentDialogsModule, TestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
  });

  it('should focus the input element once the prompt dialog is opened', fakeAsync(() => {
    fixture.componentInstance.openPrompt();
    const focusSpy = jest.spyOn(
      fixture.componentInstance.promptDialogComponent._input.nativeElement,
      'focus',
    );
    fixture.componentInstance.promptDialogComponent.ngAfterViewInit();
    fixture.detectChanges();
    tick(500);
    expect(focusSpy).toHaveBeenCalled();
  }));

  it('should call the `select()` method once the input is focused', fakeAsync(() => {
    fixture.componentInstance.openPrompt();
    const input =
      fixture.componentInstance.promptDialogComponent._input.nativeElement;
    const selectSpy = jest.spyOn(input, 'select');
    fixture.componentInstance.promptDialogComponent.ngAfterViewInit();
    fixture.detectChanges();

    // Simulate the focus event which should trigger select()
    input.dispatchEvent(new Event('focus'));
    tick(500);

    expect(selectSpy).toHaveBeenCalled();
  }));
});
