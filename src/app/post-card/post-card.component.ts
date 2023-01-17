import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/post';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input () currentPost: Post | null = null;
  @Output () deletePost = new EventEmitter<number>();
  @Output () editPost = new EventEmitter<number>();

  userId: string = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    
    let possibleUser = this.userService.GetCurrentUser();

    if (possibleUser != null) {
      this.userId = (jwtDecode(possibleUser.token) as any).UserData.userId;
    }
  }

  DeletePost() {
    this.userService.DeletePost(this.currentPost!.postId)?.subscribe(data => {
      alert("You are deleting your post.");
    })
  }

  EditPost() {
    this.editPost.emit(this.currentPost?.postId);
    this.router.navigate(['/EditPost', {
        postId: this.currentPost?.postId,
        title: this.currentPost?.title,
        content: this.currentPost?.content,
        headerImage: this.currentPost?.headerImage
      }]);
  }
}
