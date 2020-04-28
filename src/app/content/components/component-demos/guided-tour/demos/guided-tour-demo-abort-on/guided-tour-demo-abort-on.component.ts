import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';
import Shepherd from 'shepherd.js';

@Component({
  selector: 'guided-tour-demo-abort-on',
  styleUrls: ['./guided-tour-demo-abort-on.component.scss'],
  templateUrl: './guided-tour-demo-abort-on.component.html',
})
export class GuidedTourDemoAbortOnComponent implements OnInit {
  displayElement: boolean = false;
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const abortOnAddedTour: IGuidedTour = {
      abortOn: [
        {
          selector: '#added-element',
          event: 'added', // can be added/removed/clicked/hover/etc
        },
      ],
      steps: [
        {
          title: 'Abort on element added',
          text: 'Click this button to add an element which will abort the tour. ',
          attachTo: {
            element: '#add-element',
            on: 'top',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('abortOnAddedTour', abortOnAddedTour);
  }

  addElement(): void {
    this.displayElement = true;
  }

  startTour(): void {
    this.displayElement = false;
    this._guidedTourService.startTour('abortOnAddedTour');
  }
}
