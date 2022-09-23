import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  userId !: Params;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((id)=>{
      console.log(id);
      
      this.userId = id['id']
    })
  }

}
