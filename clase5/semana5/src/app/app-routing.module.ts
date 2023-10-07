import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './posts/pages/about/about.component';
import { PostsComponent } from './posts/pages/posts/posts.component';
import { PostDetailComponent } from './posts/pages/post-detail/post-detail.component';
import { NotFoundComponent } from './posts/pages/not-found/not-found.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'prefix' },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [PostsComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
