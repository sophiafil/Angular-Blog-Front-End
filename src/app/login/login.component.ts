import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private activatedRoute:ActivatedRoute) { }

  fUserId = new FormControl(0, [Validators.required]);
  fPassword = new FormControl('', [Validators.required]);

  userId=0;
  password='';
  errorOccured=false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params);
      this.userId=params['userId'];
    });
  }

  public showPassword: boolean = false;

  public viewPassword(): void {
    this.showPassword = !this.showPassword;
  }

  Login()
  {
        this.userService.Login(this.userId, this.password).subscribe({
          next: (data) => {
            this.userService.SetCurrentUser(data);
            console.log(data);
            alert("You have successfully logged in!");
          },
          error: (err) => {
            console.log(err);
            alert("There was trouble logging you in.");
            
          },
          complete: () => {
            console.log('Complete')
          }
      });

    
    
  }

}
