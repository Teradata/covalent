import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';

export interface IUploadOptions {
  url: string;
  method: 'post' | 'put';
  file?: File;
  headers?: {[key: string]: string};
  formData?: FormData;
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

  constructor() {
    this._progressObservable = this._progressSubject.asObservable();
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
   * Will be depricated when angular fixes [Http] to allow [FormData] as body.
   */
  upload(options: IUploadOptions): Observable<any> {
    return new Observable<any>((subscriber: Subscriber<any>) => {
      let xhr: XMLHttpRequest = new XMLHttpRequest();
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
          progress = Math.round(event.loaded / event.total * 100);
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
        for (let key in options.headers) {
          xhr.setRequestHeader(key, options.headers[key]);
        }
      }

      xhr.send(formData);
    });
  }
}
