import { Component, OnInit } from '@angular/core';
import {
  CovalentGuidedTourService,
  IGuidedTour,
  ITourEvent,
} from '@covalent/guided-tour';
@Component({
  selector: 'guided-tour-demo-go-back-navigation',
  styleUrls: ['./guided-tour-demo-go-back-navigation.component.scss'],
  templateUrl: './guided-tour-demo-go-back-navigation.component.html',
})
export class GuidedTourDemoGoBackNavigationComponent implements OnInit {
  constructor(private _guidedTourService: CovalentGuidedTourService) {}

  ngOnInit(): void {
    const goBackNavigationTour: IGuidedTour = {
      useModalOverlay: true,
      steps: [
        {
          id: 'step-1',
          title: 'Step 1',
          text: 'Continue tour',
          attachTo: {
            element: '#go-back-navigation-demo #step-1',
            on: 'top',
          },
        },
        {
          id: 'step-2',
          title: 'Step 2',
          text: 'Step will navigate to the root (/)',
          attachTo: {
            element: '#go-back-navigation-demo #advance-button',
            on: 'top',
          },
          advanceOn: {
            selector: '#go-back-navigation-demo #advance-button',
            event: ITourEvent.click, // event of some sort
          },
          advanceOnOptions: {
            allowGoBack: true,
          },
        },
        {
          id: 'step-3',
          title: 'Step 3',
          text: 'Step has navigated to the home page',
          advanceOnOptions: {
            allowGoBack: false,
          },
        },
        {
          id: 'step-4',
          title: 'Step 4',
          text: 'Click the back button (<) will navigate back to step 3 on the home page',
          routing: {
            route: '/components/guided-tour/examples',
          },
          attachTo: {
            element: '#go-back-navigation-demo #step-4',
          },
          scrollTo: false,
        },
      ],
    };
    this._guidedTourService.registerTour(
      'goBackNavigationTour',
      goBackNavigationTour
    );
  }

  startTour(): void {
    this._guidedTourService.startTour('goBackNavigationTour');
  }
}
