import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, Subscriber } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'demo-component',
  styleUrls: ['./demo.component.scss'],
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  @Input() demoId: string;
  @Input() demoTitle: string;
  viewCode: boolean = false;
  typescriptFile: string;
  htmlFile: string;
  stylesFile: string;

  constructor(private _http: HttpClient) {}

  toggleCodeView(): void {
    const demoMarker: number = this.demoId.indexOf('-demo-');
    const demoFolderName: string = this.demoId.slice(0, demoMarker);
    forkJoin({
      typescript: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.ts`, {
        responseType: 'text',
      }),
      html: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.html`, {
        responseType: 'text',
      }),
      styles: this._http.get(`assets/demos/${demoFolderName}/demos/${this.demoId}/${this.demoId}.component.scss`, {
        responseType: 'text',
      }),
    })
      .pipe(
        map((responses: { typescript: string; html: string; styles: string }) => {
          return { typescript: responses.typescript, html: responses.html, styles: responses.styles };
        }),
        catchError((error: Response) => {
          return new Observable<any>((subscriber: Subscriber<any>) => {
            try {
              subscriber.error(error);
            } catch (err) {
              subscriber.error(error);
            }
          });
        }),
      )
      .subscribe((demo: { typescript: string; html: string; styles: string }) => {
        this.typescriptFile = demo.typescript;
        this.htmlFile = demo.html;
        this.stylesFile = demo.styles;
        this.viewCode = !this.viewCode;
      });
  }
}
