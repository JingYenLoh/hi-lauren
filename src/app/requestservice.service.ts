import { Injectable } from '@angular/core';
import { myUserR } from './myUserR';
import { listOfRequest } from './mock-usersR';

@Injectable()
export class RequestserviceService {

  constructor() { }

  getUsers(): myUserR[] {
  return listOfRequest;
  }

  addUser(item: myUserR): void {
  listOfRequest.push(item);
  }

}
