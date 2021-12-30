import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Reset } from 'src/app/Model/reset';
import { UserDetail } from 'src/app/Model/userdetail';
import { UserService } from 'src/app/Services/User-Service/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  userDetails: UserDetail = new UserDetail();
  reset: Reset = new Reset();

  public error = null;
  public isLoading = false;
  token: any;

  public form = {
    newPassword: null,
  };

  constructor(private userService: UserService,
    private router: Router,
    private matSnakeBar: MatSnackBar,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() { this.activatedRoute.paramMap.subscribe((parameters: ParamMap) => {
    this.token = parameters.get('token');
    console.log(this.token);
    });
    
  }
  updatePassword() {
    this.isLoading = true;
    this.userService.setNewPassword(this.reset, this.token).subscribe(
      (data: any) => this.handleResponse(data),
      // error => this.handleError(error);
  );
  }
  
  // handleError(error:any) {
  //   this.isLoading = false;
  //   this.error = error.error.message;
  //   console.log(error);
  //   this.matSnakeBar.open(this.error, 'ok', {
  //   duration: 5000
  // });
  // }

  handleResponse(data:any) {
    this.isLoading = false;
    this.matSnakeBar.open('Successfully Updated the  Password ', 'OK', {
      duration: 5000
    });
    this.router.navigateByUrl('');
  }
}
