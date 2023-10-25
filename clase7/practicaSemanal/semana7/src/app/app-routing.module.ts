import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/pages/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './users/pages/list/list.component';
import { DetailsComponent } from './users/pages/details/details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
