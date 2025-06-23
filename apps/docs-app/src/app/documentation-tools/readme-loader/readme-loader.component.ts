import { Component, Input, OnInit, HostBinding, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInUpAnimation } from '../../app.animations';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';

@Component({
  selector: 'td-readme-loader',
  standalone: true,
  styleUrls: ['./readme-loader.component.scss'],
  templateUrl: './readme-loader.component.html',
  animations: [slideInUpAnimation],
  imports: [CovalentFlavoredMarkdownModule],
})
export class TdReadmeLoaderComponent implements OnInit {
  private _route = inject(ActivatedRoute);

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;

  @Input() resourceUrl?: string;

  ngOnInit(): void {
    if (this.resourceUrl) {
      return;
    }

    this.resourceUrl = this._route.snapshot.data['resourceUrl'];
  }
}
