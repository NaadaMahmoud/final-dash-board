import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {USER_REGISTER_URL,USER_LOGIN_URL} from '../shared/urls';  
@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private _HttpClient:HttpClient) { }

  register(adminData:object):Observable<any>{
    console.log(adminData);
  return this._HttpClient.post(USER_REGISTER_URL,adminData);
  }

  login(adminData:object):Observable<any>{
  return this._HttpClient.post(USER_LOGIN_URL,adminData);
  }

}
