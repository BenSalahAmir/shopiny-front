import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http:HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  addclaim(claim:any){
    return this.http.post<any>('http://localhost:9004/claimFacture/claim',claim,this.httpOptions) }


    getclaim():Observable<any[]>{
      return this.http.get<any[]>('http://localhost:9004/claimFacture/claim')

    }


    updateStatusClaim(claim:any): Observable<any> {
      return this.http.put<any>('http://localhost:9004/claimFacture/claim/${id}/${statusClaim}', claim);
    }
    getClaimById(id: number): Observable<any> {

      return this.http.get<any>('http://localhost:9004/claimFacture/claim/${id}');
    }

    deleteclaim(idclaim: number): Observable<boolean> {
      return this.http.delete<boolean>(`http://localhost:9004/claimFacture/claim/${idclaim}`);
  }
}
