import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, public service: AuthenticationService){

  }

  logout(){

    var result = window.confirm("are you sure want to Logout!!!")
    if(result==true){
      this.router.navigate(['auth/login'])
      return localStorage.clear();
    }else{
      this.router.navigate(['home'])
    }

  }
}  
