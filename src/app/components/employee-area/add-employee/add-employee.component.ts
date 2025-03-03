import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employee.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
    public employee = new EmployeeModel();
    public employeeForm: FormGroup;

    private formsBuilder = inject(FormBuilder);

    public send() {

    }

    ngOnInit() {
        this.employeeForm = this.formsBuilder.group({
            nameControl: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
            titleControl: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
            birthdateControl: new FormControl("", [Validators.required]),
            cityControl: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
            countryControl: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
            imageControl: new FormControl("", [Validators.required]),
        });
    }
}
