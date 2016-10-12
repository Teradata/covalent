import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-demo',
  styleUrls: [ 'directives.component.scss' ],
  templateUrl: 'directives.component.html',
})
export class DirectivesComponent implements OnInit {

  toggleDiv: boolean = true;

  toggle(): any {
    this.toggleDiv = !this.toggleDiv;
  }
}
