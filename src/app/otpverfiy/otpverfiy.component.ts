// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../shared/user.service';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-otpverfiy',
//   templateUrl: './otpverfiy.component.html',
//   styleUrls: ['./otpverfiy.component.css']
// })
// export class OtpverfiyComponent implements OnInit {
//   otpverfiy:any
//   constructor(private userService:UserService,private router:Router) { }
//     ngOnInit():void {
//       this.otpverfiy = new FormGroup({
//         otp: new FormControl('',[Validators.required]),
        
//       });
//   }
// otpvafify(){
//   this.userService.otpvafify(this.otpverfiy.value)
  
//     localStorage.setItem("token",token)
//     this.router.navigateByUrl("/otpverify")
//     },err=>{
//       alert("something is wrong")
//     }
  // }
