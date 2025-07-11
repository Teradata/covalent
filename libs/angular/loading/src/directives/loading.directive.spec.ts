import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { Component, inject as inject_1 } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { catchError } from 'rxjs/operators';
import { CovalentLoadingModule } from '../loading.module';
import { TdLoadingService } from '../services/loading.service';
import {
  LoadingMode,
  LoadingType,
  LoadingStrategy,
} from '../loading.component';
import { MatProgressBar } from '@angular/material/progress-bar';
import { TdLoadingDirective } from './loading.directive';
import { AsyncPipe } from '@angular/common';

describe('Directive: Loading', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentLoadingModule,
        TdLoadingDefaultTestComponent,
        TdLoadingBasicTestComponent,
        TdLoadingDuplicationTestComponent,
        TdLoadingStarUntilAsyncTestComponent,
        TdLoadingNamedErrorStarUntilAsyncTestComponent,
        TdLoadingBooleanTemplateUntilTestComponent,
      ],
      providers: [provideNoopAnimations()],
    });
    TestBed.compileComponents();
  }));

  it('should render a spinner, replace strategy, primary color by default', (done) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture = TestBed.createComponent(TdLoadingDefaultTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('mat-progress-spinner')),
        ).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-primary'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeFalsy();
        expect(
          fixture.debugElement.query(By.css('.td-fullscreen')),
        ).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        loadingService.resolve('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should render a spinner, replace strategy twice', (done) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture = TestBed.createComponent(TdLoadingDefaultTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        loadingService.resolve('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          loadingService.register('name');
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(
              fixture.debugElement.query(By.css('td-loading')),
            ).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
            loadingService.resolve('name');
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(
                fixture.debugElement.query(By.css('.content')),
              ).toBeTruthy();
              expect(
                fixture.debugElement.query(By.css('td-loading')),
              ).toBeFalsy();
              done();
            });
          });
        });
      });
    })();
  });

  it('should render a progress bar, replace strategy, accent color', (done) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture = TestBed.createComponent(TdLoadingBasicTestComponent);
      const component: TdLoadingBasicTestComponent =
        fixture.debugElement.componentInstance;
      component.name = 'name';
      component.type = LoadingType.Linear;
      component.color = 'accent';
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('mat-progress-bar')),
        ).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-accent'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeFalsy();
        expect(
          fixture.debugElement.query(By.css('.td-fullscreen')),
        ).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        loadingService.resolve('name');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should render a spinner, overlay strategy, warn color', (done) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture = TestBed.createComponent(TdLoadingBasicTestComponent);
      const component: TdLoadingBasicTestComponent =
        fixture.debugElement.componentInstance;
      component.name = 'name';
      component.type = LoadingType.Circular;
      component.color = 'warn';
      component.strategy = LoadingStrategy.Overlay;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
      expect(
        (<HTMLElement>(
          fixture.debugElement.query(By.css('.td-loading')).nativeElement
        )).style.opacity,
      ).toBe('0');
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('mat-progress-spinner')),
        ).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-warn'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('.td-fullscreen')),
        ).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            (<HTMLElement>(
              fixture.debugElement.query(By.css('.td-loading')).nativeElement
            )).style.opacity,
          ).toBe('');
          expect(
            (<HTMLElement>(
              fixture.debugElement.query(By.css('.td-loading')).nativeElement
            )).style.display,
          ).toBe('');
          loadingService.resolve('name');
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(
              (<HTMLElement>(
                fixture.debugElement.query(By.css('.td-loading')).nativeElement
              )).style.opacity,
            ).toBe('0');
            expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
            expect(
              fixture.debugElement.query(By.css('td-loading')),
            ).toBeTruthy();
            done();
          });
        });
      });
    })();
  });

  it('should render a progress bar, overlay strategy, primary color, determinate mode and set values when shown', (done) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture = TestBed.createComponent(TdLoadingBasicTestComponent);
      const component: TdLoadingBasicTestComponent =
        fixture.debugElement.componentInstance;
      component.name = 'name';
      component.type = LoadingType.Linear;
      component.color = 'primary';
      component.strategy = LoadingStrategy.Overlay;
      component.mode = LoadingMode.Determinate;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
      expect(
        (<HTMLElement>(
          fixture.debugElement.query(By.css('.td-loading')).nativeElement
        )).style.opacity,
      ).toBe('0');
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('mat-progress-bar')),
        ).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-primary'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('.td-fullscreen')),
        ).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(
            (<HTMLElement>(
              fixture.debugElement.query(By.css('.td-loading')).nativeElement
            )).style.opacity,
          ).toBe('');
          expect(
            (<HTMLElement>(
              fixture.debugElement.query(By.css('.td-loading')).nativeElement
            )).style.display,
          ).toBe('');

          loadingService.setValue('name', 20);
          fixture.detectChanges();
          expect(
            fixture.debugElement
              .query(By.css('mat-progress-bar'))
              .componentInstance._getPrimaryBarTransform(),
          ).toEqual('scaleX(0.2)');

          loadingService.setValue('name', 50);
          fixture.detectChanges();
          expect(
            fixture.debugElement
              .query(By.directive(MatProgressBar))
              .componentInstance._getPrimaryBarTransform(),
          ).toEqual('scaleX(0.5)');

          loadingService.setValue('name', 100);
          fixture.detectChanges();
          expect(
            fixture.debugElement
              .query(By.css('mat-progress-bar'))
              .componentInstance._getPrimaryBarTransform(),
          ).toEqual('scaleX(1)');

          loadingService.resolve('name');
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(
              (<HTMLElement>(
                fixture.debugElement.query(By.css('.td-loading')).nativeElement
              )).style.opacity,
            ).toBe('0');
            expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
            expect(
              fixture.debugElement.query(By.css('td-loading')),
            ).toBeTruthy();
            done();
          });
        });
      });
    })();
  });

  it('should render fail to create component without a name and throw error', (done) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture = TestBed.createComponent(TdLoadingBasicTestComponent);
      expect(function (): void {
        fixture.detectChanges();
      }).toThrowError();
      done();
    })();
  });

  it('should render fail to create component because of duplicate name', (done) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture = TestBed.createComponent(
        TdLoadingDuplicationTestComponent,
      );
      expect(function (): void {
        fixture.detectChanges();
      }).toThrowError();
      done();
    })();
  });

  it('should render a circle loading while the observable returns a value using until syntax and async pipe and display it', (done) => {
    inject([], () => {
      const fixture = TestBed.createComponent(
        TdLoadingStarUntilAsyncTestComponent,
      );
      const component: TdLoadingStarUntilAsyncTestComponent =
        fixture.debugElement.componentInstance;
      component.createObservable();
      component.color = 'accent';
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      expect(
        (<HTMLElement>(
          fixture.debugElement.query(By.css('.content')).nativeElement
        )).textContent,
      ).not.toContain('success');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('mat-progress-spinner')),
        ).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-accent'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        component.sendResult('success');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          expect(
            (<HTMLElement>(
              fixture.debugElement.query(By.css('.content')).nativeElement
            )).textContent,
          ).toContain('success');
          done();
        });
      });
    })();
  });

  it('should render a circle loading while the observable and resolve it with an error', (done) => {
    inject([], () => {
      const fixture = TestBed.createComponent(
        TdLoadingNamedErrorStarUntilAsyncTestComponent,
      );
      const component: TdLoadingNamedErrorStarUntilAsyncTestComponent =
        fixture.debugElement.componentInstance;
      component.createObservable();
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('mat-progress-spinner')),
        ).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-primary'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        component.sendError('error');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should render a circle loading when false and remove it when true with boolean until syntax', (done) => {
    inject([], () => {
      const fixture = TestBed.createComponent(
        TdLoadingBooleanTemplateUntilTestComponent,
      );
      const component: TdLoadingBooleanTemplateUntilTestComponent =
        fixture.debugElement.componentInstance;
      component.loading = true;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(
          fixture.debugElement.query(By.css('mat-progress-spinner')),
        ).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-primary'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        component.loading = false;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          done();
        });
      });
    })();
  });

  it('should inject the content once even if we register/resolve quickly', (done) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture = TestBed.createComponent(TdLoadingDefaultTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      loadingService.register('name');
      fixture.detectChanges();
      loadingService.resolve('name');
      fixture.detectChanges();
      loadingService.register('name');
      fixture.detectChanges();
      loadingService.resolve('name');
      fixture.detectChanges();
      loadingService.register('name');
      fixture.detectChanges();
      loadingService.resolve('name');
      fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.queryAll(By.css('.content')).length,
        ).not.toBeGreaterThan(1);
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
        done();
      });
    })();
  });
});

@Component({
  selector: 'td-loading-default-test',
  template: `
    <ng-template tdLoading="name">
      <div class="content"></div>
    </ng-template>
  `,
  imports: [TdLoadingDirective],
})
class TdLoadingDefaultTestComponent {}

@Component({
  selector: 'td-loading-basic-test',
  template: `
    <ng-template
      [tdLoading]="name"
      [tdLoadingType]="type"
      [tdLoadingMode]="mode"
      [tdLoadingStrategy]="strategy"
      [tdLoadingColor]="color"
    >
      <div class="content"></div>
    </ng-template>
  `,
  imports: [TdLoadingDirective],
})
class TdLoadingBasicTestComponent {
  name!: string;
  type!: LoadingType;
  mode!: LoadingMode;
  strategy!: LoadingStrategy;
  color!: string;
}

@Component({
  selector: 'td-loading-duplication-test',
  template: `
    <ng-template tdLoading="name1">
      <div class="content"></div>
    </ng-template>
    <ng-template tdLoading="name1">
      <div class="content"></div>
    </ng-template>
  `,
  imports: [TdLoadingDirective],
})
class TdLoadingDuplicationTestComponent {}

@Component({
  selector: 'td-loading-star-until-async-test',
  template: `
    <div *tdLoading="let item; until: observable | async; color: color">
      <div class="content">{{ item }}</div>
    </div>
  `,
  imports: [TdLoadingDirective, AsyncPipe],
})
class TdLoadingStarUntilAsyncTestComponent {
  private _subject: Subject<any> = new Subject<any>();
  observable!: Observable<any>;
  color!: string;

  createObservable(): void {
    this.observable = this._subject.asObservable();
  }

  sendResult(result: any): void {
    this._subject.next(result);
  }
}

@Component({
  selector: 'td-loading-named-error-star-until-async-test',
  template: `
    <div
      *tdLoading="'name1'; let item; until: observable | async; color: color"
    >
      <div class="content">{{ item }}</div>
    </div>
  `,
  imports: [TdLoadingDirective, AsyncPipe],
})
class TdLoadingNamedErrorStarUntilAsyncTestComponent {
  private _loadingService = inject_1(TdLoadingService);

  private _subject: Subject<any> = new Subject<any>();
  observable!: Observable<any>;

  createObservable(): void {
    this.observable = this._subject.asObservable().pipe(
      catchError(() => {
        return of('error');
      }),
    );
  }

  sendError(error: any): void {
    this._subject.error(error);
  }
}

@Component({
  selector: 'td-loading-boolean-template-until-test',
  template: `
    <ng-template tdLoading [tdLoadingUntil]="!loading">
      <div class="content"></div>
    </ng-template>
  `,
  imports: [TdLoadingDirective],
})
class TdLoadingBooleanTemplateUntilTestComponent {
  loading = false;
}
