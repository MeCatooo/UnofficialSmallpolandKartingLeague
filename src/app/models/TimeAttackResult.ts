import { Result } from "./Result";
import { Driver } from "./Driver";
import { Track } from "./Track";

class TimeAttackResult implements Result {
  Name: string;
  Description: string;
  Id: number;
  Driver: Driver;
  Times: number[];

  constructor(name: string, description: string, Id: number, driver: Driver, times: number[]) {
    this.Name = name;
    this.Description = description;
    this.Id = Id;
    this.Driver = driver;
    this.Times = times;
  }

  BestLap(): number | null {
    if (this.Times && this.Times.length > 0) {
      return Math.min(...this.Times);
    }
    return null;
  }
}
