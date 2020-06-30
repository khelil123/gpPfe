import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  listuser :User[]

  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get(environment.UserApi+"user") ;
  }
}
