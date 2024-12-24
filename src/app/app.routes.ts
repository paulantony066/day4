import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {
        path:'',component:HomeComponent
    },
    {
        path:'single/:id',component:SinglePageComponent
    },
    {
        path:'contact',component:ContactComponent
    }
];
