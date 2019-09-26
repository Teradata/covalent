import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-readme-loader',
  styleUrls: ['./readme-loader.component.scss'],
  templateUrl: './readme-loader.component.html',
})
export class TdReadmeLoaderComponent implements OnInit {
  @Input() resourceUrl: string;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.resourceUrl) {
      return;
    }

    this.resourceUrl = this._route.snapshot.data.resourceUrl;
  }
}
