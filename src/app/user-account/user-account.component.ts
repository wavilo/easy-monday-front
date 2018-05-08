import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from '../api/comment.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  comments: Comment[] = [];

  constructor(
    public apiTruc: CommentService
  ) { }

  ngOnInit() {
    this.apiTruc.getList()
      .then((result: Comment[])=>{
        console.log(result);
        this.comments = result;
      })
      .catch((err)=>{
        console.log("Phone List error");
        console.log(err);
      })
  }

}