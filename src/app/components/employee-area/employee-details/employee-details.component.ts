import { Component, inject, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  imports: [RouterModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  public employee: EmployeeModel;

  private activatedRoute = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);

  public async ngOnInit() {
    try {
      const id = this.activatedRoute.snapshot.params["id"];
      this.employee = await this.employeeService.getEmployee(id);
    }
    catch (error)
    {
      console.log(error);
    }
  }
}
