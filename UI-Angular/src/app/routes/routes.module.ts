import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {ProductComponent} from "../product/product.component";

// - Routes instead of RouteConfig
// - RouterModule instead of provideRoutes
const routes: Routes = [
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: '',
        component: LoginComponent
    },
];

// - Updated Export
export const routing = RouterModule.forRoot(routes);


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class RoutesModule { }