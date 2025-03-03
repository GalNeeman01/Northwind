import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  private http = inject(HttpClient);

  public async getAllEmployees() : Promise<EmployeeModel[]> {
      const employees$ = this.http.get<EmployeeModel[]>(environment.employeesUrl);
      const employees = firstValueFrom(employees$);

      return employees;
  }

  public async getEmployee(id: number) : Promise<EmployeeModel>{
    const employee$ = this.http.get<EmployeeModel>(environment.employeesUrl + id);
    const employee = await firstValueFrom(employee$);

    return employee;
  }

  public async removeEmployee(id: number) {
    const deletedEmployee$ = this.http.delete<EmployeeModel>(environment.employeesUrl + id);
    await firstValueFrom(deletedEmployee$);
  }
}
