import { Component, Input, OnInit } from '@angular/core';
import { CommentsModel } from 'src/app/models/comments.model';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() item: CommentsModel[] = [];
  constructor(private commentsServices: CommentsService) {}

  ngOnInit(): void {
    console.log(this.item);
  }

  getIdComment(index: number) {
    console.log(index);
    this.commentsServices.getCommentid(index).subscribe((res) => {
      console.log(res);
    });
  }

  /**
   *
   */
  calcStyle(value: any, value2:any, value3: any) {
    if (value != null && value2 != null && value3 != null) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }
}
