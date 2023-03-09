import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS_URL } from './shared/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 

  constructor(private http:HttpClient) { }

  allProducts():Observable<any[]>{
    return this.http.get<any[]>(PRODUCTS_URL)
  }


}
