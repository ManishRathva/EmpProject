import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './datatype';


@Injectable({
  providedIn: 'root'
})
export class empnewService {
  constructor(private http:HttpClient){}

  getNewUser(){
    return this.http.get('http://localhost:3000/users/');
  }
  postUser(data:any){
    return this.http.post('http://localhost:3000/users/',data);
  }
  deleteUser(id: number): Observable<user> {
    return this.http.delete<user>(`http://localhost:3000/users/${id}`);
  }
  updateUser(user: user): Observable<user> {
    return this.http.patch<user>(`http://localhost:3000/users/${user.id}`, user);
  }
  loginUser(data:any){
    return this.http.post('http://localhost:3000/login/',data);
  }


  PostDemoUser(data:any){
    return this.http.post('http://localhost:3000/employee',data);
  }
  getDemoUser(){
    return this.http.get('http://localhost:3000/employee');
  }
  deleteDemo(id:string){
    return this.http.delete(`http://localhost:3000/employee/${id}`);
  }

  PostLogUser(data:any){
    return this.http.post('http://localhost:3000/loginUser',data);
  }
  getLogUser(){
    return this.http.get('http://localhost:3000/loginUser');
  }
  deleteLog(id:string){
    return this.http.delete(`http://localhost:3000/loginUser/${id}`);
  }
}
