import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Token } from '../model/token';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() userLoggedIn = new EventEmitter<boolean>();
  @Output('CurrentRoute') currRoute= new EventEmitter<string>();
  @Output('XClusiveEvent') XClusive= new EventEmitter<string>();
  postArray:Post[] = [];
 
  currentUser:Token|undefined;  
  constructor(private httpClient:HttpClient) {
    this.postArray=[];
    let tokenInstance = localStorage.getItem('token');
    this.currentUser = tokenInstance?JSON.parse(tokenInstance):null;
  }

  GetPost()
  {
    return this.httpClient.get(`${environment.serverEndpoint}/Posts`);
  }

  GetPostbyId(postId:string)
  {
    return this.httpClient.get(`${environment.serverEndpoint}/Posts/${postId}`);
  }

  AddPostArray(post:Post[])
  {
    this.postArray=post;
  }
  AddPost(post:Post)
  {
    this.postArray.push(post);
    //{headers:{Authorization:`Bearer ${this.currentUser?.token}`}}
    return this.httpClient.post(`${environment.serverEndpoint}/Posts`,post,{headers:{Authorization:`Bearer ${this.currentUser?.token}`}});
  }

  Login(userId: number, password:string)
  {
    return this.httpClient.get<Token>(`${environment.serverEndpoint}/Users/${userId}/${password}`);
  }

  SetCurrentUser(token:Token)
  {
    this.currentUser = token;
    localStorage.setItem('token',JSON.stringify(token));
    this.userLoggedIn.emit(true);
  }

  GetCurrentUser()
  {
    return this.currentUser;
  }

  LogoutUser()
  {
    this.currentUser=undefined;
    this.userLoggedIn.emit(false);
  }

  Register(userId:Number, pwd:string, firstName:string, lastName:string, emailAddress:string)
  {
    return this.httpClient.post<any>(`${environment.serverEndpoint}/Users`,{userId:userId,password:pwd,firstName:firstName,lastName:lastName,emailAddress:emailAddress});
  }

  DeletePost(postId: number) {

    if (!confirm("Are you sure in deleting your post?")) {
      return;
    }

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('authorization', `Bearer ${this.currentUser!.token}`);

    return this.httpClient.delete(`${environment.serverEndpoint}/Posts/${postId}`, {'headers': headers});
    
  }

  EditPost(editedPost: UserService, postId: number) {

    let headers: HttpHeaders = new HttpHeaders();
    
    return this.httpClient.patch(`${environment.serverEndpoint}/Posts/${postId}`, editedPost, {'headers': headers});
  }

}

export { User };
