import { Component,OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';

  constructor(private appService : AppServiceService){}

  ngOnInit(){
    this.appService.getAllUsers().subscribe((usersList)=>{
      console.log(usersList);
      
    })
  }
  
}
