import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  clients:any;
  count:number=0;


  constructor(private service:UsersService, private http:HttpClient){}
  ngOnInit(): void {
    this.service.getAllClients().subscribe((data)=>{
      this.clients=data;
      // this.ordersQty=da
      console.log(data);
    })

    // this.http.get<number>('http://localhost:5000/orders/orders').subscribe((data)=>{
    //   console.log(data)
    // })
  }
}
