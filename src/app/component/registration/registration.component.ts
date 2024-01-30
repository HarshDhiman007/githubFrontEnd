
import { CommonModule } from '@angular/common';

import { Component, NgModule, OnInit, ViewChild } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { register } from '../../model/register';
import { RegsiterSerService } from '../../services/regsiter-ser.service';
 
@Component({

  selector: 'app-registration',

  standalone: true,

  imports: [CommonModule,FormsModule,RouterModule,CommonModule,RouterOutlet],

  templateUrl: './registration.component.html',

  styleUrl: './registration.component.css'

})

export class RegistrationComponent{
  @ViewChild('registartion') reg: NgForm;
  constructor(private regSer:RegsiterSerService){}
  onSubmit(reg:register)
  {
    console.log(reg)
    this.regSer.registerUser(reg).subscribe(data=>{
      alert("Successfully shipped data")
    },error=>alert("user is not registered")
    )
  }

}
