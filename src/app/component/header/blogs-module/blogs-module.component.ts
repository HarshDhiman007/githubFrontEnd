import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { blogger } from '../../../model/blogger/blogger';
import { BlogsService } from '../../../services/blogs.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-blogs-module',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,RouterOutlet],
  templateUrl: './blogs-module.component.html',
  styleUrl: './blogs-module.component.css'
})
export class BlogsModuleComponent implements OnInit{
  blog=new blogger("","","","","","","")
  file:any
  ngOnInit(){

  }
  constructor(private serv:BlogsService,private router:Router){

  }
  generateAutoId(): string {
    return uuid();
  }
  autoId = this.generateAutoId();
  onChangeFileField(event:any)
  {
    this.file=event.target.files[0]
    this.blog.id=this.autoId;
    this.blog.imgName=this.file.name;
  }
  addBlog()
  {
    this.serv.postUserData(this.blog,this.file).subscribe({
      next:(response)=>{
        console.log(response)
        alert("done")
        this.router.navigate(["/dashboard"])
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
