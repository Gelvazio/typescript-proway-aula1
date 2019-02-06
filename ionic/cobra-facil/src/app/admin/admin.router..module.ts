import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'fill'},
    { path: 'home', loadChildren: './home/home.module#HomePageModule'},
];

@NgModule({
    
})