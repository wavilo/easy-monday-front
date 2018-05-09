import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { toPromise } from './to-promise';
import { environment } from '../../environments/environment'

@Injectable()
export class UserService {

  currentUser: User;

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  // GET /checklogin
  check(){
    return toPromise(this.ajaxTruc  
      .get(`${environment.backUrl}/api/checklogin`, { withCredentials: true }))
      .then((apiResponse: any)=>{
        //set our logged in user state
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });

  }
  // POST /signup
  postSignup(creds: SignupCredentials){
    return toPromise(this.ajaxTruc
      .post(`${environment.backUrl}/api/signup`,
      creds, 
      { withCredentials: true }
    ))
      .then((apiResponse: any)=>{
        //set our logged in user state
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // POST /login
  postLogin(creds: LoginCredentials){
    return toPromise(this.ajaxTruc
      .post(`${environment.backUrl}/api/login`,
      creds, 
      { withCredentials: true }
    ))
      .then((apiResponse: any)=>{
        //set our logged in user state
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // GET /logout
  logout(){
    return toPromise(this.ajaxTruc
      .get(`${environment.backUrl}/api/logout`, { withCredentials: true }))
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

}

export class User {
  _id: string;
  name: string;
  email: string;
  updated_at: Date;
  created_at: Date;
}

export class LoginCredentials {
  email: string;
  password: string;
}

export class SignupCredentials {
  name: string;
  email: string;
  password: string;
}
