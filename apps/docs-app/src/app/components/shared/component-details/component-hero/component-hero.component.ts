import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'td-component-hero',
  templateUrl: './component-hero.component.html',
  styleUrls: ['./component-hero.component.scss'],
})
export class ComponentHeroComponent {
  resourceUrl: any;
}

@Component({
  standalone: false,
  selector: 'td-component-hero-dynamic',
  template: '',
})
export class ComponentHeroComponentDynamicComponent {
  private route = inject(ActivatedRoute);
  private vcr = inject(ViewContainerRef);

  resourceUrl: any = 'test';

  @ViewChild('container') //normal way
  container!: ElementRef;

  constructor() {
    const route = this.route;

    this.resourceUrl = route.snapshot.data['resourceUrl'];
    this.vcr.clear();
    this.vcr.createComponent(this.resourceUrl);
  }
}
