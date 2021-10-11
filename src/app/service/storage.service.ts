import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public users : User[] = [ ]
  constructor() { }

  
  public register(user: User): void 
  {
    // get array of tasks from local storage
    this.users = JSON.parse(localStorage.getItem('Users') || '[]');
    // push new task to array
    this.users.push(user);
    // insert updated array to local storage
    localStorage.setItem('Users',JSON.stringify(this.users));
    //console.log(localStorage.getItem('Posts') || 'LocaL storage is empty');
  }
  public login(user: User): void 
  {
    
    // get array of tasks from local storage
    this.users = JSON.parse(localStorage.getItem('Users') || '[]');
    // push new task to array
    
    
    localStorage.setItem('Users',JSON.stringify(this.users));
    //console.log(localStorage.getItem('Posts') || 'LocaL storage is empty');
  }
  public logout()
  {
     localStorage.removeItem('userconnected')

  }
 
}
