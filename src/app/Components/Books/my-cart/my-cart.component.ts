import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../Services/Cart-Service/cart.service";
import {BookModel} from "../../../Model/book-model";
import { OrderService } from 'src/app/Services/Order-Service/order.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartResponseModel} from "../../../Model/cart-response-model";
import {toArray} from "rxjs/operators";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  cartArray! : CartResponseModel[];
  cart! : CartResponseModel;
  cartBookArray: BookModel[] = [];
  quantityArray : number[] =[];
  constructor(private cartService : CartService , private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.getCartSummary()
  }

  private getCartSummary() {
    if(localStorage.getItem("token") != null){
      this.cartService.loadCart().subscribe(data => {
        // @ts-ignore
        this.cartArray = data.data;

      })
    }
  }




/**
 *
 * @param bookId
 */
  deleteFromCart(bookId: number) {
    this.cartService.deleteCartList(bookId).subscribe(data => console.log(data));
    setTimeout(() =>{
      this.getCartSummary() ;
    }, 1000);
  }


  increaseBookQuantity(bookId: number, quantity: number) {
    quantity++;
    console.log( "add "+quantity)
    this.cartService.increaseBookQuantity(quantity , bookId).subscribe(data =>{
      console.log(data)
      this.getCartSummary()

    })
  }

  decreaseBookQuantity(bookId: number, quantity: number) {
    if (quantity > 1) {
      quantity-- ;
      console.log("minus " + quantity)
      this.cartService.increaseBookQuantity(quantity, bookId).subscribe(data => {
        console.log(data)
        this.getCartSummary()
      })
    } else {
      this.snackBar.open("quantity can not be less then one", "Dismiss")._dismissAfter(4000)
    }
  }
}
