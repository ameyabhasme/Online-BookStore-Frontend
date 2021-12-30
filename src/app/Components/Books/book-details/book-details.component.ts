import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BookModel } from "../../../Model/book-model";
import { BookService } from "../../../Services/Book-Service/book.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartService} from "../../../Services/Cart-Service/cart.service";
import { WishlistService } from 'src/app/Services/WishListService/wishlist.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  private id!: number;
  book = new BookModel();

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService , private wishListService : WishlistService ,private snackBar : MatSnackBar, private cartService : CartService) {
  }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["bookId"];
    console.log("this is id: " + this.id)
    this.loadBook(this.id)
  }

/**
 * 
 * @param id 
 */
  loadBook(id: number) {
    this.bookService.getBookById(id).subscribe(data => {
      console.log(data)
      this.book = data.data;
    })
  }

  
  addToBag() {
    console.log(this.id);
    this.cartService.addToCart(this.id).subscribe(data => {
      console.log(data)
      if (data != null){
        this.snackBar.open("Book has been added to your bag " ,"Dismiss")._dismissAfter(4000)
      }
    })

  }

  addToWishlist() {
    console.log(this.id);
    this.wishListService.addToWishList(this.id).subscribe(data => {
      console.log(data);
      if (data != null){
        this.snackBar.open("Book has been added to your wishlist " ,"Dismiss")._dismissAfter(4000)
      }
    })
  }
}
