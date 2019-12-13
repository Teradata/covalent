import { Component, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'app-docs',
  styleUrls: ['./docs.component.scss'],
  templateUrl: './docs.component.html',
})
export class DocsComponent {
  constructor(private _changeDetectorRef: ChangeDetectorRef, public media: TdMediaService) {}
}
