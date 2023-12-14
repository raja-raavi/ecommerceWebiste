import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthenticationService, private router:Router){

  }

  login(loginForm:any){
    this.authService.getAllRegisteredUsers().subscribe(data=>{
      console.log(data);
      
      const result = data.find((res:any)=>{
        return res.email === loginForm.value.email && res.password === loginForm.value.password        
      });
      console.log(result);

      if(result){
        alert("You are SuccessFully LoggedIn!!!");
        localStorage.setItem("email",loginForm.value.email);
        localStorage.setItem("password",loginForm.value.password);
        loginForm.reset();
        this.router.navigate(['home']);
        return true;

      }else{
        alert("Opps...User Not Found With This Data!!!!");
        return false;
      }
    }, error=>{
      alert("Something Went Wrong...Try Again!!!");
    })
  }
}
