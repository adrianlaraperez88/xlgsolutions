import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'XLG Solutions - Home' },
    { path: 'service/:id', component: ServiceDetailComponent, title: 'XLG Solutions - Service Details' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
