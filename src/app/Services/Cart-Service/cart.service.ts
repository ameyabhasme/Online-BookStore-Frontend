import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CartModel} from "../../Model/cart-model";
import {ChangeBookQuantity} from "../../Model/change-book-quantity";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartDTO : CartModel = new CartModel();
  public changeBookQuantityDTO : ChangeBookQuantity = new ChangeBookQuantity();
  constructor(private httpClient: HttpClient) { }


  addToCart(id: number) {
    console.log("the id from cart service " + id)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };

    this.cartDTO.bookId = id;
    this.cartDTO.quantity = 1;
    return  this.httpClient.post(`${environment.apiURL}/cart/add`, this.cartDTO , httpOptions )
  }

  loadCart() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.get(`${environment.URL}cart/get` , httpOptions)
  }

  deleteCartList(bookId: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.delete(`${environment.URL}cart/deleteFromCart/${bookId}` , httpOptions)
  }

  increaseBookQuantity(bookQuantity: number , bookId : number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    this.changeBookQuantityDTO.bookId = bookId;
    this.changeBookQuantityDTO.quantity = bookQuantity;
    return this.httpClient.put(`${environment.apiURL}/cart/changeBookQuantity`, this.changeBookQuantityDTO ,httpOptions)
  }
}
