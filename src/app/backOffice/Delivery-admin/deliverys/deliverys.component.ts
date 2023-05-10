import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DeliveryService } from 'src/app/service/Delivery/delivery.service';

@Component({
  selector: 'app-deliverys',
  templateUrl: './deliverys.component.html',
  styleUrls: ['./deliverys.component.css']
})
export class DeliverysComponent implements OnInit{

  deliverys!:any[];
  idDelivery!:number;
  constructor(private service:DeliveryService,private router:Router){}

  ngOnInit(): void {
      this.service.getDeliverys().subscribe(res => {
        console.log(res)
        this.deliverys=res})
  }

  deleteDelivery(id:any){
    console.log(id)
    this.service.DeleteDelivery(id).subscribe();
    window.location.reload()
  }
  //assignDeliveryToDriver(id:any){
  // this.service.assignDeliveryToDriver(id).subscribe(() => {
 // console.log('Delivery assigned to driver successfully');
//});
 // }

 assignDeliveryToDeliveryMan(idDelivery: number) {
  this.service.assignDeliveryToDeliveryMan(idDelivery).subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }
  );
}
assignDeliveryToBestShippingCompany(delivery:any){
  this.service.assignDeliveryToBestShippingCompany(delivery).subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }
  );
}

}
