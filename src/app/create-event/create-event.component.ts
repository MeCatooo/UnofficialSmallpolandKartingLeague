import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  eventForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),

  })

  constructor() { }

  ngOnInit() {
  }

}
