import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Employee } from "../model/employee";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private _url: string = "/assets/data/employees1.json";
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      return throwError(
        `Server side Error : ${error.status} ${error.statusText}`
      );
    } else {
      return throwError(`Client side Error : ${error}`);
    }
  }
}
