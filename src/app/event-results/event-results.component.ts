import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/Event';
import { RaceResult } from '../models/RaceResult';
import { Result } from '../models/Result';

@Component({
  selector: 'app-event-results',
  templateUrl: './event-results.component.html',
  styleUrls: ['./event-results.component.scss']
})
export class EventResultsComponent implements OnInit {

  @Input() event?: Event;

  constructor() { }

  ngOnInit(): void { }

  isRaceResult(result: Result): boolean {
    return 'StartingPosition' in result && 'QualificationTime' in result;
  }
}
