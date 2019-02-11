import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'fill'},
    { path: 'home', loadChildren: './home/home.module#HomePageModule'},
    //{ path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule' },
    { path: 'categorias', loadChildren: './admin/categorias/lista/lista.module#ListaPageModule' },
    { path: 'usuarios', loadChildren: './admin/usuarios/lista/lista.module#ListaPageModule' },
    { path: 'contas', loadChildren: './admin/contas/lista/lista.module#ListaPageModule' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule{}