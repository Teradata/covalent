import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'td-layout-nav',
  styleUrls: ['./layout-nav.component.scss'],
  templateUrl: './layout-nav.component.html',
  imports: [CommonModule, MatToolbar, MatIcon],
})
export class TdLayoutNavComponent {
  private _router = inject(Router, { optional: true });

  /**
   * toolbarTitle?: string
   *
   * Title set in toolbar.
   */
  @Input() toolbarTitle?: string;

  /**
   * icon?: string
   *
   * icon name to be displayed before the title
   */
  @Input() icon?: string;

  /**
   * logo?: string
   *
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input() logo?: string;

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, primary is used.
   */
  @Input() color?: 'accent' | 'primary' | 'warn';

  /**
   * navigationRoute?: string
   *
   * option to set the combined route for the icon, logo, and toolbarTitle.
   */
  @Input() navigationRoute?: string;

  /**
   * Checks if router was injected.
   */
  get routerEnabled(): boolean {
    return !!this._router && !!this.navigationRoute;
  }

  handleNavigationClick(): void {
    if (this.routerEnabled && this.navigationRoute) {
      this._router?.navigateByUrl(this.navigationRoute);
    }
  }
}
