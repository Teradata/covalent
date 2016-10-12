import { Component } from '@angular/core';

@Component({
  selector: 'directives-demo',
  styleUrls: [ 'directives.component.scss' ],
  templateUrl: 'directives.component.html',
})
export class DirectivesComponent {

  toggleDiv: boolean = true;

  toggle(): void {
    this.toggleDiv = !this.toggleDiv;
  }
}
