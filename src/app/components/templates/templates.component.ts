import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

import { Observable } from 'rxjs/Observable';

import { InternalDocsService, ITemplate } from '../../services';

@Component({
  selector: 'app-templates',
  styleUrls: ['./templates.component.scss'],
  templateUrl: './templates.component.html',
})
export class TemplatesComponent {

  templatesObs: Observable<ITemplate[]>;

  constructor(public media: TdMediaService,
              private _changeDetectorRef: ChangeDetectorRef,
              private _internalDocsService: InternalDocsService) {
    this.templatesObs = this._internalDocsService.queryTemplates();
  }
}
