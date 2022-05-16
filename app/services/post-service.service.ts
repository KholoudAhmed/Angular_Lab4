import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IPosts } from '../Shared Classes and types/IPosts';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }
  posts:IPosts[]=[]
  _url="https://jsonplaceholder.typicode.com/posts";
   getPosts():Observable<IPosts[]>
   {
     return this.http.get<IPosts[]>(this._url).pipe(catchError((err)=>{
       return throwError(()=> err.message || "Server Error");
     }))
     //this.http.post(this._url,body)
   }
}
