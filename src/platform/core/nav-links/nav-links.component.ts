import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { tdCollapseAnimation, tdRotateAnimation } from '@covalent/core/common';

export interface ITdNavNode {
  label: string;
  show?: boolean;
}

export interface ITdNavHeader extends ITdNavNode {
  children: ITdLink[];
}

export interface ITdNavExpansion extends ITdNavHeader {
  collapsable?: boolean;
}

export interface ITdLink extends ITdNavNode {
  link: { href: string; openInNewTab?: boolean } | { routerLink: string | string[]; openInNewTab?: boolean };
  icon: { fontSet?: string; name: string };
}

let nextUniqueId: number = 0;

@Component({
  selector: 'td-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [tdCollapseAnimation, tdRotateAnimation],
})
export class TdNavLinksComponent {
  private _uniqueId: string = `td-nav-links-${++nextUniqueId}`;

  private _collapsedSet: Set<ITdNavExpansion> = new Set<ITdNavExpansion>();

  @Input() id: string = this._uniqueId;

  /**
   * Links to be rendered by component.
   */
  /* tslint:disable-next-line */
  @Input() links: Array<ITdNavExpansion | ITdNavHeader | ITdLink>;

  /**
   * Event trigger after a navigation click
   */
  @Output() afterNavigation: EventEmitter<ITdLink> = new EventEmitter<ITdLink>();

  _linkClicked(link: ITdLink): void {
    this.afterNavigation.emit(link);
  }

  _href(link: ITdLink): string {
    return link.link && (<{ href?: string }>link.link).href;
  }

  _routerLink(link: ITdLink): string | string[] {
    return link.link && (<{ routerLink?: string | string[] }>link.link).routerLink;
  }

  /**
   * @param link
   * Toggles expand/collapse state of expansion link.
   * Only applied when `collapsable` is true
   */
  _toggle(link: ITdNavExpansion): void {
    if (this._isCollapsed(link)) {
      this._collapsedSet.delete(link);
    } else {
      this._collapsedSet.add(link);
    }
  }

  /**
   * @param link
   * Returns true if the state of provided expansion link is collapsed.
   */
  _isCollapsed(link: ITdNavExpansion): boolean {
    return this._collapsedSet.has(link);
  }
}
