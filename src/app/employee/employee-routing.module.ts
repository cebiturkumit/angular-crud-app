// modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeDeleteComponent } from './employee-delete.component';

const employeeRoutes: Routes = [
    { path: "employee/list", component: EmployeeListComponent },
    { path: "employee/detail", component: EmployeeDetailComponent },
    { path: "employee/detail/:id", component: EmployeeDetailComponent },
    { path: "employee/delete/:id", component: EmployeeDeleteComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(employeeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeeRoutingModule { }