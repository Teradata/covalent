import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';
@Component({
  selector: 'guided-tour-demo-skip-count',
  templateUrl: './guided-tour-demo-skip-count.component.html',
  styleUrls: ['./guided-tour-demo-skip-count.component.scss'],
})
export class GuidedTourDemoSkipCountComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const skipCountTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          title: 'Introduction',
          text: 'The introduction step has been removed from the count total',
          attachTo: {
            element: '#skip-count-demo #skip-intro',
            on: 'top',
          },
          attachToOptions: {
            skipFromStepCount: true,
          },
        },
        {
          title: 'Step 1',
          text: 'Step 1 is the first of 2 steps to be counted in the total',
          attachTo: {
            element: '#skip-count-demo #skip-step-1',
            on: 'top',
          },
          attachToOptions: {
            skipFromStepCount: false,
          },
        },
        {
          title: 'Step 2',
          text: 'Step 2 is the second of 2 steps to be counted in the total',
          attachTo: {
            element: '#skip-count-demo #skip-step-2',
            on: 'top',
          },
        },
        {
          title: 'Final',
          text: 'The final step has been removed from the count total',
          attachTo: {
            element: '#skip-count-demo #skip-step-final',
            on: 'top',
          },
          attachToOptions: {
            skipFromStepCount: true,
          },
        },
      ],
    };
    this._guidedTourService.registerTour('skipCountTour', skipCountTour);
  }

  startTour(): void {
    this._guidedTourService.startTour('skipCountTour');
  }
}
