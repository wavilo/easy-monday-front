import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from '../api/comment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  comments: Comment[] = [];
  commentId: string;

  constructor(
    public apiTruc: CommentService,
    private reqTruc: ActivatedRoute,
    private resTruc: Router,

  ) { }

  ngOnInit() {
    this.apiTruc.getList()
      .then((result: Comment[])=>{
        
        this.comments = result;
        console.log("the result " + result);
      })
      .catch((err)=>{
        console.log("Comment List error");
        console.log(err);
      })
  }


  deleteClick(){
    const isOkay = confirm(`Are you sure you want to delete this comment`)

    if (!isOkay){
      return;
    }
console.log("commentID: " + this.commentId)
    this.apiTruc.delete(this.commentId)
      .then((result)=>{
        
        this.resTruc.navigateByUrl('/comments');
      })
      .catch((err)=>{
        console.log("Delete function")
        console.log(err);
      })
  }



}