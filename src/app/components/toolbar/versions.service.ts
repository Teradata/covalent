import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const GITHUB_URL: string = 'https://raw.githubusercontent.com/Teradata/covalent';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private _http: HttpClient) {}

  getVersions(): Observable<string[]> {
    return this._http.get<string[]>(GITHUB_URL + '/develop/versions.json');
  }
}
