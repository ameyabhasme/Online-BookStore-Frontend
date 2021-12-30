import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Model/LoginModel';
import { UserService } from 'src/app/Services/User-Service/user.service';
import { LoginService } from './../../../Services/Login-Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin = new LoginModel();

  constructor(private loginService: LoginService, private snackbar: MatSnackBar,
    private route: Router,
    private userService:UserService) { }

  hide: boolean = true;

  myFunction() { }

  ngOnInit(): void {
  }

  public postLogin() {
    this.loginService.login(this.userLogin).subscribe(token => {
      console.log("Login successful", token['token']),
        localStorage.setItem('token', token['token']);
      this.userLogin = token;
      this.snackbar.open('Login successful !!','Dismiss')._dismissAfter(5000);
      this. storeUserDetails();
      this.route.navigate(['']);

    })
  }
  storeUserDetails(){
    let item = localStorage.getItem("token");
    if (item != null) {
      this.userService.getUserByToken().subscribe(data => {
        console.log(data.data)
        localStorage.setItem("email",data.data.email)
      });
    }
  }

}
