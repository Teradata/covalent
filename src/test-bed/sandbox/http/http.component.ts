import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { TestHttpService } from './test-http.service';

@Component({
  selector: 'http-demo',
  templateUrl: './http.component.html',
  providers: [
    TestHttpService,
  ],
})
export class HttpDemoComponent {

  private _queryParams: HttpParams = new HttpParams().set('q', 'repo:Teradata/covalent');

  response: any;
  response2: any;
  response3: any;

  constructor(private _http: TestHttpService) {
    
  }

  async httpTest(): Promise<void> {
    this.response = await this._http.getMappedResponse(this._queryParams).toPromise();
  }

  async httpTest2(): Promise<void> {
    this.response2 = await this._http.getParsedResponse(this._queryParams).toPromise();
  }

  async httpTest3(): Promise<void> {
    this.response3 = await this._http.getResponse(this._queryParams).toPromise();
  }

}
