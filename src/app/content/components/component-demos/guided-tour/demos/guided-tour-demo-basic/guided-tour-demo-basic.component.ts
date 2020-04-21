import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';
import Shepherd from 'shepherd.js';

@Component({
  selector: 'guided-tour-demo-basic',
  styleUrls: ['./guided-tour-demo-basic.component.scss'],
  templateUrl: './guided-tour-demo-basic.component.html',
})
export class GuidedTourDemoBasicComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const demoTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          title: 'Fuel',
          text: 'Here are fuel levels',
          attachTo: {
            element: '#fuel',
            on: 'bottom',
          },
        },
        {
          title: 'Oxygen',
          text: `That's all there is to it.`,
          attachTo: {
            element: '#oxygen',
            on: 'bottom',
          },
        },
        {
          title: 'Global status',
          text: `Here you can see the global status of the vehicle`,
          attachTo: {
            element: '#status',
            on: 'bottom',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('demoTour', demoTour);
  }

  startTour(): void {
    this._guidedTourService.startTour('demoTour');
  }
}
