import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../model/token';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  currentUser:Token|undefined;
  ngOnInit(): void {
    this.currentUser=this.userService.GetCurrentUser();
    
    this.userService.userLoggedIn.subscribe((data)=>{
      if(data)
      {
        this.currentUser=this.userService.GetCurrentUser();
      }
      else
      {
        this.currentUser=undefined;
        this.router.navigate(['/']);
      }
    });
    this.userService.currRoute.subscribe((data)=>{
      console.log(`Route Received at Nav: ${data}`);
    });
  }

  LogoutUser()
  {
    alert("You are logging out.")
    this.userService.LogoutUser();
  }


}
