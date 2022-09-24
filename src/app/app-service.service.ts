import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient : HttpClient) { }

  getAllUsers(){
    return this.httpClient.get("http://localhost:3000/users/")
  }
}
