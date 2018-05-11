import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'
import { toPromise } from './to-promise';

@Injectable()
export class CommentService {
  currentComment: Comment

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  // POST /api/comments
  postComment(creds: CommentCredentials){
    return toPromise(this.ajaxTruc
      .post(`${environment.backUrl}/api/comments`,
      creds, 
      { withCredentials: true}
    ))
      .then((apiResponse: any) => {
        this.currentComment =  apiResponse.commentInfo
      })
      ;
  }


  // GET method for all method
  getList(){
    return toPromise(this.ajaxTruc
      .get(`${environment.backUrl}/api/comments`, {withCredentials: true}));
  }

  // GET Method for one comment
  getDetails(commentId){
    return toPromise(this.ajaxTruc  
      .get(`${environment.backUrl}/api/comment/${commentId}`));
  }

  
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

export class CommentCredentials {
  week: number;
  comment: string[];
}

