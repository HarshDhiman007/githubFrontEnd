import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { AddService } from '../../../services/add.service';
import { BlogsService } from '../../../services/blogs.service';
import { comment } from '../../../model/blogger/comment';
import { FormsModule } from '@angular/forms';
import { ShowBlogsService } from '../../../services/show-blogs.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,RouterOutlet],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  demo:string
  BlogsId:any
  comme=new comment("","","","")
  comm:any
  com:comment
  Blogss:any
  Blogs:any
  constructor(private _blogser: BlogsService, private activeRoute : ActivatedRoute,private addser :AddService,private showB:ShowBlogsService) {}
  ngOnInit():void{
    this.showB.getBlogs().subscribe(
      user=>{
        this.Blogss=user
        this.BlogsId=this.activeRoute.snapshot.params['id'];
        this.Blogs = this.Blogss.find((x) => x.id == this.BlogsId);
        console.log(this.Blogs)
      },
      error=>{
        console.log(error)
      }
    ),
    this.BlogsId=this.activeRoute.snapshot.params['id'];
    this.addser.showComments(this.BlogsId).subscribe(
      user=>{
        console.log(user)
        this.comm=user
      },
      error=>{
        console.log(error)
      }
    )
  }
  generateAutoId(): string {
     return uuid();
  }
  onChangeFileField(event:any)
  {
    this.comme.commentId=this.autoId
    this.comme.vId=this.BlogsId
    this.comme.commentUsername="Harsh"
  }
  autoId = this.generateAutoId();
  addComm()
  {
    this.addser.addComments(this.comme).subscribe({
      next:(response)=>{
        console.log(response)
        alert("done")
      },
      error:(error)=>{
        console.log(error)
        alert("error")
      },
      complete:()=>{
        console.log("request is completed");
      }
    })

  }
}