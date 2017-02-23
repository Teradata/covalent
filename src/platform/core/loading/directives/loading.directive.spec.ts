import {
  TestBed,
  inject,
  async,
  ComponentFixture,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { CovalentLoadingModule, LoadingMode, LoadingType, LoadingStrategy, TdLoadingService } from '../loading.module';
import { By } from '@angular/platform-browser';

describe('Directive: Loading', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TdLoadingDefaultTestComponent,
        TdLoadingBasicTestComponent,
        TdLoadingDuplicationTestComponent,
      ],
      imports: [
        CovalentLoadingModule.forRoot(),
      ],
    });
    TestBed.compileComponents();
  }));

  it('should render a spinner, replace strategy, primary color by default', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingDefaultTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('md-progress-spinner'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-primary'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-fullscreen'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        loadingService.resolve('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should render a progress bar, replace strategy, accent color', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBasicTestComponent);
      let component: TdLoadingBasicTestComponent = fixture.debugElement.componentInstance;
      component.name = 'name';
      component.type = LoadingType.Linear;
      component.color = 'accent';
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('md-progress-bar'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-accent'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-fullscreen'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        loadingService.resolve('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should render a spinner, overlay strategy, warn color', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBasicTestComponent);
      let component: TdLoadingBasicTestComponent = fixture.debugElement.componentInstance;
      component.name = 'name';
      component.type = LoadingType.Circular;
      component.color = 'warn';
      component.strategy = LoadingStrategy.Overlay;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
      .style.opacity).toBe('');
      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
      .style.display).toBe('');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
          .style.opacity).toBe('0');
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
        .style.display).toBe('none');
        loadingService.register('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('md-progress-spinner'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('.mat-warn'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('.td-fullscreen'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            setTimeout(() => {
              fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
                .style.opacity).toBe('');
                expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
                .style.display).toBe('');
                loadingService.resolve('name');
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  fixture.detectChanges();
                  setTimeout(() => {
                    fixture.whenStable().then(() => {
                      fixture.detectChanges();
                      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
                      .style.opacity).toBe('0');
                      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
                      .style.display).toBe('none');
                      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
                      expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
                      done();
                    });
                  }, 200);
                });
              });
            }, 200);
          });
        });
      });
    })();
  });

  it('should render a progress bar, overlay strategy, primary color, determinate mode and set values when shown', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBasicTestComponent);
      let component: TdLoadingBasicTestComponent = fixture.debugElement.componentInstance;
      component.name = 'name';
      component.type = LoadingType.Linear;
      component.color = 'primary';
      component.strategy = LoadingStrategy.Overlay;
      component.mode = LoadingMode.Determinate;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
      .style.opacity).toBe('');
      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
      .style.display).toBe('');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
          .style.opacity).toBe('0');
        expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
        .style.display).toBe('none');
        loadingService.register('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('md-progress-bar'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('.mat-primary'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('.td-fullscreen'))).toBeFalsy();
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            setTimeout(() => {
              fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
                .style.opacity).toBe('');
                expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
                .style.display).toBe('');
                loadingService.setValue('name', 20);
                fixture.detectChanges();
                expect(fixture.debugElement.query(By.css('md-progress-bar')).componentInstance._primaryTransform())
                .toEqual({transform: 'scaleX(0.2)'});

                loadingService.setValue('name', 50);
                fixture.detectChanges();
                expect(fixture.debugElement.query(By.css('md-progress-bar')).componentInstance._primaryTransform())
                .toEqual({transform: 'scaleX(0.5)'});

                loadingService.setValue('name', 100);
                fixture.detectChanges();
                expect(fixture.debugElement.query(By.css('md-progress-bar')).componentInstance._primaryTransform()).toEqual({transform: 'scaleX(1)'});
                loadingService.resolve('name');
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                  fixture.detectChanges();
                  setTimeout(() => {
                    fixture.whenStable().then(() => {
                      fixture.detectChanges();
                      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
                      .style.opacity).toBe('0');
                      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement)
                      .style.display).toBe('none');
                      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
                      expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
                      done();
                    });
                  }, 200);
                });
              });
            }, 200);
          });
        });
      });
    })();
  });

  it('should render fail to create component without a name and throw error', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBasicTestComponent);
      expect(function(): void {
        fixture.detectChanges();
      }).toThrowError();
      done();
    })();
  });

  it('should render fail to create component because of duplicate name', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingDuplicationTestComponent);
      expect(function(): void {
        fixture.detectChanges();
      }).toThrowError();
      done();
    })();
  });
});

@Component({
  selector: 'td-loading-default-test',
  template: `
  <template tdLoading="name">
    <div class="content"></div>
  </template>
  `,
})
class TdLoadingDefaultTestComponent {

}

@Component({
  selector: 'td-loading-basic-test',
  template: `
  <template [tdLoading]="name" [tdLoadingType]="type" [tdLoadingMode]="mode" [tdLoadingStrategy]="strategy" [tdLoadingColor]="color">
    <div class="content"></div>
  </template>
  `,
})
class TdLoadingBasicTestComponent {
  name: string;
  type: LoadingType;
  mode: LoadingMode;
  strategy: LoadingStrategy;
  color: string;

}

@Component({
  selector: 'td-loading-duplication-test',
  template: `
  <template tdLoading="name1">
    <div class="content"></div>
  </template>
  <template tdLoading="name1">
    <div class="content"></div>
  </template>
  `,
})
class TdLoadingDuplicationTestComponent {

}
