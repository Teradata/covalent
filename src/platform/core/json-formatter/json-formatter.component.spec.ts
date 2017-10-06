import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentJsonFormatterModule, TdJsonFormatterComponent } from './json-formatter.module';
import { By } from '@angular/platform-browser';

describe('Component: JsonFormatter', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdJsonFormatterBasicTestComponent,
      ],
      imports: [
        NoopAnimationsModule,
        CovalentJsonFormatterModule,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render component with undefined in it',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.undefined'))).toBeTruthy();
      });
  })));

  it('should render component with key truncated and elipsis',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      let component: TdJsonFormatterBasicTestComponent = fixture.debugElement.componentInstance;
      component.data = {
        loooooooooooooooooooooooooooooong: 'string',
      };
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('.key'))[0].nativeElement.textContent.trim())
        .toBe('looooooooooooooooooooooooooooo…:');
      });
  })));

  it('should throw error if [levelsOpen] is not an integer',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      let component: TdJsonFormatterBasicTestComponent = fixture.debugElement.componentInstance;
      component.levelsOpen = undefined;
      expect(function(): void {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
        });
      }).toThrowError();
  })));

  it('should render component with key and values depending on type',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      let component: TdJsonFormatterBasicTestComponent = fixture.debugElement.componentInstance;
      component.data = {
        stringProperty: 'string',
        dateProperty: new Date(),
        numberProperty: 1,
        functionProperty: function(): void {/* */},
        /* tslint:disable-next-line */
        nullProperty: null,
        undefinedProperty: undefined,
        arrayProperty: [],
      };
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('.key'))[0].nativeElement.textContent.trim())
        .toBe('stringProperty:');
        expect(fixture.debugElement.query(By.css('.string'))).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.key'))[1].nativeElement.textContent.trim())
        .toBe('dateProperty:');
        expect(fixture.debugElement.query(By.css('.date'))).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.key'))[2].nativeElement.textContent.trim())
        .toBe('numberProperty:');
        expect(fixture.debugElement.query(By.css('.number'))).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.key'))[3].nativeElement.textContent.trim())
        .toBe('functionProperty:');
        expect(fixture.debugElement.query(By.css('.function'))).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.key'))[4].nativeElement.textContent.trim())
        .toBe('nullProperty:');
        expect(fixture.debugElement.query(By.css('.null'))).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.key'))[5].nativeElement.textContent.trim())
        .toBe('undefinedProperty:');
        expect(fixture.debugElement.query(By.css('.undefined'))).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.key'))[6].nativeElement.textContent.trim())
        .toBe('arrayProperty:');
        expect(fixture.debugElement.query(By.css('.td-empty'))).toBeTruthy();
      });
  })));

  it('should render component with an array hidden',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      let component: TdJsonFormatterBasicTestComponent = fixture.debugElement.componentInstance;
      component.data = [1, 2, 3, 4, 5, 6];
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.td-key-node'))).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.td-key-leaf')).length).toBe(6);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-object-children')).nativeElement).style.display).toBe('none');
        });
      });
  })));

  it('should render component with an array hidden, click on node and then display array content',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      let component: TdJsonFormatterBasicTestComponent = fixture.debugElement.componentInstance;
      component.data = [1, 2, 3, 4, 5, 6];
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.td-key-node'))).toBeTruthy();
        /* tslint:disable-next-line */
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-object-children')).nativeElement).style.display).toBe('none');
          fixture.debugElement.query(By.css('.td-key-node')).triggerEventHandler('click', new Event('click'));
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              fixture.detectChanges();
              fixture.whenStable().then(() => {
                expect((<HTMLElement>fixture.debugElement.query(By.css('.td-object-children')).nativeElement).style.display).toBe('');
              });
            });
          });
        });
      });
  })));

  it('should render component with an array display by 1 level',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      let component: TdJsonFormatterBasicTestComponent = fixture.debugElement.componentInstance;
      component.data = [1, 2, 3, 4, 5, 6];
      component.levelsOpen = 1;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-object-children')).nativeElement).style.display).toBe('');
        });
      });
  })));

  it('should render component and rerender data only when refresh method explicitly called',
    async(inject([], () => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdJsonFormatterBasicTestComponent);
      let component: TdJsonFormatterBasicTestComponent = fixture.debugElement.componentInstance;
      component.data = {property: 'test'};
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        /* tslint:disable-next-line */
        expect(fixture.debugElement.query(By.css('.string')).nativeElement.textContent.trim()).toBe('"test"');
        component.data.property = 'test2';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('.string')).nativeElement.textContent.trim()).toBe('"test"');
          fixture.debugElement.query(By.directive(TdJsonFormatterComponent)).componentInstance.refresh();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(fixture.debugElement.query(By.css('.string')).nativeElement.textContent.trim()).toBe('"test2"');
          });
        });
      });
  })));

});

@Component({
  selector: 'td-json-formatter-basic-test',
  template: `
  <td-json-formatter [data]="data" [levelsOpen]="levelsOpen">

  </td-json-formatter>
  `,
})
class TdJsonFormatterBasicTestComponent {

  data: any;
  levelsOpen: number = 0;

}
