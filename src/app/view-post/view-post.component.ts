import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../model/post';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  postArray:Post[]=[];

  constructor(private userService:UserService, private titleSvc:Title) { 
    
    
  }

  ngOnInit(): void {
    this.userService.GetPost().subscribe({
      next:(data:any)=>{
      this.postArray = data as Post[];
      this.userService.AddPostArray(this.postArray);
      },
      error:(err:any)=>{

      }
    });
  }

}
