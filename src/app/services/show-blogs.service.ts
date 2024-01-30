import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowBlogsService {

  constructor(private http:HttpClient) { }
  getBlogs()
  {
    return this.http.get(`http://gateway:9094/dashboard/showBlogs`)
  }
}
