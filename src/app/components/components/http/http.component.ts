import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'http-demo',
  styleUrls: ['./http.component.scss' ],
  templateUrl: './http.component.html',
  animations: [slideInDownAnimation],
})
export class HttpDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  interceptorServiceMethods: Object[] = [{
    description: `Uses underlying @angular [http] to request a DELETE method to a URL,
                  executing the interceptors as part of the request pipeline.`,
    name: 'delete',
    type: 'function(url: string, options: RequestOptionsArgs)',
  }, {
    description: `Uses underlying @angular [http] to request a GET method to a URL,
                  executing the interceptors as part of the request pipeline.`,
    name: 'get',
    type: 'function(url: string, options: RequestOptionsArgs)',
  }, {
    description: `Uses underlying @angular [http] to request a HEAD method to a URL,
                  executing the interceptors as part of the request pipeline.`,
    name: 'head',
    type: 'function(url: string, options: RequestOptionsArgs)',
  }, {
    description: `Uses underlying @angular [http] to request a PATCH method to a URL,
                  executing the interceptors as part of the request pipeline.`,
    name: 'patch',
    type: 'function(url: string, data: any, options: RequestOptionsArgs)',
  }, {
    description: `Uses underlying @angular [http] to request a POST method to a URL,
                  executing the interceptors as part of the request pipeline.`,
    name: 'post',
    type: 'function(url: string, data: any, options: RequestOptionsArgs)',
  }, {
    description: `Uses underlying @angular [http] to request a PUT method to a URL,
                  executing the interceptors as part of the request pipeline.`,
    name: 'put',
    type: 'function(url: string, data: any, options: RequestOptionsArgs)',
  }, {
    description: `Uses underlying @angular [http] to request a generic request to a URL,
                  executing the interceptors as part of the request pipeline.`,
    name: 'request',
    type: 'function(url: string | Request, options: RequestOptionsArgs)',
  }];

  restServiceMethods: Object[] = [{
    description: `Creates a GET request to the generated endpoint URL.`,
    name: 'query',
    type: 'function(query?: IRestQuery, transform?: IRestTransform)',
  }, {
    description: `Creates a GET request to the generated endpoint URL, adding the ID at the end.`,
    name: 'get',
    type: 'function(id: string | number, transform?: IRestTransform)',
  }, {
    description: `Creates a POST request to the generated endpoint URL.`,
    name: 'create',
    type: 'function(obj: T, transform?: IRestTransform)',
  }, {
    description: `Creates a PATCH request to the generated endpoint URL, adding the ID at the end.`,
    name: 'update',
    type: 'function(id: string | number, obj: T, transform?: IRestTransform)',
  }, {
    description: `Creates a DELETE request to the generated endpoint URL, adding the ID at the end.`,
    name: 'delete',
    type: 'function(id: string | number, transform?: IRestTransform)',
  }, {
    description: `Builds the endpoint URL with the configured properties and arguments passed in the method.`,
    name: 'buildUrl',
    type: 'function(id?: string | number, query?: IRestQuery)',
  }];

}
