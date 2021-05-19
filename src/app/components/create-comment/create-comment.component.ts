import { Component, OnInit } from '@angular/core';

import {CommentsCreateModel} from '../../models/commentscreate.model';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {


  giValidate : number =0;

  constructor() { }

  ngOnInit(): void {
    console.log("create comment");
  }


  createCommentComponent = new CommentsCreateModel('','','','');



  onSubmitComment(){
    console.log("method onSubmitComment");
    this.giValidate  =this.createCommentComponent.validateData();
    if(this.giValidate){
      //
    }
  }
}
