import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordcloudDemoComponent } from './wordcloud-demo.component';

const routes: Routes = [
  {
    path: '',
    component: WordcloudDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordcloudDemoRoutingModule {}
