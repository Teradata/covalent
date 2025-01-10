import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';

@Component({
  selector: 'guided-tour-demo-not-found',
  styleUrls: ['./guided-tour-demo-not-found.component.scss'],
  templateUrl: './guided-tour-demo-not-found.component.html',
})
export class GuidedTourDemoNotFoundComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const notFoundTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          title: 'Step 1',
          attachTo: {
            element: '#not-found-demo #step-1',
            on: 'top',
          },
        },
        {
          title: 'Step  2',
          text: 'Element this is meant to attach to does not exist',
          attachTo: {
            element: '#not-found-demo #step-2',
            on: 'top',
          },
          attachToOptions: {
            retries: 1,
            skipIfNotFound: true,
          },
        },
        {
          title: 'Step 3',
          text: 'Step 2 was not found so skipped to step 3',
          attachTo: {
            element: '#not-found-demo #step-3',
            on: 'top',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('notFoundTour', notFoundTour);
  }

  startTour(): void {
    this._guidedTourService.startTour('notFoundTour');
  }
}
