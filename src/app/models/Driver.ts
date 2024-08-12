import { Result } from "./Result";

export class Driver {
  Name: string;
  LastName: string;
  NickName: string;
  Description: string;
  Id: number;

  constructor(name: string, lastName: string, nickName: string, description: string, Id: number) {
    this.Name = name;
    this.LastName = lastName;
    this.NickName = nickName;
    this.Description = description;
    this.Id = Id;

  }
}
