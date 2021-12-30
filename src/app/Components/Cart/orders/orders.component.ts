import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../Services/Order-Service/order.service";
import {BookModel} from "../../../Model/book-model";
import {OrderModel} from "../../../Model/order-model";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderArray : OrderModel[] = [];
  orderBookArray : BookModel[] = [];
  book! : BookModel;
  orderDate! : string;


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadBookFromCart()
  }

  private loadBookFromCart() {
    this.orderService.getAllOrders().subscribe(data =>{

      // @ts-ignore
      this.orderArray = data.data;
      this.orderArray.forEach(item => {
        this.orderDate = item.orderDate
        item.bookId.forEach(bookItem => {
          this.book = bookItem;
          this.orderBookArray.push(this.book)
        })
      })
    });
  }

}
