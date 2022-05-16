import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../Shared Classes and types/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  users:IUser[]=[]
  _url="https://jsonplaceholder.typicode.com/users";
   getUsers():Observable<IUser[]>
   {
     return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
       return throwError(()=> err.message || "Server Error");
     }))
     //this.http.post(this._url,body)
   }
}