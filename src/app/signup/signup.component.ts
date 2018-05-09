import { Component, OnInit } from '@angular/core';
import { SignupCredentials, UserService } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formCreds: SignupCredentials = new SignupCredentials();

  constructor(
    public userTruc: UserService,
    private resTruc: Router
  ) { }

  ngOnInit() {
  }

  signSubmit(){
    this.userTruc.postSignup(this.formCreds)
      .then((result) => {
        this.resTruc.navigateByUrl('/');
      })
      .catch((err) => {
        console.log('Login error');
        console.log(err);
      });
  }

}
