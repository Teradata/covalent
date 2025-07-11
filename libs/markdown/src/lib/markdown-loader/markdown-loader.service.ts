import { Injectable, SecurityContext, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { isGithubHref, rawGithubHref } from '../markdown-utils/markdown-utils';

@Injectable()
export class TdMarkdownLoaderService {
  private _http = inject(HttpClient);
  private _sanitizer = inject(DomSanitizer);

  async load(url: string, httpOptions: object = {}): Promise<string> {
    const sanitizedUrl: string =
      this._sanitizer.sanitize(SecurityContext.URL, url) ?? '';
    let urlToGet: string = sanitizedUrl;
    if (isGithubHref(sanitizedUrl)) {
      urlToGet = rawGithubHref(sanitizedUrl);
    }

    const response: HttpResponse<string> | undefined = await this._http
      .get(urlToGet, {
        ...httpOptions,
        responseType: 'text',
        observe: 'response',
      })
      .toPromise();
    const contentType: string = response?.headers.get('Content-Type') ?? '';
    if (
      contentType.includes('text/plain') ||
      contentType.includes('text/markdown')
    ) {
      return response?.body ?? '';
    } else {
      throw Error(`${contentType} is not a handled content type`);
    }
  }
}
