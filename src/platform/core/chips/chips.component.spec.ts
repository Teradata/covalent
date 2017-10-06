import {
  TestBed,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, DebugElement } from '@angular/core';
import {
  FormControl, FormsModule, ReactiveFormsModule,
} from '@angular/forms';

import { DELETE, BACKSPACE, ENTER, LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatChip } from '@angular/material';
import { By } from '@angular/platform-browser';
import { CovalentChipsModule, TdChipsComponent } from './chips.module';

function createFakeKeyboardEvent(keyCode: number): any {
  return {
    keyCode: keyCode,
    preventDefault: function(): void {
      /* noop */
    },
    stopPropagation: function(): void {
      /* noop */
    },
  };
}

describe('Component: Chips', () => {
  let overlayContainerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentChipsModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      declarations: [
        TdChipsTestComponent,
        TdChipsA11yTestComponent,
        TdChipsBasicTestComponent,
        TdChipsObjectsRequireMatchTestComponent,
        TdChipsStackedTestComponent,
        TdChipRemovalTestComponent,
        TdChipsEventsTestComponent,
      ],
      providers: [
        {provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div') as HTMLElement;
          overlayContainerElement.classList.add('cdk-overlay-container');

          document.body.appendChild(overlayContainerElement);

          // remove body padding to keep consistent cross-browser
          document.body.style.padding = '0';
          document.body.style.margin = '0';

          return {getContainerElement: () => overlayContainerElement};
        }},
      ],
    });
    TestBed.compileComponents();
  }));

  describe('should test general features: ', () => {
    let fixture: ComponentFixture<TdChipsTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
      input = chips.query(By.css('input'));
    });

    it('should have primary color', (done: DoneFn) => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect((<HTMLElement>chips.nativeElement).classList.contains('mat-primary')).toBeTruthy();
        done();
      });
    });

    it('should set to accent color', (done: DoneFn) => {
      fixture.componentInstance.color = 'accent';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect((<HTMLElement>chips.nativeElement).classList.contains('mat-accent')).toBeTruthy();
        done();
      });
    });

    it('should set to warn color and then to accent', (done: DoneFn) => {
      fixture.componentInstance.color = 'warn';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect((<HTMLElement>chips.nativeElement).classList.contains('mat-warn')).toBeTruthy();
        fixture.componentInstance.color = 'accent';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>chips.nativeElement).classList.contains('mat-accent')).toBeTruthy();
          done();
        });
      });
    });

  });

  describe('a11y keyboard in chips and input: ', () => {
    let fixture: ComponentFixture<TdChipsA11yTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsA11yTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
      input = chips.query(By.css('input'));
    });

    it('should focus input', (done: DoneFn) => {
      fixture.componentInstance.chipAddition = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        chips.triggerEventHandler('focus', new Event('focus'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<TdChipsComponent>chips.componentInstance)._inputChild.focused).toBeTruthy();
          done();
        });
      });
    });

    it('should focus first chip', (done: DoneFn) => {
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            done();
          });
        });
      });
    });

    it('should focus around the chips going left', (done: DoneFn) => {
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.debugElement.queryAll(By.directive(MatChip))[0]
              .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[2].nativeElement)
                .toBe(document.activeElement);
              fixture.debugElement.queryAll(By.directive(MatChip))[2]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(fixture.debugElement.queryAll(By.directive(MatChip))[1].nativeElement)
                  .toBe(document.activeElement);
                fixture.debugElement.queryAll(By.directive(MatChip))[1]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
                    .toBe(document.activeElement);
                  done();
                });
              });
            });
          });
        });
      });
    });

    it('should focus around the chips going right', (done: DoneFn) => {
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.debugElement.queryAll(By.directive(MatChip))[0]
              .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[1].nativeElement)
                .toBe(document.activeElement);
              fixture.debugElement.queryAll(By.directive(MatChip))[1]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(fixture.debugElement.queryAll(By.directive(MatChip))[2].nativeElement)
                  .toBe(document.activeElement);
                fixture.debugElement.queryAll(By.directive(MatChip))[2]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
                    .toBe(document.activeElement);
                  done();
                });
              });
            });
          });
        });
      });
    });

  });

  describe('panel usage and add/removal: ', () => {
    let fixture: ComponentFixture<TdChipsBasicTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsBasicTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
      input = chips.query(By.css('input'));
    });

    it('should set a value in the input and enter it as chip', (done: DoneFn) => {
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        (<TdChipsComponent>chips.componentInstance)._inputChild.value = 'test';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          input.triggerEventHandler('keyup.enter', createFakeKeyboardEvent(ENTER));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            // set tiemout
            setTimeout(() => {
              expect(chips.componentInstance.value.length).toBe(1);
              expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement.textContent).toContain('test');
              done();
            }, 200);
          });
        });
      });
    });

    it('should open the panel, click on an option and add it as chip', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('mat-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
          done();
        });
      });
    });

    it('should open the panel, click on an option to add it as chip and remove it with backspace', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('mat-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
          fixture.debugElement.queryAll(By.directive(MatChip))[0].triggerEventHandler('keydown', createFakeKeyboardEvent(BACKSPACE));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(0);
            expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(0);
            done();
          });
        });
      });
    });

    it('should open the panel, click on an option to add it as chip and remove it by clicking on the remove button', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('mat-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
          fixture.debugElement.queryAll(By.css('.td-chip-removal'))[0].triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(0);
            expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(0);
            done();
          });
        });
      });
    });

  });

  describe('panel usage and filtering: ', () => {
    let fixture: ComponentFixture<TdChipsBasicTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsBasicTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
    });

    it('should open the panel chips are focused', (done: DoneFn) => {
      expect(overlayContainerElement.textContent).not.toContain('steak');
      expect(overlayContainerElement.textContent).not.toContain('pizza');
      expect(overlayContainerElement.textContent).not.toContain('tacos');
      expect(overlayContainerElement.textContent).not.toContain('sandwich');
      expect(overlayContainerElement.textContent).not.toContain('chips');
      expect(overlayContainerElement.textContent).not.toContain('pasta');
      expect(overlayContainerElement.textContent).not.toContain('sushi');
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(overlayContainerElement.textContent).toContain('steak');
        expect(overlayContainerElement.textContent).toContain('pizza');
        expect(overlayContainerElement.textContent).toContain('tacos');
        expect(overlayContainerElement.textContent).toContain('sandwich');
        expect(overlayContainerElement.textContent).toContain('chips');
        expect(overlayContainerElement.textContent).toContain('pasta');
        expect(overlayContainerElement.textContent).toContain('sushi');
        done();
      });
    });

    it('should open the panel and filter the list', (done: DoneFn) => {
      expect(overlayContainerElement.textContent).not.toContain('steak');
      expect(overlayContainerElement.textContent).not.toContain('pizza');
      expect(overlayContainerElement.textContent).not.toContain('tacos');
      expect(overlayContainerElement.textContent).not.toContain('sandwich');
      expect(overlayContainerElement.textContent).not.toContain('chips');
      expect(overlayContainerElement.textContent).not.toContain('pasta');
      expect(overlayContainerElement.textContent).not.toContain('sushi');
      fixture.componentInstance.filter('');
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(overlayContainerElement.textContent).toContain('steak');
        expect(overlayContainerElement.textContent).toContain('pizza');
        expect(overlayContainerElement.textContent).toContain('tacos');
        expect(overlayContainerElement.textContent).toContain('sandwich');
        expect(overlayContainerElement.textContent).toContain('chips');
        expect(overlayContainerElement.textContent).toContain('pasta');
        expect(overlayContainerElement.textContent).toContain('sushi');
        (<TdChipsComponent>chips.componentInstance).inputControl.setValue('a');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // mimic debounce
          setTimeout(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(overlayContainerElement.textContent).toContain('steak');
              expect(overlayContainerElement.textContent).toContain('pizza');
              expect(overlayContainerElement.textContent).toContain('tacos');
              expect(overlayContainerElement.textContent).toContain('sandwich');
              expect(overlayContainerElement.textContent).not.toContain('chips');
              expect(overlayContainerElement.textContent).toContain('pasta');
              expect(overlayContainerElement.textContent).not.toContain('sushi');
              done();
            });
          }, 200);
        });
      });
    });
  });

  describe('panel usage and requireMatch usage: ', () => {
    let fixture: ComponentFixture<TdChipsObjectsRequireMatchTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsObjectsRequireMatchTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
    });

    it('should open the panel, click on an option to add it as chip', (done: DoneFn) => {
      fixture.componentInstance.objects = [{
        name: 'San Diego',
      }, {
        name: 'Los Angeles',
      }];
      chips.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('mat-option');
          option.click();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(1);
            expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
            done();
          });
        });
      });
    });

  });

  describe('stacked usage: ', () => {
    let fixture: ComponentFixture<TdChipsStackedTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsStackedTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
    });

    it('should rendered chips stacked', (done: DoneFn) => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect((<HTMLElement>chips.query(By.css('.td-chips-wrapper')).nativeElement).classList.contains('td-chips-stacked'))
          .toBeFalsy();
        fixture.componentInstance.stacked = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>chips.query(By.css('.td-chips-wrapper')).nativeElement).classList.contains('td-chips-stacked'))
            .toBeTruthy();
          done();
        });
      });
    });

  });

  describe('events: ', () => {
    let fixture: ComponentFixture<TdChipsEventsTestComponent>;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsEventsTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
    });

    it('should right arrow on a chip and see the chipFocus event', (done: DoneFn) => {
        let focusEventSpy: jasmine.Spy = spyOn(fixture.componentInstance, 'chipFocusEvent');

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(focusEventSpy.calls.count()).toBe(0);
          chips.nativeElement.focus();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            chips.triggerEventHandler('focus', new Event('focus'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.debugElement.queryAll(By.directive(MatChip))[0]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(focusEventSpy.calls.count()).toBe(1);
                done();
              });
            });
          });
        });
    });

    it('should right arrow on a chip twice and see the chipBlur event', (done: DoneFn) => {
        let blurEventSpy: jasmine.Spy = spyOn(fixture.componentInstance, 'chipBlurEvent');

        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(blurEventSpy.calls.count()).toBe(0);
          chips.nativeElement.focus();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            chips.triggerEventHandler('focus', new Event('focus'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.debugElement.queryAll(By.directive(MatChip))[0]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                fixture.debugElement.queryAll(By.directive(MatChip))[1]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(blurEventSpy.calls.count()).toBe(1);
                  done();
                });
              });
            });
          });
        });
    });

  });

  describe('chip removal usage, requires disabled to be false: ', () => {
    let fixture: ComponentFixture<TdChipRemovalTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipRemovalTestComponent);
      fixture.detectChanges();

      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
      input = chips.query(By.css('input'));
    });

    it('should not focus input', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        chips.triggerEventHandler('focus', new Event('focus'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<TdChipsComponent>chips.componentInstance)._inputChild.focused).toBeFalsy();
          done();
        });
      });
    });

    it('should not show cancel button', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = false;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        chips.triggerEventHandler('focus', new Event('focus'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.queryAll(By.css('.td-chip-removal')).length).toBe(0);
          done();
        });
      });
    });

    it('should focus input, then focus first chip and remove first chip by clicking on the remove button', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        chips.triggerEventHandler('focus', new Event('focus'));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<TdChipsComponent>chips.componentInstance)._inputChild.focused).toBeTruthy();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(3);
            expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(3);
            fixture.debugElement.queryAll(By.css('.td-chip-removal'))[0]
              .triggerEventHandler('click', new Event('click'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(chips.componentInstance.value.length).toBe(2);
              expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(2);
              done();
            });
          });
        });
      });
    });

    it('should focus first chip and remove chip with backspace and delete', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.debugElement.queryAll(By.directive(MatChip))[0]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(BACKSPACE));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(chips.componentInstance.value.length).toBe(2);
                expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(2);
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(chips.componentInstance.value.length).toBe(2);
                  fixture.debugElement.queryAll(By.directive(MatChip))[0]
                    .triggerEventHandler('keydown', createFakeKeyboardEvent(DELETE));
                  fixture.detectChanges();
                  fixture.whenStable().then(() => {
                    expect(chips.componentInstance.value.length).toBe(1);
                    expect(fixture.debugElement.queryAll(By.directive(MatChip)).length).toBe(1);
                    done();
                  });
                });
              });
            });
          });
        });
      });
    });
    
    it('should focus around the chips going left', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.debugElement.queryAll(By.directive(MatChip))[0]
              .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[2].nativeElement)
                .toBe(document.activeElement);
              fixture.debugElement.queryAll(By.directive(MatChip))[2]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(fixture.debugElement.queryAll(By.directive(MatChip))[1].nativeElement)
                  .toBe(document.activeElement);
                fixture.debugElement.queryAll(By.directive(MatChip))[1]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(LEFT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
                    .toBe(document.activeElement);
                  done();
                });
              });
            });
          });
        });
      });
    });

    it('should focus around the chips going right', (done: DoneFn) => {
      fixture.componentInstance.chipRemoval = true;
      fixture.componentInstance.chipAddition = false;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        chips.nativeElement.focus();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          chips.triggerEventHandler('focus', new Event('focus'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
              .toBe(document.activeElement);
            fixture.debugElement.queryAll(By.directive(MatChip))[0]
              .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.queryAll(By.directive(MatChip))[1].nativeElement)
                .toBe(document.activeElement);
              fixture.debugElement.queryAll(By.directive(MatChip))[1]
                .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(fixture.debugElement.queryAll(By.directive(MatChip))[2].nativeElement)
                  .toBe(document.activeElement);
                fixture.debugElement.queryAll(By.directive(MatChip))[2]
                  .triggerEventHandler('keydown', createFakeKeyboardEvent(RIGHT_ARROW));
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  expect(fixture.debugElement.queryAll(By.directive(MatChip))[0].nativeElement)
                    .toBe(document.activeElement);
                  done();
                });
              });
            });
          });
        });
      });
    });

  });

  // TODO

  // more requireMatch usage

  // more a11y unit tests

  // disabled usage

  // chipAddition usage

  // add event test

  // remove event test

  // required reactive forms (dirty, pristine, valid)

});

@Component({
  template: `
      <td-chips [items]="items" [(ngModel)]="selectedItems" [color]="color">
      </td-chips>`,
})
class TdChipsTestComponent {
  color: string;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
  ];
  selectedItems: string[] = this.items.slice(0, 2);
}

@Component({
  template: `
      <td-chips [items]="items" [(ngModel)]="selectedItems" [chipAddition]="chipAddition">
      </td-chips>`,
})
class TdChipsA11yTestComponent {
  chipAddition: boolean = true;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  selectedItems: string[] = this.items.slice(0, 3);
}

@Component({
  template: `
      <td-chips [placeholder]="placeholder" [items]="filteredItems" [(ngModel)]="selectedItems" (inputChange)="filter($event)">
      </td-chips>`,
})
class TdChipsBasicTestComponent {
  placeholder: string;
  filteredItems: string[];
  selectedItems: string[] = [];
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  filter(value: string): void {
    this.filteredItems = this.items.filter((item: any) => {
      return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
    }).filter((filteredItem: any) => {
      return this.selectedItems ? this.selectedItems.indexOf(filteredItem) < 0 : true;
    });
  }
}

@Component({
  template: `
      <td-chips [items]="objects" [(ngModel)]="selectedObjects" requireMatch>
        <ng-template td-chip let-chip="chip">
          {{chip.name}}
        </ng-template>
        <ng-template td-autocomplete-option let-option="option">
          {{option.name}}
        </ng-template>
      </td-chips>`,
})
class TdChipsObjectsRequireMatchTestComponent {
  selectedObjects: any[] = [];
  objects: any[];
}

@Component({
  template: `
      <td-chips [items]="items" [(ngModel)]="selectedItems" [stacked]="stacked">
      </td-chips>`,
})
class TdChipsStackedTestComponent {
  stacked: boolean = false;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  selectedItems: string[] = this.items.slice(0, 3);
}

@Component({
  template: `
      <td-chips [items]="items" [(ngModel)]="selectedItems" [chipRemoval]="chipRemoval"
      [chipAddition]="chipAddition">
      </td-chips>`,
})
class TdChipRemovalTestComponent {
  chipRemoval: boolean = true;
  chipAddition: boolean = true;
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
    'sandwich',
    'chips',
    'pasta',
    'sushi',
  ];
  selectedItems: string[] = this.items.slice(0, 3);
}

@Component({
  template: `
      <td-chips [items]="items" [(ngModel)]="selectedItems" (chipFocus)="chipFocusEvent()" (chipBlur)="chipBlurEvent()">
      </td-chips>`,
})
class TdChipsEventsTestComponent {
  items: string[] = [
    'steak',
    'pizza',
    'tacos',
  ];
  selectedItems: string[] = this.items.slice(0, 2);

  chipFocusEvent(): void {
    /* noop */
  }

  chipBlurEvent(): void {
    /* noop */
  }
}
