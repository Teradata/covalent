import { Component, OnInit } from '@angular/core';
import {
  CovalentGuidedTourService,
  IGuidedTour,
  ITourEvent,
} from '@covalent/guided-tour';

@Component({
  selector: 'guided-tour-demo-go-back',
  styleUrls: ['./guided-tour-demo-go-back.component.scss'],
  templateUrl: './guided-tour-demo-go-back.component.html',
})
export class GuidedTourDemoGoBackComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const goBackTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          id: 'step-1',
          title: 'Step 1',
          text: 'Continue tour',
          attachTo: {
            element: '#go-back-demo #step-1',
            on: 'top',
          },
        },
        {
          title: 'Step 2',
          text: 'Cannot go back in this step',
          attachTo: {
            element: '#go-back-demo #advance-button',
            on: 'top',
          },
          advanceOn: {
            selector: '#go-back-demo #advance-button',
            event: ITourEvent.click,
          },
          advanceOnOptions: {
            allowGoBack: false,
          },
        },
        {
          title: 'Step 3',
          text: 'Going back in this step will send you back to step 1',
          attachTo: {
            element: '#go-back-demo #step-3',
            on: 'top',
          },
          attachToOptions: {
            goBackTo: 'step-1',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('goBackTour', goBackTour);
  }

  startTour(): void {
    this._guidedTourService.startTour('goBackTour');
  }
}
