import { NgIf } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule,NgIf, ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  constructor(private router:Router){

  }

  navigateToLogin(){
    this.router.navigateByUrl("/login");
  }

  userObject: any = {
    firstName:'',
    lastName:''
  }

  clickSub(){
    const formValue = this.userObject 
  }

  reactiveForm: FormGroup = new FormGroup({
    firstName:new FormControl("", [Validators.required, Validators.minLength(5)]),
    lastName:new FormControl(""),

  })
}
