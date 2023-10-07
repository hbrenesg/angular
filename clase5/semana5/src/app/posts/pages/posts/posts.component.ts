import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(posts => this.posts = posts)
    console.log(this.posts)
  }
}
