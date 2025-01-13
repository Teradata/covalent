import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInUpAnimation } from '../../app.animations';
import { TdFlavoredMarkdownComponent } from '@covalent/flavored-markdown';

@Component({
  selector: 'td-readme-loader',
  standalone: true,
  styleUrls: ['./readme-loader.component.scss'],
  templateUrl: './readme-loader.component.html',
  animations: [slideInUpAnimation],
  imports: [TdFlavoredMarkdownComponent],
})
export class TdReadmeLoaderComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;

  @Input() resourceUrl?: string;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.resourceUrl) {
      return;
    }

    this.resourceUrl = this._route.snapshot.data['resourceUrl'];
  }
}
