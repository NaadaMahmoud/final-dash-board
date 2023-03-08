import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CLIENTS_URL, VENDORS_URL } from '../shared/urls';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllClients():Observable<any[]>{
    return this.http.get<any[]>(CLIENTS_URL)
  }

  getAllVendors():Observable<any[]>{
    return this.http.get<any[]>(VENDORS_URL)
  }

}
