import { Result } from "./Result";

export class Driver {
  Name: string;
  LastName: string;
  NickName: string;
  Description: string;
  Id: number;
  Results: Result[];

  constructor(name: string, lastName: string, nickName: string, description: string, Id: number, results: Result[]) {
    this.Name = name;
    this.LastName = lastName;
    this.NickName = nickName;
    this.Description = description;
    this.Id = Id;
    this.Results = results;
  }
}
