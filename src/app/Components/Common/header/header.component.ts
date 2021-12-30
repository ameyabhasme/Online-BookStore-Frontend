import {Component, HostListener, OnInit} from '@angular/core';
import {BookService} from "../../../Services/Book-Service/book.service";
import {Router} from "@angular/router";
import { CartService } from 'src/app/Services/Cart-Service/cart.service';
import { BookModel } from 'src/app/Model/book-model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  navbarFixed: boolean = false;
  name: string = "Profile";
  searchTerm: any;
  bookArray!:BookModel[];

  constructor( private bookService: BookService, private route: Router,
    private cartService:CartService) { }

  ngOnInit(): void {
    if (localStorage.getItem("email") == "arunbiradar24@gmail.com"){
      this.name = "Arun";
    }if (localStorage.getItem("email") == "anzarshaikh373@gmail.com"){
      this.name = "Anzar";
    }
    this.loadCartCount();
  }


  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }


  navigateTCart() {
    this.route.navigate(["/my-cart"])
  }
  loadCartCount(){
    if(localStorage.getItem("token")!=null){
      this.cartService.loadCart().subscribe(data =>{
        // @ts-ignore
        this.bookArray = data.data;
      })
    }
  }

  goTo(component: string) {
    if (component == "/login"){
      localStorage.removeItem("token")
      localStorage.removeItem("email")
    }
    this.route.navigate([component])
  }
}
