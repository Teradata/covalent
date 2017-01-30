import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import 'hammerjs';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CovalentMarkdownModule } from './';

describe('Component: Markdown', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentMarkdownModule.forRoot(),
      ],
      declarations: [
        TdMarkdownEmptyTestComponent,
        TdMarkdownBasicTestComponent,
        TdMarkdownContentTestComponent,
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render empty', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownEmptyTestComponent);
    let component: TdMarkdownEmptyTestComponent = fixture.debugElement.componentInstance;
    let element: HTMLElement = fixture.nativeElement;

    expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
    .toBe(``);
    expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
      expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim()).toBe('');
    });
  })));

  it('should render markup from static content', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownBasicTestComponent);
    let component: TdMarkdownBasicTestComponent = fixture.debugElement.componentInstance;
    let element: HTMLElement = fixture.nativeElement;

    expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
    .toBe(`
      # title

      * list item`.trim());
    expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeTruthy();
      expect(element.querySelector('td-markdown div h1').textContent.trim()).toBe('title');
      expect(element.querySelector('td-markdown div ul li').textContent.trim()).toBe('list item');
    });
  })));

  it('should render markup from dynamic content', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownContentTestComponent);
    let component: TdMarkdownContentTestComponent = fixture.debugElement.componentInstance;
    component.content = `
    # another title
    
    ## subtitle
    
    \`\`\`
    pseudo code
    \`\`\``;
    let element: HTMLElement = fixture.nativeElement;

    expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
    .toBe('');
    expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeTruthy();
      expect(element.querySelector('td-markdown div h1').textContent.trim()).toBe('another title');
      expect(element.querySelector('td-markdown div h2').textContent.trim()).toBe('subtitle');
      expect(element.querySelector('td-markdown div code').textContent.trim()).toBe('pseudo code');
    });
  })));

  it('should render markup from dynamic content incorrectly', async(inject([], () => {

    let fixture: ComponentFixture<any> = TestBed.createComponent(TdMarkdownContentTestComponent);
    let component: TdMarkdownContentTestComponent = fixture.debugElement.componentInstance;
    component.content = `
    # another title
    
      ## subtitle`;
    let element: HTMLElement = fixture.nativeElement;

    expect(fixture.debugElement.query(By.css('td-markdown')).nativeElement.textContent.trim())
    .toBe('');
    expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeFalsy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('td-markdown div'))).toBeTruthy();
      expect(element.querySelector('td-markdown div h1').textContent.trim()).toBe('another title');
      expect(element.querySelector('td-markdown div h2')).toBeFalsy();
      expect(element.querySelector('td-markdown div').textContent.trim()).toContain('## subtitle');
    });
  })));

});

@Component({
  template: `
    <td-markdown>
    </td-markdown>`,
})
class TdMarkdownEmptyTestComponent {
}

@Component({
  template: `
    <td-markdown>
      # title

      * list item
    </td-markdown>`,
})
class TdMarkdownBasicTestComponent {
}

@Component({
  template: `
    <td-markdown [content]="content">
    </td-markdown>`,
})
class TdMarkdownContentTestComponent {
  content: string;
}
