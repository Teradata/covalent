import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, Subscriber } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * @deprecated should be removed in favor of IUploadInit
 * @breaking-change 3.0.0
 */
export interface IUploadOptions {
  url: string;
  method: 'post' | 'put';
  file?: File;
  headers?: { [key: string]: string };
  formData?: FormData;
}

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
   * Uploads a file to URL.
   */
  send(
    url: string,
    method: string,
    body: File | FormData,
    { headers, params }: IUploadExtras = {},
  ): Observable<HttpEvent<any>> {
    if (!this._http) {
      throw new Error('The HttpClient module needs to be imported at root module level');
    }
    const req: HttpRequest<File | FormData> = new HttpRequest(method.toUpperCase(), url, body, {
      reportProgress: true,
      headers: new HttpHeaders(headers || {}),
      params: new HttpParams({ fromObject: params || {} }),
    });
    return this._http.request(req).pipe(tap((event: HttpEvent<any>) => this.handleEvent(event)));
  }

  /**
   * params:
   * - options: IUploadOptions {
   *     url: string,
   *     method: 'post' | 'put',
   *     file?: File,
   *     headers?: {[key: string]: string},
   *     formData?: FormData
   * }
   *
   * Uses underlying [XMLHttpRequest] to upload a file to a url.
   * @deprecated use send instead
   * @breaking-change 3.0.0
   */
  upload(options: IUploadOptions): Observable<any> {
    return new Observable<any>((subscriber: Subscriber<any>) => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      let formData: FormData = new FormData();

      if (options.file !== undefined) {
        formData.append('file', options.file);
      } else if (options.formData !== undefined) {
        formData = options.formData;
      } else {
        return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
      }

      xhr.upload.onprogress = (event: ProgressEvent) => {
        let progress: number = 0;
        if (event.lengthComputable) {
          progress = Math.round((event.loaded / event.total) * 100);
        }
        this._progressSubject.next(progress);
      };

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            subscriber.next(xhr.response);
            subscriber.complete();
          } else {
            subscriber.error(xhr.response);
          }
        }
      };

      xhr.open(options.method, options.url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      if (options.headers) {
        for (const key of Object.keys(options.headers)) {
          xhr.setRequestHeader(key, options.headers[key]);
        }
      }

      xhr.send(formData);
    });
  }

  private handleEvent<T = any>(event: HttpEvent<T>): void {
    switch (event.type) {
      case HttpEventType.Sent:
        this._progressSubject.next(0);
        break;
      case HttpEventType.UploadProgress:
        this._progressSubject.next(Math.round((100 * event.loaded) / event.total));
        break;
      case HttpEventType.Response:
        this._progressSubject.next(100);
        break;
      default:
        break;
    }
  }
}
