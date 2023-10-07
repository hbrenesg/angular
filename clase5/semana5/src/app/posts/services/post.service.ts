import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = 'http://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  // getAll
  getAll(): Observable<Post[]> {
    const url: string = `${this.baseUrl}/posts`

    return this.http.get<Post[]>(url)
  }
}
