import { Component, OnInit } from '@angular/core';
import {
  CovalentGuidedTourService,
  IGuidedTour,
  ITourEvent,
} from '@covalent/guided-tour';

@Component({
  selector: 'guided-tour-demo-abort-on',
  styleUrls: ['./guided-tour-demo-abort-on.component.scss'],
  templateUrl: './guided-tour-demo-abort-on.component.html',
})
export class GuidedTourDemoAbortOnComponent implements OnInit {
  displayElement = false;
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const abortOnTour: IGuidedTour = {
      useModalOverlay: true,
      abortOn: [
        // on global level, can also be on individual step level
        {
          selector: '#abort-on-demo #added-element',
          event: ITourEvent.added, // click, pointerover, keyup, added, removed
        },
      ],
      steps: [
        {
          title: 'Abort on element added',
          text: 'Click this button to add an element which will abort the tour. ',
          attachTo: {
            element: '#abort-on-demo #add-element',
            on: 'top',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('abortOnTour', abortOnTour);
  }

  addElement(): void {
    this.displayElement = true;
  }

  startTour(): void {
    this.displayElement = false;
    this._guidedTourService.startTour('abortOnTour');
  }
}
