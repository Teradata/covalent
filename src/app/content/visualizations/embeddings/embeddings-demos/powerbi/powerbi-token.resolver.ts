import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PowerBIService } from 'app/services';
import { Observable } from 'rxjs';

@Injectable()
export class PowerBITokenResolver implements Resolve<any> {
  public tokenData: any;

  constructor(private _service: PowerBIService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this._service.getPowerBIEmbedToken();
  }
}
