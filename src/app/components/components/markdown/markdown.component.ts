import { Component, HostBinding, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'markdown-demo',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
  animations: [slideInDownAnimation],
})
export class MarkdownDemoComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  content: string;

  constructor(private _http: Http) {}

  ngOnInit(): void {
    let errorString: string = 'Warning: Resource could not be loaded.';
    this._http.get('platform/markdown/README.md').subscribe((res: Response) => {
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
