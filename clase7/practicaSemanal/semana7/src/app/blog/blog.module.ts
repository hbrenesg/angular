import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { PostItemComponent } from './components/post-item/post-item.component';


@NgModule({
  declarations: [
    BlogComponent,
    PostsComponent,
    PostComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
