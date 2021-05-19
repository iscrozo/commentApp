import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from '../../services/comments.service';
import { CommentsModel } from '../../models/comments.model';
import { CommaExpr } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private commentsServices: CommentsService
  ) {}
  // DataComments: CommentsModel[] = [];

  aobData: any[] = [];

  ngOnInit(): void {
    console.log('dashboard componente');
    this.commentsServices.getCommentList().subscribe((DataComments) => {
      this.aobData = DataComments;
    });
  }
 
}
