import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: HomeComponent },
]);
