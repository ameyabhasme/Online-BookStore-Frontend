import { OrderService } from 'src/app/Services/Order-Service/order.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartResponseModel} from "../../../Model/cart-response-model";
import {OrderModel} from "../../../Model/order-model";
import {Component, OnInit} from "@angular/core";
import {CartService} from "../../../Services/Cart-Service/cart.service";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  orderModel :OrderModel = new OrderModel();
  cart! : CartResponseModel;
  cartArray! : CartResponseModel[];
  open : boolean = false;
  fullName! : string;
  mobileNumber! :string;
  addressType! :any;
  address! : string
  city! : string;
  constructor(private cartService : CartService, private orderService : OrderService ,private snackBar : MatSnackBar) { }




  ngOnInit(): void {
    this.getCartSummary()
  }

  private getCartSummary() {
    if(localStorage.getItem("token") != null){
      this.cartService.loadCart().subscribe(data => {
        // @ts-ignore
        this.cartArray = data.data;
        console.log("this is cart array" +this.cartArray);
        // this.cartArray.forEach(item =>{
        //   console.log(item.bookId)
        //   this.quantityArray.push(item.quantity);
        //   // this.cartBookArray.push(item.bookId);
        // })
        // console.log(this.cartBookArray)
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

  placeOrder() {
    this.orderModel.name = this.fullName
    this.orderModel.city = this.city;
    console.log(this.orderModel.city)
    this.orderModel.address = this.address;
    this.orderModel.landmark = "";
    this.orderModel.phoneNo = this.mobileNumber;
    this.orderModel.addressType =this.addressType

    this.orderService.placeOrder(this.orderModel).subscribe(data =>{
      console.log(data);
    })
  }

  openOrderSummary() {
    this.open =true;
  }

}
