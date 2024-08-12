import { Result } from "./Result";
import { Driver } from "./Driver";
import { Track } from "./Track";

export class RaceResult implements Result {
  Name: string;
  Description: string;
  Id: number;
  Driver: Driver;
  Track: Track;
  Times: number[];

  constructor(name: string, description: string, Id: number, driver: Driver, track: Track, times: number[]) {
    this.Name = name;
    this.Description = description;
    this.Id = Id;
    this.Driver = driver;
    this.Track = track;
    this.Times = times;
  }

  BestLap(): number | null {
    if (this.Times && this.Times.length > 0) {
      return Math.min(...this.Times);
    }
    return null;  // Return null if there are no lap times
  }
}



