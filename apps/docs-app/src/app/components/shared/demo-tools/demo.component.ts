import { Component, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, Subject, Subscriber } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TdHighlightComponent } from '@covalent/highlight';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'demo-component',
  styleUrls: ['./demo.component.scss'],
  templateUrl: './demo.component.html',
  imports: [
    /** Covalent Modules */
    TdHighlightComponent,
    MatToolbarModule,
    /** Angular Modules */
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class DemoComponent implements OnDestroy {
  @Input() demoId!: string;
  @Input() demoTitle!: string;
  viewCode = false;
  typescriptFile!: string;
  htmlFile!: string;
  stylesFile!: string;

  private _destroy$ = new Subject<void>();

  constructor(private _http: HttpClient) {}

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  toggleCodeView(): void {
    if (this.viewCode) {
      this.viewCode = false;
    } else {
      const demoMarker: number = this.demoId.indexOf('-demo-');
      const demoFolderName: string = this.demoId.slice(0, demoMarker);
      forkJoin({
        typescript: this._http.get(
          `assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.ts`,
          {
            responseType: 'text',
          }
        ),
        html: this._http.get(
          `assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.html`,
          {
            responseType: 'text',
          }
        ),
        styles: this._http.get(
          `assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.scss`,
          {
            responseType: 'text',
          }
        ),
      })
        .pipe(
          map(
            (responses: {
              typescript: string;
              html: string;
              styles: string;
            }) => {
              return {
                typescript: responses.typescript,
                html: responses.html,
                styles: responses.styles,
              };
            }
          ),
          catchError((error: Response) => {
            return new Observable<any>((subscriber: Subscriber<any>) => {
              try {
                subscriber.error(error);
              } catch (err) {
                subscriber.error(error);
              }
            });
          }),
          takeUntil(this._destroy$)
        )
        .subscribe(
          (demo: { typescript: string; html: string; styles: string }) => {
            this.typescriptFile = demo.typescript;
            this.htmlFile = demo.html;
            this.stylesFile = demo.styles;
            this.viewCode = true;
          }
        );
    }
  }
}
