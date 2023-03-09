import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ORDERS_URL } from './shared/urls';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  allUserOrders(user_id:string):Observable<any[]>{
    return this.http.get<any[]>(ORDERS_URL+user_id)
  }
}
