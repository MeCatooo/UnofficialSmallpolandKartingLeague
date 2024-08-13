import { take } from 'rxjs';
import { Driver } from '../models/Driver';
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
    var test = new Driver()
    test.Name = "Name"
    this.dataService.writeData(test)
  }

}
