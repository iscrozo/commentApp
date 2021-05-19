import { Component, OnInit, Input } from '@angular/core';

import { CommentsCreateModel } from '../../models/commentscreate.model';

import { CommentsModel } from 'src/app/models/comments.model';

import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
})
export class CreateCommentComponent implements OnInit {
  giValidate: number = 0;
  @Input() aobItem: CommentsModel[] = [];

  constructor(private commentsServices: CommentsService) {}

  ngOnInit(): void {
    console.log('create comment');
  }

  createCommentComponent = new CommentsCreateModel(
    '',
    '',
    '',
    ''
  );

  onSubmitComment() {
    console.log('method onSubmitComment');
    this.giValidate = this.createCommentComponent.validateData();
    if (this.giValidate == 1) {
      let lobEmail = [];
      for (let lobItem of this.aobItem) {
        lobEmail.push(lobItem.email);
      }
      // console.log(lobEmail);
      console.log(
        lobEmail.filter((email) => email !== this.createCommentComponent.email)
          .length > 0
      );
      if (
        lobEmail.filter((email) => email === this.createCommentComponent.email)
          .length > 0
      ) {
        console.log('ya existe el correo, intenta con otro correo');
      }
    } else {
      this.commentsServices
        .createComment(this.createCommentComponent)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
