import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface ITdLinkGroup {
  name?: string;
  links: ITdLink[];
}

export interface ITdLink {
  label: string;
  linkTo: { href: string } | { routerLink?: string | any[] };
  openInNewTab?: boolean;
  icon?: string;
  show?: boolean;
  fontSet?: string;
}

let nextUniqueId: number = 0;

@Component({
  selector: 'td-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdNavLinksComponent {
  private _uniqueId: string = `td-nav-links-${++nextUniqueId}`;

  @Input() id: string = this._uniqueId;
  @Input() links: ITdLinkGroup[];
  @Output() afterClick: EventEmitter<ITdLink> = new EventEmitter<ITdLink>();

  linkClicked(link: ITdLink): void {
    this.afterClick.emit(link);
  }
}
