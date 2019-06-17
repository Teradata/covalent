import { Injectable, Sanitizer, SecurityContext } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { isGithubHref, rawGithubHref } from './markdown-utils';

@Injectable({
  providedIn: 'root',
})
export class MarkdownLoaderService {
  constructor(private _http: HttpClient, private _sanitizer: Sanitizer) {}

  async load(url: string, httpOptions: object = {}): Promise<string> {
    const sanitizedUrl: string = this._sanitizer.sanitize(SecurityContext.URL, url);
    let urlToGet: string = sanitizedUrl;
    if (isGithubHref(sanitizedUrl)) {
      urlToGet = rawGithubHref(sanitizedUrl);
    }

    const response: HttpResponse<string> = await this._http
      .get(urlToGet, { ...httpOptions, responseType: 'text', observe: 'response' })
      .toPromise();
    const contentType: string = response.headers.get('Content-Type');
    if (contentType.includes('text/plain') || contentType.includes('text/markdown')) {
      return response.body;
    } else {
      throw Error(`${contentType} is not a handled content type`);
    }
  }
}
