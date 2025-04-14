import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {

        path: 'contact', component: ContactComponent

    },
    { path: 'converter/:type', loadComponent: () => import('./converter/converter.component').then(m => m.ConverterComponent) },

    { path: '', component: HomeComponent },  // Home page as the default
    // { path: 'converter/:type', component: ConverterComponent },
    { path: '**', redirectTo: '' }  // Catch-all route
];
