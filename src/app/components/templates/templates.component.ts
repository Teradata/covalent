import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-templates',
  styleUrls: ['./templates.component.scss'],
  templateUrl: './templates.component.html',
  animations: [fadeAnimation],
})
export class TemplatesComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  templates: Object[] = [{
      icon: 'mail',
      color: 'teal-700',
      title: 'Email App',
      description: 'template for a mail applications',
      image: 'email',
      link: 'https://embed.plnkr.co/Nfngf7UnaDgPRKMH1sSP/?show=preview',
    }, {
      icon: 'comments',
      color: 'indigo-700',
      title: 'Chat App',
      description: 'chat applications like Slack',
      image: 'chat',
      link: 'https://embed.plnkr.co/yI61h9yLgjh0UnuWnSZT/?show=preview',
    }, {
      icon: 'contacts',
      color: 'light-blue-700',
      title: 'Contacts App',
      description: 'contact list app with inner nav',
      image: 'contacts',
      link: 'https://embed.plnkr.co/wtxo9AoZTi6DXJXrxIX4/?show=preview',
    }, {
      icon: 'view_day',
      color: 'orange-700',
      title: 'Landing Page App',
      description: 'website landing page template',
      image: 'landing',
      link: 'https://embed.plnkr.co/imBanFIiKDgBLK0aH3Dr/?show=preview',
    },
  ];

  constructor(public media: TdMediaService) {
              }

  ngAfterViewInit(): void {
    this.media.broadcast();
  }
}
