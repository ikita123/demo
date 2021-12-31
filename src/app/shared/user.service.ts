import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) {}
registerUser(data:any){
  return this.http.post<any>("https://localhost:8000/index/registration",data)
 }
otpvafify(data:any){
  return this.http.post<any>("https://localhost:8000/index/verification",data),{headers:new HttpHeaders(
    {"content-type":"application/json",Authorization:`${localStorage.getItem("token")}`}
  )
}
}
}
