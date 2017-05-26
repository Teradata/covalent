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
import { OverlayContainer, MdInputDirective, MdChip, BACKSPACE, ENTER } from '@angular/material';
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
        NoopAnimationsModule,
      ],
      declarations: [
        TdChipsBasicTestComponent,
        TdChipsObjectsRequireMatchTestComponent,
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

  describe('panel usage and add/removal: ', () => {
    let fixture: ComponentFixture<TdChipsBasicTestComponent>;
    let input: DebugElement;
    let chips: DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(TdChipsBasicTestComponent);
      fixture.detectChanges();

      input = fixture.debugElement.query(By.directive(MdInputDirective));
      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
    });

    it('should open the panel, click on an option and add it as chip', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      input.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('md-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MdChip)).length).toBe(1);
          done();
        });
      });
    });

    it('should open the panel, click on an option to add it as chip and remove it with backspace', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      input.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('md-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MdChip)).length).toBe(1);
          fixture.debugElement.queryAll(By.directive(MdChip))[0].triggerEventHandler('keydown', { keyCode: BACKSPACE });
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(0);
            expect(fixture.debugElement.queryAll(By.directive(MdChip)).length).toBe(0);
            done();
          });
        });
      });
    });

    it('should open the panel, click on an option to add it as chip and remove it by clicking on the remove button', (done: DoneFn) => {
      fixture.componentInstance.filter('');
      input.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('md-option');
        option.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(chips.componentInstance.value.length).toBe(1);
          expect(fixture.debugElement.queryAll(By.directive(MdChip)).length).toBe(1);
          fixture.debugElement.queryAll(By.css('.td-chip-removal'))[0].triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(0);
            expect(fixture.debugElement.queryAll(By.directive(MdChip)).length).toBe(0);
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

      input = fixture.debugElement.query(By.directive(MdInputDirective));
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
      input.triggerEventHandler('focus', new Event('focus'));
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
      input.triggerEventHandler('focus', new Event('focus'));
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

      input = fixture.debugElement.query(By.directive(MdInputDirective));
      chips = fixture.debugElement.query(By.directive(TdChipsComponent));
    });

    it('should open the panel, click on an option to add it as chip', (done: DoneFn) => {
      fixture.componentInstance.objects = [{
        name: 'San Diego',
      }, {
        name: 'Los Angeles',
      }];
      input.triggerEventHandler('focus', new Event('focus'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          const option: HTMLElement = <HTMLElement>overlayContainerElement.querySelector('md-option');
          option.click();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(chips.componentInstance.value.length).toBe(1);
            expect(fixture.debugElement.queryAll(By.directive(MdChip)).length).toBe(1);
            done();
          });
        });
      });
    });

  });

  // TODO

  // more requireMatch usage

  // more a11y unit tests

  // readOnly usage

  // chipAddition usage

  // add event test

  // remove event test

  // required reactive forms (dirty, pristine, valid)

});

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
        <ng-template td-basic-chip let-chip="chip">
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
