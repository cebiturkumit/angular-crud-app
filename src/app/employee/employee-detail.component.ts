// modules
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"
// services
import { EmployeeService } from "./employee.service";
// interfaces
import { IEmployee, Employee } from "./employee";

@Component({
    selector: "employee-detail",
    templateUrl: "./employee-detail.component.html"
})

export class EmployeeDetailComponent implements OnInit {
    employee: IEmployee;

    constructor(
        private service: EmployeeService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get("id");
        if (id) {
            this.service.get(parseInt(id)).subscribe((data: any) => {
                this.employee = JSON.parse(data._body);
            });
            return;
        }
        this.employee = <IEmployee>{};
    }

    saveEmployee(): void {
        if (this.employee == undefined || this.employee.id == undefined) {
            this.service.post(this.employee).subscribe((data: any) => {
                console.log(data);
            });
        } else {
            this.service.put(this.employee).subscribe((data: any) => {
                console.log(data);
            });
        }
        this.redirectList();
    }

    redirectList(): void {
        location.href = "/employee/list";
    }
}