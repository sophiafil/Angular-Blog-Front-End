import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Post } from '../model/post';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
 
  fPostTitle = new FormControl('', [Validators.required]);
  fHeaderImage = new FormControl('', [Validators.required]);
  fContent = new FormControl('', [Validators.required]);

  newPost:Post;

  constructor(private userService:UserService, private titleSvc:Title) { 
    this.newPost = new Post();
    this.titleSvc.setTitle('New Post Page');
  }

  ngOnInit(): void {
   
  }
  
  AddPost()
  {
    this.userService.AddPost(this.newPost).subscribe({
      next: (data) => {
        console.log(data);
        alert('Post added!');
      },
      error: (err) => {
        console.log(err);
        alert('There were some issues adding your post.')
      }
    })
    
  }

}
