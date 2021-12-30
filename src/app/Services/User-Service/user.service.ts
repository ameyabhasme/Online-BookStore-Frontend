import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, throwError } from "rxjs";
import { ForgetPasswordDTO } from "../../DTOs/forget-password-dto";
import { retry, catchError } from 'rxjs/operators';
import { UserDetail } from 'src/app/Model/userdetail';
import { Reset } from 'src/app/Model/reset';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  forgetPasswordDTO: ForgetPasswordDTO = new ForgetPasswordDTO();
  reset: Reset = new Reset();
  constructor(private httpClient: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  };

/**
 * 
 * @param userDetails 
 * @returns 
 */
  postUserDetails(userDetails: UserDetail): Observable<UserDetail> {
    const body = JSON.stringify(userDetails);
    console.log(body);
    return this.httpClient.post<UserDetail>(environment.URL + "addUser", body, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }

  // setNewPassword(setNewPassword: any, token: string): Observable<any> {
  //   this.resetPasswordDTO.newPassword=setNewPassword;
  //   return this.httpClient.put(environment.baseUrl + "/resetPassword/" + token, this.resetPasswordDTO)
  // }


  /**
   *
   * @param emailId
   */
  resetPassword(emailId: string): Observable<any> {
    console.log("service email" + emailId)
    this.forgetPasswordDTO.email = emailId;
    console.log("dto email" + this.forgetPasswordDTO.email)
    return this.httpClient.post(`${environment.URL}/forgotPassword`, this.forgetPasswordDTO)
  }

  /**
   * 
   * @param updatePassword 
   * @param token 
   * @returns 
   */
  // public setNewPassword(updatePassword: any, token: string): Observable<any> {
  //   return this.httpClient.put(`${environment.URL}/resetPassword/${token}`,updatePassword,);
  // }

  setNewPassword(setNewPassword: any, token: any): Observable<any> {
    this.reset.newPassword=setNewPassword;
    return this.httpClient.put(environment.URL + "/resetPassword/" + token, setNewPassword)
  }

  

  getUserByToken(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.get(`${environment.apiURL}/getUser`, httpOptions);
  }

  getWishList() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    })
    const httpOptions = {
      headers: headers
    };
    return this.httpClient.get(`${environment.apiURL}/wishList/getAllWishList`, httpOptions);
  }
}
