import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BookService } from '../../../Services/Book-Service/book.service'
import { BookModel } from "../../../Model/book-model";
import { Router } from "@angular/router";


@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  bookDetails: BookModel[] = [];

  constructor(private bookService: BookService, private route: Router) { }

  ngOnInit(): void {
    this.BookDetails();
  }

  BookDetails() {
    this.bookService.getApiCall().subscribe(data => {
      this.bookDetails = data;
    })
  }

  sortByPriceLowToHigh() {
    this.bookService.sortByPriceLowToHigh().subscribe(data => {
      this.bookDetails = data
    });
  }

  sortByPriceHighToLow() {
    this.bookService.sortByPriceHighToLow().subscribe(data => {
      this.bookDetails = data;
    })
  }

  /**
   * 
   * @param bookId 
   */
  goToBookDetails(bookId: number) {
    console.log("this is my id" + bookId)
    this.route.navigate(["book-details", bookId])
  }

  searchBook() {
    this.bookService.searchBookByUserInput(this.bookService.searchTerm).subscribe(data => {
      console.log(data)
    })

  }
}
