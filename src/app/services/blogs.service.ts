import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { blogger } from '../model/blogger/blogger';
import { ServiceService } from '../service.service';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private http:HttpClient){
  }
  postUserData(blog:blogger,file:Blob)
  {
    console.log(blog)
    let formdata:FormData=new FormData
    formdata.append("file",file)
    formdata.append("blogData",JSON.stringify(blog))
    return this.http.post(`http://gateway:9094/dashboard/putBlogs`,formdata)
  }
}
