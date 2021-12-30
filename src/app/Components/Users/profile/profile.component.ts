import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../Services/User-Service/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name!: string;
  email!: string;
  phoneNumber!: string;
  password! : string;
  address!: string;
  city!: string;
  state!: string;

  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.extracted();
  }

  private extracted() {
    let item = localStorage.getItem("token");
    if (item != null) {
      this.userService.getUserByToken().subscribe(data => {
        console.log(data.data)
        this.email = data.data.email;
        this.phoneNumber = data.data.phoneNumber;
        this.password = "*********"
        this.address = "14/A, Anupam park saiful, South-Solapur,Solapur-413004"
        this.city = "Solapur"
        this.state = "Maharashtra"
      })
    }
  }
}
