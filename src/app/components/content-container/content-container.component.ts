import { TdMediaService } from '@covalent/core/media';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent {
  constructor(public media: TdMediaService) {}
}
