// modules
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
// services
import { EmployeeService } from "./employee.service";
// interfaces
import { IEmployee } from "./employee";
import { EmployeeInlineComponent } from "./employee-inline.component";

@Component({
    selector: "employee-list",
    templateUrl: "./employee-list.component.html"
})

export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    @ViewChildren(EmployeeInlineComponent)
    employeeChilds: QueryList<EmployeeInlineComponent>;

    constructor(private service: EmployeeService) { }

    ngOnInit(): void {
        this.service.getAll().subscribe((data: any) => {
            this.employees = JSON.parse(data._body);
        });
    }

    onEmployeeChildEdit(employee: IEmployee): void {
        console.log("editItem: ", employee);
        this.employeeChilds.forEach(x => {
            if (x.employee.id != employee.id && x.enableEditing) {
                x.cancel();
            }
        });
    }
}