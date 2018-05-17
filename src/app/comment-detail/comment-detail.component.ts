import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService, Comment } from '../api/comment.service';


@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  commentId: string;
  comment: Comment;

  constructor(
    private reqTruc: ActivatedRoute,
    public apiTruc: CommentService,
    private resTruc: Router,
  ) { }

  ngOnInit() {
    this.reqTruc.paramMap
    .subscribe((myParams)=>{
      this.commentId = myParams.get('blahId');
      this.fetchCommentData();
    });
  }

  fetchCommentData(){
    this.apiTruc.getDetails(this.commentId)
      .then((result: Comment) => {
        console.log(result);
        this.comment = result
      })
      .catch((err) => {
        console.log('Comment details error');
        console.log(err);
      })
  }

  deleteClick(){
    const isOkay = confirm(`Are you sure you want to delete this comment`)

    if (!isOkay){
      return;
    }

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
