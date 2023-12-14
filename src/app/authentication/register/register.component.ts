import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userData:any;

  constructor(private router:Router, private authService:AuthenticationService){

  }

  register(registerForm:any){

    const registeredUser = {
      userName: registerForm.value.userName,
      email: registerForm.value.email,
      password: registerForm.value.password,
      confirmPassword: registerForm.value.confirmPassword,
      terms: registerForm.value.terms
    }

    console.log(registerForm.value);
    
    this.authService.registeredUsers(registeredUser).subscribe(data =>{
      this.userData = data;
      registerForm.reset();
      alert("Registered SuccessFully..!!");
      this.router.navigate(['auth/login']);
    }, error=>{
      alert("Something Went Worng");
    })

    
  }

  
}
