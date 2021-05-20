import { Component, OnInit, Input } from '@angular/core';

import { CommentsCreateModel } from '../../models/commentscreate.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentsModel } from 'src/app/models/comments.model';

import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
})
export class CreateCommentComponent implements OnInit {
  giValidate: number = 0;
  public commentContact!: FormGroup;
  @Input() aobItem: CommentsModel[] = [];

  constructor(private commentsServices: CommentsService) {
    this.commentContact = this.createComment();
  }

  ngOnInit(): void {}

  // Inicio Metodos
  /**
   *  Metodo que valida el formulario de crear comentario
   * @returns
   */
  createComment() {
    let DATA_AZ_REGEX = /^.([a-zA-Z\s]){1,35}$/;
    let URL_REGEX =
      /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/;

    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(DATA_AZ_REGEX),
        Validators.maxLength(35),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      website: new FormControl('', [Validators.pattern(URL_REGEX)]),
      content: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }
  createCommentComponent = new CommentsCreateModel('', '', '', '');

  onSubmitComment() {
    console.log(this.commentContact.status);
    if (this.commentContact.valid) {
      // se verifica que no exista en el array
      let lbValidateDataExist: boolean = false;
      for (let lobItem of this.aobItem) {
        if (lobItem.email === this.getgsEmail) {
          lbValidateDataExist = true;
          break;
        }
      }
      // console.log(lbValidateDataExist);
      if (!lbValidateDataExist) {
        console.log('no existe email');

        this.createCommentComponent.email = this.getgsEmail;
        this.createCommentComponent.name = this.getgsName;
        this.createCommentComponent.website = this.getgsWebsite;
        this.createCommentComponent.content = this.getgsContent;

        this.commentsServices
          .createComment(this.createCommentComponent)
          .subscribe((res) => {
            console.log(res);
          });
      } else {
        console.log('existe email');
      }
    } else {
      console.log('error en la validacion');
    }
  }
  // Fin metodos

  // Inicio get
  /**
   *
   */
  get getgsName() {
    return this.commentContact.get('name')?.value;
  }

  /**
   *
   */
  get getgsEmail() {
    return this.commentContact.get('email')?.value;
  }

  /**
   *
   */
  get getgsWebsite() {
    return this.commentContact.get('website')?.value;
  }
  /**
   *
   */
  get getgsContent() {
    return this.commentContact.get('contact')?.value;
  }

  // Fin get
}
