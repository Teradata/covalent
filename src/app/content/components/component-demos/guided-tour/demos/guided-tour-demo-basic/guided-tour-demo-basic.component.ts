import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';

@Component({
  selector: 'guided-tour-demo-basic',
  styleUrls: ['./guided-tour-demo-basic.component.scss'],
  templateUrl: './guided-tour-demo-basic.component.html',
})
export class GuidedTourDemoBasicComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const basicDemoTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          title: 'Fuel',
          text: 'Here are the fuel levels',
          attachTo: {
            element: '#basic-demo #fuel',
            on: 'top',
          },
        },
        {
          title: 'Oxygen',
          text: 'Here are the Oxygen levels.',
          attachTo: {
            element: '#basic-demo #oxygen',
            on: 'top',
          },
        },
        {
          title: 'Global status',
          text: 'Here you can see the global status of the vehicle. That is all there is to it!',
          attachTo: {
            element: '#basic-demo #status',
            on: 'top',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('basicDemoTour', basicDemoTour);
  }

  startTour(): void {
    this._guidedTourService.startTour('basicDemoTour');
  }
}
