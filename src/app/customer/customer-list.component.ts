import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { CustomerService } from './customer.service';
import { ICustomer } from './customer';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, throwError } from 'rxjs';
import { map, take, filter, scan, catchError } from 'rxjs/operators';
import { CustomerInlineComponent } from './customer-inline.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
  private customersAsObservable: Observable<ICustomer[]>;

  private customers: ICustomer[];

  @ViewChildren(CustomerInlineComponent)
  private childs: QueryList<CustomerInlineComponent>;

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe((data: any) => {
        this.customers = JSON.parse(data._body);
      });
  }

  disabledOtherChildsEditMode(customerId: number) {
    this.childs.forEach(m => {
      if (m.customer.CustomerID != customerId && m.enabledEditMode)
        m.cancel();
    });
  }

  removeCustomerFromList(customerId: number) {
    let index = this.customers.indexOf(this.customers.find(m => m.CustomerID == customerId));
    if (index > -1)
      this.customers.splice(index, 1);
  }
}
