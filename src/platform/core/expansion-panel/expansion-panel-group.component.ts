import {
  Component,
  Renderer2,
  ElementRef,
  QueryList,
  ContentChildren,
  AfterContentInit,
  Input,
} from '@angular/core';
import { TdExpansionPanelComponent } from './expansion-panel.component';

@Component({
  selector: 'td-expansion-panel-group',
  styleUrls: ['./expansion-panel-group.component.scss'],
  templateUrl: './expansion-panel-group.component.html',
})
export class TdExpansionPanelGroupComponent implements AfterContentInit {
  private _multi: boolean = false;

  private _lastOpenedPanels: TdExpansionPanelComponent[] = [];

  /**
   * multi?: boolean
   * Sets whether multiple panels can be expanded at a given time.
   * Set to false for accordion mode.
   * Defaults to false.
   */
  @Input('multi')
  set multi(multi: boolean) {
    this._multi = multi;
    if (this._multi === false && this._lastOpenedPanels.length > 0) {
      this._closeAllExcept(
        this._lastOpenedPanels[this._lastOpenedPanels.length - 1],
      );
    }
  }

  @ContentChildren(TdExpansionPanelComponent) expansionPanels: QueryList<
    TdExpansionPanelComponent
  >;

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {
    this._renderer.addClass(
      this._elementRef.nativeElement,
      'td-expansion-panel-group',
    );
  }

  _attachListeners(
    expansionPanels: QueryList<TdExpansionPanelComponent>,
  ): void {
    this._lastOpenedPanels = [];
    expansionPanels.forEach((expansionPanel: TdExpansionPanelComponent) => {
      expansionPanel.expanded.subscribe(() => {
        const indexOfPanel: number = this._lastOpenedPanels.indexOf(expansionPanel);
        if (indexOfPanel !== -1) {
          this._lastOpenedPanels.splice(indexOfPanel, 1);
        }
        this._lastOpenedPanels.push(expansionPanel);

        if (!this._multi) {
          this._closeAllExcept(expansionPanel);
        }
      });

      expansionPanel.collapsed.subscribe(() => {
        const indexOfPanel: number = this._lastOpenedPanels.indexOf(expansionPanel);
        if (indexOfPanel !== -1) {
          this._lastOpenedPanels.splice(indexOfPanel, 1);
        }
      });
    });
  }

  ngAfterContentInit(): void {
    this._attachListeners(this.expansionPanels);
    this.expansionPanels.changes.subscribe(
      (expansionPanels: QueryList<TdExpansionPanelComponent>) =>
        this._attachListeners(expansionPanels),
    );
  }

  /**
   * Open all TdExpansionPanels
   */
  openAll(): void {
    this.expansionPanels.forEach(
      (expansionPanel: TdExpansionPanelComponent) => {
        expansionPanel.open();
      },
    );
  }

  /**
   * Close all TdExpansionPanels
   */
  closeAll(): void {
    this.expansionPanels.forEach(
      (expansionPanel: TdExpansionPanelComponent) => {
        expansionPanel.close();
      },
    );
  }

  _closeAllExcept(expansionPanel: TdExpansionPanelComponent): void {
    this.expansionPanels.forEach((panel: TdExpansionPanelComponent) => {
      if (panel !== expansionPanel) {
        panel.close();
      }
    });
  }
}
