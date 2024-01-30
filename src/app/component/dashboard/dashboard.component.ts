import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';
import { BlogsService} from '../../services/blogs.service';
import { ShowBlogsService } from '../../services/show-blogs.service';
import { blogger } from '../../model/blogger/blogger';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private _blogser: BlogsService, private _addser: AddService,private blogss:ShowBlogsService) {}
  Blogs:any;
  BlogsId:any;
  Bloging:any[]=[]
  ngOnInit(): void {
    this.blogss.getBlogs().subscribe(
      user=>{
        console.log(user)
        this.Blogs=user
        this.Bloging=this.Blogs
      },
      error=>{
        console.log(error)
      }
    )
  }
  // readlater(data){
  //   console.log(data)
  //   this._addser.addToReadLater(data);
  //   alert("Added to Favourite")
  // }
 
}
