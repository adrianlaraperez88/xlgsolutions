import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { 
      path: '', 
      component: HomeComponent, 
      title: 'XLG Solutions - Home' 
    },
    { 
      path: 'service/:id', 
      loadComponent: () => import('./pages/service-detail/service-detail.component').then(m => m.ServiceDetailComponent), 
      title: 'XLG Solutions - Service Details' 
    },
    { 
      path: 'resources', 
      loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent), 
      title: 'XLG Solutions - Educational Guides & Resources' 
    },
    { 
      path: 'resources/:id', 
      loadComponent: () => import('./pages/resource-detail/resource-detail.component').then(m => m.ResourceDetailComponent), 
      title: 'XLG Solutions - Resource' 
    },
    { 
      path: 'tools', 
      loadComponent: () => import('./pages/tools/tools.component').then(m => m.ToolsComponent), 
      title: 'XLG Solutions - Interactive Tax & ACA Tools' 
    },
    { 
      path: '**', 
      redirectTo: '', 
      pathMatch: 'full' 
    }
];
