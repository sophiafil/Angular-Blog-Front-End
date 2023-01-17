import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Post } from '../model/post'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  title: string = "";
  headerImage: string = "";
  content: string = "";
  postId: number = 0;
  


  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) {
  }

  ngOnInit(): void {

    let currentPost = this.activatedRoute.snapshot.params['postId'];

    this.userService.GetPostbyId(currentPost).subscribe(data => {
      let dta = data as any;
      this.title = dta.title;
      this.headerImage = dta.headerImage;
      this.content = dta.content;
      this.postId = dta.postId;
    })
  }


  EditPost()
  {
    this.userService.EditPost(this.userService, this.postId).subscribe({
      next: (data) => {
        console.log(data);
        alert('Your post was edited!');
      },
      error: (err) => {
        console.log(err);
        alert('There were some issues editing your post.')
      }
    })

    
    
  }
  

    
  }

