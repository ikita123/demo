import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {  Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerer:any
  
  constructor(private userService:UserService,private router:Router,) { }
    ngOnInit():void {
      this.registerer = new FormGroup({
        name: new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required]),
        address:new FormControl('',[Validators.required]),
        gstNo:new FormControl('',[Validators.required])
       
      });
    }
  
registerUser(){
  this.userService.registerUser(this.registerer.value)
  .subscribe((response:any)=>{
    console.log(response)
    if(response.status=="Success"){
      alert("User Registered successfully!!")
    }
    localStorage.setItem("token",response.token)
    this.router.navigateByUrl("/otpverify")
    },err=>{
      alert("something is wrong")
    }
  )
}
}