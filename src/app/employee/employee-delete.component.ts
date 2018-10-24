// modules
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"
// services
import { EmployeeService } from "./employee.service";
// interfaces
import { IEmployee } from "./employee";

@Component({
    selector: "employee-delete",
    templateUrl: "./employee-delete.component.html"
})

export class EmployeeDeleteComponent implements OnInit {
    employee: IEmployee;

    constructor(
        private service: EmployeeService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get("id");
        if (!id) {
            location.href = "/employee/list";
            return;
        }
        this.service.get(parseInt(id)).subscribe((data: any) => {
            this.employee = JSON.parse(data._body);
        });
    }

    deleteEmployee(): void {
        if (this.employee && this.employee.id) {
            this.service.delete(this.employee.id).subscribe((data: any) => {
                console.log(data);
            });
        }
        this.redirectList();
    }

    redirectList(): void {
        location.href = "/employee/list";
    }
}