import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';

@Component({
  selector: 'guided-tour-demo-delay',
  styleUrls: ['./guided-tour-demo-delay.component.scss'],
  templateUrl: './guided-tour-demo-delay.component.html',
})
export class GuidedTourDemoDelayComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const delayTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          title: 'Step 1',
          attachTo: {
            element: '#delay-demo #step-1',
            on: 'top',
          },
        },
        {
          title: 'Step 2',
          text: 'There was a 1 sec delay before this step was displayed',
          attachTo: {
            element: '#delay-demo #step-2',
            on: 'top',
          },
          attachToOptions: {
            timeBeforeShow: 1000,
          },
        },
      ],
    };
    this._guidedTourService.registerTour('delayTour', delayTour);
  }

  startTour(): void {
    this._guidedTourService.startTour('delayTour');
  }
}
