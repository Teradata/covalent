import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'virtual-scroll-demo-basic',
  templateUrl: './virtual-scroll-demo-basic.component.html',
  styleUrls: ['./virtual-scroll-demo-basic.component.scss'],
})
export class VirtualScrollDemoBasicComponent implements OnInit {
  data: any[] = [];

  ngOnInit(): void {
    for (let index: number = 1; index <= 1500; index++) {
      this.data.push({ index, name: 'element-' + index });
    }
  }
}
