// modules
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { EmployeeRoutingModule } from "./employee-routing.module";
// components
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailComponent } from "./employee-detail.component";
import { EmployeeDeleteComponent } from "./employee-delete.component";
import { EmployeeInlineComponent } from "./employee-inline.component";
// services
import { EmployeeService } from "./employee.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EmployeeRoutingModule
    ],
    declarations: [
        EmployeeListComponent,
        EmployeeDetailComponent,
        EmployeeDeleteComponent,
        EmployeeInlineComponent
    ],
    providers: [
        EmployeeService
    ]
})
export class EmployeeModule { }