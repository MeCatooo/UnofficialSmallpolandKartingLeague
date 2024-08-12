import { Result } from "./Result";

export class Event {
  Id: number;
  Name: string;
  Description: string;
  Date: Date;
  Track: string;
  BestResult: number | null;
  Results: Result[];

  constructor(id: number, name: string, description: string, date: Date, track: string, bestResult: number | null, results: Result[]) {
    this.Id = id;
    this.Name = name;
    this.Description = description;
    this.Date = date;
    this.Track = track;
    this.BestResult = bestResult;
    this.Results = results;
  }
}
