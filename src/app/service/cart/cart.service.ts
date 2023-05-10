import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Discount } from 'src/app/FrontOffice/model/discount.model';
import { Product } from 'src/app/FrontOffice/model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getcarts():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9005/cart/getallcarts")
  }
  getDiscounts():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:9005/cart/getalldiscounts")
  }
  getdiscount(id: number): Observable<Discount> {
    return this.http.get<Discount>(`http://localhost:9005/cart/getdiscount/${id}`)
  }
  addDiscount(discount: Discount): Observable<Discount> {
    return this.http.post<Discount>("http://localhost:9005/cart/addDiscount", discount);
  }
  updateDiscount(discount: Discount): Observable<Discount> {
    return this.http.post<Discount>("http://localhost:9005/cart/updateDiscount", discount);
  }
  deleteDiscount(id: number) {
    return this.http.put(`http://localhost:9005/cart/deleteDiscount/${id}`, {}, { observe: 'response', responseType: 'text' });
  }
  deleteProductFromCart(cartId: number, productId: number, userId: string) {
    const url = `http://localhost:9005/cart/deleteProductFromCart/${cartId}/${productId}/${userId}`;
    return this.http.put(url, {}, { observe: 'response', responseType: 'text' });
  }


  getPendingCartProducts(userId: string): Observable<any[]> {
    const url = `http://localhost:9005/cart/getPendingCartProducts/${userId}`;
    return this.http.get<any[]>(url).pipe(
      map(response => response),
      catchError(error => {
        console.log(error);
        return throwError(error);
      })
    );
  }
  getQuantityOrdered(productId: number, userId: string) {
    return this.http.get<number>(`http://localhost:9005/cart/getQuantityOrdered/${productId}/${userId}`);
  }

  calculerMontantTotal(idCart: number): Observable<number> {
    const url = `http://localhost:9005/cart/calculerMontantTotal/${idCart}`;
    return this.http.get<number>(url);
  }

  increaseProductQuantity(idCart: number,productId: number) : Observable<Product> {
    const url = `http://localhost:9005/cart/increaseProductQuantity/${idCart}/${productId}`;
    return this.http.post<Product>(url, {});
  }
  decreaseProductQuantity(idCart: number,productId: number): Observable<Product> {
    const url = `http://localhost:9005/cart/decreaseProductQuantity/${idCart}/${productId}`;
    return this.http.post<Product>(url, {});
  }

  applyDiscount(discountCode: string,idCart: number,userId: string) {
    const url = `http://localhost:9005/cart/applyDiscount/${discountCode}/${idCart}/${userId}`;
    return this.http.post<string>(url, {});
  }
  getCartTotal(idCart: number): Observable<number> {
    const url = `http://localhost:9005/cart/getCartTotal/${idCart}`;
    return this.http.get<number>(url);
  }
}
