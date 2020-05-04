import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';
import Shepherd from 'shepherd.js';

@Component({
  selector: 'guided-tour-demo-attach-options',
  styleUrls: ['./guided-tour-demo-attach-options.component.scss'],
  templateUrl: './guided-tour-demo-attach-options.component.html',
})
export class GuidedTourDemoAttachOptionsComponent implements OnInit {
  displayElement: boolean = false;
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const attachOptions: IGuidedTour = {
      steps: [
        {
          title: 'Step 1',
          attachTo: {
            element: '#step-1',
            on: 'left',
          },
        },
        {
          title: 'Step  2',
          text: 'Click this button to add an element which will abort the tour. ',
          attachTo: {
            element: '#step-2',
            on: 'left',
          },
          attachToOptions: {
            retries: 3,
            skipIfNotFound: true,
          },
        },
        {
          title: 'Step 3',
          text: 'Step 2 was not found so skipped to step 3',
          attachTo: {
            element: '#step-3',
            on: 'left',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('attachOptions', attachOptions);
  }

  addElement(): void {
    this.displayElement = true;
  }

  startTour(): void {
    this.displayElement = false;
    this._guidedTourService.startTour('attachOptions');
  }
}
