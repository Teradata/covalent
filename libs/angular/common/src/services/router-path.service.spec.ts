import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterPathService } from './router-path.service';

@Component({
  selector: 'td-fake',
  template: `
    <router-outlet></router-outlet>
    <div>fake</div>
  `,
  imports: [RouterOutlet],
})
export class FakeComponent {}

describe('Service: RouterPath', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: FakeComponent },
          { path: 'foo', component: FakeComponent },
        ]),
        FakeComponent
      ],
      providers: [RouterPathService],
    });
    TestBed.compileComponents();
  }));

  it('route to new path and check that getPreviousRoute was set correctly', waitForAsync(
    inject(
      [Router, RouterPathService],
      (router: Router, routerPathService: RouterPathService) => {
        const fixture = TestBed.createComponent(FakeComponent);

        // navigate to /foo then navigate to /
        // which will set previous route to /foo
        router.navigate(['/foo']);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          router.navigate(['/']);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            // have to use setTimeout so this gets pushed on end of stack
            // and event doesn't happen before
            setTimeout(() => {
              expect(routerPathService.getPreviousRoute()).toBe('/foo');
            });
          });
        });
      }
    )
  ));
});
