import { Component, Inject } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, Subscriber, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'breadcrumbs-demo',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
  preserveWhitespaces: true,
})
export class BreadcrumbDemoComponent {
  constructor(private http: HttpClient) {}

  // TODO: write wrapper around this and create "demo-component" that will consume it (show's demo/typescript/styles/html tab)
  async openStackblitzDemo(demoId: string): Promise<void> {
    forkJoin({
      typescript: this.http.get(`assets/stackblitz-demos/${demoId}/${demoId}.component.ts`, { responseType: 'text' }),
      html: this.http.get(`assets/stackblitz-demos/${demoId}/${demoId}.component.html`, { responseType: 'text' }),
    })
      .pipe(
        map((responses: { typescript: string; html: string }) => {
          return { typescript: responses.typescript, html: responses.html };
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
      .subscribe((demo: { typescript: string; html: string }) => {
        const project = {
          files: {
            [`${demoId}.component.ts`]: demo.typescript,
            [`${demoId}.component.html`]: demo.html,
          },
          title: 'Dynamically Generated Project',
          description: 'Created with <3 by the StackBlitz SDK!',
          template: 'typescript',
          tags: ['stackblitz', 'sdk'],
          dependencies: {
            moment: '*', // * = latest version
          },
        };

        // Method to open project in new window
        sdk.openProject(project);
      });
  }
}
