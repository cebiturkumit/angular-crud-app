import { Injectable, Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ICustomer } from './customer'
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, throwError } from 'rxjs';
import { map, take, filter, scan, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    url = "http://10.6.120.248:9810/api/customer";
    headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS',
        // tslint:disable-next-line:max-line-length
        'Access-Control-Allow-Headers': 'Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width, Authorization, Content-Length, X-Requested-With, X-Auth-Token, Origin',
    });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {

    }

    getAll(): Observable<Response> {
        return this.http.get(this.url);
    }

    add(customer: ICustomer): Observable<Response> {
        return this.http.post(this.url, customer, this.options);
    }

    update(customer: ICustomer): Observable<Response> {
        return this.http.put(this.url + '/' + customer.CustomerID, customer, this.options);
    }

    delete(customer: ICustomer): Observable<Response> {
        return this.http.delete(this.url + '/' + customer.CustomerID, this.options);
    }
}