import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'
import { toPromise } from './to-promise';

@Injectable()
export class CommentService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  // POST /api/comments

  
  // GET method for all method
  getList(){
    return toPromise(this.ajaxTruc
      .get(`${environment.backUrl}/api/comments`));
  }

  // GET Method for one comment
  getDetails(commentId){
    return toPromise(this.ajaxTruc  
      .get(`${environment.backUrl}/api/comment/${commentId}`));
  }


  // PUT method for one comment
  
  // DELETE method for one comment
  delete(commentId){
    return toPromise(this.ajaxTruc
      .delete(`${environment.backUrl}/api/comment/${commentId}`));
  }
}

//we need to setup a class with the same structure that what we will get
export class Comment {
  _id: string;
  comment: string[];
  week: number;
  user: string;
  createdAt?: Date; //le "?" makes this property optional
  updatedAt?: Date; //le "?" makes this property optional
}

