import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-component-hero',
  templateUrl: './component-hero.component.html',
  styleUrls: ['./component-hero.component.scss'],
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
})
export class ComponentHeroComponent {
  resourceUrl: any;
}

@Component({
  selector: 'td-component-hero-dynamic',
  template: '',
})
export class ComponentHeroComponentDynamicComponent {
  resourceUrl: any = 'test';

  @ViewChild('container') //normal way
  container!: ElementRef;

  constructor(private route: ActivatedRoute, private vcr: ViewContainerRef) {
    this.resourceUrl = route.snapshot.data['resourceUrl'];
    this.vcr.clear();
    this.vcr.createComponent(this.resourceUrl);
  }
}
