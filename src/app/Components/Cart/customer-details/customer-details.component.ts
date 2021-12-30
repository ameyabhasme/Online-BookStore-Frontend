import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/Model/book-model';
import { CartService } from 'src/app/Services/Cart-Service/cart.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartResponseModel} from "../../../Model/cart-response-model";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  cartBooksArray! : BookModel[] ;
  cartArray! : CartResponseModel[];
  cart! : CartResponseModel;
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
