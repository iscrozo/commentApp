import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  commentes_create,
  commentes_update,
  CommentsModel,
} from '../models/comments.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  API_URL = 'http://simple-api.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

  /**
   * Metodo que retorna el listado de comentarios
   */
  getCommentList() {
    return this.httpClient.get<CommentsModel[]>(
      this.API_URL + '/api/v1/comments'
    );
  }

  /**
   * Metodo que retorna un comentario especifico mediante un id
   * @param param
   * @returns
   */
  getCommentid(id: number) {
    return this.httpClient.get(this.API_URL + '/api/v1/comments/' + id);
  }

  /**
   * Metodo para realizar post de comentario
   * @param aobData
   * @returns
   */
  createComment(aobData: commentes_create) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = {
      headers: httpHeaders,
    };
    return this.httpClient.post<commentes_create>(
      this.API_URL + '/api/v1/comments',
      aobData,
      options
    );
  }

  updateComment(aobData: commentes_update, asParam: string) {
    // this.httpClient.post(this.API_URL+'api/v1/comments/'+asParam+'/update');
    return null;
  }
}
