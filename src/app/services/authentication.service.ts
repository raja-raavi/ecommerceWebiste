import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { register } from '../authentication/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient){
  }

  registeredUsers(userData:register) : Observable<register>{
    return this.http.post<register>('http://localhost:3000/RegisteredUsersList', userData);
    
  }

  getAllRegisteredUsers() : Observable<register[]>{
    return this.http.get<register[]>("http://localhost:3000/RegisteredUsersList");
  }

  isUserLoggedIn(){
    if(localStorage.getItem('email') == null && localStorage.getItem('password') == null){
      return false;
    }else{
      return true;
    }
  }
}
