import {
  TestBed,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, DebugElement } from '@angular/core';
import {
  FormControl, FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import { OverlayContainer, MdInputDirective, DOWN_ARROW, UP_ARROW, ENTER, SPACE, TAB } from '@angular/material';
import { By } from '@angular/platform-browser';
import { CovalentChipsModule, TdChipsComponent } from './chips.module';

describe('Component: Chips', () => {
  let overlayContainerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentChipsModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        TdChipsBasicTestComponent,
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

  describe('panel usage and filtering: ', () => {
    let fixture: ComponentFixture<TdChipsBasicTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsBasicTestComponent);
      fixture.detectChanges();

      input = fixture.debugElement.query(By.css('input'));
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
      input.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
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
    });

    it('should open the panel and filter the list', (done: DoneFn) => {
      expect(overlayContainerElement.textContent).not.toContain('steak');
      expect(overlayContainerElement.textContent).not.toContain('pizza');
      expect(overlayContainerElement.textContent).not.toContain('tacos');
      expect(overlayContainerElement.textContent).not.toContain('sandwich');
      expect(overlayContainerElement.textContent).not.toContain('chips');
      expect(overlayContainerElement.textContent).not.toContain('pasta');
      expect(overlayContainerElement.textContent).not.toContain('sushi');
      input.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
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
            }, 100);
          });
        });
      });
    });

    it('should open the panel, filter selectedItems and filter the list', (done: DoneFn) => {
      expect(overlayContainerElement.textContent).not.toContain('steak');
      expect(overlayContainerElement.textContent).not.toContain('pizza');
      expect(overlayContainerElement.textContent).not.toContain('tacos');
      expect(overlayContainerElement.textContent).not.toContain('sandwich');
      expect(overlayContainerElement.textContent).not.toContain('chips');
      expect(overlayContainerElement.textContent).not.toContain('pasta');
      expect(overlayContainerElement.textContent).not.toContain('sushi');
      fixture.componentInstance.selectedItems.push('steak');
      fixture.componentInstance.selectedItems.push('sandwich');
      input.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(overlayContainerElement.textContent).not.toContain('steak');
          expect(overlayContainerElement.textContent).toContain('pizza');
          expect(overlayContainerElement.textContent).toContain('tacos');
          expect(overlayContainerElement.textContent).not.toContain('sandwich');
          expect(overlayContainerElement.textContent).toContain('chips');
          expect(overlayContainerElement.textContent).toContain('pasta');
          expect(overlayContainerElement.textContent).toContain('sushi');
          (<TdChipsComponent>chips.componentInstance).inputControl.setValue('a');
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            setTimeout(() => {
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect(overlayContainerElement.textContent).not.toContain('steak');
                expect(overlayContainerElement.textContent).toContain('pizza');
                expect(overlayContainerElement.textContent).toContain('tacos');
                expect(overlayContainerElement.textContent).not.toContain('sandwich');
                expect(overlayContainerElement.textContent).not.toContain('chips');
                expect(overlayContainerElement.textContent).toContain('pasta');
                expect(overlayContainerElement.textContent).not.toContain('sushi');
                done();
              });
            }, 100);
          });
        });
      });
    });
  });

  // TODO

  // requireMatch usage

  // readOnly usage

  // chipAddition usage

  // add event test

  // remove event test

  // required reactive forms (dirty, pristine, valid)

});

@Component({
  template: `
      <td-chips [placeholder]="placeholder" [items]="items" [(ngModel)]="selectedItems">
      </td-chips>`,
})
class TdChipsBasicTestComponent {
  placeholder: string;
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
}
