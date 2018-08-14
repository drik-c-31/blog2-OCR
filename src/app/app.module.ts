import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListItemComponent } from './posts-list/posts-list-item/posts-list-item.component';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './services/posts.service';
import { NewPostComponent } from './posts-list/new-post/new-post.component';



const appRoutes: Routes = [

  { path: 'posts', component: PostsListComponent },

  { path: 'new', component: NewPostComponent },
  
  { path: '', redirectTo: 'posts', pathMatch: 'full' },

  { path: '**', redirectTo: 'posts' }

];

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsListItemComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
