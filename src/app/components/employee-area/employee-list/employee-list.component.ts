import { Component, inject, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [DatePipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  private employeeService = inject(EmployeeService);
  private router = inject(Router);

  public employees : EmployeeModel[];

  public displayDetails(id: number) : void {
    this.router.navigateByUrl("/employee-details/" + id);
  }

  public async ngOnInit() {
    this.employees = await this.employeeService.getAllEmployees();
  }
}
