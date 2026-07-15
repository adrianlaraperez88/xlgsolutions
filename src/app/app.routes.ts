import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ResourceDetailComponent } from './pages/resource-detail/resource-detail.component';
import { ToolsComponent } from './pages/tools/tools.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'XLG Solutions - Home' },
    { path: 'service/:id', component: ServiceDetailComponent, title: 'XLG Solutions - Service Details' },
    { path: 'resources', component: ResourcesComponent, title: 'XLG Solutions - Educational Guides & Resources' },
    { path: 'resources/:id', component: ResourceDetailComponent, title: 'XLG Solutions - Resource' },
    { path: 'tools', component: ToolsComponent, title: 'XLG Solutions - Interactive Tax & ACA Tools' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
