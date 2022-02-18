import { Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IUploadExtras {
  headers?: { [name: string]: string | string[] };
  params?: { [param: string]: string | string[] };
}

@Injectable()
export class TdFileService {
  private _progressSubject: Subject<number> = new Subject<number>();
  private _progressObservable: Observable<number>;

  /**
   * Gets progress observable to keep track of the files being uploaded.
   * Needs to be supported by backend.
   */
  get progress(): Observable<number> {
    return this._progressObservable;
  }

  /**
   * Creates a new instance
   * @param _http the http client instance
   * @breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
   */
  constructor(@Optional() private readonly _http: HttpClient) {
    this._progressObservable = this._progressSubject.asObservable();
  }

  /**
   * Uploads a file to a URL.
   */
  send(
    url: string,
    method: string,
    body: File | FormData,
    { headers, params }: IUploadExtras = {}
  ): Observable<HttpEvent<any>> {
    if (!this._http) {
      throw new Error(
        'The HttpClient module needs to be imported at root module level'
      );
    }
    const req: HttpRequest<File | FormData> = new HttpRequest(
      method.toUpperCase(),
      url,
      body,
      {
        reportProgress: true,
        headers: new HttpHeaders(headers || {}),
        params: new HttpParams({ fromObject: params || {} }),
      }
    );
    return this._http
      .request(req)
      .pipe(tap((event: HttpEvent<any>) => this.handleEvent(event)));
  }

  private handleEvent<T = any>(event: HttpEvent<T>): void {
    switch (event.type) {
      case HttpEventType.Sent:
        this._progressSubject.next(0);
        break;
      case HttpEventType.UploadProgress:
        this._progressSubject.next(
          Math.round((100 * event.loaded) / (event.total ?? 0))
        );
        break;
      case HttpEventType.Response:
        this._progressSubject.next(100);
        break;
      default:
        break;
    }
  }
}
