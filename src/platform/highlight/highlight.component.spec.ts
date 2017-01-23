import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CovalentHighlightModule } from './';

describe('Component: Highlight', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentHighlightModule.forRoot(),
      ],
      declarations: [
        TdHighlightEmptyTestComponent,
        TdHighlightStaticHtmlTestComponent,
        TdHighlightDynamicCssTestComponent,
        TdHighlightUndefinedLangTestComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render empty', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightEmptyTestComponent);
    let component: TdHighlightEmptyTestComponent = fixture.debugElement.componentInstance;
    let element: HTMLElement = fixture.nativeElement;

    expect(fixture.debugElement.query(By.css('td-highlight')).nativeElement.textContent.trim())
    .toBe(``);
    expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeFalsy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeFalsy();
      expect(fixture.debugElement.query(By.css('td-highlight')).nativeElement.textContent.trim()).toBe('');
    });
  })));

  it('should render code from static content', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightStaticHtmlTestComponent);
    let component: TdHighlightStaticHtmlTestComponent = fixture.debugElement.componentInstance;
    let element: HTMLElement = fixture.nativeElement;

    expect(fixture.debugElement.query(By.css('td-highlight')).nativeElement.textContent.trim())
    .toContain(`{ {property} }`.trim());
    expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeFalsy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeTruthy();
      expect(element.querySelector('td-highlight pre code').textContent.trim()).toContain(`{{property}}`);
      expect(element.querySelectorAll('.hljs-tag').length).toBe(6);
    });
  })));

  it('should render code from dynamic content', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightDynamicCssTestComponent);
    let component: TdHighlightDynamicCssTestComponent = fixture.debugElement.componentInstance;
    component.content = `
      pre {
        background: #002451;
        border-radius: 2px;
      }`;
    let element: HTMLElement = fixture.nativeElement;

    expect(fixture.debugElement.query(By.css('td-highlight')).nativeElement.textContent.trim())
    .toBe('');
    expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeFalsy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('td-highlight pre code'))).toBeTruthy();
      expect(element.querySelectorAll('.hljs-number').length).toBe(2);
    });
  })));

  it('should throw error for undefined language', async(inject([], () => {
    let fixture: ComponentFixture<any> = TestBed.createComponent(TdHighlightUndefinedLangTestComponent);
    let component: TdHighlightUndefinedLangTestComponent = fixture.debugElement.componentInstance;
    expect(function(): void {
      fixture.detectChanges();
    }).toThrowError();
  })));

});

@Component({
  template: `
    <td-highlight>
    </td-highlight>`,
})
class TdHighlightEmptyTestComponent {
}

@Component({
  template: `<td-highlight lang="html">
      <![CDATA[
        <td-highlight lang="html">
          <h1>hello world!</h1>
          <span>{ {property} }</span>
        </td-highlight>
      ]]>
    </td-highlight>`,
})
class TdHighlightStaticHtmlTestComponent {
}

@Component({
  template: `
    <td-highlight lang="css" [content]="content">
    </td-highlight>`,
})
class TdHighlightDynamicCssTestComponent {
  content: string;
}

@Component({
  template: `
    <td-highlight [lang]="lang">
    </td-highlight>`,
})
class TdHighlightUndefinedLangTestComponent {
  lang: string;
}
