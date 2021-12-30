import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserDetail } from 'src/app/Model/userdetail';
import { UserService } from 'src/app/Services/User-Service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  hide = true;

  userDetails:UserDetail = new UserDetail();


  constructor(private router: Router,
    private userService: UserService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  public userData() {
    this.userService.postUserDetails(this.userDetails).subscribe((Data) => {
      console.log(Data),
        this.userDetails = Data;
        this.goToLoginPage();
    })
  }

  goToLoginPage(){
    this.snackbar.open('User Registered successfully   !!')
    ._dismissAfter(5000);
  this.router.navigate(['/login'])
  }

}
