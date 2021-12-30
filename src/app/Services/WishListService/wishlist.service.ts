import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AddWishlistModel} from "../../Model/add-wishlist-model";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  public addWishListModel : AddWishlistModel = new AddWishlistModel();

  constructor(private httpClient: HttpClient) { }
  
    addToWishList(bookId: number) {
      console.log("book id from service "+bookId)
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      })
      const httpOptions = {
        headers: headers
      };
      this.addWishListModel.bookId = bookId;
      return this.httpClient.post(`${environment.apiURL}/wishList/addToWishList`, this.addWishListModel ,httpOptions)
    }

  deleteFromWishList(bookId: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.delete(`${environment.apiURL}/wishList/deleteFromWishListByBookId/${bookId}` , httpOptions)
  }
}
