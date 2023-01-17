import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  responseError=false;
  ErrorMsg='';


  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  fUserId = new FormControl(0, [Validators.required]);
  fFirstName = new FormControl('', [Validators.required]);
  fLastName = new FormControl('', [Validators.required])
  fEmail = new FormControl('', [Validators.required, Validators.email]);
  fPassword = new FormControl('', [Validators.required]);

  getEmailErrorMessage() {
    return this.fEmail.hasError('required') ? 'You must enter a value' :
        this.fEmail.hasError('email') ? 'Please enter a valid email address' :
            '';
  }

  RegisterUser()
  {
    if (this.fUserId.valid && this.fFirstName.valid && this.fLastName.valid && this.fEmail.valid && this.fPassword.valid)
    {
      let userId = this.fUserId.value;
      let firstName = this.fFirstName.value;
      let lastName = this.fLastName.value;
      let emailAddress = this.fEmail.value;
      let password = this.fPassword.value;

      if(userId && firstName && lastName && emailAddress && password)
      {
        this.userService.Register(userId, password, firstName, lastName, emailAddress).subscribe(
          {
            next: (data) =>
            {
              alert(`User: ${data.userId} has been created successfully`)
              this.router.navigate(['/Login',{userId:userId}]);
            },
            error: (err)=>
            {
              this.responseError=true;
              this.ErrorMsg=err.Message;
              alert(`Error: ${JSON.stringify(err)}`);
            }
          }
        )
      }
    }
    else
    {
      alert("Please fix your inputs before proceeding.")
    }

  }

}