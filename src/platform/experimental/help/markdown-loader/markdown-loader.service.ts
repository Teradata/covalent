import { Injectable, Sanitizer, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MarkdownLoaderService {
  constructor(private _http: HttpClient, private _sanitizer: Sanitizer) {}

  async load(url: string, httpOptions: object = {}): Promise<string> {
    const sanitizedUrl: string = this._sanitizer.sanitize(SecurityContext.URL, url);
    let markdown: string;
    try {
      markdown = await this._http.get(sanitizedUrl, { ...httpOptions, responseType: 'text' }).toPromise();
    } catch (error) {
      const errorMessage: string = `Error: Resource with url "${sanitizedUrl}" could not be loaded.`;
      markdown = errorMessage;
      throw Error(errorMessage);
    } finally {
      return markdown;
    }
  }
}
