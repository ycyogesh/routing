import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.scss']
})
export class ComptwoComponent implements OnInit {

  constructor(private route : ActivatedRoute, private navigate : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((parameter)=>{
      console.log("Params",parameter);
    })
  }

}
