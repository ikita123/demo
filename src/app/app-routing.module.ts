import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { OtpverfiyComponent } from './otpverfiy/otpverfiy.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
const routes: Routes = [
// {path:"register",component:SignupComponent},
// {path:"otpverify",component:OtpverfiyComponent},
// {path:"login",component:LoginComponent}
{ path:'register', component:SignupComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
