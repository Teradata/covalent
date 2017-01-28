import { Component, Input, HostBinding, Sanitizer, SecurityContext, ChangeDetectorRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'td-readme-loader',
  styleUrls: ['./readme-loader.component.scss'],
  templateUrl: './readme-loader.component.html',
})
export class TdReadmeLoaderComponent {

  @Input()
  set resourceUrl(resourceUrl: string) {
    if (resourceUrl) {
      this.loadResource(this._sanitizer.sanitize(SecurityContext.URL, resourceUrl));
    }
  }

  content: string;

  constructor(private _http: Http,
              private _sanitizer: Sanitizer,
              private _changeDetectorRef: ChangeDetectorRef) {}

  loadResource(resourceUrl: string): void {
    let errorString: string = 'Warning: Resource could not be loaded.';
    this._http.get(resourceUrl).subscribe((res: Response) => {
      try {
        this.content = res.text();
      } catch (e) {
        this.content = errorString;
      }
      this._changeDetectorRef.markForCheck();
    }, (error: Error) => {
      this.content = errorString;
    });
  }

}
