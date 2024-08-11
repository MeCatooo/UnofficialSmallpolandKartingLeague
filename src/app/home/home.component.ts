import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  addTest(){
    this.dataService.createRobot('123', '123', '123')
  }

}
