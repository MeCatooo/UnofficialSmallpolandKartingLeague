export class Track {
  Name: string;
  Description: string;
  TrackRecord: number | null = null;
  RecordHolder: string | null = null;
  constructor(name: string, description: string) {
    this.Name = name;
    this.Description = description;
  }
}
