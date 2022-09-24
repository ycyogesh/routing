import { Component,OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';

  usersList: any;
  constructor(private appService : AppServiceService){}

  ngOnInit(){
    this.appService.getAllUsers().subscribe((usersList)=>{
      console.log(usersList);

    // this.appService.addUser({"id":5,"name":"yc","email":"yc@mail.com"}).subscribe((result)=>{
    //   console.log(result);
      
    // })
    })
  }
  
}
