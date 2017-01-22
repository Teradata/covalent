import { Component, HostBinding, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'highlight-demo',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
  animations: [slideInDownAnimation],
})
export class HighlightDemoComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  content: string;

  constructor(private _http: Http) {}

  ngOnInit(): void {
    let errorString: string = 'Warning: Resource could not be loaded.';
    this._http.get('platform/highlight/README.md').subscribe((res: Response) => {
      try {
        this.content = res.text();
      } catch (e) {
        this.content = errorString;
      }
    }, (error: Error) => {
      this.content = errorString;
    });
  }

}
