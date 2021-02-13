import { TestBed, inject, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { CovalentLoadingModule, LoadingMode, LoadingType, LoadingStrategy, TdLoadingService } from '../';
import { catchError } from 'rxjs/operators';

describe('Directive: Loading', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          TdLoadingDefaultTestComponent,
          TdLoadingBasicTestComponent,
          TdLoadingDuplicationTestComponent,
          TdLoadingStarUntilAsyncTestComponent,
          TdLoadingNamedErrorStarUntilAsyncTestComponent,
          TdLoadingBooleanTemplateUntilTestComponent,
        ],
        imports: [NoopAnimationsModule, CovalentLoadingModule],
      });
      TestBed.compileComponents();
    }),
  );

  it('should render a spinner, replace strategy, primary color by default', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingDefaultTestComponent);
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-progress-spinner'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-primary'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-fullscreen'))).toBeFalsy();
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

  it('should render a spinner, replace strategy twice', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingDefaultTestComponent);
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
            expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
            loadingService.resolve('name');
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
              expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
              done();
            });
          });
        });
      });
    })();
  });

  it('should render a progress bar, replace strategy, accent color', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBasicTestComponent);
      const component: TdLoadingBasicTestComponent = fixture.debugElement.componentInstance;
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
        expect(fixture.debugElement.query(By.css('mat-progress-bar'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-accent'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.td-fullscreen'))).toBeFalsy();
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

  it('should render a spinner, overlay strategy, warn color', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBasicTestComponent);
      const component: TdLoadingBasicTestComponent = fixture.debugElement.componentInstance;
      component.name = 'name';
      component.type = LoadingType.Circular;
      component.color = 'warn';
      component.strategy = LoadingStrategy.Overlay;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement).style.opacity).toBe('0');
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-progress-spinner'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-warn'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-fullscreen'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement).style.opacity).toBe('');
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement).style.display).toBe('');
          loadingService.resolve('name');
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement).style.opacity).toBe(
              '0',
            );
            expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
            done();
          });
        });
      });
    })();
  });

  it('should render a progress bar, overlay strategy, primary color, determinate mode and set values when shown', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBasicTestComponent);
      const component: TdLoadingBasicTestComponent = fixture.debugElement.componentInstance;
      component.name = 'name';
      component.type = LoadingType.Linear;
      component.color = 'primary';
      component.strategy = LoadingStrategy.Overlay;
      component.mode = LoadingMode.Determinate;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
      expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement).style.opacity).toBe('0');
      loadingService.register('name');
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-progress-bar'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-primary'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-overlay'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.td-fullscreen'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement).style.opacity).toBe('');
          expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement).style.display).toBe('');

          loadingService.setValue('name', 20);
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('mat-progress-bar')).componentInstance._primaryTransform()).toEqual({
            transform: 'scale3d(0.2, 1, 1)',
          });

          loadingService.setValue('name', 50);
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('mat-progress-bar')).componentInstance._primaryTransform()).toEqual({
            transform: 'scale3d(0.5, 1, 1)',
          });

          loadingService.setValue('name', 100);
          fixture.detectChanges();
          expect(fixture.debugElement.query(By.css('mat-progress-bar')).componentInstance._primaryTransform()).toEqual({
            transform: 'scale3d(1, 1, 1)',
          });

          loadingService.resolve('name');
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect((<HTMLElement>fixture.debugElement.query(By.css('.td-loading')).nativeElement).style.opacity).toBe(
              '0',
            );
            expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
            done();
          });
        });
      });
    })();
  });

  it('should render fail to create component without a name and throw error', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBasicTestComponent);
      expect(function (): void {
        fixture.detectChanges();
      }).toThrowError();
      done();
    })();
  });

  it('should render fail to create component because of duplicate name', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingDuplicationTestComponent);
      expect(function (): void {
        fixture.detectChanges();
      }).toThrowError();
      done();
    })();
  });

  it('should render a circle loading while the observable returns a value using until syntax and async pipe and display it', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingStarUntilAsyncTestComponent);
      const component: TdLoadingStarUntilAsyncTestComponent = fixture.debugElement.componentInstance;
      component.createObservable();
      component.color = 'accent';
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      expect((<HTMLElement>fixture.debugElement.query(By.css('.content')).nativeElement).textContent).not.toContain(
        'success',
      );
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-progress-spinner'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.mat-accent'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.content'))).toBeFalsy();
        component.sendResult('success');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
          expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
          expect((<HTMLElement>fixture.debugElement.query(By.css('.content')).nativeElement).textContent).toContain(
            'success',
          );
          done();
        });
      });
    })();
  });

  it('should render a circle loading while the observable and resolve it with an error', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingNamedErrorStarUntilAsyncTestComponent);
      const component: TdLoadingNamedErrorStarUntilAsyncTestComponent = fixture.debugElement.componentInstance;
      component.createObservable();
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-progress-spinner'))).toBeTruthy();
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

  it('should render a circle loading when false and remove it when true with boolean until syntax', (done: DoneFn) => {
    inject([], () => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingBooleanTemplateUntilTestComponent);
      const component: TdLoadingBooleanTemplateUntilTestComponent = fixture.debugElement.componentInstance;
      component.loading = true;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.content'))).toBeTruthy();
      expect(fixture.debugElement.query(By.css('td-loading'))).toBeFalsy();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('td-loading'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('mat-progress-spinner'))).toBeTruthy();
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

  it('should inject the content once even if we register/resolve quickly', (done: DoneFn) => {
    inject([TdLoadingService], (loadingService: TdLoadingService) => {
      const fixture: ComponentFixture<any> = TestBed.createComponent(TdLoadingDefaultTestComponent);
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
        expect(fixture.debugElement.queryAll(By.css('.content')).length).not.toBeGreaterThan(1);
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
    <ng-template tdLoading="name1">
      <div class="content"></div>
    </ng-template>
    <ng-template tdLoading="name1">
      <div class="content"></div>
    </ng-template>
  `,
})
class TdLoadingDuplicationTestComponent {}

@Component({
  selector: 'td-loading-star-until-async-test',
  template: `
    <div *tdLoading="let item; until: observable | async; color: color">
      <div class="content">{{ item }}</div>
    </div>
  `,
})
class TdLoadingStarUntilAsyncTestComponent {
  private _subject: Subject<any> = new Subject<any>();
  observable: Observable<any>;
  color: string;

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
    <div *tdLoading="'name1'; let item; until: observable | async; color: color">
      <div class="content">{{ item }}</div>
    </div>
  `,
})
class TdLoadingNamedErrorStarUntilAsyncTestComponent {
  private _subject: Subject<any> = new Subject<any>();
  observable: Observable<any>;

  constructor(private _loadingService: TdLoadingService) {}

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
})
class TdLoadingBooleanTemplateUntilTestComponent {
  loading: boolean = false;
}
