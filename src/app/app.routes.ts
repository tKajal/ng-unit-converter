import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {

        path: 'contact', component: ContactComponent

    },
    { path: 'converter/:type', loadComponent: () => import('./converter/converter.component').then(m => m.ConverterComponent) },

    { path: '', component: HomeComponent },  // Home page as the default
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: BlogDetailComponent },
    { path: '**', redirectTo: '' }  // Catch-all route
];
