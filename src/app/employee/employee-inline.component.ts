// modules
import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
// services
import { EmployeeService } from "./employee.service";
// interfaces
import { IEmployee } from "./employee";

@Component({
    selector: "employee-inline",
    templateUrl: "./employee-inline.component.html"
})

export class EmployeeInlineComponent implements OnInit {
    tempModel: IEmployee = <IEmployee>{};
    @Input()
    employee: IEmployee;
    @Input()
    enableEditing: boolean = false;
    @Output()
    onEdit = new EventEmitter<IEmployee>();

    constructor(private service: EmployeeService) { }

    ngOnInit(): void {

    }

    edit(): void {
        Object.assign(this.tempModel, this.employee);
        this.enableEditing = true;

        this.onEdit.emit(this.employee);
    }

    save(): void {
        this.service.put(this.employee).subscribe((data: any) => {
            this.tempModel = <IEmployee>{};
            this.enableEditing = false;
            console.log(data);
        });
    }

    cancel(): void {
        this.employee = this.tempModel;
        this.tempModel = <IEmployee>{};
        this.enableEditing = false;
    }
}