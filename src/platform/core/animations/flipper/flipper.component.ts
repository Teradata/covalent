import { Component, ContentChild, HostListener } from '@angular/core';
import { TdFrontComponent } from './front/front.component';
import { TdBackComponent } from './back/back.component';
import { trigger, state, style, transition, animate, AnimationTriggerMetadata, AUTO_STYLE, query } from '@angular/animations';

@Component({
  selector: 'td-flipper',
  templateUrl: './flipper.component.html',
  styleUrls: ['./flipper.component.scss'],
  animations: [
  trigger('tdFlip', [
      // TODO Inital Flip state setup
      // TODO Final Flip state setup
      state('0', style({
      })),
      state('1',  style({
      })),
      transition('0 => 1', [
        query('td-front', style({ opacity: 0 })),
        query('td-front', animate(1000, style({ opacity: 1 }))),
      ]),
      transition('1 => 0', [
        query('td-back', style({ opacity: 0 })),
        query('td-back', animate(1000, style({ opacity: 1 }))),
      ]),
    ]),
  ],
})
export class TdFlipperComponent {
  @ContentChild(TdFrontComponent) front: TdFrontComponent;
  @ContentChild(TdBackComponent) back: TdBackComponent;

  tdFlip: boolean;

  constructor() {
    this.tdFlip = false;
  }

  @HostListener('click', ['$event'])
  onClick(): void {
    this.tdFlip = !this.tdFlip;
  }

}
