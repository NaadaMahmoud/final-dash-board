import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './../Services/admin.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  register_form=new FormGroup({
    f_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    l_name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    // taxNumber:new FormControl(''),
    // Validators.minLength(6),Validators.maxLength(10)
    email:new FormControl('',[Validators.required,Validators.email]),
    // userType:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  constructor(private _AdminService:AdminService,private _Router:Router){

  }

  submitData(){
    console.log(this.register_form.value);
    let data=this.register_form.value
    let type={
      userType:"admin",

    }
    let adminData=Object.assign(data,type)
    console.log(adminData);

    this._AdminService.register(adminData).subscribe({
      next:(response)=>{
        console.log(response);
      }
      
    })
    this._Router.navigate([''])
  }

}
