// modules
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CustomerRoutingModule } from "./customer-routing.module";
// components
import { CustomerListComponent } from "./customer-list.component";
import { CustomerInlineComponent } from "./customer-inline.component";
// services
import { CustomerService } from "./customer.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomerRoutingModule
    ],
    declarations: [
        CustomerListComponent,
        CustomerInlineComponent
    ],
    providers: [
        CustomerService
    ]
})
export class CustomerModule { }