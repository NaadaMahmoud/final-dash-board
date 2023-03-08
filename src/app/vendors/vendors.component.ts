import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit{

  vendors:any;
  count:number=0;

constructor(private service:UsersService, private http:HttpClient){}
ngOnInit(): void {
  this.service.getAllVendors().subscribe((data)=>{
    this.vendors=data;
    console.log(data);
  })
}



}
