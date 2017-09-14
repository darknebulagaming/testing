import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login', pathMatch: 'full' 
    },
    {
         path: 'login',
         component: LoginComponent,
    },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
