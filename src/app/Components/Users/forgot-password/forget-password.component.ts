import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../Services/User-Service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  emailId! : string;

  constructor(private userService : UserService , private snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }


  sendMail() {
      this.userService.resetPassword(this.emailId).subscribe(data => {
        let value : string = data["data"];
        if(value.endsWith(".com")){
          this.snackBar.open("Mail sent to " + data["data"],"Dismiss")._dismissAfter(5000)
        }else {
          this.snackBar.open("No user form of entered email","Dismiss")._dismissAfter(5000)
        }
      })
  }
}
