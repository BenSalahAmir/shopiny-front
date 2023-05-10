import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from 'src/app/service/Delivery/delivery.service';

@Component({
  selector: 'app-modif-delivery',
  templateUrl: './modif-delivery.component.html',
  styleUrls: ['./modif-delivery.component.css']
})
export class ModifDeliveryComponent implements OnInit {

  deliveryPrice!:String;
  deliverytime!:Date;
  expectedDeliveryDate!:Date;
  statusDelivery!:String;
  meanOfTransport!:String;
  weight!:any;
  customerSatisfaction!:any

idDel!:any;
  constructor(private service:DeliveryService,private route:ActivatedRoute){}


  ngOnInit(): void {
      this.idDel=this.route.snapshot.paramMap.get('id');
     this.service.GetDeliveryByid(this.idDel).subscribe(res => {
      console.log(res)
      this.deliveryPrice=res.deliveryPrice;
      const date1=new Date(res.deliverytime);
      this.deliverytime=date1;
      const date2=new Date(res.expectedDeliveryDate);
      this.expectedDeliveryDate=date2;
      this.statusDelivery=res.statusDelivery;
      this.meanOfTransport=res.meanOfTransport;
     })
  }
  Submit(forum:any){
let body={
  "id_Delivery":this.idDel ,
  "deliveryPrice": this.deliveryPrice,
  "deliverytime": this.deliverytime,
  "expectedDeliveryDate": this.expectedDeliveryDate,
  "statusDelivery": this.statusDelivery,
  "weight": this.weight,
  "meanOfTransport":this.meanOfTransport,
  "customerSatisfaction": this.customerSatisfaction,
}
console.log(body)

this.service.ModifDelivery(body).subscribe(res =>
  console.log(res))

  }

}
