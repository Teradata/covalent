import { Component } from '@angular/core';

@Component({
  selector: 'directives-demo',
  styleUrls: [ 'directives.component.scss' ],
  templateUrl: 'directives.component.html',
})
export class DirectivesComponent {

  toggleDiv: boolean = true;
  fadeDiv: boolean = true;

  toggle(): void {
    this.toggleDiv = !this.toggleDiv;
  }
  fade(): void {
    this.fadeDiv = !this.fadeDiv;
  }
}
