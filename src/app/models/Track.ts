export class Track {
  Name: string;
  Description: string;
  BestResult: number | null;
  Events: Event[];
  constructor(name: string, description: string, bestResult: number | null, events: Event[]) {
    this.Name = name;
    this.Description = description;
    this.BestResult = bestResult;
    this.Events = events;
  }
}
