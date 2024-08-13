/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { EventResultsService } from './event-results.service';

describe('Service: EventResults', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventResultsService]
    });
  });

  it('should ...', inject([EventResultsService], (service: EventResultsService) => {
    expect(service).toBeTruthy();
  }));
});
