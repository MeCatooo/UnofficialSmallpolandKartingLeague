import { Driver } from "./Driver";
import { Track } from "./Track";

export interface Result {
  Name: string;
  Description: string;
  Id: number;
  Driver: Driver;
  Track: Track;
  Times: number[];

  BestLap(): number | null;
}
