import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  searchTerm: any;

  constructor( private http:HttpClient ) { }

  getApiCall():Observable<any>{
    return this.http.get<any>(`${environment.apiURL}/book/`);
  }

  sortByPriceLowToHigh() :Observable<any>{
    return this.http.get<any>(`${environment.apiURL}/book/sortByPriceLowToHigh`)
  }

  sortByPriceHighToLow() {
    return this.http.get<any>(`${environment.apiURL}/book/sortByPriceHighToLow`)
  }

  getBookById(id: number) {
    return this.http.get<any>(`${environment.apiURL}/book/${id}`)
  }

  searchBookByUserInput(userInput : string) {
    return this.http.get<any>(`${environment.apiURL}/book/bookname/${userInput}`)
  }

}
