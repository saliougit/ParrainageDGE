import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'login',
        component : LoginComponent
    },
    {
        path: '',
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
