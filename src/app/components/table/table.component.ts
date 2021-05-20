import { Component, Input, OnInit ,AfterViewInit, ViewChild} from '@angular/core';
import { CommentsModel } from 'src/app/models/comments.model';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent  implements OnInit {
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

}
