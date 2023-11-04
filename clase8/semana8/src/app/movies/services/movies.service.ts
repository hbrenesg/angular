import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly baseUrl: string = environment.API
  private readonly apiKey: string = environment.apiKey

  constructor(private readonly httpClient: HttpClient) { }

  nowPlaying(page = 1): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/now_playing`, {
      params: {
        'language': 'en-US',
        'page': page,
        'api_key': this.apiKey
      }
    })
  }
}
