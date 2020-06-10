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
          title: 'Vehicle Status Report',
          text: 'Learn how to check the status of your vehicle',
          attachToOptions: {
            skipFromStepCount: true,
          },
        },
        {
          title: 'Fuel',
          text: 'Here are the fuel levels',
          attachTo: {
            element: '#skip-count #skip-fuel',
            on: 'top',
          },
          attachToOptions: {
            skipFromStepCount: false,
          },
        },
        {
          title: 'Oxygen',
          text: 'Here are the Oxygen levels.',
          attachTo: {
            element: '#skip-count #skip-oxygen',
            on: 'top',
          },
        },
        {
          title: 'Global status',
          text: 'Here you can see the global status of the vehicle. That is all there is to it!',
          attachTo: {
            element: '#skip-count #skip-status',
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
