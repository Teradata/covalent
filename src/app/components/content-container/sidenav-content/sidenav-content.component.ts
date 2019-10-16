import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit, AfterViewInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
