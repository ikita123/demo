import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
// import { OtpverfiyComponent } from './otpverfiy/otpverfiy.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    // OtpverfiyComponent,
    UserService,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }