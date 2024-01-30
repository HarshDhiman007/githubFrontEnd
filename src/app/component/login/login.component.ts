import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthServService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { JwtServiceService } from '../../services/jwt-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials={
    username:"",password:""
  }
  constructor(private jwtSer:JwtServiceService){
  }
  temo:boolean=true;
  checkStatus(d1:string)
  {
    if(d1==null)
    {
      this.temo=false;
      
    }
  }
  onSubmit()
  {
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password))
    {
      console.log("Login ready to send data to server")
      this.jwtSer.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response.token)
          this.jwtSer.loginUser(response.token)
          window.location.href="/dashboard"
        },
        error=>{
          console.log(error)
        } 
      )
    }
    else{
      alert("Make sure that no field is empty")
    }
  }
}
