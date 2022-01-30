import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserState():boolean{
    //authentication process.
    return true
  }
}
