import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { PostComponent } from './pages/post/post.component';
import { postsResolver } from './resolvers/posts.resolver';

const routes: Routes = [
  { path: 'posts', component: PostsComponent, resolve: { postsData: postsResolver } },
  { path: 'posts/:id', component: PostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
