import { Component, OnInit } from "@angular/core";
import { Employee } from "../model/employee";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: "employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  private employeeList: Employee[];
  private errorMsg = null;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      response => {
        this.employeeList = response;
      },
      error => (this.errorMsg = error)
    );
  }

  errorHandler() {}
}
