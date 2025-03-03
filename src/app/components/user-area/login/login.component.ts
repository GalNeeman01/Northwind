import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsModel } from '../../../models/credentials.model';
import { NotifyService } from '../../../services/notify.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
    private credentials = new CredentialsModel();
    public userForm: FormGroup;

    public constructor(
        private userService: UserService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            emailControl: new FormControl(""),
            passwordControl: new FormControl(""),
        })
    }

    public async send()
    {
        try 
        {
            this.credentials.email = this.userForm.get("emailControl").value;
            this.credentials.password = this.userForm.get("passwordControl").value;
            
            await this.userService.login(this.credentials);
            this.router.navigateByUrl("/home");
        }
        catch (err: any)
        {
            console.log(err.message);
        }
    }
}
