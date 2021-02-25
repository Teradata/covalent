import { Component, OnInit } from '@angular/core';
import { CovalentGuidedTourService, IGuidedTour } from '@covalent/guided-tour';

@Component({
  selector: 'guided-tour-demo-disable-next',
  styleUrls: ['./guided-tour-demo-disable-next.component.scss'],
  templateUrl: './guided-tour-demo-disable-next.component.html',
})
export class GuidedTourDemoDisableNextComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const disableNextDemoTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          id: 'enable-next',
          title: 'Enable Next Button',
          text: 'Click this button to enable next button',
          attachTo: {
            element: '#disable-next-demo #enable-next',
            on: 'top',
          },
        },
        {
          id: 'last_step',
          title: 'Last Step',
          text: 'This is the final step',
          attachTo: {
            element: '#disable-next-demo #last-step',
            on: 'top',
          },
        },
      ],
    };
    this._guidedTourService.registerTour('disableNextDemoTour', disableNextDemoTour);
  }

  enableNext(): void {
    this._guidedTourService.setNextBtnDisability('enable-next', false);
  }

  startTour(): void {
    this._guidedTourService.startTour('disableNextDemoTour');
    this._guidedTourService.setNextBtnDisability('enable-next', true);
  }
}
