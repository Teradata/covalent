import { Component, OnInit, NgZone, OnDestroy, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../../app.animations';
import { Subscription } from 'rxjs/Subscription';

import { TdMediaService, TdJelloAnimation } from '../../../../platform/core';

@Component({
  selector: 'media-demo',
  styleUrls: ['./media.component.scss' ],
  templateUrl: './media.component.html',
  animations: [
    TdJelloAnimation(),
    slideInDownAnimation,
  ],
})
export class MediaDemoComponent implements OnInit, OnDestroy {

  private _subcriptions: Subscription[] = [];

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  mediaDemo: any[] = [{
    query: 'xs',
    value: false,
  }, {
    query: 'gt-xs',
    value: false,
  }, {
    query: 'sm',
    value: false,
  }, {
    query: 'gt-sm',
    value: false,
  }, {
    query: 'md',
    value: false,
  }, {
    query: 'gt-md',
    value: false,
  }, {
    query: 'lg',
    value: false,
  }, {
    query: 'gt-lg',
    value: false,
  }, {
    query: 'xl',
    value: false,
  }, {
    query: 'landscape',
    value: false,
  }, {
    query: 'portrait',
    value: false,
  }, {
    query: 'print',
    value: false,
  }, {
    query: '(max-width: 800px)',
    value: false,
  }, {
    query: '(min-width: 700px)',
    value: false,
  }];

  mediaServiceMethods: Object[] = [{
    description: `Used to evaluate whether a given media query is true or false given the
                  current device's screen / window size.`,
    name: 'query',
    type: 'function(query: string)',
  }, {
    description: `Registers a media query and returns an [Observable] that will re-evaluate and
                  return if the given media query matches on window resize.`,
    name: 'registerQuery',
    type: 'function(query: string)',
  }];

  mediaBreakpoints: Object[] = [{
    breakpoint: 'xs',
    query: '(max-width: 599px)',
  }, {
    breakpoint: 'gt-xs',
    query: '(min-width: 600px)',
  }, {
    breakpoint: 'sm',
    query: '(min-width: 600px) and (max-width: 959px)',
  }, {
    breakpoint: 'gt-sm',
    query: '(min-width: 960px)',
  }, {
    breakpoint: 'md',
    query: '(min-width: 960px) and (max-width: 1279px)',
  }, {
    breakpoint: 'gt-gm',
    query: '(min-width: 1280px)',
  }, {
    breakpoint: 'lg',
    query: '(min-width: 1280px) and (max-width: 1919px)',
  }, {
    breakpoint: 'gt-lg',
    query: '(min-width: 1920px)',
  }, {
    breakpoint: 'xl',
    query: '(min-width: 1920px)',
  }, {
    breakpoint: 'landscape',
    query: 'landscape',
  }, {
    breakpoint: 'portrait',
    query: 'portrait',
  }, {
    breakpoint: 'print',
    query: 'print',
  }];

  mediaAttrs: Object[] = [{
    description: `Media query used to evaluate screen/window size.
                  Toggles attributes, classes and styles if media query is matched.`,
    name: 'tdMediaToggle',
    type: 'string',
  }, {
    description: 'Attributes to be toggled when media query matches',
    name: 'mediaAttributes?',
    type: '{[key: string]: string}',
  }, {
    description: 'CSS Classes to be toggled when media query matches',
    name: 'mediaClasses?',
    type: 'string[]',
  }, {
    description: 'CSS Styles to be toggled when media query matches',
    name: 'mediaStyles?',
    type: '{[key: string]: string}',
  }];

  constructor(private _mediaService: TdMediaService, private _ngZone: NgZone) { }

  ngOnInit(): void {
    for (let demoObj of this.mediaDemo) {
      this._ngZone.run(() => {
        demoObj.value = this._mediaService.query(demoObj.query);
      });
      this._subcriptions.push(this._mediaService.registerQuery(demoObj.query).subscribe((matches: boolean) => {
        this._ngZone.run(() => {
          demoObj.value = matches;
        });
      }));
    }
  }

  ngOnDestroy(): void {
    this._subcriptions.forEach((subs: Subscription) => {
      subs.unsubscribe();
    });
  }

}
