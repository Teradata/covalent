import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../../app.animations';

@Component({
  selector: 'directives-demo',
  styleUrls: ['./directives.component.scss'],
  templateUrl: './directives.component.html',
  animations: [slideInUpAnimation],
})
export class DirectivesComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;

  trim = '';
  val = '';
  toggleDiv = true;
  fadeDiv = true;
  directiveTypescript = `
  import { CovalentCommonModule } from '@covalent/core/common';
  @NgModule({
    imports: [
      CovalentCommonModule,
      ...
    ],
    ...
  })
  export class MyModule {} 
  `;
  fullscreenHtml = `
  <div tdFullScreen #myDirective="tdFullScreen"> 
    <button mat-button color="primary" (click)="myDirective.toggleFullScreen()">
      Fullscreen
    </button>
  </div> 
  `;
  autotrimHtml = `
  <mat-form-field> 
    <input matInput tdAutoTrim [(ngModel)]="trim" placeholder="This will be autotrimmed"/>
  </mat-form-field> 
  `;
  toggle(): void {
    this.toggleDiv = !this.toggleDiv;
  }
  fade(): void {
    this.fadeDiv = !this.fadeDiv;
  }
}
