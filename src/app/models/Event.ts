import { Result } from "./Result";
import { Track } from "./Track";

export class Event {
  Id: number;
  Name: string;
  Description: string;
  Date: Date;
  Track: Track;
  BestResult: number | null;
  Results: Result[];

  constructor(id: number, name: string, description: string, date: Date, track: Track, bestResult: number | null, results: Result[]) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.Date = date;
    this.Track = track;
    this.BestResult = bestResult;
    this.Results = results;
  }
}
