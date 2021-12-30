import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../Services/User-Service/user.service";
import {BookModel} from "../../../Model/book-model";
import { WishlistService } from 'src/app/Services/WishListService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {


  bookArray : BookModel[] = [];
  constructor(private userService : UserService , private wishlistService : WishlistService) { }

  ngOnInit(): void {
    this.getWishList();
  }

  private getWishList() {
    let item = localStorage.getItem('token');
    if (item != null) {
      this.userService.getWishList().subscribe(data =>{
     // @ts-ignore
       this.bookArray = data["data"]
     })
    }
  }

  deleteFromWishList(bookId: number) {
    this.wishlistService.deleteFromWishList(bookId).subscribe(data => {});
    setTimeout(() =>{
      this.getWishList() ;
    }, 1000);
  }
}
