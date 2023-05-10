import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bill } from 'src/app/backOffice/bill/Model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillserviceService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  addbill(bill:any){
    return this.http.post<any>("http://localhost:9004/claimFacture/facture",bill,this.httpOptions) }

  getbill():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9004/claimFacture/facture")

  }
  deletebill(idFacture: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:9004/claimFacture/facture/${idFacture}`);
}

  updatebill(bill:any): Observable<any> {
    return this.http.put<any>('http://localhost:9004/claimFacture/facture/${bill.idFacture}', bill);
  }
  getFactureById(billtId: number): Observable<bill> {
    const url = `http://localhost:9004/claimFacture/facture/${billtId}`;

    return this.http.get<bill>(url);
  }

  updateFacture(facture: any): Observable<any> {
    const url = `http://localhost:9004/claimFacture/facture`; 
    return this.http.put<any>(url, facture);
  }



}
