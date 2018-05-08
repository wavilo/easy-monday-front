import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/toPromise';

@Injectable()
export class CommentService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  // POST /api/comments

  
  // GET method for all method
  getList(){
    return this.ajaxTruc
      .get('http://localhost:3000/api/comments')
      .toPromise();
  }

  // GET Method for one comment
  getDetails(commentId){
    return this.ajaxTruc  
      .get(`http://localhost:3000/api/comment/${commentId}`)
      .toPromise();
  }


  // PUT method for one comment
  
  // DELETE method for one comment
  delete(commentId){
    return this.ajaxTruc
      .delete(`http://localhost:3000/api/comment/${commentId}`)
      .toPromise();
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

