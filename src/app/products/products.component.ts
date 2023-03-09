import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  prod:any;

constructor(private service:ProductsService, private http:HttpClient){}
ngOnInit(): void {
  this.service.allProducts().subscribe((data)=>{
    this.prod=data;
    console.log(data);
  })
}
}
