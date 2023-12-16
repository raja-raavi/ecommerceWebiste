import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private  service: AuthenticationService){

  }

  logout(){
  
    confirm("are you sure want to Logout!!!!!!");
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}  
