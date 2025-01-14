import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-component/home-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
    {
        path:'home',
        redirectTo:'',  // Home here is the path defined below
        pathMatch:'full'
    },
    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'products',
        component:ProductsComponentComponent
    },
    {
        path:'about',
        component:AboutComponentComponent
    },
    {
        path:'contact',
        component:ContactComponentComponent
    },
    {
        path:'login',
        component:LoginPageComponent
    },
    {
        path:'signup',
        component:SignupPageComponent
    }
];
