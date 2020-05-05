import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';

@Component({
  selector: 'guided-tour-demo-advance-on',
  styleUrls: ['./guided-tour-demo-advance-on.component.scss'],
  templateUrl: './guided-tour-demo-advance-on.component.html',
})
export class GuidedTourDemoAdvanceOnComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const advanceOnTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          title: 'Step 1',
          text: 'CLick on button to advance to step 2',
          attachTo: {
            element: '#advance-on-demo #advance-button',
            on: 'top',
          },
          advanceOn: {
            selector: '#advance-on-demo #advance-button',
            event: 'click', // event of some sort
          },
        },
        {
          title: 'Step  2',
          text: 'Step 2',
          attachTo: {
            element: '#advance-on-demo #step-2',
            on: 'top',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('advanceOnTour', advanceOnTour);
  }

  startTour(): void {
    this._guidedTourService.startTour('advanceOnTour');
  }
}
