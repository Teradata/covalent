import { TdMediaService } from '@covalent/core/media';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  constructor(public media: TdMediaService) {}

  ngOnInit(): void {}
}
