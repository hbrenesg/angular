import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = []

  constructor(private readonly moviesService: MoviesService) { }


  ngOnInit(): void {
    this.moviesService.nowPlaying().subscribe(m => this.movies = m)
  }

}
