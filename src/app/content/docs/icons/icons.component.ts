import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
  animations: [slideInUpAnimation],
})
export class IconsComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
  iconsHtml: string = `
  <mat-icon>home</mat-icon> 
  `;
  svgIconsTypescript: string = `
  import { DomSanitizer } from '@angular/platform-browser'; 
  import { MatIconRegistry } from '@angular/material/icon';
  ...
  ...
  constructor(private _iconRegistry: MatIconRegistry, private _domSanitizer:DomSanitizer) { 
    this._iconRegistry.addSvgIconInNamespace('assets', 'sun',
    this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')); 
  } 
  `;
  svgIconsHtml: string = `
  <mat-icon svgIcon="assets:sun"></mat-icon>
  `;
}
