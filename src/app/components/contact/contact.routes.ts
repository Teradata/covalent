import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contactUs',
    children: [
      {
        component: ContactComponent,
        path: ''
      }
    ]
  }
];

export const moduleRoutes: any = RouterModule.forChild(routes);
