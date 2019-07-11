import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-readme-loader',
  styleUrls: ['./readme-loader.component.scss'],
  templateUrl: './readme-loader.component.html',
})
export class TdReadmeLoaderComponent {

  @Input() resourceUrl: string;

}
