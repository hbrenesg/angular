import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostDetailComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
