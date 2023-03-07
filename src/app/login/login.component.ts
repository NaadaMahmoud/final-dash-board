import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from './../Services/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login_form=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.minLength(3),Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
   
  })
constructor(private _Router:Router,private _AdminService:AdminService){

}
submitData(){

  this._Router.navigate(['dashboard'])
  console.log(this.login_form.value);
  this._AdminService.login(this.login_form).subscribe({
    next:(response)=>{
      console.log(response);
    }
  })
}

}
