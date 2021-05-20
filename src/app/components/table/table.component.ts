import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { CommentsModel } from 'src/app/models/comments.model';
import { CommentsService } from '../../services/comments.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit , AfterViewInit{
  tableDataSrc: any;
  @Input() item: CommentsModel[] = [];
  dataSource!: CommentsModel[];
  constructor(private commentsServices: CommentsService) {}
  displayedColumns: string[] = ['id', 'name', 'email', 'website', 'content'];
  aobData: CommentsModel[] = [];

  ngOnInit(): void {
    console.log('table componente');
    console.log(this.item);
    this.commentsServices.getCommentList().subscribe((DataComments) => {
      this.item = DataComments;

      this.tableDataSrc = new MatTableDataSource(DataComments);
      this.tableDataSrc.paginator = this.paginator;
    });
  }

 

  ngAfterViewInit() {
    this.tableDataSrc.sort = this.sort;
  }

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  getIdComment(index: number) {
    console.log(index);
    this.commentsServices.getCommentid(index).subscribe((res) => {
      console.log(res);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSrc.filter = filterValue.trim().toLowerCase();

    if (this.tableDataSrc.paginator) {
      this.tableDataSrc.paginator.firstPage();
    }
  }
}
