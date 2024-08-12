import { Driver } from "./Driver";
import { Track } from "./Track";

export interface Result {
  Name: string;
  Description: string;
  Id: number;
  Driver: Driver;
  Times: number[];

  BestLap(): number | null;
}
