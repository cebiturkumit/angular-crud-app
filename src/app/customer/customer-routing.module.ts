// modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { CustomerListComponent } from "./customer-list.component";

const customerRoutes: Routes = [
    { path: "customer/list", component: CustomerListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(customerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CustomerRoutingModule { }