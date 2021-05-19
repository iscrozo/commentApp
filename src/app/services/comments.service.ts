import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    // return this.httpClient.post(this.API_URL+'api/v1/comments');
    return null;
  }

  updateComment(aobData: commentes_update, asParam: string) {
    // this.httpClient.post(this.API_URL+'api/v1/comments/'+asParam+'/update');
    return null;
  }
}
