import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
  // নতুন Post যোগ করা
  addPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  // Post এডিট (update করা)
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  // Post ডিলিট করা
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

