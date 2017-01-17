/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import {
  TestBed,
  inject,
  async,
} from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router, Routes, RoutesRecognized } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterPathService } from './router.path.service';

@Component({
  selector: 'fake',
  template: `<router-outlet></router-outlet><div>fake</div>`
})
export class FakeComponent implements OnInit {
    ngOnInit() {
        // do nothing
    }
}

describe('Service: RouterPath', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterTestingModule.withRoutes([
            {path: '', component: FakeComponent},
            {path: 'foo', component: FakeComponent},
          ]),
      ],
      declarations: [
           FakeComponent,
      ],
      providers: [
          RouterPathService,
      ],
    });
    TestBed.compileComponents();
  }));

  it('route to new path and check that getPreviousRoute was set correctly',
    async(inject([Router, RouterPathService],
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
                setTimeout(function() {
                    expect(routerPathService.getPreviousRoute()).toBe('/foo');
                });
            });  
        });
    }))
  );
});
