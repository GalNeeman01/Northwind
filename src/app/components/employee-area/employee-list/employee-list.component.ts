import { Component, inject, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NotifyService } from '../../../services/notify.service';

@Component({
  selector: 'app-employee-list',
  imports: [DatePipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  private employeeService = inject(EmployeeService);
  private router = inject(Router);
  private notifyService = inject(NotifyService);

  public employees : EmployeeModel[];

  public displayDetails(id: number) : void {
    this.router.navigateByUrl("/employee-details/" + id);
  }

  public async deleteEmployee(id: number) {
    try {
        const sure = confirm("are you sure?");

        if (sure)
        {
            await this.employeeService.removeEmployee(id);
            this.employees = this.employees.filter(e => e.id != id);
        }
    }
    catch(error: any) {
        this.notifyService.error(error);
    }
  }

  public async ngOnInit() {
    try {
        this.employees = await this.employeeService.getAllEmployees();
    }
    catch (error: any)
    {
        this.notifyService.error(error);
    }
  }
}
