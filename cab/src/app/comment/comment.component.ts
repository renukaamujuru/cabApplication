import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @ViewChild('addComment')
  storecomment: String;
  comment: any;
  count = 0;
  likevalue;
  x;
  username = sessionStorage.username;

  constructor() {
    this.x=setInterval(function likeOutput() {
      if (this.count >= 1) {
        this.likevalue = "you have liked";
        clearInterval(this.x);
      }
      this.count++;
    }, 3000);

  }

  form = new FormGroup({

    addComment: new FormControl('')

  })
  get addComment() {
    return this.form.get('addComment');
  }

  submit(form) {
    let data = form.value;
    this.storecomment = this.comment;
    console.log(this.storecomment);
    if (this.count >= 1) {
      this.storecomment = "your modified comment is  " + this.comment;
      console.log(this.count);
    }
    this.count++;
    this.addComment.setValue('');
  }




  ngOnInit() {
  }

}
