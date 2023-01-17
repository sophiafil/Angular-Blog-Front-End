import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { RouterModule, Routes } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  {
    path:'Login',
    component: LoginComponent

  },
  {
    path:'Register',
    component: RegisterComponent
  },
  {
    path:'CreatePost',
    component: CreatePostComponent
  },
  {
    path:'EditPost',
    component: EditPostComponent
  },
  {
    path:'ViewPost',
    component: ViewPostComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
