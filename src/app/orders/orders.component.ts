import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  user_id:any;


constructor(private service:OrdersService, private http:HttpClient){}
ngOnInit(): void {
  this.service.allUserOrders(this.user_id).subscribe((data)=>{
    this.user_id=data;
    console.log(data);
  })
}
}
