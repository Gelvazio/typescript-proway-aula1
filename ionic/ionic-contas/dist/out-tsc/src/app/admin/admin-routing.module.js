var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'profile/view', loadChildren: './profile/profile-form/profile-form.module#ProfileFormPageModule' },
    { path: 'contas/list', loadChildren: './contas/conta-list/conta-list.module#ContaListPageModule' },
    { path: 'contas/form', loadChildren: './contas/conta-form/conta-form.module#ContaFormPageModule' },
    { path: 'categorias/list', loadChildren: './categorias/categoria-list/categoria-list.module#CategoriaListPageModule' },
    { path: 'categorias/form', loadChildren: './categorias/categoria-form/categoria-form.module#CategoriaFormPageModule' },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map