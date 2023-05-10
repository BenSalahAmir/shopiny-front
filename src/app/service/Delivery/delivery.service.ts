import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  addDelivery(delivery:any){
    return this.http.post<any>("http://localhost:9090/delivery/adddeliverymen",delivery,this.httpOptions) }

    getDeliverys():Observable<any[]>{
      return this.http.get<any[]>("http://localhost:9090/delivery/retrievealldelivery")

    }

    getDeliverysmen():Observable<any[]>{
      return this.http.get<any[]>("http://localhost:9090/delivery/getalldeliverymen")

    }


    DeleteDelivery(id:any):Observable<any[]>{
      return this.http.delete<any[]>("http://localhost:9090/delivery/deletedelivery/"+`${id}`)

    }


    GetDeliveryByid(id:any):Observable<any>{
      return this.http.get<any>("http://localhost:9090/delivery/getdeliverybyid/"+`${id}`)

    }

    ModifDelivery(delivery:any){
      return this.http.put<any>("http://localhost:9090/delivery/updatedelivery",delivery) }

    Dashbord(){
    return this.http.get<any>("http://localhost:9090/delivery/reports/deliveries-per-day") }

    //assignDeliveryToDriver(id: number) {
      //const params = new HttpParams().set('idDelivery', id.toString());
     // return this.http.put<any>("http://localhost:9090/delivery/assigndeliverytodriverbylocation", {}, { params });
    //}
    private baseUrl = 'http://localhost:9090/delivery';
    assignDeliveryToDeliveryMan(idDelivery: number): Observable<any> {
      return this.http.put(`${this.baseUrl}/assigndeliverytodriverbylocation/${idDelivery}`, {});
    }
    assignDeliveryToBestShippingCompany(delivery:any){
      return this.http.put<any>("http://localhost:9090/delivery/assignDeliveryToBestShippingCompany",delivery) }

  }
