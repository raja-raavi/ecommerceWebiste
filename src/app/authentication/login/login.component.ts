import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ngOnInit(){
   
    
  }

  submit(data:any){
    console.log(data);
    
  }

}
