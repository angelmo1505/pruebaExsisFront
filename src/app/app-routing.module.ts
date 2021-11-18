import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [

    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent, pathMatch: "full" },
    { path: "home", component: HomeComponent, pathMatch: "full" },

];

export const routing = RouterModule.forRoot(routes);