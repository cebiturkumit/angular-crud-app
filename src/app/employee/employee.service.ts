import { RequestOptions, Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";

@Injectable({
    providedIn: "root"
})

export class EmployeeService {
    url = "http://localhost:65263/api/employee";
    headers = new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width, Authorization, Content-Length, X-Requested-With, X-Auth-Token, Origin"
    });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getAll(): Observable<Response> {
        return this.http.get(this.url);
    }

    get(id: number): Observable<Response> {
        return this.http.get(this.url + "/" + id);
    }

    post(employee: IEmployee): Observable<Response> {
        return this.http.post(this.url, employee, this.options);
    }

    put(employee: IEmployee): Observable<Response> {
        return this.http.put(this.url, employee, this.options);
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(this.url + "/" + id, this.options);
    }
}