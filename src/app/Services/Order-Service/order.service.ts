import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {OrderModel} from "../../Model/order-model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  loadCart() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.get(`${environment.apiURL}/cart/get` , httpOptions)
  }

/**
 * 
 * @param bookId 
 * @returns 
 */
  deleteCartList(bookId: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.delete(`${environment.URL}cart/remove/{cartId}` , httpOptions)
  }

  getAllOrders(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.get(`${environment.apiURL}/order/getAllOrders` , httpOptions)
  }

  placeOrder(orderModel: OrderModel) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.post(`${environment.apiURL}/order/placeOrder`,orderModel ,httpOptions)
  }
}
