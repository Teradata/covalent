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

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, CovalentDialogsModule],
        declarations: [TestComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
  });

  const tickRaf = () => tick(16);

  it('should focus the input element once the prompt dialog is opened', fakeAsync(() => {
    fixture.componentInstance.openPrompt();
    const focusSpy = jest.spyOn(
      fixture.componentInstance.promptDialogComponent._input.nativeElement,
      'focus'
    );
    fixture.detectChanges();
    tickRaf();
    expect(focusSpy).toHaveBeenCalled();
  }));

  it('should select call the `select()` method once the input is focused', fakeAsync(() => {
    fixture.componentInstance.openPrompt();
    const selectSpy = jest.spyOn(
      fixture.componentInstance.promptDialogComponent._input.nativeElement,
      'select'
    );
    fixture.detectChanges();
    tickRaf();
    expect(selectSpy).toHaveBeenCalled();
  }));
});
