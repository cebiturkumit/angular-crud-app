import { Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';

import { CustomerService } from './customer.service';
import { ICustomer } from './customer';

@Component({
    selector: 'app-customer-inline',
    templateUrl: './customer-inline.component.html'
})
export class CustomerInlineComponent implements OnInit {
    @Input()
    customer: ICustomer;

    @Input()
    enabledEditMode: boolean = false;

    @Output()
    closeOthers = new EventEmitter<number>();

    @Output()
    removeCustomer = new EventEmitter<number>();

    constructor(private service: CustomerService) { }

    private tempCustomer: ICustomer = <ICustomer>{};

    ngOnInit() {

    }

    edit() {
        this.closeOthers.emit(this.customer.CustomerID);
        Object.assign(this.tempCustomer, this.customer);
        this.enabledEditMode = true;
    }

    cancel() {
        this.customer = this.tempCustomer;
        this.tempCustomer = <ICustomer>{};
        this.enabledEditMode = false;
    }

    onSubmit() {
        this.service.update(this.customer).subscribe((data: any) => {
            this.tempCustomer = <ICustomer>{};
            this.enabledEditMode = false;
            console.log(this.customer);
        });
    }

    delete() {
        if (confirm('Are you sure you want to delete the cutomer?')) {

            this.service.delete(this.customer).subscribe((data: any) => {
                this.removeCustomer.emit(this.customer.CustomerID);
            });
        }
    }
}