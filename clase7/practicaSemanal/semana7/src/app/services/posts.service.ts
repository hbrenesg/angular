import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // baseUrl: string = 'http://localhost:3002'
  baseUrl: string = environment.api

  constructor(private readonly http: HttpClient) { }

  findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl)
  }

  findById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`)
  }

  create(post: Post) {
    const body = { title: post.title, body: post.body, userId: 1 }
    return this.http.post<newPostId>(this.baseUrl, body)
  }

  update(post: Post) {
    const body = { title: post.title, body: post.body, userId: 1 }
    return this.http.put<newPostId>(`${this.baseUrl}/${post.id}`, body)
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}

interface newPostId {
  id: string
}