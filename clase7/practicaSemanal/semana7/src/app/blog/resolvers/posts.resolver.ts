import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

export const postsResolver: ResolveFn<Observable<Post[]>> = (route, state) => {
  return inject(PostsService).findAll()
};
