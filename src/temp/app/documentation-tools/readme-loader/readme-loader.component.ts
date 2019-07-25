import { Component, Input, HostBinding, Sanitizer, SecurityContext, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { catchError } from 'rxjs/operators';

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

  constructor(private _http: HttpClient,
              private _sanitizer: Sanitizer,
              private _changeDetectorRef: ChangeDetectorRef) {}

  async loadResource(resourceUrl: string): Promise<void> {
    try {
      this.content = await this._http.get(resourceUrl, {responseType: 'text'}).toPromise();
    } catch (error) {
      this.content = 'Warning: Resource could not be loaded.';
    } finally {
      this._changeDetectorRef.markForCheck();
    }
  }

}
